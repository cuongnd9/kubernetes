```
kubectl config use-context minikube
kubectl create -f deployment.yml
kubectl apply -f deployment.yml
minikube service myapp --url
minikube tunnel
kubectl get svc
```
