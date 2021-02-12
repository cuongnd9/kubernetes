#!/usr/bin/env bash

export PROJECT_NAME=the4pet
export CLUSTER_NAME=${PROJECT_NAME}-the4pet

gcloud container clusters resize $CLUSTER_NAME --num-nodes=0
