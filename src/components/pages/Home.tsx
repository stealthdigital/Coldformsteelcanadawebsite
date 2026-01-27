import { Play, Check, ArrowRight, Star, Shield, Clock, Leaf, Home as HomeIcon, Sparkles, ChevronDown, Timer, DollarSign, Award, FileText, Hammer, Truck, Factory } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Badge } from '../ui/badge';
import { MapleLeaf } from '../icons/MapleLeaf';
import { ReviewSchema } from '../schema/ReviewSchema';
import { OrganizationSchema } from '../schema/OrganizationSchema';
import { HeadMeta } from '../HeadMeta';
import { getSEO } from '../../config/seo';
import { YouTubeEmbed } from '../YouTubeEmbed';
import { CommonImages, CloudinaryImages } from '../../config/cloudinary-urls';

// Cloudinary CDN images - optimized for performance
const heroImage = CommonImages.heroHome;
const piccoloImage = CommonImages.piccoloCard;
const medioImage = CommonImages.medioCard;
const mapleLeafIcon = '/assets/58f51d3f6fcfbb103c76adbc254fe9642bf10499.png';

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
  const seo = getSEO('home');
  
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
    <div className="min-h-screen bg-background text-foreground">
      <HeadMeta 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        image={seo.image || heroImage}
        canonicalUrl="https://coldformsteelcanada.com/"
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
            loading="eager"
            {...({ "fetchpriority": "high" } as any)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 text-center px-6 py-20 sm:py-0 max-w-5xl mx-auto text-white">
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl mb-8 tracking-tight drop-shadow-lg font-bold">
            Your Dream Home,<br />Framed in Days
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light">
            Cold-form steel construction. 75% faster than wood.<br className="hidden sm:block" /> 100% Canadian-made.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('models')}
              className="bg-white hover:bg-white/90 text-primary px-10 h-16 text-xl shadow-xl transition-transform hover:scale-105 border-0 font-bold"
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
          <span className="text-sm font-medium uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Bento Grid Section - Why Steel */}
      <section className="py-24 px-6 sm:px-12 max-w-[1600px] mx-auto bg-background relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="mb-16 text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl mb-6 text-foreground">Why Cold-Form Steel</h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            The building material that's changing how Canadians build homes
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Feature - Build Speed */}
          <Card className="md:col-span-8 md:row-span-2 p-12 bg-primary text-white relative overflow-hidden border-0">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <Timer className="w-full h-full" />
            </div>
            <div className="relative z-10">
              <Clock className="w-16 h-16 mb-6" />
              <h3 className="text-4xl mb-4 font-bold">Framed in Days, Not Months</h3>
              <p className="text-xl text-white/90 mb-6 leading-relaxed max-w-lg">
                Panelized construction means your walls tilt up in hours. Framed in 4-5 days instead of waiting 3-6 months.
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-7xl font-bold">4-5</span>
                <span className="text-2xl">days average</span>
              </div>
            </div>
          </Card>

          {/* Fire Resistance */}
          <Card className="md:col-span-4 p-8 bg-[#8b9d83] text-white border-0">
            <Shield className="w-12 h-12 mb-4" />
            <h3 className="text-2xl mb-3 font-semibold">100% Fireproof</h3>
            <p className="text-base text-white/90 leading-relaxed">
              Non-combustible steel framing. Peace of mind for your family.
            </p>
          </Card>

          {/* Sustainability */}
          <Card className="md:col-span-4 p-8 bg-primary text-white border-0">
            <Leaf className="w-12 h-12 mb-4" />
            <h3 className="text-2xl mb-3 font-semibold">100% Recyclable</h3>
            <p className="text-base text-white/90 leading-relaxed">
              Zero deforestation. Endlessly recyclable steel construction.
            </p>
          </Card>

          {/* Canadian Climate */}
          <Card className="md:col-span-4 p-8 bg-gradient-to-br from-[#8b9d83] to-[#8b9d83]/80 text-white border-0">
            <div className="flex items-center gap-3 mb-4">
              <img src={mapleLeafIcon} alt="Canada" className="w-10 h-10" loading="lazy" />
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-2xl mb-3 font-semibold">Built for Canadian Winters</h3>
            <p className="text-base text-white/90 leading-relaxed">
              Engineered for extreme conditions. Won't rot, warp, or deteriorate in harsh climates.
            </p>
          </Card>

          {/* Cost Savings */}
          <Card className="md:col-span-4 p-8 bg-gradient-to-br from-primary to-primary/80 text-white border-0">
            <DollarSign className="w-12 h-12 mb-6" />
            <h3 className="text-2xl mb-3 font-semibold">Fixed Pricing</h3>
            <p className="text-base text-white/90 leading-relaxed">
              Unlike volatile lumber prices, steel costs are stable. Know your budget from day one.
            </p>
          </Card>

          {/* Zero Maintenance */}
          <Card className="md:col-span-4 p-8 bg-primary/90 text-white border-0">
            <Check className="w-12 h-12 mb-6" />
            <h3 className="text-2xl mb-3 font-semibold">Zero Maintenance Headaches</h3>
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
                
                <h4 className="text-4xl sm:text-5xl mb-6 font-bold">4x More Precise Than Lumber</h4>
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
                <h4 className="text-2xl mb-8 font-semibold text-foreground">Visible Quality Differences</h4>
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
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent" />
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
                <h2 className="text-5xl sm:text-6xl mb-4 text-foreground">Our Models</h2>
                <p className="text-2xl text-muted-foreground max-w-2xl">
                  Two sizes. Transparent pricing. Endless possibilities.
                </p>
              </div>
              <Button 
                size="lg"
                onClick={() => onNavigate('models')}
                className="bg-primary hover:bg-primary/90 text-white h-14 lg:mb-2 border-0 font-bold"
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
                    className="aspect-[3/4] relative overflow-hidden bg-accent/5 cursor-pointer"
                    onClick={() => onNavigate(model.name.toLowerCase())}
                  >
                    <ImageWithFallback 
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    {index === 1 && (
                      <div className="absolute top-0 right-0 bg-accent text-white px-6 py-3 text-sm font-bold">
                        Most Popular
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8 bg-white">
                    {/* Header with Model Name */}
                    <div className="mb-6">
                      <h3 className="text-3xl mb-2 font-bold text-foreground">{model.name}</h3>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <span>{model.bedrooms} bed</span>
                        <span>&bull;</span>
                        <span>{model.bathrooms} bath</span>
                        <span>&bull;</span>
                        <span>{model.sqft} sq ft</span>
                      </div>
                    </div>
                    
                    {/* Monthly Payment - Prominent Display */}
                    <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6 mb-6">
                      <div className="text-sm text-primary mb-1 uppercase tracking-wider font-bold">Monthly payment from*</div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl text-primary font-bold">${model.monthly}</span>
                        <span className="text-muted-foreground font-medium">/mo</span>
                      </div>
                      <div className="text-xs text-muted-foreground italic">
                        *Based on 25% down, 5.5% rate, 25-year term
                      </div>
                    </div>

                    {/* Total Price */}
                    <div className="flex items-baseline justify-between mb-6 pb-6 border-b">
                      <div className="text-muted-foreground">Total starting price</div>
                      <div className="text-2xl text-primary font-bold">${model.price.toLocaleString()}</div>
                    </div>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <div className="space-y-2">
                        {model.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#8b9d83] flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold border-0"
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
                <YouTubeEmbed
                  videoId="DZ-ZeqDqn-4"
                  title="Walk Through the Piccolo"
                  aspectRatio="9/16"
                  className="w-full max-w-md mx-auto"
                />
              </Card>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-primary text-white border-0 text-sm px-4 py-2">
                <Play className="w-4 h-4 mr-2 inline" />
                Video Tour
              </Badge>
              <h2 className="text-5xl sm:text-6xl mb-6 font-bold text-foreground">See the Piccolo Come to Life</h2>
              <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
                Take a complete walkthrough of our Piccolo model and experience the quality, craftsmanship, and thoughtful design that makes cold-form steel homes special.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8b9d83] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1 font-semibold text-foreground">392 Square Feet of Smart Design</h4>
                    <p className="text-muted-foreground">See how every inch is optimized for comfortable living</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8b9d83] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1 font-semibold text-foreground">Modern Finishes & Features</h4>
                    <p className="text-muted-foreground">Quality materials and attention to detail throughout</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#8b9d83] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-1 font-semibold text-foreground">Steel Construction Benefits</h4>
                    <p className="text-muted-foreground">Built in factory. 4-5 day onsite assembly</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('piccolo')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-14 sm:h-16 text-lg sm:text-xl font-bold"
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
            <Badge className="mb-6 bg-accent/10 text-accent border-0 text-sm px-4 py-2 hover:bg-accent/20">
              <Clock className="w-4 h-4 mr-2 inline" />
              Streamlined Process
            </Badge>
            <h2 className="text-5xl sm:text-6xl mb-6 font-bold text-foreground">From Factory to Foundation</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              A simplified path to your new home, designed to save you months of waiting.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative pt-8 text-center group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white z-10"></div>
                <div className="w-20 h-20 bg-accent/5 group-hover:bg-accent/10 transition-colors rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                  <FileText className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-accent mb-2 uppercase tracking-wider">Step 01</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Design & Engineer</h3>
                <p className="text-muted-foreground leading-relaxed px-4">
                  Select your model. We finalize the architectural plans and stamp them with licensed engineering.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative pt-8 text-center group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent/60 rounded-full border-4 border-white z-10"></div>
                <div className="w-20 h-20 bg-accent/5 group-hover:bg-accent/10 transition-colors rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                  <Factory className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-accent mb-2 uppercase tracking-wider">Step 02</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Precision Manufacturing</h3>
                <p className="text-muted-foreground leading-relaxed px-4">
                  Your home is built in our factory with millimeter precision while your foundation is poured on-site.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative pt-8 text-center group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent/40 rounded-full border-4 border-white z-10"></div>
                <div className="w-20 h-20 bg-accent/5 group-hover:bg-accent/10 transition-colors rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                  <Truck className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-accent mb-2 uppercase tracking-wider">Step 03</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Delivery</h3>
                <p className="text-muted-foreground leading-relaxed px-4">
                  All panels, trusses, and structural components are bundled and shipped directly to your property.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative pt-8 text-center group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent/20 rounded-full border-4 border-white z-10"></div>
                <div className="w-20 h-20 bg-accent/5 group-hover:bg-accent/10 transition-colors rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                  <Hammer className="w-10 h-10" />
                </div>
                <div className="text-sm font-bold text-accent mb-2 uppercase tracking-wider">Step 04</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Rapid Assembly</h3>
                <p className="text-muted-foreground leading-relaxed px-4">
                  Walls tilt up in hours. Full structural framing is completed in just 4-5 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}