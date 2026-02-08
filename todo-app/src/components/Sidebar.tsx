"use client";

import React from 'react';
import { ListTodo, Calendar, Star, CheckCircle2, Briefcase, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  stats: {
    total: number;
    pending: number;
    done: number;
  };
  isOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

export function Sidebar({ activeTab, onTabChange, stats, isOpen, onClose, isMobile }: SidebarProps) {
  const content = (
    <div className={`flex h-full flex-col bg-card ${isMobile ? 'w-72' : 'w-full'}`}>
      <div className="flex h-16 items-center justify-between px-8 border-b border-border/50">
          <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">H</div>
              <span className="text-xl font-bold tracking-tight">HackDo <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded ml-1">v2.0</span></span>
          </div>
          {isMobile && (
            <button onClick={onClose} className="rounded-full p-1 hover:bg-muted text-muted-foreground">
              <X className="h-5 w-5" />
            </button>
          )}
      </div>
      
      <div className="p-4 space-y-6 flex-1 overflow-y-auto">
          <div className="space-y-1">
              <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Main Menu</p>
              <SidebarItem icon={<ListTodo className="h-4 w-4" />} label="All Tasks" active={activeTab === 'All Tasks'} onClick={() => { onTabChange('All Tasks'); isMobile && onClose?.(); }} count={stats.total} />
              <SidebarItem icon={<Calendar className="h-4 w-4" />} label="Planned" active={activeTab === 'Planned'} onClick={() => { onTabChange('Planned'); isMobile && onClose?.(); }} />
              <SidebarItem icon={<Star className="h-4 w-4" />} label="Important" active={activeTab === 'Important'} onClick={() => { onTabChange('Important'); isMobile && onClose?.(); }} />
              <SidebarItem icon={<CheckCircle2 className="h-4 w-4" />} label="Completed" active={activeTab === 'Completed'} onClick={() => { onTabChange('Completed'); isMobile && onClose?.(); }} count={stats.done} />
          </div>

          <div className="space-y-1">
              <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Categories</p>
              <SidebarItem icon={<Briefcase className="h-4 w-4" />} label="Work" active={activeTab === 'Work'} onClick={() => { onTabChange('Work'); isMobile && onClose?.(); }} />
              <SidebarItem icon={<User className="h-4 w-4" />} label="Personal" active={activeTab === 'Personal'} onClick={() => { onTabChange('Personal'); isMobile && onClose?.(); }} />
          </div>
      </div>

      <div className="p-6">
          <div className="rounded-2xl bg-primary p-6 text-white shadow-xl shadow-primary/20">
              <p className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">Hackathon Mode</p>
              <p className="text-lg font-black leading-tight mb-3">Productivity Boosted</p>
              <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-3/4 rounded-full" />
              </div>
              <p className="text-[10px] mt-2 opacity-70">75% of daily goals achieved</p>
          </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 top-0 z-[70] w-72 border-r border-border bg-card lg:hidden shadow-2xl"
            >
              {content}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    );
  }

  return (
    <aside className="fixed bottom-0 left-0 top-0 hidden w-72 border-r border-border bg-card lg:block">
      {content}
    </aside>
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
