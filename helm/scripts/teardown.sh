#!/usr/bin/env bash

echo "preparing..."
export GCLOUD_PROJECT=$(gcloud config get-value project)
export INSTANCE_REGION=asia-southeast1
export INSTANCE_ZONE=asia-southeast1-a
export PROJECT_NAME=the4pet
export CLUSTER_NAME=${PROJECT_NAME}-the4pet
export CONTAINER_NAME=${PROJECT_NAME}-the4pet

echo "setup"
gcloud config set compute/zone ${INSTANCE_ZONE}

echo "remove cluster"
gcloud container clusters delete ${CLUSTER_NAME} --quiet
gcloud container clusters list

echo "remove container"
gcloud container images delete gcr.io/${GCLOUD_PROJECT}/${CONTAINER_NAME} --force-delete-tags --quiet

echo "cleanup files"
rm $(helm home) -rf
rm ca.* tiller.* helm.*
