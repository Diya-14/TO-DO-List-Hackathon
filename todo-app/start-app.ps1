Write-Host "Starting HackDo Setup & Launch (Unified Version)..." -ForegroundColor Cyan

# Check for conflicting processes on ports 8000 and 3000
Write-Host "Checking for conflicting processes on ports 8000 and 3000..." -ForegroundColor Yellow
$ports = @(8000, 3000)
foreach ($port in $ports) {
    $proc = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique
    if ($proc) {
        Write-Host "Found process $proc listening on port $port. Terminating it to avoid conflicts..." -ForegroundColor Yellow
        Stop-Process -Id $proc -Force -ErrorAction SilentlyContinue
    }
}

$root = $PSScriptRoot
$backendPath = Join-Path $root "backend"
$venvPython = Join-Path $backendPath "venv\Scripts\python.exe"

$env:PYTHONUTF8 = "1"
$env:PYTHONIOENCODING = "utf-8"

# 1. Backend Setup
Write-Host "Setting up Backend..." -ForegroundColor Yellow
Set-Location $backendPath

if (-not (Test-Path "venv")) {
    Write-Host "Creating Python virtual environment..."
    python -m venv venv
}

# Install dependencies using the venv python explicitly from the root requirements
Write-Host "Installing backend dependencies..."
& $venvPython -m pip install -r ../requirements.txt
if ($LASTEXITCODE -ne 0) { 
    Write-Error "Backend install failed. Please check your internet connection or python installation."
    exit 
}

# 2. Frontend/Root Setup
Write-Host "Setting up Frontend (Root)..." -ForegroundColor Yellow
Set-Location $root

if (-not (Test-Path "node_modules")) {
    Write-Host "Installing frontend dependencies..."
    npm install
    if ($LASTEXITCODE -ne 0) { 
        Write-Error "Frontend install failed."
        exit 
    }
}

# 3. Launch
Write-Host "Starting Backend..." -ForegroundColor Green
$backendCmd = "cd '$backendPath'; `$env:PYTHONIOENCODING='utf-8'; `$env:PYTHONUTF8='1'; ./venv/Scripts/python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "$backendCmd"

Write-Host "Starting Frontend..." -ForegroundColor Green
# Resolve npm path again just to be safe
$npmCmd = "npm"
if ($IsWindows) {
    $npmPath = Get-Command npm -ErrorAction SilentlyContinue
    if ($npmPath) {
        if ($npmPath.Source.EndsWith(".cmd")) {
             $npmCmd = $npmPath.Source
        }
    }
}
$frontendCmd = "cd '$root'; & '$npmCmd' run dev:frontend"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "$frontendCmd"

Write-Host "Application is starting!" -ForegroundColor Cyan
Write-Host "Backend API: http://localhost:8000"
Write-Host "Frontend UI: http://localhost:3000"
Write-Host "Waiting 15 seconds for servers to warm up..."
Start-Sleep -Seconds 15

# Check if ports are listening
$backendListening = Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue
$frontendListening = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue

if ($backendListening) {
    Write-Host "[OK] Backend is listening on port 8000" -ForegroundColor Green
} else {
    Write-Host "[!] Backend might not have started correctly." -ForegroundColor Red
}

if ($frontendListening) {
    Write-Host "[OK] Frontend is listening on port 3000" -ForegroundColor Green
} else {
    Write-Host "[!] Frontend might not have started correctly." -ForegroundColor Red
}

Start-Process "http://localhost:3000"

Write-Host "Done! The servers are running in separate windows." -ForegroundColor Green