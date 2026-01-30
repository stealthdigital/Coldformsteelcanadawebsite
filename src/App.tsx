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
import { Piccolo } from './components/pages/Piccolo';
import { Medio } from './components/pages/Medio';
import { SuccessStories } from './components/pages/SuccessStories';
import { BarndominiumProjectFortErie } from './components/pages/BarndominiumProjectFortErie';
import { MarvelousBarndominium } from './components/pages/MarvelousBarndominium';
import { ModernTwoStoryBarndominium } from './components/pages/ModernTwoStoryBarndominium';
import { FamilyBarndominium } from './components/pages/FamilyBarndominium';
import { DualStructurePownal } from './components/pages/DualStructurePownal';
import { DIYBarndominiumStrathroy } from './components/pages/DIYBarndominiumStrathroy';
import { SisterBarndominiums } from './components/pages/SisterBarndominiums';
import { BlueMountainDetail } from './components/pages/BlueMountainDetail';
import { SteelBuiltBarndo } from './components/pages/SteelBuiltBarndo';
import { LearningCenter } from './components/pages/LearningCenter';
import { Contact } from './components/pages/Contact';

// Import learning article components
import { SteelVsWoodArticle } from './components/pages/SteelVsWoodArticle';
import { CFSvsTraditionalSteelArticle } from './components/pages/CFSvsTraditionalSteelArticle';
import { FactoryTourArticle } from './components/pages/FactoryTourArticle';
import { FrameCADArticle } from './components/pages/FrameCADArticle';
import { FiveDayBuildArticle } from './components/pages/FiveDayBuildArticle';
import { ADUTimelineArticle } from './components/pages/ADUTimelineArticle';
import { PermitArticle } from './components/pages/PermitArticle';
import { SteelDownsidesArticle } from './components/pages/SteelDownsidesArticle';
import { CostDriversArticle } from './components/pages/CostDriversArticle';
import { FinancingArticle } from './components/pages/FinancingArticle';
import { SteelRustArticle } from './components/pages/SteelRustArticle';
import { RedditMythsArticle } from './components/pages/RedditMythsArticle';

// Import legal pages
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { TermsOfService } from './components/pages/TermsOfService';

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
              <Route path="/models/piccolo" element={<PageWithNav>{(onNavigate) => <Piccolo onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/models/medio" element={<PageWithNav>{(onNavigate) => <Medio onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/stories" element={<PageWithNav>{(onNavigate) => <SuccessStories onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/stories/fort-erie-barndominium" element={<PageWithNav>{(onNavigate) => <BarndominiumProjectFortErie onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/stories/marvelous-barndominium" element={<PageWithNav>{(onNavigate) => <MarvelousBarndominium onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/stories/modern-two-story-barndominium" element={<PageWithNav>{(onNavigate) => <ModernTwoStoryBarndominium onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/stories/family-barndominium" element={<PageWithNav>{(onNavigate) => <FamilyBarndominium onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/stories/dual-structure-pownal" element={<PageWithNav>{(onNavigate) => <DualStructurePownal onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/stories/diy-barndominium-strathroy" element={<PageWithNav>{(onNavigate) => <DIYBarndominiumStrathroy onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/stories/sister-barndominiums" element={<PageWithNav>{(onNavigate) => <SisterBarndominiums onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/stories/blue-mountain" element={<PageWithNav>{(onNavigate) => <BlueMountainDetail onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/stories/sainte-marthe-barndo" element={<PageWithNav>{(onNavigate) => <SteelBuiltBarndo onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/learning" element={<PageWithNav>{(onNavigate) => <LearningCenter onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/contact" element={<PageWithNav>{(onNavigate) => <Contact onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/learning/steel-vs-wood" element={<PageWithNav>{(onNavigate) => <SteelVsWoodArticle onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/learning/cold-form-steel-vs-traditional-steel" element={<PageWithNav>{(onNavigate) => <CFSvsTraditionalSteelArticle onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/learning/factory-tour" element={<PageWithNav>{(onNavigate) => <FactoryTourArticle onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/learning/framecad-technology" element={<PageWithNav>{(onNavigate) => <FrameCADArticle onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/learning/five-day-build" element={<PageWithNav>{(onNavigate) => <FiveDayBuildArticle onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/learning/adu-timeline" element={<PageWithNav>{(onNavigate) => <ADUTimelineArticle onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/learning/permit-process" element={<PageWithNav>{(onNavigate) => <PermitArticle onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/learning/steel-construction-downsides" element={<PageWithNav>{(onNavigate) => <SteelDownsidesArticle onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/learning/cost-drivers" element={<PageWithNav>{(onNavigate) => <CostDriversArticle onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/learning/financing-options" element={<PageWithNav>{(onNavigate) => <FinancingArticle onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/learning/does-steel-rust" element={<PageWithNav>{(onNavigate) => <SteelRustArticle onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/learning/reddit-myths-debunked" element={<PageWithNav>{(onNavigate) => <RedditMythsArticle onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/privacy-policy" element={<PageWithNav>{(onNavigate) => <PrivacyPolicy onNavigate={onNavigate} />}</PageWithNav>} />
              <Route path="/terms-of-service" element={<PageWithNav>{(onNavigate) => <TermsOfService onNavigate={onNavigate} />}</PageWithNav>} />
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