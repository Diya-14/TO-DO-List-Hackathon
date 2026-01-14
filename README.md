# Todo AI Chatbot — Hackathon Phase IV

## Project Overview
This project is a **cloud-native Todo AI Chatbot** that evolved from:
1. Console Todo App (Phase I)
2. Full-Stack Web App (Phase II)
3. AI Chatbot with natural language commands (Phase III)
4. Local Kubernetes Deployment (Phase IV)

## Phase IV: Local Kubernetes Deployment

### Deployment Approach
- Backend (FastAPI) and Frontend (Next.js) are **containerized** with Docker.
- **Kubernetes YAMLs** and **Helm charts** are prepared for cloud-native deployment.
- Stateless architecture ensures **scalability** and **resilience**.
- **AIOps analysis** demonstrates health monitoring, resource optimization, and failure handling.

### Tools & Architecture
- Containerization: Docker (Gordon AI-assisted)
- Orchestration: Minikube (local Kubernetes)
- Helm Charts for deployment packaging
- AI DevOps: kubectl-ai, Kagent (analysis & optimization)
- Database: Neon Serverless PostgreSQL
- Authentication: Better Auth (JWT)
- AI logic: OpenAI Agents SDK + MCP tools

### Project Structure

```text
TO-DO-List-Hackathon/
├── todo-app/
│   ├── Dockerfile                  # Production Dockerfile for Next.js Frontend
│   ├── .dockerignore               # Docker build exclusions
│   ├── backend/
│   │   ├── Dockerfile              # Production Dockerfile for FastAPI Backend
│   │   ├── requirements.txt        # Python dependencies
│   │   └── app/                    # Backend source code
│   └── src/                        # Frontend source code
│
├── k8s/                            # Raw Kubernetes Manifests
│   ├── backend-deployment.yaml     # Backend Pods & Config
│   ├── backend-service.yaml        # Internal ClusterIP Service
│   ├── frontend-deployment.yaml    # Frontend Pods & Env Vars
│   └── frontend-service.yaml       # External LoadBalancer Service
│
├── helm/                           # Helm Chart for Package Management
│   └── todo-chatbot/
│       ├── Chart.yaml              # Chart Metadata
│       ├── values.yaml             # Default Configuration (Images, Ports)
│       └── templates/              # Templated K8s Manifests
│
├── docs/
│   └── phase4-aiops.md             # AIOps Strategy & Cluster Analysis Report
│
└── specs/
    └── phase4-deployment.md        # Phase IV Requirements & Goals
```