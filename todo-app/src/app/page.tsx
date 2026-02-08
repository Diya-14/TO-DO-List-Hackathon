"use client";

import { useState, useEffect } from 'react';
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { TaskCard } from "@/components/TaskCard";
import { TaskForm } from "@/components/TaskForm";
import { fetchWithAuth } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { useSearch } from "@/context/SearchContext";
import { useToast } from "@/context/ToastContext";
import { useTaskRefresh } from "@/context/TaskRefreshContext";
import { Loader2, Plus, LayoutGrid, CheckCircle2, CircleDashed, Filter, Calendar, ListTodo, Star, Clock, AlertTriangle, Trash2, X, SearchX, Briefcase, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LandingPage } from "@/components/LandingPage";

interface Task {
  id: string | number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  due_date: string;
  tags: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  
  const { isAuthenticated, isLoading: authLoading, logout } = useAuth();
  const { searchQuery, clearSearch } = useSearch();
  const { showToast } = useToast();
  const { refreshKey } = useTaskRefresh();
  const [activeTab, setActiveTab] = useState('All Tasks');

  useEffect(() => {
    if (!authLoading && isAuthenticated) {
        loadTasks();
    }
  }, [authLoading, isAuthenticated, refreshKey]);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const res = await fetchWithAuth('/tasks');
      if (res.ok) {
        const data = await res.json();
        setTasks(data);
      } else if (res.status === 401) {
        logout();
      } else {
        const errData = await res.json().catch(() => ({}));
        showToast(errData.detail || "Failed to load tasks.", "error");
      }
    } catch (error: any) {
      console.error('Network or Connection error:', error);
      const msg = error.message === 'Failed to fetch' 
        ? "Network error: Could not reach the backend." 
        : (error.message || "Failed to load tasks.");
      showToast(msg, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (data: any) => {
    setFormLoading(true);
    try {
      const res = await fetchWithAuth('/tasks', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        await loadTasks();
        setShowCreateModal(false);
        showToast("Task created successfully!", "success");
      }
    } catch (error: any) {
      showToast(error.message || "Failed to create task.", "error");
    } finally {
      setFormLoading(false);
    }
  };

  const handleEditTask = async (data: any) => {
    if (!editingTask) return;
    setFormLoading(true);
    try {
      const res = await fetchWithAuth(`/tasks/${editingTask.id}`, {
        method: 'PATCH',
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        await loadTasks();
        setShowEditModal(false);
        setEditingTask(null);
        showToast("Task updated successfully!", "success");
      }
    } catch (error: any) {
      showToast(error.message || "Failed to update task.", "error");
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteTask = (id: string | number) => {
    const task = tasks.find(t => t.id == id);
    if (task) {
      setTaskToDelete(task);
      setShowDeleteModal(true);
    }
  };

  const confirmDelete = async () => {
    if (!taskToDelete) return;
    
    setFormLoading(true);
    try {
      const res = await fetchWithAuth(`/tasks/${taskToDelete.id}`, { method: 'DELETE' });
      if (res.ok) {
        setTasks(prev => prev.filter(t => t.id != taskToDelete.id));
        setShowDeleteModal(false);
        setTaskToDelete(null);
        showToast("Task deleted successfully!", "delete");
      }
    } catch (error: any) {
      showToast(error.message || "Failed to delete task.", "error");
    } finally {
      setFormLoading(false);
    }
  };

  const handleStatusChange = async (id: string | number, newStatus: string) => {
      try {
        setTasks(prev => prev.map(t => t.id == id ? { ...t, status: newStatus as any } : t));
        const res = await fetchWithAuth(`/tasks/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ status: newStatus })
        });
        if (res.ok) {
            showToast(newStatus === 'completed' ? "Task marked as done!" : "Task marked as pending.", "info");
        }
      } catch (error) {
          loadTasks();
          showToast("Failed to update status.", "error");
      }
  }

  const openEditModal = (id: string | number) => {
      const task = tasks.find(t => t.id == id);
      if (task) {
          setEditingTask(task);
          setShowEditModal(true);
      }
  };

  const filteredTasks = tasks.filter(task => {
      if (searchQuery) {
          const query = searchQuery.toLowerCase();
          const matchesSearch = 
            task.title.toLowerCase().includes(query) || 
            (task.description && task.description.toLowerCase().includes(query)) ||
            (task.tags && task.tags.toLowerCase().includes(query));
          
          if (!matchesSearch) return false;
      }

      if (activeTab === 'All Tasks') return true;
      if (activeTab === 'Completed') return task.status === 'completed';
      if (activeTab === 'Important') return task.priority === 'high';
      if (activeTab === 'Planned') return !!task.due_date;
      if (activeTab === 'Work') return task.tags && task.tags.toLowerCase().includes('work');
      if (activeTab === 'Personal') return task.tags && task.tags.toLowerCase().includes('personal');
      return true;
  });

  const stats = {
      total: tasks.length,
      pending: tasks.filter(t => t.status !== 'completed').length,
      done: tasks.filter(t => t.status === 'completed').length
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (searchQuery) clearSearch();
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 18) return "Good Afternoon";
    if (hour >= 18 && hour < 22) return "Good Evening";
    return "Good Night";
  };

  if (authLoading) {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-background">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
    );
  }

  if (!isAuthenticated) {
    return <LandingPage />;
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Desktop Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} stats={stats} />
      
      {/* Mobile Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
        stats={stats} 
        isMobile 
        isOpen={showMobileSidebar} 
        onClose={() => setShowMobileSidebar(false)} 
      />

      <div className="flex flex-1 flex-col lg:pl-72">
        <Navbar onMenuClick={() => setShowMobileSidebar(true)} />
        
        <main className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 max-w-7xl">
          {/* Dashboard Header */}
          {!searchQuery && (
          <div className="mb-8 sm:mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {getGreeting()}, <span className="text-primary">Creator.</span>
              </h1>
              <p className="mt-2 text-base sm:text-lg text-muted-foreground">
                You have <span className="font-bold text-foreground">{stats.pending} tasks</span> remaining for today.
              </p>
            </motion.div>
            
            <motion.button 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCreateModal(true)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 sm:px-8 text-sm font-black text-white shadow-2xl shadow-primary/30 transition-all hover:bg-primary/90"
            >
              <Plus className="h-5 w-5" />
              Add New Task
            </motion.button>
          </div>
          )}

          {/* Quick Stats Grid */}
          {!searchQuery && (
          <div className="mb-10 sm:mb-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <QuickStatCard label="Progress" value={`${Math.round((stats.done / (stats.total || 1)) * 100)}%`} icon={<Clock className="text-primary" />} />
              <QuickStatCard label="Tasks Done" value={stats.done} icon={<CheckCircle2 className="text-emerald-500" />} />
              <QuickStatCard label="Outstanding" value={stats.pending} icon={<CircleDashed className="text-rose-500" />} />
          </div>
          )}

          {/* Tab Filter (Mobile) */}
          {!searchQuery && (
          <div className="mb-8 flex gap-2 overflow-x-auto pb-4 lg:hidden -mx-4 px-4 scrollbar-hide">
            {['All Tasks', 'Planned', 'Important', 'Completed'].map((f) => (
                <button 
                    key={f}
                    onClick={() => handleTabChange(f)}
                    className={`whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                        activeTab === f 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'bg-card text-muted-foreground hover:bg-muted border border-border/50'
                    }`}
                >
                    {f}
                </button>
            ))}
          </div>
          )}

          {/* Task Grid */}
          <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                      <Filter className="h-5 w-5 text-primary" />
                      {searchQuery ? "Search Results" : activeTab}
                  </h2>
              </div>

            {loading ? (
                <div className="flex h-96 w-full flex-col items-center justify-center gap-4">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <p className="text-sm font-medium text-muted-foreground animate-pulse">Syncing your tasks...</p>
                </div>
            ) : (
                <motion.div 
                    layout
                    className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredTasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                {...task}
                                tags={task.tags ? task.tags.split(',').map(t => t.trim()) : []}
                                priority={task.priority as any}
                                due_date={task.due_date}
                                onEdit={openEditModal}
                                onDelete={handleDeleteTask}
                                onStatusChange={handleStatusChange}
                            />
                        ))}
                    </AnimatePresence>
                
                    {/* Add New Placeholder Card */}
                    <motion.button 
                        layout
                        onClick={() => setShowCreateModal(true)}
                        className="group flex min-h-[200px] sm:min-h-[280px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-transparent transition-all hover:border-primary/50 hover:bg-primary/5"
                    >
                        <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground transition-all group-hover:bg-primary group-hover:text-white group-hover:rotate-90">
                            <Plus className="h-6 w-6" />
                        </div>
                        <span className="mt-4 text-sm font-bold text-muted-foreground group-hover:text-primary">Create Task</span>
                    </motion.button>
                </motion.div>
            )}

            {!loading && filteredTasks.length === 0 && (
                <div className="flex h-64 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-border bg-muted/20 px-6 text-center">
                    {searchQuery ? (
                        <>
                            <SearchX className="h-12 w-12 text-muted-foreground mb-4" />
                            <p className="text-lg font-bold text-muted-foreground">No tasks found</p>
                            <p className="text-sm text-muted-foreground/60">Your search for "{searchQuery}" didn't return any results.</p>
                        </>
                    ) : (
                        <>
                            <ListTodo className="h-12 w-12 text-muted-foreground mb-4" />
                            <p className="text-lg font-bold text-muted-foreground">All caught up!</p>
                            <p className="text-sm text-muted-foreground/60">No tasks found in this category.</p>
                        </>
                    )}
                </div>
            )}
          </div>
        </main>
      </div>

      {/* Modals */}
      <AnimatePresence>
          {(showCreateModal || showEditModal) && (
            <TaskForm 
                initialData={showEditModal ? editingTask : undefined}
                onSubmit={showEditModal ? handleEditTask : handleCreateTask}
                onCancel={() => { setShowCreateModal(false); setShowEditModal(false); setEditingTask(null); }}
                isLoading={formLoading}
            />
          )}

          {showDeleteModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowDeleteModal(false)}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-rose-500/20 bg-card p-6 sm:p-8 shadow-2xl shadow-rose-500/10"
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl bg-rose-500/10 text-rose-500">
                            <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10" />
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
                            Delete Confirmation
                        </h3>
                        <p className="mt-3 text-sm sm:text-base text-muted-foreground font-medium">
                            Are you sure you want to delete <span className="text-foreground font-bold">"{taskToDelete?.title}"</span>? This action is permanent.
                        </p>

                        <div className="mt-8 sm:mt-10 flex w-full flex-col gap-3 sm:flex-row">
                            <button 
                                onClick={() => setShowDeleteModal(false)}
                                className="flex-1 rounded-2xl border border-border bg-background py-3.5 sm:py-4 text-sm font-black transition-all hover:bg-muted"
                            >
                                Nevermind
                            </button>
                            <button 
                                onClick={confirmDelete}
                                disabled={formLoading}
                                className="flex-[1.5] flex items-center justify-center gap-2 rounded-2xl bg-rose-500 py-3.5 sm:py-4 text-sm font-black text-white shadow-xl shadow-rose-500/20 transition-all hover:bg-rose-600 hover:-translate-y-1 disabled:opacity-50"
                            >
                                {formLoading ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    <>
                                        <Trash2 className="h-4 w-4" />
                                        Delete Forever
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <button 
                        onClick={() => setShowDeleteModal(false)}
                        className="absolute right-4 top-4 sm:right-6 sm:top-6 rounded-full p-2 text-muted-foreground hover:bg-muted"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </motion.div>
            </div>
          )}
      </AnimatePresence>
    </div>
  );
}

function QuickStatCard({ label, value, icon }: any) {
    return (
        <div className="flex flex-col rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-3 sm:mb-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-muted">
                {icon}
            </div>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
            <p className="mt-1 text-2xl sm:text-3xl font-black">{value}</p>
        </div>
    )
}