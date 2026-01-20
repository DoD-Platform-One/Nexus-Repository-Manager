# NXRM Keycloak Configuration

**SAML/SSO integration is a *Pro* license feature.**

This guide focuses on the SAML Integration for Nexus. Starting in version 3.86, OIDC is also supported.

BigBang requires/prefers SAML/SSO integration out of the box; unfortunately, the upstream Helm chart did not have a solution at the drafting of this integration. To achieve our goal, we added a Kubernetes job that handles the SAML/SSO integration as part of the NXRM Helm installation. To enable this functionality, ensure `sso.enabled` is set to `true`; you will additionally require a Keycloak instance, the IDP metadata file, along with other parameters you may define in `sso.idp_data`.

Our implementation closely follows the [Sonatype SAML Integration](https://support.sonatype.com/hc/en-us/articles/1500000976522-SAML-integration-for-Nexus-Repository-Manager-Pro-3-and-Nexus-IQ-Server-with-Keycloak) documentation.

## Download Keycloak IdP Metadata

 Run the following command to retrieve SAML Metadata. Save this value and use it for `addons.nexusRepositoryManager.values.sso.idp_data.idpMetadata` in future steps. 

```bash
curl https://your.keycloak.url/auth/realms/your-realm/protocol/saml/descriptor
```

Alternatively, you could obtain the same data in the browser using the following steps

1. Login to the Keycloak Admin Console i.e. <KeycloakURL>/auth/admin/master/console/
1. Navigate to your realm of choice by clicking *Manage Realms* on the upper left side of the page. 
1. From the left-side menu, click on *Realm Settings*.
1. From the General tab, right-click on *SAML 2.0 Identity Provider Metadata* under the Endpoints field and save the link/file locally. This is the Keycloak IdP metadata that will be needed when configuring NXRM/IQ.

## Configure Users and Groups in Keycloak

1. To add groups, via the left-side menu, under *Manage*, select *Groups* and then *New*. If the nexus group already exists, you can skip to step 3.
1. In the next screen enter a group name (such as *Neuxs*) and select *Save*. This will create a group that will be used for role mapping on the NXRM/IQ side.
1. To add users, via the left-side menu, under *Manage*, select *Users* and then *Add user*.
1. In the next screen, enter a *username*, First Name, Last Name* and *Email*, then click *Save*.
1. Once saved, the user will be created but will not have a default password set or be assigned to any groups. To set the password, click on the *Credentials* tab, set a password and click *Reset Password*.
1. To add the user to a group, click on the Groups tab and from the *Available Groups* field enter the name of the group created in Step 5 and click *Join*.

## NXRM Configuration

```
# values.yaml
nexus:
  properties:
    override: true
    data:
      "nexus.security.saml.enabled": true
realms
  - "NexusAuthenticatingRealm"
  - "SamlRealm"
sso:
  enabled: false
  idp_data:
    entityId: "{{ base_url }}/service/rest/v1/security/saml/metadata" # The client ID in keycloak must match this
    usernameAttribute: "username"
    firstNameAttribute: "firstName"
    lastNameAttribute: "lastName"
    emailAttribute: "email"
    groupsAttribute: "groups"
    validateResponseSignature: true
    validateAssertionSignature: true
    idpMetadata: 'xml metadata obtained in the "Download Keycloak IDP Metadata" step, wrapped in single quotes'
  role:
    id: "nexus"
    name: "nexus"
    description: "nexus group"
    privileges:
      - "nx-all"
    roles:
      - "nx-admin"

# Retrieve a list of all available privileges:
# curl -X GET "https://{{ base_url }}/service/rest/v1/security/privileges" -H "accept: application/json"
```

1. Obtain a copy of the NXRM 3 SAML Metadata by opening the Entity ID URI i.e. <NXRMBaseURL>/service/rest/v1/security/saml/metadata and saving the XML to file

Alternatively, you could use the following commands to download the XML file

```bash
# Get default admin password for Nexus. Skip this if you changed the password. You may need to omit a trailing '%' character
kubectl get secret -n nexus-repository-manager nexus-repository-manager-secret -o jsonpath='{.data.admin\.password}' | base64 -d

# Obtain Nexus SAML Metadata
curl -u admin:your_nexus_password -X GET https://your.nexus.url/service/rest/v1/security/saml/metadata -o nexus-metadata.xml
```

## Configure Keycloak - Client Config and Attribute Mapping
*If a Nexus client already exists, skip to [Updating X509 Certificates](#updating-x509-certificates)*

1. Further to configuring the NXRM/IQ side, to import the NXRM or IQ SAML metadata into Keycloak, via the Keycloak Admin Console select Clients from the left-side menu, then click *Import Client*.
1. In the Import Client screen, click *Browse* from the Resource File, and upload the NXRM or IQ SAML metadata that was obtained when configuring the NXRM/IQ in [NXRM Configuration](#nxrm-configuration).  Set the client ID to whatever you like, then click *Save*.
1. After saving, in the next screen, set the Valid Redirect URI to `https://your.nexus.url/saml`. Click *Save*.
1. If in the Configure Nexus Applications section, the *Validate Response Signature* and *Validate Assertion Signature* fields are set to "Default" or "True", then in the Clients → Settings tab ensure that the *Sign Documents* and *Sign Assertions* fields are enabled.

Once the client has been created and the Client SAML Endpoint has been set, an attribute for each of the mappable fields that were configured in the Configure Nexus Applications section i.e. username, firstName, lastName, email and groups, will need to be created.

1. To map an attribute, select the Mappers tab and then click on 'Create'.
1. Create a mapper for each of the mappable attributes with the values shown here:

**Note: You must turn off `Full group path` when generating the `groups` mapper.**

  | Name        | Mapper Type   | Property  | Friendly Name | SAML Attribute Name | SAML Attribute NameFormat |
  |-------------|---------------|-----------|---------------|---------------------|---------------------------|
  | username    | User Property | username  | username      | username            | Basic                     |
  | First Name  | User Property | firstName | firstName     | firstName           | Basic                     |
  | Last Name   | User Property | lastName  | lastName      | lastName            | Basic                     |
  | Email       | User Property | email     | email         | email               | Basic                     |
  | Groups      | Group list    | groups    | groups        | *N/A*               | Basic                     |

### Updating X509 Certificates
If your Keycloak client is already configured but you have a new Nexus deployment you must update the Nexus x509 certificates in the Keycloak client. This may also resolve responses where Keycloak returns an invalid request error when trying to log in.

- Get the Nexus SAML Metadata from the Nexus Admin UI after logging in as ```admin```  
      <https://your.nexus.url/service/rest/v1/security/saml/metadata>


If you have `xq` installed on your system, you can use the following commands to generate the certificates quickly

```bash
# Download the nexus metadata to your local system
curl -u admin:your_nexus_password -X GET https://your.nexus.url/service/rest/v1/security/saml/metadata -o nexus-metadata.xml

# Create the signing key
echo -e "-----BEGIN CERTIFICATE-----\n$(xq -x '//md:KeyDescriptor[@use="signing"]/ds:KeyInfo/ds:X509Data/ds:X509Certificate' nexus-metadata.xml | sed 's/ //g')\n-----END CERTIFICATE-----" | fold -w 64 > signing.pem

# Create the encryption key
echo -e "-----BEGIN CERTIFICATE-----\n$(xq -x '//md:KeyDescriptor[@use="encryption"]/ds:KeyInfo/ds:X509Data/ds:X509Certificate' nexus-metadata.xml | sed 's/ //g')\n-----END CERTIFICATE-----" | fold -w 64 > encryption.pem
```

- If you don't have `xq` installed on your system you can use the following commands to generate the certificate

```bash
vi signing.txt

-----BEGIN CERTIFICATE-----
paste single line Nexus x509 signing certificate here 
-----END CERTIFICATE-----

# Make a valid pem file with proper wrapping at 64 characters per line

fold -w 64 signing.txt > signing.pem

# Repeat the same steps again with the encryption key
vi encryption.txt

-----BEGIN CERTIFICATE-----
paste single line Nexus x509 encryption certificate here 
-----END CERTIFICATE-----

fold -w 64 encryption.txt > encryption.pem
```

- In Keycloak, navigate back to the Nexus client and click on the "Keys" tab. 

For the signing key, click "Import Key" and set the Archive Type to "Certificate PEM". For the "Import File" selection, browse for `signing.pem` from your system and click "Import"

For the encrpytion key, click "Import Key" and set the Archive Type to "Certificate PEM". For the "Import File" selection, browse for `encryption.pem` from your system and click "Import"
