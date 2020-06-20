```
kubectl config use-context minikube
minikube tunnel
kubectl create namespace production
kubectl apply -R -f .
k9s --kubeconfig ~/.kube/config --namespace=production
minikube service node-kit -n production
```
