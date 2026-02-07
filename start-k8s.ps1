# Helper script to deploy the whole stack to Kubernetes using Neon DB

Write-Host "🚀 Starting TO-DO List Deployment to Kubernetes (Neon DB mode)..." -ForegroundColor Cyan

# 1. Create secrets if they don't exist
Write-Host "🔐 Creating secrets..."
# Note: In production, you would not hardcode these or would use a more secure method
kubectl create secret generic backend-secrets --from-literal=SECRET_KEY="hackathon-secret-key-123" --dry-run=client -o yaml | kubectl apply -f -
kubectl create secret generic todo-secrets --from-literal=openai-api-key="your-key-here" --dry-run=client -o yaml | kubectl apply -f -

# 2. Deploy App Manifests (Standard)
Write-Host "📦 Deploying Frontend and Backend..."
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml

Write-Host "⏳ Waiting for pods to be ready..."
kubectl wait --for=condition=Ready pod -l app=backend --timeout=90s
kubectl wait --for=condition=Ready pod -l app=frontend --timeout=90s

Write-Host "✅ Deployment Complete!" -ForegroundColor Green
Write-Host "🌐 You can now access the app via port-forward:" -ForegroundColor Yellow
Write-Host "   kubectl port-forward svc/frontend-service 3000:80"
Write-Host "   Then open http://localhost:3000"
