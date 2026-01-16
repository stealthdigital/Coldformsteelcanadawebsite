import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, CheckCircle2, XCircle, DollarSign, Calendar, Zap, Shield, Home, TrendingUp, Ruler, CloudSun, Award, Volume2, Leaf, Flame, Bug, Droplet, Watch, TreePine } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArticleSchema } from '../schema/ArticleSchema';
import { HeadMeta } from '../HeadMeta';
import steelFrameImage from 'figma:asset/72fa0d47ef13aed1d663ccbb6c6149c415652f77.png';
import johnMontgomeryPhoto from 'figma:asset/f7589f12c4db2294f1600532a47c3b3c990ffc90.png';

interface SteelVsWoodArticleProps {
  onNavigate: (page: string) => void;
}

export function SteelVsWoodArticle({ onNavigate }: SteelVsWoodArticleProps) {
  const costSavingsImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/main/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <HeadMeta 
        title="Steel vs Wood Framing | Cold-Form Steel Benefits | Cold Form Steel Canada"
        description="Compare cold-form steel vs wood framing for homes. Discover why steel is 75% faster to build, 100% fireproof, lasts 100+ years, and has stable pricing. Complete technical comparison for Canadian homeowners."
        image="https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Steel-Built%20Barndo%20Retreat/Completed%20Barndominium.png"
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
      <div className="bg-muted/50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('learning')}
            className="gap-2 font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Learning Center
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[400px] bg-muted relative overflow-hidden">
        <img 
          src={steelFrameImage}
          alt="Steel frame construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
           <div className="max-w-4xl mx-auto">
              <Badge className="bg-terracotta text-white mb-4 border-0 font-bold px-4 py-1 uppercase tracking-widest text-[10px]">Comparisons</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Steel vs. Wood: Full Breakdown
              </h1>
              <p className="text-xl text-white/90 mb-4 max-w-3xl">
                An honest, comprehensive comparison of costs, durability, and performance to help you make the right choice for your build.
              </p>
              <div className="flex items-center gap-6 text-sm text-white/80 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-terracotta" />
                  <span>10 min read</span>
                </div>
                <span>•</span>
                <span>Updated December 2025</span>
              </div>
           </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Summary */}
        <Card className="p-10 mb-16 bg-sage/5 border-l-8 border-sage rounded-2xl shadow-sm">
          <h2 className="text-2xl mb-6 font-bold text-foreground tracking-tight">Quick Summary</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed font-medium">
            <p>
              <strong className="text-foreground">Steel wins for most modern Canadian builds.</strong> While cold-form steel costs 10-15% more upfront than wood, it builds <strong className="text-foreground">75% faster</strong> (framed in 4-5 days vs. 2-3 weeks), won't rot or warp, eliminates weather delays, and delivers massive long-term savings through lower insurance, zero maintenance for pests or moisture damage, and faster project completion.
            </p>
            <p>
              <strong className="text-foreground">The upfront premium is offset by speed and durability.</strong> Shorter construction timelines slash carrying costs, factory precision eliminates waste and callbacks, and steel's dimensional stability means no warped studs or settling issues. Add in 10-15% lower insurance premiums and decades without rot repairs, and steel often costs less over the building's lifetime.
            </p>
            <p>
              <strong className="text-foreground">Wood only makes sense in limited cases:</strong> extremely tight budgets with zero flexibility, reliable framing crews locked in at low rates, no time pressure, and traditional residential neighborhoods where wood is standard.
            </p>
          </div>
          <p className="text-xs text-muted-foreground mt-8 font-bold uppercase tracking-widest italic opacity-70">
            Pricing ranges based on typical Ontario and Western Canada conditions in 2024-2025. For ADUs, rental properties, or any project where speed and durability matter, steel is the smart choice.
          </p>
        </Card>

        {/* Introduction */}
        <section className="max-w-none mb-16 space-y-6">
          <p className="text-xl text-muted-foreground leading-relaxed">
            If you're planning a home or ADU in Canada, you've likely faced this question: <strong className="text-foreground font-bold">Should I build with cold-form steel or traditional wood framing?</strong>
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The truth is, there&rsquo;s no universal "best" material. But there are real, measurable differences in cost, speed, durability, and long-term performance that can dramatically impact your project.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This guide breaks down everything you need to know—with real numbers from Canadian builds, honest pros and cons, and practical advice to help you decide.
          </p>
        </section>

        <Separator className="my-16" />

        {/* Cost Comparison */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-terracotta/10 rounded-xl flex items-center justify-center shadow-sm">
              <DollarSign className="w-7 h-7 text-terracotta" />
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Cost Comparison: The Real Numbers</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Card className="p-8 border-2 border-sage/20 bg-white hover:shadow-lg transition-shadow rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-sage" />
                <h3 className="text-2xl font-bold text-foreground">Cold-Form Steel</h3>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground font-medium">Material Cost:</span>
                  <span className="font-bold text-foreground">$18-22/sq ft</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground font-medium">Labor (assembly):</span>
                  <span className="font-bold text-foreground">$8-12/sq ft</span>
                </div>
                <div className="flex justify-between font-bold pt-2">
                  <span className="text-foreground">Total Shell Cost:</span>
                  <span className="text-terracotta text-xl">$26-34/sq ft</span>
                </div>
              </div>
              <div className="bg-sage/10 p-4 rounded-xl text-center">
                <p className="text-sm font-bold text-sage">
                  Example: 2,000 sq ft home = $52,000 - $68,000 for framed shell
                </p>
              </div>
            </Card>

            <Card className="p-8 border-2 border-muted bg-white hover:shadow-lg transition-shadow rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-8 h-8 text-muted-foreground" />
                <h3 className="text-2xl font-bold text-foreground">Wood Framing</h3>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground font-medium">Material Cost:</span>
                  <span className="font-bold text-foreground">$12-16/sq ft</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground font-medium">Labor (framing):</span>
                  <span className="font-bold text-foreground">$10-15/sq ft</span>
                </div>
                <div className="flex justify-between font-bold pt-2">
                  <span className="text-foreground">Total Shell Cost:</span>
                  <span className="text-muted-foreground text-xl">$22-31/sq ft</span>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-xl text-center">
                <p className="text-sm font-bold text-muted-foreground">
                  Example: 2,000 sq ft home = $44,000 - $62,000 for framed shell
                </p>
              </div>
            </Card>
          </div>

          <div className="bg-muted/50 p-6 rounded-xl mb-10 text-center">
            <p className="text-sm text-muted-foreground font-medium">
              <strong className="text-foreground">Note:</strong> Actual costs vary by province and lumber market fluctuations. Steel pricing is more stable and typically locked in at the time of order.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl border-2 border-muted/50 shadow-md mb-10">
            <h3 className="text-2xl mb-8 font-bold text-foreground tracking-tight">The Real Cost Story</h3>
            <p className="text-muted-foreground mb-8 font-medium">
              At first glance, wood appears 10-15% cheaper. But that&rsquo;s only part of the picture:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-sage" />
                </div>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  <strong className="text-foreground">Steel saves 2-3 weeks of labor costs</strong> — Frame goes up in 4-5 days vs 2-3 weeks for wood, reducing carrying costs, site supervision, and weather delays.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-sage" />
                </div>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  <strong className="text-foreground">Price predictability</strong> — Steel prices are locked in at order. Wood lumber prices can swing 20-30% during your build.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-sage" />
                </div>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  <strong className="text-foreground">Lower insurance premiums</strong> — Many insurers offer 10-15% discounts for non-combustible steel framing.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-sage" />
                </div>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  <strong className="text-foreground">Minimal maintenance</strong> — No rot, no termites, no warping means lower lifetime costs.
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-terracotta text-white p-8 rounded-2xl shadow-xl">
            <p className="text-lg font-medium italic">
              <strong>Real Project Example:</strong> A 2,000 sq ft home in Ontario cost $6,000 more for steel vs wood framing, but saved $7,000 in labor costs (faster build) and $3,000 in carrying costs (interest on construction loan). Net savings: <span className="text-white font-bold text-2xl ml-2">$4,000</span>
            </p>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Beyond Material Costs */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-sage/10 rounded-xl flex items-center justify-center shadow-sm">
              <TrendingUp className="w-7 h-7 text-sage" />
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Beyond Material Costs: The Hidden Savings</h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            When comparing steel to wood, most people focus solely on the framing material and labor costs. But that&rsquo;s only part of the financial picture. Cold-formed steel delivers significant indirect cost savings across your entire project—savings that often aren&rsquo;t apparent until you dig deeper.
          </p>

          <h3 className="text-2xl mb-8 font-bold text-foreground">Where Steel Saves Beyond the Frame</h3>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { icon: Shield, title: 'Lower Insurance Premiums', desc: 'Non-combustible steel framing reduces builders risk insurance and can lower homeowner premiums by 10–15%. One developer saved $1.3 million in insurance costs on a 400-unit hotel project by using CFS instead of wood.' },
              { icon: Zap, title: 'Shorter Construction Timelines', desc: 'Precision-engineered steel panels arrive ready to install, cutting construction time by 75%. Faster timelines mean you start collecting rent sooner or move in earlier—reducing months of mortgage or carrying costs.' },
              { icon: TrendingUp, title: 'Reduced Scaffolding Needs', desc: 'Panelized steel framing can drastically reduce or eliminate expensive scaffolding requirements. Panels are assembled quickly at ground level, cutting rental costs and opening up the site for follow-on trades faster.' },
              { icon: CheckCircle2, title: 'Fewer Warranty Claims', desc: "Steel doesn't warp, twist, or settle. Dimensional stability means fewer callbacks for drywall cracks, misaligned doors, or sagging floors—saving you time and money on warranty work." },
              { icon: Bug, title: 'No Termite or Rot Costs', desc: 'Zero risk of dry rot or termite damage eliminates the need for costly chemical treatments, annual inspections, or structural repairs down the road.' },
              { icon: DollarSign, title: 'Lower Financing Costs', desc: 'Because steel builds finish faster, construction loans are paid off sooner—saving hundreds or thousands in interest charges depending on project size.' },
              { icon: Shield, title: 'Site Security Savings', desc: 'Non-combustible CFS has low fire risk, which can eliminate the need for 24-hour fire watch security on some sites—a significant cost savings in high-density areas.' },
              { icon: Flame, title: 'Reduced Sprinkler Requirements', desc: 'In some building types, fire-resistant steel framing can reduce or eliminate the need for costly sprinkler systems that wood-framed buildings would require.' }
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-white border border-muted/50 hover:shadow-md transition-shadow rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-primary text-white p-10 rounded-2xl shadow-xl mb-10">
            <h3 className="text-2xl mb-6 font-bold">The Complete Savings Picture</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              This infographic from BuildSteel.org and FRAMECAD shows all the direct and indirect cost savings when using cold-formed steel construction. Framing only accounts for about 20% of total construction costs—so choosing a material that creates savings across the entire project makes economic sense.
            </p>
            <div className="bg-white rounded-xl overflow-hidden">
              <ImageWithFallback 
                src="https://buildsteel.org/wp-content/uploads/2018/05/BuildSteeel_Interactive_Static_v4-1.jpg"
                alt="Spot the Savings With Cold-Formed Steel Framing infographic showing cost savings areas"
                className="w-full h-auto"
              />
            </div>
            <p className="text-xs text-white/70 mt-4 italic">Credit: BuildSteel.org and FRAMECAD</p>
          </div>

          <Card className="p-8 bg-sage/5 border-l-8 border-sage rounded-xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">The takeaway:</strong> When you account for reduced insurance, faster timelines, eliminated scaffolding, lower financing costs, and zero maintenance for rot or pests, cold-formed steel's 10-15% material premium is often completely offset—or even turns into a net savings—over the course of your project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              It&rsquo;s not just about the cost per square foot of framing. It&rsquo;s about the total cost of getting your building completed, occupied, and performing reliably for decades.
            </p>
          </Card>
        </section>

        <Separator className="my-16" />

        {/* Owner/Builder Financial Benefits */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-terracotta/10 rounded-xl flex items-center justify-center shadow-sm">
              <Award className="w-7 h-7 text-terracotta" />
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Owner/Builder Financial Benefits</h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Beyond the inherent advantages of steel construction, Cold Form Steel Canada provides additional financial benefits unique to our approach—advantages that can dramatically reduce your project costs.
          </p>

          <div className="space-y-8">
            <Card className="p-8 bg-white border-2 border-sage/20 rounded-2xl shadow-md">
              <h3 className="text-xl mb-6 font-bold text-foreground">No General Contractor Markup (Save 10–30%)</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cold Form Steel Canada provides engineered drawings and support so homeowners can file as an Owner/Builder. This removes the need for a general contractor to oversee the framing stage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most GCs add 10–30 percent markup on labour, materials, and project management. Skipping this markup can lower the overall project cost significantly—<strong className="text-foreground">potentially saving $15,000–$50,000 on a typical residential build.</strong>
              </p>
            </Card>

            <Card className="p-8 bg-white border-2 border-sage/20 rounded-2xl shadow-md">
              <h3 className="text-xl mb-6 font-bold text-foreground">Ability to Reclaim HST</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Owner/Builders in Canada can apply to reclaim HST on new residential construction. This can return thousands of dollars after completion, reducing the true cost of the ADU or home more than most people realize.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For example, on a $200,000 build in Ontario, you could reclaim up to <strong className="text-foreground">$24,000 in HST</strong>—money that goes directly back into your pocket after occupancy.
              </p>
            </Card>

            <Card className="p-8 bg-white border-2 border-sage/20 rounded-2xl shadow-md">
              <h3 className="text-xl mb-6 font-bold text-foreground">Lower Chance of Change Orders</h3>
              <p className="text-muted-foreground leading-relaxed">
                Panelized steel walls arrive pre-engineered and factory-built, reducing human error and avoiding the expensive rework common in wood framing. Fewer mistakes mean fewer costly change orders and schedule delays.
              </p>
            </Card>
          </div>

          <div className="bg-terracotta text-white p-10 rounded-2xl shadow-xl mt-10">
            <h3 className="text-2xl mb-6 font-bold">Combined Savings Example</h3>
            <p className="text-white/90 mb-6">On a 1,500 sq ft home build in British Columbia:</p>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between border-b border-white/20 pb-3">
                <span className="font-medium">No GC markup (20%):</span>
                <span className="font-bold text-xl">$30,000 saved</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-3">
                <span className="font-medium">HST reclaim:</span>
                <span className="font-bold text-xl">$18,000 returned</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-3">
                <span className="font-medium">Avoided change orders:</span>
                <span className="font-bold text-xl">$4,000 saved</span>
              </div>
              <div className="flex justify-between pt-3">
                <span className="font-bold text-xl">Total benefit:</span>
                <span className="font-bold text-3xl">$52,000</span>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Speed Comparison */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-sage/10 rounded-xl flex items-center justify-center shadow-sm">
              <Calendar className="w-7 h-7 text-sage" />
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Construction Speed: Where Steel Dominates</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Card className="p-8 bg-white border-2 border-sage shadow-md rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-7 h-7 text-sage" />
                <h3 className="text-xl font-bold text-foreground uppercase tracking-widest text-sm">Steel Frame Timeline</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2 font-bold text-xs uppercase tracking-widest text-muted-foreground">
                    <span>Factory fabrication</span>
                    <span className="text-foreground">7-10 days</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-sage" style={{ width: '40%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 font-bold text-xs uppercase tracking-widest text-muted-foreground">
                    <span>Onsite assembly</span>
                    <span className="text-sage">4-5 days</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-sage" style={{ width: '20%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 font-bold text-xs uppercase tracking-widest text-muted-foreground">
                    <span>Total framing time</span>
                    <span className="text-sage text-lg">11-15 days</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-sage" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-muted/20 border-2 border-muted shadow-sm rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-7 h-7 text-muted-foreground" />
                <h3 className="text-xl font-bold text-foreground uppercase tracking-widest text-sm">Wood Frame Timeline</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2 font-bold text-xs uppercase tracking-widest text-muted-foreground">
                    <span>Material delivery</span>
                    <span className="text-foreground">3-5 days</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-muted-foreground/40" style={{ width: '15%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 font-bold text-xs uppercase tracking-widest text-muted-foreground">
                    <span>Onsite framing</span>
                    <span className="text-foreground">14-21 days</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-muted-foreground/40" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 font-bold text-xs uppercase tracking-widest text-muted-foreground">
                    <span>Total framing time</span>
                    <span className="text-foreground text-lg">17-26 days</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-muted-foreground/40" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-sage/5 p-8 rounded-2xl border-l-8 border-sage">
            <h3 className="text-xl mb-6 font-bold text-foreground">Why Speed Matters</h3>
            <ul className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Less weather exposure", desc: "4-5 days means less risk of rain damage, frozen ground delays, or summer heat affecting workers." },
                { title: "Lower carrying costs", desc: "Shorter construction loans save interest. A $200K loan at 7% APR costs $38/day in interest." },
                { title: "Faster occupancy", desc: "For rental properties or ADUs, every week saved is rental income gained." },
                { title: "Reduced site disruption", desc: "Neighbors and municipalities appreciate shorter construction timelines." }
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-3 h-3 text-sage" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block text-sm mb-1">{item.title}</span>
                    <span className="text-muted-foreground text-sm leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Durability & Long-Term Performance */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shadow-sm">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Durability & Long-Term Performance</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-6 font-bold text-foreground border-b">Factor</th>
                  <th className="text-left p-6 font-bold text-foreground border-b">Cold-Form Steel</th>
                  <th className="text-left p-6 font-bold text-foreground border-b">Wood Framing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/20">
                  <td className="p-6 font-bold text-foreground">Moisture Resistance</td>
                  <td className="p-6 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Highly corrosion-resistant due to galvanized coating. Engineered for decades of protection. No mold or rot risk.</span>
                    </div>
                  </td>
                  <td className="p-6 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                      <span>Susceptible to rot, mold, and decay if exposed to moisture. Requires careful sealing.</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/20">
                  <td className="p-6 font-bold text-foreground">Pest Resistance</td>
                  <td className="p-6 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Immune to termites, carpenter ants, and wood-boring insects.</span>
                    </div>
                  </td>
                  <td className="p-6 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                      <span>Vulnerable to termites and carpenter ants. Requires chemical treatment in some regions.</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/20">
                  <td className="p-6 font-bold text-foreground">Fire Resistance</td>
                  <td className="p-6 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Non-combustible. Meets highest fire ratings. Can reduce insurance costs 10-15%.</span>
                    </div>
                  </td>
                  <td className="p-6 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                      <span>Combustible. Requires fire-retardant treatment in some applications.</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/20">
                  <td className="p-6 font-bold text-foreground">Dimensional Stability</td>
                  <td className="p-6 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Won&rsquo;t warp, twist, bow, or shrink. Perfect for precision finishes.</span>
                    </div>
                  </td>
                  <td className="p-6 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                      <span>Natural material expands/contracts with humidity. Can cause drywall cracks and door misalignment.</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/20">
                  <td className="p-6 font-bold text-foreground">Structural Strength</td>
                  <td className="p-6 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Higher strength-to-weight ratio. Better for wide spans and heavy loads.</span>
                    </div>
                  </td>
                  <td className="p-6 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                      <span>Adequate strength for most residential applications. More flexibility in design.</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="p-6 font-bold text-foreground">Lifespan</td>
                  <td className="p-6 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>50+ years before any significant degradation, with total structural life commonly exceeding 100 years.</span>
                    </div>
                  </td>
                  <td className="p-6 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                      <span>40-70 years if properly maintained. Requires regular inspection and treatment.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Precision Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-sage/10 rounded-xl flex items-center justify-center shadow-sm">
              <Ruler className="w-7 h-7 text-sage" />
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Precision: The Hidden Advantage You Can See</h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Cold form steel delivers a level of precision that wood cannot match. This is the difference homeowners notice immediately: straighter walls, cleaner lines, tighter finishes, and fewer problems during construction and throughout the life of the home.
          </p>

          <h3 className="text-2xl mb-8 font-bold text-foreground">Manufacturing Tolerance Comparison</h3>
          <p className="text-lg text-muted-foreground mb-10">The precision that makes everything else easier</p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Card className="p-8 bg-sage/5 border-2 border-sage rounded-2xl shadow-md">
              <h3 className="text-xl mb-6 font-bold text-sage">Cold Formed Steel</h3>
              <p className="text-sm text-muted-foreground mb-4 font-medium">Factory precision manufacturing</p>
              <div className="mb-8">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-sage mb-2">± 1/16"</div>
                  <div className="text-sm text-muted-foreground">(± 1.6 mm)</div>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <div className="text-center font-bold text-xs uppercase tracking-widest text-sage mb-3">Perfect Alignment</div>
                  <div className="h-16 bg-sage/10 rounded flex items-center justify-center relative">
                    <div className="w-1 h-full bg-sage absolute left-1/2 transform -translate-x-1/2" />
                    <div className="text-xs text-muted-foreground absolute bottom-1">← 1/16" variation →</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-muted/20 border-2 border-muted rounded-2xl shadow-sm">
              <h3 className="text-xl mb-6 font-bold text-foreground">Dimensional Lumber</h3>
              <p className="text-sm text-muted-foreground mb-4 font-medium">Natural material variation</p>
              <div className="mb-8">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-muted-foreground mb-2">± 1/4"</div>
                  <div className="text-sm text-muted-foreground">(± 6.4 mm)</div>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <div className="text-center font-bold text-xs uppercase tracking-widest text-muted-foreground mb-3">Variable Alignment</div>
                  <div className="h-16 bg-muted/30 rounded flex items-center justify-center relative">
                    <div className="w-2 h-full bg-muted-foreground/60 absolute left-1/2 transform -translate-x-1/2" />
                    <div className="text-xs text-muted-foreground absolute bottom-1">← 1/4" variation (four times wider) →</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-10 bg-primary text-white rounded-2xl shadow-xl mb-10">
            <h3 className="text-2xl mb-6 font-bold">Four Times More Precise Than Dimensional Lumber</h3>
            <p className="text-white/90 mb-6 leading-relaxed">This precision results in:</p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                'Perfectly straight walls',
                'Cabinetry and countertops that line up correctly',
                'No shimming or corrections during drywall',
                'Fewer nail pops, cracks, and settling issues',
                'Cleaner trim work and tighter finish details',
                'Predictable results every time'
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            In simple terms, steel builds stay true and stay that way permanently.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With cold formed steel, every wall panel is engineered before it reaches the job site. Every stud, screw hole, and connection point is exactly where it belongs. There is no time wasted correcting imperfections, dealing with twisted studs, or compensating for lumber that has absorbed moisture.
          </p>
          <p className="text-lg text-foreground font-bold mt-8">
            Every detail lines up.<br />
            Every finish looks better.<br />
            And the structure maintains that precision for life.
          </p>
        </section>

        <Separator className="my-16" />

        {/* Energy Efficiency */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-terracotta/10 rounded-xl flex items-center justify-center shadow-sm">
              <CloudSun className="w-7 h-7 text-terracotta" />
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Energy Efficiency & Insulation</h2>
          </div>

          <Card className="p-8 bg-muted/20 border-l-8 border-muted rounded-2xl mb-10">
            <h3 className="text-2xl mb-6 font-bold text-foreground">The Thermal Bridging Concern</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              One common concern with steel framing is thermal bridging—when steel studs conduct heat/cold through the wall, potentially reducing insulation effectiveness.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">The reality:</strong> Modern cold-form steel construction addresses this through:
            </p>
            <ul className="space-y-4 mb-6">
              {[
                { title: 'Continuous exterior insulation', desc: 'Adding 1-2 inches of rigid foam insulation on the exterior breaks thermal bridges.' },
                { title: 'Insulated cavity fill', desc: 'Spray foam or batt insulation fills stud cavities completely.' },
                { title: 'Thermal break strips', desc: 'Some manufacturers install thermal breaks in stud designs.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-5 h-5 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-3 h-3 text-sage" />
                  </div>
                  <div>
                    <strong className="text-foreground block mb-1">{item.title}</strong>
                    <span className="text-muted-foreground">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold text-foreground">
              Bottom line: Properly detailed steel homes achieve R-20 to R-30 wall assemblies—equal or better than wood framing and fully compliant with Canadian energy codes.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-2 border-sage/20 rounded-2xl shadow-md">
              <h3 className="text-xl mb-6 font-bold text-foreground">Steel Frame Energy Performance</h3>
              <ul className="space-y-4">
                {[
                  'Airtight assembly reduces infiltration',
                  'No settling or gaps over time',
                  'Continuous insulation standard practice',
                  'R-20 to R-30 wall assemblies typical'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-white border-2 border-muted/50 rounded-2xl shadow-sm">
              <h3 className="text-xl mb-6 font-bold text-foreground">Wood Frame Energy Performance</h3>
              <ul className="space-y-4">
                {[
                  'Natural insulation value in wood itself',
                  'Can develop air gaps as lumber settles',
                  'Easier to add extra insulation in cavities',
                  'R-20 to R-24 wall assemblies typical'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Sound & Comfort */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-sage/10 rounded-xl flex items-center justify-center shadow-sm">
              <Volume2 className="w-7 h-7 text-sage" />
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Sound & Comfort</h2>
          </div>

          <div className="space-y-6 mb-10 text-lg text-muted-foreground leading-relaxed">
            <p>
              Most people assume a steel home must be louder—because metal carries vibration, right? It&rsquo;s a fair question, and it&rsquo;s one we hear all the time.
            </p>
            <p>
              But here&rsquo;s the truth: when steel walls are built the way modern homes are built today, they&rsquo;re actually quieter than what most people are used to with wood. NRC Canada even tested this in a full-scale study and found that cold-formed steel walls paired with resilient channels and proper insulation can match—or outperform—typical wood-frame walls when it comes to everyday sound control.
            </p>
            <p>
              In practical terms, that means a calmer home. Bedrooms stay quieter. Conversations in one room don&rsquo;t travel as easily to the next. And because steel doesn&rsquo;t dry out or shift over time, you avoid the pops, squeaks, and little movements that are common in wood-framed homes.
            </p>
            <p className="font-bold text-foreground">
              With steel, the quiet isn&rsquo;t something you have to chase. It comes built in.
            </p>
          </div>

          <h3 className="text-2xl mb-8 font-bold text-foreground">Sound Control: Wood vs. Steel Walls</h3>
          <p className="text-lg text-muted-foreground mb-10">How Much Noise Actually Gets Through?</p>

          <Card className="p-8 bg-white border-2 border-muted/50 rounded-2xl shadow-md mb-10">
            <h4 className="text-xl mb-6 font-bold text-foreground">TV-in-the-Next-Room Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-bold text-foreground">Wall Type</th>
                    <th className="text-left p-4 font-bold text-foreground">Typical STC Range</th>
                    <th className="text-left p-4 font-bold text-foreground">What You Hear in Real Life</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/20">
                    <td className="p-4 text-muted-foreground">Standard Wood-Stud Wall</td>
                    <td className="p-4 font-bold text-foreground">36–40</td>
                    <td className="p-4 text-muted-foreground">TV dialogue is clear and understandable. Loud voices carry easily.</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/20">
                    <td className="p-4 text-muted-foreground">Upgraded Wood-Stud Wall</td>
                    <td className="p-4 font-bold text-foreground">45–52</td>
                    <td className="p-4 text-muted-foreground">TV becomes muffled; some words still recognizable.</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/20">
                    <td className="p-4 text-muted-foreground">Standard Steel-Stud Wall</td>
                    <td className="p-4 font-bold text-sage">47–50</td>
                    <td className="p-4 text-muted-foreground">Dialogue is hard to follow; mostly general noise.</td>
                  </tr>
                  <tr className="hover:bg-muted/20">
                    <td className="p-4 text-muted-foreground">Engineered Steel-Stud Wall</td>
                    <td className="p-4 font-bold text-sage">55–60+</td>
                    <td className="p-4 text-muted-foreground">You may barely notice the TV is on; excellent bedroom privacy.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-8 bg-white border-2 border-muted/50 rounded-2xl shadow-md mb-10">
            <h4 className="text-xl mb-6 font-bold text-foreground">Side-by-Side: Same Wall, Different Stud Material</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-bold text-foreground">Assembly Type</th>
                    <th className="text-left p-4 font-bold text-foreground">Wood Studs STC</th>
                    <th className="text-left p-4 font-bold text-foreground">Steel Studs STC</th>
                    <th className="text-left p-4 font-bold text-foreground">Difference</th>
                    <th className="text-left p-4 font-bold text-foreground">Everyday Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/20">
                    <td className="p-4 text-muted-foreground">1-layer drywall + insulation</td>
                    <td className="p-4 text-foreground">36</td>
                    <td className="p-4 font-bold text-sage">47</td>
                    <td className="p-4 text-sage">+11</td>
                    <td className="p-4 text-muted-foreground">Steel dramatically cuts intelligible speech.</td>
                  </tr>
                  <tr className="hover:bg-muted/20">
                    <td className="p-4 text-muted-foreground">2 layers drywall + Green Glue + insulation</td>
                    <td className="p-4 text-foreground">52</td>
                    <td className="p-4 font-bold text-sage">56</td>
                    <td className="p-4 text-sage">+4</td>
                    <td className="p-4 text-muted-foreground">Steel reduces TV/audio clarity even further.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-8 bg-muted/20 border-l-8 border-muted rounded-2xl">
            <h4 className="text-xl mb-6 font-bold text-foreground">What STC Actually Means</h4>
            <p className="text-muted-foreground mb-6">STC (Sound Transmission Class) measures how much sound a wall blocks. Higher numbers = quieter homes.</p>
            <div className="space-y-4">
              {[
                { range: '35–40', meaning: 'You hear TV and speech clearly.' },
                { range: '45–50', meaning: 'You hear muffled TV; some words still recognizable.' },
                { range: '50–55', meaning: 'Speech clarity drops; mostly a soft background hum.' },
                { range: '55–60+', meaning: 'Excellent privacy; TV rarely noticeable.' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b pb-3 last:border-0">
                  <span className="font-bold text-foreground">{item.range}</span>
                  <span className="text-muted-foreground">{item.meaning}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <Separator className="my-16" />

        {/* Environmental Impact */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-sage/10 rounded-xl flex items-center justify-center shadow-sm">
              <Leaf className="w-7 h-7 text-sage" />
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Environmental Impact & Sustainability</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Card className="p-8 bg-white border-2 border-sage/20 rounded-2xl shadow-md">
              <h3 className="text-xl mb-6 font-bold text-foreground">Steel Framing</h3>
              <ul className="space-y-4">
                {[
                  { icon: CheckCircle2, text: '98% recyclable — Steel is infinitely recyclable without quality loss' },
                  { icon: CheckCircle2, text: '25% recycled content — Most steel framing contains recycled material' },
                  { icon: CheckCircle2, text: 'Zero waste — Precision manufacturing eliminates onsite waste' },
                  { icon: CheckCircle2, text: '100+ year lifespan — Longer building life reduces replacement cycles' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <item.icon className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-white border-2 border-muted/50 rounded-2xl shadow-sm">
              <h3 className="text-xl mb-6 font-bold text-foreground">Wood Framing</h3>
              <ul className="space-y-4">
                {[
                  { icon: TreePine, text: 'Renewable resource — Trees can be replanted and regrown' },
                  { icon: Leaf, text: 'Carbon sequestration — Wood stores carbon absorbed during growth' },
                  { icon: XCircle, text: '10-15% waste — Onsite cutting generates significant waste' },
                  { icon: XCircle, text: 'Deforestation concerns — Depends on sustainable forestry practices' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <item.icon className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-muted/20 border-l-8 border-muted rounded-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Note:</strong> Both materials can be sustainable when sourced responsibly. Steel's longer lifespan and recyclability make it appealing for long-term projects, while certified sustainable lumber (FSC-certified) can be an excellent renewable choice.
            </p>
          </Card>
        </section>

        <Separator className="my-16" />

        {/* When to Choose Each Material */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shadow-sm">
              <Award className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">When to Choose Each Material</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-10 bg-sage/5 border-2 border-sage rounded-2xl shadow-md">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-8 h-8 text-sage" />
                <h3 className="text-2xl font-bold text-foreground">Choose Steel If You Want:</h3>
              </div>
              <ul className="space-y-6">
                {[
                  { title: 'Speed', desc: 'Frame up in 4-5 days, not 2-3 weeks' },
                  { title: 'Durability', desc: 'Zero rot, termites, or warping—ever' },
                  { title: 'Predictable costs', desc: 'Locked-in pricing, no lumber market swings' },
                  { title: 'Low maintenance', desc: 'Minimal upkeep over decades' },
                  { title: 'Fire resistance', desc: 'Non-combustible with insurance discounts' },
                  { title: 'Wide spans', desc: 'Better strength-to-weight for open floor plans' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-sage" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground mb-1">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-10 bg-muted/20 border-2 border-muted rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <Home className="w-8 h-8 text-muted-foreground" />
                <h3 className="text-2xl font-bold text-foreground">Choose Wood If You Want:</h3>
              </div>
              <ul className="space-y-6">
                {[
                  { title: 'Lower upfront cost', desc: '10-15% cheaper initial material/labor' },
                  { title: 'Traditional methods', desc: 'Familiar to most builders and tradespeople' },
                  { title: 'Local availability', desc: 'Lumber yards everywhere, easy to source' },
                  { title: 'Natural material', desc: 'Renewable resource with carbon storage' },
                  { title: 'Design flexibility', desc: 'Easy onsite modifications and adjustments' },
                  { title: 'Time isn\'t critical', desc: 'You can afford 2-3 extra weeks of framing' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground mb-1">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Common Myths */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-terracotta/10 rounded-xl flex items-center justify-center shadow-sm">
              <XCircle className="w-7 h-7 text-terracotta" />
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Common Myths Debunked</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                myth: 'Steel homes are always more expensive',
                reality: 'While steel materials cost 10-15% more, the 75% faster construction saves significant labor and carrying costs. Factor in lower insurance, zero maintenance for pests/rot, and predictable pricing, and steel often costs less over the project lifecycle.'
              },
              {
                myth: 'Steel conducts cold and makes homes freezing',
                reality: 'Thermal bridging is easily solved with continuous exterior insulation—a best practice in modern construction. Steel homes routinely achieve R-20 to R-30 wall assemblies, meeting or exceeding Canadian energy codes.'
              },
              {
                myth: 'You can\'t get permits for steel-framed homes',
                reality: 'Cold-form steel is fully compliant with Canadian building codes. Municipalities consistently approve these structures because engineering is precise and predictable.'
              },
              {
                myth: 'Steel blocks Wi-Fi and cell signals',
                reality: "This is a common concern but unfounded. Steel studs don't create a Faraday cage—there are gaps, openings, windows, and doors. Our clients report zero connectivity issues. Read our full analysis of this myth."
              }
            ].map((item, i) => (
              <Card key={i} className="p-8 bg-white border-l-8 border-terracotta rounded-2xl shadow-md">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-4 font-bold text-terracotta">Myth: "{item.myth}"</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Reality:</strong> {item.reality}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* The Bottom Line */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shadow-sm">
              <Award className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">The Bottom Line</h2>
          </div>

          <Card className="p-10 bg-primary text-white rounded-2xl shadow-xl mb-10">
            <p className="text-xl leading-relaxed mb-6">
              While both materials have their place, <strong>steel emerges as the clear winner for most Canadian construction projects in 2026</strong>—especially when you look beyond just upfront costs.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Steel's compelling advantages:
            </p>
            <ul className="space-y-4 mt-6">
              {[
                'Dramatic speed advantage: 4-5 day onsite framing vs. 2-4 weeks with wood—get into the next construction phase faster and reduce carrying costs',
                "Superior durability: Won't rot, warp, twist, or attract termites. Maintains dimensional stability for decades",
                'Weather independence: Factory-built precision means no weather delays, warped studs, or moisture concerns',
                'Long-term cost savings: Lower insurance premiums, reduced maintenance, better energy efficiency, and higher resale value',
                "Labor shortage proof: Less reliant on skilled framers—a massive advantage in today's tight labor market",
                'Consistent quality: Engineered precision and factory conditions eliminate the variability of site-built construction',
                'Stronger structure: Superior strength-to-weight ratio, better wind and seismic resistance'
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <span className="text-white/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              The 10-15% upfront premium? It&rsquo;s increasingly offset by rising lumber costs, labor rates, and the time value of money. When you factor in faster project completion, reduced financing costs, lower insurance, and decades of maintenance savings, steel often costs less over the building&rsquo;s lifetime.
            </p>
            <p>
              <strong className="text-foreground">Wood still makes sense when:</strong> You&rsquo;re on an extremely tight budget with no flexibility, have a reliable framing crew locked in at good rates, aren&rsquo;t facing time pressure, and are building in a traditional residential area where wood is standard.
            </p>
          </div>

          <Card className="p-10 bg-sage/5 border-l-8 border-sage rounded-2xl">
            <p className="text-xl font-bold text-foreground mb-6">Our verdict:</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For ADUs, rental properties, commercial projects, or any build where speed, durability, and long-term value matter, <strong className="text-foreground">steel is the smart choice</strong>. The market is catching up to what builders have known for years—cold-formed steel framing simply delivers better results for most modern construction projects.
            </p>
          </Card>
        </section>

        <Separator className="my-16" />

        {/* Author Bio */}
        <section className="mb-16">
          <Card className="p-10 bg-muted/20 rounded-2xl">
            <div className="flex items-start gap-6 mb-6">
              <ImageWithFallback 
                src={johnMontgomeryPhoto}
                alt="John Montgomery"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="flex-1">
                <p className="text-sm text-primary font-bold mb-1">Author</p>
                <h3 className="text-xl mb-1 font-bold">John Montgomery</h3>
                <p className="text-muted-foreground font-medium">President, Cold Form Steel Canada</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              John Montgomery is a Canadian builder with decades of experience in steel construction. He leads the SteelBuilt Group and works directly with engineers across the country.
            </p>
          </Card>
        </section>

        {/* Final CTA */}
        <section className="py-12">
           <Card className="bg-terracotta p-10 md:p-14 text-white text-center rounded-3xl shadow-2xl border-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to Choose Your Material?</h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
                Every project is unique. Let's look at your specific goals, budget, and location to see if cold-form steel is the right fit for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-terracotta hover:bg-white/90 font-bold h-16 px-12 text-xl rounded-xl border-0 shadow-xl transition-transform hover:scale-105"
                >
                  Request a Quote
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('models')}
                  className="border-2 border-white text-white hover:bg-white hover:text-terracotta font-bold h-16 px-12 text-xl rounded-xl transition-transform hover:scale-105"
                >
                  Explore Our Models
                </Button>
              </div>
           </Card>
        </section>
      </article>
    </div>
  );
}
