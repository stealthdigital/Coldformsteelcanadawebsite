import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Clock, Calendar, Share2, AlertTriangle, DollarSign, Users, Thermometer, Wrench, TrendingUp, CheckCircle2, Shield, Zap, Volume2, Droplets, Award } from 'lucide-react';
import { HeadMeta } from '../HeadMeta';
import { ArticleSchema } from '../schema/ArticleSchema';

// GitHub URL for author photo
const johnMontgomeryPhoto = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Team/John%20Montgomery.png';

interface SteelDownsidesArticleProps {
  onNavigate: (page: string) => void;
}

export function SteelDownsidesArticle({ onNavigate }: SteelDownsidesArticleProps) {
  const headerImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/main/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';

  return (
    <div className="min-h-screen bg-white pt-16">
      <HeadMeta 
        title="Cold-Form Steel Disadvantages | Honest Steel Framing Cons"
        description="Honest assessment of cold-form steel framing disadvantages: higher material costs, specialized trades, thermal bridging concerns, and when wood might be better."
        image={headerImage}
      />
      <ArticleSchema
        headline="5 Honest Downsides of Steel-Framed Homes (and How We Solve Them)"
        description="Real complaints from real homeowners, and how Cold Form Steel Canada avoids the problems that show up on Reddit, YouTube, and construction forums."
        author={{ name: 'John Montgomery', jobTitle: 'Owner, SteelBuilt Group of Companies' }}
        datePublished="2026-01-14"
        category="Honest Answers"
        keywords={['steel home downsides', 'steel framing problems', 'cold form steel disadvantages', 'steel home complaints', 'thermal bridging steel']}
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
            Honest Answers
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6 font-bold">
            5 Honest Downsides of Steel-Framed Homes (and How We Solve Them)
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Real complaints from real homeowners, and how Cold Form Steel Canada avoids the problems that show up on Reddit, YouTube, and construction forums.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>5 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>January, 2026</span>
            </div>
            <Button variant="ghost" size="sm" className="ml-auto gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <div className="space-y-10">
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
              <div className="bg-primary/10 p-4 rounded-xl">
                <Thermometer className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold">1. &ldquo;Steel homes have poor thermal performance.&rdquo;</h2>
                
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-destructive mb-3">What people say</p>
                    <p className="text-lg leading-relaxed">
                      This is the most common complaint on Reddit. People report cold spots, sweating walls, and insulation that seems to lose its value because the steel conducts hot and cold too easily.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Why it happens</p>
                    <p className="text-lg leading-relaxed">
                      Steel conducts temperature much more than wood. Without proper thermal breaks and the right insulation strategy, the wall can underperform.
                    </p>
                  </div>

                  <Card className="bg-gradient-to-br from-sage/20 to-sage/10 p-8 rounded-xl border-2 border-sage/30 shadow-xl">
                    <p className="mb-4 font-bold text-foreground text-xl">How we solve it</p>
                    <p className="text-lg leading-relaxed mb-6">
                      We design for high performance from the beginning.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Factory built wall panels with built in thermal breaks so every stud and connection is engineered before installation.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Full depth Rockwool insulation which resists moisture and maintains R value.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Correct exterior sheathing and detailing to avoid dew point issues.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Fast installation that closes the envelope quickly so weather cannot infiltrate open framing.</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="bg-primary/5 p-6 border-l-8 border-primary rounded-xl">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">Most thermal complaints online come from site built steel homes that were not detailed properly.</strong> Our panelized system prevents the failures that users warn about.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Downside 2: Noise */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-4 rounded-xl">
                <Volume2 className="w-8 h-8 text-secondary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold">2. &ldquo;Steel homes are noisy, tinny, or full of pops.&rdquo;</h2>
                
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-destructive mb-3">What people say</p>
                    <p className="text-lg leading-relaxed">
                      Owners describe hollow sounding walls or popping and cracking noises in the morning as the home warms up.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Why it happens</p>
                    <p className="text-lg leading-relaxed">
                      Expansion noise comes from loose spans, inconsistent fastening, and weak sheathing.
                    </p>
                  </div>

                  <Card className="bg-gradient-to-br from-sage/20 to-sage/10 p-8 rounded-xl border-2 border-sage/30 shadow-xl">
                    <p className="mb-4 font-bold text-foreground text-xl">How we solve it</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Rigid factory secured wall panels that remove the loose connections that cause vibration.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Concrete board sheathing that adds mass and reduces resonance.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Accurate in plant framing that prevents shifting or settling on site.</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="bg-primary/5 p-6 border-l-8 border-primary rounded-xl">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">A well engineered steel home is quiet.</strong> The noisy ones were built with shortcuts.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Downside 3: Renovation Difficulty */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Wrench className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold">3. &ldquo;Steel is harder to renovate or hang things on.&rdquo;</h2>
                
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-destructive mb-3">What people say</p>
                    <p className="text-lg leading-relaxed">
                      Some people online say steel studs are difficult to cut, drill, or fasten into. Others say you cannot modify walls later.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Why it happens</p>
                    <p className="text-lg leading-relaxed">
                      Steel behaves differently than wood. Many builders do not explain these differences to homeowners.
                    </p>
                  </div>

                  <Card className="bg-gradient-to-br from-sage/20 to-sage/10 p-8 rounded-xl border-2 border-sage/30 shadow-xl">
                    <p className="mb-4 font-bold text-foreground text-xl">How we solve it</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Drawings that clearly identify structural and non structural walls so homeowners know what can be changed.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Interior walls that can still be modified with the correct screws and tools.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Interior Concierge Service that helps plan layouts, fixtures, and blocking so future changes are rarely needed.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Optional pre installed backing for televisions, cabinets, and shelving.</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="bg-primary/5 p-6 border-l-8 border-primary rounded-xl">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">Steel is not harder to live with.</strong> It simply benefits from good planning, which we provide from day one.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Downside 4: Condensation */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-4 rounded-xl">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold">4. &ldquo;Steel attracts condensation or moisture.&rdquo;</h2>
                
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-destructive mb-3">What people say</p>
                    <p className="text-lg leading-relaxed">
                      Homeowners in colder climates report condensation on steel studs, moisture inside walls, or insulation performance dropping.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Why it happens</p>
                    <p className="text-lg leading-relaxed">
                      Moisture problems occur when builders skip proper insulation techniques or fail to control vapor flow.
                    </p>
                  </div>

                  <Card className="bg-gradient-to-br from-sage/20 to-sage/10 p-8 rounded-xl border-2 border-sage/30 shadow-xl">
                    <p className="mb-4 font-bold text-foreground text-xl">How we solve it</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">All panels are built indoors so framing never sits in snow, rain, or damp conditions.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Rockwool insulation which does not lose performance when humidity changes.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Wall assemblies engineered to control the dew point.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Fast installation that closes the structure within four to five days.</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="bg-primary/5 p-6 border-l-8 border-primary rounded-xl">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">Most online complaints reflect site built framing.</strong> Our plant built method removes those risks completely.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Downside 5: Builder Knowledge */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-4 rounded-xl">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold">5. &ldquo;Steel only works if the builder knows what they are doing.&rdquo;</h2>
                
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-destructive mb-3">What people say</p>
                    <p className="text-lg leading-relaxed">
                      Homeowners often write that steel is excellent but only if the crew understands the material. Poor builders cause problems that show up for years.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Why it happens</p>
                    <p className="text-lg leading-relaxed">
                      Steel is precise. A crew that treats it like wood can cause major performance issues.
                    </p>
                  </div>

                  <Card className="bg-gradient-to-br from-sage/20 to-sage/10 p-8 rounded-xl border-2 border-sage/30 shadow-xl">
                    <p className="mb-4 font-bold text-foreground text-xl">How we solve it</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">FrameCAD engineered manufacturing where every stud, screw, and connection is calculated.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Factory specialists at our partner facility EBS who build every panel.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Our own erection teams, not random subcontractors.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Documented measurements and site photos that allow engineers to sign off remotely when needed.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                        <span className="text-lg">Permit support, engineering support, and help dealing with municipalities.</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="bg-primary/5 p-6 border-l-8 border-primary rounded-xl">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">The industry is known for high pressure sales and hidden pricing.</strong> We operate as a factory direct, Canadian made solution with clear information and complete support.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* The Takeaway */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Award className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold">The takeaway</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Steel has downsides when it is built the old fashioned way. With plant built precision, correct insulation, fast installation, and full engineering support, the issues people describe online are avoided.
                  </p>

                  <Card className="p-10 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl shadow-xl">
                    <p className="text-xl font-bold mb-6 text-foreground">
                      Cold Form Steel Canada removes the risks and delivers homes that are:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        <span className="text-lg font-bold text-foreground">Strong</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        <span className="text-lg font-bold text-foreground">Quiet</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        <span className="text-lg font-bold text-foreground">Energy efficient</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        <span className="text-lg font-bold text-foreground">Non combustible</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        <span className="text-lg font-bold text-foreground">Ready months sooner than traditional builds</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Author Bio */}
          <section className="bg-muted p-8 rounded-xl">
            <div className="flex items-start gap-6 mb-6">
              <ImageWithFallback 
                src={johnMontgomeryPhoto}
                alt="John Montgomery"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="flex-1">
                <p className="text-sm text-primary font-bold mb-1">Author</p>
                <h3 className="text-2xl mb-2 font-bold">John Montgomery</h3>
                <p className="text-muted-foreground font-medium">Owner of Cold Form Steel Canada, SteelBuilt Corp and Barndo Canada</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              John Montgomery is a Canadian builder with decades of experience in steel construction, modular housing, and commercial fabrication. He leads the SteelBuilt Group and works directly with engineers, municipalities, and homeowners on projects across the country. His focus is simple: provide honest answers, Canadian made materials, and high quality steel homes that are fast to build and affordable to own.
            </p>
          </section>

          {/* CTA */}
          <Card className="p-10 bg-primary text-white text-center rounded-2xl shadow-xl">
            <h3 className="text-3xl mb-4 font-bold">Have Questions About Steel Construction?</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Get honest answers and see if cold form steel is right for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => onNavigate('contact')}
                className="font-bold h-14 px-10 text-lg shadow-lg"
              >
                Talk to Our Team
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('models')}
                className="bg-white text-primary hover:bg-white/90 border-0 font-bold h-14 px-10 text-lg shadow-lg"
              >
                View Our Models
              </Button>
            </div>
          </Card>
        </div>
      </article>
    </div>
  );
}