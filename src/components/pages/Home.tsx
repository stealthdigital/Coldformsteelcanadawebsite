import { Play, Check, ArrowRight, Star, Shield, Clock, Leaf, Home as HomeIcon, Sparkles, ChevronDown, Timer, DollarSign, Award } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Badge } from '../ui/badge';
import { MapleLeaf } from '../icons/MapleLeaf';
import { ReviewSchema } from '../schema/ReviewSchema';
import { OrganizationSchema } from '../schema/OrganizationSchema';
import { HeadMeta } from '../HeadMeta';

const piccoloImage = '/assets/be69edff5a1a525e997504d24005a866111a3d19.png';
const medioImage = '/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';
const heroImage = '/assets/e00ce6e3cc73c04afc4989646fb9f9054d73cd88.png';
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
          {/* Small trust line above headline */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              <span>Built to Last</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <img src={mapleLeafIcon} alt="Canada" className="w-4 h-4 brightness-0 invert" />
              <span>Made in Canada</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>Licensed Engineers</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl mb-6 sm:mb-8 tracking-tight">
            Your Dream Home,<br />Framed in Days
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 sm:mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Cold-form steel construction. 75% faster than wood. 100% Canadian-made.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-16">
            <Button 
              size="lg"
              onClick={() => onNavigate('models')}
              className="bg-[#c8694e] hover:bg-[#b5593d] text-white px-10 h-14 sm:h-16 text-lg sm:text-xl"
            >
              Explore Our Models
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('learning')}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-14 sm:h-16 text-lg sm:text-xl"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl sm:text-4xl mb-2">75%</div>
              <div className="text-xs sm:text-sm text-white/80">Faster Build</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl mb-2">4–5 Days</div>
              <div className="text-xs sm:text-sm text-white/80">Framing Time</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl mb-2">100%</div>
              <div className="text-xs sm:text-sm text-white/80">Fireproof</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl mb-2">100+yr</div>
              <div className="text-xs sm:text-sm text-white/80">Lifespan</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Bento Grid Section - Why Steel */}
      <section className="py-24 px-6 sm:px-12 max-w-[1600px] mx-auto">
        <div className="mb-16 text-center">
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
          <Card className="md:col-span-12 p-10 bg-white border-2">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <Sparkles className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-3xl mb-3">Precision Engineered</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Every panel crafted to exact specifications by licensed Canadian engineers. Factory precision, field speed.
                </p>
              </div>

              {/* Tolerance Comparison */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Steel Side */}
                <div className="bg-primary/5 border-2 border-primary rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg">Cold Formed Steel</h4>
                      <p className="text-sm text-muted-foreground">Factory precision manufacturing</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 mb-4">
                    <div className="text-sm text-muted-foreground mb-2">Tolerance</div>
                    <div className="text-4xl text-primary mb-1">± 1/16"</div>
                    <div className="text-sm text-muted-foreground">(± 1.6 mm)</div>
                  </div>

                  <div className="text-center py-3 bg-primary/10 rounded">
                    <div className="text-xs text-muted-foreground mb-1">Perfect Alignment</div>
                    <div className="flex items-center justify-center gap-1">
                      <div className="text-xs">←</div>
                      <div className="w-4 h-1 bg-primary"></div>
                      <div className="text-xs">1/16" variation</div>
                      <div className="w-4 h-1 bg-primary"></div>
                      <div className="text-xs">→</div>
                    </div>
                  </div>
                </div>

                {/* Wood Side */}
                <div className="bg-muted/50 border-2 border-muted rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-muted text-muted-foreground rounded-lg flex items-center justify-center">
                      <span className="text-xl">🪵</span>
                    </div>
                    <div>
                      <h4 className="text-lg text-muted-foreground">Dimensional Lumber</h4>
                      <p className="text-sm text-muted-foreground">Natural material variation</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 mb-4">
                    <div className="text-sm text-muted-foreground mb-2">Tolerance</div>
                    <div className="text-4xl text-muted-foreground mb-1">± 1/4"</div>
                    <div className="text-sm text-muted-foreground">(± 6.4 mm)</div>
                  </div>

                  <div className="text-center py-3 bg-muted/30 rounded">
                    <div className="text-xs text-muted-foreground mb-1">Variable Alignment</div>
                    <div className="flex items-center justify-center gap-1">
                      <div className="text-xs">←</div>
                      <div className="w-16 h-1 bg-muted-foreground/40"></div>
                      <div className="text-xs text-muted-foreground">1/4" variation (four times wider)</div>
                      <div className="w-16 h-1 bg-muted-foreground/40"></div>
                      <div className="text-xs">→</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-6 mb-8 text-center">
                <div className="text-3xl mb-2">Four Times More Precise Than Dimensional Lumber</div>
                <p className="text-lg text-white/90">This precision translates into visible quality in every aspect of your home</p>
              </div>

              {/* Benefits Grid */}
              <div>
                <h4 className="text-xl mb-4">This precision results in:</h4>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Perfectly straight walls</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Cabinetry and countertops that line up correctly</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">No shimming or corrections during drywall</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Fewer nail pops, cracks, and settling issues</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Cleaner trim work and tighter finish details</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Predictable results every time</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* The Cost Truth Section - Addresses the #1 Objection */}
      <section className="py-24 bg-white">
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

          {/* The Breakdown */}
          <Card className="p-10 bg-muted/30 border-2">
            <h3 className="text-3xl mb-6 text-center">Where Steel Saves You Money</h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">Faster Construction = Less Carrying Cost</h4>
                  <p className="text-sm text-muted-foreground">
                    Framed in 4-5 days means 2-5 months less construction financing. That's $5,000-15,000 saved on a typical build.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">Zero Weather Delays</h4>
                  <p className="text-sm text-muted-foreground">
                    Factory-built panels aren't affected by rain, snow, or humidity. No schedule surprises, no budget overruns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">Factory Precision = Zero Callbacks</h4>
                  <p className="text-sm text-muted-foreground">
                    No warped studs, no settling, no drywall cracks. Dimensional stability eliminates costly warranty repairs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">Stable Steel Pricing</h4>
                  <p className="text-sm text-muted-foreground">
                    Unlike volatile lumber markets, steel costs are predictable. Know your budget from day one—no surprise price spikes.
                  </p>
                </div>
              </div>
            </div>
          </Card>

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

      {/* Models - Magazine Layout */}
      <section className="py-24 bg-muted">
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
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
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

      {/* Diagonal Split - Comparison */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Diagonal background split */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white"></div>
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="0,0 100,0 100,30 0,50" fill="#F5F2ED" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl mb-6">Steel vs. Wood</h2>
            <p className="text-2xl text-muted-foreground">The comparison speaks for itself</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Steel Side */}
            <Card className="p-10 border-4 border-primary bg-white">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-3xl text-primary">Cold-Form Steel</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-[#c8694e] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xl mb-1">4-5 Days Framing Time</div>
                    <div className="text-muted-foreground">Fast on-site assembly</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-[#c8694e] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xl mb-1">100% Non-Combustible</div>
                    <div className="text-muted-foreground">10-15% lower insurance premiums</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-[#c8694e] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xl mb-1">100+ Year Lifespan</div>
                    <div className="text-muted-foreground">$3K maintenance over 30 years</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-[#c8694e] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xl mb-1">Precision Engineered</div>
                    <div className="text-muted-foreground">Straighter walls, zero callbacks</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-[#c8694e] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xl mb-1">Canadian Climate Ready</div>
                    <div className="text-muted-foreground">Freeze-thaw, humidity, wildfire proof</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Wood Side */}
            <Card className="p-10 border-2 bg-muted/50">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-muted text-muted-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🪵</span>
                </div>
                <h3 className="text-3xl text-muted-foreground">Traditional Wood</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 flex-shrink-0 mt-1"></div>
                  <div>
                    <div className="text-xl mb-1 text-muted-foreground">2-3 Weeks Framing</div>
                    <div className="text-sm text-muted-foreground">Weather delays common</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 flex-shrink-0 mt-1"></div>
                  <div>
                    <div className="text-xl mb-1 text-muted-foreground">Flammable Material</div>
                    <div className="text-sm text-muted-foreground">Higher insurance in risk zones</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 flex-shrink-0 mt-1"></div>
                  <div>
                    <div className="text-xl mb-1 text-muted-foreground">40-70 Year Lifespan</div>
                    <div className="text-sm text-muted-foreground">$11K maintenance over 30 years</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 flex-shrink-0 mt-1"></div>
                  <div>
                    <div className="text-xl mb-1 text-muted-foreground">Variable Quality</div>
                    <div className="text-sm text-muted-foreground">Warped studs, drywall cracks</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 flex-shrink-0 mt-1"></div>
                  <div>
                    <div className="text-xl mb-1 text-muted-foreground">Climate Vulnerable</div>
                    <div className="text-sm text-muted-foreground">Rot, pests, moisture damage</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline"
              size="lg"
              onClick={() => onNavigate('learning')}
              className="border-2 h-14"
            >
              Read Full Technical Comparison
              <ArrowRight className="w-4 h-4 ml-2" />
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