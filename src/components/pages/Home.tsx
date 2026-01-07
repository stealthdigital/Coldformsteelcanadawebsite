import { Play, Check, ArrowRight, Star, Shield, Clock, Leaf, Home as HomeIcon, Sparkles, ChevronDown, Timer, DollarSign, Award, FileText, Hammer, Truck, Factory } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Badge } from '../ui/badge';
import { MapleLeaf } from '../icons/MapleLeaf';
import { ReviewSchema } from '../schema/ReviewSchema';
import { OrganizationSchema } from '../schema/OrganizationSchema';
import { HeadMeta } from '../HeadMeta';

const piccoloImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/be69edff5a1a525e997504d24005a866111a3d19.png';
const medioImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';
const heroImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png';
const mapleLeafIcon = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/58f51d3f6fcfbb103c76adbc254fe9642bf10499.png';

interface HomeProps {
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

export function Home({ onNavigate }: HomeProps) {
  const models = [
    {
      name: 'Piccolo',
      sqft: 392,
      bedrooms: 1,
      bathrooms: 1,
      price: 138590,
      monthly: calculateMonthlyPayment(138590),
      image: piccoloImage,
      features: ['Open concept', 'Full kitchen', 'Modern finishes']
    },
    {
      name: 'Medio',
      sqft: 560,
      bedrooms: 1,
      bathrooms: 1,
      price: 186000,
      monthly: calculateMonthlyPayment(186000),
      image: medioImage,
      features: ['Spacious layout', 'Large windows', 'Premium fixtures']
    }
  ];

  const testimonials = [
    {
      quote: "The quality of these buildings is excellent and the delivery time fast.",
      author: "Robin Langlois",
      location: "St-Jean-Sur-Richelieu, Quebec",
      project: "Expansion"
    },
    {
      quote: "Excellent service and professionalism through and through. Highly recommend",
      author: "Brett Innis",
      location: "Ontario",
      project: "Custom Build"
    },
    {
      quote: "The product is fantastic. Service and contractors are super professional. Love the garage, will last two life times!",
      author: "Steve Mast",
      location: "Ontario",
      project: "Garage"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeadMeta 
        title="Cold Form Steel Canada | Steel Frame Homes Ontario | Framed in 4-5 Days"
        description="Build your dream home 75% faster with cold-form steel construction. Factory-built homes framed in 4-5 days. 100% fireproof, recyclable, and built to last 100+ years. Explore our Piccolo and Medio models. Serving Ontario and across Canada."
        image="https://via.placeholder.com/1200x630/665f55/ffffff?text=Cold+Form+Steel+Canada"
      />
      <ReviewSchema 
        itemName="Cold Form Steel Canada"
        reviews={testimonials.map(t => ({
          author: t.author,
          rating: 5,
          reviewBody: t.quote,
          location: t.location
        }))}
        aggregateRating={{
          ratingValue: 5.0,
          reviewCount: testimonials.length
        }}
      />
      <OrganizationSchema 
        name="Cold Form Steel Canada"
        description="Leading provider of cold-form steel homes and barndominiums in Canada. Factory-built construction with 4-5 day framing times."
        url="https://coldformsteelcanada.com"
      />
      {/* Hero - Full Screen with Centered Content & Scroll Indicator */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback 
            src={heroImage}
            alt="Beautiful modern home interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 text-center px-6 py-20 sm:py-0 max-w-5xl mx-auto text-white">
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl mb-8 tracking-tight drop-shadow-lg">
            Your Dream Home,<br />Framed in Days
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light">
            Cold-form steel construction. 75% faster than wood.<br className="hidden sm:block" /> 100% Canadian-made.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('models')}
              className="bg-[#c8694e] hover:bg-[#b5593d] text-white px-10 h-16 text-xl shadow-xl transition-transform hover:scale-105"
            >
              Explore Our Models
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('learning')}
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary h-16 text-xl shadow-xl backdrop-blur-sm transition-transform hover:scale-105"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Bento Grid Section - Why Steel */}
      <section className="py-24 px-6 sm:px-12 max-w-[1600px] mx-auto bg-stone-50/50 relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="mb-16 text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl mb-6">Why Cold-Form Steel</h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            The building material that's changing how Canadians build homes
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Feature - Build Speed */}
          <Card className="md:col-span-8 md:row-span-2 p-12 bg-primary text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <Timer className="w-full h-full" />
            </div>
            <div className="relative z-10">
              <Clock className="w-16 h-16 mb-6" />
              <h3 className="text-4xl mb-4">Framed in Days, Not Months</h3>
              <p className="text-xl text-white/90 mb-6 leading-relaxed max-w-lg">
                Panelized construction means your walls tilt up in hours. Framed in 4-5 days instead of waiting 3-6 months.
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-7xl">4-5</span>
                <span className="text-2xl">days average</span>
              </div>
            </div>
          </Card>

          {/* Fire Resistance */}
          <Card className="md:col-span-4 p-8 bg-secondary text-white">
            <Shield className="w-12 h-12 mb-4" />
            <h3 className="text-2xl mb-3">100% Fireproof</h3>
            <p className="text-base text-white/90 leading-relaxed">
              Non-combustible steel framing. Peace of mind for your family.
            </p>
          </Card>

          {/* Sustainability */}
          <Card className="md:col-span-4 p-8 bg-accent text-white">
            <Leaf className="w-12 h-12 mb-4" />
            <h3 className="text-2xl mb-3">100% Recyclable</h3>
            <p className="text-base text-white/90 leading-relaxed">
              Zero deforestation. Endlessly recyclable steel construction.
            </p>
          </Card>

          {/* Canadian Climate */}
          <Card className="md:col-span-4 p-8 bg-gradient-to-br from-[#8b9d83] to-[#8b9d83]/80 text-white">
            <div className="flex items-center gap-3 mb-4">
              <img src={mapleLeafIcon} alt="Canada" className="w-10 h-10" />
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-2xl mb-3">Built for Canadian Winters</h3>
            <p className="text-base text-white/90 leading-relaxed">
              Engineered for extreme conditions. Won't rot, warp, or deteriorate in harsh climates.
            </p>
          </Card>

          {/* Cost Savings */}
          <Card className="md:col-span-4 p-8 bg-gradient-to-br from-primary to-primary/80 text-white">
            <DollarSign className="w-12 h-12 mb-6" />
            <h3 className="text-2xl mb-3">Fixed Pricing</h3>
            <p className="text-base text-white/90 leading-relaxed">
              Unlike volatile lumber prices, steel costs are stable. Know your budget from day one.
            </p>
          </Card>

          {/* Zero Maintenance */}
          <Card className="md:col-span-4 p-8 bg-[#c8694e] text-white">
            <Check className="w-12 h-12 mb-6" />
            <h3 className="text-2xl mb-3">Zero Maintenance Headaches</h3>
            <p className="text-base text-white/90 leading-relaxed">
              No rot, no termites, no warping. Steel stays straight and strong for 100+ years.
            </p>
          </Card>

          {/* Engineering - Full Width */}
          <Card className="md:col-span-12 bg-white border-2 overflow-hidden p-0">
            <div className="grid lg:grid-cols-2 h-full">
              {/* Left Side: The Stat & Comparison */}
              <div className="bg-primary p-8 sm:p-12 text-white flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8 text-white/80" />
                  <h3 className="text-2xl font-medium text-white/90">Precision Engineered</h3>
                </div>
                
                <h4 className="text-4xl sm:text-5xl mb-6">4x More Precise Than Lumber</h4>
                <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-md">
                   Dimensional lumber varies significantly. Cold-form steel is manufactured to exact specifications, ensuring your home is square, straight, and true.
                </p>

                {/* Visual Tolerance Bar */}
                <div className="space-y-6 max-w-md">
                  <div>
                    <div className="flex justify-between text-sm mb-2 text-white/70">
                      <span>Traditional Wood Variance (± 1/4")</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full w-full"></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2 text-white font-medium">
                      <span>Steel Variance (± 1/16")</span>
                    </div>
                    <div className="h-2 bg-white rounded-full w-[25%] shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                  </div>
                </div>
              </div>

              {/* Right Side: The Benefits List */}
              <div className="p-8 sm:p-12 bg-white flex flex-col justify-center">
                <h4 className="text-2xl mb-8">Visible Quality Differences</h4>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                  {[
                    "Perfectly straight walls",
                    "No drywall cracks",
                    "Cabinetry aligns perfectly",
                    "No nail pops",
                    "Tighter trim details",
                    "Airtight seal",
                    "Windows operate smoothly",
                    "No floor squeaks"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm sm:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Models - Magazine Layout */}
      <section className="py-24 bg-gradient-to-b from-white via-stone-50 to-white">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <h2 className="text-5xl sm:text-6xl mb-4">Our Models</h2>
                <p className="text-2xl text-muted-foreground max-w-2xl">
                  Two sizes. Transparent pricing. Endless possibilities.
                </p>
              </div>
              <Button 
                size="lg"
                onClick={() => onNavigate('models')}
                className="bg-[#c8694e] hover:bg-[#b5593d] text-white h-14 lg:mb-2"
              >
                View All Details
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Staggered Model Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {models.map((model, index) => (
              <div 
                key={model.name}
              >
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0">
                  <div 
                    className="aspect-[3/4] relative overflow-hidden bg-primary/5 cursor-pointer"
                    onClick={() => onNavigate(model.name.toLowerCase())}
                  >
                    <ImageWithFallback 
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {index === 1 && (
                      <div className="absolute top-0 right-0 bg-secondary text-white px-6 py-3 text-sm">
                        Most Popular
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8 bg-white">
                    {/* Header with Model Name */}
                    <div className="mb-6">
                      <h3 className="text-3xl mb-2">{model.name}</h3>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <span>{model.bedrooms} bed</span>
                        <span>&bull;</span>
                        <span>{model.bathrooms} bath</span>
                        <span>&bull;</span>
                        <span>{model.sqft} sq ft</span>
                      </div>
                    </div>
                    
                    {/* Monthly Payment - Prominent Display */}
                    <div className="bg-sage/10 border-2 border-sage rounded-lg p-6 mb-6">
                      <div className="text-sm text-primary mb-1">Monthly payment from*</div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl text-primary">${model.monthly}</span>
                        <span className="text-muted-foreground">/mo</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        *Based on 25% down, 5.5% rate, 25-year term
                      </div>
                    </div>

                    {/* Total Price */}
                    <div className="flex items-baseline justify-between mb-6 pb-6 border-b">
                      <div className="text-muted-foreground">Total starting price</div>
                      <div className="text-2xl text-primary">${model.price.toLocaleString()}</div>
                    </div>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <div className="space-y-2">
                        {model.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-sage flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full h-12 bg-[#c8694e] hover:bg-[#b5593d] text-white"
                      onClick={() => onNavigate(model.name.toLowerCase())}
                    >
                      Explore {model.name}
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Walkthrough */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stone-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Video */}
            <div className="order-2 lg:order-1">
              <Card className="overflow-hidden border-2 shadow-2xl">
                <div className="relative w-full max-w-md mx-auto aspect-[9/16] bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/DZ-ZeqDqn-4"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
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
              <h2 className="text-5xl sm:text-6xl mb-6">See the Piccolo Come to Life</h2>
              <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
                Take a complete walkthrough of our Piccolo model and experience the quality, craftsmanship, and thoughtful design that makes cold-form steel homes special.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1">392 Square Feet of Smart Design</h4>
                    <p className="text-muted-foreground">See how every inch is optimized for comfortable living</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1">Modern Finishes & Features</h4>
                    <p className="text-muted-foreground">Quality materials and attention to detail throughout</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1">Steel Construction Benefits</h4>
                    <p className="text-muted-foreground">Built in factory. 4-5 day onsite assembly</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('piccolo')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-14 sm:h-16 text-lg sm:text-xl"
              >
                <Play className="w-5 h-5 mr-2" />
                Tour the Piccolo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Roadmap - How it Works */}
      <section className="py-24 bg-white border-y relative">
         <div className="absolute inset-0 opacity-[0.4]" 
            style={{
              backgroundImage: 'linear-gradient(#f5f5f4 1px, transparent 1px), linear-gradient(90deg, #f5f5f4 1px, transparent 1px)',
              backgroundSize: '100px 100px'
            }}
         ></div>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-0 text-sm px-4 py-2 hover:bg-primary/20">
              <Clock className="w-4 h-4 mr-2 inline" />
              Streamlined Process
            </Badge>
            <h2 className="text-5xl sm:text-6xl mb-6">From Factory to Foundation</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              A simplified path to your new home, designed to save you months of waiting.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative pt-8 text-center group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white z-10"></div>
                <div className="w-20 h-20 bg-primary/5 group-hover:bg-primary/10 transition-colors rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  <FileText className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Step 01</div>
                <h3 className="text-xl font-semibold mb-3">Design & Engineer</h3>
                <p className="text-muted-foreground leading-relaxed px-4">
                  Select your model. We finalize the architectural plans and stamp them with licensed engineering.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative pt-8 text-center group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary/60 rounded-full border-4 border-white z-10"></div>
                <div className="w-20 h-20 bg-primary/5 group-hover:bg-primary/10 transition-colors rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  <Factory className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Step 02</div>
                <h3 className="text-xl font-semibold mb-3">Precision Manufacturing</h3>
                <p className="text-muted-foreground leading-relaxed px-4">
                  Your home is built in our factory with millimeter precision while your foundation is poured on-site.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative pt-8 text-center group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary/40 rounded-full border-4 border-white z-10"></div>
                <div className="w-20 h-20 bg-primary/5 group-hover:bg-primary/10 transition-colors rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  <Truck className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Step 03</div>
                <h3 className="text-xl font-semibold mb-3">Delivery</h3>
                <p className="text-muted-foreground leading-relaxed px-4">
                  All panels, trusses, and structural components are bundled and shipped directly to your property.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative pt-8 text-center group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary/20 rounded-full border-4 border-white z-10"></div>
                <div className="w-20 h-20 bg-primary/5 group-hover:bg-primary/10 transition-colors rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  <Hammer className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Step 04</div>
                <h3 className="text-xl font-semibold mb-3">Rapid Assembly</h3>
                <p className="text-muted-foreground leading-relaxed px-4">
                  Walls tilt up in hours. Full structural framing is completed in just 4-5 days.
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center mt-16">
               <Button 
                onClick={() => onNavigate('process')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Read: How the 5 Day Build Works
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Cost Truth Section - Addresses the #1 Objection */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-accent text-white border-0 text-sm px-4 py-2">
              <DollarSign className="w-4 h-4 mr-2 inline" />
              The Cost Truth
            </Badge>
            <h2 className="text-5xl sm:text-6xl mb-6">Steel Isn't More Expensive - It's Smarter</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              When you look at the full picture, cold-form steel delivers better value than wood framing
            </p>
          </div>

          {/* The Math */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <div className="text-4xl mb-2 text-primary">&lt;1%</div>
                <div className="text-sm text-muted-foreground mb-4">Total Cost Difference</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  When construction insurance is included, steel framing costs less than 1% more than wood overall
                </p>
                <p className="text-xs text-muted-foreground mt-3 italic">
                  Source: SFIA Study (R.A. Smith Inc., 2020)
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <div className="text-4xl mb-2 text-accent">2-5 mo</div>
                <div className="text-sm text-muted-foreground mb-4">Faster Occupancy</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Move in months earlier than wood construction. Stop paying rent or start generating rental income sooner.
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  = $8,000-20,000 saved in rent/carrying costs
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-sage/10 to-sage/20 border-2 border-sage/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-sage text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8" />
                </div>
                <div className="text-4xl mb-2 text-sage">$8,000</div>
                <div className="text-sm text-muted-foreground mb-4">Maintenance Savings</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Steel requires $3K in maintenance over 30 years vs. $11K for wood—no rot, no pests, no warping
                </p>
              </div>
            </Card>
          </div>

          {/* CTA to Full Article */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              The upfront material premium is offset by speed, durability, and decades of lower costs
            </p>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => onNavigate('steel-vs-wood')}
              className="border-2 h-14"
            >
              See the Full Cost Breakdown
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - Horizontal Scroll Cards */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 mb-12">
          <h2 className="text-5xl sm:text-6xl mb-4">Real Stories</h2>
          <p className="text-2xl text-white/80">From homeowners across Canada</p>
        </div>

        <div className="flex gap-8 px-6 sm:px-12 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          <div className="w-8"></div>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[500px] p-10 bg-white/10 backdrop-blur-sm border-white/20 text-white snap-start">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-2xl mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="pt-6 border-t border-white/20">
                <p className="text-xl mb-1">{testimonial.author}</p>
                <p className="text-white/70">{testimonial.location}</p>
                <Badge className="mt-3 bg-white/20 text-white border-0">{testimonial.project}</Badge>
              </div>
            </Card>
          ))}
          <div className="w-8 flex-shrink-0"></div>
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="outline"
            size="lg"
            onClick={() => onNavigate('stories')}
            className="border-2 border-white text-white bg-white/20 hover:bg-white hover:text-primary h-14"
          >
            See All Success Stories
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Final CTA - Full Bleed */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-secondary"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center text-white">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <HomeIcon className="w-12 h-12" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl mb-6 leading-tight">
            Start Your Journey Today
          </h2>
          
          <p className="text-2xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Explore our home models and discover the perfect steel-framed home for your family.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('models')}
              className="bg-[#c8694e] text-white hover:bg-[#b5593d] px-10 h-16 text-xl"
            >
              Explore Models
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('learning')}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-16 text-xl"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
