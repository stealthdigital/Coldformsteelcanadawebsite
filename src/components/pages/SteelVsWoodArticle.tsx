import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { ArrowLeft, Clock, CheckCircle2, XCircle, DollarSign, Calendar, Zap, Shield, Home, TrendingUp, Ruler, CloudSun, Award, Volume2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArticleSchema } from '../schema/ArticleSchema';
import { HeadMeta } from '../HeadMeta';
import steelFrameImage from 'figma:asset/72fa0d47ef13aed1d663ccbb6c6149c415652f77.png';
import johnMontgomeryPhoto from 'figma:asset/f7589f12c4db2294f1600532a47c3b3c990ffc90.png';

interface SteelVsWoodArticleProps {
  onNavigate: (page: string) => void;
}

export function SteelVsWoodArticle({ onNavigate }: SteelVsWoodArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="Steel vs Wood Framing | Cold-Form Steel Benefits | Cold Form Steel Canada"
        description="Compare cold-form steel vs wood framing for homes. Discover why steel is 75% faster to build, 100% fireproof, lasts 100+ years, and has stable pricing. Complete technical comparison for Canadian homeowners."
        image="https://via.placeholder.com/1200x630/665f55/ffffff?text=Steel+vs+Wood"
      />
      <ArticleSchema
        headline="Steel vs. Wood: Full Breakdown"
        description="An honest, comprehensive comparison of costs, durability, and performance to help you make the right choice for your build."
        author={{ name: 'John Montgomery', jobTitle: 'President, Cold Form Steel Canada' }}
        datePublished="2025-12-01"
        dateModified="2025-12-14"
        category="Comparisons"
        keywords={['steel vs wood', 'cold form steel', 'wood framing', 'construction comparison', 'building materials', 'home construction']}
      />
      {/* Header Navigation */}
      <div className="bg-muted border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('learning')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Learning Center
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[400px] bg-muted relative">
        <img 
          src={steelFrameImage}
          alt="Steel frame construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <div className="mb-8">
          <Badge className="bg-primary text-white mb-4">Comparisons</Badge>
          <h1 className="text-4xl md:text-5xl mb-4">
            Steel vs. Wood: Full Breakdown
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            An honest, comprehensive comparison of costs, durability, and performance to help you make the right choice for your build.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min read</span>
            </div>
            <span>•</span>
            <span>Updated December 2025</span>
          </div>
        </div>

        {/* Quick Summary */}
        <Card className="p-6 mb-12 bg-muted border-l-4 border-accent">
          <h2 className="text-2xl mb-4">Quick Summary</h2>
          <p className="text-muted-foreground mb-4">
            <strong>Steel wins for most modern Canadian builds.</strong> While cold-form steel costs 10-15% more upfront than wood, it builds <strong>75% faster</strong> (framed in 4-5 days vs. 2-3 weeks), won't rot or warp, eliminates weather delays, and delivers massive long-term savings through lower insurance, zero maintenance for pests or moisture damage, and faster project completion.
          </p>
          <p className="text-muted-foreground mb-4">
            <strong>The upfront premium is offset by speed and durability.</strong> Shorter construction timelines slash carrying costs, factory precision eliminates waste and callbacks, and steel's dimensional stability means no warped studs or settling issues. Add in 10-15% lower insurance premiums and decades without rot repairs, and steel often costs less over the building's lifetime.
          </p>
          <p className="text-muted-foreground mb-4">
            <strong>Wood only makes sense in limited cases:</strong> extremely tight budgets with zero flexibility, reliable framing crews locked in at low rates, no time pressure, and traditional residential neighborhoods where wood is standard.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Pricing ranges based on typical Ontario and Western Canada conditions in 2024-2025. For ADUs, rental properties, or any project where speed and durability matter, steel is the smart choice.
          </p>
        </Card>

        {/* Introduction */}
        <section className="prose max-w-none mb-12">
          <p className="text-lg mb-6">
            If you're planning a home or ADU in Canada, you've likely faced this question: <strong>Should I build with cold-form steel or traditional wood framing?</strong>
          </p>
          <p className="text-lg mb-6">
            The truth is, there's no universal "best" material. But there are real, measurable differences in cost, speed, durability, and long-term performance that can dramatically impact your project.
          </p>
          <p className="text-lg mb-6">
            This guide breaks down everything you need to know—with real numbers from Canadian builds, honest pros and cons, and practical advice to help you decide.
          </p>
        </section>

        {/* Cost Comparison */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl">Cost Comparison: The Real Numbers</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 border-2 border-[#8b9d83]">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-[#8b9d83]" />
                <h3 className="text-2xl">Cold-Form Steel</h3>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Material Cost:</span>
                  <span className="font-semibold">$18-22/sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Labor (assembly):</span>
                  <span className="font-semibold">$8-12/sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Shell Cost:</span>
                  <span className="font-semibold">$26-34/sq ft</span>
                </div>
              </div>
              <div className="bg-[#8b9d83]/10 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Example:</strong> 2,000 sq ft home = $52,000 - $68,000 for framed shell
                </p>
              </div>
            </Card>

            <Card className="p-6 border-2 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-8 h-8 text-primary" />
                <h3 className="text-2xl">Wood Framing</h3>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Material Cost:</span>
                  <span className="font-semibold">$12-16/sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Labor (framing):</span>
                  <span className="font-semibold">$10-15/sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Shell Cost:</span>
                  <span className="font-semibold">$22-31/sq ft</span>
                </div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Example:</strong> 2,000 sq ft home = $44,000 - $62,000 for framed shell
                </p>
              </div>
            </Card>
          </div>

          <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-lg mb-6">
            <p className="text-sm">
              <strong>Note:</strong> Actual costs vary by province and lumber market fluctuations. Steel pricing is more stable and typically locked in at the time of order.
            </p>
          </div>

          <div className="bg-muted p-6 rounded-lg mb-6">
            <h3 className="text-xl mb-4">The Real Cost Story</h3>
            <p className="text-muted-foreground mb-4">
              At first glance, wood appears 10-15% cheaper. But that's only part of the picture:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                <span><strong>Steel saves 2-3 weeks of labor costs</strong> — Frame goes up in 4-5 days vs 2-3 weeks for wood, reducing carrying costs, site supervision, and weather delays.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                <span><strong>Price predictability</strong> — Steel prices are locked in at order. Wood lumber prices can swing 20-30% during your build.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                <span><strong>Lower insurance premiums</strong> — Many insurers offer 10-15% discounts for non-combustible steel framing.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                <span><strong>Minimal maintenance</strong> — No rot, no termites, no warping means lower lifetime costs.</span>
              </li>
            </ul>
          </div>

          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
            <p className="text-sm">
              <strong>Real Project Example:</strong> A 2,000 sq ft home in Ontario cost $6,000 more for steel vs wood framing, but saved $7,000 in labor costs (faster build) and $3,000 in carrying costs (interest on construction loan). Net savings: <strong>$4,000</strong>
            </p>
          </div>
        </section>

        {/* Indirect Cost Savings */}
        <section className="mb-12">
          <h2 className="text-3xl mb-6">Beyond Material Costs: The Hidden Savings</h2>
          
          <p className="text-lg mb-6">
            When comparing steel to wood, most people focus solely on the framing material and labor costs. But that's only part of the financial picture. Cold-formed steel delivers significant <strong>indirect cost savings</strong> across your entire project—savings that often aren't apparent until you dig deeper.
          </p>

          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl mb-4">Where Steel Saves Beyond the Frame</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#8b9d83]" />
                  Lower Insurance Premiums
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Non-combustible steel framing reduces builders risk insurance and can lower homeowner premiums by 10–15%. One developer saved $1.3 million in insurance costs on a 400-unit hotel project by using CFS instead of wood.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#8b9d83]" />
                  Shorter Construction Timelines
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Precision-engineered steel panels arrive ready to install, cutting construction time by 75%. Faster timelines mean you start collecting rent sooner or move in earlier—reducing months of mortgage or carrying costs.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#8b9d83]" />
                  Reduced Scaffolding Needs
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Panelized steel framing can drastically reduce or eliminate expensive scaffolding requirements. Panels are assembled quickly at ground level, cutting rental costs and opening up the site for follow-on trades faster.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83]" />
                  Fewer Warranty Claims
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Steel doesn't warp, twist, or settle. Dimensional stability means fewer callbacks for drywall cracks, misaligned doors, or sagging floors—saving you time and money on warranty work.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#8b9d83]" />
                  No Termite or Rot Costs
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Zero risk of dry rot or termite damage eliminates the need for costly chemical treatments, annual inspections, or structural repairs down the road.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-sage" />
                  Lower Financing Costs
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Because steel builds finish faster, construction loans are paid off sooner—saving hundreds or thousands in interest charges depending on project size.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#8b9d83]" />
                  Site Security Savings
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Non-combustible CFS has low fire risk, which can eliminate the need for 24-hour fire watch security on some sites—a significant cost savings in high-density areas.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83]" />
                  Reduced Sprinkler Requirements
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  In some building types, fire-resistant steel framing can reduce or eliminate the need for costly sprinkler systems that wood-framed buildings would require.
                </p>
              </div>
            </div>
          </div>

          {/* Infographic */}
          <div className="bg-white p-6 rounded-lg border-2 border-muted mb-6">
            <div className="mb-4">
              <h3 className="text-xl mb-2">The Complete Savings Picture</h3>
              <p className="text-sm text-muted-foreground">
                This infographic from <strong>BuildSteel.org</strong> and <strong>FRAMECAD</strong> shows all the direct and indirect cost savings when using cold-formed steel construction. Framing only accounts for about 20% of total construction costs—so choosing a material that creates savings across the entire project makes economic sense.
              </p>
            </div>
            <img 
              src="https://buildsteel.org/wp-content/uploads/2018/05/BuildSteeel_Interactive_Static_v4-1.jpg"
              alt="Spot the Savings With Cold-Formed Steel Framing infographic showing cost savings areas including site security, scaffolding, dry rot prevention, construction timelines, callbacks, insurance, sprinklers, termite protection, carpentry hours, and financing"
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-xs text-muted-foreground mt-4 italic">
              Credit: BuildSteel.org and FRAMECAD
            </p>
          </div>

          <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-lg">
            <p className="mb-3">
              <strong>The takeaway:</strong> When you account for reduced insurance, faster timelines, eliminated scaffolding, lower financing costs, and zero maintenance for rot or pests, cold-formed steel's 10-15% material premium is often completely offset—or even turns into a net savings—over the course of your project.
            </p>
            <p className="text-sm text-muted-foreground">
              It's not just about the cost per square foot of framing. It's about the total cost of getting your building completed, occupied, and performing reliably for decades.
            </p>
          </div>
        </section>

        {/* Owner/Builder Financial Benefits */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl">Owner/Builder Financial Benefits</h2>
          </div>

          <p className="text-lg mb-6">
            Beyond the inherent advantages of steel construction, Cold Form Steel Canada provides additional financial benefits unique to our approach—advantages that can dramatically reduce your project costs.
          </p>

          <div className="grid md:grid-cols-1 gap-6 mb-6">
            <Card className="p-6 bg-sage/5 border-l-4 border-sage">
              <div className="flex items-start gap-4">
                <DollarSign className="w-8 h-8 text-sage flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl mb-3">No General Contractor Markup (Save 10–30%)</h3>
                  <p className="text-muted-foreground mb-3">
                    Cold Form Steel Canada provides engineered drawings and support so homeowners can file as an <strong>Owner/Builder</strong>. This removes the need for a general contractor to oversee the framing stage.
                  </p>
                  <p className="text-muted-foreground">
                    Most GCs add 10–30 percent markup on labour, materials, and project management. Skipping this markup can lower the overall project cost significantly—potentially saving <strong>$15,000–$50,000</strong> on a typical residential build.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-accent/5 border-l-4 border-accent">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl mb-3">Ability to Reclaim HST</h3>
                  <p className="text-muted-foreground mb-3">
                    Owner/Builders in Canada can apply to <strong>reclaim HST on new residential construction</strong>. This can return thousands of dollars after completion, reducing the true cost of the ADU or home more than most people realize.
                  </p>
                  <p className="text-muted-foreground">
                    For example, on a $200,000 build in Ontario, you could reclaim up to <strong>$24,000 in HST</strong>—money that goes directly back into your pocket after occupancy.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-[#8b9d83]/5 border-l-4 border-[#8b9d83]">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-[#8b9d83] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl mb-3">Lower Chance of Change Orders</h3>
                  <p className="text-muted-foreground">
                    Panelized steel walls arrive <strong>pre-engineered and factory-built</strong>, reducing human error and avoiding the expensive rework common in wood framing. Fewer mistakes mean fewer costly change orders and schedule delays.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl mb-3">Combined Savings Example</h3>
            <p className="text-muted-foreground mb-4">
              On a 1,500 sq ft home build in British Columbia:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-semibold min-w-[200px]">No GC markup (20%):</span>
                <span>$30,000 saved</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-[200px]">HST reclaim:</span>
                <span>$18,000 returned</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-[200px]">Avoided change orders:</span>
                <span>$4,000 saved</span>
              </li>
              <li className="flex gap-3 pt-3 border-t border-muted-foreground/20">
                <span className="font-semibold min-w-[200px]">Total benefit:</span>
                <span className="text-[#8b9d83] font-semibold text-lg">$52,000</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Speed Comparison */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl">Construction Speed: Where Steel Dominates</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-[#8b9d83]/5 border-2 border-[#8b9d83]">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-[#8b9d83]" />
                <h3 className="text-xl">Steel Frame Timeline</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Factory fabrication</span>
                    <span className="font-semibold">7-10 days</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-[#8b9d83]" style={{ width: '40%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Onsite assembly</span>
                    <span className="font-semibold text-[#8b9d83]">4-5 days</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-[#8b9d83]" style={{ width: '20%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Total framing time</span>
                    <span className="font-semibold text-[#8b9d83]">11-15 days</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-[#8b9d83]" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-muted border-2 border-gray-300">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-xl">Wood Frame Timeline</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Material delivery</span>
                    <span className="font-semibold">3-5 days</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '15%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Onsite framing</span>
                    <span className="font-semibold">14-21 days</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Total framing time</span>
                    <span className="font-semibold">17-26 days</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-muted p-6 rounded-lg mb-6">
            <h3 className="text-xl mb-4">Why Speed Matters</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                <span><strong>Less weather exposure</strong> — 4-5 days means less risk of rain damage, frozen ground delays, or summer heat affecting workers.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                <span><strong>Lower carrying costs</strong> — Shorter construction loans save interest. A $200K loan at 7% APR costs $38/day in interest.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                <span><strong>Faster occupancy</strong> — For rental properties or ADUs, every week saved is rental income gained.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                <span><strong>Reduced site disruption</strong> — Neighbors and municipalities appreciate shorter construction timelines.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Durability & Performance */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl">Durability & Long-Term Performance</h2>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-4 border">Factor</th>
                  <th className="text-left p-4 border">Cold-Form Steel</th>
                  <th className="text-left p-4 border">Wood Framing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border font-semibold">Moisture Resistance</td>
                  <td className="p-4 border">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                      <span>Highly corrosion-resistant due to galvanized coating. Engineered for decades of protection. No mold or rot risk.</span>
                    </div>
                  </td>
                  <td className="p-4 border">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Susceptible to rot, mold, and decay if exposed to moisture. Requires careful sealing.</span>
                    </div>
                  </td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="p-4 border font-semibold">Pest Resistance</td>
                  <td className="p-4 border">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                      <span>Immune to termites, carpenter ants, and wood-boring insects.</span>
                    </div>
                  </td>
                  <td className="p-4 border">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Vulnerable to termites and carpenter ants. Requires chemical treatment in some regions.</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border font-semibold">Fire Resistance</td>
                  <td className="p-4 border">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                      <span>Non-combustible. Meets highest fire ratings. Can reduce insurance costs 10-15%.</span>
                    </div>
                  </td>
                  <td className="p-4 border">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Combustible. Requires fire-retardant treatment in some applications.</span>
                    </div>
                  </td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="p-4 border font-semibold">Dimensional Stability</td>
                  <td className="p-4 border">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                      <span>Won't warp, twist, bow, or shrink. Perfect for precision finishes.</span>
                    </div>
                  </td>
                  <td className="p-4 border">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Natural material expands/contracts with humidity. Can cause drywall cracks and door misalignment.</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border font-semibold">Structural Strength</td>
                  <td className="p-4 border">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                      <span>Higher strength-to-weight ratio. Better for wide spans and heavy loads.</span>
                    </div>
                  </td>
                  <td className="p-4 border">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                      <span>Adequate strength for most residential applications. More flexibility in design.</span>
                    </div>
                  </td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="p-4 border font-semibold">Lifespan</td>
                  <td className="p-4 border">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                      <span>50+ years before any significant degradation, with total structural life commonly exceeding 100 years.</span>
                    </div>
                  </td>
                  <td className="p-4 border">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                      <span>40-70 years if properly maintained. Requires regular inspection and treatment.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Precision Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Ruler className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl">Precision: The Hidden Advantage You Can See</h2>
          </div>

          <p className="text-lg mb-8">
            Cold form steel delivers a level of precision that wood cannot match. This is the difference homeowners notice immediately: straighter walls, cleaner lines, tighter finishes, and fewer problems during construction and throughout the life of the home.
          </p>

          <div className="border-t border-b border-muted py-8 mb-8">
            <h3 className="text-2xl mb-6 text-center">Manufacturing Tolerance Comparison</h3>
            <p className="text-center text-muted-foreground mb-8">The precision that makes everything else easier</p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Steel Tolerance */}
              <Card className="p-6 border-2 border-[#8b9d83] bg-[#8b9d83]/5">
                <div className="text-center mb-6">
                  <h4 className="text-xl mb-2">Cold Formed Steel</h4>
                  <p className="text-sm text-muted-foreground">Factory precision manufacturing</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg mb-4">
                  <div className="text-center mb-4">
                    <div className="text-sm text-muted-foreground mb-1">Tolerance</div>
                    <div className="text-2xl">± 1/16"</div>
                    <div className="text-sm text-muted-foreground">(± 1.6 mm)</div>
                  </div>
                  
                  <div className="mb-2 text-center text-sm">Perfect Alignment</div>
                  <div className="relative h-12 bg-muted/30 rounded flex items-center justify-center">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#8b9d83]" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-2 bg-[#8b9d83]/20 rounded" />
                    <div className="text-xs text-muted-foreground">
                      ← 1/16" variation →
                    </div>
                  </div>
                </div>
              </Card>

              {/* Wood Tolerance */}
              <Card className="p-6 border-2 border-primary bg-primary/5">
                <div className="text-center mb-6">
                  <h4 className="text-xl mb-2">Dimensional Lumber</h4>
                  <p className="text-sm text-muted-foreground">Natural material variation</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg mb-4">
                  <div className="text-center mb-4">
                    <div className="text-sm text-muted-foreground mb-1">Tolerance</div>
                    <div className="text-2xl">± 1/4"</div>
                    <div className="text-sm text-muted-foreground">(± 6.4 mm)</div>
                  </div>
                  
                  <div className="mb-2 text-center text-sm">Variable Alignment</div>
                  <div className="relative h-12 bg-muted/30 rounded flex items-center justify-center">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-8 bg-primary/20 rounded" />
                    <div className="text-xs text-muted-foreground">
                      ← 1/4" variation (four times wider) →
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-lg mb-8">
            <h3 className="text-xl mb-4">Four Times More Precise Than Dimensional Lumber</h3>
            <p className="mb-4">This precision results in:</p>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                <span>Perfectly straight walls</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                <span>Cabinetry and countertops that line up correctly</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                <span>No shimming or corrections during drywall</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                <span>Fewer nail pops, cracks, and settling issues</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                <span>Cleaner trim work and tighter finish details</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                <span>Predictable results every time</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-lg">
            <p className="text-center italic">
              In simple terms, steel builds stay true and stay that way permanently.
            </p>

            <p>
              With cold formed steel, every wall panel is engineered before it reaches the job site. Every stud, screw hole, and connection point is exactly where it belongs. There is no time wasted correcting imperfections, dealing with twisted studs, or compensating for lumber that has absorbed moisture.
            </p>

            <div className="bg-muted p-6 rounded-lg text-center">
              <p className="mb-2">Every detail lines up.</p>
              <p className="mb-2">Every finish looks better.</p>
              <p>And the structure maintains that precision for life.</p>
            </div>
          </div>
        </section>

        {/* Energy Efficiency */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl">Energy Efficiency & Insulation</h2>
          </div>

          <div className="bg-muted p-6 rounded-lg mb-6">
            <h3 className="text-xl mb-4">The Thermal Bridging Concern</h3>
            <p className="text-muted-foreground mb-4">
              One common concern with steel framing is <strong>thermal bridging</strong>—when steel studs conduct heat/cold through the wall, potentially reducing insulation effectiveness.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>The reality:</strong> Modern cold-form steel construction addresses this through:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                <span><strong>Continuous exterior insulation</strong> — Adding 1-2 inches of rigid foam insulation on the exterior breaks thermal bridges.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                <span><strong>Insulated cavity fill</strong> — Spray foam or batt insulation fills stud cavities completely.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                <span><strong>Thermal break strips</strong> — Some manufacturers install thermal breaks in stud designs.</span>
              </li>
            </ul>
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
              <p className="text-sm">
                <strong>Bottom line:</strong> Properly detailed steel homes achieve R-20 to R-30 wall assemblies—<strong>equal or better than wood framing</strong> and fully compliant with Canadian energy codes.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl mb-4">Steel Frame Energy Performance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <span>Airtight assembly reduces infiltration</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <span>No settling or gaps over time</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <span>Continuous insulation standard practice</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <span>R-20 to R-30 wall assemblies typical</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl mb-4">Wood Frame Energy Performance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <span>Natural insulation value in wood itself</span>
                </li>
                <li className="flex gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Can develop air gaps as lumber settles</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <span>Easier to add extra insulation in cavities</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <span>R-20 to R-24 wall assemblies typical</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Sound & Comfort */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Volume2 className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl">Sound & Comfort</h2>
          </div>

          <p className="text-lg mb-6">
            Most people assume a steel home must be louder—because metal carries vibration, right? It's a fair question, and it's one we hear all the time.
          </p>

          <p className="text-lg mb-6">
            But here's the truth: when steel walls are built the way modern homes are built today, they're actually <strong>quieter than what most people are used to with wood</strong>. NRC Canada even tested this in a full-scale study and found that cold-formed steel walls paired with resilient channels and proper insulation can match—or outperform—typical wood-frame walls when it comes to everyday sound control.
          </p>

          <p className="text-lg mb-8">
            In practical terms, that means a calmer home. Bedrooms stay quieter. Conversations in one room don't travel as easily to the next. And because steel doesn't dry out or shift over time, you avoid the pops, squeaks, and little movements that are common in wood-framed homes.
          </p>

          <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-lg mb-8">
            <p className="text-lg">
              With steel, the quiet isn't something you have to chase. <strong>It comes built in.</strong>
            </p>
          </div>

          {/* Table 1: TV-in-the-Next-Room Comparison */}
          <div className="mb-8">
            <h3 className="text-2xl mb-4">Sound Control: Wood vs. Steel Walls</h3>
            <p className="text-muted-foreground mb-4">How Much Noise Actually Gets Through?</p>
            
            <div className="bg-muted p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-3">TV-in-the-Next-Room Comparison</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-white">
                      <th className="text-left p-3 border">Wall Type</th>
                      <th className="text-left p-3 border">Typical STC Range</th>
                      <th className="text-left p-3 border">What You Hear in Real Life</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border">Standard Wood-Stud Wall</td>
                      <td className="p-3 border font-semibold">36–40</td>
                      <td className="p-3 border">TV dialogue is clear and understandable. Loud voices carry easily.</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="p-3 border">Upgraded Wood-Stud Wall</td>
                      <td className="p-3 border font-semibold">45–52</td>
                      <td className="p-3 border">TV becomes muffled; some words still recognizable.</td>
                    </tr>
                    <tr>
                      <td className="p-3 border">Standard Steel-Stud Wall</td>
                      <td className="p-3 border font-semibold text-[#8b9d83]">47–50</td>
                      <td className="p-3 border">Dialogue is hard to follow; mostly general noise.</td>
                    </tr>
                    <tr className="bg-[#8b9d83]/10">
                      <td className="p-3 border font-semibold">Engineered Steel-Stud Wall</td>
                      <td className="p-3 border font-semibold text-[#8b9d83]">55–60+</td>
                      <td className="p-3 border"><strong>You may barely notice the TV is on; excellent bedroom privacy.</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Table 2: Side-by-Side Comparison */}
          <div className="mb-8">
            <h4 className="text-xl mb-4">Side-by-Side: Same Wall, Different Stud Material</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 border">Assembly Type</th>
                    <th className="text-left p-3 border">Wood Studs STC</th>
                    <th className="text-left p-3 border">Steel Studs STC</th>
                    <th className="text-left p-3 border">Difference</th>
                    <th className="text-left p-3 border">Everyday Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">1-layer drywall + insulation</td>
                    <td className="p-3 border font-semibold">36</td>
                    <td className="p-3 border font-semibold text-[#8b9d83]">47</td>
                    <td className="p-3 border font-semibold text-[#8b9d83]">+11</td>
                    <td className="p-3 border">Steel dramatically cuts intelligible speech.</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="p-3 border">2 layers drywall + Green Glue + insulation</td>
                    <td className="p-3 border font-semibold">52</td>
                    <td className="p-3 border font-semibold text-[#8b9d83]">56</td>
                    <td className="p-3 border font-semibold text-[#8b9d83]">+4</td>
                    <td className="p-3 border">Steel reduces TV/audio clarity even further.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 3: What STC Actually Means */}
          <div className="bg-white p-6 rounded-lg border-2 border-muted">
            <h4 className="text-xl mb-4">What STC Actually Means</h4>
            <p className="text-sm text-muted-foreground mb-4">
              STC (Sound Transmission Class) measures how much sound a wall blocks. Higher numbers = quieter homes.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 border">STC Level</th>
                    <th className="text-left p-3 border">Everyday Interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border font-semibold">35–40</td>
                    <td className="p-3 border">You hear TV and speech clearly.</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="p-3 border font-semibold">45–50</td>
                    <td className="p-3 border">You hear muffled TV; some words still recognizable.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-semibold">50–55</td>
                    <td className="p-3 border">Speech clarity drops; mostly a soft background hum.</td>
                  </tr>
                  <tr className="bg-[#8b9d83]/10">
                    <td className="p-3 border font-semibold text-[#8b9d83]">55–60+</td>
                    <td className="p-3 border"><strong>Excellent privacy; TV rarely noticeable.</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="mb-12">
          <h2 className="text-3xl mb-6">Environmental Impact & Sustainability</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6 bg-[#8b9d83]/5 border-2 border-[#8b9d83]">
              <h3 className="text-xl mb-4">Steel Framing</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <span><strong>98% recyclable</strong> — Steel is infinitely recyclable without quality loss</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <span><strong>25% recycled content</strong> — Most steel framing contains recycled material</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <span><strong>Zero waste</strong> — Precision manufacturing eliminates onsite waste</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <span><strong>100+ year lifespan</strong> — Longer building life reduces replacement cycles</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl mb-4">Wood Framing</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <span><strong>Renewable resource</strong> — Trees can be replanted and regrown</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <span><strong>Carbon sequestration</strong> — Wood stores carbon absorbed during growth</span>
                </li>
                <li className="flex gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span><strong>10-15% waste</strong> — Onsite cutting generates significant waste</span>
                </li>
                <li className="flex gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span><strong>Deforestation concerns</strong> — Depends on sustainable forestry practices</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Both materials can be sustainable when sourced responsibly. Steel's longer lifespan and recyclability make it appealing for long-term projects, while certified sustainable lumber (FSC-certified) can be an excellent renewable choice.
            </p>
          </div>
        </section>

        {/* When to Choose Each */}
        <section className="mb-12">
          <h2 className="text-3xl mb-8 text-center">When to Choose Each Material</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-[#8b9d83]/5 border-2 border-[#8b9d83]">
              <h3 className="text-2xl mb-6 text-[#8b9d83]">Choose Steel If You Want:</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Speed</strong>
                    <p className="text-sm text-muted-foreground">Frame up in 4-5 days, not 2-3 weeks</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Durability</strong>
                    <p className="text-sm text-muted-foreground">Zero rot, termites, or warping—ever</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Predictable costs</strong>
                    <p className="text-sm text-muted-foreground">Locked-in pricing, no lumber market swings</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Low maintenance</strong>
                    <p className="text-sm text-muted-foreground">Minimal upkeep over decades</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Fire resistance</strong>
                    <p className="text-sm text-muted-foreground">Non-combustible with insurance discounts</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Wide spans</strong>
                    <p className="text-sm text-muted-foreground">Better strength-to-weight for open floor plans</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2">
              <h3 className="text-2xl mb-6">Choose Wood If You Want:</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Lower upfront cost</strong>
                    <p className="text-sm text-muted-foreground">10-15% cheaper initial material/labor</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Traditional methods</strong>
                    <p className="text-sm text-muted-foreground">Familiar to most builders and tradespeople</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Local availability</strong>
                    <p className="text-sm text-muted-foreground">Lumber yards everywhere, easy to source</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Natural material</strong>
                    <p className="text-sm text-muted-foreground">Renewable resource with carbon storage</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Design flexibility</strong>
                    <p className="text-sm text-muted-foreground">Easy onsite modifications and adjustments</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Time isn't critical</strong>
                    <p className="text-sm text-muted-foreground">You can afford 2-3 extra weeks of framing</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Common Myths */}
        <section className="mb-12">
          <h2 className="text-3xl mb-6">Common Myths Debunked</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Myth: &quot;Steel homes are always more expensive&quot;</h3>
                  <p className="text-muted-foreground">
                    <strong>Reality:</strong> While steel materials cost 10-15% more, the 75% faster construction saves significant labor and carrying costs. Factor in lower insurance, zero maintenance for pests/rot, and predictable pricing, and steel often costs less over the project lifecycle.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Myth: &quot;Steel conducts cold and makes homes freezing&quot;</h3>
                  <p className="text-muted-foreground">
                    <strong>Reality:</strong> Thermal bridging is easily solved with continuous exterior insulation—a best practice in modern construction. Steel homes routinely achieve R-20 to R-30 wall assemblies, meeting or exceeding Canadian energy codes.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Myth: &quot;You can't get permits for steel-framed homes&quot;</h3>
                  <p className="text-muted-foreground">
                    <strong>Reality:</strong> Cold-form steel is fully compliant with Canadian building codes. Municipalities consistently approve these structures because engineering is precise and predictable.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Myth: &quot;Steel blocks Wi-Fi and cell signals&quot;</h3>
                  <p className="text-muted-foreground">
                    <strong>Reality:</strong> This is a common concern but unfounded. Steel studs don't create a Faraday cage—there are gaps, openings, windows, and doors. Our clients report zero connectivity issues. <Button variant="link" className="p-0 h-auto text-accent" onClick={() => onNavigate('steel-downsides')}>Read our full analysis</Button> of this myth.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Final Verdict */}
        <section className="mb-12">
          <Card className="p-8 bg-accent/5 border-2 border-accent">
            <h2 className="text-3xl mb-6">The Bottom Line</h2>
            <div className="space-y-4 text-lg">
              <p>
                While both materials have their place, <strong>steel emerges as the clear winner for most Canadian construction projects in 2026</strong>—especially when you look beyond just upfront costs.
              </p>
              
              <div className="pl-4 border-l-4 border-accent space-y-3">
                <p>
                  <strong>Steel's compelling advantages:</strong>
                </p>
                <ul className="space-y-2 list-disc pl-6">
                  <li><strong>Dramatic speed advantage:</strong> 4-5 day onsite framing vs. 2-4 weeks with wood—get into the next construction phase faster and reduce carrying costs</li>
                  <li><strong>Superior durability:</strong> Won't rot, warp, twist, or attract termites. Maintains dimensional stability for decades</li>
                  <li><strong>Weather independence:</strong> Factory-built precision means no weather delays, warped studs, or moisture concerns</li>
                  <li><strong>Long-term cost savings:</strong> Lower insurance premiums, reduced maintenance, better energy efficiency, and higher resale value</li>
                  <li><strong>Labor shortage proof:</strong> Less reliant on skilled framers—a massive advantage in today's tight labor market</li>
                  <li><strong>Consistent quality:</strong> Engineered precision and factory conditions eliminate the variability of site-built construction</li>
                  <li><strong>Stronger structure:</strong> Superior strength-to-weight ratio, better wind and seismic resistance</li>
                </ul>
              </div>

              <p>
                <strong>The 10-15% upfront premium?</strong> It's increasingly offset by rising lumber costs, labor rates, and the time value of money. When you factor in faster project completion, reduced financing costs, lower insurance, and decades of maintenance savings, steel often costs <em>less</em> over the building's lifetime.
              </p>

              <p>
                <strong>Wood still makes sense when:</strong> You're on an extremely tight budget with no flexibility, have a reliable framing crew locked in at good rates, aren't facing time pressure, and are building in a traditional residential area where wood is standard.
              </p>

              <p className="text-accent pt-2">
                <strong>Our verdict:</strong> For ADUs, rental properties, commercial projects, or any build where speed, durability, and long-term value matter, steel is the smart choice. The market is catching up to what builders have known for years—cold-formed steel framing simply delivers better results for most modern construction projects.
              </p>
            </div>
          </Card>
        </section>

        {/* Author Bio */}
        <section className="mb-12">
          <div className="bg-muted p-8 rounded-lg">
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t pt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4">Ready to Explore Steel Framing?</h2>
            <p className="text-xl text-muted-foreground">
              Get a detailed quote and timeline for your project
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-accent hover:bg-accent/90 text-white"
            >
              Get Your Custom Quote
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('models')}
            >
              See Pricing & Models
            </Button>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-16 pt-12 border-t">
          <h2 className="text-2xl mb-6">Continue Learning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('cost-drivers')}>
              <Badge className="mb-3 bg-accent text-white">Cost & Financing</Badge>
              <h3 className="text-lg mb-2">What Drives the Cost of Your Build?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Understanding materials, labor, and site preparation
              </p>
              <Button variant="link" className="p-0 text-accent">
                Read Article →
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('five-day-build')}>
              <Badge className="mb-3 bg-secondary text-white">Process & Permits</Badge>
              <h3 className="text-lg mb-2">How the 5 Day Build Works</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Step-by-step walkthrough of the assembly process
              </p>
              <Button variant="link" className="p-0 text-accent">
                Read Article →
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('cfs-vs-traditional-steel')}>
              <Badge className="mb-3 bg-primary text-white">Comparisons</Badge>
              <h3 className="text-lg mb-2">Cold-Form Steel vs. Traditional Steel</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Understanding the key differences between steel types
              </p>
              <Button variant="link" className="p-0 text-accent">
                Read Article →
              </Button>
            </Card>
          </div>
        </section>
      </article>
    </div>
  );
}