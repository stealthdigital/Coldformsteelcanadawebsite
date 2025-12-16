import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, DollarSign, TrendingDown, Award, Linkedin, Zap, Home, Wrench, Hammer } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArticleSchema } from '../schema/ArticleSchema';
import { HeadMeta } from '../HeadMeta';
import johnMontgomeryPhoto from 'figma:asset/f7589f12c4db2294f1600532a47c3b3c990ffc90.png';

interface CostDriversArticleProps {
  onNavigate: (page: string) => void;
}

export function CostDriversArticle({ onNavigate }: CostDriversArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="Steel Home Construction Costs Breakdown | Cold Form Steel Canada"
        description="Understand what drives construction costs for cold-form steel homes. Compare material costs, labor savings, speed benefits, and total project costs vs wood framing in Ontario."
        image="https://via.placeholder.com/1200x630/665f55/ffffff?text=Construction+Costs"
      />
      <ArticleSchema
        headline="What Drives the Cost of Your Build?"
        description="Understanding the key factors that determine the cost of building with cold-form steel construction."
        author={{ name: 'John Montgomery', jobTitle: 'President, Cold Form Steel Canada' }}
        datePublished="2025-12-09"
        category="Cost & Financing"
        keywords={['construction costs', 'steel building cost', 'cold form steel pricing', 'ADU cost', 'home building budget']}
      />
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => onNavigate('learning')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Learning Centre
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Badge className="bg-primary text-white mb-4">
            Cost & Financing
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6">
            What Drives the Cost of Your Build?
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            When people reach out to us, the first thing they want to know is simple: "How much does it cost to build with steel?"
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 2024</span>
            </div>
            <button className="flex items-center gap-2 ml-auto hover:text-accent transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            By John Montgomery, SteelBuilt Group of Companies
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            It is a fair question. Most builders avoid answering it. They hide pricing, force consultations, or make you wait weeks for quotes that never arrive. I prefer to explain exactly what drives cost so you can make an informed decision without pressure.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            And although the exact construction price varies depending on the job, climate, site conditions, finishes, and mechanical choices, the same core principles apply to every build.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-12">
            This is the truth about where your money actually goes.
          </p>

          {/* INFOGRAPHIC */}
          <div className="my-16 bg-gradient-to-br from-primary/5 via-accent/5 to-[#8b9d83]/5 p-8 rounded-2xl border-2 border-primary/20">
            <div className="text-center mb-12">
              <Badge className="bg-accent text-white mb-4 text-base px-4 py-2">Cost Breakdown Infographic</Badge>
              <h2 className="text-3xl md:text-4xl mb-3">Where Your Money Goes: Steel vs Wood</h2>
              <p className="text-lg text-muted-foreground">Understanding the true cost drivers of your build</p>
            </div>

            {/* 90% Same Costs Visualization */}
            <div className="bg-white rounded-xl p-8 mb-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-3 mb-3">
                  <DollarSign className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl">90% of Costs Are Identical</h3>
                </div>
                <p className="text-muted-foreground">Regardless of wood or steel framing</p>
              </div>
              
              {/* Visual bar */}
              <div className="mb-6">
                <div className="h-16 bg-muted rounded-lg overflow-hidden flex">
                  <div className="w-[90%] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-white">
                    <span>Same Costs: Windows, Doors, Roofing, Foundation, Plumbing, Electrical, Finishes</span>
                  </div>
                  <div className="w-[10%] bg-accent flex items-center justify-center text-white text-sm">
                    10%
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>All standard building components</span>
                  <span className="text-accent">Only framing differs</span>
                </div>
              </div>
            </div>

            {/* Speed & Timeline Comparison */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#8b9d83]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#8b9d83]/20 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-[#8b9d83]" />
                  </div>
                  <h3 className="text-xl">Cold-Form Steel</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl text-[#8b9d83]">4-5</span>
                    <span className="text-muted-foreground">days to frame</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#8b9d83]" />
                      <span>Factory precision</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#8b9d83]" />
                      <span>No weather delays</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#8b9d83]" />
                      <span>Minimal site labour</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-muted">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-muted p-3 rounded-lg">
                    <Hammer className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl">Traditional Wood</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl text-muted-foreground">2-4</span>
                    <span className="text-muted-foreground">weeks to frame</span>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 border-2 border-muted-foreground rounded-full" />
                      <span>Weather dependent</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 border-2 border-muted-foreground rounded-full" />
                      <span>Scarce skilled labour</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 border-2 border-muted-foreground rounded-full" />
                      <span>Material inconsistency</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Cost Examples */}
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2">Real Project Savings</h3>
                <p className="text-muted-foreground">Completed projects across Ontario</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">Caledon Project</div>
                  <div className="space-y-1 mb-3">
                    <div className="text-sm line-through text-muted-foreground">Wood: $3,000,000+</div>
                    <div className="text-2xl text-accent">Steel: $400,000</div>
                  </div>
                  <div className="text-xs text-[#8b9d83]">87% savings</div>
                </div>

                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">Fort Erie Project</div>
                  <div className="space-y-1 mb-3">
                    <div className="text-sm line-through text-muted-foreground">Wood: $800,000</div>
                    <div className="text-2xl text-accent">Steel: $240,000</div>
                  </div>
                  <div className="text-xs text-[#8b9d83]">70% savings</div>
                </div>

                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">Typical ADU</div>
                  <div className="space-y-1 mb-3">
                    <div className="text-sm line-through text-muted-foreground">Modular: $300,000+</div>
                    <div className="text-2xl text-accent">Steel: $160,000</div>
                  </div>
                  <div className="text-xs text-[#8b9d83]">47% savings</div>
                </div>
              </div>
            </div>

            {/* GC Markup Savings */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingDown className="w-6 h-6 text-[#8b9d83]" />
                  <h3 className="text-xl">Save GC Markup</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl text-accent">10-30%</span>
                    <span className="text-muted-foreground">typical GC fees</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our Owner Builder option lets you avoid contractor markups and claim HST back
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-accent" />
                  <h3 className="text-xl">Two Pricing Options</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm">Shell Package</div>
                      <div className="text-xs text-muted-foreground">Structure, windows, doors, roof</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm">Turnkey Package</div>
                      <div className="text-xs text-muted-foreground">Complete move-in ready home</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Advantages Summary */}
            <div className="bg-gradient-to-r from-accent to-accent/90 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl mb-6">Why Steel Wins on Cost</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <Zap className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm">Faster</div>
                  <div className="text-xs opacity-90">4-5 day framing</div>
                </div>
                <div className="space-y-2">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm">Stronger</div>
                  <div className="text-xs opacity-90">Factory precision</div>
                </div>
                <div className="space-y-2">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm">Predictable</div>
                  <div className="text-xs opacity-90">No surprises</div>
                </div>
                <div className="space-y-2">
                  <DollarSign className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm">Cost Effective</div>
                  <div className="text-xs opacity-90">47-87% savings</div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Section 1 */}
          <section className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg mt-1">
                <DollarSign className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Most of Your Build Costs Are the Same Whether You Choose Wood or Steel</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This is the part most people do not realize. About 90 percent of the cost of building a home has nothing to do with whether the frame is wood or steel.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You will spend the same amount on:
                </p>

                <div className="bg-muted/30 p-6 rounded-lg space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Windows and doors</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Roofing and exterior cladding</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Concrete pad or foundation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Plumbing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Electrical</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Appliances</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Flooring</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Kitchen cabinetry and fixtures</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Interior finishes</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  All of these costs are identical regardless of the framing material.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  This is why comparing wood vs steel strictly by price per square foot is misleading. The real difference is only in two areas:
                </p>

                <div className="bg-accent/5 p-6 rounded-lg mb-6">
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>The framing material</li>
                    <li>The labour and timeline required to install that framing</li>
                  </ol>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  That is where steel creates major advantages.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Section 2 */}
          <section className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg mt-1">
                <TrendingDown className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">The Real Cost Difference Comes From Speed, Labour, and Predictability</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cold form steel framing arrives as a precise, pre-engineered kit. Panels are built indoors in a warm, dry factory using Framecad technology. Every stud is pre cut. Every opening is pre engineered. Every screw location is pre dimpled.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  This eliminates costly delays and dramatically reduces labour hours.
                </p>

                <Card className="p-6 bg-[#8b9d83]/10 border-[#8b9d83] mb-6">
                  <h3 className="text-xl mb-4">What this means for you</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                      <p className="mb-0">Framing typically completed in 4 to 5 days</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                      <p className="mb-0">Minimal site labour required</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                      <p className="mb-0">No weather delays</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                      <p className="mb-0">No warped lumber</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                      <p className="mb-0">No rework or measurement errors</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                      <p className="mb-0">No waiting on scarce framing crews</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                      <p className="mb-0">No unpredictable lumber market swings</p>
                    </div>
                  </div>
                </Card>

                <p className="text-muted-foreground leading-relaxed">
                  Faster framing means earlier finishing, earlier occupancy, and far fewer surprises.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Section 3 */}
          <section className="space-y-6 mb-12">
            <h2 className="text-3xl mb-6">Real World Examples of Steel Cost Advantages</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Across Ontario we have seen the same pattern again and again.
            </p>

            <div className="space-y-6">
              <Card className="p-6 bg-muted/30">
                <h3 className="text-xl mb-3">Caledon Project</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A design that would cost more than 3 million dollars in traditional wood construction was built in steel for roughly 400,000 dollars including about 90,000 dollars in windows.
                </p>
              </Card>

              <Card className="p-6 bg-muted/30">
                <h3 className="text-xl mb-3">Fort Erie Project</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Comparable wood framing quotes were around 800,000 dollars.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our steel version came in at 240,000 dollars.
                </p>
              </Card>

              <Card className="p-6 bg-muted/30">
                <h3 className="text-xl mb-3">ADUs and Tiny Homes</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Competitors sell modular ADUs for 300,000 dollars or more.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  We deliver similar units for around 160,000 dollars.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In many grant eligible cases, homeowners end up financing only about 40,000 dollars after incentives.
                </p>
              </Card>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-6">
              These are completed jobs, not estimates. This is what happens when construction is engineered and delivered with precision.
            </p>
          </section>

          <Separator className="my-12" />

          {/* Section 4 */}
          <section className="space-y-6 mb-12">
            <h2 className="text-3xl mb-6">Why Factory Built Construction Matters</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Building inside a controlled environment eliminates all the hidden costs that show up on job sites:
            </p>

            <div className="bg-muted/30 p-6 rounded-lg space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="mb-0">Weather delays</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="mb-0">Moisture damaged materials</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="mb-0">Warped or twisted lumber</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="mb-0">Inconsistent quality</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="mb-0">Cost overruns caused by rework</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Steel panels come off the line square, straight, and ready to install.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Countertops, cabinetry, and interior layouts fit exactly because the structural dimensions are exact. This is something wood framing cannot guarantee.
            </p>
          </section>

          <Separator className="my-12" />

          {/* Section 5 */}
          <section className="space-y-6 mb-12">
            <h2 className="text-3xl mb-6">Saving on General Contractor Markups</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              A general contractor normally charges 10 to 30 percent on the entire project.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Our process allows many clients to apply as Owner Builders, which means:
            </p>

            <div className="bg-[#8b9d83]/10 p-6 rounded-lg space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                <p className="mb-0">You save that GC markup</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                <p className="mb-0">You can claim your HST back</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                <p className="mb-0">You gain more control over finish selections</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                <p className="mb-0">You avoid unnecessary middle layers of cost and communication</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              We provide stamped engineering, structural plans, and a clear path so you understand the entire build sequence from start to finish.
            </p>
          </section>

          <Separator className="my-12" />

          {/* Section 6 */}
          <section className="space-y-6 mb-12">
            <h2 className="text-3xl mb-6">Additional Savings Identified by Framecad</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Framecad highlights a number of cost saving factors that most people never consider.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-3">Material Efficiency</h3>
                <div className="bg-muted/30 p-6 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Stronger material means fewer studs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Lighter weight reduces foundation load</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">No shrinkage or settlement</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">No rot, mold, or termite risk</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-3">Labour and Equipment</h3>
                <div className="bg-muted/30 p-6 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Reduced scaffolding</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Less on site cutting and waste</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Smaller crews required</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Shorter supervision and project management hours</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-3">Long Term Savings</h3>
                <div className="bg-muted/30 p-6 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Better fire resistance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Lower maintenance over the life of the building</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Reduced insurance costs, especially commercial</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Improved thermal performance with steel insulated assemblies</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-6">
              Cold form steel saves money during construction and continues to save money every year that you own the building.
            </p>
          </section>

          <Separator className="my-12" />

          {/* Section 7 */}
          <section className="space-y-6 mb-12">
            <h2 className="text-3xl mb-6">Shell Pricing and Turnkey Pricing</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              For many of our models we offer two clear options.
            </p>

            <div className="space-y-6">
              <Card className="p-6 bg-accent/5 border-accent">
                <h3 className="text-xl mb-4">Shell Only</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Includes:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Complete steel structure</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Exterior sheathing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Windows and doors</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Roof and cladding packages</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Interior framing matched to floor plans</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-[#8b9d83]/10 border-[#8b9d83]">
                <h3 className="text-xl mb-4">Turnkey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Includes everything in the Shell plus:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Electrical</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Plumbing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Insulation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Interior finishes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Flooring</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Kitchen and bathroom</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Lighting</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Fixtures</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Trim</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Full interior completion</p>
                  </div>
                </div>
              </Card>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-6">
              We publish detailed lists for each turnkey model so you know exactly what is included. The only variable not included is mechanical systems because heating sources differ across regions. These are always quoted individually and transparently.
            </p>
          </section>

          <Separator className="my-12" />

          {/* Section 8 */}
          <section className="space-y-6 mb-12">
            <h2 className="text-3xl mb-6">Monthly Payments Instead of Large Lump Sums</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most homeowners think in terms of monthly affordability, not total project value.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              We work with lending partners who understand steel construction and can provide fast approvals based on realistic build values.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Financing often results in monthly payments lower than local rent, especially for ADUs with grant support. This makes steel construction accessible for families, retirees, and income property owners.
            </p>
          </section>

          <Separator className="my-12" />

          {/* Summary */}
          <section className="space-y-6 mb-12">
            <h2 className="text-3xl mb-6">Summary</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Steel construction has clear cost advantages, even though exact pricing varies from project to project. Most of your build cost is identical regardless of material. The difference lies in framing speed, labour, accuracy, predictability, and long term maintenance. When you factor in all of the cost drivers including GC savings, reduced labour needs, faster timelines, and the efficiencies shown by Framecad it becomes obvious why cold form steel consistently outperforms traditional wood construction on value.
            </p>

            <div className="bg-accent/10 p-8 rounded-lg space-y-3 mb-6">
              <p className="text-lg mb-0">It is faster.</p>
              <p className="text-lg mb-0">It is stronger.</p>
              <p className="text-lg mb-0">It is more predictable.</p>
              <p className="text-lg mb-0">And in most real world cases, it is significantly more cost effective.</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              If you want a build that is transparent, engineered, and delivered with precision, steel is the path forward.
            </p>
          </section>
        </div>

        {/* Author Bio */}
        <div className="mt-16 pt-12 border-t">
          <section className="bg-muted p-8 rounded-lg">
            <div className="flex items-start gap-6 mb-6">
              <ImageWithFallback 
                src={johnMontgomeryPhoto}
                alt="John Montgomery"
                className="w-32 h-32 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Author</p>
                <h3 className="text-2xl mb-2">John Montgomery</h3>
                <p className="text-muted-foreground">Owner of Cold Form Steel Canada, SteelBuilt Corp and Barndo Canada</p>
              </div>
            </div>
            <div className="text-muted-foreground leading-relaxed">
              <p>
                John Montgomery is a Canadian builder with decades of experience in steel construction, modular housing, and commercial fabrication. He leads the SteelBuilt Group and works directly with engineers, municipalities, and homeowners on projects across the country. His focus is simple: provide honest answers, Canadian made materials, and high quality steel homes that are fast to build and affordable to&nbsp;own.
              </p>
            </div>
          </section>
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-12 border-t">
          <h3 className="text-2xl mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <Badge className="bg-primary text-white mb-3">Cost & Financing</Badge>
              <h4 className="mb-2">How Much Does a Steel Home Cost in 2025?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Complete breakdown of shell, turnkey, and hidden costs
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                7 min read
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <Badge className="bg-primary text-white mb-3">Factory Tour</Badge>
              <h4 className="mb-2">Inside the Factory: Why Cold Form Steel Homes Go Up in Days, Not Months</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Factory tour showing precision engineering and rapid assembly
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                8 min read
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-12 border-t">
          <Card className="p-8 bg-accent text-white">
            <div className="text-center">
              <h3 className="text-2xl mb-4">Ready to Learn More About Steel Construction Costs?</h3>
              <p className="text-lg mb-6 text-white/90">
                Get a detailed price estimate for your project within 24 hours. No pressure, just transparent information.
              </p>
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-white text-accent hover:bg-white/90"
              >
                Get Price Estimate
              </Button>
            </div>
          </Card>
        </div>
      </article>
    </div>
  );
}