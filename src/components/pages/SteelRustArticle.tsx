import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, Shield, Droplets, Building2, Clock3, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { HeadMeta } from '../HeadMeta';
import johnMontgomeryPhoto from 'figma:asset/f7589f12c4db2294f1600532a47c3b3c990ffc90.png';
import galvanizedSteelPanelsFactory from 'figma:asset/873d81c68dfb8cc6f4c6376fff3fe5797d4280dc.png';
import galvanizedSteelZincCoatingCloseup from 'figma:asset/3d863aa7142c801184b8c5dac95fd34b0bf0b5d6.png';
import steelFrameWallPanelsWithInsulationFactory from 'figma:asset/b38d99f3cce51a1f7adac71237da673f3ea93032.png';

interface SteelRustArticleProps {
  onNavigate: (page: string) => void;
}

export function SteelRustArticle({ onNavigate }: SteelRustArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="Does Steel Framing Rust? | Galvanized Steel Corrosion Facts"
        description="Will your cold-form steel frame rust? Learn about galvanized coating, corrosion resistance, 100+ year indoor lifespan, and why steel framing doesn't rust like you think."
        image="https://via.placeholder.com/1200x630/665f55/ffffff?text=Steel+Rust+Facts"
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
            Problems & Concerns
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6">
            Does Steel Framing Rust?
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            What homeowners need to know about cold formed steel in Canadian climates
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 10, 2025</span>
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
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                One of the first questions homeowners ask is about rust. It is a reasonable concern. When people think of steel, they picture a car in winter or a piece of metal left outside in the rain. The truth is very different. Cold formed steel framing is protected, engineered, and installed in a way that prevents rust from forming. It is designed to last for decades inside a dry, sealed wall system.
              </p>
              <p>
                This article explains how rust works, how cold formed steel prevents it, and why steel framing performs so well in Canadian homes and ADUs.
              </p>

              {/* Hero Image */}
              <div className="my-8 bg-white border rounded-lg overflow-hidden">
                <img 
                  src={galvanizedSteelPanelsFactory}
                  alt="Steel frame panels ready for assembly"
                  className="w-full h-96 object-cover"
                />
                <div className="p-4 bg-muted">
                  <p className="text-sm text-foreground mb-0">Cold formed steel framing is engineered to last for decades in Canadian climates</p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Galvanized Protection */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Cold Formed Steel Is Galvanized to Prevent Rust</h2>
                
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    The steel used in wall panels is coated with zinc during manufacturing. This is called galvanization. The zinc layer forms a protective barrier that stops moisture and oxygen from reaching the steel. Without those two elements, rust cannot form.
                  </p>
                  <p>
                    Cold formed steel used in framing is typically G60 or G90 galvanized, which means it has a thick, long lasting protective coating. This coating is rated to last for decades even in harsh conditions.
                  </p>

                  {/* Galvanization Visual */}
                  <div className="my-8 bg-white border rounded-lg overflow-hidden">
                    <img 
                      src={galvanizedSteelZincCoatingCloseup}
                      alt="Close-up of galvanized steel studs showing protective zinc coating in factory"
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-4 bg-muted">
                      <p className="text-sm text-foreground mb-0">Galvanized steel features a zinc coating that creates a protective barrier against moisture and oxygen</p>
                    </div>
                  </div>

                  {/* Infographic: How Galvanization Works */}
                  <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                    <h3 className="text-xl mb-4 text-foreground">How Galvanization Protects Steel</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl text-primary">1</span>
                        </div>
                        <p className="mb-2 text-foreground">Zinc Barrier</p>
                        <p className="text-sm mb-0">Zinc coating blocks moisture and oxygen from reaching the steel core</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl text-primary">2</span>
                        </div>
                        <p className="mb-2 text-foreground">Self-Healing</p>
                        <p className="text-sm mb-0">Even if scratched, zinc protects exposed areas through sacrificial corrosion</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl text-primary">3</span>
                        </div>
                        <p className="mb-2 text-foreground">Long-Lasting</p>
                        <p className="text-sm mb-0">G60/G90 coating rated for decades in harsh Canadian conditions</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Wall System Protection */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Steel Framing Lives Inside a Dry, Sealed Wall System</h2>
                
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Homeowners often compare steel framing to exposed outdoor metal, which is not the same environment. Once installed, steel studs sit inside:
                  </p>

                  {/* Wall Assembly Image */}
                  <div className="my-8 bg-white border rounded-lg overflow-hidden">
                    <img 
                      src={steelFrameWallPanelsWithInsulationFactory}
                      alt="Cold-form steel wall panels with insulation sheathing in factory assembly area"
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-4 bg-muted">
                      <p className="text-sm text-foreground mb-0">Steel framing is protected by multiple layers of insulation and moisture barriers</p>
                    </div>
                  </div>

                  {/* Infographic: Wall System Layers (Outside to Inside) */}
                  <Card className="p-6 bg-gradient-to-br from-[#8b9d83]/10 to-[#8b9d83]/5 border-[#8b9d83]/30">
                    <h3 className="text-xl mb-4 text-foreground">Wall System Layers: Outside to Inside</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-[#665f55] text-white rounded-lg flex items-center justify-center">
                          <span className="text-xl">1</span>
                        </div>
                        <div className="flex-1">
                          <p className="mb-1 text-foreground">Exterior Cladding</p>
                          <p className="text-sm mb-0">First line of defense against weather</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-[#665f55] text-white rounded-lg flex items-center justify-center">
                          <span className="text-xl">2</span>
                        </div>
                        <div className="flex-1">
                          <p className="mb-1 text-foreground">Weather Barrier</p>
                          <p className="text-sm mb-0">Stops moisture from entering wall cavity</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-[#665f55] text-white rounded-lg flex items-center justify-center">
                          <span className="text-xl">3</span>
                        </div>
                        <div className="flex-1">
                          <p className="mb-1 text-foreground">Continuous Insulation</p>
                          <p className="text-sm mb-0">Thermal break that keeps studs warm</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-primary text-white rounded-lg flex items-center justify-center">
                          <span className="text-xl">4</span>
                        </div>
                        <div className="flex-1">
                          <p className="mb-1 text-foreground">Galvanized Steel Studs</p>
                          <p className="text-sm mb-0">Protected by zinc coating, inside dry cavity</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-[#665f55] text-white rounded-lg flex items-center justify-center">
                          <span className="text-xl">5</span>
                        </div>
                        <div className="flex-1">
                          <p className="mb-1 text-foreground">Vapor Control Layer</p>
                          <p className="text-sm mb-0">Stops indoor humidity from reaching studs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-[#665f55] text-white rounded-lg flex items-center justify-center">
                          <span className="text-xl">6</span>
                        </div>
                        <div className="flex-1">
                          <p className="mb-1 text-foreground">Interior Drywall</p>
                          <p className="text-sm mb-0">Final layer, provides finished surface</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-white/50 rounded-lg border border-[#8b9d83]/30">
                      <p className="text-sm mb-0"><strong className="text-foreground">Result:</strong> Steel framing stays in a sealed, dry, stable environment where rust cannot form</p>
                    </div>
                  </Card>

                  <p>
                    Moisture is kept outside the wall cavity. Inside the wall, conditions stay dry and stable. This environment does not support rust.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Engineering */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-4">Corrosion Resistance Is Built Into the Engineering</h2>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                Cold formed steel framing is designed for long service life. The galvanization process, combined with proper detailing and insulation, protects the steel far beyond the lifespan of the average home.
              </p>
              <p>Engineering accounts for:</p>

              <div className="grid gap-3 my-6">
                <Card className="p-4 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                    <p className="mb-0">Humidity levels</p>
                  </div>
                </Card>
                <Card className="p-4 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                    <p className="mb-0">Long term exposure potential</p>
                  </div>
                </Card>
                <Card className="p-4 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                    <p className="mb-0">Indoor and outdoor temperature differences</p>
                  </div>
                </Card>
                <Card className="p-4 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                    <p className="mb-0">Dew point placement</p>
                  </div>
                </Card>
                <Card className="p-4 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                    <p className="mb-0">Moisture control strategies</p>
                  </div>
                </Card>
              </div>

              <p>
                This level of planning prevents corrosion before construction even begins.
              </p>
            </div>
          </section>

          <Separator />

          {/* Condensation */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Droplets className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">What About Condensation?</h2>
                
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Condensation is possible in any structure if the wall is not designed correctly. This applies to wood and steel. The key is to manage dew point placement so that moisture does not form on cold surfaces inside the wall.
                  </p>
                  <p>Steel homes prevent condensation by using:</p>

                  <div className="grid gap-4 my-6">
                    <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                        <p className="mb-0">
                          Continuous exterior insulation that keeps the studs warm
                        </p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                        <p className="mb-0">
                          Vapor barriers installed in the correct location for the climate
                        </p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                        <p className="mb-0">
                          Proper air sealing to stop humid indoor air from entering the wall
                        </p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
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
          </section>

          <Separator />

          {/* Lifespan */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Clock3 className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">How Long Does Galvanized Steel Last?</h2>
                
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Under normal residential conditions, galvanized cold formed steel can last more than one hundred years. The protective zinc layer corrodes very slowly and in a controlled way. Even if the coating is scratched, the zinc will self protect the exposed area through a process called sacrificial corrosion.
                  </p>
                  <p>
                    In other words, the coating protects the steel even when the surface is damaged.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Real World Evidence */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-4">Real World Evidence</h2>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>Steel framing is used in:</p>

              <div className="grid md:grid-cols-2 gap-3 my-6">
                <Card className="p-4 bg-muted">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                    <p className="mb-0">Commercial buildings</p>
                  </div>
                </Card>
                <Card className="p-4 bg-muted">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                    <p className="mb-0">Multifamily housing</p>
                  </div>
                </Card>
                <Card className="p-4 bg-muted">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                    <p className="mb-0">Hotels</p>
                  </div>
                </Card>
                <Card className="p-4 bg-muted">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                    <p className="mb-0">Schools</p>
                  </div>
                </Card>
                <Card className="p-4 bg-muted">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                    <p className="mb-0">Hospitals</p>
                  </div>
                </Card>
                <Card className="p-4 bg-muted">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                    <p className="mb-0">Industrial facilities</p>
                  </div>
                </Card>
              </div>

              <p>
                These buildings rely on cold formed steel because it remains stable and corrosion resistant for decades. The performance record is well proven.
              </p>
            </div>
          </section>

          <Separator />

          {/* Why Not to Worry */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-4">Why Homeowners Should Not Worry About Rust</h2>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                Cold formed steel framing in a residential wall is protected in three ways.
              </p>

              <div className="grid gap-4 my-6">
                <Card className="p-5 bg-primary/10 border-primary/30">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl text-primary flex-shrink-0 mt-1">1.</div>
                    <p className="mb-0 text-foreground">The steel is galvanized.</p>
                  </div>
                </Card>
                <Card className="p-5 bg-primary/10 border-primary/30">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl text-primary flex-shrink-0 mt-1">2.</div>
                    <p className="mb-0 text-foreground">The wall assembly keeps moisture outside the cavity.</p>
                  </div>
                </Card>
                <Card className="p-5 bg-primary/10 border-primary/30">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl text-primary flex-shrink-0 mt-1">3.</div>
                    <p className="mb-0 text-foreground">The structure stays dimensionally stable, so the wall layers never separate.</p>
                  </div>
                </Card>
              </div>

              <p>
                A wood framed home is far more vulnerable to moisture because wood swells, shrinks, and absorbs water. Steel does not absorb moisture and does not change shape. Once the structure is closed in, the framing remains dry and protected.
              </p>
            </div>
          </section>

          <Separator />

          {/* Bottom Line */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-4">The Bottom Line</h2>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <Card className="p-6 bg-primary/10 border-primary/30">
                <p className="text-xl text-foreground mb-0">
                  Cold formed steel framing does not rust inside a properly built wall system. It is protected by a galvanized coating, surrounded by modern moisture control layers, and installed in a stable, airtight assembly. For Canadian homes and ADUs, steel is one of the most durable and long lasting framing options available.
                </p>
              </Card>
            </div>
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

          {/* CTA */}
          <Card className="p-8 bg-accent text-white">
            <div className="text-center">
              <h3 className="text-2xl mb-4">Have Questions About Steel Construction?</h3>
              <p className="text-lg mb-6 text-white/90">
                Get honest answers and see if cold form steel is right for your project.
              </p>
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-white text-accent hover:bg-white/90"
              >
                Talk to Our Team
              </Button>
            </div>
          </Card>

          <Separator />

          {/* Continue Learning */}
          <section className="space-y-6">
            <h2 className="text-2xl mb-6">Continue Learning</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('reddit-myths')}>
                <Badge className="mb-3 bg-primary text-white">Problems & Concerns</Badge>
                <h3 className="text-lg mb-2">Reddit Myths vs. Reality</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  What people get wrong about steel framing online
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('steel-downsides')}>
                <Badge className="mb-3 bg-primary text-white">Problems & Concerns</Badge>
                <h3 className="text-lg mb-2">The Honest Downsides of Steel Framing</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Real concerns worth knowing before you build
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>7 min read</span>
                </div>
              </Card>

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
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}