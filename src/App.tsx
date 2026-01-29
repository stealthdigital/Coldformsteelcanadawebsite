import './styles/globals.css';
import { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate, BrowserRouter as Router } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { HeadMeta } from './components/HeadMeta';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Toaster } from 'sonner@2.0.3';
import { CommonImages } from './config/cloudinary-urls';
import { useAppNavigation } from './hooks/useAppNavigation';

// Import page components directly (they use named exports)
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { ModelsAndPricing } from './components/pages/ModelsAndPricing';
import { SuccessStories } from './components/pages/SuccessStories';
import { LearningCenter } from './components/pages/LearningCenter';
import { Contact } from './components/pages/Contact';

// Wrapper component for pages that need navigation
function PageWithNav({ children }: { children: (onNavigate: (page: string, id?: string) => void) => JSX.Element }) {
  const navigate = useAppNavigation();
  return children(navigate);
}

// Loading component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8f5]">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#665f55]"></div>
        <p className="mt-4 text-[#665f55]">Loading...</p>
      </div>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <HeadMeta />
        <Navigation />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<PageWithNav>{(onNavigate) => <Home onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/about" element={<PageWithNav>{(onNavigate) => <About onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/models" element={<PageWithNav>{(onNavigate) => <ModelsAndPricing onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/stories" element={<PageWithNav>{(onNavigate) => <SuccessStories onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/learning" element={<PageWithNav>{(onNavigate) => <LearningCenter onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/contact" element={<PageWithNav>{(onNavigate) => <Contact onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="*" element={<PageWithNav>{(onNavigate) => <Home onNavigate={onNavigate} />}</PageWithNav>} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <BackToTop />
        <Toaster position="top-right" />
        
        {/* Preload critical images */}
        <link rel="preload" as="image" href={CommonImages.logo} />
      </div>
    </HelmetProvider>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}