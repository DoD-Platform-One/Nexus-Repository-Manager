#!/bin/bash
set -ex

export HOME=/test

echo "[+] Copy r1 auth to writable file for multi-auth..."
cat /.docker/auth.json > /test/auth.json

echo "[+] Login to nexus"
skopeo login --tls-verify=false --authfile=/test/auth.json ${docker_host} -u ${docker_user} -p ${docker_password}

echo "[+] Copy image from registry1 to Nexus..."
skopeo copy --dest-tls-verify=false --authfile=/test/auth.json docker://registry1.dso.mil/ironbank/opensource/alpinelinux/alpine:latest docker://${docker_host}/alpine:latest

echo "[+] List tags on nexus repository..."
skopeo list-tags --tls-verify=false --authfile=/test/auth.json docker://${docker_host}/alpine

echo "All tests complete!"
