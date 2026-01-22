# 🚀 Smart AI Todo List — Hackathon Master Project

## 📌 Project Overview
This project is an advanced **Cloud-Native, AI-Powered Task Management System**. It has evolved through five distinct engineering phases, transforming from a simple console application into a complex microservices architecture running on Kubernetes with Event-Driven logic.

**Core Features:**
*   **AI Chat Integration**: Talk to your task list using Gemini/OpenAI (Context-aware).
*   **Full-Stack UI**: Modern Next.js Frontend with Material/Indigo aesthetics.
*   **Robust Backend**: FastAPI (Python) server handling logic and Database ORM.
*   **Event-Driven Architecture**: Kafka & Dapr integration for asynchronous events.
*   **DevOps Pipeline**: Dockerized services, CI/CD with GitHub Actions, and Kubernetes/Helm deployments.

---

## 🏗️ Architecture & Evolution

### **Phase I: The Foundation**
*   **Goal**: Basic Console & Web App.
*   **Tech**: Python, In-memory lists.

### **Phase II: Full Stack Web App**
*   **Goal**: Create a usable UI and API.
*   **Tech**: Next.js (React), FastAPI, REST API.

### **Phase III: Database & Security**
*   **Goal**: Persistence and Auth.
*   **Tech**: PostgreSQL (Neon Serverless), JWT Authentication, Secure Password Hashing.

### **Phase IV: Containerization & Basic DevOps**
*   **Goal**: Docker & Basic Kubernetes.
*   **Tech**: Dockerfiles, Helm Charts, Minikube Deployment, AIOps Monitoring.
*   **Artifacts**: `helm/`, `k8s/` folders.

### **Phase V: Advanced Cloud & Microservices (Current)**
*   **Goal**: Event-Driven Architecture, Sidecars, and Cloud Deployment.
*   **Tech**: 
    *   **Kubernetes (OKE/Minikube)**: Production orchestration.
    *   **Dapr (Distributed Application Runtime)**: For Pub/Sub, State Management, and Service Invocation.
    *   **Kafka (Strimzi)**: Enterprise-grade message broker.
    *   **Microservices**: Added `audit-service` (Subscriber) and `reminder-service` (Publisher).
    *   **CI/CD**: GitHub Actions for automated Docker builds.

---

## 📂 Complete Project Structure

Here is the breakdown of files and folders created across all phases:

```text
TO-DO-List-Hackathon/
├── .github/workflows/          # CI/CD Pipelines
│   └── phase5-cicd.yaml        # Automated Build & Push to Docker Hub
│
├── todo-app/                   # Main Application Source
│   ├── src/                    # Next.js Frontend Code
│   ├── backend/                # FastAPI Backend Source
│   │   ├── app/                # API Routes, Models, Logic
│   │   ├── Dockerfile          # Backend Container Config
│   │   └── fly.toml            # Fly.io Deployment Config
│   ├── Dockerfile              # Frontend Container Config
│   ├── next.config.ts          # Frontend Proxy Configuration
│   └── vercel.json             # Vercel Deployment Config
│
├── phase5/                     # [NEW] Advanced Cloud Architecture
│   ├── k8s/                    # Kubernetes Manifests for Phase V
│   │   ├── kafka-cluster.yaml  # Strimzi Kafka Definition
│   │   ├── redis.yaml          # Redis State Store
│   │   ├── dapr-*.yaml         # Dapr Components (PubSub/State)
│   │   └── deploy-*.yaml       # Service Deployments (Audit/Reminder/App)
│   ├── services/               # New Microservices Source Code
│   │   ├── audit-service/      # Python Service: Listens to Kafka events
│   │   └── reminder-service/   # Python Service: Publishes Cron events
│   └── README_PHASE5.md        # Detailed instructions for Phase V
│
├── k8s/                        # Basic Phase IV Kubernetes Files
│   ├── backend-deployment.yaml
│   └── frontend-service.yaml
│
├── helm/                       # Helm Charts
│   └── todo-chatbot/           # Packaged App for K8s
│
└── docs/                       # Documentation
    └── phase4-aiops.md         # AIOps Report
```

---

## 🛠️ How to Run

### Option 1: Standard Development (Local)
1.  **Backend**:
    ```bash
    cd todo-app/backend
    python -m venv venv
    source venv/bin/activate  # or venv\Scripts\activate on Windows
    pip install -r requirements.txt
    uvicorn app.main:app --reload
    ```
2.  **Frontend**:
    ```bash
    cd todo-app
    npm install
    npm run dev
    ```

### Option 2: Docker Compose (Phase IV)
```bash
docker-compose up --build
```

### Option 3: Kubernetes & Dapr (Phase V - Advanced)
*Requires Minikube, Helm, and kubectl.*

1.  **Start Minikube**:
    ```bash
    minikube start --cpus 4 --memory 8192
    ```
2.  **Install Infrastructure (Dapr & Kafka)**:
    *(See `phase5/README_PHASE5.md` for exact Helm commands)*
3.  **Deploy Services**:
    ```bash
    kubectl apply -f phase5/k8s/
    ```
4.  **Access App**:
    ```bash
    kubectl port-forward svc/frontend-service 3000:80
    ```

---

## ☁️ Cloud Deployments

*   **Frontend**: Deployed on **Vercel** (Linked to GitHub).
*   **Backend**: Deployed on **Fly.io** (Production PostgreSQL on Neon).
*   **Cluster**: Deployed on **Oracle Kubernetes Engine (OKE)** (Always Free Tier) using the configurations in `phase5/`.

---

## 👨‍💻 Author
**Diya Iqbal**
*   **Docker Hub**: [diyaiqbal14](https://hub.docker.com/u/diyaiqbal14)
*   **GitHub**: [Diya-14/TO-DO-List-Hackathon](https://github.com/Diya-14/TO-DO-List-Hackathon)
