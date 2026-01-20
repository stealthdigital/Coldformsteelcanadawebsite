import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Check, 
  ArrowLeft, 
  ArrowRight,
  Home, 
  Ruler, 
  Bed, 
  Bath, 
  Square, 
  Calendar,
  Shield,
  Sparkles,
  DollarSign,
  Clock,
  Heart,
  ExternalLink
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { getSEO } from '../../config/seo';
import { HeadMeta } from '../HeadMeta';
import { YouTubeEmbed } from '../YouTubeEmbed';

// GitHub raw image URLs using assets branch
const piccoloFloorPlan = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/PICCOLO-FLOOR-PLAN.jpg';

// Dark Exterior images
const piccoloDarkExt1 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/CFS-Piccolo-Dark-Exterior-2.jpg';
const piccoloDarkExt2 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/CFS-Piccolo-Dark-Exterior-6-2023-08-02.jpg';
const piccoloDarkExt3 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/CFS-Piccolo-East-Entry-Dark-Exterior-1-2023-09-07.jpg';

// Light Exterior images
const piccoloLightExt1 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/CFS-Piccolo-Light-Exterior-3-2023-08-02.jpg';
const piccoloLightExt2 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/CFS-Piccolo-Light-Exterior-5-2023-08-02.jpg';
const piccoloLightExt3 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/CFS-Piccolo-East-Entry-Light-Exterior-1-2023-09-07.jpg';

// Dark Interior images
const piccoloDarkInt1 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/CFS-Piccolo-Dark-Interior-2-2023-08-02.jpg';
const piccoloDarkInt2 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/CFS-Piccolo-Dark-Interior-3-2023-08-02.jpg';
const piccoloDarkInt3 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/CFS-Piccolo-Dark-Interior-Bedroom-2023-08-02.jpg';

// Light Interior images
const piccoloLightInt1 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/CFS-Piccolo-Light-Interior-1-2023-08-02.jpg';
const piccoloLightInt2 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/CFS-Piccolo-Light-Interior-Bathroom-1-2023-08-02.jpg';
const piccoloLightInt3 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/CFS-Piccolo-Light-interior-Bathroom-2-2023-08-02.jpg';
const piccoloLightInt4 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/CFS-Piccolo-Light-Interior-Bedroom-1-2023-08-02.jpg';

interface PiccoloProps {
  onNavigate: (page: string) => void;
}

