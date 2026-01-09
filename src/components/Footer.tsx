import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/e2e217c234df09ee63fb7874604664b6915f74ac.png"
              alt="Cold Form Steel Canada"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 text-sm">
              Building Canada's future with precision-engineered cold-form steel homes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-white/80 hover:text-white text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/models" onClick={(e) => { e.preventDefault(); onNavigate('models'); }} className="text-white/80 hover:text-white text-sm transition-colors">
                  Explore Models
                </a>
              </li>
              <li>
                <a href="/learning" onClick={(e) => { e.preventDefault(); onNavigate('learning'); }} className="text-white/80 hover:text-white text-sm transition-colors">
                  Learning Centre
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="text-white/80 hover:text-white text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="text-white/80 hover:text-white text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/steel-vs-wood" onClick={(e) => { e.preventDefault(); onNavigate('steel-vs-wood'); }} className="text-white/80 hover:text-white text-sm transition-colors">
                  Steel vs. Wood
                </a>
              </li>
              <li>
                <a href="/five-day-build" onClick={(e) => { e.preventDefault(); onNavigate('five-day-build'); }} className="text-white/80 hover:text-white text-sm transition-colors">
                  5-Day Build Process
                </a>
              </li>
              <li>
                <a href="/stories" onClick={(e) => { e.preventDefault(); onNavigate('stories'); }} className="text-white/80 hover:text-white text-sm transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="/faq" onClick={(e) => { e.preventDefault(); onNavigate('faq'); }} className="text-white/80 hover:text-white text-sm transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <img src="https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/mail_icon.svg" alt="Email" className="w-4 h-4 mt-0.5 flex-shrink-0 brightness-0 invert" />
                <a href="mailto:info@coldformsteelcanada.com" className="text-white/80 hover:text-white transition-colors">
                  info@coldformsteelcanada.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <img src="https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/phone_icon.svg" alt="Phone" className="w-4 h-4 mt-0.5 flex-shrink-0 brightness-0 invert" />
                <a href="tel:+15195551234" className="text-white/80 hover:text-white transition-colors">
                  (519) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <img src="https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/location_icon.svg" alt="Location" className="w-4 h-4 mt-0.5 flex-shrink-0 brightness-0 invert" />
                <span className="text-white/80">
                  Ontario, Canada
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/80">
            © {currentYear} Cold Form Steel Canada. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('privacy')} className="text-sm text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('terms')} className="text-sm text-white/80 hover:text-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
