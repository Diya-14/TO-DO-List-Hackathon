// Use 127.0.0.1 directly to avoid IPv6 resolution issues on Windows
const API_URL = 'http://127.0.0.1:8000/api/v1';

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
    console.log(`[API] Fetching: ${url}`);
    const response = await fetch(url, {
      ...options,
      headers,
      cache: 'no-store',
    });
    
    console.log(`[API] Status: ${response.status} for ${url}`);

    if (response.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
      }
      throw new Error('Unauthorized');
    }

    return response;
  } catch (error) {
    // Log the full error to the console for easier debugging
    console.error(`[API Error] Failed to fetch from: ${url}`);
    console.error(`[API Error] Error details:`, error);
    
    throw error;
  }
}
