# k8s

k8s 🤝 4pet

## Required tools

- [helm](https://helm.sh/docs/intro/install/)
```sh
$ curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
$ chmod 700 get_helm.sh
$ ./get_helm.sh
```
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [gcloud](https://cloud.google.com/sdk/docs/quickstart)
- [k9s](https://github.com/derailed/k9s)

## Documents

- [Managing Apps on GKE Using Helm](https://thecloud.christmas/2019/16)

## Quick steps

### To startup and deploy helm:
```bash
sh startup.sh
sh add_helm.sh
```

### Steps:

```bash
helm package simple-node-app
helm install simple-node-app helm-0.2.0.tgz
kubectl logs simple-node-app-helm-577569695f-hcrsz
kubectl get pods
kubectl get svc
```

### To Teardown:
```bash
sh teardown.sh
```
