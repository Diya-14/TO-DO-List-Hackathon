# Phase IV: AI-Assisted Operations (AIOps)

This document describes the AI-driven operations strategy for the Todo AI Chatbot deployed on Kubernetes.

## 🤖 AI Agent Roles in Operations

In this phase, AI agents transition from code generators to operational assistants.

### 1. AI-Driven Troubleshooting
- **Log Analysis:** AI agents analyze container logs from `kubectl logs` to identify root causes of crashes (e.g., database connection timeouts or OpenAI API rate limits).
- **Metric Interpretation:** Agents monitor CPU and memory usage to suggest optimal resource limits in `values.yaml`.

### 2. Chatbot-Integrated DevOps
- **Deployment via Chat:** The Chatbot UI includes a "DevOps Mode" where engineers can request status updates:
  - *"Agent, what is the status of the backend pods?"*
  - *"Agent, scale the frontend to 3 replicas."*
- **Automated Rollbacks:** If the AI detects a high error rate after a new deployment, it can suggest or trigger a `helm rollback`.

### 3. Predictive Scaling
- **Load Prediction:** Using historical task volume, the AI predicts peak usage times and scales the Kubernetes replicas proactively using a Horizontal Pod Autoscaler (HPA) driven by custom AI metrics.

## 🛠️ Operational Workflow

1. **Monitor:** Prometheus and Grafana collect system metrics.
2. **Analyze:** A specialized "SRE Agent" scans metrics and logs.
3. **Act:** The agent provides actionable CLI commands or Helm updates to the human operator.
4. **Learn:** Post-mortem analysis is fed back into the AI to improve future responses.

## ✅ Goal
Achieve a "self-healing" cluster where the AI detects, diagnoses, and suggests fixes for 80% of common operational issues.

---

# 📊 Kubernetes Cluster Analysis Report (Minikube)

## 1. Health Check Summary
The system currently consists of stateless containers running on a single-node Minikube cluster.

*   **Pods:** All pods should show a status of `Running` with `1/1` containers ready.
    *   `backend`: Handles API requests and database interactions.
    *   `frontend`: Serves the Next.js UI.
*   **Services:**
    *   `backend-service`: Internal `ClusterIP` connects frontend to backend.
    *   `frontend-service`: External `LoadBalancer` (or `NodePort` in Minikube) exposes UI to users.
*   **Deployments:** Ensures desired replica counts match actual running pods.

## 2. Scaling Suggestions
*   **FastAPI Backend:**
    *   *Strategy:* CPU-bound during intensive logic, I/O-bound during DB/OpenAI calls.
    *   *Recommendation:* Start with **2 replicas** for high availability. Enable Horizontal Pod Autoscaler (HPA) to scale up to 5 replicas if CPU usage > 70%.
*   **Next.js Frontend:**
    *   *Strategy:* Generally lightweight serving static assets and SSR.
    *   *Recommendation:* **2 replicas** are sufficient for reliability during updates. Scale based on memory usage if traffic spikes.

## 3. Resource Optimization
Docker containers in Kubernetes need explicit boundaries to prevent one service from crashing the node.

*   **Backend (Python/FastAPI):**
    *   **Requests:** `cpu: 200m`, `memory: 256Mi` (Guaranteed resources)
    *   **Limits:** `cpu: 500m`, `memory: 512Mi` (Prevents runaway processes)
*   **Frontend (Node/Next.js):**
    *   **Requests:** `cpu: 200m`, `memory: 256Mi`
    *   **Limits:** `cpu: 500m`, `memory: 512Mi`

## 4. Failure Handling Recommendations
To ensure the app survives crashes without human intervention:

*   **Liveness Probes:** Configure `/health` endpoints. If a pod freezes, Kubernetes will restart it automatically after 3 failed checks.
*   **Readiness Probes:** Prevent traffic from hitting a pod until it is fully started (e.g., waiting for database connection).
*   **Rolling Updates:** Set `maxUnavailable: 1`. This ensures at least one pod is always running during a deployment update, preventing downtime.

## 5. Recovery Procedures
If a service fails, follow these automated or manual recovery steps:

1.  **Pod Crash:**
    *   *Action:* Kubernetes automatically restarts crashed pods.
    *   *Debug:* Run `kubectl logs -l app=backend --tail=50` to see the error (e.g., missing API key).
2.  **Service Unreachable:**
    *   *Action:* Check internal DNS.
    *   *Debug:* Run `kubectl get svc` to verify ports. Ensure `backend-service` name matches `NEXT_PUBLIC_API_URL`.
3.  **Deployment Stuck:**
    *   *Action:* Rollback to the previous working version.
    *   *Command:* `helm rollback todo-chatbot`