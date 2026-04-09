import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Clock, Calendar, Share2, XCircle, CheckCircle2, Wifi, Volume2, Thermometer, DollarSign, Shield, Zap, TrendingUp, MessageCircle, Lightbulb, AlertCircle, FileText } from 'lucide-react';
import { HeadMeta } from '../HeadMeta';
import { ArticleSchema } from '../schema/ArticleSchema';
import { shareArticle } from '../../utils/share';

import { CloudinaryImages } from '../../config/cloudinary-urls';

// Author photo
const johnMontgomeryPhoto = CloudinaryImages.learning.johnMontgomery;

interface RedditMythsArticleProps {
  onNavigate: (page: string) => void;
}

export function RedditMythsArticle({ onNavigate }: RedditMythsArticleProps) {
  const headerImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/main/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';

  return (
    <div className="min-h-screen bg-background pt-16">
      <HeadMeta 
        title="Steel Framing Myths Debunked | Reddit Misconceptions Answered"
        description="Debunking common myths about cold-form steel framing: WiFi interference, noise, thermal bridging, cost. Separating Reddit myths from construction reality with facts and data."
        image={headerImage}
      />
      <ArticleSchema
        headline="Reddit Myths vs. Reality"
        description="What people get wrong about steel framing and the truth homeowners should know"
        author={{ name: 'John Montgomery', jobTitle: 'Owner, SteelBuilt Group of Companies' }}
        datePublished="2026-01-14"
        category="Problems & Concerns"
        keywords={['steel framing myths', 'Reddit steel myths', 'cold form steel misconceptions', 'steel home concerns', 'steel vs wood myths']}
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
            Problems & Concerns
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6 font-bold text-foreground">
            Reddit Myths vs. Reality
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            What people get wrong about steel framing and the truth homeowners should know
          </p>

          <div className="flex items-center gap-6 text-sm text-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-terracotta" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-terracotta" />
              <span>January 2026</span>
            </div>
            <button 
              onClick={() => shareArticle({
                title: 'Reddit Myths vs. Reality',
                text: 'What people get wrong about steel framing and the truth homeowners should know'
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
          <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
            <p>
              Anyone who spends time on Reddit or homeowner forums has seen the same comments about steel framing. Some concerns are valid. Most are based on old information, bad renovations, or people comparing cold formed steel to flimsy basement studs.
            </p>
            <p>
              This guide explains the most common Reddit myths and what is actually true based on real projects, modern engineering, and the way Cold Form Steel Canada builds homes and ADUs today.
            </p>
          </div>
        </div>
      </section>

      {/* Myth 1 */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 1: Steel framing rusts inside the walls</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> Cold formed steel is galvanized and protected inside a dry, sealed wall system.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    The steel never sees moisture. It is coated with zinc during manufacturing, surrounded by insulation, weather barriers, and drywall, and installed in a stable indoor environment. A properly designed steel home will last for decades without corrosion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth 2 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 2: Steel homes are cold because metal conducts heat</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> Thermal bridging is solved through continuous exterior insulation.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Modern steel assemblies include rigid insulation outside the studs. This breaks the thermal path and keeps the interior warm. Steel homes meet or exceed Canadian energy codes and maintain those performance levels for life because the framing does not move or shrink over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth 3 */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 3: Steel framing kills Wi-Fi and cell signal</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> Steel studs do not form a sealed barrier. Signals pass through without issues.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Homes have windows, doors, openings, and interior finishes that allow wireless signals to move freely. Clients report normal performance for Wi-Fi, Bluetooth, and mobile data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth 4 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 4: Trades do not know how to work with steel</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> Most electricians, plumbers, and HVAC techs work with steel studs daily in commercial and multifamily buildings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth 5 */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 5: Steel is too lightweight and feels flimsy</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> Structural cold formed steel is completely different from thin non structural basement studs.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Residential steel framing is engineered for load bearing strength. Once assembled and sheathed, the structure becomes very rigid. It performs exceptionally well under snow load and lateral forces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth 6 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 6: Steel homes creak or make noise</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> Wood creaks because it expands and contracts. Steel does not.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth 7 */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 7: Steel framing is always more expensive</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> Steel can cost 10 to 15 percent more on materials, but total project cost often ends up equal or lower.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>Homeowners save through:</p>
                  <div className="grid gap-4 my-6">
                    <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                        <p className="mb-0 text-foreground">Faster framing</p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                        <p className="mb-0 text-foreground">Lower labour hours</p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                        <p className="mb-0 text-foreground">Reduced waste</p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                        <p className="mb-0 text-foreground">Stable material pricing</p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                        <p className="mb-0 text-foreground">Lower insurance</p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                        <p className="mb-0 text-foreground">No general contractor markup when acting as Owner Builder</p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                        <p className="mb-0 text-foreground">HST reclaim options</p>
                      </div>
                    </Card>
                  </div>
                  <p>
                    Once the full cost picture is considered, steel is competitive with wood and often more affordable for ADUs and rental units.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth 8 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 8: You cannot hang cabinets or TVs on steel studs</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> Steel studs accept standard fasteners that are rated for heavy loads.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Because the structure is straight and stable, installations often turn out cleaner. Manufacturers provide fasteners designed for metal framing that work with cabinets, floating shelves, vanities, and wall mounted TVs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth 9 */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 9: Condensation is a bigger problem with steel</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> Condensation comes from poor wall design, not from the framing material.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth 10 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 10: Steel framing attracts lightning</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> Framing material does not attract lightning. Height and grounding matter.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    A steel framed home is no more likely to be struck than a wood framed home. Steel structures perform well in storms because they are grounded and engineered for electrical safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth 11 */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 11: Steel homes interfere with electrical work</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> Electricians already work with steel studs in almost every commercial building in Canada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth 12 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 12: Steel homes feel industrial</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> A steel framed home looks identical to a wood home once finished.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth 13 */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 13: Steel framing is new and untested in Canada</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> Steel framing has been used for decades and is common in commercial construction, multifamily buildings, and new subdivisions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth 14 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 14: Renovations and modifications are impossible</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> Steel can be modified with the right approach.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Cutting, reinforcing, and updating steel is straightforward when planned correctly. The benefit is fewer surprise structural issues because steel framing does not warp or degrade over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth 15 */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-4 rounded-xl">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Myth 15: Steel homes lose heat through studs</h2>
                <div className="bg-terracotta/10 border-l-8 border-terracotta p-6 rounded-r-xl shadow-md mb-6">
                  <p className="mb-0 text-foreground text-lg"><strong className="text-foreground">Reality:</strong> The combination of continuous exterior insulation and airtight walls stops heat loss.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Lightbulb className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">The Bottom Line</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <Card className="p-8 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-2 border-terracotta/30 rounded-xl shadow-xl">
                    <p className="text-xl mb-0 text-foreground leading-relaxed">
                      Most Reddit concerns about steel framing come from misunderstanding old methods or comparing modern engineered systems to light gauge studs used in non structural work. Cold formed steel is strong, stable, energy efficient, and designed for Canadian conditions. It stays straight, stays dry, and stays airtight, which means better performance for the life of the home.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white p-8 rounded-lg border-0 shadow-md">
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

      {/* Continue Learning */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-bold text-foreground">Continue Learning</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Explore more resources to help plan your steel building project
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('steel-downsides')}>
              <div className="p-6">
                <AlertCircle className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">Honest Downsides of Steel</h3>
                <p className="text-muted-foreground mb-4">
                  Real concerns worth knowing before you build.
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-terracotta hover:text-terracotta/80 font-bold">
                  Read Article →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('steel-rust')}>
              <div className="p-6">
                <Shield className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">Does Steel Framing Rust?</h3>
                <p className="text-muted-foreground mb-4">
                  What homeowners need to know about cold formed steel in Canadian climates.
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-terracotta hover:text-terracotta/80 font-bold">
                  Read Article →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('steel-vs-wood')}>
              <div className="p-6">
                <Zap className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">Steel vs. Wood: Full Breakdown</h3>
                <p className="text-muted-foreground mb-4">
                  Compare costs, timelines, durability, and real-world performance.
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-10 bg-primary text-white text-center rounded-2xl shadow-xl border-0">
            <h2 className="text-3xl md:text-4xl mb-6 text-white font-bold">
              Ready to Build with Steel?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Get answers to your specific questions and see if steel framing is right for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-terracotta hover:bg-terracotta/90 text-white font-bold h-14 px-10 text-lg shadow-xl border-0 hover:scale-105 transition-transform duration-200"
              >
                Talk to Our Team
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
