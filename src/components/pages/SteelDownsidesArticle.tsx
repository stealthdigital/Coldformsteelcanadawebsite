import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, AlertCircle, CheckCircle2, Thermometer, Volume2, Wrench, Droplets, Award, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';
import johnMontgomeryPhoto from 'figma:asset/f7589f12c4db2294f1600532a47c3b3c990ffc90.png';

interface SteelDownsidesArticleProps {
  onNavigate: (page: string) => void;
}

export function SteelDownsidesArticle({ onNavigate }: SteelDownsidesArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="Cold-Form Steel Disadvantages | Honest Steel Framing Cons"
        description="Honest assessment of cold-form steel framing disadvantages: higher material costs, specialized trades, thermal bridging concerns, and when wood might be better. Transparent comparison."
        image="https://via.placeholder.com/1200x630/665f55/ffffff?text=Steel+Downsides"
      />
      {/* Hero */}
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
            Honest Answers
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6">
            5 Honest Downsides of Steel-Framed Homes (and How We Solve Them)
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            Real complaints from real homeowners, and how Cold Form Steel Canada avoids the problems that show up on Reddit, YouTube, and construction forums.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 5, 2025</span>
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
                Steel homes attract strong opinions online. Most frustrations come from poor installation, bad detailing, or builders who treat steel the same way they treat wood. Our approach removes the risks buyers are worried about.
              </p>
            </div>
          </section>

          <Separator />

          {/* Downside 1: Thermal Performance */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Thermometer className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">1. "Steel homes have poor thermal performance."</h2>
                
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-red-900 mb-2"><strong>What people say</strong></p>
                        <p className="text-red-800 mb-0">
                          This is the most common complaint on Reddit. People report cold spots, sweating walls, and insulation that seems to lose its value because the steel conducts hot and cold too easily.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-5 rounded-lg">
                    <p className="mb-2"><strong className="text-foreground">Why it happens</strong></p>
                    <p className="mb-0">
                      Steel conducts temperature much more than wood. Without proper thermal breaks and the right insulation strategy, the wall can underperform.
                    </p>
                  </div>

                  <div>
                    <p className="mb-4"><strong className="text-foreground">How we solve it</strong></p>
                    <p className="mb-4">We design for high performance from the beginning.</p>

                    <div className="grid gap-4 my-6">
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Factory built wall panels with built in thermal breaks so every stud and connection is engineered before installation.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Full depth Rockwool insulation which resists moisture and maintains R value.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Correct exterior sheathing and detailing to avoid dew point issues.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Fast installation that closes the envelope quickly so weather cannot infiltrate open framing.
                          </p>
                        </div>
                      </Card>
                    </div>

                    <p>
                      Most thermal complaints online come from site built steel homes that were not detailed properly. Our panelized system prevents the failures that users warn about.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Downside 2: Noise */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Volume2 className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">2. "Steel homes are noisy, tinny, or full of pops."</h2>
                
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-red-900 mb-2"><strong>What people say</strong></p>
                        <p className="text-red-800 mb-0">
                          Owners describe hollow sounding walls or popping and cracking noises in the morning as the home warms up.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-5 rounded-lg">
                    <p className="mb-2"><strong className="text-foreground">Why it happens</strong></p>
                    <p className="mb-0">
                      Expansion noise comes from loose spans, inconsistent fastening, and weak sheathing.
                    </p>
                  </div>

                  <div>
                    <p className="mb-4"><strong className="text-foreground">How we solve it</strong></p>

                    <div className="grid gap-4 my-6">
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Rigid factory secured wall panels that remove the loose connections that cause vibration.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Concrete board sheathing that adds mass and reduces resonance.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Accurate in plant framing that prevents shifting or settling on site.
                          </p>
                        </div>
                      </Card>
                    </div>

                    <p>
                      A well engineered steel home is quiet. The noisy ones were built with shortcuts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Downside 3: Renovations */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Wrench className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">3. "Steel is harder to renovate or hang things on."</h2>
                
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-red-900 mb-2"><strong>What people say</strong></p>
                        <p className="text-red-800 mb-0">
                          Some people online say steel studs are difficult to cut, drill, or fasten into. Others say you cannot modify walls later.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-5 rounded-lg">
                    <p className="mb-2"><strong className="text-foreground">Why it happens</strong></p>
                    <p className="mb-0">
                      Steel behaves differently than wood. Many builders do not explain these differences to homeowners.
                    </p>
                  </div>

                  <div>
                    <p className="mb-4"><strong className="text-foreground">How we solve it</strong></p>

                    <div className="grid gap-4 my-6">
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Drawings that clearly identify structural and non structural walls so homeowners know what can be changed.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Interior walls that can still be modified with the correct screws and tools.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Interior Concierge Service that helps plan layouts, fixtures, and blocking so future changes are rarely needed.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Optional pre installed backing for televisions, cabinets, and shelving.
                          </p>
                        </div>
                      </Card>
                    </div>

                    <p>
                      Steel is not harder to live with. It simply benefits from good planning, which we provide from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Downside 4: Condensation */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Droplets className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">4. "Steel attracts condensation or moisture."</h2>
                
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-red-900 mb-2"><strong>What people say</strong></p>
                        <p className="text-red-800 mb-0">
                          Homeowners in colder climates report condensation on steel studs, moisture inside walls, or insulation performance dropping.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-5 rounded-lg">
                    <p className="mb-2"><strong className="text-foreground">Why it happens</strong></p>
                    <p className="mb-0">
                      Moisture problems occur when builders skip proper insulation techniques or fail to control vapor flow.
                    </p>
                  </div>

                  <div>
                    <p className="mb-4"><strong className="text-foreground">How we solve it</strong></p>

                    <div className="grid gap-4 my-6">
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            All panels are built indoors so framing never sits in snow, rain, or damp conditions.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Rockwool insulation which does not lose performance when humidity changes.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Wall assemblies engineered to control the dew point.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Fast installation that closes the structure within four to five days.
                          </p>
                        </div>
                      </Card>
                    </div>

                    <p>
                      Most online complaints reflect site built framing. Our plant built method removes those risks completely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Downside 5: Builder Knowledge */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">5. "Steel only works if the builder knows what they are doing."</h2>
                
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-red-900 mb-2"><strong>What people say</strong></p>
                        <p className="text-red-800 mb-0">
                          Homeowners often write that steel is excellent but only if the crew understands the material. Poor builders cause problems that show up for years.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-5 rounded-lg">
                    <p className="mb-2"><strong className="text-foreground">Why it happens</strong></p>
                    <p className="mb-0">
                      Steel is precise. A crew that treats it like wood can cause major performance issues.
                    </p>
                  </div>

                  <div>
                    <p className="mb-4"><strong className="text-foreground">How we solve it</strong></p>

                    <div className="grid gap-4 my-6">
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            FrameCAD engineered manufacturing where every stud, screw, and connection is calculated.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Factory specialists at our partner facility EBS who build every panel.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Our own erection teams, not random subcontractors.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Documented measurements and site photos that allow engineers to sign off remotely when needed.
                          </p>
                        </div>
                      </Card>
                      <Card className="p-5 bg-[#8b9d83]/5 border-[#8b9d83]/30">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8b9d83' }} />
                          <p className="mb-0">
                            Permit support, engineering support, and help dealing with municipalities.
                          </p>
                        </div>
                      </Card>
                    </div>

                    <p>
                      The industry is known for high pressure sales and hidden pricing. We operate as a factory direct, Canadian made solution with clear information and complete support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Conclusion */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-4">The takeaway</h2>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                Steel has downsides when it is built the old fashioned way. With plant built precision, correct insulation, fast installation, and full engineering support, the issues people describe online are avoided.
              </p>

              <Card className="p-6 bg-primary/10 border-primary/30">
                <p className="text-xl text-foreground mb-0">
                  Cold Form Steel Canada removes the risks and delivers homes that are strong, quiet, energy efficient, non combustible, and ready months sooner than traditional builds.
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

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('steel-rust')}>
                <Badge className="mb-3 bg-primary text-white">Problems & Concerns</Badge>
                <h3 className="text-lg mb-2">Does Steel Framing Rust?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  What homeowners need to know about cold formed steel
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>6 min read</span>
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