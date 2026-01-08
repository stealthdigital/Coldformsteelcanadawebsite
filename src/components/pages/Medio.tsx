import { Check, ArrowRight, Home as HomeIcon, Download, Maximize2, DollarSign, Clock, Shield, Leaf } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { useState } from 'react';

// Images from GitHub (assets branch)
const BASE_URL = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Medio';

const medioFloorPlan = `${BASE_URL}/MEDIO-FLOOR-PLAN.jpg`;

// Dark Exterior
const medioDarkExt1 = `${BASE_URL}/Medio-Dark-Exterior-2.jpg`;
const medioDarkExt2 = `${BASE_URL}/Medio-Dark-Exterior-4.jpg`;

// Light Exterior
const medioLightExt1 = `${BASE_URL}/Medio-Light-Exterior-4.jpg`;
const medioLightExt2 = `${BASE_URL}/Medio-Light-Exterior-5.jpg`;

// Dark Interior
const medioDarkInt1 = `${BASE_URL}/Medio-Dark-Interior-3.jpg`;
const medioDarkInt2 = `${BASE_URL}/Medio-Dark-Interior-5.jpg`;
const medioDarkInt3 = `${BASE_URL}/Medio-Dark-Interior-7.jpg`;
const medioDarkInt4 = `${BASE_URL}/Medio-Bathroom.jpg`; // Using bathroom shot as 4th image

// Light Interior
const medioLightInt1 = `${BASE_URL}/Medio-Light-Interior-2.jpg`;
const medioLightInt2 = `${BASE_URL}/Medio-Light-Interior-3.jpg`;
const medioLightInt3 = `${BASE_URL}/Medio-Light-Interior-4-Bedroom.jpg`;

// Hero Image (using Dark Exterior 2)
const medioHero = medioDarkExt1;

interface MedioProps {
  onNavigate: (page: string) => void;
}

