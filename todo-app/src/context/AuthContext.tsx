"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { fetchWithAuth } from '@/lib/api';

interface User {
  email: string;
  full_name?: string;
}

type AuthStatus = 'pending' | 'authenticated' | 'unauthenticated';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  logout: () => {},
  isLoading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [authStatus, setAuthStatus] = useState<AuthStatus>('pending');
  const router = useRouter();
  const pathname = usePathname();

  const fetchUser = async (tokenExists: boolean) => {
    if (!tokenExists) {
        setAuthStatus('unauthenticated');
        setUser(null);
        return;
    }

    try {
      console.log("[Auth] Fetching user info...");
      const res = await fetchWithAuth('/auth/me');
      if (res.ok) {
        const userData = await res.json();
        console.log("[Auth] User fetch success:", userData.email);
        setUser(userData);
        setAuthStatus('authenticated');
      } else {
        // This case handles expired tokens or server-side invalidation
        console.warn("[Auth] User fetch failed, marking as unauthenticated. Status:", res.status);
        localStorage.removeItem('access_token');
        setUser(null);
        setAuthStatus('unauthenticated');
      }
    } catch (error) {
      console.error("[Auth] User fetch error, marking as unauthenticated:", error);
      localStorage.removeItem('access_token');
      setUser(null);
      setAuthStatus('unauthenticated');
    }
  };

  // This effect runs once on mount to check the initial auth state
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    console.log("[Auth] Mount - Token exists:", !!token);
    fetchUser(!!token);
  }, []);

  // This effect handles redirection logic based on auth status and current path
  useEffect(() => {
    // Don't redirect while we are still figuring out the auth status
    if (authStatus === 'pending') {
      console.log("[Auth] Redirection pending: Auth status is pending.");
      return;
    }

    const publicPaths = ['/login', '/signup', '/'];
    const isPublicPath = publicPaths.includes(pathname);

    // If authenticated, and on a public-only page like login/signup, redirect to dashboard
    if (authStatus === 'authenticated' && (pathname === '/login' || pathname === '/signup')) {
      console.log(`[Auth] Authenticated user on public path '${pathname}'. Redirecting to /`);
      router.replace('/');
    }
    // If unauthenticated, and on a protected page, redirect to login
    else if (authStatus === 'unauthenticated' && !isPublicPath) {
      console.log(`[Auth] Unauthenticated user on protected path '${pathname}'. Redirecting to /login`);
      router.replace('/login');
    }
    
    console.log(`[Auth] Redirection check complete. Status: ${authStatus}, Path: ${pathname}`);

  }, [authStatus, pathname, router]);

  const login = async (token: string) => {
    console.log("[Auth] Login initiated. Storing token.");
    localStorage.setItem('access_token', token);
    // Set status to pending and trigger user fetch
    setAuthStatus('pending'); 
    await fetchUser(true);
  };

  const logout = () => {
    console.log("[Auth] Logout initiated.");
    localStorage.removeItem('access_token');
    setUser(null);
    setAuthStatus('unauthenticated');
    // Redirect to home/landing page after logout
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated: authStatus === 'authenticated', 
      user, 
      login, 
      logout, 
      isLoading: authStatus === 'pending' 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);