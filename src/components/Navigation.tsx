import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Home, Building2, BookOpen, Info } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  alwaysSolid?: boolean;
}

export function Navigation({ alwaysSolid = false }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const pathname = location?.pathname || '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
    alwaysSolidPaths.includes(pathname) ||
    alwaysSolidPathPrefixes.some(prefix => pathname?.startsWith(prefix));

  const navItems = [
    { name: 'Models & Pricing', path: '/models', icon: Home },
    { name: 'Success Stories', path: '/stories', icon: Building2 },
    { name: 'Learning Center', path: '/learning', icon: BookOpen },
    { name: 'About', path: '/about', icon: Info },
  ];

  const shouldShowSolid = alwaysSolid || shouldNavBeAlwaysSolid || isScrolled;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      shouldShowSolid ? 'bg-primary shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - GitHub raw URL */}
          <Link 
            to="/" 
            className="flex items-center group"
          >
            <img 
              src="https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/CFSC-LogoV2%20-%20White.png"
              alt="Cold Form Steel Canada" 
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-terracotta ${
                  shouldShowSolid ? 'text-white' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild
              className={`font-semibold shadow-lg transition-transform hover:scale-105 border-0 ${
                shouldShowSolid ? 'bg-terracotta text-white hover:bg-terracotta/90' : 'bg-white text-terracotta hover:bg-white/90'
              }`}
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${shouldShowSolid ? 'text-white' : 'text-white'}`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 w-full px-3 py-4 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                <item.icon className="h-5 w-5 text-terracotta" />
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Button 
                asChild
                className="w-full h-12 text-lg bg-terracotta hover:bg-terracotta/90 text-white font-bold border-0"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}