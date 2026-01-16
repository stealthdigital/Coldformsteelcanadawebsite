import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, AlertCircle, TrendingUp, Shield, Zap, Award } from 'lucide-react';

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
      'Cost & Financing': 'bg-terracotta',
      'Comparisons': 'bg-sage',
      'Process & Permits': 'bg-terracotta',
      'Problems & Concerns': 'bg-sage',
      'Stories & Results': 'bg-terracotta'
    };
    return colors[category] || 'bg-terracotta';
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
            Back to Learning Centre
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
          <Badge className={`${getCategoryColor(article.category)} text-white mb-4 border-0`}>
            {article.category}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6 font-bold text-foreground">
            {article.title}
          </h1>
          
          {(article.description || article.excerpt) && (
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {article.description || article.excerpt}
            </p>
          )}

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-terracotta" />
              <span>{article.readTime} read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-terracotta" />
              <span>January 14, 2026</span>
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
            <h2 className="text-3xl font-bold scroll-mt-20 text-foreground" id="comparing">1. What We're Comparing</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-muted/30 border-2 border-muted">
                <h3 className="text-xl mb-3 flex items-center gap-2 font-semibold">
                  <span className="text-2xl">🪵</span>
                  Wood Framing
                </h3>
                <p className="text-muted-foreground">
                  The classic "stick-built" approach using dimensional lumber (studs, joists, rafters, sheathing). Familiar, adaptable, and widely used across Canada.
                </p>
              </Card>

              <Card className="p-6 bg-terracotta/5 border-2 border-terracotta/20">
                <h3 className="text-xl mb-3 flex items-center gap-2 font-semibold">
                  <span className="text-2xl">🏗️</span>
                  Cold-Formed Steel (CFS)
                </h3>
                <p className="text-muted-foreground">
                  Thin galvanized steel sections (C-studs, tracks, channels) manufactured to exact dimensions, immune to rot, pests, and warping.
                </p>
              </Card>
            </div>

            <div className="bg-terracotta/10 border-l-4 border-terracotta p-6 rounded-r-lg">
              <p className="mb-0 text-muted-foreground font-medium">
                <strong className="text-terracotta">Hybrid approach:</strong> Some builders combine both — steel for structural walls, wood for interiors — optimized for cost and performance.
              </p>
            </div>
          </section>

          <Separator />

          {/* Section 2 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 font-bold scroll-mt-20 text-foreground" id="strength">2. Strength & Structural Performance</h2>
                <p className="text-lg text-muted-foreground">
                  When it comes to structural integrity, steel wins on consistency and load capacity.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Cold-formed steel offers a higher strength-to-weight ratio than wood, allowing longer spans, fewer columns, and more open layouts — all while maintaining rigidity.
              </p>
              <p>
                Wood, though capable for shorter spans (10–20 ft typical in homes), can creep, warp, and twist as it gains or loses moisture. Over time, that movement leads to cracks, uneven drywall, and sticking doors.
              </p>
            </div>

            {/* Strength Comparison Visualization */}
            <Card className="overflow-hidden bg-muted/20 border-2 border-muted p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl mb-2 font-semibold">Maximum Span Comparison</h3>
                <p className="text-sm text-muted-foreground font-medium">Floor joist spans under equal residential loads (40 psf live load)</p>
              </div>

              <div className="space-y-8">
                {/* Cold-Formed Steel */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-terracotta"></div>
                      <span className="font-medium text-foreground">Cold-Formed Steel Joist</span>
                    </div>
                    <span className="text-2xl text-terracotta font-bold">32 ft</span>
                  </div>
                  <div className="relative h-12 bg-terracotta/20 rounded-full overflow-hidden">
                    <div className="h-full bg-terracotta rounded-full w-full shadow-lg"></div>
                    <div className="absolute inset-0 flex items-center px-6">
                      <div className="flex-1 flex items-center justify-between text-white text-xs font-bold">
                        <span>0 ft</span>
                        <span>16 ft</span>
                        <span>32 ft span</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-terracotta font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Longer clear spans, fewer supports</span>
                  </div>
                </div>

                {/* Dimensional Lumber */}
                <div className="space-y-3 opacity-90">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-sage"></div>
                      <span className="font-medium text-foreground">2×10 Lumber (typical)</span>
                    </div>
                    <span className="text-2xl text-sage font-bold">16 ft</span>
                  </div>
                  <div className="relative h-12 bg-sage/20 rounded-full overflow-hidden">
                    <div className="h-full bg-sage rounded-full w-1/2 shadow-lg"></div>
                    <div className="absolute inset-0 flex items-center px-6">
                      <div className="w-1/2 flex items-center justify-between text-white text-xs font-bold">
                        <span>0 ft</span>
                        <span>16 ft span</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-sage font-bold">
                    <AlertCircle className="w-4 h-4" />
                    <span>Requires mid-span support for longer runs</span>
                  </div>
                </div>
              </div>

              {/* Key Insight */}
              <div className="mt-8 bg-white/80 rounded-xl p-6 border-2 border-muted shadow-sm">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl text-terracotta font-bold mb-1">2×</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Longer Spans</div>
                  </div>
                  <div>
                    <div className="text-3xl text-terracotta font-bold mb-1">60%</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Lighter Weight</div>
                  </div>
                  <div>
                    <div className="text-3xl text-terracotta font-bold mb-1">0%</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Warping</div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <Separator />

          {/* Section 3 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-sage/10 p-3 rounded-lg">
                <Award className="w-6 h-6 text-sage" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 font-bold scroll-mt-20 text-foreground" id="durability">3. Durability in Canadian Conditions</h2>
                <p className="text-lg text-muted-foreground">
                  Steel framing stands up better to Canada's extremes — from salt-laden coasts to freeze–thaw winters.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-5 bg-white border-terracotta/20 border-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                  <p className="mb-0 text-sm font-bold text-foreground">Immune to rot, mold, and insects</p>
                </div>
              </Card>
              <Card className="p-5 bg-white border-terracotta/20 border-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                  <p className="mb-0 text-sm font-bold text-foreground">Dimensionally stable year-round</p>
                </div>
              </Card>
              <Card className="p-5 bg-white border-terracotta/20 border-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                  <p className="mb-0 text-sm font-bold text-foreground">Corrosion-resistant galvanizing</p>
                </div>
              </Card>
            </div>

            <p className="text-muted-foreground text-lg">
              By contrast, wood can decay, attract termites, or warp under fluctuating moisture levels — all of which mean higher repair costs down the road.
            </p>
          
            <Card className="p-6 bg-terracotta/5 border-l-4 border-terracotta">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2 font-bold text-foreground">Maintenance matters:</h3>
                  <p className="text-muted-foreground mb-0 font-medium leading-relaxed">
                    A lifecycle study by the Canadian Sheet Steel Building Institute (CSSBI) found that CFS systems require significantly less maintenance than wood over a 30-year span, especially in humid or coastal climates.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <Separator />

          {/* Section 4 */}
          <section className="space-y-6 text-center py-10 bg-muted/30 rounded-2xl px-6">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Fire Safety & Insurance</h2>
            <p className="text-2xl mb-8 font-bold text-terracotta">
              Steel doesn't burn. Wood does.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              In wildfire or high-risk zones, non-combustible steel framing can lower both insurance premiums and fire risk, maintaining structural integrity longer during fire exposure.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-terracotta text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl mb-6 font-bold">Ready to Start Your Build?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get personalized answers from our team of experts and see how cold-form steel can benefit your specific project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-white text-terracotta hover:bg-white/90 font-bold h-14 px-10 text-lg border-0"
              >
                Request a Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('models')}
                className="border-white text-white hover:bg-white hover:text-terracotta font-bold h-14 px-10 text-lg"
              >
                View Models
              </Button>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
