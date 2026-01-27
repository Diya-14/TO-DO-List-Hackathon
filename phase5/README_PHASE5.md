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

## 🐳 Step 2: Multi-Node Cluster with Kind (Docker-based Alternative)

If you cannot use Oracle Cloud (due to credit card requirements), you can simulate a production-grade multi-node cluster locally using **Kind** (Kubernetes in Docker). This runs multiple Kubernetes nodes as Docker containers.

### 1. Install Kind
```powershell
# Using Chocolatey
choco install kind
# OR Using Winget
winget install Kubernetes.kind
```

### 2. Create a Multi-Node Configuration
Create a file named `kind-config.yaml`:
```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
- role: worker
- role: worker
```

### 3. Launch the Cluster
Run this from the project root:
```powershell
.\kind.exe create cluster --name todo-cluster --config phase5/kind-config.yaml
```

### 4. Deploy Infrastructure (Same as Step 1)
Kind uses your local Docker images, but you may need to "load" them into the cluster if you build them locally:
```powershell
# Load images if built locally
kind load docker-image your-image-name:latest --name todo-cluster

# Create Secrets
kubectl create secret generic backend-secrets --from-literal=SECRET_KEY="your-super-secret-key-here"

# Deploy Dapr & Kafka
helm upgrade --install dapr dapr/dapr --version=1.11.0 --namespace dapr-system --create-namespace --wait
helm install strimzi-kafka-operator strimzi/strimzi-kafka-operator --namespace kafka --create-namespace --wait

# Apply K8s manifests
kubectl apply -f phase5/k8s/kafka-cluster.yaml -n kafka
kubectl apply -f phase5/k8s/redis.yaml
kubectl apply -f phase5/k8s/dapr-pubsub-kafka.yaml
kubectl apply -f phase5/k8s/dapr-statestore-redis.yaml
kubectl apply -f phase5/k8s/deploy-backend.yaml
kubectl apply -f phase5/k8s/deploy-frontend.yaml
kubectl apply -f phase5/k8s/deploy-audit.yaml
kubectl apply -f phase5/k8s/deploy-reminder.yaml
```

### 5. Access the Application
Since Kind runs in Docker, you still use `port-forward` for local access:
```powershell
kubectl port-forward svc/frontend-service 3000:80
```

---

## ✅ Phase V Completion
- [x] Microservices Architecture
- [x] Kafka (Strimzi) Integration
- [x] Dapr (PubSub, State)
- [x] Minikube Support
- [x] Multi-node Kind Support (Alternative to Cloud)
- [x] Docker Hub Integration