// Calculate monthly mortgage payment
// Assumes 25% down payment, 25-year amortization at 5.5% interest
function calculateMonthlyPayment(price: number): number {
  const downPaymentPercent = 0.25;
  const annualRate = 0.055;
  const years = 25;
  
  const downPayment = price * downPaymentPercent;
  const principal = price - downPayment;
  const monthlyRate = annualRate / 12;
  const numberOfPayments = years * 12;
  
  const monthly = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                  (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  
  return Math.round(monthly);
}

export function Medio({ onNavigate }: MedioProps) {
  const [selectedView, setSelectedView] = useState<'exterior' | 'interior'>('exterior');
  const [selectedStyle, setSelectedStyle] = useState<'dark' | 'light'>('dark');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const price = 186000;
  const monthlyPayment = calculateMonthlyPayment(price);

  // Image arrays
  const darkExteriorImages = [medioDarkExt1, medioDarkExt2];
  const lightExteriorImages = [medioLightExt1, medioLightExt2];
  const darkInteriorImages = [medioDarkInt1, medioDarkInt2, medioDarkInt3, medioDarkInt4];
  const lightInteriorImages = [medioLightInt1, medioLightInt2, medioLightInt3];

  // Get current image array based on selection
  const getCurrentImages = () => {
    if (selectedView === 'exterior' && selectedStyle === 'dark') return darkExteriorImages;
    if (selectedView === 'exterior' && selectedStyle === 'light') return lightExteriorImages;
    if (selectedView === 'interior' && selectedStyle === 'dark') return darkInteriorImages;
    return lightInteriorImages;
  };

  const currentImages = getCurrentImages();
  const hasImages = currentImages.length > 0;

  const specs = [
    { label: 'Square Footage', value: '560 sq ft' },
    { label: 'Dimensions', value: '14\' × 40\'' },
    { label: 'Bedrooms', value: '1' },
    { label: 'Bathrooms', value: '1' },
    { label: 'Frame Time', value: '4-5 days' },
    { label: 'Starting Price', value: '$186,000' },
  ];

  const features = [
    'Engineered steel frame structure',
    'Insulated wall & roof panels',
    'Windows & exterior doors',
    'Weatherproof exterior finish',
    'Signature kitchen',
    'Generous bathroom',
    'Built-in storage',
    'In-suite washer/dryer',
    'Efficient mini-split heating/cooling',
    'Full interior finish on Turnkey model',
  ];

  const steelBenefits = [
    { icon: Shield, title: 'Fire Resistant', description: 'Non-combustible steel framing provides superior fire protection' },
    { icon: Clock, title: 'Quick Build', description: 'Framed in just 4-5 days with precision-engineered panels' },
    { icon: Leaf, title: 'Eco-Friendly', description: '100% recyclable steel with minimal waste' },
    { icon: DollarSign, title: 'Cost-Effective', description: 'Lower build costs and reduced insurance premiums' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <img 
          src={medioHero}
          alt="Medio Model - Modern Cold-Form Steel Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"></div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-16 px-6">
          <div className="max-w-[1600px] mx-auto">
            <Badge className="mb-4 bg-accent text-white border-0 text-sm px-4 py-2">
              Mid-Size Living
            </Badge>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-6 text-white">
              The Medio
            </h1>
            <p className="text-2xl sm:text-3xl text-white/90 mb-8 max-w-2xl">
              A spacious 560 sq. ft. one-bedroom home designed for comfort and style. Ideal for homeowners adding rental income, housing family, or creating a private backyard suite.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-accent hover:bg-accent/90 text-white h-14 px-8 text-lg"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 h-14 px-8 text-lg"
              >
                Download Brochure
                <Download className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-primary text-white py-8">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">560</div>
              <div className="text-white/70">Square Feet</div>
            </div>
            <div>
              <div className="text-4xl mb-2">${monthlyPayment}</div>
              <div className="text-white/70">Monthly Payment*</div>
            </div>
            <div>
              <div className="text-4xl mb-2">$186K</div>
              <div className="text-white/70">Total Price</div>
            </div>
            <div>
              <div className="text-4xl mb-2">4-5</div>
              <div className="text-white/70">Days to Frame</div>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-white/60">
            *Based on 25% down, 5.5% rate, 25-year term
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Specs */}
            <div>
              <h2 className="text-5xl mb-8">Specifications</h2>
              <div className="space-y-6">
                {specs.map((spec) => (
                  <div 
                    key={spec.label}
                    className="flex justify-between items-center pb-6 border-b border-muted"
                  >
                    <span className="text-xl text-muted-foreground">{spec.label}</span>
                    <span className="text-2xl">{spec.value}</span>
                  </div>
                ))}
              </div>

              <Card className="mt-12 p-8 bg-[#8b9d83]/10 border border-[#8b9d83]/20">
                <h3 className="text-2xl mb-4 text-[#8b9d83]">Cold-Form Steel Advantage</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The Medio showcases the versatility of cold-form steel construction. With 560 square feet of well-designed space, this model proves you don't need to sacrifice comfort for efficiency.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each component is manufactured in Canada to exact specifications, ensuring perfect fit and superior quality that's ready to assemble in days, not months.
                </p>
              </Card>
            </div>

            {/* Right Column - Features */}
            <div>
              <h2 className="text-5xl mb-8">What's Included</h2>
              <div className="grid gap-4">
                {features.map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Check className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-1" />
                    <span className="text-xl">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-accent/10 border-l-4 border-accent rounded-lg">
                <h3 className="text-2xl mb-3">Customization Options</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Make the Medio your own with customizable finishes, colors, and layouts. Our design team will work with you to create the perfect space that fits your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-5xl sm:text-6xl mb-6">Customize Your Medio</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Choose from light or dark finishes for both exterior and interior to create your perfect home
            </p>
          </div>

          {/* View Toggle - Exterior / Interior */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              size="lg"
              onClick={() => {
                setSelectedView('exterior');
                setSelectedImageIndex(0);
              }}
              className={`h-14 px-8 text-lg ${
                selectedView === 'exterior'
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              Exterior
            </Button>
            <Button
              size="lg"
              onClick={() => {
                setSelectedView('interior');
                setSelectedImageIndex(0);
              }}
              className={`h-14 px-8 text-lg ${
                selectedView === 'interior'
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              Interior
            </Button>
          </div>

          {/* Style Toggle - Light / Dark */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => {
                setSelectedStyle('light');
                setSelectedImageIndex(0);
              }}
              className={`h-12 px-6 ${
                selectedStyle === 'light'
                  ? 'bg-accent text-white hover:bg-accent/90'
                  : 'bg-white border-2 border-muted text-foreground hover:bg-muted/50'
              }`}
            >
              Light Finish
            </Button>
            <Button
              size="lg"
              onClick={() => {
                setSelectedStyle('dark');
                setSelectedImageIndex(0);
              }}
              className={`h-12 px-6 ${
                selectedStyle === 'dark'
                  ? 'bg-accent text-white hover:bg-accent/90'
                  : 'bg-white border-2 border-muted text-foreground hover:bg-muted/50'
              }`}
            >
              Dark Finish
            </Button>
          </div>

          {/* Main Image Display */}
          <Card className="overflow-hidden border-2 mb-8">
            <div className="aspect-video bg-muted relative">
              {hasImages ? (
                <img
                  src={currentImages[selectedImageIndex]}
                  alt={`Medio ${selectedView} - ${selectedStyle} finish`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <img
                    src={medioHero}
                    alt="Medio Model - More images coming soon"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <h3 className="text-3xl mb-4">More Images Coming Soon</h3>
                      <p className="text-xl text-white/90">
                        We're currently updating our {selectedView} {selectedStyle} finish gallery
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Card>

          {/* Thumbnail Navigation */}
          {hasImages && currentImages.length > 1 && (
            <div className="flex gap-4 justify-center mb-8 flex-wrap">
              {currentImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? 'border-accent shadow-lg scale-105'
                      : 'border-muted hover:border-accent/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              All finishes include premium materials and are backed by our 20-year warranty
            </p>
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-accent hover:bg-accent/90 text-white h-14 px-8 text-lg"
            >
              Discuss Customization Options
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Steel Benefits Grid */}
      <section className="py-24 bg-muted">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-5xl sm:text-6xl mb-6">Why Cold-Form Steel?</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              The Medio combines comfort and efficiency with advanced steel technology for a home that's built to last.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steelBenefits.map((benefit) => (
              <Card key={benefit.title} className="p-8 text-center hover:shadow-xl transition-shadow bg-white">
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl mb-3">{benefit.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl mb-6">Thoughtful Layout</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              560 square feet designed for comfortable living with room to breathe
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-muted/30 border-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={medioFloorPlan}
                alt="Medio Floor Plan - 560 sq ft layout showing living area, kitchen, primary bedroom, and bathroom"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground mb-4">
                14' × 40' | Spacious one-bedroom with signature kitchen and generous bathroom
              </p>
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                Request Detailed Floor Plan
                <Download className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 text-center">
          <HomeIcon className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h2 className="text-5xl sm:text-6xl mb-6">
            Ready to Build Your Medio?
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get a personalized quote and see how affordable your new home can be. Our team is ready to answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-accent hover:bg-accent/90 text-white h-14 px-8 text-lg"
            >
              Get Your Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('models')}
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 h-14 px-8 text-lg"
            >
              Compare All Models
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}