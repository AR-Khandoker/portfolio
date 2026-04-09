import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { MainLayout } from './components/layout/MainLayout';
import { BrandLoader } from './components/shared/BrandLoader';
import { ErrorBoundary } from './components/shared/ErrorBoundary';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { HomePage } from './pages/HomePage';
import { initializeAdminAccount } from './utils/auth/autoInit';
import { useLenis } from './hooks/useLenis';
import { LoaderProvider, useLoaderComplete } from './contexts/LoaderContext';

// Lazy load non-critical pages for better initial load performance
const WorkPage = lazy(() => import('./pages/WorkPage').then(m => ({ default: m.WorkPage })));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage').then(m => ({ default: m.CaseStudyPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const LegalPage = lazy(() => import('./pages/LegalPage').then(m => ({ default: m.LegalPage })));
const AdminProjectsPage = lazy(() => import('./pages/AdminProjectsPage').then(m => ({ default: m.AdminProjectsPage })));
const AdminLoginPage = lazy(() => import('./pages/AdminLoginPage').then(m => ({ default: m.AdminLoginPage })));

// Simple loading fallback component
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-8 h-8 border-4 border-black/20 border-t-black rounded-full animate-spin" />
    </div>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);
  const { markLoaderComplete } = useLoaderComplete();

  // Initialize Lenis smooth scroll
  useLenis();

  // Auto-create admin account on first load
  useEffect(() => {
    initializeAdminAccount();
  }, []);

  const handleLoaderComplete = () => {
    setLoading(false);
    markLoaderComplete();
  };

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          {loading && <BrandLoader onComplete={handleLoaderComplete} />}
        </AnimatePresence>
        <MainLayout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/work/:id" element={<CaseStudyPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/admin/login" element={<AdminLoginPage />} />
              <Route 
                path="/admin/projects" 
                element={
                  <ProtectedRoute>
                    <AdminProjectsPage />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <LoaderProvider>
      <AppContent />
    </LoaderProvider>
  );
}

export default App;