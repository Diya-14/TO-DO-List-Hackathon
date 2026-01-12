"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';

interface TaskRefreshContextType {
  refreshKey: number;
  triggerRefresh: () => void;
}

const TaskRefreshContext = createContext<TaskRefreshContextType | undefined>(undefined);

export function TaskRefreshProvider({ children }: { children: React.ReactNode }) {
  const [refreshKey, setRefreshKey] = useState(0);

  const triggerRefresh = useCallback(() => {
    setRefreshKey(prev => prev + 1);
  }, []);

  return (
    <TaskRefreshContext.Provider value={{ refreshKey, triggerRefresh }}>
      {children}
    </TaskRefreshContext.Provider>
  );
}

export function useTaskRefresh() {
  const context = useContext(TaskRefreshContext);
  if (context === undefined) {
    throw new Error('useTaskRefresh must be used within a TaskRefreshProvider');
  }
  return context;
}
