# Changelog

---
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
- Sync with upstream charts 34.0.0 at https://github.com/sonatype/helm3-charts.git
- Version bump to 3.34.0

## [33.1.0-bb.0] - 2021-08-27
### Modified
- Sync with upstream charts 33.1.0 at https://github.com/sonatype/helm3-charts.git
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
