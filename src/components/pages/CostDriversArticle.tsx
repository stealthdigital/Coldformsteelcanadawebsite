import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, DollarSign, TrendingUp, TrendingDown, Award, Zap, Home, Hammer, Factory, Shield, Ruler, XCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArticleSchema } from '../schema/ArticleSchema';
import { HeadMeta } from '../HeadMeta';
import johnMontgomeryPhoto from 'figma:asset/f7589f12c4db2294f1600532a47c3b3c990ffc90.png';

interface CostDriversArticleProps {
  onNavigate: (page: string) => void;
}

export function CostDriversArticle({ onNavigate }: CostDriversArticleProps) {
  const headerImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/main/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';

  return (
    <div className="min-h-screen bg-white pt-16">
      <HeadMeta 
        title="Steel Home Construction Costs Breakdown | Cold Form Steel Canada"
        description="Understand what drives construction costs for cold-form steel homes. Compare material costs, labor savings, speed benefits, and total project costs."
        image={headerImage}
      />
      <ArticleSchema
        headline="What Drives the Cost of Your Build?"
        description="Understanding the key factors that determine the cost of building with cold-form steel construction."
        author={{ name: 'John Montgomery', jobTitle: 'Owner, SteelBuilt Group of Companies' }}
        datePublished="2026-01-14"
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
          <Badge className="bg-primary text-white mb-4 border-0">
            Cost & Financing
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6 font-bold">
            What Drives the Cost of Your Build?
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            When people reach out to us, the first thing they want to know is simple: &ldquo;How much does it cost to build with steel?&rdquo;
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>January 2026</span>
            </div>
            <Button variant="ghost" size="sm" className="ml-auto gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <div className="space-y-10">
          <section className="space-y-6">
            <p className="text-lg text-primary font-bold">
              By John Montgomery, SteelBuilt Group of Companies
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              It is a fair question. Most builders avoid answering it. They hide pricing, force consultations, or make you wait weeks for quotes that never arrive. I prefer to explain exactly what drives cost so you can make an informed decision without pressure.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              And although the exact construction price varies depending on the job, climate, site conditions, finishes, and mechanical choices, the same core principles apply to every build.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg font-bold">
              This is the truth about where your money actually goes.
            </p>
          </section>

          <Separator />

          {/* COST BREAKDOWN INFOGRAPHIC */}
          <section className="my-16 bg-gradient-to-br from-muted/40 to-muted/20 p-10 rounded-3xl border-2 border-primary/10 shadow-2xl">
            <div className="text-center mb-12">
              <Badge className="bg-terracotta text-white mb-4 text-base px-6 py-2 border-0 shadow-md uppercase tracking-widest font-bold">Cost Breakdown Infographic</Badge>
              <h2 className="text-4xl md:text-5xl mb-4 font-bold">Where Your Money Goes: Steel vs Wood</h2>
              <p className="text-xl text-muted-foreground">Understanding the true cost drivers of your build</p>
            </div>

            {/* 90% Identical Costs */}
            <Card className="bg-white rounded-2xl p-10 mb-8 shadow-2xl border-0">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">90% of Costs Are Identical</h3>
                <p className="text-lg text-muted-foreground">Regardless of wood or steel framing</p>
              </div>
              
              <div className="mb-8">
                <div className="h-16 md:h-20 bg-muted rounded-2xl overflow-hidden flex shadow-inner">
                  <div className="w-[90%] bg-primary flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base px-2 sm:px-4 md:px-6 text-center leading-tight">
                    Same Costs: Windows, Doors, Roofing, Foundation, Plumbing, Electrical, Finishes
                  </div>
                  <div className="w-[10%] bg-terracotta flex items-center justify-center text-white font-bold flex-col">
                    <span className="text-xl md:text-3xl">10%</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6 text-xs sm:text-sm font-bold uppercase tracking-wider px-2">
                  <span className="text-primary text-center sm:text-left">All standard building components</span>
                  <span className="text-terracotta text-center sm:text-right">Only framing differs</span>
                </div>
              </div>
            </Card>

            {/* Steel vs Wood Comparison */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-8 bg-primary text-white shadow-2xl border-0 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 p-4 rounded-xl">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Cold-Form Steel</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 p-6 rounded-xl border-2 border-white/20">
                    <div className="flex items-baseline gap-2 mb-2">
                      <div className="text-5xl font-bold">4-5</div>
                      <div className="text-xl font-bold opacity-90">days to frame</div>
                    </div>
                  </div>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Factory precision</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>No weather delays</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Minimal site labour</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8 bg-muted/50 shadow-2xl border-2 border-border rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-xl">
                    <Hammer className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Traditional Wood</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl border-2 border-border">
                    <div className="flex items-baseline gap-2 mb-2">
                      <div className="text-5xl font-bold text-muted-foreground">2-4</div>
                      <div className="text-xl font-bold text-muted-foreground">weeks to frame</div>
                    </div>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 flex-shrink-0 text-destructive" />
                      <span>Weather dependent</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 flex-shrink-0 text-destructive" />
                      <span>Scarce skilled labour</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 flex-shrink-0 text-destructive" />
                      <span>Material inconsistency</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Real Project Savings */}
            <Card className="p-10 bg-white shadow-2xl border-0 rounded-2xl mb-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-terracotta/10 rounded-full mb-4">
                  <TrendingDown className="w-8 h-8 text-terracotta" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Real Project Savings</h3>
                <p className="text-muted-foreground">Completed projects across Ontario</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-sage/5 p-6 rounded-xl border-l-4 border-sage">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-sage mb-3">Caledon Project</h4>
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-muted-foreground">Wood:</span>
                      <span className="text-xl font-bold text-muted-foreground line-through">$3,000,000+</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-primary">Steel:</span>
                      <span className="text-2xl font-bold text-primary">$400,000</span>
                    </div>
                    <div className="text-3xl font-bold text-sage mt-4">87% savings</div>
                  </div>
                </div>
                <div className="bg-sage/5 p-6 rounded-xl border-l-4 border-sage">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-sage mb-3">Fort Erie Project</h4>
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-muted-foreground">Wood:</span>
                      <span className="text-xl font-bold text-muted-foreground line-through">$800,000</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-primary">Steel:</span>
                      <span className="text-2xl font-bold text-primary">$240,000</span>
                    </div>
                    <div className="text-3xl font-bold text-sage mt-4">70% savings</div>
                  </div>
                </div>
                <div className="bg-sage/5 p-6 rounded-xl border-l-4 border-sage">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-sage mb-3">Typical ADU</h4>
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-muted-foreground">Modular:</span>
                      <span className="text-xl font-bold text-muted-foreground line-through">$300,000+</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-primary">Steel:</span>
                      <span className="text-2xl font-bold text-primary">$160,000</span>
                    </div>
                    <div className="text-3xl font-bold text-sage mt-4">47% savings</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Save GC Markup */}
            <Card className="p-8 bg-gradient-to-br from-terracotta to-terracotta/80 text-white shadow-2xl border-0 rounded-2xl mb-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/20 p-4 rounded-xl">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Save GC Markup</h3>
                  <div className="text-4xl font-bold mb-4">10-30%</div>
                  <p className="text-white/90 text-lg mb-2">typical GC fees</p>
                  <p className="text-white/80 leading-relaxed">
                    Our Owner Builder option lets you avoid contractor markups and claim HST back
                  </p>
                </div>
              </div>
            </Card>

            {/* Two Pricing Options */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 bg-white shadow-xl border-2 border-primary rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Shell Package</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Structure, windows, doors, roof
                </p>
              </Card>

              <Card className="p-8 bg-white shadow-xl border-2 border-terracotta rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-terracotta/10 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-terracotta" />
                  </div>
                  <h3 className="text-2xl font-bold">Turnkey Package</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Complete move-in ready home
                </p>
              </Card>
            </div>

            {/* Why Steel Wins */}
            <Card className="p-10 bg-primary text-white shadow-2xl border-0 rounded-2xl mt-8">
              <h3 className="text-3xl font-bold mb-8 text-center">Why Steel Wins on Cost</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-xl mb-4 mx-auto w-fit">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold text-lg mb-2">Faster</div>
                  <div className="text-white/80 text-sm">4-5 day framing</div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-xl mb-4 mx-auto w-fit">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold text-lg mb-2">Stronger</div>
                  <div className="text-white/80 text-sm">Factory precision</div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-xl mb-4 mx-auto w-fit">
                    <Ruler className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold text-lg mb-2">Predictable</div>
                  <div className="text-white/80 text-sm">No surprises</div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-xl mb-4 mx-auto w-fit">
                    <TrendingDown className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-bold text-lg mb-2">Cost Effective</div>
                  <div className="text-white/80 text-sm">47-87% savings</div>
                </div>
              </div>
            </Card>
          </section>

          <Separator />

          {/* Section 1: Most Build Costs Are the Same */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-4 rounded-xl">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Most of Your Build Costs Are the Same Whether You Choose Wood or Steel</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    This is the part most people do not realize. About 90 percent of the cost of building a home has nothing to do with whether the frame is wood or steel.
                  </p>
                  <p className="font-bold text-foreground">You will spend the same amount on:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                      <span>Windows and doors</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                      <span>Roofing and exterior cladding</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                      <span>Concrete pad or foundation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                      <span>Plumbing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                      <span>Electrical</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                      <span>Appliances</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                      <span>Flooring</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                      <span>Kitchen cabinetry and fixtures</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0" />
                      <span>Interior finishes</span>
                    </li>
                  </ul>
                  <p className="pt-4">
                    All of these costs are identical regardless of the framing material.
                  </p>
                  <Card className="bg-sage/5 p-6 border-l-8 border-sage rounded-xl">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">This is why comparing wood vs steel strictly by price per square foot is misleading.</strong> The real difference is only in two areas:
                    </p>
                    <ol className="list-decimal ml-6 mt-4 space-y-2">
                      <li>The framing material</li>
                      <li>The labour and timeline required to install that framing</li>
                    </ol>
                    <p className="mt-4 text-foreground font-bold">
                      That is where steel creates major advantages.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 2: Real Cost Difference */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Zap className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">The Real Cost Difference Comes From Speed, Labour, and Predictability</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Cold form steel framing arrives as a precise, pre-engineered kit. Panels are built indoors in a warm, dry factory using Framecad technology. Every stud is pre cut. Every opening is pre engineered. Every screw location is pre dimpled.
                  </p>
                  <p>
                    This eliminates costly delays and dramatically reduces labour hours.
                  </p>
                  <Card className="bg-primary text-white p-8 rounded-xl shadow-xl border-0">
                    <h3 className="text-2xl font-bold mb-6">What this means for you</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                        <span className="text-lg">Framing typically completed in 4 to 5 days</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                        <span className="text-lg">Minimal site labour required</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                        <span className="text-lg">No weather delays</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                        <span className="text-lg">No warped lumber</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                        <span className="text-lg">No rework or measurement errors</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                        <span className="text-lg">No waiting on scarce framing crews</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                        <span className="text-lg">No unpredictable lumber market swings</span>
                      </li>
                    </ul>
                  </Card>
                  <p className="pt-4 font-bold text-foreground text-xl">
                    Faster framing means earlier finishing, earlier occupancy, and far fewer surprises.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 3: Real World Examples */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-sage/10 p-4 rounded-xl">
                <TrendingDown className="w-8 h-8 text-sage" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Real World Examples of Steel Cost Advantages</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Across Ontario we have seen the same pattern again and again.
                  </p>

                  <Card className="bg-white p-8 rounded-xl shadow-xl border-2 border-sage">
                    <h3 className="text-2xl font-bold mb-4 text-sage">Caledon Project</h3>
                    <p className="text-lg">
                      A design that would cost more than <span className="font-bold text-foreground">3 million dollars</span> in traditional wood construction was built in steel for roughly <span className="font-bold text-primary text-2xl">400,000 dollars</span> including about 90,000 dollars in windows.
                    </p>
                  </Card>

                  <Card className="bg-white p-8 rounded-xl shadow-xl border-2 border-sage">
                    <h3 className="text-2xl font-bold mb-4 text-sage">Fort Erie Project</h3>
                    <p className="text-lg">
                      Comparable wood framing quotes were around <span className="font-bold text-foreground">800,000 dollars</span>.
                    </p>
                    <p className="text-lg mt-2">
                      Our steel version came in at <span className="font-bold text-primary text-2xl">240,000 dollars</span>.
                    </p>
                  </Card>

                  <Card className="bg-white p-8 rounded-xl shadow-xl border-2 border-sage">
                    <h3 className="text-2xl font-bold mb-4 text-sage">ADUs and Tiny Homes</h3>
                    <p className="text-lg">
                      Competitors sell modular ADUs for <span className="font-bold text-foreground">300,000 dollars</span> or more.
                    </p>
                    <p className="text-lg mt-2">
                      We deliver similar units for around <span className="font-bold text-primary text-2xl">160,000 dollars</span>.
                    </p>
                    <p className="text-lg mt-4">
                      In many grant eligible cases, homeowners end up financing only about <span className="font-bold text-sage text-xl">40,000 dollars</span> after incentives.
                    </p>
                  </Card>

                  <Card className="bg-primary/5 p-6 border-l-8 border-primary rounded-xl">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">These are completed jobs, not estimates.</strong> This is what happens when construction is engineered and delivered with precision.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 4: Factory Built Construction */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-4 rounded-xl">
                <Factory className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Why Factory Built Construction Matters</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Building inside a controlled environment eliminates all the hidden costs that show up on job sites:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                      <span className="line-through">Weather delays</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                      <span className="line-through">Moisture damaged materials</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                      <span className="line-through">Warped or twisted lumber</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                      <span className="line-through">Inconsistent quality</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                      <span className="line-through">Cost overruns caused by rework</span>
                    </li>
                  </ul>
                  <Card className="bg-sage/5 p-6 border-l-8 border-sage rounded-xl">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">Steel panels come off the line square, straight, and ready to install.</strong>
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                      Countertops, cabinetry, and interior layouts fit exactly because the structural dimensions are exact. This is something wood framing cannot guarantee.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 5: Saving on GC Markups */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <DollarSign className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Saving on General Contractor Markups</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    A general contractor normally charges <span className="font-bold text-foreground">10 to 30 percent</span> on the entire project.
                  </p>
                  <Card className="bg-gradient-to-br from-terracotta/10 to-terracotta/5 p-8 rounded-xl border-2 border-terracotta/30">
                    <h3 className="text-2xl font-bold mb-6 text-foreground">Our process allows many clients to apply as Owner Builders, which means:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">You save that GC markup</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">You can claim your HST back</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">You gain more control over finish selections</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">You avoid unnecessary middle layers of cost and communication</span>
                      </li>
                    </ul>
                  </Card>
                  <p className="pt-4">
                    We provide stamped engineering, structural plans, and a clear path so you understand the entire build sequence from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 6: Additional Savings by Framecad */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-4 rounded-xl">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Additional Savings Identified by Framecad</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Framecad highlights a number of cost saving factors that most people never consider.
                  </p>

                  <Card className="bg-white p-8 rounded-xl shadow-xl border-2 border-primary">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Material Efficiency</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                        <span>Stronger material means fewer studs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                        <span>Lighter weight reduces foundation load</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                        <span>No shrinkage or settlement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                        <span>No rot, mold, or termite risk</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="bg-white p-8 rounded-xl shadow-xl border-2 border-terracotta">
                    <h3 className="text-2xl font-bold mb-4 text-terracotta">Labour and Equipment</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                        <span>Reduced scaffolding</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                        <span>Less on site cutting and waste</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                        <span>Smaller crews required</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                        <span>Shorter supervision and project management hours</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="bg-white p-8 rounded-xl shadow-xl border-2 border-sage">
                    <h3 className="text-2xl font-bold mb-4 text-sage">Long Term Savings</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                        <span>Better fire resistance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                        <span>Lower maintenance over the life of the building</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                        <span>Reduced insurance costs, especially commercial</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                        <span>Improved thermal performance with steel insulated assemblies</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="bg-primary/5 p-6 border-l-8 border-primary rounded-xl">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">Cold form steel saves money during construction and continues to save money every year that you own the building.</strong>
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 7: Shell and Turnkey Pricing */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-sage/10 p-4 rounded-xl">
                <Home className="w-8 h-8 text-sage" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Shell Pricing and Turnkey Pricing</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    For many of our models we offer two clear options.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-white p-8 rounded-xl shadow-2xl border-2 border-primary">
                      <h3 className="text-2xl font-bold mb-6 text-primary">Shell Only</h3>
                      <p className="mb-4 font-bold text-foreground">Includes:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span>Complete steel structure</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span>Exterior sheathing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span>Windows and doors</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span>Roof and cladding packages</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span>Interior framing matched to floor plans</span>
                        </li>
                      </ul>
                    </Card>

                    <Card className="bg-gradient-to-br from-terracotta to-terracotta/80 text-white p-8 rounded-xl shadow-2xl border-0">
                      <h3 className="text-2xl font-bold mb-6">Turnkey</h3>
                      <p className="mb-4 font-bold">Includes everything in the Shell plus:</p>
                      <ul className="space-y-3 text-white/90">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                          <span>Electrical</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                          <span>Plumbing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                          <span>Insulation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                          <span>Interior finishes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                          <span>Flooring</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                          <span>Kitchen and bathroom</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                          <span>Lighting</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                          <span>Fixtures</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                          <span>Trim</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                          <span>Full interior completion</span>
                        </li>
                      </ul>
                    </Card>
                  </div>

                  <Card className="bg-sage/5 p-6 border-l-8 border-sage rounded-xl">
                    <p className="text-lg leading-relaxed">
                      We publish detailed lists for each turnkey model so you know exactly what is included. The only variable not included is mechanical systems because heating sources differ across regions. These are always quoted individually and transparently.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 8: Monthly Payments */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Calendar className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Monthly Payments Instead of Large Lump Sums</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Most homeowners think in terms of monthly affordability, not total project value.
                  </p>
                  <p>
                    We work with lending partners who understand steel construction and can provide fast approvals based on realistic build values.
                  </p>
                  <Card className="bg-primary/5 p-6 border-l-8 border-primary rounded-xl">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">Financing often results in monthly payments lower than local rent,</strong> especially for ADUs with grant support. This makes steel construction accessible for families, retirees, and income property owners.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Summary */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-sage/10 p-4 rounded-xl">
                <Award className="w-8 h-8 text-sage" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Summary</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Steel construction has clear cost advantages, even though exact pricing varies from project to project. Most of your build cost is identical regardless of material. The difference lies in framing speed, labour, accuracy, predictability, and long term maintenance.
                  </p>
                  <p>
                    When you factor in all of the cost drivers including GC savings, reduced labour needs, faster timelines, and the efficiencies shown by Framecad it becomes obvious why cold form steel consistently outperforms traditional wood construction on value.
                  </p>
                  <Card className="bg-gradient-to-br from-primary to-primary/80 text-white p-10 rounded-2xl shadow-2xl border-0">
                    <ul className="space-y-4 text-xl">
                      <li className="flex items-center gap-4">
                        <Zap className="w-8 h-8 flex-shrink-0" />
                        <span className="font-bold">It is faster.</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <Shield className="w-8 h-8 flex-shrink-0" />
                        <span className="font-bold">It is stronger.</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <Ruler className="w-8 h-8 flex-shrink-0" />
                        <span className="font-bold">It is more predictable.</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <TrendingDown className="w-8 h-8 flex-shrink-0" />
                        <span className="font-bold">And in most real world cases, it is significantly more cost effective.</span>
                      </li>
                    </ul>
                  </Card>
                  <p className="pt-4 text-xl font-bold text-foreground">
                    If you want a build that is transparent, engineered, and delivered with precision, steel is the path forward.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Author Bio */}
          <section className="bg-muted p-8 rounded-xl">
            <div className="flex items-start gap-6 mb-6">
              <ImageWithFallback 
                src={johnMontgomeryPhoto}
                alt="John Montgomery"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="flex-1">
                <p className="text-sm text-primary font-bold mb-1">Author</p>
                <h3 className="text-2xl mb-2 font-bold">John Montgomery</h3>
                <p className="text-muted-foreground font-medium text-lg">Owner of Cold Form Steel Canada, SteelBuilt Corp and Barndo Canada</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              John Montgomery is a Canadian builder with decades of experience in steel construction, modular housing, and commercial fabrication. He leads the SteelBuilt Group and works directly with engineers, municipalities, and homeowners on projects across the country. His focus is simple: provide honest answers, Canadian made materials, and high quality steel homes that are fast to build and affordable to own.
            </p>
          </section>

          {/* CTA */}
          <Card className="p-10 bg-primary text-white text-center rounded-2xl shadow-xl">
            <h3 className="text-3xl mb-4 font-bold">Ready for a Real Quote?</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Get an accurate breakdown for your specific project and see how much you can save with cold form steel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => onNavigate('contact')}
                className="font-bold h-14 px-10 text-lg shadow-lg"
              >
                Request My Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('models')}
                className="font-bold h-14 px-10 text-lg bg-white text-primary hover:bg-white/90 border-0"
              >
                View Our Models
              </Button>
            </div>
          </Card>
        </div>
      </article>
    </div>
  );
}