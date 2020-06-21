```
kubectl config use-context minikube
minikube tunnel
kubectl create namespace production
kubectl apply -R -f .
k9s --kubeconfig ~/.kube/config --namespace=production
minikube service node-kit -n production
minikube addons enable ingress
kubectl get pods -n kube-system
kubectl get ingress --namespace=production
sudo nano /etc/hosts
> 172.18.0.2 103cuong.example
```
