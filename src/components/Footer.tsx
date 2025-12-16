import { Facebook, Instagram, Linkedin, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import framecadLogo from 'figma:asset/087975892a70159d9d57ef0b4d49661c5c139f2a.png';
import framecadLogoNew from 'figma:asset/9c8f7e6d5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d.png';
import framecadLogoUpdated from 'figma:asset/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b.png';
import framecadLogoFinal from 'figma:asset/1a5df16654a4eb18c1d923f59d0175c816f96be8.png';
import steelbuiltLogo from 'figma:asset/341e33826ef795d0cf2867c3001b627df15e31ff.png';
import cfscLogo from 'figma:asset/308e1fbaa5498e6932bee902e6edee7720954263.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={cfscLogo} 
                alt="Cold Form Steel Canada" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-secondary mb-4">
              Smarter. Stronger. Faster. Canadian-built steel homes for real people.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('models')} className="hover:text-accent transition-colors">
                  Explore Models
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('learning')} className="hover:text-accent transition-colors">
                  Learning Centre
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('stories')} className="hover:text-accent transition-colors">
                  Success Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-accent transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-accent transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cost Calculator</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Financing Options</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Warranties</a></li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-accent transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>905-642-1012</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@coldformsteelcanada.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Manufacturing across Ontario:<br />Hamilton • Barrie • Brampton</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="h-10 rounded px-3 flex items-center gap-2">
                <span className="text-2xl">🇨🇦</span>
                <span className="text-white text-sm">Made in Canada</span>
              </div>
              <img
                src={framecadLogoFinal}
                alt="FrameCAD Partner"
                className="h-10 rounded px-2"
              />
              <img
                src={steelbuiltLogo}
                alt="SteelBuilt Group"
                className="h-10 rounded px-2"
              />
            </div>
            <div className="text-secondary text-center md:text-right">
              <p>&copy; 2025 Cold Form Steel Canada. All rights reserved.</p>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <button onClick={() => onNavigate('privacy')} className="hover:text-accent transition-colors">Privacy Policy</button>
                <button onClick={() => onNavigate('terms')} className="hover:text-accent transition-colors">Terms of Service</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}