import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Clock3, Calendar, Share2, CheckCircle2, XCircle, Building2, Lightbulb, Factory, Home, Hammer, DollarSign, AlertCircle, Flame, Snowflake, Volume2, Cloud, Wrench, Maximize2, HelpCircle } from 'lucide-react';
import { HeadMeta } from '../HeadMeta';
import { ArticleSchema } from '../schema/ArticleSchema';
import { shareArticle } from '../../utils/share';
import { ImageWithFallback } from '../figma/ImageWithFallback';

import { CloudinaryImages } from '../../config/cloudinary-urls';

// Author photo
const johnMontgomeryPhoto = CloudinaryImages.learning.johnMontgomery;

interface CFSvsTraditionalSteelArticleProps {
  onNavigate: (page: string) => void;
}

export function CFSvsTraditionalSteelArticle({ onNavigate }: CFSvsTraditionalSteelArticleProps) {
  const heroImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/main/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';

  return (
    <div className="min-h-screen bg-background pt-16">
      <HeadMeta 
        title="Cold-Formed Steel vs Traditional Steel | CFS vs I-Beam Construction"
        description="Understand the difference between cold-formed steel (CFS) and traditional structural steel I-beams. Compare costs, applications, and why CFS is ideal for residential construction."
        image={heroImage}
      />
      <ArticleSchema
        headline="Cold-Form Steel vs Traditional Steel Framing"
        description="If construction terminology has ever felt confusing or overly technical, this guide is built to make everything simpler."
        datePublished="2026-01-15"
        dateModified="2026-01-15"
        authorName="John Montgomery"
        image={heroImage}
      />
      
      {/* Back Button */}
      <div className="bg-muted/50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => onNavigate('learning')}
            className="gap-2 font-bold text-foreground hover:text-terracotta"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Learning Centre
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Badge className="bg-terracotta text-white mb-4 border-0">
            Comparisons
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6 font-bold text-foreground">
            Cold-Form Steel vs Traditional Steel Framing
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            If construction terminology has ever felt confusing or overly technical, this guide is built to make everything simpler.
          </p>

          <div className="flex items-center gap-6 text-sm text-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-terracotta" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-terracotta" />
              <span>January 2026</span>
            </div>
            <button 
              onClick={() => shareArticle({
                title: 'Cold-Form Steel vs Traditional Steel Framing',
                text: 'If construction terminology has ever felt confusing or overly technical, this guide is built to make everything simpler.'
              })}
              className="flex items-center gap-2 hover:text-terracotta transition-colors ml-auto"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </article>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-3 rounded-lg">
                <Lightbulb className="w-6 h-6 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 font-bold text-foreground">Why This Comparison Matters</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    If you're building a home, an ADU, or adding an extension, you'll eventually face a key decision: What type of framing should you choose?
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-5 bg-terracotta/5 border-terracotta/20 border shadow-md">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                  <p className="mb-0 text-sm text-foreground">How cold-form steel differs from traditional structural steel</p>
                </div>
              </Card>
              <Card className="p-5 bg-terracotta/5 border-terracotta/20 border shadow-md">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                  <p className="mb-0 text-sm text-foreground">How each affects cost, speed, durability, and maintenance</p>
                </div>
              </Card>
              <Card className="p-5 bg-terracotta/5 border-terracotta/20 border shadow-md">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                  <p className="mb-0 text-sm text-foreground">Which option best fits your build and long-term goals</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Cold-Form Steel */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">What Is Cold-Form Steel? (A Straightforward Explanation)</h2>
            
            <Card className="p-8 bg-white border-0 shadow-md">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-foreground">
                  Cold-form steel — also known as <strong>CFS</strong> — starts as flat steel sheets that are rolled or bent into shape at room temperature. No furnace, no heavy forging.
                </p>
                <div className="bg-terracotta/10 rounded-lg p-6 border-2 border-terracotta/20 text-center">
                  <p className="text-xl mb-0 font-bold text-foreground">
                    Imagine "steel origami." Strong, precise, consistent.
                  </p>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Why it's becoming popular for home and ADU projects:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Lightweight and easier to transport',
                  'Dimensionally stable — no warping, shrinking, or twisting',
                  'Non-combustible and pest-proof',
                  'Often prefabricated, meaning cleaner, faster builds'
                ].map((benefit, i) => (
                  <Card key={i} className="p-4 border-terracotta/20 bg-white shadow-md">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                      <p className="text-sm mb-0 text-foreground">{benefit}</p>
                    </div>
                  </Card>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You'll commonly see CFS used in residential construction, modular systems, ADUs, and small-to-mid-scale multi-unit buildings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Traditional Structural Steel */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">What Is Traditional Structural Steel?</h2>
            
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Traditional structural steel refers to hot-rolled beams and columns — the big, heavy shapes used for commercial buildings, bridges, and high-rises.
              </p>
              
              <Card className="p-6 bg-muted/30 border-0 shadow-md">
                <p className="text-lg font-bold mb-0 text-foreground">
                  This is the steel that requires cranes and large equipment.
                </p>
              </Card>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">In residential settings, it's used when:</h3>
                {[
                  'You want large, open spans (like a loft-style living area)',
                  'You need significant load-bearing strength',
                  'The design calls for exposed steel or dramatic architectural features'
                ].map((use, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
                    <Building2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                    <p className="mb-0 text-foreground">{use}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                It's powerful, durable, and engineered for large-scale structural demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Cold-Form Steel vs Traditional Steel — Quick Comparison</h2>
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-terracotta text-white">
                    <tr>
                      <th className="py-4 px-6 text-left">Attribute</th>
                      <th className="py-4 px-6 text-left">Cold-Form Steel (CFS)</th>
                      <th className="py-4 px-6 text-left">Traditional Structural Steel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted bg-white">
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold text-foreground">Weight</td>
                      <td className="py-4 px-6 text-foreground">Light, easy to handle</td>
                      <td className="py-4 px-6 text-foreground">Heavy, requires equipment</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold text-foreground">Strength</td>
                      <td className="py-4 px-6 text-foreground">Strong for homes & ADUs</td>
                      <td className="py-4 px-6 text-foreground">Extremely strong for big spans</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold text-foreground">Construction Time</td>
                      <td className="py-4 px-6 font-bold text-terracotta">Often faster (prefab)</td>
                      <td className="py-4 px-6 text-foreground">Slower; crane-dependent</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold text-foreground">Cost</td>
                      <td className="py-4 px-6 text-foreground">Higher materials, lower labour/time</td>
                      <td className="py-4 px-6 text-foreground">High materials + labour + equipment</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold text-foreground">Sustainability</td>
                      <td className="py-4 px-6 font-bold text-terracotta">Less energy-intensive to produce</td>
                      <td className="py-4 px-6 text-foreground">More energy-intensive</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold text-foreground">Design Flexibility</td>
                      <td className="py-4 px-6 text-foreground">Great precision for modular builds</td>
                      <td className="py-4 px-6 text-foreground">Ideal for dramatic open spaces</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold text-foreground">Best For</td>
                      <td className="py-4 px-6 font-bold text-terracotta">Homes, ADUs, small multi-units</td>
                      <td className="py-4 px-6 text-foreground">High-rise, commercial, huge spans</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-muted/30 font-bold text-foreground">Maintenance</td>
                      <td className="py-4 px-6 font-bold text-terracotta">Minimal; excellent durability</td>
                      <td className="py-4 px-6 text-foreground">Needs protection if exposed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Construction Time */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-3 rounded-lg">
                <Clock3 className="w-6 h-6 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 font-bold text-foreground">Construction Time: How Fast Does Each Build Go?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Most people want fewer delays and a smoother building experience.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-terracotta/20 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-terracotta">With Cold-Form Steel:</h3>
                <div className="space-y-3">
                  {[
                    'Prefabricated panels can speed up installation',
                    'Lighter materials mean quicker on-site handling',
                    'Some Canadian panelized CFS projects report up to 75% faster installation'
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                      <p className="mb-0 text-sm text-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-2 border-muted shadow-md">
                <h3 className="text-xl font-bold mb-4 text-foreground">Traditional Structural Steel:</h3>
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

            <Card className="p-6 bg-terracotta/5 border-terracotta/20 shadow-md">
              <p className="text-lg font-bold mb-0 text-center text-foreground">
                If time is a priority, CFS generally offers a faster path to completion.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Specs That Actually Matter */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Specs That Actually Matter</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-0 shadow-md bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-terracotta/10 p-2 rounded-lg">
                    <Flame className="w-6 h-6 text-terracotta" />
                  </div>
                  <h3 className="text-xl font-bold mb-0 text-foreground">Fire Performance</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Steel doesn't burn — a major safety advantage.
                </p>
              </Card>

              <Card className="p-6 border-0 shadow-md bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-terracotta/10 p-2 rounded-lg">
                    <Snowflake className="w-6 h-6 text-terracotta" />
                  </div>
                  <h3 className="text-xl font-bold mb-0 text-foreground">Energy Efficiency</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Steel conducts heat, so proper insulation and thermal breaks are essential (especially in Canadian climates).
                </p>
              </Card>

              <Card className="p-6 border-0 shadow-md bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-terracotta/10 p-2 rounded-lg">
                    <Volume2 className="w-6 h-6 text-terracotta" />
                  </div>
                  <h3 className="text-xl font-bold mb-0 text-foreground">Sound Control</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Steel stays straight, helping finishes stay tight and quiet over time.
                </p>
              </Card>

              <Card className="p-6 border-0 shadow-md bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-terracotta/10 p-2 rounded-lg">
                    <Cloud className="w-6 h-6 text-terracotta" />
                  </div>
                  <h3 className="text-xl font-bold mb-0 text-foreground">Weather Resistance</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Steel doesn't rot, swell, or attract pests — excellent for long-term durability.
                </p>
              </Card>

              <Card className="p-6 border-0 shadow-md bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-terracotta/10 p-2 rounded-lg">
                    <Wrench className="w-6 h-6 text-terracotta" />
                  </div>
                  <h3 className="text-xl font-bold mb-0 text-foreground">Maintenance</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Minimal. No termite treatments, no wood movement, fewer structural concerns.
                </p>
              </Card>

              <Card className="p-6 border-0 shadow-md bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-terracotta/10 p-2 rounded-lg">
                    <Maximize2 className="w-6 h-6 text-terracotta" />
                  </div>
                  <h3 className="text-xl font-bold mb-0 text-foreground">Design Flexibility</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Both steels allow for interesting layouts, but structural steel wins for huge spans.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who Each Option Is Best For */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Who Each Option Is Best For</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 border-2 border-terracotta/20 bg-terracotta/5 shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-terracotta">Cold-Form Steel Works Best For:</h3>
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
                      <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                      <p className="mb-0 text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 border-2 border-muted shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Traditional Structural Steel Works Best For:</h3>
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
          </div>
        </div>
      </section>

      {/* Common Myths */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-3 rounded-lg">
                <HelpCircle className="w-6 h-6 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 font-bold text-foreground">Common Myths (And the Real Facts)</h2>
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
                <Card key={i} className="p-6 border-0 shadow-md bg-white">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-start gap-3 mb-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <p className="font-bold mb-0 text-foreground">Myth:</p>
                      </div>
                      <p className="text-muted-foreground ml-8">{item.myth}</p>
                    </div>
                    <div>
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <p className="font-bold mb-0 text-foreground">Fact:</p>
                      </div>
                      <p className="text-foreground ml-8">{item.fact}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Real-World Scenarios</h2>
            
            <div className="space-y-4">
              <Card className="p-6 border-2 border-terracotta/20 shadow-md">
                <h3 className="text-xl font-bold mb-3 text-foreground">Scenario 1 — Building an ADU</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you want minimal disruption and a fast, clean build, CFS is usually the easiest option.
                </p>
              </Card>

              <Card className="p-6 border-2 border-terracotta/20 shadow-md">
                <h3 className="text-xl font-bold mb-3 text-foreground">Scenario 2 — A Long-Term Family Home</h3>
                <p className="text-muted-foreground leading-relaxed">
                  CFS gives durability, fire resistance, and decades of stability.
                </p>
              </Card>

              <Card className="p-6 border-2 border-terracotta/20 shadow-md">
                <h3 className="text-xl font-bold mb-3 text-foreground">Scenario 3 — A Giant Open Living Space</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A 30-foot open span? Structural steel is your friend.
                </p>
              </Card>

              <Card className="p-6 border-2 border-terracotta/20 shadow-md">
                <h3 className="text-xl font-bold mb-3 text-foreground">Scenario 4 — Asking Your Builder the Right Questions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Steel framing gives clear, measurable answers about longevity, performance, and maintenance.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Checklist */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">How to Choose: A Quick Checklist</h2>
            
            <Card className="p-8 bg-white border-0 shadow-md">
              <p className="text-lg font-bold mb-6 text-foreground">Ask yourself:</p>
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
                  <div key={i} className="flex items-start gap-3 p-3 bg-muted/10 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-terracotta text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {i + 1}
                    </div>
                    <p className="mb-0 font-medium text-foreground">{question}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-muted p-8 rounded-lg border-0 shadow-md">
            <div className="flex items-start gap-6 mb-6">
              <ImageWithFallback 
                src={johnMontgomeryPhoto}
                alt="John Montgomery"
                className="w-32 h-32 rounded-full object-cover flex-shrink-0 border-4 border-white shadow-md"
              />
              <div className="flex-1">
                <p className="text-sm text-terracotta font-bold mb-1">Author</p>
                <h3 className="text-2xl mb-2 font-bold text-foreground">John Montgomery</h3>
                <p className="text-muted-foreground font-medium">Owner of Cold Form Steel Canada, SteelBuilt Corp and Barndo Canada</p>
              </div>
            </div>
            <div className="text-muted-foreground leading-relaxed text-lg">
              <p>
                John Montgomery is a Canadian builder with decades of experience in steel construction, modular housing, and commercial fabrication. He leads the SteelBuilt Group and works directly with engineers, municipalities, and homeowners on projects across the country. His focus is simple: provide honest answers, Canadian made materials, and high quality steel homes that are fast to build and affordable to&nbsp;own.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Continue Learning Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-bold text-foreground">Continue Learning</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Explore more resources to help plan your steel building project
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('steel-vs-wood')}>
              <div className="p-6">
                <Factory className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">Steel vs. Wood Construction</h3>
                <p className="text-muted-foreground mb-4">
                  Compare the benefits of cold-formed steel framing versus traditional wood construction.
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-terracotta hover:text-terracotta/80 font-bold">
                  Read Article →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('benefits-cfs')}>
              <div className="p-6">
                <Home className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">Benefits of Cold-Formed Steel</h3>
                <p className="text-muted-foreground mb-4">
                  Discover why CFS is becoming the preferred choice for modern residential construction.
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-terracotta hover:text-terracotta/80 font-bold">
                  Read Article →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('factory-tour')}>
              <div className="p-6">
                <Wrench className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">Factory Tour</h3>
                <p className="text-muted-foreground mb-4">
                  See how we manufacture precision cold-formed steel components with FrameCAD technology.
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-terracotta hover:text-terracotta/80 font-bold">
                  Read Article →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-10 bg-primary text-white text-center rounded-2xl shadow-xl border-0">
            <h2 className="text-3xl md:text-4xl mb-6 text-white font-bold">
              Still Deciding?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Our experts can help you determine the best framing solution for your specific property and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-terracotta hover:bg-terracotta/90 text-white font-bold h-14 px-10 text-lg shadow-xl border-0 hover:scale-105 transition-transform duration-200"
              >
                Contact Our Team
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('learning')}
                className="font-bold h-14 px-10 text-lg bg-white text-primary hover:bg-white/90 border-0"
              >
                Back to Learning Centre
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
