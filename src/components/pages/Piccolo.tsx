import { Check, ArrowRight, Home as HomeIcon, Download, Maximize2, DollarSign, Clock, Shield, Leaf, Play } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { useState } from 'react';
import piccoloExterior from 'figma:asset/844d2d716a993ccf645a794b3281b70d5d79a1d2.png';
import piccoloFloorPlan from 'figma:asset/95e93dc5316acea9878c72436d4e188d60727938.png';
import piccoloDarkExt1 from 'figma:asset/844d2d716a993ccf645a794b3281b70d5d79a1d2.png';
import piccoloDarkExt2 from 'figma:asset/1a896eefd584d3d91dd49b92f1e75c37939fa06b.png';
import piccoloDarkExt3 from 'figma:asset/a77b20ea4e6056975c9ebb783a9c1bf722bbf8f6.png';
import piccoloLightExt1 from 'figma:asset/07bced32403e8bd0a9bea3c4961cf6387656bb84.png';
import piccoloLightExt2 from 'figma:asset/06178c66638be76ab58cc8c7e0f753f013f2e45a.png';
import piccoloLightExt3 from 'figma:asset/2164fcfaf5eb44ba0b67cb1678e8b224458e7416.png';
import piccoloDarkInt1 from 'figma:asset/927a325977fabee021225568913c084a19f62b14.png';
import piccoloDarkInt2 from 'figma:asset/be69edff5a1a525e997504d24005a866111a3d19.png';
import piccoloDarkInt3 from 'figma:asset/e1f5f36156d2eeb13a420863c28bc34e9cf37a63.png';
import piccoloLightInt1 from 'figma:asset/42bed543e046536bdec86787caa96134ef8df4c8.png';
import piccoloLightInt2 from 'figma:asset/a58144f7cb23347bc6e39ab12b721c135b437a4f.png';
import piccoloLightInt3 from 'figma:asset/1dc68e97bf2c4eabf1bd60f58dc64fa056d344e9.png';
import piccoloLightInt4 from 'figma:asset/56d14867b99a2a96a43d18d6f5b95d820f536ff4.png';

