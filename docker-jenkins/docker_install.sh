#!/bin/sh
apt-get update && \
apt-get -y install apt-transport-https \
  ca-certificates \
  curl \
  gnupg2 \
  zip \
  unzip \
  software-properties-common && \
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add- && \
add-apt-repository \
"deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable" && \
apt-get update && \
apt-get -y install docker-ce