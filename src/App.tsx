import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { PageWrapper } from './components/PageWrapper';
import { Home } from './components/pages/Home';
import { ModelsAndPricing } from './components/pages/ModelsAndPricing';
import { LearningCenter } from './components/pages/LearningCenter';
import { SuccessStories } from './components/pages/SuccessStories';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Piccolo } from './components/pages/Piccolo';
import { Medio } from './components/pages/Medio';
import { BarndominiumProjectFortErie } from './components/pages/BarndominiumProjectFortErie';
import { MarvelousBarndominium } from './components/pages/MarvelousBarndominium';
import { ModernTwoStoryBarndominium } from './components/pages/ModernTwoStoryBarndominium';
import { FamilyBarndominium } from './components/pages/FamilyBarndominium';
import { DualStructurePownal } from './components/pages/DualStructurePownal';
import { DIYBarndominiumStrathroy } from './components/pages/DIYBarndominiumStrathroy';
import { SisterBarndominiums } from './components/pages/SisterBarndominiums';
import { BlueMountainDetail } from './components/pages/BlueMountainDetail';
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
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { TermsOfService } from './components/pages/TermsOfService';
import { HeadMeta } from './components/HeadMeta';
import { BackToTop } from './components/BackToTop';
import { Toaster } from './components/ui/sonner';

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
        </Layout>
      </Router>
    </HelmetProvider>
  );
}