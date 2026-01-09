import { useState, useEffect } from 'react';
import { HeadMeta } from './components/HeadMeta';
import { DIYBarndominiumStrathroy } from './components/pages/DIYBarndominiumStrathroy';
import { MarvelousBarndominium } from './components/pages/MarvelousBarndominium';
import { ModernTwoStoryBarndominium } from './components/pages/ModernTwoStoryBarndominium';
import { BarndominiumProjectFortErie } from './components/pages/BarndominiumProjectFortErie';
import { SisterBarndominiums } from './components/pages/SisterBarndominiums';
import { CFSvsTraditionalSteelArticle } from './components/pages/CFSvsTraditionalSteelArticle';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { ModelsAndPricing } from './components/pages/ModelsAndPricing';
import { LearningCenter } from './components/pages/LearningCenter';
import { SuccessStories } from './components/pages/SuccessStories';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { ArticlePage } from './components/pages/ArticlePage';
import { ProjectDetail } from './components/pages/ProjectDetail';
import { BlueMountainDetail } from './components/pages/BlueMountainDetail';
import { FamilyBarndominium } from './components/pages/FamilyBarndominium';
import { DualStructurePownal } from './components/pages/DualStructurePownal';
import { FrameCADArticle } from './components/pages/FrameCADArticle';
import { ADUTimelineArticle } from './components/pages/ADUTimelineArticle';
import { SteelDownsidesArticle } from './components/pages/SteelDownsidesArticle';
import { SteelRustArticle } from './components/pages/SteelRustArticle';
import { RedditMythsArticle } from './components/pages/RedditMythsArticle';
import { CostDriversArticle } from './components/pages/CostDriversArticle';
import { FiveDayBuildArticle } from './components/pages/FiveDayBuildArticle';
import { PermitArticle } from './components/pages/PermitArticle';
import { FinancingArticle } from './components/pages/FinancingArticle';
import { SteelVsWoodArticle } from './components/pages/SteelVsWoodArticle';
import { FactoryTourArticle } from './components/pages/FactoryTourArticle';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { TermsOfService } from './components/pages/TermsOfService';
import { Piccolo } from './components/pages/Piccolo';
import { Medio } from './components/pages/Medio';
import { FAQ } from './components/pages/FAQ';
import { Button } from './components/ui/button';
import { ArrowUp } from 'lucide-react';

