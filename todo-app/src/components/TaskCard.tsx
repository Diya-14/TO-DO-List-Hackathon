"use client";

import React from 'react';
import { Calendar, Trash2, Edit2, CheckCircle2, Circle, Clock, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

interface TaskCardProps {
  id: string | number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  due_date?: string;
  tags?: string[];
  onEdit: (id: string | number) => void;
  onDelete: (id: string | number) => void;
  onStatusChange: (id: string | number, status: string) => void;
}

const priorityStyles = {
  low: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  medium: "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
  high: "bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",
};

export function TaskCard({ id, title, description, status, priority, due_date, tags = [], onEdit, onDelete, onStatusChange }: TaskCardProps) {
  const isCompleted = status === 'completed';

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      className={`group flex flex-col rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm transition-all hover:shadow-xl hover:shadow-primary/5 ${isCompleted ? 'bg-muted/30 grayscale-[0.5]' : ''}`}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-black text-muted-foreground bg-muted px-1.5 py-0.5 rounded border border-border">#{id}</span>
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${priorityStyles[priority]}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {priority}
            </span>
        </div>
        
        <div className="flex gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => onEdit(id)}
            className="rounded-lg p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors bg-muted/50 sm:bg-transparent"
            aria-label="Edit task"
          >
            <Edit2 className="h-4 w-4" />
          </button>
          <button 
            onClick={() => onDelete(id)}
            className="rounded-lg p-2 text-muted-foreground hover:bg-rose-500/10 hover:text-rose-600 transition-colors bg-muted/50 sm:bg-transparent"
            aria-label="Delete task"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Title & Description */}
      <div className="mb-6 flex-1">
        <h3 className={`mb-2 text-base sm:text-lg font-bold leading-tight ${isCompleted ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
          {title}
        </h3>
        <p className={`text-xs sm:text-sm leading-relaxed ${isCompleted ? 'text-muted-foreground/70' : 'text-muted-foreground'} line-clamp-3`}>
          {description}
        </p>
      </div>

      {/* Meta Information */}
      <div className="space-y-4 pt-2">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map(tag => (
              <span key={tag} className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground">
                <Tag className="h-2.5 w-2.5" />
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-medium text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {due_date ? new Date(due_date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : 'No date'}
          </div>

          <button 
            onClick={() => onStatusChange(id, isCompleted ? 'pending' : 'completed')}
            className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold transition-all ${
              isCompleted 
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
              : 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5'
            }`}
          >
            {isCompleted ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Circle className="h-3.5 w-3.5" />}
            <span>{isCompleted ? 'Done' : 'Mark Done'}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}