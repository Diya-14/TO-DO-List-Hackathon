"use client";

import React, { useState } from 'react';
import { X, Save, Calendar, Tag, AlertTriangle, Layout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/context/ToastContext';

interface TaskFormProps {
  initialData?: any;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
}

export function TaskForm({ initialData, onSubmit, onCancel, isLoading }: TaskFormProps) {
  const { showToast } = useToast();
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [priority, setPriority] = useState(initialData?.priority || 'medium');
  const [dueDate, setDueDate] = useState(
    initialData?.due_date ? new Date(initialData.due_date).toISOString().slice(0, 16) : ''
  );
  const [tags, setTags] = useState(initialData?.tags || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      showToast("Please enter a task title.", "error");
      return;
    }

    onSubmit({
      title,
      description: description.trim() || null,
      priority,
      due_date: dueDate ? new Date(dueDate).toISOString() : null,
      tags: tags.trim() || null,
      status: initialData?.status || 'pending'
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-muted/30 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Layout className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">
                {initialData ? 'Update Task' : 'Create New Task'}
              </h3>
              <p className="text-xs text-muted-foreground">Keep your workspace organized and productive.</p>
            </div>
          </div>
          <button onClick={onCancel} className="rounded-full p-2 text-muted-foreground hover:bg-muted transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Title */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 placeholder:text-muted-foreground/50"
              placeholder="What needs to be accomplished?"
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Description</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 placeholder:text-muted-foreground/50 resize-none"
              placeholder="Provide some context for this task..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Priority */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Priority</label>
              <div className="relative">
                <AlertTriangle className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-border bg-background pl-11 pr-4 py-3 text-sm font-bold outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5"
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
              </div>
            </div>

            {/* Due Date */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Deadline</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="datetime-local"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background pl-11 pr-4 py-3 text-sm font-bold outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5"
                />
              </div>
            </div>
          </div>
            
          {/* Tags */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tags</label>
            <div className="relative">
              <Tag className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full rounded-xl border border-border bg-background pl-11 pr-4 py-3 text-sm font-medium outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 placeholder:text-muted-foreground/50"
                placeholder="work, urgent, finance..."
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-4 border-t border-border">
            <button
              type="button"
              onClick={onCancel}
              className="rounded-xl px-6 py-2.5 text-sm font-bold text-muted-foreground hover:bg-muted transition-colors"
            >
              Discard
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-2 rounded-xl bg-primary px-8 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-50 transition-all hover:-translate-y-0.5"
            >
              {isLoading ? (
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full"
                />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {initialData ? 'Save Changes' : 'Create Task'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