export default function App() {
  // Initialize state from URL if possible
  const getInitialPage = () => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.substring(1); // remove leading slash
    if (!path) return 'home';
    
    // Handle specific sub-routes if needed, or just return the path
    // For this flat structure, returning the path works for most cases
    return path;
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage());
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<any>(null);
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);

  const handleNavigate = (page: string, data?: any) => {
    setCurrentPage(page);
    if (page === 'article' && data) {
      setCurrentArticle(data);
    }
    if (page === 'project' && data) {
      setCurrentProjectId(data);
    }
    
    // Update URL
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({ page, data }, '', url);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;
      if (state && state.page) {
        setCurrentPage(state.page);
        if (state.data) {
          if (state.page === 'article') setCurrentArticle(state.data);
          if (state.page === 'project') setCurrentProjectId(state.data);
        }
      } else {
        // Fallback to parsing URL if no state (e.g. initial load or external link)
        const path = window.location.pathname.substring(1);
        setCurrentPage(path || 'home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Show back to top button on scroll
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  // Add scroll listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'models':
        return <ModelsAndPricing onNavigate={handleNavigate} />;
      case 'learning':
        return <LearningCenter onNavigate={handleNavigate} />;
      case 'article':
        return currentArticle ? (
          <ArticlePage onNavigate={handleNavigate} article={currentArticle} />
        ) : (
          <LearningCenter onNavigate={handleNavigate} />
        );
      case 'cfs-vs-traditional-steel':
        return <CFSvsTraditionalSteelArticle onNavigate={handleNavigate} />;
      case 'steel-vs-wood':
        return <SteelVsWoodArticle onNavigate={handleNavigate} />;
      case 'framecad':
        return <FrameCADArticle onNavigate={handleNavigate} />;
      case 'adu-timeline':
        return <ADUTimelineArticle onNavigate={handleNavigate} />;
      case 'steel-downsides':
        return <SteelDownsidesArticle onNavigate={handleNavigate} />;
      case 'steel-rust':
        return <SteelRustArticle onNavigate={handleNavigate} />;
      case 'reddit-myths':
        return <RedditMythsArticle onNavigate={handleNavigate} />;
      case 'cost-drivers':
        return <CostDriversArticle onNavigate={handleNavigate} />;
      case 'five-day-build':
        return <FiveDayBuildArticle onNavigate={handleNavigate} />;
      case 'permit':
        return <PermitArticle onNavigate={handleNavigate} />;
      case 'financing':
        return <FinancingArticle onNavigate={handleNavigate} />;
      case 'factory-tour':
        return <FactoryTourArticle onNavigate={handleNavigate} />;
      case 'stories':
        return <SuccessStories onNavigate={handleNavigate} />;
      case 'success-stories':
        return <SuccessStories onNavigate={handleNavigate} />;
      case 'project':
        return currentProjectId ? (
          currentProjectId === 'blue-mountain' ? (
            <BlueMountainDetail onNavigate={handleNavigate} />
          ) : currentProjectId === 'family-barndominium' ? (
            <FamilyBarndominium onNavigate={handleNavigate} />
          ) : currentProjectId === 'dual-structure-pownal' ? (
            <DualStructurePownal onNavigate={handleNavigate} />
          ) : currentProjectId === 'diy-barndominium-strathroy' ? (
            <DIYBarndominiumStrathroy onNavigate={handleNavigate} />
          ) : currentProjectId === 'marvelous-barndominium' ? (
            <MarvelousBarndominium onNavigate={handleNavigate} />
          ) : currentProjectId === 'modern-two-story-barndominium' ? (
            <ModernTwoStoryBarndominium onNavigate={handleNavigate} />
          ) : currentProjectId === 'barndominium-project-fort-erie' ? (
            <BarndominiumProjectFortErie onNavigate={handleNavigate} />
          ) : currentProjectId === 'sister-barndominiums' ? (
            <SisterBarndominiums onNavigate={handleNavigate} />
          ) : (
            <ProjectDetail onNavigate={handleNavigate} projectId={currentProjectId} />
          )
        ) : (
          <SuccessStories onNavigate={handleNavigate} />
        );
      case 'blue-mountain':
        return <BlueMountainDetail onNavigate={handleNavigate} />;
      case 'family-barndominium':
        return <FamilyBarndominium onNavigate={handleNavigate} />;
      case 'dual-structure-pownal':
        return <DualStructurePownal onNavigate={handleNavigate} />;
      case 'diy-barndominium-strathroy':
        return <DIYBarndominiumStrathroy onNavigate={handleNavigate} />;
      case 'marvelous-barndominium':
        return <MarvelousBarndominium onNavigate={handleNavigate} />;
      case 'modern-two-story-barndominium':
        return <ModernTwoStoryBarndominium onNavigate={handleNavigate} />;
      case 'barndominium-project-fort-erie':
        return <BarndominiumProjectFortErie onNavigate={handleNavigate} />;
      case 'sister-barndominiums':
        return <SisterBarndominiums onNavigate={handleNavigate} />;
      case 'piccolo':
        return <Piccolo onNavigate={handleNavigate} />;
      case 'medio':
        return <Medio onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPolicy onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsOfService onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQ onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeadMeta 
        title="Cold Form Steel Canada"
        description="Build your dream home faster with factory-built cold-form steel construction. The Piccolo model: 392 sq ft studio framed in 4-5 days. Durable, fire-resistant, and eco-friendly."
        image="https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Steel-Built%20Barndo%20Retreat/Completed%20Barndominium.png"
      />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 bg-accent hover:bg-accent/90 text-white shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
}