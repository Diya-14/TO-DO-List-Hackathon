Write-Host "Starting HackDo Setup & Launch..." -ForegroundColor Cyan

$root = Get-Location
$backendPath = Join-Path $root "backend"
$frontendPath = Join-Path $root "frontend"
$venvPython = Join-Path $backendPath "venv\Scripts\python.exe"

# 0. Clean up existing processes
Write-Host "Cleaning up existing processes on ports 8000 and 3000..." -ForegroundColor Yellow
$backendProc = Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue
if ($backendProc) {
    Stop-Process -Id $backendProc.OwningProcess -Force -ErrorAction SilentlyContinue
    Write-Host "Stopped existing backend process."
}
$frontendProc = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($frontendProc) {
    Stop-Process -Id $frontendProc.OwningProcess -Force -ErrorAction SilentlyContinue
    Write-Host "Stopped existing frontend process."
}

# 1. Backend Setup
Write-Host "Setting up Backend..." -ForegroundColor Yellow
Set-Location $backendPath

if (-not (Test-Path "venv")) {
    Write-Host "Creating Python virtual environment..."
    python -m venv venv
}

# Install dependencies using the venv python explicitly
Write-Host "Installing backend dependencies..."
& $venvPython -m pip install -r requirements.txt
if ($LASTEXITCODE -ne 0) { 
    Write-Error "Backend install failed. Please check your internet connection or python installation."
    exit 
}

Write-Host "Starting Backend Server..." -ForegroundColor Green
# Start Uvicorn using the venv python
# Use Start-Process with -NoNewWindow to keep output in view if desired, 
# but for a "background" feel we'll keep it as is but add log redirection.
Start-Process -FilePath $venvPython -ArgumentList "-m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload" -WorkingDirectory $backendPath

# 2. Frontend Setup
Write-Host "Setting up Frontend..." -ForegroundColor Yellow
Set-Location $frontendPath

if (-not (Test-Path "node_modules")) {
    Write-Host "Installing frontend dependencies..."
    npm install
    if ($LASTEXITCODE -ne 0) { 
        Write-Error "Frontend install failed."
        exit 
    }
}

Write-Host "Starting Frontend Server..." -ForegroundColor Green
# Use cmd /c for npm on Windows
Start-Process -FilePath "cmd" -ArgumentList "/c npm run dev" -WorkingDirectory $frontendPath

# 3. Launch
Set-Location $root
Write-Host "Application is starting!" -ForegroundColor Cyan
Write-Host "Backend API: http://127.0.0.1:8000"
Write-Host "Frontend UI: http://localhost:3000"
Write-Host "Waiting 15 seconds for servers to warm up..."
Start-Sleep -Seconds 15

# Check if ports are listening
$backendListening = Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue
$frontendListening = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue

if ($backendListening) {
    Write-Host "[OK] Backend is listening on port 8000" -ForegroundColor Green
} else {
    Write-Host "[!] Backend might not have started correctly. Check backend_log.txt" -ForegroundColor Red
}

if ($frontendListening) {
    Write-Host "[OK] Frontend is listening on port 3000" -ForegroundColor Green
} else {
    Write-Host "[!] Frontend might not have started correctly. Check if npm run dev is working." -ForegroundColor Red
}

Start-Process "http://localhost:3000"

Write-Host "Done! The servers are running in separate windows." -ForegroundColor Green
Write-Host "If you encounter 'Failed to fetch', please ensure the backend window is still open and running." -ForegroundColor White

