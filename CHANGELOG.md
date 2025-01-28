# Changelog

---
## [75.0.0-bb.2] - 2025-01-24

### Changed

- Updated Gluon 0.5.12 -> 0.5.14
- ironbank/sonatype/nexus/nexus (source) 3.75.0-06 -> 3.75.0-06
- registry1.dso.mil/bigbang-ci/devops-tester (source) 1.1.1 -> 1.1.2
- registry1.dso.mil/ironbank/sonatype/nexus/nexus (source) 3.75.0-06 -> 3.75.0-06

## [75.0.0-bb.1] - 2024-12-18

### Changed

- Updated pod labels to use same as deployment labels

## [75.0.0-bb.0] - 2024-12-10

### Changed

- Updated chart to version: 75.0.0-bb.0 | appVersion: 3.75.0-06
- Updated Gluon 0.5.10 -> 0.5.12
- Updated ironbank/sonatype/nexus/nexus (source) 3.74.0-05 -> 3.75.0-06
- Updated registry1.dso.mil/ironbank/redhat/ubi/ubi9-minimal (source) 9.4 -> 9.5
- Updated registry1.dso.mil/ironbank/sonatype/nexus/nexus (source) 3.74.0-05 -> 3.75.0-06

## [74.0.0-bb.0] - 2024-11-12

### Changed

- Updated chart to version: 74.0.0-bb.0 | appVersion: 3.74.0-05
- Updated Gluon 0.5.8 -> 0.5.10
- Updated ironbank/sonatype/nexus/nexus (source) 3.73.0-12 -> 3.74.0-05
- Updated registry1.dso.mil/ironbank/sonatype/nexus/nexus (source) 3.73.0-12 -> 3.74.0-05
- Added the maintenance track annotation and badge

## [73.0.0-bb.1] - 2024-09-17

### Changed

- Refactored realm configuration from under sso configuration. Renamed to realms.

## [73.0.0-bb.0] - 2024-10-17

### Changed

- Updated chart to version: 73.0.0-bb.0 | appVersion: 3.73.0-12
- Updated Gluon 0.5.4 -> 0.5.8
- Updated ironbank/sonatype/nexus/nexus (source) 3.72.0-04 -> 3.73.0-12
- Updated registry1.dso.mil/ironbank/sonatype/nexus/nexus (source) 3.72.0-04 -> 3.73.0-12

## [72.0.0-bb.1] - 2024-09-17

### Changed

- Decoupled realm configuration from sso and license requirements

## [72.0.0-bb.0] - 2024-09-17

### Changed

- Updated chart to version: 72.0.0-bb.0 | appVersion: 3.72.0-04
- Updated Gluon 0.5.3 -> 0.5.4

## [71.0.0-bb.1] - 2024-09-13

### Added

- Updated `.Values.nexus.blobstores.blobstore[]` functionality to store each separate `.blobstore_data` item as a separate Kubernetes `Secret`, more effectively protecting any cloud credentials the user might need to pass to Nexus in order to create blobstores on S3 or Azure.

## [71.0.0-bb.0] - 2024-08-15

### Breaking Changes

