import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { PreFooterCTA } from './PreFooterCTA';
import { Toaster } from '../ui/sonner';
import { useLocation } from 'react-router-dom';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const showPreFooter = pathname !== '/contact';

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black/10 selection:text-black">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      {showPreFooter && <PreFooterCTA />}
      <Footer />
      <Toaster />
    </div>
  );
}
