# AKS

## Steps

### Login

```sh
az login
```

### Create a resource group

```sh
az group create --location southeastasia --name 4pet.social
```

*[Azure regions](https://azure.microsoft.com/en-us/global-infrastructure/regions/)*

### Pick an available Kubernetes version by location

```sh
az aks get-versions --location southeastasia
```

### Create a cluter

```sh
az aks create --resource-group 4pet.social --name 4pet-cluster --node-count 1 --kubernetes-version 1.18.1
```

### Confirm that the AKS Cluster Exists

```sh
az aks show --name 4pet-cluster --resource-group 4pet.social
```

### Configure the Kubernetes Configuration (Kubeconfig) Locally

```sh
az aks get-credentials --name 4pet-cluster --resource-group 4pet.social
```

### Deploy an application

```sh
kubectl apply -f https://raw.githubusercontent.com/103cuong/kubernetes/master/nodejs/k8s/deployment.yaml
kubectl apply -f https://raw.githubusercontent.com/103cuong/kubernetes/master/nodejs/k8s/service.yaml
kubectl apply -f https://raw.githubusercontent.com/103cuong/kubernetes/master/nodejs/k8s/ingress.yaml
```

## Documents

- [Install Azure CLI on macOS](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-macos?view=azure-cli-latest)
- [Install Azure CLI with apt](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-apt?view=azure-cli-latest)
- [Zero to Kubernetes on Azure](https://medium.com/ingeniouslysimple/zero-to-kubernetes-on-azure-a2628b5a2dc4)
- [How to Deploy an Azure Kubernetes Cluster with AKS](https://logz.io/blog/azure-kubernetes-cluster-aks/)
