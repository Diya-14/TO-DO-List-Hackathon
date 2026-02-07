"use client";

import { useState, useEffect } from 'react';
import { Navbar } from "@/components/Navbar";
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
  id: string;
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
      const res = await fetchWithAuth('/tasks/');
      if (res.ok) {
        const data = await res.json();
        setTasks(data);
      } else if (res.status === 401) {
        logout();
      } else {
        const errData = await res.json().catch(() => ({}));
        console.error('Server error:', errData);
        showToast(errData.detail || "Failed to load tasks.", "error");
      }
    } catch (error) {
      console.error('Network or Connection error:', error);
      showToast("Connection error. Is the backend running?", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (data: any) => {
    setFormLoading(true);
    try {
      const res = await fetchWithAuth('/tasks/', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      
      if (res.ok) {
        await loadTasks();
        setShowCreateModal(false);
        showToast("Task created successfully!", "success");
      }
    } catch (error) {
      console.error('Failed to create task', error);
      showToast("Failed to create task.", "error");
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
    } catch (error) {
      console.error('Failed to update task', error);
      showToast("Failed to update task.", "error");
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteTask = (id: string) => {
    const task = tasks.find(t => t.id === id);
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
        setTasks(prev => prev.filter(t => t.id !== taskToDelete.id));
        setShowDeleteModal(false);
        setTaskToDelete(null);
        showToast("Task deleted successfully!", "delete");
      }
    } catch (error) {
      console.error('Failed to delete task', error);
      showToast("Failed to delete task.", "error");
    } finally {
      setFormLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
      try {
        setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus as any } : t));
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

  const openEditModal = (id: string) => {
      const task = tasks.find(t => t.id === id);
      if (task) {
          setEditingTask(task);
          setShowEditModal(true);
      }
  };

  const filteredTasks = tasks.filter(task => {
      // Filter by Search Query
      if (searchQuery) {
          const query = searchQuery.toLowerCase();
          const matchesSearch = 
            task.title.toLowerCase().includes(query) || 
            (task.description && task.description.toLowerCase().includes(query)) ||
            (task.tags && task.tags.toLowerCase().includes(query));
          
          if (!matchesSearch) return false;
      }

      // Filter by Tab
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
      {/* Sidebar */}
      <aside className="fixed bottom-0 left-0 top-0 hidden w-72 border-r border-border bg-card lg:block">
        <div className="flex h-16 items-center px-8">
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">H</div>
                <span className="text-xl font-bold tracking-tight">HackDo <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded ml-1">v2.0</span></span>
            </div>
        </div>
        
        <div className="p-4 space-y-6">
            <div className="space-y-1">
                <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Main Menu</p>
                <SidebarItem icon={<ListTodo className="h-4 w-4" />} label="All Tasks" active={activeTab === 'All Tasks'} onClick={() => handleTabChange('All Tasks')} count={stats.total} />
                <SidebarItem icon={<Calendar className="h-4 w-4" />} label="Planned" active={activeTab === 'Planned'} onClick={() => handleTabChange('Planned')} />
                <SidebarItem icon={<Star className="h-4 w-4" />} label="Important" active={activeTab === 'Important'} onClick={() => handleTabChange('Important')} />
                <SidebarItem icon={<CheckCircle2 className="h-4 w-4" />} label="Completed" active={activeTab === 'Completed'} onClick={() => handleTabChange('Completed')} count={stats.done} />
            </div>

            <div className="space-y-1">
                <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Categories</p>
                <SidebarItem icon={<Briefcase className="h-4 w-4" />} label="Work" active={activeTab === 'Work'} onClick={() => handleTabChange('Work')} />
                <SidebarItem icon={<User className="h-4 w-4" />} label="Personal" active={activeTab === 'Personal'} onClick={() => handleTabChange('Personal')} />
            </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
            <div className="rounded-2xl bg-primary p-6 text-white shadow-xl shadow-primary/20">
                <p className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">Hackathon Mode</p>
                <p className="text-lg font-black leading-tight mb-3">Productivity Boosted</p>
                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-3/4 rounded-full" />
                </div>
                <p className="text-[10px] mt-2 opacity-70">75% of daily goals achieved</p>
            </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col lg:pl-72">
        <Navbar />
        
        <main className="container mx-auto px-6 py-10 max-w-7xl">
          {/* Dashboard Header */}
          {!searchQuery && (
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
                {getGreeting()}, <span className="text-primary">Creator.</span>
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                You have <span className="font-bold text-foreground">{stats.pending} tasks</span> remaining for today.
              </p>
            </motion.div>
            
            <motion.button 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCreateModal(true)}
                className="flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-sm font-black text-white shadow-2xl shadow-primary/30 transition-all hover:bg-primary/90"
            >
              <Plus className="h-5 w-5" />
              Add New Task
            </motion.button>
          </div>
          )}

          {/* Quick Stats Grid */}
          {!searchQuery && (
          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <QuickStatCard label="Progress" value={`${Math.round((stats.done / (stats.total || 1)) * 100)}%`} icon={<Clock className="text-primary" />} />
              <QuickStatCard label="Tasks Done" value={stats.done} icon={<CheckCircle2 className="text-emerald-500" />} />
              <QuickStatCard label="Outstanding" value={stats.pending} icon={<CircleDashed className="text-rose-500" />} />
          </div>
          )}

          {/* Tab Filter (Mobile) */}
          {!searchQuery && (
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {['All Tasks', 'Planned', 'Important', 'Completed'].map((f) => (
                <button 
                    key={f}
                    onClick={() => handleTabChange(f)}
                    className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-bold transition-all ${
                        activeTab === f 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'bg-card text-muted-foreground hover:bg-muted'
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
                    className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
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
                        className="group flex min-h-[280px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-transparent transition-all hover:border-primary/50 hover:bg-primary/5"
                    >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground transition-all group-hover:bg-primary group-hover:text-white group-hover:rotate-90">
                            <Plus className="h-6 w-6" />
                        </div>
                        <span className="mt-4 text-sm font-bold text-muted-foreground group-hover:text-primary">Create Task</span>
                    </motion.button>
                </motion.div>
            )}

            {!loading && filteredTasks.length === 0 && (
                <div className="flex h-64 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-border bg-muted/20">
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
                    className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-rose-500/20 bg-card p-8 shadow-2xl shadow-rose-500/10"
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-500/10 text-rose-500">
                            <AlertTriangle className="h-10 w-10" />
                        </div>
                        
                        <h3 className="text-2xl font-black tracking-tight text-foreground">
                            Delete Confirmation
                        </h3>
                        <p className="mt-3 text-muted-foreground font-medium">
                            Are you sure you want to delete <span className="text-foreground font-bold">"{taskToDelete?.title}"</span>? This action is permanent and cannot be reversed.
                        </p>

                        <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row">
                            <button 
                                onClick={() => setShowDeleteModal(false)}
                                className="flex-1 rounded-2xl border border-border bg-background py-4 text-sm font-black transition-all hover:bg-muted"
                            >
                                Nevermind
                            </button>
                            <button 
                                onClick={confirmDelete}
                                disabled={formLoading}
                                className="flex-[1.5] flex items-center justify-center gap-2 rounded-2xl bg-rose-500 py-4 text-sm font-black text-white shadow-xl shadow-rose-500/20 transition-all hover:bg-rose-600 hover:-translate-y-1 disabled:opacity-50"
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
                        className="absolute right-6 top-6 rounded-full p-2 text-muted-foreground hover:bg-muted"
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

function SidebarItem({ icon, label, active, onClick, count }: any) {
    return (
        <button 
            onClick={onClick}
            className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                active 
                ? 'bg-primary/10 text-primary shadow-sm' 
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
        >
            <div className="flex items-center gap-3">
                {icon}
                <span>{label}</span>
            </div>
            {count !== undefined && (
                <span className={`rounded-full px-2 py-0.5 text-[10px] ${active ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                    {count}
                </span>
            )}
        </button>
    )
}

function QuickStatCard({ label, value, icon }: any) {
    return (
        <div className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                {icon}
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
            <p className="mt-1 text-3xl font-black">{value}</p>
        </div>
    )
}