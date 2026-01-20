import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, XCircle, Clock3, Wrench, Building2, Lightbulb, AlertCircle, Flame, Snowflake, Volume2, Cloud, Maximize2, HelpCircle } from 'lucide-react';
import { HeadMeta } from '../HeadMeta';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// GitHub URL for author photo
const johnMontgomeryPhoto = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Team/John%20Montgomery.png';

interface CFSvsTraditionalSteelArticleProps {
  onNavigate: (page: string) => void;
}

export function CFSvsTraditionalSteelArticle({ onNavigate }: CFSvsTraditionalSteelArticleProps) {
  const heroImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/main/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';

  return (
    <div className="min-h-screen bg-white pt-16">
      <HeadMeta 
        title="Cold-Formed Steel vs Traditional Steel | CFS vs I-Beam Construction"
        description="Understand the difference between cold-formed steel (CFS) and traditional structural steel I-beams. Compare costs, applications, and why CFS is ideal for residential construction."
        image={heroImage}
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
            Comparisons
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6 font-bold">
            Cold-Form Steel vs Traditional Steel Framing
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            If construction terminology has ever felt confusing or overly technical, this guide is built to make everything simpler.
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
          {/* Introduction */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 font-bold">Why This Comparison Matters</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    If you're building a home, an ADU, or adding an extension, you'll eventually face a key decision: What type of framing should you choose?
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-5 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="mb-0 text-sm">How cold-form steel differs from traditional structural steel</p>
                </div>
              </Card>
              <Card className="p-5 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="mb-0 text-sm">How each affects cost, speed, durability, and maintenance</p>
                </div>
              </Card>
              <Card className="p-5 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="mb-0 text-sm">Which option best fits your build and long-term goals</p>
                </div>
              </Card>
            </div>
          </section>

          <Separator />

          {/* What Is Cold-Form Steel */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">What Is Cold-Form Steel? (A Straightforward Explanation)</h2>
            
            <Card className="p-8 bg-secondary/5 border-2 border-secondary/20">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Cold-form steel — also known as <strong>CFS</strong> — starts as flat steel sheets that are rolled or bent into shape at room temperature. No furnace, no heavy forging.
                </p>
                <div className="bg-white/80 rounded-lg p-6 border-2 border-secondary/20 text-center">
                  <p className="text-xl mb-0 font-bold text-secondary">
                    Imagine "steel origami." Strong, precise, consistent.
                  </p>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Why it's becoming popular for home and ADU projects:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Lightweight and easier to transport',
                  'Dimensionally stable — no warping, shrinking, or twisting',
                  'Non-combustible and pest-proof',
                  'Often prefabricated, meaning cleaner, faster builds'
                ].map((benefit, i) => (
                  <Card key={i} className="p-4 border-primary/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm mb-0">{benefit}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You'll commonly see CFS used in residential construction, modular systems, ADUs, and small-to-mid-scale multi-unit buildings.
              </p>
            </div>
          </section>

          <Separator />

          {/* What Is Traditional Structural Steel */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">What Is Traditional Structural Steel?</h2>
            
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Traditional structural steel refers to hot-rolled beams and columns — the big, heavy shapes used for commercial buildings, bridges, and high-rises.
              </p>
              
              <Card className="p-6 bg-muted/30 border-2">
                <p className="text-lg font-bold mb-0">
                  This is the steel that requires cranes and large equipment.
                </p>
              </Card>

              <div className="space-y-3">
                <h3 className="text-xl font-bold">In residential settings, it's used when:</h3>
                {[
                  'You want large, open spans (like a loft-style living area)',
                  'You need significant load-bearing strength',
                  'The design calls for exposed steel or dramatic architectural features'
                ].map((use, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
                    <Building2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="mb-0">{use}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                It's powerful, durable, and engineered for large-scale structural demands.
              </p>
            </div>
          </section>

          <Separator />

          {/* Quick Comparison Table */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Cold-Form Steel vs Traditional Steel — Quick Comparison</h2>
            <Card className="overflow-hidden border-2 border-muted shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="py-4 px-6 text-left">Attribute</th>
                      <th className="py-4 px-6 text-left">Cold-Form Steel (CFS)</th>
                      <th className="py-4 px-6 text-left">Traditional Structural Steel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted">
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold">Weight</td>
                      <td className="py-4 px-6">Light, easy to handle</td>
                      <td className="py-4 px-6">Heavy, requires equipment</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold">Strength</td>
                      <td className="py-4 px-6">Strong for homes & ADUs</td>
                      <td className="py-4 px-6">Extremely strong for big spans</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold">Construction Time</td>
                      <td className="py-4 px-6 font-bold text-primary">Often faster (prefab)</td>
                      <td className="py-4 px-6">Slower; crane-dependent</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold">Cost</td>
                      <td className="py-4 px-6">Higher materials, lower labour/time</td>
                      <td className="py-4 px-6">High materials + labour + equipment</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold">Sustainability</td>
                      <td className="py-4 px-6 font-bold text-primary">Less energy-intensive to produce</td>
                      <td className="py-4 px-6">More energy-intensive</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold">Design Flexibility</td>
                      <td className="py-4 px-6">Great precision for modular builds</td>
                      <td className="py-4 px-6">Ideal for dramatic open spaces</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold">Best For</td>
                      <td className="py-4 px-6 font-bold text-primary">Homes, ADUs, small multi-units</td>
                      <td className="py-4 px-6">High-rise, commercial, huge spans</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold">Maintenance</td>
                      <td className="py-4 px-6 font-bold text-primary">Minimal; excellent durability</td>
                      <td className="py-4 px-6">Needs protection if exposed</td>
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
              <div className="bg-primary/10 p-3 rounded-lg">
                <Clock3 className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 font-bold">Construction Time: How Fast Does Each Build Go?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Most people want fewer delays and a smoother building experience.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-primary">With Cold-Form Steel:</h3>
                <div className="space-y-3">
                  {[
                    'Prefabricated panels can speed up installation',
                    'Lighter materials mean quicker on-site handling',
                    'Some Canadian panelized CFS projects report up to 75% faster installation'
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="mb-0 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-2 border-muted">
                <h3 className="text-xl font-bold mb-4">Traditional Structural Steel:</h3>
                <div className="space-y-3">
                  {[
                    'Requires heavy lifting equipment',
                    'Needs specialized crews',
                    'Can be more weather and schedule dependent'
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <p className="mb-0 text-sm text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <p className="text-lg font-bold mb-0 text-center">
                If time is a priority, CFS generally offers a faster path to completion.
              </p>
            </Card>
          </section>

          <Separator />

          {/* Specs That Actually Matter */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Specs That Actually Matter</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Flame className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-0">Fire Performance</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Steel doesn't burn — a major safety advantage.
                </p>
              </Card>

              <Card className="p-6 border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Snowflake className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-0">Energy Efficiency</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Steel conducts heat, so proper insulation and thermal breaks are essential (especially in Canadian climates).
                </p>
              </Card>

              <Card className="p-6 border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Volume2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-0">Sound Control</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Steel stays straight, helping finishes stay tight and quiet over time.
                </p>
              </Card>

              <Card className="p-6 border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Cloud className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-0">Weather Resistance</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Steel doesn't rot, swell, or attract pests — excellent for long-term durability.
                </p>
              </Card>

              <Card className="p-6 border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-0">Maintenance</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Minimal. No termite treatments, no wood movement, fewer structural concerns.
                </p>
              </Card>

              <Card className="p-6 border-2 border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Maximize2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-0">Design Flexibility</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Both steels allow for interesting layouts, but structural steel wins for huge spans.
                </p>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Who Each Option Is Best For */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Who Each Option Is Best For</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 border-2 border-primary/20 bg-primary/5">
                <h3 className="text-2xl font-bold mb-6 text-primary">Cold-Form Steel Works Best For:</h3>
                <div className="space-y-3">
                  {[
                    'ADUs',
                    'Residential homes',
                    'Small-to-mid-size multi-unit buildings',
                    'Builds where speed matters',
                    'Sites with limited access for heavy equipment',
                    'Low-maintenance, long-term structural stability'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="mb-0">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 border-2 border-muted">
                <h3 className="text-2xl font-bold mb-6">Traditional Structural Steel Works Best For:</h3>
                <div className="space-y-3">
                  {[
                    'Large open-span designs',
                    'Loft-style or exposed-beam architecture',
                    'Commercial and industrial projects',
                    'High-rise or tall buildings',
                    'Garages with mezzanines or oversized loads'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <p className="mb-0 text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Common Myths */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 font-bold">Common Myths (And the Real Facts)</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  myth: 'Steel homes look cold or industrial.',
                  fact: 'Framing is hidden. You can finish the home any way you like.'
                },
                {
                  myth: 'Steel makes houses noisy.',
                  fact: 'Noise issues come from insulation, not framing.'
                },
                {
                  myth: 'Steel ruins Wi-Fi.',
                  fact: 'Foil insulation or cladding causes Wi-Fi issues — not the studs.'
                },
                {
                  myth: 'Steel costs more.',
                  fact: 'Initial materials may be higher, but long-term value often levels out or wins.'
                }
              ].map((item, i) => (
                <Card key={i} className="p-6 border-2">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-start gap-3 mb-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <p className="font-bold mb-0">Myth:</p>
                      </div>
                      <p className="text-muted-foreground ml-8">{item.myth}</p>
                    </div>
                    <div>
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="font-bold mb-0">Fact:</p>
                      </div>
                      <p className="ml-8">{item.fact}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          {/* Real-World Scenarios */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Real-World Scenarios</h2>
            
            <div className="space-y-4">
              <Card className="p-6 border-2 border-primary/20">
                <h3 className="text-xl font-bold mb-3">Scenario 1 — Building an ADU</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you want minimal disruption and a fast, clean build, CFS is usually the easiest option.
                </p>
              </Card>

              <Card className="p-6 border-2 border-primary/20">
                <h3 className="text-xl font-bold mb-3">Scenario 2 — A Long-Term Family Home</h3>
                <p className="text-muted-foreground leading-relaxed">
                  CFS gives durability, fire resistance, and decades of stability.
                </p>
              </Card>

              <Card className="p-6 border-2 border-primary/20">
                <h3 className="text-xl font-bold mb-3">Scenario 3 — A Giant Open Living Space</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A 30-foot open span? Structural steel is your friend.
                </p>
              </Card>

              <Card className="p-6 border-2 border-primary/20">
                <h3 className="text-xl font-bold mb-3">Scenario 4 — Asking Your Builder the Right Questions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Steel framing gives clear, measurable answers about longevity, performance, and maintenance.
                </p>
              </Card>
            </div>
          </section>

          <Separator />

          {/* How to Choose Checklist */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">How to Choose: A Quick Checklist</h2>
            
            <Card className="p-8 bg-muted/30 border-2">
              <p className="text-lg font-bold mb-6">Ask yourself:</p>
              <div className="space-y-3">
                {[
                  'What\'s my timeline?',
                  'What\'s my framing budget vs full build budget?',
                  'Does my design require large spans?',
                  'What does my lot allow for equipment?',
                  'How long do I plan to stay in this building?',
                  'How important is long-term stability?',
                  'What insulation demands does my climate create?',
                  'What warranties are offered?'
                ].map((question, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {i + 1}
                    </div>
                    <p className="mb-0 font-medium">{question}</p>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          <Separator />

          {/* Author Bio */}
          <section className="bg-muted p-8 rounded-lg">
            <div className="flex items-start gap-6 mb-6">
              <ImageWithFallback 
                src={johnMontgomeryPhoto}
                alt="John Montgomery"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div>
                <p className="text-sm text-primary font-bold mb-1">Author</p>
                <h3 className="text-xl font-bold">John Montgomery</h3>
                <p className="text-muted-foreground">President, Cold Form Steel Canada</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              John Montgomery leads the SteelBuilt Group and works directly with engineers, municipalities, and homeowners on steel projects across Canada.
            </p>
          </section>

          {/* CTA Section */}
          <Card className="bg-primary text-white p-10 text-center rounded-2xl shadow-xl">
            <h2 className="text-3xl mb-4 font-bold">Still Deciding?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our experts can help you determine the best framing solution for your specific property and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => onNavigate('contact')}
                className="font-bold h-14 px-10 text-lg"
              >
                Contact Our Team
              </Button>
            </div>
          </Card>
        </div>
      </article>
    </div>
  );
}