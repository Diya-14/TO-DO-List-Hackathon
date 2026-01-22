# Phase V: Advanced Cloud Deployment (Complete)

## 📌 Overview
This phase implements a Microservices architecture on Kubernetes using Dapr and Kafka.

**Services:**
- **Frontend**: Next.js UI
- **Backend**: FastAPI
- **Audit Service**: Subscribes to events (Kafka) via Dapr.
- **Reminder Service**: Publishes recurring events via Dapr.

**Infrastructure:**
- **Kubernetes**: Minikube (Local), OKE (Cloud)
- **Message Broker**: Kafka (Strimzi Operator)
- **Sidecar**: Dapr
- **State Store**: Redis

## 🚀 Step 1: Local Deployment (Minikube)

### Prerequisites
- Docker Desktop
- Minikube
- Helm
- kubectl

### 1. Start Minikube
```powershell
minikube start --cpus 4 --memory 8192 --driver=docker
minikube addons enable ingress
minikube addons enable metrics-server
```

### 2. Install Dapr on Kubernetes
```powershell
helm repo add dapr https://dapr.github.io/helm-charts/
helm repo update
helm upgrade --install dapr dapr/dapr --version=1.11.0 --namespace dapr-system --create-namespace --wait
```

### 3. Install Strimzi (Kafka Operator)
```powershell
helm repo add strimzi https://strimzi.io/charts/
helm install strimzi-kafka-operator strimzi/strimzi-kafka-operator --namespace kafka --create-namespace --wait
```

### 4. Deploy Infrastructure
```powershell
# Create Kafka Cluster
kubectl apply -f phase5/k8s/kafka-cluster.yaml -n kafka
kubectl wait kafka/my-cluster --for=condition=Ready --timeout=300s -n kafka 

# Create Redis (State Store)
kubectl apply -f phase5/k8s/redis.yaml

# Create Dapr Components
kubectl apply -f phase5/k8s/dapr-pubsub-kafka.yaml
kubectl apply -f phase5/k8s/dapr-statestore-redis.yaml
```

### 5. Deploy Applications
```powershell
kubectl apply -f phase5/k8s/deploy-backend.yaml
kubectl apply -f phase5/k8s/deploy-frontend.yaml
kubectl apply -f phase5/k8s/deploy-audit.yaml
kubectl apply -f phase5/k8s/deploy-reminder.yaml
```

### 6. Verify Deployment
```powershell
kubectl get pods
# Check Dapr sidecars are injected (2/2 containers in pod)
kubectl get pods -l app=backend
```

### 7. Access Application
To make the Frontend (Browser) talk to the Backend, we need to expose both locally:

```powershell
# Terminal 1: Expose Frontend
kubectl port-forward svc/frontend-service 3000:80

# Terminal 2: Expose Backend (so browser can hit localhost:8000)
kubectl port-forward svc/backend-service 8000:8000

# Open http://localhost:3000
```

---

## ☁️ Step 2: Oracle Cloud (OKE) Deployment (Always Free)

### 1. Create Cluster
- Go to Oracle Cloud Console > Developer Services > Kubernetes Clusters (OKE).
- Click **Create Cluster** > **Quick Create**.
- Choose **VM.Standard.A1.Flex** (ARM) if available (Always Free) or **VM.Standard.E2.1.Micro**.
- **Important**: Creating OKE requires VCN and Internet Gateway (Quick Create handles this).

### 2. Connect to Cluster
- Click **Access Cluster** in the console.
- Copy the `oci ce cluster create-kubeconfig` command.
- Run it in your local terminal.

### 3. Deploy
(Same commands as Minikube)
```powershell
helm upgrade --install dapr dapr/dapr --version=1.11.0 --namespace dapr-system --create-namespace --wait
helm install strimzi-kafka-operator strimzi/strimzi-kafka-operator --namespace kafka --create-namespace --wait
kubectl apply -f phase5/k8s/kafka-cluster.yaml -n kafka
kubectl apply -f phase5/k8s/redis.yaml
kubectl apply -f phase5/k8s/dapr-pubsub-kafka.yaml
kubectl apply -f phase5/k8s/dapr-statestore-redis.yaml
kubectl apply -f phase5/k8s/deploy-backend.yaml
kubectl apply -f phase5/k8s/deploy-frontend.yaml
kubectl apply -f phase5/k8s/deploy-audit.yaml
kubectl apply -f phase5/k8s/deploy-reminder.yaml
```

### 4. Access External IP
```powershell
kubectl get svc frontend-service
# Use the External-IP provided by the OCI Load Balancer.
```

---

## ✅ Phase V Completion
- [x] Microservices Architecture
- [x] Kafka (Strimzi) Integration
- [x] Dapr (PubSub, State)
- [x] Minikube Support
- [x] OKE Support
- [x] Docker Hub Integration