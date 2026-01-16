import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Check, 
  ArrowLeft, 
  Home, 
  Ruler, 
  Bed, 
  Bath, 
  Square, 
  Calendar,
  Shield,
  Star,
  Download,
  Play,
  CheckCircle2,
  X,
  ZoomIn,
  Flame,
  Clock,
  Leaf,
  DollarSign,
  ArrowRight
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';

// GitHub raw image URLs using assets branch
const BASE_URL = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Medio';

// Floor Plan
const medioFloorPlan = `${BASE_URL}/MEDIO-FLOOR-PLAN.jpg`;

// Dark Exterior images
const medioDarkExt2 = `${BASE_URL}/Medio-Dark-Exterior-2.jpg`;
const medioDarkExt4 = `${BASE_URL}/Medio-Dark-Exterior-4.jpg`;

// Light Exterior images
const medioLightExt4 = `${BASE_URL}/Medio-Light-Exterior-4.jpg`;
const medioLightExt5 = `${BASE_URL}/Medio-Light-Exterior-5.jpg`;

// Dark Interior images
const medioDarkInt3 = `${BASE_URL}/Medio-Dark-Interior-3.jpg`;
const medioDarkInt5 = `${BASE_URL}/Medio-Dark-Interior-5.jpg`;
const medioDarkInt7 = `${BASE_URL}/Medio-Dark-Interior-7.jpg`;

// Light Interior images
const medioLightInt2 = `${BASE_URL}/Medio-Light-Interior-2.jpg`;
const medioLightInt3 = `${BASE_URL}/Medio-Light-Interior-3.jpg`;
const medioLightInt4Bedroom = `${BASE_URL}/Medio-Light-Interior-4-Bedroom.jpg`;

// Bathroom
const medioBathroom = `${BASE_URL}/Medio-Bathroom.jpg`;

interface MedioProps {
  onNavigate: (page: string) => void;
}

