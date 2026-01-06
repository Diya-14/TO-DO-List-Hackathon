"use client";

import React from 'react';
import { CheckSquare, LogOut, User, Search } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useSearch } from '@/context/SearchContext';
import { motion } from 'framer-motion';

export function Navbar() {
  const { logout, user } = useAuth();
  const { searchQuery, setSearchQuery, clearSearch } = useSearch();
  const [localInput, setLocalInput] = React.useState(searchQuery);

  // Sync local input with global query if global query changes externally (e.g. clearSearch)
  React.useEffect(() => {
    if (searchQuery === '' && localInput !== '') {
        setLocalInput('');
    }
  }, [searchQuery]);

  const handleLogout = () => {
    clearSearch();
    logout();
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
            <CheckSquare className="h-6 w-6" />
          </div>
          <span className="text-2xl font-black tracking-tight">
            Hack<span className="text-primary">Do</span>
          </span>
        </div>

        {/* Search Bar (Formal Professional) */}
        <div className="hidden max-w-md flex-1 px-8 md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search tasks..." 
              value={localInput}
              onChange={(e) => {
                  setLocalInput(e.target.value);
                  setSearchQuery(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.currentTarget.blur();
                  setLocalInput(''); // Clear visual input only
                }
              }}
              className="w-full rounded-full border border-border bg-muted/50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary/50 focus:ring-4 focus:ring-primary/5"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* User Profile Dropdown Placeholder */}
          <div className="flex items-center gap-3 pl-2">
            <div className="hidden text-right lg:block">
              <p className="text-sm font-bold leading-none">{user?.full_name || 'User'}</p>
              <p className="text-xs text-muted-foreground mt-1">{user?.email}</p>
            </div>
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 p-0.5">
              <div className="h-full w-full rounded-full bg-muted flex items-center justify-center">
                <User className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="ml-2 rounded-lg p-2 text-muted-foreground hover:bg-rose-50 hover:text-rose-600 transition-colors dark:hover:bg-rose-900/20"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}