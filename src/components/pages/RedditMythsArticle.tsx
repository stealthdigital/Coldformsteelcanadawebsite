import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, XCircle, Lightbulb, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';
import johnMontgomeryPhoto from 'figma:asset/f7589f12c4db2294f1600532a47c3b3c990ffc90.png';

interface RedditMythsArticleProps {
  onNavigate: (page: string) => void;
}

export function RedditMythsArticle({ onNavigate }: RedditMythsArticleProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Reddit Myths vs. Reality - Cold Form Steel Canada',
        text: 'What people get wrong about steel framing and the truth homeowners should know',
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="Steel Framing Myths Debunked | Reddit Misconceptions Answered"
        description="Debunking common myths about cold-form steel framing: WiFi interference, noise, thermal bridging, cost. Separating Reddit myths from construction reality with facts and data."
        image="https://via.placeholder.com/1200x630/665f55/ffffff?text=Myths+Debunked"
      />
      {/* Header */}
      <div className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('learning')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Learning Centre
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Badge className="mb-4 bg-primary text-white">Problems & Concerns</Badge>
          <h1 className="text-4xl md:text-5xl mb-6">
            Reddit Myths vs. Reality
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            What people get wrong about steel framing and the truth homeowners should know
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 10, 2025</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleShare}
              className="ml-auto"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="space-y-6">
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                Anyone who spends time on Reddit or homeowner forums has seen the same comments about steel framing. Some concerns are valid. Most are based on old information, bad renovations, or people comparing cold formed steel to flimsy basement studs.
              </p>
              <p>
                This guide explains the most common Reddit myths and what is actually true based on real projects, modern engineering, and the way Cold Form Steel Canada builds homes and ADUs today.
              </p>
            </div>
          </section>

          <Separator className="my-16" />

          {/* Myth 1 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 1: Steel framing rusts inside the walls</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> Cold formed steel is galvanized and protected inside a dry, sealed wall system.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    The steel never sees moisture. It is coated with zinc during manufacturing, surrounded by insulation, weather barriers, and drywall, and installed in a stable indoor environment. A properly designed steel home will last for decades without corrosion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Myth 2 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 2: Steel homes are cold because metal conducts heat</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> Thermal bridging is solved through continuous exterior insulation.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Modern steel assemblies include rigid insulation outside the studs. This breaks the thermal path and keeps the interior warm. Steel homes meet or exceed Canadian energy codes and maintain those performance levels for life because the framing does not move or shrink over time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Myth 3 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 3: Steel framing kills Wi-Fi and cell signal</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> Steel studs do not form a sealed barrier. Signals pass through without issues.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Homes have windows, doors, openings, and interior finishes that allow wireless signals to move freely. Clients report normal performance for Wi-Fi, Bluetooth, and mobile data.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Myth 4 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 4: Trades do not know how to work with steel</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> Most electricians, plumbers, and HVAC techs work with steel studs daily in commercial and multifamily buildings.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Residential cold formed steel is familiar to any trained contractor. The process is often easier because components are straight, consistent, and pre engineered.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Myth 5 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 5: Steel is too lightweight and feels flimsy</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> Structural cold formed steel is completely different from thin non structural basement studs.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Residential steel framing is engineered for load bearing strength. Once assembled and sheathed, the structure becomes very rigid. It performs exceptionally well under snow load and lateral forces.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Myth 6 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 6: Steel homes creak or make noise</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> Wood creaks because it expands and contracts. Steel does not.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    With a stable structure, seasonal noises are reduced. Steel stays the same size and shape year round which means fewer interior sound issues.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Myth 7 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 7: Steel framing is always more expensive</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> Steel can cost 10 to 15 percent more on materials, but total project cost often ends up equal or lower.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>Homeowners save through:</p>
                  <div className="grid gap-3 my-6">
                    <Card className="p-4 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                        <p className="mb-0">Faster framing</p>
                      </div>
                    </Card>
                    <Card className="p-4 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                        <p className="mb-0">Lower labour hours</p>
                      </div>
                    </Card>
                    <Card className="p-4 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                        <p className="mb-0">Reduced waste</p>
                      </div>
                    </Card>
                    <Card className="p-4 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                        <p className="mb-0">Stable material pricing</p>
                      </div>
                    </Card>
                    <Card className="p-4 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                        <p className="mb-0">Lower insurance</p>
                      </div>
                    </Card>
                    <Card className="p-4 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                        <p className="mb-0">No general contractor markup when acting as Owner Builder</p>
                      </div>
                    </Card>
                    <Card className="p-4 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                        <p className="mb-0">HST reclaim options</p>
                      </div>
                    </Card>
                  </div>
                  <p>
                    Once the full cost picture is considered, steel is competitive with wood and often more affordable for ADUs and rental units.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-16" />

          {/* Myth 8 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 8: You cannot hang cabinets or TVs on steel studs</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> Steel studs accept standard fasteners that are rated for heavy loads.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Because the structure is straight and stable, installations often turn out cleaner. Manufacturers provide fasteners designed for metal framing that work with cabinets, floating shelves, vanities, and wall mounted TVs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Myth 9 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 9: Condensation is a bigger problem with steel</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> Condensation comes from poor wall design, not from the framing material.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Steel homes avoid condensation issues by controlling the dew point. Continuous insulation, proper vapor barrier placement, and airtight construction keep moisture out of the wall and maintain long term durability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Myth 10 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 10: Steel framing attracts lightning</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> Framing material does not attract lightning. Height and grounding matter.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    A steel framed home is no more likely to be struck than a wood framed home. Steel structures perform well in storms because they are grounded and engineered for electrical safety.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Myth 11 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 11: Steel homes interfere with electrical work</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> Electricians already work with steel studs in almost every commercial building in Canada.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    They use the same tools and the process is quick because steel studs have pre punched holes for services.
                  </p>
                  <p>
                    Most trades prefer the precision and consistency.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Myth 12 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 12: Steel homes feel industrial</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> A steel framed home looks identical to a wood home once finished.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Drywall covers the framing. Cabinets, flooring, trim, paint, and fixtures are all the same. What changes is the quality behind the wall. You get straighter walls, cleaner corners, and longer lasting finishes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Myth 13 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 13: Steel framing is new and untested in Canada</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> Steel framing has been used for decades and is common in commercial construction, multifamily buildings, and new subdivisions.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Cold formed steel is growing quickly because lumber shortages, inconsistent quality, and labour gaps make wood framing less predictable.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Myth 14 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 14: Renovations and modifications are impossible</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> Steel can be modified with the right approach.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Cutting, reinforcing, and updating steel is straightforward when planned correctly. The benefit is fewer surprise structural issues because steel framing does not warp or degrade over time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Myth 15 */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Myth 15: Steel homes lose heat through studs</h2>
                <div className="bg-[#8b9d83]/10 border-l-4 border-[#8b9d83] p-6 rounded-r-lg mb-6">
                  <p className="mb-0"><strong className="text-foreground">Reality:</strong> The combination of continuous exterior insulation and airtight walls stops heat loss.</p>
                </div>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    A steel framed home stays warm in winter because the insulation design is modern, consistent, and stable.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Bottom Line */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">The Bottom Line</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Most Reddit concerns about steel framing come from misunderstanding old methods or comparing modern engineered systems to light gauge studs used in non structural work. Cold formed steel is strong, stable, energy efficient, and designed for Canadian conditions. It stays straight, stays dry, and stays airtight, which means better performance for the life of the home.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Author Bio */}
        <Separator className="my-12" />
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

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/20">
          <h3 className="text-2xl mb-4 text-center">Ready to Build with Steel?</h3>
          <p className="text-center text-muted-foreground mb-6">
            Get answers to your specific questions and see if steel framing is right for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-accent hover:bg-accent/90 text-white"
            >
              Talk to Our Team
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('models')}
            >
              View Models & Pricing
            </Button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card 
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onNavigate('steel-rust')}
            >
              <Badge className="mb-3 bg-primary text-white">Problems & Concerns</Badge>
              <h4 className="mb-2">Does Steel Framing Rust?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                What homeowners need to know about cold formed steel in Canadian climates
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </Card>

            <Card 
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onNavigate('steel-vs-wood')}
            >
              <Badge className="mb-3 bg-primary text-white">Comparisons</Badge>
              <h4 className="mb-2">Steel vs. Wood: Full Breakdown</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Honest comparison of costs, durability, and performance
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
            </Card>
          </div>
        </div>
      </article>
    </div>
  );
}