export function Piccolo({ onNavigate }: PiccoloProps) {
  const [activeTab, setActiveTab] = useState<'Dark' | 'Light'>('Dark');
  const [activeCategory, setActiveCategory] = useState<'Exterior' | 'Interior'>('Exterior');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false);

  const galleryImages = {
    Dark: {
      Exterior: [piccoloDarkExt1, piccoloDarkExt2, piccoloDarkExt3],
      Interior: [piccoloDarkInt1, piccoloDarkInt2, piccoloDarkInt3]
    },
    Light: {
      Exterior: [piccoloLightExt1, piccoloLightExt2, piccoloLightExt3],
      Interior: [piccoloLightInt1, piccoloLightInt2, piccoloLightInt3, piccoloLightInt4]
    }
  };

  const currentImages = galleryImages[activeTab][activeCategory];

  // Reset selected image when changing filter or category
  const handleFilterChange = (filter: 'Dark' | 'Light') => {
    setActiveTab(filter);
    setSelectedImageIndex(0);
  };

  const handleCategoryChange = (category: 'Exterior' | 'Interior') => {
    setActiveCategory(category);
    setSelectedImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <HeadMeta 
        title="Piccolo Model | 392 sq ft Steel Frame Studio | Cold Form Steel Canada"
        description="The Piccolo model: 392 sq ft of precision-engineered living space. 1 bedroom studio framed in 4-5 days. Fireproof, rot-proof, and built for Canadian winters. Explore dark and light design options."
        image={piccoloDarkExt1}
      />
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Button variant="ghost" onClick={() => onNavigate('models')} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Models
          </Button>
          <div className="flex items-center gap-4">
            <Badge className="bg-primary/10 text-primary border-0 font-bold">Studio Model</Badge>
            <h1 className="text-xl font-bold hidden sm:block">The Piccolo</h1>
          </div>
        </div>
      </div>

      {/* Hero Gallery Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Gallery Control & Preview */}
            <div className="lg:col-span-8">
              <Card className="overflow-hidden border-0 shadow-2xl bg-white">
                <div className="p-6 border-b flex flex-wrap items-center justify-between gap-4">
                  <div className="flex bg-muted rounded-lg p-1">
                    <button 
                      onClick={() => handleFilterChange('Dark')}
                      className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'Dark' ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      Dark Mode
                    </button>
                    <button 
                      onClick={() => handleFilterChange('Light')}
                      className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'Light' ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      Light Mode
                    </button>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => handleCategoryChange('Exterior')}
                      className={`text-sm font-bold border-b-2 transition-all pb-1 ${activeCategory === 'Exterior' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                    >
                      Exterior
                    </button>
                    <button 
                      onClick={() => handleCategoryChange('Interior')}
                      className={`text-sm font-bold border-b-2 transition-all pb-1 ${activeCategory === 'Interior' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                    >
                      Interior
                    </button>
                  </div>
                </div>
                
                <div className="relative overflow-hidden bg-muted max-h-[600px] flex items-center justify-center">
                  <ImageWithFallback 
                    src={currentImages[selectedImageIndex]}
                    alt={`Piccolo ${activeTab} ${activeCategory}`}
                    className="w-full h-auto object-contain max-h-[600px]"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/70 text-white border-0 font-bold px-3 py-1">
                      {activeTab} {activeCategory}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-2 p-4 bg-muted/20">
                  {currentImages.map((img, i) => (
                    <div key={i} className="aspect-video rounded-md overflow-hidden bg-muted cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImageIndex(i)}>
                      <ImageWithFallback src={img} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Quick Specs */}
            <div className="lg:col-span-4 space-y-6">
              <Card className="p-8 border-0 shadow-xl bg-white">
                <h2 className="text-3xl font-bold mb-6">The Piccolo</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed font-medium">
                  A beautifully designed 392 sq. ft. studio that delivers everything you need in a compact, efficient layout. Perfect as a backyard suite, rental unit, or guest house.
                </p>
                
                {/* Pricing Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Total Price</div>
                    <div className="text-2xl font-bold text-primary">$138.6K</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Monthly Payment*</div>
                    <div className="text-2xl font-bold text-primary">$638</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Down Payment</div>
                    <div className="text-2xl font-bold text-primary">$34.6K</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Days to Frame</div>
                    <div className="text-2xl font-bold text-primary">4-5</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground italic text-center mb-8">
                  *Based on 25% down, 5.5% rate, 25-year term
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                      <Square className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Total Area</div>
                      <div className="text-xl font-bold">392 Sq Ft • 14' × 28'</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                      <Bed className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Bedrooms</div>
                      <div className="text-xl font-bold">1 Studio Loft</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                      <Bath className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Bathrooms</div>
                      <div className="text-xl font-bold">1 Full Bath</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 space-y-4">
                  <Button className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white font-bold" onClick={() => onNavigate('contact')}>
                    Request a Quote
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-primary text-primary hover:bg-primary/5 font-bold">
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-primary text-white border-0 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-white" />
                  <h3 className="font-bold">Steelbuilt Quality</h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed font-medium">
                  Every Piccolo is built with the same industrial-grade cold-form steel as our largest barndominiums.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-24 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-white border-0 font-bold px-4 py-1">Smart Design</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">Efficiency Meets Elegance</h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
                The Piccolo is engineered to maximize every square inch. From the open-concept living area to the high-efficiency building envelope, this model is the perfect choice for an ADU, guest house, or minimalist retreat.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Full-sized kitchen capacity",
                  "Large panoramic windows",
                  "9-foot ceiling height",
                  "High-performance insulation",
                  "Millimeter precision steel",
                  "Customizable interior finishes"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-bold text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8 border-2 border-primary/10 shadow-2xl bg-stone-50">
              <div 
                className="aspect-square relative flex items-center justify-center cursor-pointer group"
                onClick={() => setIsFloorPlanOpen(true)}
              >
                <ImageWithFallback 
                  src={piccoloFloorPlan} 
                  alt="Piccolo Floor Plan" 
                  className="w-full h-full object-contain transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-4">
                    <ZoomIn className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
              <div className="text-center mt-6 text-sm text-muted-foreground font-bold">
                *Conceptual layout. Dimensions are approximate.
              </div>
            </Card>
          </div>

          <Card className="mt-12 p-8 bg-primary/5 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Smart Layout</h3>
              <p className="text-lg text-muted-foreground">
                392 sq. ft. (14' × 28') designed for maximum efficiency and comfort
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Tech Specs Bento */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Specifications</h2>
            <p className="text-lg text-muted-foreground font-medium">Built to the highest standards of Canadian engineering</p>
          </div>

          {/* Detailed Specs Table */}
          <Card className="mb-12 p-8 border-0 shadow-lg bg-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-muted-foreground font-bold">Square Footage</span>
                  <span className="font-bold">392 sq ft</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-muted-foreground font-bold">Dimensions</span>
                  <span className="font-bold">14' × 28'</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-muted-foreground font-bold">Bathrooms</span>
                  <span className="font-bold">1</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-muted-foreground font-bold">Frame Time</span>
                  <span className="font-bold">4-5 days</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-muted-foreground font-bold">Starting From</span>
                  <span className="font-bold">$138,590</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 border-0 shadow-lg bg-white">
              <h3 className="text-xl font-bold mb-4 text-primary">Structural</h3>
              <ul className="space-y-4">
                <li className="flex justify-between text-sm border-b pb-2 font-medium">
                  <span className="text-muted-foreground">Frame material</span>
                  <span className="font-bold">G550 CFS Steel</span>
                </li>
                <li className="flex justify-between text-sm border-b pb-2 font-medium">
                  <span className="text-muted-foreground">Snow Load</span>
                  <span className="font-bold">60 PSF Standard</span>
                </li>
                <li className="flex justify-between text-sm border-b pb-2 font-medium">
                  <span className="text-muted-foreground">Wind Rating</span>
                  <span className="font-bold">120 MPH</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-white">
              <h3 className="text-xl font-bold mb-4 text-primary">Envelope</h3>
              <ul className="space-y-4">
                <li className="flex justify-between text-sm border-b pb-2 font-medium">
                  <span className="text-muted-foreground">Wall R-Value</span>
                  <span className="font-bold">R-30 Continuous</span>
                </li>
                <li className="flex justify-between text-sm border-b pb-2 font-medium">
                  <span className="text-muted-foreground">Roof R-Value</span>
                  <span className="font-bold">R-50 Spray Foam</span>
                </li>
                <li className="flex justify-between text-sm border-b pb-2 font-medium">
                  <span className="text-muted-foreground">Windows</span>
                  <span className="font-bold">Triple Pane Std</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-white">
              <h3 className="text-xl font-bold mb-4 text-primary">Timeline</h3>
              <ul className="space-y-4">
                <li className="flex justify-between text-sm border-b pb-2 font-medium">
                  <span className="text-muted-foreground">Factory Production</span>
                  <span className="font-bold">4-6 Weeks</span>
                </li>
                <li className="flex justify-between text-sm border-b pb-2 font-medium">
                  <span className="text-muted-foreground">Site Framing</span>
                  <span className="font-bold">2-3 Days</span>
                </li>
                <li className="flex justify-between text-sm border-b pb-2 font-medium">
                  <span className="text-muted-foreground">Lock-up</span>
                  <span className="font-bold">5-7 Days Total</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Cold-Form Steel Advantage Section */}
      <section className="py-24 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-white border-0 font-bold px-4 py-1">Manufacturing Excellence</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">Cold-Form Steel Advantage</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed font-medium">
                The Piccolo showcases the efficiency of cold-form steel construction. Precision-engineered panels arrive ready to assemble, reducing build time from months to days.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                Each component is manufactured in Canada to exact specifications, ensuring perfect fit and superior quality.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="space-y-3">
                {[
                  'Engineered steel frame structure',
                  'Insulated wall & roof panels',
                  'Windows & exterior doors',
                  'Weatherproof exterior finish',
                  'Full interior finish on Turnkey model',
                  'Signature kitchen',
                  'Spacious bathroom',
                  'In-suite washer/dryer',
                  'High-efficiency mini-split heating/cooling system'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Card className="mt-8 p-6 bg-amber-50 border-amber-200">
                <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Important Note
                </h4>
                <p className="text-sm text-amber-900 leading-relaxed">
                  Appliances are supplied once the heating source (electric / gas / propane) is confirmed. Monthly payments available; estimate shown at checkout.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cold-Form Steel Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Cold-Form Steel?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The Piccolo proves that great things come in small packages—especially when built with advanced steel technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 border-0 shadow-lg bg-white text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Flame className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fire Resistant</h3>
              <p className="text-muted-foreground leading-relaxed">
                Non-combustible steel framing provides superior fire protection
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-white text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quick Build</h3>
              <p className="text-muted-foreground leading-relaxed">
                Framed in just 4-5 days with precision-engineered panels
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-white text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eco-Friendly</h3>
              <p className="text-muted-foreground leading-relaxed">
                100% recyclable steel with minimal waste
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-white text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Built to Last</h3>
              <p className="text-muted-foreground leading-relaxed">
                No warping, mold, termites, or deterioration.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Tour Section */}
      <section className="py-24 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-12 rounded-3xl border border-primary/20">
            <div className="text-center mb-12">
              <Badge className="bg-primary text-white mb-6 border-0 px-6 py-2 text-base font-bold">Video Tour</Badge>
              <h2 className="text-4xl md:text-5xl mb-6 font-bold">Walk Through the Piccolo</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                See every detail of this beautifully designed compact home. Experience the quality and craftsmanship that makes the Piccolo special.
              </p>
            </div>

            {/* Video Embed */}
            <YouTubeEmbed
              videoId="DZ-ZeqDqn-4"
              title="Walk Through the Piccolo"
              aspectRatio="9/16"
              className="w-full max-w-md mx-auto mb-12 rounded-2xl shadow-2xl overflow-hidden"
            />

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-bold mb-3 text-foreground text-lg">Complete Interior Tour</h4>
                <p className="text-muted-foreground leading-relaxed">
                  See the kitchen, bathroom, and living spaces in detail
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-bold mb-3 text-foreground text-lg">Modern Finishes</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Quality materials and thoughtful design choices
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-bold mb-3 text-foreground text-lg">392 Square Feet Optimized</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Efficient studio layout maximizes every inch of space
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Home className="w-16 h-16 mx-auto mb-8 text-accent" strokeWidth={2.5} />
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Ready to Build Your Piccolo?</h2>
          <p className="text-xl mb-2 text-white/90 leading-relaxed">
            Get a personalized quote and see how affordable your new home can be.
          </p>
          <p className="text-xl mb-12 text-white/90 leading-relaxed">
            Our team is ready to answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-accent text-white hover:bg-accent/90 px-12 h-16 text-xl font-bold shadow-2xl border-0"
              onClick={() => onNavigate('contact')}
            >
              Get Your Quote
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white border-2 border-white text-primary hover:bg-white/90 px-12 h-16 text-xl font-bold shadow-2xl"
              onClick={() => onNavigate('models')}
            >
              Compare All Models
            </Button>
          </div>
        </div>
      </section>

      {/* Floor Plan Lightbox */}
      {isFloorPlanOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsFloorPlanOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors"
            onClick={() => setIsFloorPlanOpen(false)}
          >
            <X className="w-10 h-10" />
          </button>
          <div className="max-w-6xl max-h-[90vh] w-full">
            <ImageWithFallback 
              src={piccoloFloorPlan} 
              alt="Piccolo Floor Plan - Full Size" 
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}