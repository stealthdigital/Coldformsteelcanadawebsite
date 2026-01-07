import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'models', label: 'Explore Models' },
    { id: 'learning', label: 'Learning Centre' },
    { id: 'stories', label: 'Success Stories' },
    { id: 'about', label: 'About' },
  ];

  const isActivePage = (pageId: string) => {
    if (pageId === 'home') return currentPage === 'home';
    return currentPage.startsWith(pageId);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center cursor-pointer"
          >
            <img 
              src="https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/e2e217c234df09ee63fb7874604664b6915f74ac.png" 
              alt="Cold Form Steel Canada" 
              className="h-10 sm:h-14 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {pages.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`hover:text-primary transition-colors ${
                  isActivePage(item.id) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-accent hover:bg-accent/90"
            >
              Start Your Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4">
            {pages.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 hover:text-primary transition-colors ${
                  isActivePage(item.id) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4">
              <Button 
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-accent hover:bg-accent/90"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
