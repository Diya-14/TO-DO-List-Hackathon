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
    const response = await fetch(url, {
      ...options,
      headers,
      cache: 'no-store',
    });

    if (response.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
        window.location.href = '/login';
      }
      throw new Error('Unauthorized');
    }

    return response;
  } catch (error: any) {
    if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      console.error(`[Connection Error] Could not reach the API at ${url}. Is the backend server running?`);
      throw new Error('Connection to the server failed. Please ensure the backend is running.');
    }
    
    console.error(`[API Error] Failed to fetch: ${url}`, error);
    throw error;
  }
}
