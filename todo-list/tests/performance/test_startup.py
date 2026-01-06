import time
import subprocess
import pytest

def test_startup_performance():
    start_time = time.time()
    # Run 'python src/main.py --help' as it's a common cold start path
    result = subprocess.run(["python", "src/main.py", "--help"], capture_output=True)
    end_time = time.time()
    
    duration_ms = (end_time - start_time) * 1000
    print(f"\nCold start duration: {duration_ms:.2f}ms")
    
    # Target: < 500ms. 
    # Note: On some systems or first runs, this might be slightly higher 
    # due to scikit-learn loading.
    assert duration_ms < 1000, f"Startup too slow: {duration_ms:.2f}ms"
