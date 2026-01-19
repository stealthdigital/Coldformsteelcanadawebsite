import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { PageWrapper } from './components/PageWrapper';
import { HeadMeta } from './components/HeadMeta';
import { BackToTop } from './components/BackToTop';
import { Toaster } from './components/ui/sonner';

// Eagerly load Home page for best FCP
import { Home } from './components/pages/Home';

// Lazy load all other pages for code splitting
const ModelsAndPricing = lazy(() => import('./components/pages/ModelsAndPricing').then(m => ({ default: m.ModelsAndPricing })));
const LearningCenter = lazy(() => import('./components/pages/LearningCenter').then(m => ({ default: m.LearningCenter })));
const SuccessStories = lazy(() => import('./components/pages/SuccessStories').then(m => ({ default: m.SuccessStories })));
const About = lazy(() => import('./components/pages/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('./components/pages/Contact').then(m => ({ default: m.Contact })));
const Piccolo = lazy(() => import('./components/pages/Piccolo').then(m => ({ default: m.Piccolo })));
const Medio = lazy(() => import('./components/pages/Medio').then(m => ({ default: m.Medio })));

// Success Stories - Lazy loaded
const BarndominiumProjectFortErie = lazy(() => import('./components/pages/BarndominiumProjectFortErie').then(m => ({ default: m.BarndominiumProjectFortErie })));
const MarvelousBarndominium = lazy(() => import('./components/pages/MarvelousBarndominium').then(m => ({ default: m.MarvelousBarndominium })));
const ModernTwoStoryBarndominium = lazy(() => import('./components/pages/ModernTwoStoryBarndominium').then(m => ({ default: m.ModernTwoStoryBarndominium })));
const FamilyBarndominium = lazy(() => import('./components/pages/FamilyBarndominium').then(m => ({ default: m.FamilyBarndominium })));
const DualStructurePownal = lazy(() => import('./components/pages/DualStructurePownal').then(m => ({ default: m.DualStructurePownal })));
const DIYBarndominiumStrathroy = lazy(() => import('./components/pages/DIYBarndominiumStrathroy').then(m => ({ default: m.DIYBarndominiumStrathroy })));
const SisterBarndominiums = lazy(() => import('./components/pages/SisterBarndominiums').then(m => ({ default: m.SisterBarndominiums })));
const BlueMountainDetail = lazy(() => import('./components/pages/BlueMountainDetail').then(m => ({ default: m.BlueMountainDetail })));

// Learning Center Articles - Lazy loaded
const SteelVsWoodArticle = lazy(() => import('./components/pages/SteelVsWoodArticle').then(m => ({ default: m.SteelVsWoodArticle })));
const CFSvsTraditionalSteelArticle = lazy(() => import('./components/pages/CFSvsTraditionalSteelArticle').then(m => ({ default: m.CFSvsTraditionalSteelArticle })));
const FactoryTourArticle = lazy(() => import('./components/pages/FactoryTourArticle').then(m => ({ default: m.FactoryTourArticle })));
const FrameCADArticle = lazy(() => import('./components/pages/FrameCADArticle').then(m => ({ default: m.FrameCADArticle })));
const FiveDayBuildArticle = lazy(() => import('./components/pages/FiveDayBuildArticle').then(m => ({ default: m.FiveDayBuildArticle })));
const ADUTimelineArticle = lazy(() => import('./components/pages/ADUTimelineArticle').then(m => ({ default: m.ADUTimelineArticle })));
const PermitArticle = lazy(() => import('./components/pages/PermitArticle').then(m => ({ default: m.PermitArticle })));
const SteelDownsidesArticle = lazy(() => import('./components/pages/SteelDownsidesArticle').then(m => ({ default: m.SteelDownsidesArticle })));
const CostDriversArticle = lazy(() => import('./components/pages/CostDriversArticle').then(m => ({ default: m.CostDriversArticle })));
const FinancingArticle = lazy(() => import('./components/pages/FinancingArticle').then(m => ({ default: m.FinancingArticle })));
const SteelRustArticle = lazy(() => import('./components/pages/SteelRustArticle').then(m => ({ default: m.SteelRustArticle })));
const RedditMythsArticle = lazy(() => import('./components/pages/RedditMythsArticle').then(m => ({ default: m.RedditMythsArticle })));

// Legal Pages - Lazy loaded
const PrivacyPolicy = lazy(() => import('./components/pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./components/pages/TermsOfService').then(m => ({ default: m.TermsOfService })));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout wrapper that determines navigation style
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  // Determine if navigation should always be solid based on current path
  const alwaysSolidPaths = [
    '/models/piccolo',
    '/models/medio',
    '/contact',
    '/privacy-policy',
    '/terms-of-service'
  ];
  
  const alwaysSolidPathPrefixes = [
    '/learning/',
    '/stories/'
  ];
  
  const shouldNavBeAlwaysSolid = 
    alwaysSolidPaths.includes(location.pathname) ||
    alwaysSolidPathPrefixes.some(prefix => location.pathname.startsWith(prefix));

  return (
    <div className="flex flex-col min-h-screen">
      <HeadMeta 
        title="Cold Form Steel Canada | Modern Steel Frame Homes | Framed in 4-5 Days"
        description="Build your dream home faster with factory-built cold-form steel construction. The Piccolo model: 392 sq ft studio framed in 4-5 days. Durable, fire-resistant, and eco-friendly."
        image="https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Steel-Built%20Barndo%20Retreat/Completed%20Barndominium.png"
      />
      <Navigation alwaysSolid={shouldNavBeAlwaysSolid} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <Toaster position="top-center" />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<PageWrapper>{(onNavigate) => <Home onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/models" element={<PageWrapper>{(onNavigate) => <ModelsAndPricing onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/learning" element={<PageWrapper>{(onNavigate) => <LearningCenter onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/stories" element={<PageWrapper>{(onNavigate) => <SuccessStories onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/about" element={<PageWrapper>{(onNavigate) => <About onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/contact" element={<PageWrapper>{(onNavigate) => <Contact onNavigate={onNavigate} />}</PageWrapper>} />
              
              {/* Model Detail Pages */}
              <Route path="/models/piccolo" element={<PageWrapper>{(onNavigate) => <Piccolo onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/models/medio" element={<PageWrapper>{(onNavigate) => <Medio onNavigate={onNavigate} />}</PageWrapper>} />
              
              {/* Success Story Detail Pages */}
              <Route path="/stories/fort-erie-barndominium" element={<PageWrapper>{(onNavigate) => <BarndominiumProjectFortErie onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/stories/marvelous-barndominium" element={<PageWrapper>{(onNavigate) => <MarvelousBarndominium onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/stories/modern-two-story-barndominium" element={<PageWrapper>{(onNavigate) => <ModernTwoStoryBarndominium onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/stories/family-barndominium" element={<PageWrapper>{(onNavigate) => <FamilyBarndominium onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/stories/dual-structure-pownal" element={<PageWrapper>{(onNavigate) => <DualStructurePownal onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/stories/diy-barndominium-strathroy" element={<PageWrapper>{(onNavigate) => <DIYBarndominiumStrathroy onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/stories/sister-barndominiums" element={<PageWrapper>{(onNavigate) => <SisterBarndominiums onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/stories/blue-mountain" element={<PageWrapper>{(onNavigate) => <BlueMountainDetail onNavigate={onNavigate} />}</PageWrapper>} />
              
              {/* Learning Center Articles */}
              <Route path="/learning/steel-vs-wood" element={<PageWrapper>{(onNavigate) => <SteelVsWoodArticle onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/learning/cold-form-steel-vs-traditional-steel" element={<PageWrapper>{(onNavigate) => <CFSvsTraditionalSteelArticle onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/learning/factory-tour" element={<PageWrapper>{(onNavigate) => <FactoryTourArticle onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/learning/framecad-technology" element={<PageWrapper>{(onNavigate) => <FrameCADArticle onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/learning/five-day-build" element={<PageWrapper>{(onNavigate) => <FiveDayBuildArticle onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/learning/adu-timeline" element={<PageWrapper>{(onNavigate) => <ADUTimelineArticle onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/learning/permit-process" element={<PageWrapper>{(onNavigate) => <PermitArticle onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/learning/steel-construction-downsides" element={<PageWrapper>{(onNavigate) => <SteelDownsidesArticle onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/learning/cost-drivers" element={<PageWrapper>{(onNavigate) => <CostDriversArticle onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/learning/financing-options" element={<PageWrapper>{(onNavigate) => <FinancingArticle onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/learning/does-steel-rust" element={<PageWrapper>{(onNavigate) => <SteelRustArticle onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/learning/reddit-myths-debunked" element={<PageWrapper>{(onNavigate) => <RedditMythsArticle onNavigate={onNavigate} />}</PageWrapper>} />
              
              {/* Legal Pages */}
              <Route path="/privacy-policy" element={<PageWrapper>{(onNavigate) => <PrivacyPolicy onNavigate={onNavigate} />}</PageWrapper>} />
              <Route path="/terms-of-service" element={<PageWrapper>{(onNavigate) => <TermsOfService onNavigate={onNavigate} />}</PageWrapper>} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}