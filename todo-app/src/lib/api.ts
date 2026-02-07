// Detect the best API URL at runtime
const getApiUrl = () => {
  if (typeof window === 'undefined') return '/api/v1';
  
  // If we are on localhost:3000 (standard dev), we might be port-forwarding the backend to 8000
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // If the port is 3000, we prefer hitting the backend directly on 8000 to avoid proxy issues during dev
    if (window.location.port === '3000') {
      return 'http://127.0.0.1:8000/api/v1';
    }
  }
  
  // Default to relative path for production/Kubernetes Ingress/Next.js Rewrites
  return '/api/v1';
};

const API_URL = getApiUrl();

export async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
  
  const headers = new Headers(options.headers);
  
  if (!(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  if (token && !headers.has('Authorization')) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  // Normalize endpoint: ensure it starts with /
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  const url = `${API_URL}${cleanEndpoint}`;

  try {
    console.log(`[API Request] ${options.method || 'GET'} -> ${url}`);
    const response = await fetch(url, {
      ...options,
      headers,
      cache: 'no-store',
    });
    
    console.log(`[API Response] ${response.status} from ${url}`);

    if (response.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
      }
      throw new Error('Unauthorized');
    }

    if (!response.ok) {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `Server error: ${response.status}`);
      } else {
        const textError = await response.text();
        console.error(`[API Error] Non-JSON error:`, textError);
        throw new Error(`Server error (${response.status}). Please check backend logs.`);
      }
    }

    return response;
  } catch (error) {
    // Log the full error to the console for easier debugging
    console.error(`[API Error] Failed to fetch from: ${url}`);
    console.error(`[API Error] Error details:`, error);
    
    throw error;
  }
}
