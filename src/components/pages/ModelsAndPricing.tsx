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
import piccoloImage from 'figma:asset/be69edff5a1a525e997504d24005a866111a3d19.png';

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
      image: 'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NzU0NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
    <div className="min-h-screen">
      <HeadMeta 
        title="Steel Home Models & Options | Cold Form Steel Canada Barndominiums"
        description="Explore our Piccolo (392 sq ft) and Medio (560 sq ft) steel home models. Fast construction, shell-only or turnkey options, financing available. Framed in 4-5 days."
        image={piccoloImage}
      />
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">
            Explore Our Home Models
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Browse our collection of customizable steel homes and request a personalized quote tailored to your needs.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white"
            onClick={() => onNavigate('contact')}
          >
            Get a Quote
          </Button>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {models.map((model) => (
              <Card key={model.name} className="overflow-hidden bg-white">
                <div className="h-64 relative">
                  <ImageWithFallback 
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-white">
                    {model.sqft} sq ft
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h2 className="mb-2">{model.name}</h2>
                  <p className="text-muted-foreground mb-6">{model.dimensions}</p>
                  
                  <Tabs defaultValue="shell" className="mb-6">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="shell">Shell-Only</TabsTrigger>
                      <TabsTrigger value="turnkey">Turnkey</TabsTrigger>
                    </TabsList>
                    <TabsContent value="shell" className="mt-4">
                      <div className="text-3xl text-primary mb-1">
                        Starting From ${(model.shellPrice || model.startingFrom).toLocaleString()}
                      </div>
                      {model.monthly && (
                        <div className="text-sm text-muted-foreground mb-4">
                          Est. ${model.monthly}/mo over 25 years*
                        </div>
                      )}
                      {!model.monthly && (
                        <div className="text-muted-foreground mb-4">
                          Monthly payments available
                        </div>
                      )}
                    </TabsContent>
                    <TabsContent value="turnkey" className="mt-4">
                      {model.turnkeyPrice ? (
                        <>
                          <div className="text-3xl text-primary mb-1">
                            ${model.turnkeyPrice.toLocaleString()}
                          </div>
                          {model.monthly && (
                            <div className="text-sm text-muted-foreground mb-4">
                              Est. ${Math.round(model.monthly * 1.65)}/mo over 25 years*
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="text-muted-foreground mb-4">
                          Contact us for turnkey pricing options
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mb-6">
                    <h4 className="mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {model.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download Floor Plan
                    </Button>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white"
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
          
          <div className="text-center text-xs text-muted-foreground mt-8 max-w-3xl mx-auto">
            *Monthly payment estimates based on 25% down payment, 5.5% interest rate, and 25-year amortization. Actual rates and payments may vary based on creditworthiness, market conditions, and lender requirements. Contact us for personalized financing options.
          </div>
        </div>
      </section>

      {/* Comparison Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <h2 className="text-3xl mb-6 text-center">
              What Really Makes Steel Different?
            </h2>
            
            <p className="text-xl text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              90% of your home costs the same whether you choose wood or steel. The real difference? The framing and how fast you can move in.
            </p>
            
            {/* What's Identical Section */}
            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl mb-4 text-center">What's Identical in Both Builds</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sage flex-shrink-0" />
                  <span>Cladding & Siding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sage flex-shrink-0" />
                  <span>Concrete Foundation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sage flex-shrink-0" />
                  <span>Plumbing Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sage flex-shrink-0" />
                  <span>Electrical Wiring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sage flex-shrink-0" />
                  <span>Appliances</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sage flex-shrink-0" />
                  <span>Kitchen Cabinets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sage flex-shrink-0" />
                  <span>Flooring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sage flex-shrink-0" />
                  <span>Doors & Windows</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sage flex-shrink-0" />
                  <span>Interior Finishes</span>
                </div>
              </div>
            </div>
            
            {/* The Real Difference - Framing Comparison */}
            <h3 className="text-2xl mb-6 text-center">The Real Difference: Your Framing Options</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Steel Column */}
              <div className="bg-sage/10 p-6 rounded-lg border-2 border-sage">
                <div className="text-center mb-4">
                  <Badge className="bg-sage text-white border-0 text-sm px-4 py-2">
                    Cold-Form Steel
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-lg mb-1">Timeline</div>
                    <div className="text-muted-foreground">Ready in 2 weeks, installed in 4-5 days</div>
                  </div>
                  
                  <div>
                    <div className="text-lg mb-1">Quality Control</div>
                    <div className="text-muted-foreground">Pre-engineered in factory, guaranteed fit</div>
                  </div>
                  
                  <div>
                    <div className="text-lg mb-1">Reliability</div>
                    <div className="text-muted-foreground">No weather delays, predictable schedule</div>
                  </div>
                  
                  <div>
                    <div className="text-lg mb-1">Safety</div>
                    <div className="text-muted-foreground">Non-combustible, won't warp or rot</div>
                  </div>
                  
                  <div>
                    <div className="text-lg mb-1">Labor</div>
                    <div className="text-muted-foreground">Fast installation, no specialized framers needed</div>
                  </div>
                </div>
              </div>
              
              {/* Wood Column */}
              <div className="bg-muted p-6 rounded-lg border-2 border-muted">
                <div className="text-center mb-4">
                  <Badge className="bg-muted-foreground text-white border-0 text-sm px-4 py-2">
                    Traditional Wood
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-lg mb-1">Timeline</div>
                    <div className="text-muted-foreground">Depends on lumber availability and weather</div>
                  </div>
                  
                  <div>
                    <div className="text-lg mb-1">Quality Control</div>
                    <div className="text-muted-foreground">On-site construction, variable quality</div>
                  </div>
                  
                  <div>
                    <div className="text-lg mb-1">Reliability</div>
                    <div className="text-muted-foreground">Weather-dependent, unpredictable delays</div>
                  </div>
                  
                  <div>
                    <div className="text-lg mb-1">Safety</div>
                    <div className="text-muted-foreground">Combustible material, can warp over time</div>
                  </div>
                  
                  <div>
                    <div className="text-lg mb-1">Labor</div>
                    <div className="text-muted-foreground">Skilled framers needed (increasingly hard to find)</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent mb-6">
              <h3 className="text-xl mb-3">The Bottom Line</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most of your build cost is identical. The difference is speed, reliability, and quality. Steel gives you a predictable, fast, frustration-free build that wood simply cannot match.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="w-full bg-[#c8694e] hover:bg-[#b5593d] text-white"
              onClick={() => onNavigate('contact')}
            >
              Get Your Personalized Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Simple, Fast Financing</h2>
            <p className="text-xl text-muted-foreground">
              Own your ADU from as little as a car payment per month
            </p>
          </div>
          
          <Card className="p-8">
            {/* Financing Partners */}
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <div className="bg-white px-6 py-4 rounded-lg shadow-sm">
                <div className="text-sm text-muted-foreground mb-1">Primary Partner</div>
                <div>CIBC</div>
              </div>
              <div className="bg-white px-6 py-4 rounded-lg shadow-sm">
                <div className="text-sm text-muted-foreground mb-1">Partner</div>
                <div>Connelly Capital</div>
              </div>
            </div>
            
            {/* Grants Section */}
            <div className="bg-sage/10 p-6 rounded-lg border-2 border-sage mb-8">
              <h3 className="text-2xl mb-3 text-center">Grant-Assisted Affordability</h3>
              <p className="text-lg text-center text-muted-foreground mb-4">
                Many ADUs qualify for up to $50,000 in provincial and federal grants
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Example: Piccolo</div>
                    <div className="text-2xl text-primary mb-1">$138,590</div>
                    <div className="text-sm text-muted-foreground">Starting Price</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">After $50K Grant</div>
                    <div className="text-2xl text-sage mb-1">$88,590</div>
                    <div className="text-sm text-muted-foreground">Amount to Finance</div>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Grant amounts vary by region and qualification
                </p>
              </div>
            </div>
            
            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <div className="mb-1">24-Hour Approvals</div>
                  <div className="text-sm text-muted-foreground">Fast approval process for builds on owned property</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <div className="mb-1">25% Down Required</div>
                  <div className="text-sm text-muted-foreground">Standard deposit on building materials to secure your project</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <div className="mb-1">Owner/Builder Benefits</div>
                  <div className="text-sm text-muted-foreground">No GC markup (saves 10-30%) and ability to reclaim HST</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <div className="mb-1">Transparent Monthly Payments</div>
                  <div className="text-sm text-muted-foreground">Predictable costs often lower than rent in your area</div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg mb-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Mechanicals (HVAC, plumbing) quoted separately based on fuel type and regional requirements. Financing based on market value appreciation, not just build costs.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-white"
              onClick={() => onNavigate('contact')}
            >
              Get Your Financing Estimate
            </Button>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
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