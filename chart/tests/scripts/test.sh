#!/bin/bash
set -ex

export HOME=/test
export RAND=$RANDOM

echo "[+] Copy r1 auth to writable file for multi-auth..."
cat /.docker/auth.json >/test/auth.json

# Add a long delay to allow Nexus to fully initialize and create the Docker registry
echo "[+] Waiting 60 seconds for Nexus to fully initialize..."
sleep 60

echo "[+] Waiting for Docker registry to be ready..."
url="http://${docker_host}/v2/"
if [[ ${docker_host_tls_enabled} == "true" ]]; then
    url="https://${docker_host}/v2/"
fi

for i in $(seq 1 120); do
    HTTP_CODE=$(curl -sL -o /dev/null -w "%{http_code}" -m 5 "${url}")
    echo "Attempt $i: HTTP Code $HTTP_CODE"
    if [[ "$HTTP_CODE" == "401" ]]; then
        echo "Docker registry is ready (HTTP code: $HTTP_CODE). Proceeding with login."
        break
    elif [ $i -eq 120 ]; then
        echo "Timed out waiting for Docker registry to be ready. Last HTTP code: $HTTP_CODE"
        exit 1
    else
        echo "Docker registry not ready yet, retrying in 5 seconds... (attempt $i/120)"
        sleep 5
    fi
done

echo "[+] Login to nexus"
# Add retries for the login step
for i in $(seq 1 20); do
    if skopeo login --authfile=/test/auth.json ${docker_host} -u ${docker_user} -p ${docker_password}; then
        echo "Successfully logged in to Docker registry."
        break
    elif [ $i -eq 20 ]; then
        echo "Failed to login to Docker registry after 20 attempts."
        exit 1
    else
        echo "Login failed, retrying in 5 seconds... (attempt $i/20)"
        sleep 5
    fi
done

echo "[+] Copy image from registry1 to Nexus..."
skopeo copy --dest-tls-verify=${docker_host_tls_enabled} --authfile=/test/auth.json docker://registry1.dso.mil/ironbank/opensource/alpinelinux/alpine:latest docker://${docker_host}/alpine:${RAND}

echo "[+] List tags on nexus repository..."
skopeo list-tags --tls-verify=${docker_host_tls_enabled} --authfile=/test/auth.json docker://${docker_host}/alpine

echo "[+] Clean up images on nexus repository..."
skopeo delete --tls-verify=${docker_host_tls_enabled} --authfile=/test/auth.json docker://${docker_host}/alpine:${RAND}

echo "All tests complete!"
