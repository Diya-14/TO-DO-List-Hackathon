"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckSquare, 
  ArrowRight, 
  Zap, 
  Shield, 
  Layout, 
  Search, 
  Tag, 
  Calendar,
  Layers,
  CheckCircle2,
  ListTodo,
  Star,
  Users
} from 'lucide-react';

export function LandingPage() {
  const [activeStep, setActiveStep] = useState(0);

  const tutorialSteps = [
    {
      title: "Create Your Account",
      description: "Sign up with your email to start your productivity journey. Your data is securely saved in our database.",
      icon: <Users className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Add Your First Task",
      description: "Fill in the title, description, and tags. Set a priority to focus on what matters most.",
      icon: <PlusIcon className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Categorize with Tags",
      description: "Use tags like 'Work' or 'Personal' to organize your life. Our sidebar helps you switch views instantly.",
      icon: <Tag className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Search & Filter",
      description: "Find any task instantly using our professional search bar. Filters help you see only what you need.",
      icon: <Search className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1454165833767-027ffea10c3b?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
              <CheckSquare className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight">
              Hack<span className="text-primary">Do</span>
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/login" className="text-xs sm:text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </Link>
            <Link href="/signup" className="rounded-lg sm:rounded-xl bg-primary px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-0.5">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-48 lg:pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-20">
            <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/30 rounded-full blur-[80px] sm:blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-500/20 rounded-full blur-[80px] sm:blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest mb-6">
              The Ultimate Task Manager
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight sm:text-7xl leading-[1.2] sm:leading-[1.1]">
              Organize your work <br className="hidden sm:block" />
              <span className="text-primary">elevate your life.</span>
            </h1>
            <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground font-medium">
              HackDo is the next-generation task tracker designed for creators. 
              Stay focused, meet your deadlines, and achieve your goals with elegance.
            </p>
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
              <Link href="/signup" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-black text-white shadow-2xl shadow-primary/30 hover:bg-primary/90 transition-all hover:-translate-y-1">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button onClick={() => document.getElementById('tutorial')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-bold hover:bg-muted transition-all">
                How it works
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Why choose HackDo?</h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground font-medium">Built for speed, privacy, and productivity.</p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <FeatureCard 
              icon={<Zap className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500" />}
              title="Lightning Fast"
              description="Built with Next.js and FastAPI, HackDo feels instant. No more waiting for pages to load."
            />
            <FeatureCard 
              icon={<Shield className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-500" />}
              title="Secure & Private"
              description="Your data is your own. We use enterprise-grade encryption to keep your tasks safe."
            />
            <FeatureCard 
              icon={<Layout className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />}
              title="Beautiful UI"
              description="A professional SaaS aesthetic that inspires you to get things done every single day."
            />
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section id="tutorial" className="py-16 sm:py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="w-full lg:flex-1 space-y-8">
              <div>
                <span className="text-primary font-black uppercase tracking-widest text-xs sm:text-sm">Step-by-Step Guide</span>
                <h2 className="text-3xl font-black tracking-tight mt-2 sm:text-6xl">What is HackDo?</h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground font-medium">
                  HackDo is a professional productivity suite designed to help you organize your life. 
                </p>
              </div>

              <div className="space-y-4">
                {tutorialSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`flex w-full items-start gap-4 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-left transition-all ${
                      activeStep === index 
                      ? 'bg-card border border-border shadow-xl shadow-primary/5' 
                      : 'hover:bg-muted/50 opacity-60'
                    }`}
                  >
                    <div className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl ${
                      activeStep === index ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold">{step.title}</h4>
                      {activeStep === index && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                        >
                          <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                            {step.description}
                          </p>
                          {index === tutorialSteps.length - 1 && (
                            <Link href="/login" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-black text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                              Take me to Login
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full lg:flex-1 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -20 }}
                    className="relative aspect-video sm:aspect-square w-full overflow-hidden rounded-[32px] sm:rounded-[48px] border-4 sm:border-8 border-card shadow-2xl"
                  >
                    <img 
                      src={tutorialSteps[activeStep].image} 
                      alt={tutorialSteps[activeStep].title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </motion.div>
                </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="rounded-[32px] sm:rounded-[48px] bg-primary p-8 sm:p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 sm:-mr-48 sm:-mt-48" />
            <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32 sm:-ml-48 sm:-mb-48" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-3xl sm:text-6xl font-black tracking-tight">Ready to boost your speed?</h2>
              <p className="mx-auto mt-6 sm:mt-8 max-w-xl text-base sm:text-lg font-bold opacity-80">
                Join thousands of creators who use HackDo to manage their daily tasks.
              </p>
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
                <Link href="/signup" className="w-full sm:w-auto rounded-2xl bg-white px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-black text-primary shadow-xl transition-all hover:-translate-y-1 hover:bg-slate-50">
                  Create Account
                </Link>
                <Link href="/login" className="w-full sm:w-auto rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-bold backdrop-blur-sm transition-all hover:bg-white/20">
                  Sign In
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12 bg-muted/20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <CheckSquare className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold">HackDo</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
            &copy; 2026 HackDo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="group rounded-[32px] border border-border bg-card p-10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5">
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-muted transition-all group-hover:bg-primary/10 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-2xl font-black tracking-tight mb-4">{title}</h3>
      <p className="text-muted-foreground font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function PlusIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    )
}
