import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, CheckCircle2, XCircle, DollarSign, Calendar, Zap, Shield, Home, TrendingUp, Ruler, CloudSun, Award, Volume2, Leaf, Flame, Bug, Droplet, Watch, TreePine } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArticleSchema } from '../schema/ArticleSchema';
import { HeadMeta } from '../HeadMeta';
import { shareArticle } from '../../utils/share';
import { CloudinaryImages } from '../../config/cloudinary-urls';

// GitHub URLs for article images
const steelFrameImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Learning%20Centre/Steel%20vs.%20Wood-%20Full%20Breakdown.jpeg';
const johnMontgomeryPhoto = CloudinaryImages.learning.johnMontgomery;

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
        datePublished="2026-01-01"
        dateModified="2026-01-14"
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
            Back to Learning Centre
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
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Badge className="mb-4 bg-terracotta text-white border-0 font-bold uppercase tracking-wider text-[10px] px-3">
              Comparisons
            </Badge>
            <h1 className="text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
              Steel vs. Wood: Full Breakdown
            </h1>
            <div className="flex items-center gap-4 text-white/90">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">10 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-2xl leading-relaxed text-muted-foreground font-light mb-8">
            This isn't your typical construction comparison. We're not here to say wood is outdated or steel is perfect. Both have their place, but for ADUs, accessory dwelling units, and smaller home builds in Canada, one option is pulling ahead—and the reasons might surprise you.
          </p>
        </div>

        {/* Visual Comparison Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">At a Glance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Calendar,
                title: 'Build Time',
                steel: 'Shell up in 5 days',
                wood: '2-4 weeks for framing',
                winner: 'steel'
              },
              {
                icon: DollarSign,
                title: 'Material Cost',
                steel: 'Premium',
                wood: 'Budget-friendly',
                winner: 'wood'
              },
              {
                icon: Flame,
                title: 'Fire Resistance',
                steel: '100% fireproof (G550 galvanized steel)',
                wood: 'Requires fire retardant treatment',
                winner: 'steel'
              },
              {
                icon: Bug,
                title: 'Pest Resistance',
                steel: 'Immune',
                wood: 'Vulnerable',
                winner: 'steel'
              },
              {
                icon: Droplet,
                title: 'Moisture Resistance',
                steel: 'Galvanized coating protects',
                wood: 'Prone to rot and decay',
                winner: 'steel'
              },
              {
                icon: Watch,
                title: 'Lifespan',
                steel: '100+ years',
                wood: '30-50 years',
                winner: 'steel'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 bg-white border-2 border-muted/50 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-terracotta" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                      <div className="space-y-2">
                        <div className={`flex items-start gap-2 ${item.winner === 'steel' ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {item.winner === 'steel' ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <div className="w-5 h-5 flex-shrink-0" />
                          )}
                          <span className="font-medium">Steel: {item.steel}</span>
                        </div>
                        <div className={`flex items-start gap-2 ${item.winner === 'wood' ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {item.winner === 'wood' ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <div className="w-5 h-5 flex-shrink-0" />
                          )}
                          <span className="font-medium">Wood: {item.wood}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Cost Deep Dive */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">The Cost Conversation</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl leading-relaxed text-muted-foreground">
              Let's get real: cold-form steel costs <strong>more upfront</strong> than traditional wood framing. But here's where most comparisons stop—and where you need to keep reading.
            </p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-terracotta/5 to-terracotta/10 border-2 border-terracotta/20 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Real-World Cost Breakdown (560 sq ft ADU)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-3 h-3 bg-terracotta rounded-full" />
                  Cold-Form Steel
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Materials:</span>
                    <span className="font-bold text-foreground">$45,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Labor (5 days):</span>
                    <span className="font-bold text-foreground">$12,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Crane rental:</span>
                    <span className="font-bold text-foreground">$2,500</span>
                  </li>
                  <li className="flex justify-between pt-3 border-t">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold text-foreground text-xl">$59,500</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-3 h-3 bg-sage rounded-full" />
                  Wood Framing
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Materials:</span>
                    <span className="font-bold text-foreground">$32,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Labor (2-3 weeks):</span>
                    <span className="font-bold text-foreground">$18,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Additional costs:</span>
                    <span className="font-bold text-foreground">$1,500</span>
                  </li>
                  <li className="flex justify-between pt-3 border-t">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold text-foreground text-xl">$51,500</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-muted-foreground mb-6">
              <strong>Initial difference: $8,000 more for steel.</strong>
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground">
              But here's what changes the equation: steel is <strong>75% faster to install</strong> (5 days vs 2-3 weeks), which means your carrying costs drop significantly. And over 30 years? Wood requires repairs, rot mitigation, and potential pest treatment. Steel doesn't.
            </p>
          </div>
        </div>

        <Separator className="my-16" />

        {/* Speed & Efficiency */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Speed: Why It Actually Matters</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl leading-relaxed text-muted-foreground">
              When we say "shell up in 5 days," we're not exaggerating. Here's the actual timeline:
            </p>
          </div>

          <Card className="p-8 bg-white border-2 border-muted/50">
            <div className="space-y-6">
              {[
                { day: 'Day 1', task: 'Foundation inspection & site prep', time: '4 hours' },
                { day: 'Day 2', task: 'Crane delivery + Floor frame assembly', time: '6 hours' },
                { day: 'Day 3', task: 'Wall panels installed', time: '8 hours' },
                { day: 'Day 4', task: 'Roof trusses & panels installed', time: '7 hours' },
                { day: 'Day 5', task: 'Structural inspection & weatherproofing', time: '5 hours' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 pb-6 border-b last:border-0">
                  <div className="w-20 h-20 bg-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-terracotta">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-foreground">{item.day}</h4>
                      <Badge className="bg-sage/10 text-sage border-sage/20 font-bold">{item.time}</Badge>
                    </div>
                    <p className="text-muted-foreground">{item.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="prose prose-lg max-w-none mt-8">
            <p className="text-xl leading-relaxed text-muted-foreground">
              Wood framing takes <strong>2-4 weeks</strong> for the same stage. That's not a knock on wood—it's just physics. Wood requires measuring, cutting, and assembling on-site. Steel arrives pre-cut, labeled, and ready to bolt together like precision LEGO.
            </p>
          </div>
        </div>

        <Separator className="my-16" />

        {/* Durability Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Durability: What Happens After Year 5?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-8 bg-white border-2 border-muted/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-terracotta" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Cold-Form Steel</h3>
                  <p className="text-sm text-terracotta font-bold">G550 Galvanized Coating</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: CheckCircle2, text: '100% fireproof (won\'t ignite)', color: 'text-green-600' },
                  { icon: CheckCircle2, text: 'Immune to termites and pests', color: 'text-green-600' },
                  { icon: CheckCircle2, text: 'Won\'t rot, warp, or shrink', color: 'text-green-600' },
                  { icon: CheckCircle2, text: 'Moisture-resistant galvanized coating', color: 'text-green-600' },
                  { icon: CheckCircle2, text: 'Lifespan: 100+ years', color: 'text-green-600' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <Icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-foreground font-medium">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </Card>

            <Card className="p-8 bg-white border-2 border-muted/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TreePine className="w-6 h-6 text-sage" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Wood Framing</h3>
                  <p className="text-sm text-sage font-bold">Traditional Construction</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: XCircle, text: 'Requires fire-retardant treatment', color: 'text-red-600' },
                  { icon: XCircle, text: 'Vulnerable to termites and carpenter ants', color: 'text-red-600' },
                  { icon: XCircle, text: 'Can warp, crack, and shrink over time', color: 'text-red-600' },
                  { icon: XCircle, text: 'Susceptible to rot in damp conditions', color: 'text-red-600' },
                  { icon: XCircle, text: 'Lifespan: 30-50 years (with maintenance)', color: 'text-red-600' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <Icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-muted-foreground font-medium">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Droplet className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">What About Rust?</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The most common concern we hear: "Won't steel rust?" Short answer: not with G550 galvanized coating. This is the same grade used in coastal industrial buildings and bridges—designed specifically for corrosive environments.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In Canada's climate, our galvanized steel frames have shown zero corrosion after 15+ years of field testing. Wood, on the other hand, needs regular inspection for rot, especially in basements and crawl spaces.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Separator className="my-16" />

        {/* Environmental Impact */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Environmental Impact</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl leading-relaxed text-muted-foreground">
              This is where things get nuanced. Wood wins the "renewable resource" badge, but the full lifecycle tells a different story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white border-2 border-muted/50">
              <div className="flex items-start gap-3 mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-foreground">Steel Advantages</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>100% recyclable at end of life</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Longer lifespan = fewer rebuilds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Precision manufacturing = minimal waste</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Superior insulation performance</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border-2 border-muted/50">
              <div className="flex items-start gap-3 mb-4">
                <TreePine className="w-6 h-6 text-sage" />
                <h3 className="text-xl font-bold text-foreground">Wood Advantages</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Renewable resource (when sustainably harvested)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Natural carbon sequestration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lower embodied energy in production</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Biodegradable at end of life</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        <Separator className="my-16" />

        {/* When to Choose What */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">So Which Should You Choose?</h2>
          
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-terracotta/5 to-terracotta/10 border-2 border-terracotta/20">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Choose Cold-Form Steel If:</h3>
              <ul className="space-y-3">
                {[
                  'You want the fastest build timeline (5 days vs weeks)',
                  'Fire resistance is a priority (wildfire zones, insurance savings)',
                  'You\'re building in a pest-prone or high-moisture area',
                  'Long-term durability matters more than upfront cost',
                  'You want predictable, stable pricing (no lumber market volatility)',
                  'You\'re building an ADU for rental income (faster ROI)'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-sage/5 to-sage/10 border-2 border-sage/20">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Choose Wood Framing If:</h3>
              <ul className="space-y-3">
                {[
                  'Upfront cost is your primary concern',
                  'You have access to skilled local framers',
                  'You\'re building a custom design with complex angles',
                  'Your site has crane access challenges',
                  'You prefer traditional construction methods',
                  'You\'re not concerned about long-term maintenance'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        <Separator className="my-16" />

        {/* Expert Quote */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 mb-16">
          <div className="flex items-start gap-6">
            <img 
              src={johnMontgomeryPhoto}
              alt="John Montgomery"
              className="w-24 h-24 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <blockquote className="text-xl leading-relaxed text-foreground mb-4 italic">
                "I've been in construction for 30 years, and I've seen both materials perform well and fail spectacularly. The truth is, steel isn't better because it's newer—it's better because it's engineered. Every piece is cut to within 1mm tolerance in a factory, not eyeballed on-site. That precision translates to speed, consistency, and longevity."
              </blockquote>
              <div>
                <p className="font-bold text-foreground">John Montgomery</p>
                <p className="text-sm text-muted-foreground">President, Cold Form Steel Canada</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom Line */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-foreground">The Bottom Line</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-muted-foreground mb-6">
              Wood isn't going anywhere. It's versatile, renewable, and familiar to most contractors. But for ADUs, small homes, and projects where speed, durability, and fire resistance matter, cold-form steel is becoming the smarter choice—especially in Canada.
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground mb-6">
              The upfront cost difference narrows when you factor in labor savings, insurance discounts, and the fact that you'll never replace rotted studs or treat for termites. And if you're building for rental income? Getting your ADU shell-ready in 5 days instead of a month could mean the difference between breaking even and making a profit in year one.
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground">
              <strong>Still deciding? Let's talk specifics about your project.</strong>
            </p>
          </div>
        </div>

        {/* CTA */}
        <Card className="p-8 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-2 border-terracotta/20 text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Ready to See Steel in Action?</h3>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Get a personalized cost breakdown for your project—wood vs. steel, side by side.
          </p>
          <Button 
            size="lg"
            className="bg-terracotta hover:bg-terracotta/90 text-white font-bold h-14 px-10 text-lg border-0 shadow-lg"
            onClick={() => onNavigate('contact')}
          >
            Request a Quote
          </Button>
        </Card>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Continue Learning</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'How the 5 Day Build Works',
                description: 'Step-by-step walkthrough of the assembly process',
                onClick: () => onNavigate('five-day-build')
              },
              {
                title: 'Does Steel Framing Rust?',
                description: 'What homeowners need to know about cold formed steel in Canadian climates',
                onClick: () => onNavigate('steel-rust')
              },
              {
                title: 'Cost Drivers Explained',
                description: 'Understanding materials, labor, and site preparation costs',
                onClick: () => onNavigate('cost-drivers')
              }
            ].map((article, index) => (
              <Card 
                key={index}
                className="p-6 bg-white border-2 border-muted/50 hover:shadow-lg transition-all cursor-pointer group"
                onClick={article.onClick}
              >
                <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-terracotta transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
