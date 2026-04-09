import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, Shield, Droplets, Building2, Clock3, AlertCircle, Zap, FileText } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { HeadMeta } from '../HeadMeta';
import { ArticleSchema } from '../schema/ArticleSchema';
import { shareArticle } from '../../utils/share';

import { CloudinaryImages } from '../../config/cloudinary-urls';

// GitHub URLs for article images
const johnMontgomeryPhoto = CloudinaryImages.learning.johnMontgomery;
const galvanizedSteelPanelsFactory = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Learning%20Centre/Galvanized%20steel%20features%20a%20zinc%20coating%20that%20creates%20a%20protective%20barrier%20against%20moisture%20and%20oxygen.jpeg';
const galvanizedSteelZincCoatingCloseup = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Learning%20Centre/Galvanized%20steel%20features%20a%20zinc%20coating%20that%20creates%20a%20protective%20barrier%20against%20moisture%20and%20oxygen.jpeg';
const steelFrameWallPanelsWithInsulationFactory = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Learning%20Centre/Wall%20panels%20engineered%20and%20assembled%20in%20our%20factory.jpeg';

interface SteelRustArticleProps {
  onNavigate: (page: string) => void;
}

export function SteelRustArticle({ onNavigate }: SteelRustArticleProps) {
  const headerImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/main/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';

  return (
    <div className="min-h-screen bg-background pt-16">
      <HeadMeta 
        title="Does Steel Framing Rust? | Galvanized Steel Corrosion Facts"
        description="Will your cold-form steel frame rust? Learn about galvanized coating, corrosion resistance, 100+ year indoor lifespan, and why steel framing doesn't rust like you think."
        image={headerImage}
      />
      <ArticleSchema
        headline="Does Steel Framing Rust?"
        description="What homeowners need to know about cold formed steel in Canadian climates"
        author={{ name: 'John Montgomery', jobTitle: 'Owner, SteelBuilt Group of Companies' }}
        datePublished="2026-01-14"
        category="Problems & Concerns"
        keywords={['steel framing rust', 'galvanized steel', 'cold form steel corrosion', 'steel durability', 'rust prevention']}
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
            Does Steel Framing Rust?
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            What homeowners need to know about cold formed steel in Canadian climates
          </p>

          <div className="flex items-center gap-6 text-sm text-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-terracotta" />
              <span>6 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-terracotta" />
              <span>January 2026</span>
            </div>
            <button 
              onClick={() => shareArticle({
                title: 'Does Steel Framing Rust?',
                text: 'What homeowners need to know about cold formed steel in Canadian climates'
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
              One of the first questions homeowners ask is about rust. It is a reasonable concern. When people think of steel, they picture a car in winter or a piece of metal left outside in the rain. The truth is very different. Cold formed steel framing is protected, engineered, and installed in a way that prevents rust from forming. It is designed to last for decades inside a dry, sealed wall system.
            </p>
            <p>
              This article explains how rust works, how cold formed steel prevents it, and why steel framing performs so well in Canadian homes and ADUs.
            </p>

            {/* Hero Image */}
            <div className="my-8 bg-white border-2 border-terracotta/20 rounded-xl overflow-hidden shadow-xl">
              <img 
                src={galvanizedSteelPanelsFactory}
                alt="Steel frame panels ready for assembly"
                className="w-full h-96 object-cover"
              />
              <div className="p-4 bg-muted/30">
                <p className="text-sm text-foreground mb-0">Cold formed steel framing is engineered to last for decades in Canadian climates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galvanized Protection */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Shield className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Cold Formed Steel Is Galvanized to Prevent Rust</h2>
                
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    The steel used in wall panels is coated with zinc during manufacturing. This is called galvanization. The zinc layer forms a protective barrier that stops moisture and oxygen from reaching the steel. Without those two elements, rust cannot form.
                  </p>
                  <p>
                    Cold formed steel used in framing is typically G60 or G90 galvanized, which means it has a thick, long lasting protective coating. This coating is rated to last for decades even in harsh conditions.
                  </p>

                  {/* Galvanization Visual */}
                  <div className="my-8 bg-white border-2 border-terracotta/20 rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={galvanizedSteelZincCoatingCloseup}
                      alt="Close-up of galvanized steel studs showing protective zinc coating in factory"
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-4 bg-muted/30">
                      <p className="text-sm text-foreground mb-0">Galvanized steel features a zinc coating that creates a protective barrier against moisture and oxygen</p>
                    </div>
                  </div>

                  {/* Infographic: How Galvanization Works */}
                  <Card className="p-8 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-2 border-terracotta/30 rounded-xl shadow-xl">
                    <h3 className="text-2xl mb-6 font-bold text-foreground">How Galvanization Protects Steel</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-terracotta/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl text-terracotta font-bold">1</span>
                        </div>
                        <p className="mb-2 text-foreground font-bold">Zinc Barrier</p>
                        <p className="text-sm mb-0">Zinc coating blocks moisture and oxygen from reaching the steel core</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-terracotta/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl text-terracotta font-bold">2</span>
                        </div>
                        <p className="mb-2 text-foreground font-bold">Self-Healing</p>
                        <p className="text-sm mb-0">Even if scratched, zinc protects exposed areas through sacrificial corrosion</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-terracotta/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl text-terracotta font-bold">3</span>
                        </div>
                        <p className="mb-2 text-foreground font-bold">Long-Lasting</p>
                        <p className="text-sm mb-0">G60/G90 coating rated for decades in harsh Canadian conditions</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wall System Protection */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Building2 className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Steel Framing Lives Inside a Dry, Sealed Wall System</h2>
                
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Homeowners often compare steel framing to exposed outdoor metal, which is not the same environment. Once installed, steel studs sit inside:
                  </p>

                  {/* Wall Assembly Image */}
                  <div className="my-8 bg-white border-2 border-terracotta/20 rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={steelFrameWallPanelsWithInsulationFactory}
                      alt="Cold-form steel wall panels with insulation sheathing in factory assembly area"
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-4 bg-muted/30">
                      <p className="text-sm text-foreground mb-0">Steel framing is protected by multiple layers of insulation and moisture barriers</p>
                    </div>
                  </div>

                  {/* Infographic: Wall System Layers (Outside to Inside) */}
                  <Card className="p-8 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-2 border-terracotta/30 rounded-xl shadow-xl">
                    <h3 className="text-2xl mb-6 font-bold text-foreground">Wall System Layers: Outside to Inside</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-terracotta text-white rounded-lg flex items-center justify-center font-bold">
                          <span className="text-xl">1</span>
                        </div>
                        <div className="flex-1">
                          <p className="mb-1 text-foreground font-bold">Exterior Cladding</p>
                          <p className="text-sm mb-0">First line of defense against weather</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-terracotta/80 text-white rounded-lg flex items-center justify-center font-bold">
                          <span className="text-xl">2</span>
                        </div>
                        <div className="flex-1">
                          <p className="mb-1 text-foreground font-bold">Weather Barrier</p>
                          <p className="text-sm mb-0">Stops moisture from entering wall cavity</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-terracotta/60 text-white rounded-lg flex items-center justify-center font-bold">
                          <span className="text-xl">3</span>
                        </div>
                        <div className="flex-1">
                          <p className="mb-1 text-foreground font-bold">Continuous Insulation</p>
                          <p className="text-sm mb-0">Thermal break that keeps studs warm</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-terracotta/40 text-white rounded-lg flex items-center justify-center font-bold">
                          <span className="text-xl">4</span>
                        </div>
                        <div className="flex-1">
                          <p className="mb-1 text-foreground font-bold">Galvanized Steel Studs</p>
                          <p className="text-sm mb-0">Protected by zinc coating, inside dry cavity</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-terracotta/20 text-foreground rounded-lg flex items-center justify-center font-bold border-2 border-terracotta">
                          <span className="text-xl">5</span>
                        </div>
                        <div className="flex-1">
                          <p className="mb-1 text-foreground font-bold">Vapor Control Layer</p>
                          <p className="text-sm mb-0">Stops indoor humidity from reaching studs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-terracotta/10 text-foreground rounded-lg flex items-center justify-center font-bold border-2 border-terracotta">
                          <span className="text-xl">6</span>
                        </div>
                        <div className="flex-1">
                          <p className="mb-1 text-foreground font-bold">Interior Drywall</p>
                          <p className="text-sm mb-0">Final layer, provides finished surface</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-white/50 rounded-lg border-2 border-terracotta/30">
                      <p className="text-sm mb-0"><strong className="text-foreground">Result:</strong> Steel framing stays in a sealed, dry, stable environment where rust cannot form</p>
                    </div>
                  </Card>

                  <p>
                    Moisture is kept outside the wall cavity. Inside the wall, conditions stay dry and stable. This environment does not support rust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Corrosion Resistance Is Built Into the Engineering</h2>
            <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
              <p>
                Cold formed steel framing is designed for long service life. The galvanization process, combined with proper detailing and insulation, protects the steel far beyond the lifespan of the average home.
              </p>
              <p>Engineering accounts for:</p>

              <div className="grid gap-4 my-6">
                <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                    <p className="mb-0 text-foreground">Humidity levels</p>
                  </div>
                </Card>
                <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                    <p className="mb-0 text-foreground">Long term exposure potential</p>
                  </div>
                </Card>
                <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                    <p className="mb-0 text-foreground">Indoor and outdoor temperature differences</p>
                  </div>
                </Card>
                <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                    <p className="mb-0 text-foreground">Dew point placement</p>
                  </div>
                </Card>
                <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                    <p className="mb-0 text-foreground">Moisture control strategies</p>
                  </div>
                </Card>
              </div>

              <p>
                This level of planning prevents corrosion before construction even begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Condensation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Droplets className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">What About Condensation?</h2>
                
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Condensation is possible in any structure if the wall is not designed correctly. This applies to wood and steel. The key is to manage dew point placement so that moisture does not form on cold surfaces inside the wall.
                  </p>
                  <p>Steel homes prevent condensation by using:</p>

                  <div className="grid gap-4 my-6">
                    <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                        <p className="mb-0">
                          Continuous exterior insulation that keeps the studs warm
                        </p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                        <p className="mb-0">
                          Vapor barriers installed in the correct location for the climate
                        </p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                        <p className="mb-0">
                          Proper air sealing to stop humid indoor air from entering the wall
                        </p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-terracotta/5 border-l-8 border-terracotta rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-terracotta" />
                        <p className="mb-0">
                          Rigid cladding systems that keep water out
                        </p>
                      </div>
                    </Card>
                  </div>

                  <p>
                    With the right assembly, condensation never reaches the metal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifespan */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Clock3 className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">How Long Does Galvanized Steel Last?</h2>
                
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Under normal residential conditions, galvanized cold formed steel can last more than one hundred years. The protective zinc layer corrodes very slowly and in a controlled way. Even if the coating is scratched, the zinc will self protect the exposed area through a process called sacrificial corrosion.
                  </p>
                  <p>
                    In other words, the coating protects the steel even when the surface is damaged.
                  </p>

                  <Card className="p-8 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-2 border-terracotta/30 rounded-xl shadow-xl">
                    <p className="text-2xl font-bold mb-4 text-terracotta">100+ Years</p>
                    <p className="text-lg mb-0">Expected lifespan of galvanized cold formed steel in properly built residential wall systems</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real World Evidence */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Real World Evidence</h2>
            <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
              <p>Steel framing is used in:</p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="p-5 bg-white shadow-md border-2 border-terracotta/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-terracotta" />
                    <p className="mb-0 font-bold text-foreground">Commercial buildings</p>
                  </div>
                </Card>
                <Card className="p-5 bg-white shadow-md border-2 border-terracotta/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-terracotta" />
                    <p className="mb-0 font-bold text-foreground">Multifamily housing</p>
                  </div>
                </Card>
                <Card className="p-5 bg-white shadow-md border-2 border-terracotta/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-terracotta" />
                    <p className="mb-0 font-bold text-foreground">Hotels</p>
                  </div>
                </Card>
                <Card className="p-5 bg-white shadow-md border-2 border-terracotta/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-terracotta" />
                    <p className="mb-0 font-bold text-foreground">Schools</p>
                  </div>
                </Card>
                <Card className="p-5 bg-white shadow-md border-2 border-terracotta/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-terracotta" />
                    <p className="mb-0 font-bold text-foreground">Hospitals</p>
                  </div>
                </Card>
                <Card className="p-5 bg-white shadow-md border-2 border-terracotta/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-terracotta" />
                    <p className="mb-0 font-bold text-foreground">Industrial facilities</p>
                  </div>
                </Card>
              </div>

              <p>
                These buildings rely on cold formed steel because it remains stable and corrosion resistant for decades. The performance record is well proven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Not to Worry */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Why Homeowners Should Not Worry About Rust</h2>
            <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
              <p>
                Cold formed steel framing in a residential wall is protected in three ways.
              </p>

              <div className="grid gap-4 my-6">
                <Card className="p-6 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-2 border-terracotta/30 rounded-xl shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-terracotta flex-shrink-0 mt-1 font-bold">1.</div>
                    <p className="mb-0 text-foreground text-lg">The steel is galvanized.</p>
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-2 border-terracotta/30 rounded-xl shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-terracotta flex-shrink-0 mt-1 font-bold">2.</div>
                    <p className="mb-0 text-foreground text-lg">The wall assembly keeps moisture outside the cavity.</p>
                  </div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-2 border-terracotta/30 rounded-xl shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-terracotta flex-shrink-0 mt-1 font-bold">3.</div>
                    <p className="mb-0 text-foreground text-lg">The structure stays dimensionally stable, so the wall layers never separate.</p>
                  </div>
                </Card>
              </div>

              <p>
                A wood framed home is far more vulnerable to moisture because wood swells, shrinks, and absorbs water. Steel does not absorb moisture and does not change shape. Once the structure is closed in, the framing remains dry and protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">The Bottom Line</h2>
            <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
              <Card className="p-8 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-2 border-terracotta/30 rounded-xl shadow-xl">
                <p className="text-xl text-foreground mb-0 leading-relaxed">
                  Cold formed steel framing does not rust inside a properly built wall system. It is protected by a galvanized coating, surrounded by modern moisture control layers, and installed in a stable, airtight assembly. For Canadian homes and ADUs, steel is one of the most durable and long lasting framing options available.
                </p>
              </Card>
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

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('steel-vs-wood')}>
              <div className="p-6">
                <Zap className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">Steel vs. Wood: Full Breakdown</h3>
                <p className="text-muted-foreground mb-4">
                  Honest comparison of costs, durability, and performance.
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-terracotta hover:text-terracotta/80 font-bold">
                  Read Article →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('framecad')}>
              <div className="p-6">
                <FileText className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">Why FrameCAD Matters</h3>
                <p className="text-muted-foreground mb-4">
                  The technology behind precision steel manufacturing.
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
              Have Questions About Steel Construction?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Get honest answers and see if cold form steel is right for your project.
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
                className="bg-white text-primary hover:bg-white/90 border-0 font-bold h-14 px-10 text-lg shadow-lg"
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
