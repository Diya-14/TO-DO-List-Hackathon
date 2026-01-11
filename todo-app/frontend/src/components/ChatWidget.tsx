"use client";

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchWithAuth } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';

interface Message {
  id?: string;
  role: 'user' | 'assistant';
  message_text: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated } = useAuth();
  const { showToast } = useToast();

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      loadHistory();
    }
  }, [isOpen, isAuthenticated]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadHistory = async () => {
    try {
      const res = await fetchWithAuth('/chat/history?limit=50');
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    } catch (error) {
      console.error("Failed to load chat history", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', message_text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const res = await fetchWithAuth('/chat/', {
        method: 'POST',
        body: JSON.stringify({ message: userMsg.message_text })
      });

      if (res.ok) {
        const data = await res.json();
        const assistantMsg: Message = { role: 'assistant', message_text: data.response };
        setMessages(prev => [...prev, assistantMsg]);
      } else {
        showToast("Failed to send message", "error");
      }
    } catch (error) {
      console.error("Chat error", error);
      showToast("Something went wrong", "error");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 flex h-[600px] w-[400px] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-muted/50 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <p className="text-xs font-medium text-muted-foreground">Online & Ready</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-transparent to-muted/20">
              {messages.length === 0 && (
                <div className="flex h-full flex-col items-center justify-center text-center p-6 text-muted-foreground space-y-4">
                  <div className="h-16 w-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">How can I help you?</p>
                    <p className="text-sm mt-1">Try saying:</p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <button onClick={() => setInputValue("Show my pending tasks")} className="text-xs bg-muted/50 hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-xl transition-colors">"Show my pending tasks"</button>
                    <button onClick={() => setInputValue("Add a task to buy milk")} className="text-xs bg-muted/50 hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-xl transition-colors">"Add a task to buy milk"</button>
                    <button onClick={() => setInputValue("What's on my plate today?")} className="text-xs bg-muted/50 hover:bg-primary/10 hover:text-primary px-3 py-2 rounded-xl transition-colors">"What's on my plate today?"</button>
                  </div>
                </div>
              )}
              
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-muted text-foreground rounded-bl-none'
                    }`}
                  >
                    {msg.message_text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-none bg-muted px-4 py-3 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-background border-t border-border">
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a command..."
                  className="w-full rounded-2xl border border-border bg-muted/50 pl-4 pr-12 py-3.5 text-sm outline-none transition-all focus:border-primary focus:bg-background focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-2 rounded-xl bg-primary p-2 text-primary-foreground shadow-sm transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl shadow-2xl transition-all ${
            isOpen 
            ? 'bg-muted text-foreground' 
            : 'bg-primary text-primary-foreground shadow-primary/25'
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </motion.button>
    </>
  );
}