interface PiccoloProps {
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

export function Piccolo({ onNavigate }: PiccoloProps) {
  const [selectedView, setSelectedView] = useState<'exterior' | 'interior'>('exterior');
  const [selectedStyle, setSelectedStyle] = useState<'dark' | 'light'>('dark');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const price = 138590;
  const monthlyPayment = calculateMonthlyPayment(price);

  const specs = [
    { label: 'Square Footage', value: '392 sq ft' },
    { label: 'Dimensions', value: '14\' × 28\'' },
    { label: 'Bathrooms', value: '1' },
    { label: 'Frame Time', value: '4-5 days' },
    { label: 'Starting From', value: `$${price.toLocaleString()}` },
  ];

  const features = [
    'Engineered steel frame structure',
    'Insulated wall & roof panels',
    'Windows & exterior doors',
    'Weatherproof exterior finish',
    'Full interior finish on Turnkey model',
    'Signature kitchen',
    'Spacious bathroom',
    'In-suite washer/dryer',
    'High-efficiency mini-split heating/cooling system',
  ];

  const steelBenefits = [
    { icon: Shield, title: 'Fire Resistant', description: 'Non-combustible steel framing provides superior fire protection' },
    { icon: Clock, title: 'Quick Build', description: 'Framed in just 4-5 days with precision-engineered panels' },
    { icon: Leaf, title: 'Eco-Friendly', description: '100% recyclable steel with minimal waste' },
    { icon: Shield, title: 'Built to Last', description: 'No warping, mold, termites, or deterioration.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <img 
          src={
            selectedView === 'exterior' && selectedStyle === 'dark' ? [piccoloDarkExt1, piccoloDarkExt2, piccoloDarkExt3][selectedImageIndex] :
            selectedView === 'exterior' && selectedStyle === 'light' ? [piccoloLightExt1, piccoloLightExt2, piccoloLightExt3][selectedImageIndex] :
            selectedView === 'interior' && selectedStyle === 'dark' ? [piccoloDarkInt1, piccoloDarkInt2, piccoloDarkInt3][selectedImageIndex] :
            [piccoloLightInt1, piccoloLightInt2, piccoloLightInt3, piccoloLightInt4][selectedImageIndex]
          }
          alt="Piccolo Model - Modern Cold-Form Steel Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"></div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-16 px-6">
          <div className="max-w-[1600px] mx-auto">
            <Badge className="mb-4 bg-accent text-white border-0 text-sm px-4 py-2">
              Compact Living
            </Badge>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-6 text-white">
              The Piccolo
            </h1>
            <p className="text-2xl sm:text-3xl text-white/90 mb-8 max-w-2xl">
              A beautifully designed 392 sq. ft. studio that delivers everything you need in a compact, efficient layout. Perfect as a backyard suite, rental unit, or guest house.
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
              <div className="text-4xl mb-2">392</div>
              <div className="text-white/70">Square Feet</div>
            </div>
            <div>
              <div className="text-4xl mb-2">${monthlyPayment}</div>
              <div className="text-white/70">Monthly Payment*</div>
            </div>
            <div>
              <div className="text-4xl mb-2">$138.6K</div>
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

      {/* Video Walkthrough Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Video */}
            <div className="order-2 lg:order-1">
              <Card className="overflow-hidden border-2 shadow-2xl">
                <div className="aspect-[9/16] bg-black relative">
                  <iframe
                    src="https://www.youtube.com/embed/DZ-ZeqDqn-4"
                    title="Piccolo Model Walkthrough - Cold Form Steel Canada"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </Card>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-accent text-white border-0 text-sm px-4 py-2">
                <Play className="w-4 h-4 mr-2 inline" />
                Video Tour
              </Badge>
              <h2 className="text-5xl sm:text-6xl mb-6">Walk Through the Piccolo</h2>
              <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
                See every detail of this beautifully designed compact home. Experience the quality and craftsmanship that makes the Piccolo special.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8b9d83] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1">Complete Interior Tour</h4>
                    <p className="text-muted-foreground">See the kitchen, bathroom, and living spaces in detail</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8b9d83] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1">Modern Finishes</h4>
                    <p className="text-muted-foreground">Quality materials and thoughtful design choices</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8b9d83] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1">392 Square Feet Optimized</h4>
                    <p className="text-muted-foreground">Efficient studio layout maximizes every inch of space</p>
                  </div>
                </div>
              </div>
            </div>
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
                  The Piccolo showcases the efficiency of cold-form steel construction. Precision-engineered panels arrive ready to assemble, reducing build time from months to days.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each component is manufactured in Canada to exact specifications, ensuring perfect fit and superior quality.
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
                <h3 className="text-2xl mb-3">Important Note</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Appliances are supplied once the heating source (electric / gas / propane) is confirmed. Monthly payments available; estimate shown at checkout.
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
            <h2 className="text-5xl sm:text-6xl mb-6">Customize Your Piccolo</h2>
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
              {selectedView === 'exterior' && selectedStyle === 'dark' && (
                <img
                  src={[piccoloDarkExt1, piccoloDarkExt2, piccoloDarkExt3][selectedImageIndex]}
                  alt={`Piccolo Dark Exterior - View ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
              {selectedView === 'exterior' && selectedStyle === 'light' && (
                <img
                  src={[piccoloLightExt1, piccoloLightExt2, piccoloLightExt3][selectedImageIndex]}
                  alt={`Piccolo Light Exterior - View ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
              {selectedView === 'interior' && selectedStyle === 'dark' && (
                <img
                  src={[piccoloDarkInt1, piccoloDarkInt2, piccoloDarkInt3][selectedImageIndex]}
                  alt={`Piccolo Dark Interior - View ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
              {selectedView === 'interior' && selectedStyle === 'light' && (
                <img
                  src={[piccoloLightInt1, piccoloLightInt2, piccoloLightInt3, piccoloLightInt4][selectedImageIndex]}
                  alt={`Piccolo Light Interior - View ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </Card>

          {/* Thumbnail Gallery - Only show for Dark Exterior */}
          {selectedView === 'exterior' && selectedStyle === 'dark' && (
            <div className="grid grid-cols-3 gap-4">
              {[piccoloDarkExt1, piccoloDarkExt2, piccoloDarkExt3].map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-video rounded-lg overflow-hidden border-4 transition-all hover:scale-105 ${
                    selectedImageIndex === index
                      ? 'border-accent shadow-lg'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Piccolo Dark Exterior View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Thumbnail Gallery - Only show for Light Exterior */}
          {selectedView === 'exterior' && selectedStyle === 'light' && (
            <div className="grid grid-cols-3 gap-4">
              {[piccoloLightExt1, piccoloLightExt2, piccoloLightExt3].map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-video rounded-lg overflow-hidden border-4 transition-all hover:scale-105 ${
                    selectedImageIndex === index
                      ? 'border-accent shadow-lg'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Piccolo Light Exterior View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Thumbnail Gallery - Only show for Dark Interior */}
          {selectedView === 'interior' && selectedStyle === 'dark' && (
            <div className="grid grid-cols-3 gap-4">
              {[piccoloDarkInt1, piccoloDarkInt2, piccoloDarkInt3].map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-video rounded-lg overflow-hidden border-4 transition-all hover:scale-105 ${
                    selectedImageIndex === index
                      ? 'border-accent shadow-lg'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Piccolo Dark Interior View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Thumbnail Gallery - Only show for Light Interior */}
          {selectedView === 'interior' && selectedStyle === 'light' && (
            <div className="grid grid-cols-3 gap-4">
              {[piccoloLightInt1, piccoloLightInt2, piccoloLightInt3, piccoloLightInt4].map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-video rounded-lg overflow-hidden border-4 transition-all hover:scale-105 ${
                    selectedImageIndex === index
                      ? 'border-accent shadow-lg'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Piccolo Light Interior View ${index + 1}`}
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
              The Piccolo proves that great things come in small packages—especially when built with advanced steel technology.
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
            <h2 className="text-5xl sm:text-6xl mb-6">Smart Layout</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              392 sq. ft. (14' × 28') designed for maximum efficiency and comfort
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-muted/30 border-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={piccoloFloorPlan}
                alt="Piccolo Floor Plan - 392 sq ft layout showing living area, kitchen, bathroom, and sleeping area"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground mb-4">
                14' × 28' | Efficient studio layout with signature kitchen, full bathroom, and washer/dryer
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => onNavigate('contact')}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Download Brochure
                  <Download className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('piccolo')}
                  className="border-accent text-accent hover:bg-accent/10"
                >
                  Explore Piccolo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 text-center">
          <HomeIcon className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h2 className="text-5xl sm:text-6xl mb-6">
            Ready to Build Your Piccolo?
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