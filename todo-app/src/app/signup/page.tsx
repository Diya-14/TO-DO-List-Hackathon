"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { fetchWithAuth } from '@/lib/api';
import { Loader2, CheckSquare, ArrowRight, ShieldCheck, Zap, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Step 1: Create the user account
      await fetchWithAuth('/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ email, full_name: fullName, password }),
      });

      // Step 2: Automatically log the user in
      const formData = new FormData();
      formData.append('username', email);
      formData.append('password', password);

      const res = await fetchWithAuth('/auth/login', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.detail || 'Failed to login after signup.');
      }

      const data = await res.json();
      await login(data.access_token);
      
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      {/* Left Panel - Brand Showcase */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-primary p-16 lg:flex">
        {/* Abstract Background Decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl animate-float" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        </div>
        
        <div className="z-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-2xl">
            <CheckSquare className="h-7 w-7" />
          </div>
          <span className="text-3xl font-black tracking-tighter text-white">HackDo</span>
        </div>

        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl font-black leading-tight tracking-tight text-white">
              Start your <br />
              <span className="text-indigo-200">journey.</span>
            </h1>
            <p className="mt-8 max-w-lg text-xl font-medium leading-relaxed text-indigo-100/80">
              Join thousands of professionals who have already upgraded their productivity game.
            </p>
          </motion.div>

          <div className="mt-12 space-y-6">
             <div className="flex items-center gap-4 text-white">
                <div className="h-2 w-2 rounded-full bg-indigo-300" />
                <span className="font-bold opacity-90">Unlimited project workspace</span>
             </div>
             <div className="flex items-center gap-4 text-white">
                <div className="h-2 w-2 rounded-full bg-indigo-300" />
                <span className="font-bold opacity-90">Advanced task analytics</span>
             </div>
             <div className="flex items-center gap-4 text-white">
                <div className="h-2 w-2 rounded-full bg-indigo-300" />
                <span className="font-bold opacity-90">Team collaboration tools</span>
             </div>
          </div>
        </div>

        <div className="z-10 text-sm font-bold text-indigo-100/50">
          © 2026 HackDo Global Inc.
        </div>
      </div>

      {/* Right Panel - Signup Form */}
      <div className="relative flex w-full flex-col justify-center px-8 lg:w-1/2 lg:px-32">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary lg:hidden"
            >
                <CheckSquare className="h-7 w-7" />
            </motion.div>
            <h2 className="text-4xl font-black tracking-tight text-foreground">Create Account</h2>
            <p className="mt-3 text-lg font-medium text-muted-foreground">
              Ready to take control? Let's get started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4 text-sm font-bold text-rose-600 dark:text-rose-400"
              >
                {error}
              </motion.div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm font-bold outline-none ring-primary/5 transition-all focus:border-primary focus:ring-8"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm font-bold outline-none ring-primary/5 transition-all focus:border-primary focus:ring-8"
                placeholder="name@company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm font-bold outline-none ring-primary/5 transition-all focus:border-primary focus:ring-8"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-primary py-4 text-sm font-black text-white shadow-2xl shadow-primary/30 transition-all hover:bg-primary/90 hover:-translate-y-1 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="animate-spin h-5 w-5" />
              ) : (
                <>
                  Create Pro Account
                  <UserPlus className="h-4 w-4 transition-transform group-hover:scale-110" />
                </>
              )}
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-sm font-bold text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="text-primary hover:underline">
                Sign in instead
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}