export function Medio({ onNavigate }: MedioProps) {
  const [activeTab, setActiveTab] = useState<'Exterior' | 'Interior' | 'FloorPlan'>('Exterior');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages = {
    Exterior: [medioDarkExt2, medioDarkExt4, medioLightExt4, medioLightExt5],
    Interior: [medioDarkInt3, medioDarkInt5, medioDarkInt7, medioLightInt2, medioLightInt3, medioLightInt4Bedroom, medioBathroom],
    FloorPlan: [medioFloorPlan]
  };

  // Image labels for identifying dark/light variants
  const imageLabels = {
    Exterior: ['Dark Exterior', 'Dark Exterior', 'Light Exterior', 'Light Exterior'],
    Interior: ['Dark Interior', 'Dark Interior', 'Dark Interior', 'Light Interior', 'Light Interior', 'Light Interior', 'Bathroom'],
    FloorPlan: ['Floor Plan']
  };

  const currentImages = galleryImages[activeTab];
  const currentLabels = imageLabels[activeTab];

  // Reset selected image when changing tabs
  const handleTabChange = (tab: 'Exterior' | 'Interior' | 'FloorPlan') => {
    setActiveTab(tab);
    setSelectedImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeadMeta 
        title="Medio Model | 560 sq ft Steel Frame Home | Cold Form Steel Canada"
        description="The Medio model: 560 sq ft of spacious, modern living. 1 bedroom home with premium finishes, framed in 4-5 days. Precision-engineered steel construction for maximum durability and efficiency."
        image={medioDarkExt2}
      />
      {/* Navigation Header */}
      <div className="bg-white border-b py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Button variant="ghost" onClick={() => onNavigate('models')} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Models
          </Button>
          <div className="flex items-center gap-4">
            <Badge className="bg-primary/10 text-primary border-0 font-bold">Residential Model</Badge>
            <h1 className="text-xl font-bold hidden sm:block">The Medio</h1>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white font-bold"
            onClick={() => onNavigate('contact')}
          >
            Get Pricing
          </Button>
        </div>
      </div>

      {/* Hero Gallery Section */}
      <section className="py-12 bg-muted/30 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Gallery Control & Preview */}
            <div className="lg:col-span-8">
              <Card className="overflow-hidden border-0 shadow-2xl bg-white">
                <div className="p-6 border-b flex flex-wrap items-center justify-between gap-4">
                  <div className="flex bg-muted rounded-lg p-1">
                    <button 
                      onClick={() => handleTabChange('Exterior')}
                      className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'Exterior' ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      Exterior
                    </button>
                    <button 
                      onClick={() => handleTabChange('Interior')}
                      className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'Interior' ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      Interior
                    </button>
                    <button 
                      onClick={() => handleTabChange('FloorPlan')}
                      className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'FloorPlan' ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      Floor Plan
                    </button>
                  </div>
                </div>
                
                <div className="relative overflow-hidden bg-muted max-h-[600px] flex items-center justify-center">
                  <ImageWithFallback 
                    src={currentImages[selectedImageIndex]}
                    alt={`Medio ${activeTab}`}
                    className="w-full h-auto object-contain max-h-[600px]"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/70 text-white border-0 font-bold px-3 py-1">
                      {currentLabels[selectedImageIndex]}
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
                <h2 className="text-3xl font-bold mb-6">The Medio</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed font-medium">
                  A spacious 560 sq. ft. one-bedroom home designed for comfort and style. Ideal for homeowners adding rental income, housing family, or creating a private backyard suite.
                </p>
                
                {/* Pricing Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Total Price</div>
                    <div className="text-2xl font-bold text-primary">$186K</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Monthly Payment*</div>
                    <div className="text-2xl font-bold text-primary">$857</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Down Payment</div>
                    <div className="text-2xl font-bold text-primary">$46.5K</div>
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
                      <div className="text-xl font-bold">560 Sq Ft • 14' × 40'</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                      <Bed className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Bedrooms</div>
                      <div className="text-xl font-bold">1 Full Bedroom</div>
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
                  <h3 className="font-bold">Precision Built</h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed font-medium">
                  Built using the latest cold-form steel technology, ensuring every wall is perfectly plumb and every corner perfectly square.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Specifications</h2>
            <p className="text-lg text-muted-foreground font-medium">Precision-engineered to Canadian building standards</p>
          </div>

          {/* Detailed Specs Table */}
          <Card className="mb-12 p-8 border-0 shadow-lg bg-white">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-muted-foreground font-bold">Square Footage</span>
                  <span className="font-bold">560 sq ft</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-muted-foreground font-bold">Dimensions</span>
                  <span className="font-bold">14' × 40'</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-muted-foreground font-bold">Bedrooms</span>
                  <span className="font-bold">1</span>
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
                  <span className="text-muted-foreground font-bold">Starting Price</span>
                  <span className="font-bold">$186,000</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
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
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-white border-0 font-bold px-4 py-1">Manufacturing Excellence</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">Cold-Form Steel Advantage</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed font-medium">
                The Medio showcases the versatility of cold-form steel construction. With 560 square feet of well-designed space, this model proves you don't need to sacrifice comfort for efficiency.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                Each component is manufactured in Canada to exact specifications, ensuring perfect fit and superior quality that's ready to assemble in days, not months.
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
                  'Signature kitchen',
                  'Generous bathroom',
                  'Built-in storage',
                  'In-suite washer/dryer',
                  'Efficient mini-split heating/cooling',
                  'Full interior finish on Turnkey model'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Customization Options
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Make the Medio your own with customizable finishes, colors, and layouts. Our design team will work with you to create the perfect space that fits your lifestyle.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cold-Form Steel Section */}
      <section className="py-24 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Cold-Form Steel?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The Medio combines comfort and efficiency with advanced steel technology for a home that's built to last.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cost-Effective</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lower build costs and reduced insurance premiums
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-white text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Thoughtful Layout</h3>
              <p className="text-muted-foreground leading-relaxed">
                560 square feet designed for comfortable living with room to breathe
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Feature Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-white border-0 font-bold px-4 py-1">Standard Features</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold">The Steelbuilt Standard</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Maximum Durability",
                desc: "100% G550 high-tensile steel frame that won't rot, warp, or attract termites."
              },
              {
                title: "Rapid Assembly",
                desc: "Pre-fabricated panels allow the full structural frame to be completed in just 4-5 days."
              },
              {
                title: "Energy Efficient",
                desc: "Engineered building envelope with continuous insulation for lower utility costs."
              },
              {
                title: "Fire Resistant",
                desc: "Non-combustible structural material provides superior safety for your family."
              },
              {
                title: "Stable Pricing",
                desc: "Steel costs are significantly more stable than volatile lumber prices."
              },
              {
                title: "Eco-Friendly",
                desc: "100% recyclable building material with zero deforestation involved."
              }
            ].map((feature, i) => (
              <Card key={i} className="p-8 border-2 border-primary/5 hover:border-primary/20 transition-all shadow-md">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Home className="w-16 h-16 mx-auto mb-8 text-accent" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Ready to Build Your Medio?</h2>
          <p className="text-xl mb-2 text-white/90 leading-relaxed">
            Get a personalized quote and see how affordable your new home can be.
          </p>
          <p className="text-xl mb-12 text-white/90 leading-relaxed">
            Our team is ready to answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-accent text-white hover:bg-accent/90 px-12 h-16 text-xl font-bold shadow-2xl"
              onClick={() => onNavigate('contact')}
            >
              Get Your Quote
              <ArrowRight className="w-5 h-5 ml-2" />
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
    </div>
  );
}