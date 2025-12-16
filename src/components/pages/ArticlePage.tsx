import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, AlertCircle, TrendingUp, Shield, Zap, Award } from 'lucide-react';
import hybridFramingDiagram from 'figma:asset/7505e6b6a6239d497cabc2d4340489bd1ac0faf8.png';

interface ArticlePageProps {
  onNavigate: (page: string) => void;
  article: {
    title: string;
    readTime: string;
    category: string;
    description?: string;
    excerpt?: string;
    image?: string;
  };
}

export function ArticlePage({ onNavigate, article }: ArticlePageProps) {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Cost & Financing': 'bg-[#c8694e]',
      'Comparisons': 'bg-[#c8694e]',
      'Process & Permits': 'bg-[#c8694e]',
      'Problems & Concerns': 'bg-[#c8694e]',
      'Stories & Results': 'bg-[#c8694e]'
    };
    return colors[category] || 'bg-[#c8694e]';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-white border-b">
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

      {/* Hero Image (if available) */}
      {article.image && (
        <div className="w-full h-[400px] bg-slate-100 relative">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Badge className={`${getCategoryColor(article.category)} text-white mb-4`}>
            {article.category}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6">
            {article.title}
          </h1>
          
          {(article.description || article.excerpt) && (
            <p className="text-xl text-muted-foreground mb-6">
              {article.description || article.excerpt}
            </p>
          )}

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>October 16, 2025</span>
            </div>
            <Button variant="ghost" size="sm" className="ml-auto gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <div className="space-y-10">
          {/* Introduction */}
          <div className="text-lg leading-relaxed space-y-4">
            <p className="text-muted-foreground">
              If you're exploring framing options for your next build, you've probably heard the debate: steel vs. wood.
            </p>
            <p className="text-muted-foreground">
              And if you've tried to find a straight answer online, you know how confusing it gets. Some say steel's too expensive. Others say wood can't last. The truth? Both have their place — but when you look at the full picture, cold-formed steel (CFS) offers distinct advantages in strength, precision, build speed, and maintenance, especially in Canada's demanding climate.
            </p>
            <p className="text-muted-foreground">
              Let's break it down — no jargon, no fluff — just facts.
            </p>
          </div>

          <Separator />

          {/* Section 1 */}
          <section className="space-y-6">
            <h2 className="text-3xl scroll-mt-20" id="comparing">1. What We're Comparing</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-[#877e71]/10 to-white border-2 border-[#877e71]/30">
                <h3 className="text-xl mb-3 flex items-center gap-2">
                  <span className="text-2xl">🪵</span>
                  Wood Framing
                </h3>
                <p className="text-muted-foreground">
                  The classic "stick-built" approach using dimensional lumber (studs, joists, rafters, sheathing). Familiar, adaptable, and widely used across Canada.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-[#665f55]/10 to-white border-2 border-[#665f55]/30">
                <h3 className="text-xl mb-3 flex items-center gap-2">
                  <span className="text-2xl">🏗️</span>
                  Cold-Formed Steel (CFS)
                </h3>
                <p className="text-muted-foreground">
                  Thin galvanized steel sections (C-studs, tracks, channels) manufactured to exact dimensions, immune to rot, pests, and warping.
                </p>
              </Card>
            </div>

            <div className="bg-[#c8694e]/10 border-l-4 border-[#c8694e] p-6 rounded-r-lg">
              <p className="mb-0">
                <strong>Hybrid approach:</strong> Some builders combine both — steel for structural walls, wood for interiors — optimized for cost and performance.
              </p>
            </div>
          </section>

          <Separator />

          {/* Section 2 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#c8694e]/10 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-[#c8694e]" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 scroll-mt-20" id="strength">2. Strength & Structural Performance</h2>
                <p className="text-lg text-muted-foreground">
                  When it comes to structural integrity, steel wins on consistency and load capacity.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Cold-formed steel offers a higher strength-to-weight ratio than wood, allowing longer spans, fewer columns, and more open layouts — all while maintaining rigidity.
              </p>
              <p>
                Wood, though capable for shorter spans (10–20 ft typical in homes), can creep, warp, and twist as it gains or loses moisture. Over time, that movement leads to cracks, uneven drywall, and sticking doors.
              </p>
            </div>

            {/* Strength Comparison Visualization */}
            <Card className="overflow-hidden bg-gradient-to-br from-[#665f55]/10 via-[#665f55]/10 to-[#665f55]/20 border-2 border-[#665f55]/30">
              <div className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <h3 className="text-xl mb-2">Maximum Span Comparison</h3>
                  <p className="text-sm text-muted-foreground">Floor joist spans under equal residential loads (40 psf live load)</p>
                </div>

                <div className="space-y-8">
                  {/* Cold-Formed Steel */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-[#c8694e]"></div>
                        <span>Cold-Formed Steel Joist</span>
                      </div>
                      <span className="text-2xl text-[#c8694e]">32 ft</span>
                    </div>
                    <div className="relative h-16 bg-gradient-to-r from-[#665f55] via-[#665f55] to-[#665f55] rounded-xl shadow-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center px-4">
                        <div className="flex-1 flex items-center justify-between text-white text-xs">
                          <span>0 ft</span>
                          <span>16 ft</span>
                          <span className="font-semibold">32 ft span</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#8b9d83]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Longer clear spans, fewer supports</span>
                    </div>
                  </div>

                  {/* Dimensional Lumber */}
                  <div className="space-y-3 opacity-90">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-[#877e71]"></div>
                        <span>2×10 Lumber (typical)</span>
                      </div>
                      <span className="text-2xl text-[#877e71]">16 ft</span>
                    </div>
                    <div className="relative h-16 rounded-xl overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#877e71] via-[#877e71] to-[#877e71] rounded-xl shadow-lg" style={{ width: '50%' }}></div>
                      <div className="absolute inset-0 flex items-center px-4">
                        <div className="w-1/2 flex items-center justify-between text-white text-xs">
                          <span>0 ft</span>
                          <span className="font-semibold">16 ft span</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#877e71]">
                      <AlertCircle className="w-4 h-4" />
                      <span>Requires mid-span support for longer runs</span>
                    </div>
                  </div>
                </div>

                {/* Key Insight */}
                <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-[#665f55]/20">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl text-[#c8694e] mb-1">2×</div>
                      <div className="text-xs">Longer Spans</div>
                    </div>
                    <div>
                      <div className="text-3xl text-[#c8694e] mb-1">60%</div>
                      <div className="text-xs">Lighter Weight</div>
                    </div>
                    <div>
                      <div className="text-3xl text-[#c8694e] mb-1">0%</div>
                      <div className="text-xs">Warping or Twisting</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <Separator />

          {/* Section 3 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#c8694e]/10 p-3 rounded-lg">
                <Award className="w-6 h-6 text-[#c8694e]" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 scroll-mt-20" id="durability">3. Durability in Canadian Conditions</h2>
                <p className="text-lg text-muted-foreground">
                  Steel framing stands up better to Canada's extremes — from salt-laden coasts to freeze–thaw winters.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-5 bg-white border-[#8b9d83]/30">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="mb-0">Immune to rot, mold, and insects</p>
                  </div>
                </div>
              </Card>
              <Card className="p-5 bg-white border-[#8b9d83]/30">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="mb-0">Dimensionally stable year-round</p>
                  </div>
                </div>
              </Card>
              <Card className="p-5 bg-white border-[#8b9d83]/30">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="mb-0">Corrosion-resistant with G90 galvanizing</p>
                  </div>
                </div>
              </Card>
            </div>

            <p className="text-muted-foreground">
              By contrast, wood can decay, attract termites, or warp under fluctuating moisture levels — all of which mean higher repair costs down the road.
            </p>
          
            <Card className="p-6 bg-gradient-to-r from-[#c8694e]/10 to-[#c8694e]/5 border-l-4 border-[#c8694e]">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#c8694e] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2">Maintenance matters:</h3>
                  <p className="text-muted-foreground mb-0">
                    A lifecycle study by the Canadian Sheet Steel Building Institute (CSSBI) found that CFS systems require significantly less maintenance than wood over a 30-year span, especially in humid or coastal climates【CSSBI, 2020】.
                  </p>
                </div>
              </div>
            </Card>

            {/* Maintenance Cost Over Time Visualization */}
            <Card className="overflow-hidden bg-gradient-to-br from-[#665f55]/10 via-[#665f55]/15 to-[#665f55]/20 border-2 border-[#665f55]/30">
              <div className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <h3 className="text-xl mb-2">Cumulative Maintenance Costs Over 30 Years</h3>
                  <p className="text-sm text-muted-foreground">Typical residential structure in Canadian climate</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-inner">
                  {/* Chart area */}
                  <div className="relative h-72">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-muted-foreground pr-2">
                      <span>$12K</span>
                      <span>$9K</span>
                      <span>$6K</span>
                      <span>$3K</span>
                      <span>$0</span>
                    </div>

                    {/* Chart content */}
                    <div className="ml-12 relative" style={{ height: 'calc(100% - 2rem)' }}>
                      {/* Grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        <div className="border-t border-dashed border-slate-200"></div>
                        <div className="border-t border-dashed border-slate-200"></div>
                        <div className="border-t border-dashed border-slate-200"></div>
                        <div className="border-t border-dashed border-slate-200"></div>
                        <div className="border-t border-slate-300"></div>
                      </div>

                      {/* Wood curve (rising) */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="woodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#877e71" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="#877e71" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0,100 Q 25,95 33,85 T 50,70 Q 67,55 83,35 T 100,10 L 100,100 Z"
                          fill="url(#woodGradient)"
                        />
                        <path
                          d="M 0,100 Q 25,95 33,85 T 50,70 Q 67,55 83,35 T 100,10"
                          fill="none"
                          stroke="#877e71"
                          strokeWidth="0.5"
                        />
                      </svg>

                      {/* Steel line (flat/minimal) */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="steelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#665f55" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="#665f55" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0,100 L 100,90 L 100,100 Z"
                          fill="url(#steelGradient)"
                        />
                        <path
                          d="M 0,100 L 100,90"
                          fill="none"
                          stroke="#665f55"
                          strokeWidth="0.5"
                        />
                      </svg>

                      {/* Legend markers */}
                      <div className="absolute top-4 right-4 space-y-2 bg-white/90 backdrop-blur-sm p-3 rounded-lg border shadow-sm">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-4 h-0.5 bg-[#877e71]"></div>
                          <span>Wood Framing</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-4 h-0.5 bg-[#665f55]"></div>
                          <span>Steel Framing</span>
                        </div>
                      </div>
                    </div>

                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-muted-foreground pt-2 border-t border-slate-300">
                      <span>0 yr</span>
                      <span>10 yr</span>
                      <span>20 yr</span>
                      <span>30 yr</span>
                    </div>
                  </div>
                </div>

                {/* Key Findings */}
                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  <div className="bg-[#8b9d83]/20 rounded-lg p-4 text-center">
                    <div className="text-3xl text-[#8b9d83] mb-1">$3K</div>
                    <div className="text-xs">Steel 30-year maintenance</div>
                  </div>
                  <div className="bg-[#877e71]/20 rounded-lg p-4 text-center opacity-90">
                    <div className="text-3xl text-[#877e71] mb-1">$11K</div>
                    <div className="text-xs">Wood 30-year maintenance</div>
                  </div>
                </div>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Wood maintenance includes: rot repair, pest treatment, warping corrections, moisture damage
                </p>
              </div>
            </Card>
          </section>

          <Separator />

          {/* Section 4 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#c8694e]/10 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-[#c8694e]" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 scroll-mt-20" id="fire-safety">4. Fire Safety & Insurance Implications</h2>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#877e71]/10 to-[#877e71]/20 border-2 border-[#877e71]/30 rounded-lg p-8 text-center">
              <p className="text-2xl mb-2">
                Steel doesn't burn. Wood does.
              </p>
              <p className="text-lg text-muted-foreground mb-0">
                That single difference drives real savings and safety.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                In wildfire or high-risk zones (like B.C. and Alberta's interior), non-combustible steel framing can lower both insurance premiums and fire risk.
              </p>
              <p>
                Research from the National Research Council of Canada (NRC) and a 2024 Wiley review confirms that CFS walls maintain structural integrity longer than wood assemblies during fire exposure (NRC, Fire and Materials Journal, 2024).
              </p>
            </div>

            <Card className="overflow-hidden bg-slate-50 border-slate-200">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/kAETeV60EYQ"
                  title="Steel vs. Wood Fire Exposure Test"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🔥</span>
                  <span className="text-sm">Fire Resistance Comparison</span>
                </div>
                <p className="text-sm text-muted-foreground mb-0">Watch how steel and wood framing perform under fire exposure</p>
              </div>
            </Card>
          </section>

          <Separator />

          {/* Section 5 */}
          <section className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-[#c8694e] to-[#c8694e] p-3 rounded-lg shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 scroll-mt-20" id="energy">5. Energy Efficiency & Thermal Bridging</h2>
              </div>
            </div>

            {/* Opening Statement */}
            <Card className="overflow-hidden bg-gradient-to-br from-[#877e71]/10 via-[#877e71]/15 to-[#877e71]/20 border-2 border-[#877e71]/30">
              <div className="p-8">
                <div className="space-y-3 text-center">
                  <p className="text-xl text-muted-foreground">
                    It's true — steel conducts heat more readily than wood.
                  </p>
                  <p className="text-2xl">
                    <strong>But here's what most people don't realize:</strong>
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Modern detailing eliminates that drawback. With the right design, steel-framed homes can be just as efficient — and often even better insulated — than traditional wood construction.
                  </p>
                </div>
              </div>
            </Card>

            {/* Why it matters */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-[#877e71]/20 p-2 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-[#877e71]" />
                </div>
                <h3 className="text-2xl">Why it matters</h3>
              </div>
              
              <Card className="bg-gradient-to-r from-[#665f55]/10 to-[#665f55]/10 border-[#665f55]/20 p-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Every material transfers heat at a different rate.<br />
                    <strong>Wood</strong> is a poor conductor — it slows heat down.<br />
                    <strong>Steel?</strong> It's a great conductor — unless you design around it.
                  </p>
                </div>
              </Card>

              <div className="bg-[#877e71]/10 border-l-4 border-[#877e71] p-6 rounded-r-lg">
                <p className="text-muted-foreground mb-3">
                  If you don't, you risk creating <strong className="text-[#877e71]">thermal bridges</strong> — small pathways where heat (or cold) moves through your walls more easily. These can:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-[#877e71] mt-1 flex-shrink-0" />
                    <span className="text-sm">Lower your wall's R-value (its ability to resist heat flow)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-[#877e71] mt-1 flex-shrink-0" />
                    <span className="text-sm">Cause cold spots indoors</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-[#877e71] mt-1 flex-shrink-0" />
                    <span className="text-sm">Trigger condensation or frost in winter</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-[#877e71] mt-1 flex-shrink-0" />
                    <span className="text-sm">Make your HVAC work overtime</span>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-r from-[#8b9d83]/10 to-[#8b9d83]/20 border-2 border-[#8b9d83]/30 p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground mb-0">
                    That's why smart steel assemblies use <strong>thermal breaks</strong> and <strong>continuous insulation</strong> to stop heat flow before it starts.
                  </p>
                </div>
              </Card>
            </div>

            <Separator className="my-8" />

            {/* What R-value actually means */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-[#c8694e]/10 p-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-[#c8694e]" />
                </div>
                <h3 className="text-2xl">What "R-value" actually means</h3>
              </div>
              
              <Card className="overflow-hidden bg-gradient-to-br from-[#665f55]/10 via-[#665f55]/10 to-[#665f55]/20 border-2 border-[#665f55]/30">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <p className="text-xl text-muted-foreground mb-2">
                      R-value measures how well a wall resists heat transfer.
                    </p>
                    <p className="text-lg">
                      <strong>The higher the number, the better.</strong>
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-4xl text-[#c8694e] mb-1">R-22</div>
                      </div>
                      <div className="text-xs text-muted-foreground">to</div>
                      <div className="text-center">
                        <div className="text-4xl text-[#c8694e] mb-1">R-30</div>
                      </div>
                    </div>
                    <p className="text-sm text-center text-muted-foreground mb-0">
                      Canadian homes need this effective R-value range
                    </p>
                  </div>
                </div>
              </Card>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>"Effective"</strong> means the entire wall assembly — not just what's stuffed between the studs, but also the framing, sheathing, and cladding.
                </p>
                <Card className="bg-[#665f55]/10 border-[#665f55]/30 p-5">
                  <p className="mb-0">
                    Because steel transfers heat, what's <em>between</em> the studs doesn't tell the full story. That's why builders add insulation <em>around</em> the studs, too — which can actually be more effective than traditional methods.
                  </p>
                </Card>
              </div>
            </div>

            <Separator className="my-8" />

            {/* How steel walls stay energy-smart */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl">How steel walls stay energy-smart</h3>
              </div>
              
              <p className="text-lg text-muted-foreground">
                To block thermal bridging, today's builders use a smart four-part system:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30 hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <span>1</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg mb-2">Continuous Exterior Insulation (CEI)</h4>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-0 ml-14">
                      A layer of rigid foam or mineral wool that wraps the house — like a warm jacket that keeps heat in and cold out.
                    </p>
                  </div>
                  <div className="h-2 bg-primary"></div>
                </Card>

                <Card className="overflow-hidden bg-gradient-to-br from-secondary/5 to-secondary/10 border-2 border-secondary/30 hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <span>2</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg mb-2">Thermal Break Strips or Clips</h4>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-0 ml-14">
                      Small spacers that keep the steel from directly touching exterior materials — think of them as insulation pads that cut off the heat path.
                    </p>
                  </div>
                  <div className="h-2 bg-secondary"></div>
                </Card>

                <Card className="overflow-hidden bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/30 hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <span>3</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg mb-2">Wider Stud Spacing (24" o.c.)</h4>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-0 ml-14">
                      Fewer studs = fewer thermal bridges. More insulation can fill the wall uninterrupted.
                    </p>
                  </div>
                  <div className="h-2 bg-accent"></div>
                </Card>

                <Card className="overflow-hidden bg-gradient-to-br from-primary/10 to-primary/20 border-2 border-primary/40 hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md">
                        <span>4</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg mb-2">High-Density Cavity Insulation</h4>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-0 ml-14">
                      Dense materials like mineral wool increase R-value and improve sound control.
                    </p>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-primary to-primary/80"></div>
                </Card>
              </div>
            </div>

            <Separator className="my-8" />

            {/* What the research shows */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-slate-700" />
                </div>
                <h3 className="text-2xl">What the research shows</h3>
              </div>
              
              <Card className="bg-slate-50 border-slate-300 p-6">
                <p className="text-muted-foreground mb-4">
                  According to:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="mb-1"><strong>NRC Canada (2020)</strong></p>
                      <p className="text-sm text-muted-foreground mb-0">Thermal Evaluation of a Highly Insulated Steel-Stud Wall</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="mb-1"><strong>BC Housing (2018)</strong></p>
                      <p className="text-sm text-muted-foreground mb-0">R22+ Effective Walls Guide</p>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-0">
                  …steel wall systems that include CEI and thermal break clips can <strong>meet or exceed</strong> energy code targets under Ontario SB-12 and the National Building Code (Part 9).
                </p>
              </Card>
            </div>

            {/* Key Takeaway */}
            <Card className="overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-3 border-accent/40 shadow-xl">
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-full shadow-lg flex-shrink-0">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xl mb-4">
                      <strong>💡 In plain terms:</strong>
                    </p>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5 space-y-2">
                      <p className="text-lg mb-2">
                        Wood walls rely on insulation <strong className="text-secondary">between</strong> studs.
                      </p>
                      <p className="text-lg mb-0">
                        Steel walls rely on insulation <strong className="text-primary">around</strong> studs — and when done right, that's often the smarter move.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-3 bg-gradient-to-r from-primary via-accent to-secondary"></div>
            </Card>
          </section>

          <Separator />

          {/* Section 6 */}
          <section className="space-y-6">
            <h2 className="text-3xl scroll-mt-20" id="sound">6. Sound & Comfort</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Most people assume a steel home must be louder—because metal carries vibration, right?
                It's a fair question, and it's one we hear all the time.
              </p>
              <p>
                But here's the truth: when steel walls are built the way modern homes are built today, they're actually quieter than what most people are used to with wood. NRC Canada even tested this in a full-scale study and found that cold-formed steel walls paired with resilient channels and proper insulation can match—or outperform—typical wood-frame walls when it comes to everyday sound control.
              </p>
              <p>
                In practical terms, that means a calmer home.
                Bedrooms stay quieter. Conversations in one room don't travel as easily to the next. And because steel doesn't dry out or shift over time, you avoid the pops, squeaks, and little movements that are common in wood-framed homes.
              </p>
              <p>
                With steel, the quiet isn't something you have to chase. It comes built in.
              </p>
            </div>

            <Card className="p-8 bg-slate-50 border-slate-200">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl mb-2">Sound Control: Wood vs. Steel Walls</h3>
                  <p className="text-muted-foreground">How Much Noise Actually Gets Through?</p>
                </div>

                {/* TV-in-the-Next-Room Comparison */}
                <div className="space-y-3">
                  <h4 className="text-lg">TV-in-the-Next-Room Comparison</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-slate-300">
                          <th className="text-left py-3 px-4 bg-white">Wall Type</th>
                          <th className="text-left py-3 px-4 bg-white">Typical STC Range</th>
                          <th className="text-left py-3 px-4 bg-white">What You Hear in Real Life</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-200">
                          <td className="py-3 px-4 bg-white">Standard Wood-Stud Wall</td>
                          <td className="py-3 px-4 bg-white">36–40</td>
                          <td className="py-3 px-4 bg-white">TV dialogue is clear and understandable. Loud voices carry easily.</td>
                        </tr>
                        <tr className="border-b border-slate-200">
                          <td className="py-3 px-4 bg-white">Upgraded Wood-Stud Wall</td>
                          <td className="py-3 px-4 bg-white">45–52</td>
                          <td className="py-3 px-4 bg-white">TV becomes muffled; some words still recognizable.</td>
                        </tr>
                        <tr className="border-b border-slate-200 bg-[#665f55]/5">
                          <td className="py-3 px-4">Standard Steel-Stud Wall</td>
                          <td className="py-3 px-4">47–50</td>
                          <td className="py-3 px-4">Dialogue is hard to follow; mostly general noise.</td>
                        </tr>
                        <tr className="bg-[#665f55]/5">
                          <td className="py-3 px-4">Engineered Steel-Stud Wall</td>
                          <td className="py-3 px-4">55–60+</td>
                          <td className="py-3 px-4">You may barely notice the TV is on; excellent bedroom privacy.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <Separator />

                {/* Side-by-Side Comparison */}
                <div className="space-y-3">
                  <h4 className="text-lg">Side-by-Side: Same Wall, Different Stud Material</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-slate-300">
                          <th className="text-left py-3 px-4 bg-white">Assembly Type</th>
                          <th className="text-left py-3 px-4 bg-white">Wood Studs STC</th>
                          <th className="text-left py-3 px-4 bg-white">Steel Studs STC</th>
                          <th className="text-left py-3 px-4 bg-white">Difference</th>
                          <th className="text-left py-3 px-4 bg-white">Everyday Impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-200">
                          <td className="py-3 px-4 bg-white">1-layer drywall + insulation</td>
                          <td className="py-3 px-4 bg-white">36</td>
                          <td className="py-3 px-4 bg-white">47</td>
                          <td className="py-3 px-4 bg-white text-[#c8694e]">+11</td>
                          <td className="py-3 px-4 bg-white">Steel dramatically cuts intelligible speech.</td>
                        </tr>
                        <tr className="border-b border-slate-200">
                          <td className="py-3 px-4 bg-white">2 layers drywall + Green Glue + insulation</td>
                          <td className="py-3 px-4 bg-white">52</td>
                          <td className="py-3 px-4 bg-white">56</td>
                          <td className="py-3 px-4 bg-white text-[#c8694e]">+4</td>
                          <td className="py-3 px-4 bg-white">Steel reduces TV/audio clarity even further.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <Separator />

                {/* What STC Means */}
                <div className="space-y-3">
                  <h4 className="text-lg">What STC Actually Means</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-slate-300">
                          <th className="text-left py-3 px-4 bg-white">STC Level</th>
                          <th className="text-left py-3 px-4 bg-white">Everyday Interpretation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-200">
                          <td className="py-3 px-4 bg-white">35–40</td>
                          <td className="py-3 px-4 bg-white">You hear TV and speech clearly.</td>
                        </tr>
                        <tr className="border-b border-slate-200">
                          <td className="py-3 px-4 bg-white">45–50</td>
                          <td className="py-3 px-4 bg-white">You hear muffled TV; some words still recognizable.</td>
                        </tr>
                        <tr className="border-b border-slate-200">
                          <td className="py-3 px-4 bg-white">50–55</td>
                          <td className="py-3 px-4 bg-white">Speech clarity drops; mostly a soft background hum.</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 bg-white">55–60+</td>
                          <td className="py-3 px-4 bg-white">Excellent privacy; TV rarely noticeable.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <Separator />

                {/* Citations */}
                <div className="space-y-2">
                  <h4 className="text-lg">Citations</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Soundproofing Calculator — Steel vs Wood Stud Assemblies (STC 36 vs 47; STC 52 vs 56).</li>
                    <li>Steeler Inc. — Steel studs provide ~5–6 STC point increase over wood.</li>
                    <li>AISC "Sounds of Silence" — Steel stud wall assemblies commonly achieve STC 56 with proper layering.</li>
                    <li>NIH/ORF Acoustics Guide — STC roughly equals dB reduction and maps to real-world hearing thresholds.</li>
                  </ol>
                </div>
              </div>
            </Card>
          </section>

          <Separator />

          {/* Section 7 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#c8694e]/10 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-[#c8694e]" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 scroll-mt-20" id="cost">7. Cost: Upfront vs. Lifetime</h2>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Two modern cost analyses —
              </p>
              <ul className="space-y-2 ml-6">
                <li>• CSSBI, The True Cost of Cold-Formed Steel vs. Wood Framing (2020), and</li>
                <li>• SFIA / R.A. Smith Study (2020, CISC-ICCA) —</li>
              </ul>
              <p>
                show that while CFS materials may cost ~10–20% more upfront, total installed and lifecycle costs are often comparable or even lower once maintenance, insurance, and waste are factored in.
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-r from-accent/10 to-primary/10 border-l-4 border-accent">
              <div className="flex items-start gap-3">
                <span className="text-3xl flex-shrink-0">"</span>
                <div>
                  <p className="text-lg italic mb-2">
                    Framing represents roughly 20% of total building cost. When construction-phase insurance is included, the cost difference between cold-formed steel and wood framing drops to less than 1%.
                  </p>
                  <p className="mb-0">
                    <strong>— R.A. Smith Inc., "Costs to Build with Cold-Formed Steel Versus a Wood-Framed Building," SFIA Study (2020)</strong>
                  </p>
                </div>
              </div>
            </Card>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left">Factor</th>
                    <th className="p-4 text-left">Cold-Formed Steel (CFS)</th>
                    <th className="p-4 text-left">Wood Framing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">Material Cost</td>
                    <td className="p-4">~10–20% higher per unit</td>
                    <td className="p-4">Lower but volatile</td>
                  </tr>
                  <tr className="bg-muted/30 border-b">
                    <td className="p-4">Labor</td>
                    <td className="p-4">Slightly higher (fastening)</td>
                    <td className="p-4">Faster for trained carpenters</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Maintenance</td>
                    <td className="p-4 text-[#8b9d83]">✓ Minimal</td>
                    <td className="p-4 text-[#877e71]">⚠ High</td>
                  </tr>
                  <tr className="bg-muted/30 border-b">
                    <td className="p-4">Insurance</td>
                    <td className="p-4 text-[#8b9d83]">✓ Often lower premiums</td>
                    <td className="p-4 text-[#877e71]">⚠ Higher in risk zones</td>
                  </tr>
                  <tr>
                    <td className="p-4">Lifespan</td>
                    <td className="p-4 text-[#8b9d83]">✓ 100+ years</td>
                    <td className="p-4">40–70 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Lifetime Cost Visualization */}
            <Card className="overflow-hidden bg-gradient-to-br from-[#665f55]/10 via-[#665f55]/15 to-[#665f55]/20 border-2 border-[#665f55]/30">
              <div className="p-8 md:p-10">
                <div className="text-center mb-12">
                  <h3 className="text-xl mb-2">Total Cost Comparison: Steel vs. Wood Framing</h3>
                  <p className="text-sm text-muted-foreground mb-2">Typical 2,000 sq.ft Canadian home — Build Cost + 30-Year Maintenance</p>
                  <p className="text-xs text-muted-foreground">According to SFIA (R.A. Smith Inc., 2020), framing costs differ by &lt;1% when construction-phase insurance is included.</p>
                </div>

                <div className="space-y-8">
                  {/* Cold-Formed Steel */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-[#8b9d83]"></div>
                        <span>Cold-Formed Steel</span>
                      </div>
                      <span className="text-2xl text-[#8b9d83]">$603,000</span>
                    </div>
                    <div className="relative h-20 bg-gradient-to-r from-[#7a8c75] via-[#8b9d83] to-[#8b9d83] rounded-xl shadow-lg overflow-hidden" style={{ width: '99%' }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-around text-white text-xs px-4">
                        <div className="text-center">
                          <div>Initial Build: $600,000</div>
                        </div>
                        <div className="text-center">
                          <div>Maintenance: $3,000</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#8b9d83]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Lower lifetime cost despite slightly higher upfront investment</span>
                    </div>
                  </div>

                  {/* Wood Framing */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-[#877e71]"></div>
                        <span>Wood Framing</span>
                      </div>
                      <span className="text-2xl text-[#877e71]">$609,000</span>
                    </div>
                    <div className="relative h-20 bg-gradient-to-r from-[#766d62] via-[#877e71] to-[#877e71] rounded-xl shadow-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-around text-white text-xs px-4">
                        <div className="text-center">
                          <div>Initial Build: $598,000</div>
                        </div>
                        <div className="text-center">
                          <div>Maintenance: $11,000</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#877e71]">
                      <AlertCircle className="w-4 h-4" />
                      <span>Higher long-term costs due to rot, pests, and moisture-related repairs</span>
                    </div>
                  </div>
                </div>

                {/* Key Insight */}
                <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-xl p-6 border-2 border-[#8b9d83]/30">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl text-[#8b9d83] mb-2">$6,000</div>
                    <div className="text-sm mb-1">Saved Over 30 Years With Steel</div>
                    <div className="text-xs text-muted-foreground">Based on comparable upfront cost and lower maintenance</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-100 border-slate-300">
              <p className="mb-3"><strong>📊 Sources:</strong></p>
              <ul className="space-y-2 mb-0 text-sm text-muted-foreground">
                <li>• CSSBI: The True Cost of Cold-Formed Steel v. Wood Framing (2020)</li>
                <li>• SFIA / R.A. Smith Cost Study PDF (2020)</li>
              </ul>
            </Card>
          </section>

          <Separator />

          {/* Section 7A */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#877e71]/10 p-3 rounded-lg">
                <Zap className="w-6 h-6 text-[#877e71]" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 scroll-mt-20" id="build-time">7A. Build Time: Faster From Frame to Finish</h2>
                <p className="text-lg text-muted-foreground">
                  One major advantage builders often overlook? <strong>Speed.</strong>
                </p>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-r from-[#877e71]/10 to-[#665f55]/10 border-2 border-[#877e71]/30">
              <div className="text-center">
                <p className="text-3xl mb-2">4-5 days</p>
                <p className="text-muted-foreground mb-4">vs. 6-12 months for conventional stick framing</p>
                <p className="mb-0">
                  Cold-formed steel framing — especially when pre-cut or panelized
                </p>
              </div>
            </Card>

            <p className="text-lg text-muted-foreground">
              That's not just faster; it's weather-resistant and predictable.
            </p>

            <div>
              <h3 className="text-xl mb-4">Why it matters:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4 bg-white border-[#8b9d83]/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Less weather downtime</p>
                  </div>
                </Card>
                <Card className="p-4 bg-white border-[#8b9d83]/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Lower labor hours</p>
                  </div>
                </Card>
                <Card className="p-4 bg-white border-[#8b9d83]/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Quicker lock-up stage</p>
                  </div>
                </Card>
                <Card className="p-4 bg-white border-[#8b9d83]/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Faster ROI for developers</p>
                  </div>
                </Card>
              </div>
            </div>

            <Card className="p-5 bg-slate-100 border-slate-300">
              <p className="text-sm mb-0"><strong>📊 Source:</strong> Metal Construction News, Light-Gauge Steel vs. Wood Framing (2024)</p>
            </Card>
          </section>

          <Separator />

          {/* Section 7B */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#c8694e]/10 p-3 rounded-lg">
                <Award className="w-6 h-6 text-[#c8694e]" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 scroll-mt-20" id="precision">7B. Precision: The Hidden Advantage You Can See</h2>
              </div>
            </div>

            {/* Enhanced Precision Comparison Graphic */}
            <Card className="overflow-hidden bg-gradient-to-br from-[#665f55]/10 via-[#665f55]/15 to-[#665f55]/20 border-2 border-[#665f55]/30">
              <div className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <h3 className="text-2xl mb-2">Manufacturing Tolerance Comparison</h3>
                  <p className="text-muted-foreground">The precision that makes everything else easier</p>
                </div>
                

                <div className="space-y-12">
                  {/* Cold-Formed Steel - Superior Precision */}
                  <div className="space-y-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-3 h-3 rounded-full bg-[#8b9d83]"></div>
                          <span className="text-lg">Cold-Formed Steel</span>
                        </div>
                        <p className="text-sm text-muted-foreground ml-6">Factory precision manufacturing</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl text-[#8b9d83]">±1/16"</div>
                        <div className="text-xs text-[#8b9d83] mt-1">±1.6mm tolerance</div>
                      </div>
                    </div>
                    
                    {/* Visual bar representation */}
                    <div className="relative">
                      {/* Background reference line */}
                      <div className="h-20 bg-gradient-to-r from-[#8b9d83] via-[#8b9d83] to-[#8b9d83] rounded-xl shadow-lg relative overflow-hidden">
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center bg-[#8b9d83]">
                          <span className="text-white tracking-wide">PERFECTLY ALIGNED</span>
                        </div>
                      </div>
                      
                      {/* Tolerance indicator */}
                      <div className="relative h-16 flex items-center justify-center">
                        <div className="absolute left-1/2 -translate-x-1/2 w-8 flex justify-between">
                          <div className="w-0.5 h-12 bg-[#8b9d83]"></div>
                          <div className="w-0.5 h-12 bg-[#8b9d83]"></div>
                        </div>
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md border-2 border-[#8b9d83]">
                          <div className="text-xs text-[#8b9d83] whitespace-nowrap flex items-center gap-2">
                            <span>←</span>
                            <span>1/16" variation</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comparative spacer */}
                  <div className="flex items-center justify-center">
                    <div className="text-center px-8 py-3 bg-white rounded-full shadow-sm border-2 border-dashed border-slate-300">
                      <span className="text-sm">vs.</span>
                    </div>
                  </div>

                  {/* Typical Lumber - Standard Tolerance */}
                  <div className="space-y-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-3 h-3 rounded-full bg-[#877e71]"></div>
                          <span className="text-lg">Dimensional Lumber</span>
                        </div>
                        <p className="text-sm text-muted-foreground ml-6">Natural material variation</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl text-[#877e71]">±1/4"</div>
                        <div className="text-xs text-[#877e71] mt-1">±6.4mm tolerance</div>
                      </div>
                    </div>
                    
                    {/* Visual bar representation */}
                    <div className="relative opacity-90">
                      {/* Background reference line */}
                      <div className="h-20 bg-gradient-to-r from-[#877e71] via-[#877e71] to-[#877e71] rounded-xl shadow-lg relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white tracking-wide">VARIABLE ALIGNMENT</span>
                        </div>
                      </div>
                      
                      {/* Tolerance indicator - 4x wider */}
                      <div className="relative h-16 flex items-center justify-center">
                        <div className="absolute left-1/2 -translate-x-1/2 w-32 flex justify-between">
                          <div className="w-0.5 h-12 bg-[#877e71]"></div>
                          <div className="w-0.5 h-12 bg-[#877e71]"></div>
                        </div>
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md border-2 border-[#877e71]">
                          <div className="text-xs text-[#877e71] whitespace-nowrap flex items-center gap-2">
                            <span>←</span>
                            <span>1/4" variation (4× wider)</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key insight callout */}
                <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-[#665f55]/30">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-[#665f55]/10 to-[#665f55]/20 rounded-lg">
                      <div className="text-5xl text-[#665f55] mb-2">4×</div>
                      <div className="text-sm">More Precise</div>
                      <div className="text-xs text-muted-foreground mt-1">Than dimensional lumber</div>
                    </div>
                    <div className="flex items-center">
                      <div>
                        <h4 className="mb-3">This precision means:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#8b9d83] flex-shrink-0" />
                            <span>Perfectly straight walls</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#8b9d83] flex-shrink-0" />
                            <span>No shimming or corrections</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#8b9d83] flex-shrink-0" />
                            <span>Flawless finishes every time</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                In other words, steel builds stay true — forever.
              </p>
              <p>
                Every detail lines up, and you don't waste time shimming, planing, or correcting warps.
              </p>
            </div>

            <Card className="p-5 bg-slate-100 border-slate-300">
              <p className="text-sm mb-0"><strong>📐 Source:</strong> CSSBI, CFS Framing: Dimensional Stability and Precision (2021)</p>
            </Card>
          </section>

          <Separator />

          {/* Section 8 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#c8694e]/10 p-3 rounded-lg">
                <span className="text-2xl">🌍</span>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 scroll-mt-20" id="sustainability">8. Sustainability & Environmental Impact</h2>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Steel is infinitely recyclable and often made from 25–35% recycled content in Canada.
              </p>
              <p>
                Wood, while renewable, depends on responsible forestry and has higher waste rates due to decay or offcuts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-[#665f55]/10 to-[#665f55]/20 border-2 border-[#665f55]/30">
                <div className="text-center">
                  <span className="text-4xl mb-3 block">♻️</span>
                  <h3 className="text-xl mb-2">Steel</h3>
                  <p className="mb-0">Circular economy material</p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-[#877e71]/10 to-[#877e71]/20 border-2 border-[#877e71]/30">
                <div className="text-center">
                  <span className="text-4xl mb-3 block">🌲</span>
                  <h3 className="text-xl mb-2">Wood</h3>
                  <p className="mb-0">Renewable but replaceable</p>
                </div>
              </Card>
            </div>

            {/* Enhanced Sustainability Infographic */}
            <Card className="overflow-hidden bg-gradient-to-br from-[#665f55]/10 via-[#665f55]/15 to-[#665f55]/20 border-2 border-[#665f55]/30">
              <div className="p-8 md:p-12">
                <div className="text-center mb-12">
                  <h3 className="text-2xl mb-2">Material Lifecycle Comparison</h3>
                  <p className="text-muted-foreground">Understanding the environmental footprint</p>
                </div>
              
                <div className="grid md:grid-cols-2 gap-12">
                {/* Steel Lifecycle - Circular */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#665f55]/20 to-[#665f55]/10 rounded-full mb-4 shadow-md">
                      <span className="text-4xl">♻️</span>
                    </div>
                    <h4 className="text-xl mb-2">Cold-Formed Steel</h4>
                    <p className="text-[#665f55]">Infinitely Recyclable</p>
                  </div>

                  {/* Circular diagram */}
                  <div className="relative aspect-square max-w-[300px] mx-auto">
                    <svg viewBox="0 0 240 240" className="w-full h-full" style={{ shapeRendering: 'geometricPrecision' }}>
                      <defs>
                        <marker id="arrowhead-steel" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                          <path d="M 0 0 L 12 6 L 0 12 L 3 6 Z" fill="#665f55" />
                        </marker>
                        <filter id="glow-steel">
                          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                        <radialGradient id="center-gradient-steel">
                          <stop offset="0%" stopColor="#f7f7f7" />
                          <stop offset="100%" stopColor="#e5e5e5" />
                        </radialGradient>
                      </defs>
                      
                      {/* Background circle */}
                      <circle cx="120" cy="120" r="88" fill="none" stroke="#e5e5e5" strokeWidth="12" opacity="0.25"/>
                      
                      {/* Animated circular arrow */}
                      <path 
                        d="M 120 32 A 88 88 0 1 1 119.5 32" 
                        fill="none" 
                        stroke="#665f55" 
                        strokeWidth="8" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        markerEnd="url(#arrowhead-steel)"
                        filter="url(#glow-steel)"
                      />
                      
                      {/* Center circle with gradient */}
                      <circle cx="120" cy="120" r="45" fill="url(#center-gradient-steel)" stroke="#665f55" strokeWidth="3"/>
                      <text x="120" y="138" textAnchor="middle" fontSize="40">🏗️</text>
                    </svg>

                    {/* Labels around circle - positioned more precisely */}
                    <div className="absolute" style={{ top: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
                      <div className="text-xs text-center bg-white px-4 py-2 rounded-full shadow-md border-2 border-[#665f55]/30 font-medium">
                        Production
                      </div>
                    </div>
                    <div className="absolute" style={{ right: '-16px', top: '50%', transform: 'translateY(-50%)' }}>
                      <div className="text-xs text-center bg-white px-4 py-2 rounded-full shadow-md border-2 border-[#665f55]/30 font-medium">
                        Building
                      </div>
                    </div>
                    <div className="absolute" style={{ bottom: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
                      <div className="text-xs text-center bg-white px-4 py-2 rounded-full shadow-md border-2 border-[#665f55]/30 font-medium">
                        Recycling
                      </div>
                    </div>
                    <div className="absolute" style={{ left: '-16px', top: '50%', transform: 'translateY(-50%)' }}>
                      <div className="text-xs text-center bg-white px-4 py-2 rounded-full shadow-md border-2 border-[#665f55]/30 font-medium">
                        Remelting
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-gradient-to-br from-[#8b9d83]/20 to-[#8b9d83]/30 rounded-xl p-5 space-y-3 border border-[#8b9d83]/40 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#8b9d83] rounded-full p-1 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm mb-0"><strong className="text-[#1f1d1a]">25-35%</strong> recycled content in Canada</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#8b9d83] rounded-full p-1 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm mb-0"><strong className="text-[#1f1d1a]">100%</strong> recyclable at end of life</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#8b9d83] rounded-full p-1 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm mb-0"><strong className="text-[#1f1d1a]">No degradation</strong> in quality when recycled</p>
                    </div>
                  </div>
                </div>

                {/* Wood Lifecycle - Linear with waste */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#8b9d83]/30 to-[#8b9d83]/20 rounded-full mb-4 shadow-md">
                      <span className="text-4xl">🌲</span>
                    </div>
                    <h4 className="text-xl mb-2">Lumber</h4>
                    <p className="text-[#8b9d83]">Renewable Resource</p>
                  </div>

                  {/* Linear flow diagram */}
                  <div className="relative aspect-square max-w-[300px] mx-auto">
                    <svg viewBox="0 0 240 240" className="w-full h-full" style={{ shapeRendering: 'geometricPrecision' }}>
                      <defs>
                        <marker id="arrowhead-wood" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                          <path d="M 0 0 L 12 6 L 0 12 L 3 6 Z" fill="#8b9d83" />
                        </marker>
                        <marker id="arrowhead-waste" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                          <path d="M 0 0 L 10 5 L 0 10 L 2 5 Z" fill="#dc2626" opacity="0.75" />
                        </marker>
                        <radialGradient id="stage-gradient-wood">
                          <stop offset="0%" stopColor="#e8ebe7" />
                          <stop offset="100%" stopColor="#d4dbd1" />
                        </radialGradient>
                        <filter id="shadow-wood">
                          <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.15"/>
                        </filter>
                      </defs>
                      
                      {/* Main flow path */}
                      <path 
                        d="M 120 40 L 120 205" 
                        fill="none" 
                        stroke="#8b9d83" 
                        strokeWidth="8" 
                        strokeLinecap="round"
                        markerEnd="url(#arrowhead-wood)"
                        opacity="0.9"
                      />
                      
                      {/* Waste branches */}
                      <path 
                        d="M 120 78 Q 140 83, 175 98" 
                        stroke="#dc2626" 
                        strokeWidth="4" 
                        strokeLinecap="round"
                        fill="none"
                        strokeDasharray="8 4" 
                        opacity="0.75"
                        markerEnd="url(#arrowhead-waste)"
                      />
                      <path 
                        d="M 120 128 Q 140 133, 175 148" 
                        stroke="#dc2626" 
                        strokeWidth="4" 
                        strokeLinecap="round"
                        fill="none"
                        strokeDasharray="8 4" 
                        opacity="0.75"
                        markerEnd="url(#arrowhead-waste)"
                      />
                      <path 
                        d="M 120 178 Q 140 183, 175 198" 
                        stroke="#dc2626" 
                        strokeWidth="4" 
                        strokeLinecap="round"
                        fill="none"
                        strokeDasharray="8 4" 
                        opacity="0.75"
                        markerEnd="url(#arrowhead-waste)"
                      />
                      
                      {/* Stage circles */}
                      <circle cx="120" cy="40" r="26" fill="url(#stage-gradient-wood)" stroke="#877e71" strokeWidth="3" filter="url(#shadow-wood)"/>
                      <text x="120" y="52" textAnchor="middle" fontSize="26">🌳</text>
                      
                      <circle cx="120" cy="103" r="26" fill="url(#stage-gradient-wood)" stroke="#877e71" strokeWidth="3" filter="url(#shadow-wood)"/>
                      <text x="120" y="115" textAnchor="middle" fontSize="26">🪚</text>
                      
                      <circle cx="120" cy="153" r="26" fill="url(#stage-gradient-wood)" stroke="#877e71" strokeWidth="3" filter="url(#shadow-wood)"/>
                      <text x="120" y="165" textAnchor="middle" fontSize="26">🏗️</text>
                      
                      <circle cx="120" cy="210" r="26" fill="url(#stage-gradient-wood)" stroke="#877e71" strokeWidth="3" filter="url(#shadow-wood)"/>
                      <text x="120" y="222" textAnchor="middle" fontSize="26">🗑️</text>
                      
                      {/* Waste indicators */}
                      <text x="190" y="106" fontSize="26" opacity="0.8">💨</text>
                      <text x="190" y="156" fontSize="26" opacity="0.8">♻️</text>
                      <text x="190" y="206" fontSize="26" opacity="0.8">🔥</text>
                    </svg>

                    {/* Labels */}
                    <div className="absolute" style={{ top: '10px', left: '0px' }}>
                      <div className="text-xs bg-white px-4 py-2 rounded-full shadow-md border-2 border-[#877e71]/30 font-medium">
                        Forest
                      </div>
                    </div>
                    <div className="absolute" style={{ top: '90px', left: '0px' }}>
                      <div className="text-xs bg-white px-4 py-2 rounded-full shadow-md border-2 border-[#877e71]/30 font-medium">
                        Milling
                      </div>
                    </div>
                    <div className="absolute" style={{ top: '140px', left: '0px' }}>
                      <div className="text-xs bg-white px-4 py-2 rounded-full shadow-md border-2 border-[#877e71]/30 font-medium">
                        Building
                      </div>
                    </div>
                    <div className="absolute" style={{ bottom: '2px', left: '0px' }}>
                      <div className="text-xs bg-white px-4 py-2 rounded-full shadow-md border-2 border-[#877e71]/30 font-medium whitespace-nowrap">
                        End of Life
                      </div>
                    </div>
                    
                    {/* Waste labels */}
                    <div className="absolute text-xs bg-red-50 px-3 py-1.5 rounded-full border border-red-200 text-red-700 font-medium" style={{ top: '90px', right: '0px' }}>
                      Offcuts
                    </div>
                    <div className="absolute text-xs bg-red-50 px-3 py-1.5 rounded-full border border-red-200 text-red-700 font-medium" style={{ top: '140px', right: '0px' }}>
                      Decay
                    </div>
                    <div className="absolute text-xs bg-red-50 px-3 py-1.5 rounded-full border border-red-200 text-red-700 font-medium" style={{ bottom: '2px', right: '0px' }}>
                      Disposal
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-gradient-to-br from-[#877e71]/10 to-[#877e71]/20 rounded-xl p-5 space-y-3 border border-[#877e71]/30 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#877e71] rounded-full p-1 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm mb-0"><strong className="text-[#1f1d1a]">Renewable</strong> with responsible forestry</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#877e71] rounded-full p-1 flex-shrink-0">
                        <AlertCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm mb-0"><strong className="text-[#1f1d1a]">Higher waste</strong> from offcuts & decay</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#877e71] rounded-full p-1 flex-shrink-0">
                        <AlertCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm mb-0"><strong className="text-[#1f1d1a]">Regrowth time:</strong> 40-80 years</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary comparison */}
              <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-xl p-8 border-2 border-[#665f55]/30">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center p-6 bg-gradient-to-br from-[#665f55]/20 to-[#665f55]/10 rounded-xl">
                      <div className="text-4xl mb-3">♻️</div>
                      <div className="text-2xl text-[#665f55] mb-2">∞</div>
                      <div className="text-sm">Infinite Lifecycle</div>
                      <div className="text-xs text-muted-foreground mt-2">No quality loss in recycling</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-[#877e71]/20 to-[#877e71]/10 rounded-xl opacity-90">
                      <div className="text-4xl mb-3">🌲</div>
                      <div className="text-2xl text-[#877e71] mb-2">40-80</div>
                      <div className="text-sm">Years to Regrow</div>
                      <div className="text-xs text-muted-foreground mt-2">With responsible forestry</div>
                    </div>
                  </div>
                </div>
              </div>
          </Card>
        </section>

          <Separator />

          {/* Section 9 */}
          <section className="space-y-6">
            <h2 className="text-3xl scroll-mt-20" id="buildability">9. Buildability & Contractor Skills</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Most crews start with wood — but modern CFS systems are easier than ever to learn.
              </p>
              <p>
                Pre-punched holes, self-drilling screws, and light components make framing fast and clean. Prefabricated kits can further reduce jobsite waste and assembly time.
              </p>
            </div>

            <Card className="p-6 bg-slate-50 border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🔧</span>
                <span className="text-sm text-slate-600">Placeholder for Video Content</span>
              </div>
              <p className="text-sm text-muted-foreground mb-0">Insert video: "First-time framer learns steel framing — what surprised him"</p>
            </Card>
          </section>

          <Separator />

          {/* Section 10 */}
          <section className="space-y-6">
            <h2 className="text-3xl scroll-mt-20" id="objections">10. Addressing Common Objections</h2>
            
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-[#c8694e] bg-gradient-to-r from-[#c8694e]/5 to-white">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-[#c8694e] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-2">"Steel is too expensive."</h3>
                    <p className="text-muted-foreground mb-0">
                      <strong>Reality:</strong> CSSBI & SFIA studies show lifecycle costs are similar once maintenance and insurance are included.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-[#665f55] bg-gradient-to-r from-[#665f55]/5 to-white">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-[#665f55] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-2">"Steel loses heat."</h3>
                    <p className="text-muted-foreground mb-0">
                      <strong>Reality:</strong> Continuous insulation eliminates thermal bridging. (NRC, BC Housing)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-[#877e71] bg-gradient-to-r from-[#877e71]/5 to-white">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-[#877e71] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-2">"Contractors don't know steel."</h3>
                    <p className="text-muted-foreground mb-0">
                      <strong>Reality:</strong> Prefab kits + short learning curve solve this.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-[#665f55] bg-gradient-to-r from-[#665f55]/5 to-white">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-[#665f55] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-2">"Steel rusts."</h3>
                    <p className="text-muted-foreground mb-0">
                      <strong>Reality:</strong> G90 galvanizing prevents corrosion, even in coastal zones.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-[#8b9d83] bg-gradient-to-r from-[#8b9d83]/5 to-white">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-2">"It's not eco-friendly."</h3>
                    <p className="text-muted-foreground mb-0">
                      <strong>Reality:</strong> Steel is fully recyclable and long-lived.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-[#f7f7f7] border-[#877e71]/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">💬</span>
                <span className="text-sm text-[#877e71]">Placeholder for Interactive Component</span>
              </div>
              <p className="text-sm text-muted-foreground mb-0">Insert expandable FAQ section</p>
            </Card>
          </section>

          <Separator />

          {/* Section 11 */}
          <section className="space-y-6">
            <h2 className="text-3xl scroll-mt-20" id="where-steel-excels">11. Where Steel Excels in Canada</h2>
            
            <p className="text-lg text-muted-foreground">
              Steel framing shines in:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-5 bg-gradient-to-br from-[#8b9d83]/10 to-[#8b9d83]/5 border-[#8b9d83]/30">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🌊</span>
                  <div>
                    <h3 className="text-lg mb-1">Coastal regions</h3>
                    <p className="text-sm text-muted-foreground mb-0">Corrosion-resistant</p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-[#665f55]/10 to-[#665f55]/5 border-[#665f55]/30">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">❄️</span>
                  <div>
                    <h3 className="text-lg mb-1">Prairies & northern climates</h3>
                    <p className="text-sm text-muted-foreground mb-0">Stable in cold and dry conditions</p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-[#c8694e]/10 to-[#c8694e]/5 border-[#c8694e]/30">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">��</span>
                  <div>
                    <h3 className="text-lg mb-1">High fire-risk areas</h3>
                    <p className="text-sm text-muted-foreground mb-0">Non-combustible safety</p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-[#8b9d83]/10 to-[#8b9d83]/5 border-[#8b9d83]/30">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">⚡</span>
                  <div>
                    <h3 className="text-lg mb-1">Energy-efficient homes</h3>
                    <p className="text-sm text-muted-foreground mb-0">Precision helps meet airtightness targets</p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-gradient-to-br from-[#877e71]/10 to-[#877e71]/5 border-[#877e71]/30">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🏘️</span>
                  <div>
                    <h3 className="text-lg mb-1">Multi-unit builds</h3>
                    <p className="text-sm text-muted-foreground mb-0">Speed + consistency</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Section 12 */}

          <Separator />

          {/* Section 13 */}
          <section className="space-y-6">
            <h2 className="text-3xl scroll-mt-20" id="conclusion">13. What This Means for You</h2>
            
            <p className="text-xl text-muted-foreground">
              Steel framing isn't about abandoning tradition — it's about building smarter for Canada's future.
            </p>

            <Card className="p-10 bg-gradient-to-br from-[#8b9d83]/5 via-[#8b9d83]/10 to-[#8b9d83]/5 border-2 border-[#8b9d83]/20 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-3xl mb-2">Why Choose Steel?</h3>
                <p className="text-muted-foreground">The advantages that matter most</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="flex items-start gap-4 bg-white/60 p-4 rounded-lg border border-[#8b9d83]/10 hover:border-[#8b9d83]/30 transition-all">
                  <div className="bg-[#8b9d83] p-2 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-lg block">Stronger and straighter</span>
                    <span className="text-sm text-muted-foreground">Precision-engineered consistency</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/60 p-4 rounded-lg border border-[#8b9d83]/10 hover:border-[#8b9d83]/30 transition-all">
                  <div className="bg-[#8b9d83] p-2 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-lg block">Faster to assemble</span>
                    <span className="text-sm text-muted-foreground">Reduced construction time</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/60 p-4 rounded-lg border border-[#8b9d83]/10 hover:border-[#8b9d83]/30 transition-all">
                  <div className="bg-[#8b9d83] p-2 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-lg block">Lower maintenance</span>
                    <span className="text-sm text-muted-foreground">No warping, rot, or pests</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/60 p-4 rounded-lg border border-[#8b9d83]/10 hover:border-[#8b9d83]/30 transition-all">
                  <div className="bg-[#8b9d83] p-2 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-lg block">Energy-efficient</span>
                    <span className="text-sm text-muted-foreground">Better thermal performance</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gradient-to-r from-[#8b9d83]/10 to-[#8b9d83]/5 p-4 rounded-lg border-2 border-[#8b9d83]/30 md:col-span-2 hover:border-[#8b9d83]/50 transition-all">
                  <div className="bg-[#8b9d83] p-2 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-lg block">Cheaper in the long run</span>
                    <span className="text-sm text-muted-foreground">Lower lifecycle costs and lasting value</span>
                  </div>
                </div>
              </div>
            </Card>

            <p className="text-lg text-center text-muted-foreground">
              If you're serious about durability, precision, and performance, cold-formed steel deserves a real look.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-6 bg-slate-50 border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📥</span>
                  <span className="text-sm text-slate-600">Placeholder for Download</span>
                </div>
                <p className="text-sm text-muted-foreground mb-0">Download our Full Steel vs. Wood Comparison Guide (PDF)</p>
              </Card>

              <Card className="p-6 bg-slate-50 border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🧮</span>
                  <span className="text-sm text-slate-600">Placeholder for Calculator</span>
                </div>
                <p className="text-sm text-muted-foreground mb-0">Estimate your 30-Year Cost Difference</p>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          {/* About Section */}
          <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border-2 border-primary/30 rounded-xl p-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl">About Cold Form Steel Canada</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  At Cold Form Steel Canada, we help Canadians build stronger, safer, and smarter structures.
                </p>
                <p>
                  Our CFS systems meet Ontario SB-12, NBC Part 9, and CSA S136 standards — and we back every frame with engineering, data, and experience.
                </p>
                <p className="text-xl">
                  <strong className="text-foreground">Smarter. Stronger. Faster. Canadian-built steel homes for real people.</strong>
                </p>
                <p className="mb-0">
                  Visit <strong className="text-primary">www.coldformsteelcanada.ca</strong> to learn more or start your next project.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Article Footer CTA */}
        <div className="border-t pt-12 mt-12">
          <Card className="p-8 bg-primary text-white">
            <h3 className="text-2xl mb-4 text-white">
              Ready to start your steel home project?
            </h3>
            <p className="mb-6 text-white/90">
              Get a personalized quote and see how much you can save with cold-form steel construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => onNavigate('models')}
                className="bg-[#c8694e] hover:bg-[#b5593d] text-white"
              >
                Calculate My Cost
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('contact')}
                className="bg-white text-[#c8694e] border-[#c8694e] hover:bg-[#c8694e] hover:text-white"
              >
                Talk to an Expert
              </Button>
            </div>
          </Card>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-muted py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8">Related Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
              <h4 className="mb-2">Related Article Title</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Brief description of a related article that readers might find helpful.
              </p>
              <Button 
                variant="link" 
                className="p-0 text-accent"
                onClick={() => onNavigate('learning')}
              >
                Read Article
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
              </div>
              <h4 className="mb-2">Another Related Article</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Brief description of another article that complements this topic.
              </p>
              <Button 
                variant="link" 
                className="p-0 text-accent"
                onClick={() => onNavigate('learning')}
              >
                Read Article
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
              <h4 className="mb-2">More Information</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Additional resources to help you learn more about this topic.
              </p>
              <Button 
                variant="link" 
                className="p-0 text-accent"
                onClick={() => onNavigate('learning')}
              >
                Read Article
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