- Nexus 3.71.0-06 Removes support for internal OrientDB and replaces it with H2.
- Nexus 3.71.0-06 Removes support for Java 8 and 11 and requires 17+
- OrientDB migration required before upgrading if the internal DB is used. Steps can be found [here](https://help.sonatype.com/en/migrating-to-a-new-database.html).

### Changed

- Updated chart to version: 71.0.0-bb.0 | appVersion: 3.71.0-06
- Updated Gluon 0.5.0 -> 0.5.3

## [70.1.0-bb.0] - 2024-07-19

### Changed

- Updated chart to version: 70.1.0-bb.0 | appVersion: 3.70.1-02
- Updated devops-tester 1.0.0 -> 1.1.1

## [69.0.0-bb.2] - 2024-07-11

### Changed

- Refactor script tests to use IB secured base alpine linux image and devops-tester image

## [69.0.0-bb.1] - 2024-06-26

### Changed

- Removed the allow nothing policy
- Moved the authorization policies
- Updated the istio hardened doc

## [69.0.0-bb.0] - 2024-06-07

### Changed

- Updated chart to version: 69.0.0-bb.0 | appVersion: 3.69.0-02

## [68.1.0-bb.0] - 2024-05-21

### Changed

- Updated chart to version: 68.1.0-bb.0 | appVersion: 3.68.1-02
- Updated Gluon 0.4.9 -> 0.5.0

## [67.1.0-bb.4] - 2024-05-01

### Added

- Templates for Istio Sidecars and ServiceEntries, IstioHardened.md doc, values update

## [67.1.0-bb.3] - 2024-04-29

### Added

- Add support for additional custom network policies through the values yaml

## [67.1.0-bb.2] - 2024-04-24

### Fixed

- Istio Hardening does nothing in package CI
- Fix for bigbang tests
- Remove old test artifacts no longer in use

## [67.1.0-bb.1] - 2024-04-22

### Added

- Add istio hardening to package ci

## [67.1.0-bb.0] - 2024-04-15

### Changed

- Updated chart to version: 67.1.0-bb.0 | appVersion: 3.67.1-01
- Updated Gluon 0.4.7 -> 0.4.9

## [66.0.0-bb.1] - 2024-03-27

### Updated

- Added allow-intranamespace policy
- Added allow-nothing-policy
- Added ingressgateway-authz-policy
- Added monitoring-authz-policy
- Added template for adding user defined policies

## [66.0.0-bb.0] - 2024-03-22

### Changed

- Updated chart to version: 66.0.0-bb.0 | appVersion: 3.66.0-02
- registry1.dso.mil/ironbank/google/go-containerregistry/crane v0.19.0 -> v0.19.1

## [65.0.0-bb.1] - 2024-03-04

### Changed

- Openshift update for deploying Nexus into Openshift cluster

## [65.0.0-bb.0] - 2024-02-19

### Changed

- Updated chart to version: 65.0.0-bb.0 | appVersion: 3.65.0-02
- registry1.dso.mil/ironbank/google/go-containerregistry/crane v0.17.0 -> v0.19.0

## [64.0.0-bb.0] - 2024-01-12

### Changed

- Updated chart to version: 64.0.0-bb.0 | appVersion: 3.64.0-03
- registry1.dso.mil/ironbank/google/go-containerregistry/crane v0.16.1 -> v0.17.0

## [62.0.0-bb.2] - 2023-12-13

### Changed

- Updated ubi8-minimal:8.9 to ubi9-minimal:9.3

## [62.0.0-bb.1] - 2023-11-29

### Changed

- registry1.dso.mil/ironbank/google/go-containerregistry/crane v0.15.2 -> v0.16.1

## [62.0.0-bb.0] - 2023-11-20

### Changed

- Updated ubi8 from 8.8 to 8.9
- Updated chart to version: 62.0.0-bb.0

## [61.0.0-bb.1] - 2023-11-13

### Changed

- Updated chart to version: 61.0.0-bb.1
- Fix broken SAML SSO section

## [61.0.0-bb.0] - 2023-10-24

### Changed

- Updated chart to version: 61.0.0-bb.0 | appVersion: 3.61.0

## [53.1.0-bb.3] - 2023-10-02

### Changed

- Updated chart to version: 53.1.0-bb.2 | appVersion: 3.53.1
- Updated docs to reflect new chart versioning and maintenance
- Removed kptfile from chart

## [53.1.0-bb.2] - 2023-06-06

### Changed

- Updated gluon to 0.4.1 and Cypress to 13.x
- Refactored cypress tests to remove explicit waits

## [53.1.0-bb.1] - 2023-06-06

### Changed

- Updated crane to v0.15.2

## [53.1.0-bb.0] - 2023-05-22

### Changed

- Updated chart to version: 53.1.0-bb.0 | appVersion: 3.53.1

## [52.0.0-bb.0] - 2023-04-06

### Changed

- Updated chart to version: 52.0.0-bb.0 | appVersion: 3.52.0

## [51.0.0-bb.0] - 2023-04-06

### Changed

- Updated chart to version: 51.0.0-bb.0 | appVersion: 3.51.0

## [47.1.0-bb.0] - 2023-02-14

### Changed

- Updated chart to version: 47.1.0-bb.0 | appVersion: 3.47.1

## [45.1.0-bb.0] - 2023-01-26

### Changed

- Updated chart to version: 45.1.0-bb.0 | appVersion: 3.45.1

## [45.0.0-bb.2] - 2022-01-17

### Added

- Added pod and container security context for jobs

## [45.0.0-bb.1] - 2022-01-17

### Changed

- Update gluon to new registry1 location + latest version (0.3.2)

## [45.0.0-bb.0] - 2023-01-11

### Changed

- Updated chart to version: 45.0.0-bb.0 | appVersion: 3.45.0

## [44.0.0-bb.0] - 2022-12-28

### Changed

- Updated chart to version: 44.0.0-bb.0 | appVersion: 3.44.0 | crane version v0.12.1

## [42.0.0-bb.4] - 2022-12-12

### Changed

- Added job for creation of a metrics user for Service Monitor Basic Auth purposes.
- Removed individual dns network policies in favor of standardized dns allow

## [42.0.0-bb.3] - 2022-11-28

### Changed

- Removed metrics exception for istio mTLS STRICT
- Added templating to `serviceMonitor` to enable mTLS metrics scraping

## [42.0.0-bb.2] - 2022-11-02

### Changed

- Updated chart to version: 42.0.0-bb.1 | appVersion: 3.42.0

### Added

- Updated docs/general.md with an external database example
- Added .Values.custom_admin_password

## [42.0.0-bb.1] - 2022-11-16

### Changed

- Updated crane image to `v0.12.0` and ubi8-minimal iamge to `8.7`

## [42.0.0-bb.0] - 2022-10-06

### Changed

- Updated chart to version: 42.0.0-bb.0 | appVersion: 3.42.0

## [41.1.0-bb.6] - 2022-09-26

### Changed

- added securityContext: capabilities: drop: ALL

## [41.1.0-bb.5] - 2022-09-19

### Changed

- Updating registry host VirtualService to use template function to be able to reference domain value.

## [41.1.0-bb.4] - 2022-09-19

### Added

- Added test for CI to push/pull image from nexus docker registry

### Fixed

- Fixed service name in BB jobs

## [41.1.0-bb.3] - 2022-09-19

### Changed

- The curl statements to istio proxy need to be made conditional on isito.enabled and istio.injection in the BigBang blob-storage job.

## [41.1.0-bb.2] - 2022-09-16

### Changed

- Fixed virtual service template.
- Make peerauthentication templates conditional on istio-injection.

## [41.1.0-bb.1] - 2022-09-13

### Changed

- The curl statements to istio proxy need to be made conditional on istio.enabled and istio.injection in the BigBang jobs.

## [41.1.0-bb.0] - 2022-09-06

### Changed

- Updated chart to version: 41.1.0-bb.0 | appVersion: 3.41.1
- Updated gluon dependency to 0.3.0
- Updated dev docs to reflect current status

## [41.0.0-bb.0] - 2022-08-11

### Changed

- Updated chart to version: 41.0.0-bb.0 | appVersion: 3.41.0

## [40.1.0-bb.0] - 2022-07-12

### Changed

- Updated chart to version: 40.1.0-bb.0 | appVersion: 3.40.1
- Updated gluon dependency to 0.2.10

## [38.0.0-bb.3] - 2022-07-05

### Changed

- updated securityContext UID's

## [38.0.0-bb.2] - 2022-06-07

### Changed

- Added improvements to the repository job.  Nexus was failing when a duplicate API POST would occur.
- Added support for creating and updating blob storage from values.yaml

## [38.0.0-bb.1] - 2022-04-27

### Changed

- Add default STRICT mTLS PeerAuthentication policy

## [38.0.0-bb.0] - 2022-04-04

### Changed

- Updated chart to version: 38.0.0-bb.0 | appVersion: 3.38.0
- Updated gluon dependency to 0.2.8

## [37.3.0-bb.2] - 2022-03-30

### Added

- Added Tempo Zipkin Egress Policy

## [37.3.0-bb.1] - 2022-02-17

### Removed

- Removed duplicate ingress block from values.yaml

### Changed

- Changed the bigbang.dev/applicationVersions version to 3.37.3-02

## [37.3.0-bb.0] - 2022-02-16

### Changed

- Updated chart to version: 37.3.0-bb.0 | appVersion: 3.37.3
- Updated gluon dependency to 0.2.7

## [36.0.0-bb.4] - 2022-01-31

### Added

- Update Chart.yaml to follow new standardization for release automation
- Added renovate check to update new standardization

## [36.0.0-bb.3] - 2022-01-14

### Added

- Added network policy for egress for por 443

## [36.0.0-bb.2] - 2022-01-13

### Fixed

- Username key in service monitor

## [36.0.0-bb.1] - 2022-01-05

### Added

- Added saml-egress-dns.yaml for saml job DNS egress access
- Added environment variable option to fix deployment on FIPS enabled nodes

### Modified

- Fixed typo in monitoring.yaml on label name
- Fixed name of environment variable for java JVM options

## [36.0.0-bb.0] - 2021-11-30

### Modified

- upgrade to app version 3.36.0 chart version 36.0.0

## [34.1.0-bb.6] - 2021-11-29

### Modified

- Added ability to specify VirtualService hosts using ` .Values.istio.nexus.hosts ` and setting default as `{{ .Values.hostname }}.{{ .Values.domain }}` in `values.yaml`
- Updating Nexus version.

## [34.1.0-bb.5] - 2021-10-27

### Modified

- Added multi raw repo feature to Nexus.

## [34.1.0-bb.4] - 2021-10-21

### Modified

- Updated cypress test with timeouts.

## [34.1.0-bb.3] - 2021-10-21

### Modified

- Added multi role feature to Nexus.

## [34.1.0-bb.2] - 2021-10-20

### Modified

- Fixed extraLabels indentation

## [34.1.0-bb.1] - 2021-10-20

### Modified

- Fixed java environment var

## [34.1.0-bb.0] - 2021-10-15

### Modified

- Fixing chart versioning.

## [34.1.01-bb.1] - 2021-10-12

### Modified

- Updated cypress tests and test values to run without errors.
- NOTE: Released as `34.1-01-bb.1`

## [34.1.01-bb.0] - 2021-09-13

### Update

- Updated ironbank container because previous version had issues with non-fips nodes
- NOTE: Released as `34.1-01-bb.0`

## [34.0.0-bb.1] - 2021-09-13

### Modified

- Updated values.yaml with examples of auditing/logging containers

## [34.0.0-bb.0] - 2021-09-03

### Modified

- Sync with upstream charts 34.0.0 at <https://github.com/sonatype/helm3-charts.git>
- Version bump to 3.34.0

## [33.1.0-bb.0] - 2021-08-27

### Modified

- Sync with upstream charts 33.1.0 at <https://github.com/sonatype/helm3-charts.git>
- Version bump to 3.33.1
- Increased default cpu resource request and limits

## [29.1.0-bb.9] - 2021-09-01

### Changed

- add map to specify image, tag, and policy in values for proxy and saml jobs

## [29.1.0-bb.8] - 2021-08-23

### Added

- Added resource requests and limits to pods with guaranteed QoS.

## [29.1.0-bb.7] - 2021-07-27

### Fixes

- Fixed extraLabels indentation in all resources that have it.

### Added

- Added extraLabels to Deployment template labels.

## [29.1.0-bb.6] - 2021-06-30

### Added

- Add openshift toggle, conditionally add port 5353 egress. Changing "openshift:" to true in values.yaml will enable.

## [29.1.0-bb.5] - 2021-06-30

### Added

- Network policy to allow prometheus scraping of istio envoy sidecar

## [29.1.0-bb.4]

### Changed

- kube-api network policy toggle
- istio network policy stricter podSelector values

## [29.1.0-bb.3] - 2021-06-08

### Modified

- Modified CI tests to use new library and infrastructure

### Added

- Network policy for helm-tests to save artifacts

## [29.1.0-bb.2]

### Added

- default-deny-all network policy
- istio network policy
- monitoring network policy
