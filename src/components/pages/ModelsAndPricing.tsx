import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';
import { Download, CheckCircle, ArrowRight } from 'lucide-react';
import { Slider } from '../ui/slider';

// GitHub raw URLs for Piccolo images
const piccoloImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/CFS-Piccolo-Dark-Exterior-2.jpg';
const piccoloFloorPlan = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Piccolo/PICCOLO-FLOOR-PLAN.jpg';

// GitHub raw URLs for Medio images
const medioImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Medio/Medio-Dark-Exterior-2.jpg';
const medioFloorPlan = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Models/Medio/MEDIO-FLOOR-PLAN.jpg';

interface ModelsAndPricingProps {
  onNavigate: (page: string) => void;
}

export function ModelsAndPricing({ onNavigate }: ModelsAndPricingProps) {
  const [sqftValue, setSqftValue] = useState([650]);
  
  const models = [
    {
      name: 'Piccolo',
      sqft: 392,
      dimensions: '14\' × 28\'',
      shellPrice: 138590,
      turnkeyPrice: null,
      monthly: 645,
      image: piccoloImage,
      features: [
        'Engineered steel frame structure',
        'Insulated wall & roof panels',
        'Windows & exterior doors',
        'Weatherproof exterior finish',
        'Full interior finish on Turnkey',
        'Signature kitchen',
        'Spacious bathroom',
        'In-suite washer/dryer',
        'High-efficiency mini-split heating/cooling'
      ]
    },
    {
      name: 'Medio',
      sqft: 560,
      dimensions: '14\' × 40\'',
      shellPrice: null,
      turnkeyPrice: null,
      startingFrom: 186000,
      monthly: 865,
      image: medioImage,
      features: [
        'Engineered steel frame structure',
        'Insulated wall & roof panels',
        'Windows & exterior doors',
        'Weatherproof exterior finish',
        'Signature kitchen',
        'Generous bathroom',
        'Built-in storage',
        'In-suite washer/dryer',
        'Efficient mini-split heating/cooling'
      ]
    }
  ];

  const woodCost = Math.round(sqftValue[0] * 380);
  const steelCost = Math.round(sqftValue[0] * 220);
  const savings = Math.round(((woodCost - steelCost) / woodCost) * 100);

  const faqs = [
    {
      question: "What's included in the base price?",
      answer: "The shell-only price includes the complete engineered steel frame structure, insulated wall and roof panels, windows, exterior doors, weatherproof finish, and full permit package with engineered drawings. Turnkey adds complete interior finishing, electrical, plumbing, HVAC, and fixtures."
    },
    {
      question: "How fast can I get one?",
      answer: "From order to shell completion: framed in 4-5 days on-site assembly. Manufacturing takes 4-6 weeks. Total timeline from contract to turnkey: 8-12 weeks depending on finishes and site preparation."
    },
    {
      question: "What about delivery outside Ontario?",
      answer: "We ship across Canada! Delivery costs vary by distance. We have manufacturing partners in Hamilton, Barrie, and Brampton to optimize shipping. Contact us for a detailed shipping quote based on your location."
    },
    {
      question: "Can I finish the inside myself?",
      answer: "Absolutely! Many customers choose the shell-only option and complete interior finishing themselves or with their own contractors. We provide complete specifications and support throughout the process."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeadMeta 
        title="Steel Home Models & Options | Cold Form Steel Canada Barndominiums"
        description="Explore our Piccolo (392 sq ft) and Medio (560 sq ft) steel home models. Fast construction, shell-only or turnkey options, financing available. Framed in 4-5 days."
        image={piccoloImage}
      />
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-6 font-bold tracking-tight">
            Models & Pricing
          </h1>
          <p className="text-xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
            Explore our collection of customizable steel homes with transparent pricing and flexible options
          </p>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {models.map((model) => (
              <Card key={model.name} className="overflow-hidden bg-white shadow-xl border-0">
                <div 
                  className="h-64 relative cursor-pointer group"
                  onClick={() => onNavigate(model.name.toLowerCase())}
                >
                  <ImageWithFallback 
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-terracotta text-white border-0 font-bold px-4 py-2 uppercase tracking-widest text-[10px]">
                    {model.sqft} sq ft
                  </Badge>
                </div>
                
                <div className="p-8">
                  <h2 className="mb-2 font-bold text-3xl text-foreground tracking-tight">{model.name}</h2>
                  <p className="text-muted-foreground mb-8 font-medium italic">{model.dimensions}</p>
                  
                  <Tabs defaultValue="shell" className="mb-8">
                    <TabsList className="grid w-full grid-cols-2 bg-muted p-1">
                      <TabsTrigger value="shell" className="font-bold data-[state=active]:bg-white data-[state=active]:text-terracotta transition-all">Shell-Only</TabsTrigger>
                      <TabsTrigger value="turnkey" className="font-bold data-[state=active]:bg-white data-[state=active]:text-terracotta transition-all">Turnkey</TabsTrigger>
                    </TabsList>
                    <TabsContent value="shell" className="mt-6">
                      <div className="text-3xl text-terracotta mb-1 font-bold">
                        Starting From ${(model.shellPrice || model.startingFrom).toLocaleString()}
                      </div>
                      {model.monthly && (
                        <div className="text-sm text-muted-foreground mb-4 font-bold">
                          Est. ${model.monthly}/mo over 25 years*
                        </div>
                      )}
                      {!model.monthly && (
                        <div className="text-muted-foreground mb-4 font-bold italic">
                          Monthly payments available
                        </div>
                      )}
                    </TabsContent>
                    <TabsContent value="turnkey" className="mt-6">
                      {model.turnkeyPrice ? (
                        <>
                          <div className="text-3xl text-terracotta mb-1 font-bold">
                            ${model.turnkeyPrice.toLocaleString()}
                          </div>
                          {model.monthly && (
                            <div className="text-sm text-muted-foreground mb-4 font-bold">
                              Est. ${Math.round(model.monthly * 1.65)}/mo over 25 years*
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="text-muted-foreground mb-4 font-bold italic">
                          Contact us for turnkey pricing options
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mb-8">
                    <h4 className="mb-4 font-bold text-foreground border-b pb-2 uppercase tracking-widest text-xs">What's Included:</h4>
                    <ul className="space-y-3">
                      {model.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm font-medium text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <Button 
                      className="w-full font-bold border-2 border-terracotta text-terracotta hover:bg-terracotta/5 h-12" 
                      variant="outline"
                      disabled={model.name !== 'Piccolo' && model.name !== 'Medio'}
                      onClick={() => {
                        let fileUrl = null;
                        let fileName = '';

                        if (model.name === 'Piccolo') {
                          fileUrl = piccoloFloorPlan;
                          fileName = 'Piccolo-Floor-Plan.png';
                        } else if (model.name === 'Medio') {
                          fileUrl = medioFloorPlan;
                          fileName = 'Medio-Floor-Plan.png';
                        }

                        if (fileUrl) {
                          const link = document.createElement('a');
                          link.href = fileUrl;
                          link.download = fileName;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Floor Plan
                    </Button>
                    <Button 
                      className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-bold h-12 border-0 shadow-md transition-all hover:scale-[1.02]"
                      onClick={() => onNavigate(model.name.toLowerCase())}
                    >
                      Explore {model.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center text-[10px] text-muted-foreground mt-12 max-w-3xl mx-auto font-bold uppercase tracking-widest leading-relaxed">
            *Monthly payment estimates based on 25% down payment, 5.5% interest rate, and 25-year amortization. Actual rates and payments may vary based on creditworthiness, market conditions, and lender requirements. Contact us for personalized financing options.
          </div>
        </div>
      </section>

      {/* Comparison Calculator */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-10 shadow-2xl border-2 border-muted/50 rounded-3xl">
            <h2 className="text-4xl mb-6 text-center font-bold text-foreground tracking-tight">
              What Really Makes Steel Different?
            </h2>
            
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              90% of your home costs the same whether you choose wood or steel. The real difference? The framing and how fast you can move in.
            </p>
            
            {/* What's Identical Section */}
            <div className="bg-muted/30 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl mb-6 text-center font-bold text-foreground">What's Identical in Both Builds</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  "Cladding & Siding", "Concrete Foundation", "Plumbing Systems",
                  "Electrical Wiring", "Appliances", "Kitchen Cabinets",
                  "Flooring", "Doors & Windows", "Interior Finishes"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-sm text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-terracotta flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* The Real Difference - Framing Comparison */}
            <h3 className="text-2xl mb-8 text-center font-bold text-foreground uppercase tracking-widest text-sm">The Real Difference: Your Framing Options</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Steel Column */}
              <div className="bg-terracotta/5 p-8 rounded-2xl border-2 border-terracotta/20 shadow-sm">
                <div className="text-center mb-6">
                  <Badge className="bg-terracotta text-white border-0 text-[10px] px-4 py-2 font-bold uppercase tracking-[0.2em]">
                    Cold-Form Steel
                  </Badge>
                </div>
                
                <div className="space-y-6 font-medium">
                  <div>
                    <div className="text-lg mb-1 font-bold text-terracotta uppercase tracking-wider text-xs">Timeline</div>
                    <div className="text-muted-foreground">Ready in 2 weeks, installed in 4-5 days</div>
                  </div>
                  
                  <div>
                    <div className="text-lg mb-1 font-bold text-terracotta uppercase tracking-wider text-xs">Quality Control</div>
                    <div className="text-muted-foreground">Pre-engineered in factory, guaranteed fit</div>
                  </div>
                  
                  <div>
                    <div className="text-lg mb-1 font-bold text-terracotta uppercase tracking-wider text-xs">Reliability</div>
                    <div className="text-muted-foreground">No weather delays, predictable schedule</div>
                  </div>
                  
                  <div>
                    <div className="text-lg mb-1 font-bold text-terracotta uppercase tracking-wider text-xs">Safety</div>
                    <div className="text-muted-foreground">Non-combustible, won't warp or rot</div>
                  </div>
                </div>
              </div>
              
              {/* Wood Column */}
              <div className="bg-muted/30 p-8 rounded-2xl border-2 border-muted shadow-sm">
                <div className="text-center mb-6">
                  <Badge className="bg-muted-foreground text-white border-0 text-[10px] px-4 py-2 font-bold uppercase tracking-[0.2em]">
                    Traditional Wood
                  </Badge>
                </div>
                
                <div className="space-y-6 font-medium">
                  <div>
                    <div className="text-lg mb-1 font-bold text-foreground uppercase tracking-wider text-xs">Timeline</div>
                    <div className="text-muted-foreground">Depends on lumber availability and weather</div>
                  </div>
                  
                  <div>
                    <div className="text-lg mb-1 font-bold text-foreground uppercase tracking-wider text-xs">Quality Control</div>
                    <div className="text-muted-foreground">On-site construction, variable quality</div>
                  </div>
                  
                  <div>
                    <div className="text-lg mb-1 font-bold text-foreground uppercase tracking-wider text-xs">Reliability</div>
                    <div className="text-muted-foreground">Weather-dependent, unpredictable delays</div>
                  </div>
                  
                  <div>
                    <div className="text-lg mb-1 font-bold text-foreground uppercase tracking-wider text-xs">Safety</div>
                    <div className="text-muted-foreground">Combustible material, can warp over time</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-terracotta/5 p-8 rounded-2xl border-l-8 border-terracotta mb-10">
              <h3 className="text-xl mb-4 font-bold text-terracotta uppercase tracking-widest text-xs">The Bottom Line</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-bold">
                Most of your build cost is identical. The difference is speed, reliability, and quality. Steel gives you a predictable, fast, frustration-free build that wood simply cannot match.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-bold h-16 text-base md:text-xl border-0 shadow-xl transition-all hover:scale-[1.01]"
              onClick={() => onNavigate('contact')}
            >
              <span className="flex items-center justify-center gap-2">
                Get Your Personalized Quote <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
              </span>
            </Button>
          </Card>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 font-bold text-foreground tracking-tight">Simple, Fast Financing</h2>
            <p className="text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              Own your ADU from as little as a car payment per month
            </p>
          </div>
          
          <Card className="p-10 shadow-2xl border-0 bg-white rounded-3xl">
            {/* Financing Partners */}
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              <div className="bg-muted/30 px-8 py-6 rounded-2xl border border-muted font-bold text-center">
                <div className="text-[10px] text-muted-foreground mb-2 uppercase tracking-[0.2em]">Primary Partner</div>
                <div className="text-2xl text-terracotta tracking-tighter">CIBC</div>
              </div>
              <div className="bg-muted/30 px-8 py-6 rounded-2xl border border-muted font-bold text-center">
                <div className="text-[10px] text-muted-foreground mb-2 uppercase tracking-[0.2em]">Partner</div>
                <div className="text-2xl text-terracotta tracking-tighter">Connelly Capital</div>
              </div>
            </div>
            
            {/* Grants Section */}
            <div className="bg-terracotta/5 p-8 rounded-2xl border-2 border-terracotta/20 mb-12 shadow-sm">
              <h3 className="text-2xl mb-4 text-center font-bold text-foreground tracking-tight">Grant-Assisted Affordability</h3>
              <p className="text-lg text-center text-muted-foreground mb-8 font-medium">
                Many ADUs qualify for up to $50,000 in provincial and federal grants
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-inner border">
                <div className="grid md:grid-cols-2 gap-8 text-center divide-x">
                  <div className="px-4">
                    <div className="text-xs text-muted-foreground mb-2 font-bold uppercase tracking-widest">Example: Piccolo</div>
                    <div className="text-4xl text-foreground mb-1 font-bold tracking-tighter">$138,590</div>
                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.2em]">Starting Price</div>
                  </div>
                  <div className="px-4">
                    <div className="text-xs text-terracotta mb-2 font-bold uppercase tracking-widest">After $50K Grant</div>
                    <div className="text-4xl text-terracotta mb-1 font-bold tracking-tighter">$88,590</div>
                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.2em]">Amount to Finance</div>
                  </div>
                </div>
                <p className="text-center text-[10px] text-muted-foreground mt-6 font-bold uppercase tracking-widest italic">
                  * Grant amounts vary by region and qualification
                </p>
              </div>
            </div>
            
            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                { title: "24-Hour Approvals", desc: "Fast approval process for builds on owned property" },
                { title: "25% Down Required", desc: "Standard deposit on building materials to secure your project" },
                { title: "Owner/Builder Benefits", desc: "No GC markup (saves 10-30%) and ability to reclaim HST" },
                { title: "Transparent Monthly Payments", desc: "Predictable costs often lower than rent in your area" }
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                  <div className="font-medium">
                    <div className="mb-1 font-bold text-foreground uppercase tracking-widest text-[11px]">{benefit.title}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-muted/30 p-6 rounded-2xl mb-8 text-center border-2 border-dashed border-muted">
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-[0.15em] leading-relaxed">
                <strong>Note:</strong> Mechanicals (HVAC, plumbing) quoted separately based on fuel type and regional requirements. Financing based on market value appreciation, not just build costs.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-bold h-16 text-xl border-0 shadow-xl transition-all hover:scale-[1.01]"
              onClick={() => onNavigate('contact')}
            >
              Get Your Financing Estimate
            </Button>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center font-bold text-foreground tracking-tight">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full font-medium">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-muted/50">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-terracotta transition-colors py-6">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}