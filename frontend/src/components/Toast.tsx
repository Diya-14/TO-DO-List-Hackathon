"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, AlertCircle, Info, Trash2 } from "lucide-react";
import { useEffect } from "react";

export type ToastType = 'success' | 'error' | 'info' | 'delete';

export interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  onDismiss: (id: string) => void;
}

const toastStyles = {
  success: "bg-emerald-500 text-white shadow-emerald-500/20",
  error: "bg-rose-500 text-white shadow-rose-500/20",
  info: "bg-blue-500 text-white shadow-blue-500/20",
  delete: "bg-rose-500 text-white shadow-rose-500/20",
};

const icons = {
  success: <CheckCircle2 className="h-5 w-5" />,
  error: <AlertCircle className="h-5 w-5" />,
  info: <Info className="h-5 w-5" />,
  delete: <Trash2 className="h-5 w-5" />,
};

export function Toast({ id, message, type, onDismiss }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(id);
    }, 4000);
    return () => clearTimeout(timer);
  }, [id, onDismiss]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className={`flex items-center gap-3 rounded-2xl px-6 py-4 shadow-lg backdrop-blur-md ${toastStyles[type]}`}
    >
      {icons[type]}
      <p className="font-bold text-sm">{message}</p>
      <button 
        onClick={() => onDismiss(id)}
        className="ml-2 rounded-full p-1 hover:bg-white/20 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
}

export function ToastContainer({ toasts, removeToast }: { toasts: ToastProps[], removeToast: (id: string) => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-2">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onDismiss={removeToast} />
        ))}
      </AnimatePresence>
    </div>
  );
}
