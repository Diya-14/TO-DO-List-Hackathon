import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { SearchProvider } from "@/context/SearchContext";
import { ToastProvider } from "@/context/ToastContext";
import { TaskRefreshProvider } from "@/context/TaskRefreshContext";
import { ChatWidget } from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackDo | Professional Task Management",
  description: "A formal, high-performance workspace for elite creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <TaskRefreshProvider>
            <SearchProvider>
              <ToastProvider>
                {children}
                <ChatWidget />
              </ToastProvider>
            </SearchProvider>
          </TaskRefreshProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
