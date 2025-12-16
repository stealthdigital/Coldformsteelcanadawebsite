import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, AlertCircle, TrendingUp, Shield, Zap, Award, DollarSign, Clock3, Hammer, Lightbulb, Home, Building2, XCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';
import johnMontgomeryPhoto from 'figma:asset/f7589f12c4db2294f1600532a47c3b3c990ffc90.png';

interface CFSvsTraditionalSteelArticleProps {
  onNavigate: (page: string) => void;
}

export function CFSvsTraditionalSteelArticle({ onNavigate }: CFSvsTraditionalSteelArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="Cold-Formed Steel vs Traditional Steel | CFS vs I-Beam Construction"
        description="Understand the difference between cold-formed steel (CFS) and traditional structural steel I-beams. Compare costs, applications, and why CFS is ideal for residential construction."
        image="https://via.placeholder.com/1200x630/665f55/ffffff?text=CFS+vs+Traditional+Steel"
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
            Comparisons
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6">
            Cold-Form Steel vs Traditional Steel Framing: A Clear, Real-World Guide
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            If construction terminology has ever felt confusing or overly technical, this guide is built to make everything simpler.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>November 19, 2025</span>
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
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Why This Comparison Matters</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    If you're building a home, an ADU, or adding an extension, you'll eventually face a key decision: What type of framing should you choose?
                  </p>
                  <p>
                    You'll get a clear, plain-language explanation of:
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-5 bg-accent/5 border-accent/30">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="mb-0">How cold-form steel differs from traditional structural steel</p>
                  </div>
                </div>
              </Card>
              <Card className="p-5 bg-accent/5 border-accent/30">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="mb-0">How each affects cost, speed, durability, design, and maintenance</p>
                  </div>
                </div>
              </Card>
              <Card className="p-5 bg-accent/5 border-accent/30">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="mb-0">Which option best fits your build, your site, and your long-term goals</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent p-6">
              <p className="text-lg mb-0">
                <strong>By the end</strong>, you'll feel equipped to make a confident, informed choice.
              </p>
            </Card>
          </section>

          <Separator />

          {/* What Is Cold-Form Steel */}
          <section className="space-y-6">
            <h2 className="text-3xl">What Is Cold-Form Steel? (A Straightforward Explanation)</h2>
            
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-white border-2 border-accent/30">
              <div className="space-y-4">
                <p className="text-lg">
                  Cold-form steel — also known as <strong>CFS</strong> — starts as flat steel sheets that are rolled or bent into shape at room temperature. No furnace, no heavy forging.
                </p>
                <div className="bg-white/80 rounded-lg p-4 border-2 border-accent/20">
                  <p className="text-center text-xl mb-0">
                    Imagine <strong className="text-accent">"steel origami."</strong><br />
                    <span className="text-muted-foreground">Strong, precise, consistent.</span>
                  </p>
                </div>
              </div>
            </Card>

            <div>
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#8b9d83]" />
                Why it's becoming popular for home and ADU projects:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-5 bg-white border-accent/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Lightweight and easier to transport</p>
                  </div>
                </Card>
                <Card className="p-5 bg-white border-accent/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Dimensionally stable — no warping, shrinking, or twisting</p>
                  </div>
                </Card>
                <Card className="p-5 bg-white border-accent/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Non-combustible and pest-proof</p>
                  </div>
                </Card>
                <Card className="p-5 bg-white border-accent/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83] mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Often prefabricated, meaning cleaner, faster builds</p>
                  </div>
                </Card>
              </div>
            </div>

            <p className="text-muted-foreground">
              You'll commonly see CFS used in residential construction, modular systems, ADUs, and small-to-mid-scale multi-unit buildings.
            </p>
          </section>

          <Separator />

          {/* What Is Traditional Structural Steel */}
          <section className="space-y-6">
            <h2 className="text-3xl">What Is Traditional Structural Steel?</h2>
            
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-white border-2 border-primary/30">
              <p className="text-lg mb-4">
                Traditional structural steel refers to <strong>hot-rolled beams and columns</strong> — the big, heavy shapes used for commercial buildings, bridges, and high-rises.
              </p>
              <div className="bg-white/80 rounded-lg p-4 border-2 border-primary/20">
                <p className="text-center text-xl text-primary mb-0">
                  This is the steel that requires cranes and large equipment.
                </p>
              </div>
            </Card>

            <div>
              <h3 className="text-xl mb-4">In residential settings, it's used when:</h3>
              <div className="space-y-3">
                <Card className="p-5 bg-white border-primary/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="mb-0">You want large, open spans (like a loft-style living area)</p>
                  </div>
                </Card>
                <Card className="p-5 bg-white border-primary/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="mb-0">You need significant load-bearing strength</p>
                  </div>
                </Card>
                <Card className="p-5 bg-white border-primary/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="mb-0">The design calls for exposed steel or dramatic architectural features</p>
                  </div>
                </Card>
              </div>
            </div>

            <p className="text-lg text-muted-foreground">
              It's powerful, durable, and engineered for large-scale structural demands.
            </p>
          </section>

          <Separator />

          {/* Quick Comparison */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Cold-Form Steel vs Traditional Steel — Quick Comparison</h2>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Attribute</th>
                      <th className="py-3 px-4 text-left">Cold-Form Steel (CFS)</th>
                      <th className="py-3 px-4 text-left">Traditional Structural Steel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="border-b">
                      <td className="py-3 px-4 bg-muted">Weight</td>
                      <td className="py-3 px-4 bg-accent/5">Light, easy to handle</td>
                      <td className="py-3 px-4 bg-white">Heavy, requires equipment</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 bg-muted">Strength</td>
                      <td className="py-3 px-4 bg-accent/5">Strong for homes & ADUs</td>
                      <td className="py-3 px-4 bg-white">Extremely strong for big spans</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 bg-muted">Construction Time</td>
                      <td className="py-3 px-4 bg-accent/5">Often faster (prefab)</td>
                      <td className="py-3 px-4 bg-white">Slower; crane-dependent</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 bg-muted">Cost</td>
                      <td className="py-3 px-4 bg-accent/5">Higher materials, lower labour/time</td>
                      <td className="py-3 px-4 bg-white">High materials + labour + equipment</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 bg-muted">Sustainability</td>
                      <td className="py-3 px-4 bg-accent/5">Less energy-intensive to produce</td>
                      <td className="py-3 px-4 bg-white">More energy-intensive</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 bg-muted">Design Flexibility</td>
                      <td className="py-3 px-4 bg-accent/5">Great precision for modular builds</td>
                      <td className="py-3 px-4 bg-white">Ideal for dramatic open spaces</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 bg-muted">Best For</td>
                      <td className="py-3 px-4 bg-accent/5">Homes, ADUs, small multi-units</td>
                      <td className="py-3 px-4 bg-white">High-rise, commercial, huge spans</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 bg-muted">Maintenance</td>
                      <td className="py-3 px-4 bg-accent/5">Minimal; excellent durability</td>
                      <td className="py-3 px-4 bg-white">Needs protection if exposed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          <Separator />

          {/* Construction Time */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Clock3 className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Construction Time: How Fast Does Each Build Go?</h2>
                <p className="text-lg text-muted-foreground">
                  Most people want fewer delays and a smoother building experience.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-white border-2 border-accent/30">
                <h3 className="text-xl mb-4 text-accent">With Cold-Form Steel:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0 text-muted-foreground">Prefabricated panels can speed up installation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0 text-muted-foreground">Lighter materials mean quicker on-site handling</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0 text-muted-foreground">Some Canadian panelized CFS projects report up to 75% faster installation</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-white border-2 border-primary/30">
                <h3 className="text-xl mb-4 text-primary">Traditional Structural Steel:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="mb-0 text-muted-foreground">Requires heavy lifting equipment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="mb-0 text-muted-foreground">Needs specialized crews</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="mb-0 text-muted-foreground">Can be more weather and schedule dependent</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent p-6">
              <p className="text-lg mb-0">
                <strong>If time is a priority</strong>, CFS generally offers a faster path to completion.
              </p>
            </Card>
          </section>

          <Separator />

          {/* Specs That Matter */}
          <section className="space-y-6">
            <h2 className="text-3xl">Specs That Actually Matter</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white border-accent/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#8b9d83]/20 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-[#8b9d83]" />
                  </div>
                  <h3 className="text-xl mb-0">Fire Performance</h3>
                </div>
                <p className="text-muted-foreground mb-0">
                  Steel doesn't burn — a major safety advantage.
                </p>
              </Card>

              <Card className="p-6 bg-white border-accent/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl mb-0">Energy Efficiency</h3>
                </div>
                <p className="text-muted-foreground mb-0">
                  Steel conducts heat, so proper insulation and thermal breaks are essential (especially in Canadian climates).
                </p>
              </Card>

              <Card className="p-6 bg-white border-accent/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#8b9d83]/20 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-[#8b9d83]" />
                  </div>
                  <h3 className="text-xl mb-0">Sound Control</h3>
                </div>
                <p className="text-muted-foreground mb-0">
                  Steel stays straight, helping finishes stay tight and quiet over time.
                </p>
              </Card>

              <Card className="p-6 bg-white border-accent/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#8b9d83]/20 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-[#8b9d83]" />
                  </div>
                  <h3 className="text-xl mb-0">Weather Resistance</h3>
                </div>
                <p className="text-muted-foreground mb-0">
                  Steel doesn't rot, swell, or attract pests — excellent for long-term durability.
                </p>
              </Card>

              <Card className="p-6 bg-white border-accent/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#8b9d83]/20 p-2 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#8b9d83]" />
                  </div>
                  <h3 className="text-xl mb-0">Maintenance</h3>
                </div>
                <p className="text-muted-foreground mb-0">
                  Minimal. No termite treatments, no wood movement, fewer structural concerns.
                </p>
              </Card>

              <Card className="p-6 bg-white border-accent/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Hammer className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl mb-0">Design Flexibility</h3>
                </div>
                <p className="text-muted-foreground mb-0">
                  Both steels allow for interesting layouts, but structural steel wins for huge spans.
                </p>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Who Each Option Is Best For */}
          <section className="space-y-6">
            <h2 className="text-3xl">Who Each Option Is Best For</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-white border-2 border-accent/30">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-accent" />
                  <h3 className="text-xl mb-0 text-accent">Cold-Form Steel Works Best For:</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">ADUs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Residential homes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Small-to-mid-size multi-unit buildings</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Builds where speed matters</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Sites with limited access for heavy equipment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Low-maintenance, long-term structural stability</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-white border-2 border-primary/30">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                  <h3 className="text-xl mb-0 text-primary">Traditional Structural Steel Works Best For:</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Large open-span designs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Loft-style or exposed-beam architecture</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Commercial and industrial projects</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="mb-0">High-rise or tall buildings</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Garages with mezzanines or oversized loads</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Common Myths */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Common Myths (And the Real Facts)</h2>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="p-6 bg-gradient-to-r from-secondary/10 to-white border-l-4 border-secondary">
                <div className="flex items-start gap-4">
                  <XCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="mb-2"><strong>Myth:</strong> Steel homes look cold or industrial.</p>
                    <p className="text-accent mb-0"><strong>Fact:</strong> Framing is hidden. You can finish the home any way you like.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-secondary/10 to-white border-l-4 border-secondary">
                <div className="flex items-start gap-4">
                  <XCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="mb-2"><strong>Myth:</strong> Steel makes houses noisy.</p>
                    <p className="text-accent mb-0"><strong>Fact:</strong> Noise issues come from insulation, not framing.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-secondary/10 to-white border-l-4 border-secondary">
                <div className="flex items-start gap-4">
                  <XCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="mb-2"><strong>Myth:</strong> Steel ruins Wi-Fi.</p>
                    <p className="text-accent mb-0"><strong>Fact:</strong> Foil insulation or cladding causes Wi-Fi issues — not the studs.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-secondary/10 to-white border-l-4 border-secondary">
                <div className="flex items-start gap-4">
                  <XCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="mb-2"><strong>Myth:</strong> Steel costs more.</p>
                    <p className="text-accent mb-0"><strong>Fact:</strong> Initial materials may be higher, but long-term value often levels out or wins.</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Real-World Scenarios */}
          <section className="space-y-6">
            <h2 className="text-3xl">Real-World Scenarios</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-accent/5 border-accent/30">
                <h3 className="text-xl mb-3 text-accent">Scenario 1 — Building an ADU</h3>
                <p className="text-muted-foreground mb-0">
                  If you want minimal disruption and a fast, clean build, CFS is usually the easiest option.
                </p>
              </Card>

              <Card className="p-6 bg-accent/5 border-accent/30">
                <h3 className="text-xl mb-3 text-accent">Scenario 2 — A Long-Term Family Home</h3>
                <p className="text-muted-foreground mb-0">
                  CFS gives durability, fire resistance, and decades of stability.
                </p>
              </Card>

              <Card className="p-6 bg-primary/10 border-primary/30">
                <h3 className="text-xl mb-3 text-primary">Scenario 3 — A Giant Open Living Space</h3>
                <p className="text-muted-foreground mb-0">
                  A 30-foot open span? Structural steel is your friend.
                </p>
              </Card>

              <Card className="p-6 bg-accent/5 border-accent/30">
                <h3 className="text-xl mb-3 text-accent">Scenario 4 — Asking Your Builder the Right Questions</h3>
                <p className="text-muted-foreground mb-0">
                  Steel framing gives clear, measurable answers about longevity, performance, and maintenance.
                </p>
              </Card>
            </div>
          </section>

          <Separator />

          {/* How to Choose Checklist */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">How to Choose: A Quick Checklist</h2>
                <p className="text-lg text-muted-foreground">
                  Ask yourself:
                </p>
              </div>
            </div>

            <Card className="overflow-hidden bg-gradient-to-br from-accent/10 to-white border-2 border-accent/30">
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">What's my timeline?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">What's my framing budget vs full build budget?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">Does my design require large spans?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">What does my lot allow for equipment?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">How long do I plan to stay in this building?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">How important is long-term stability?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">What insulation demands does my climate create?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="mb-0">What warranties are offered?</p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <Separator />

          {/* Author Bio */}
          <section className="space-y-6">
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

          <Separator />

          {/* Continue Learning */}
          <section className="space-y-6">
            <h2 className="text-2xl mb-6">Continue Learning</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('steel-vs-wood')}>
                <Badge className="mb-3 bg-primary text-white">Comparisons</Badge>
                <h3 className="text-lg mb-2">Steel vs. Wood: Full Breakdown</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Honest comparison of costs, durability, and performance
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>10 min read</span>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('factory-tour')}>
                <Badge className="mb-3 bg-[#8b9d83] text-white">Factory Tour</Badge>
                <h3 className="text-lg mb-2">Inside the Factory: Why Cold Form Steel Homes Go Up in Days</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Factory tour showing precision engineering and rapid assembly
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('cost-drivers')}>
                <Badge className="mb-3 bg-accent text-white">Cost & Financing</Badge>
                <h3 className="text-lg mb-2">What Drives the Cost of Your Build?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Understanding materials, labor, and site preparation
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}