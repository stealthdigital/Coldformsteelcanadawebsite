import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { CommonImages } from '../config/cloudinary-urls';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <img 
              src={CommonImages.logoWhite}
              alt="Cold Form Steel Canada"
              className="h-12 w-auto"
            />
            <p className="text-white/80 leading-relaxed">
              Leading the way in cold-form steel construction across Canada. 
              Built for precision, speed, and sustainability.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/models" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Models & Pricing
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/learning" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Learning Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Models */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Our Models</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/models/piccolo" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  The Piccolo (420 sq ft)
                </Link>
              </li>
              <li>
                <Link to="/models/medio" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  The Medio (560 sq ft)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@coldformsteelcanada.com" className="text-white/80 hover:text-white transition-colors">
                  info@coldformsteelcanada.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+15195551234" className="text-white/80 hover:text-white transition-colors">
                  +1 (519) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  Ontario, Canada
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/50">
          <p>© {currentYear} Cold Form Steel Canada. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}