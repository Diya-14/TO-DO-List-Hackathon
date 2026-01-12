"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { fetchWithAuth } from '@/lib/api';

interface User {
  email: string;
  full_name?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
  isLoading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check token on mount
    const token = localStorage.getItem('access_token');
    console.log("[Auth] Mount - Token exists:", !!token);
    
    if (token) {
      setIsAuthenticated(true);
      fetchUser();
    } else {
      console.log("[Auth] No token found on mount");
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      console.log("[Auth] Fetching user info...");
      const res = await fetchWithAuth('/auth/me');
      if (res.ok) {
        const userData = await res.json();
        console.log("[Auth] User fetch success:", userData.email);
        setUser(userData);
        setIsAuthenticated(true);
      } else {
        console.warn("[Auth] User fetch failed with status:", res.status);
        if (res.status === 401) {
            setIsAuthenticated(false);
            localStorage.removeItem('access_token');
        }
      }
    } catch (error) {
      console.error("[Auth] User fetch error:", error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoading) return;

    const publicPaths = ['/login', '/signup', '/'];
    const isPublicPath = publicPaths.includes(pathname);

    // CRITICAL: If we are at root (/), LandingPage is shown. Do NOT redirect.
    if (pathname === '/') {
        console.log("[Auth] At root, letting Home handle rendering");
        return;
    }

    // If we're not authenticated and trying to access a protected page (NOT root, login, or signup)
    if (!isAuthenticated && !isPublicPath) {
      console.log("[Auth] Protected path detected, redirecting to /login:", pathname);
      router.replace('/login');
    } 
    // If we ARE authenticated and trying to access login/signup
    else if (isAuthenticated && (pathname === '/login' || pathname === '/signup')) {
      console.log("[Auth] Already authenticated, redirecting to /");
      router.replace('/');
    }
  }, [isAuthenticated, isLoading, pathname]);

  const login = (token: string) => {
    localStorage.setItem('access_token', token);
    setIsAuthenticated(true);
    fetchUser(); // Fetch user immediately after login
    // Force navigation immediately
    router.refresh(); 
    router.push('/');
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);