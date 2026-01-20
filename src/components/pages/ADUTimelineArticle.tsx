import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, Factory, Truck, Wrench, Home, Zap, Shield, XCircle, DollarSign, TrendingUp, Building2 } from 'lucide-react';
import { HeadMeta } from '../HeadMeta';
import { ArticleSchema } from '../schema/ArticleSchema';

// GitHub URLs for factory images
const factoryImage1 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Factory/Factory%20Interior%201.png';
const factoryImage2 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Factory/Factory%20Interior%202.png';

interface ADUTimelineArticleProps {
  onNavigate: (page: string) => void;
}

export function ADUTimelineArticle({ onNavigate }: ADUTimelineArticleProps) {
  const headerImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/main/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';

  return (
    <div className="min-h-screen bg-white pt-16">
      <HeadMeta 
        title="ADU Construction Timeline | Steel Frame ADU Building Process"
        description="Complete timeline for building a cold-form steel ADU in Canada. From design to occupancy: planning, permits, foundation, 4-5 day framing, finishing."
        image={headerImage}
      />
      <ArticleSchema
        headline="How Long Does It Take to Build and Install a Cold Form Steel ADU?"
        description="Understanding the complete timeline for building a cold-form steel ADU from factory manufacturing to onsite installation."
        author={{ name: 'John Montgomery', jobTitle: 'Owner, Cold Form Steel Canada' }}
        datePublished="2025-12-04"
        category="ADU Guide"
        keywords={['ADU timeline', 'steel ADU construction', 'backyard ADU', 'ADU installation', 'cold form steel ADU']}
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
            ADU Guide
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6 font-bold">
            How Long Does It Take to Build and Install a Cold Form Steel ADU?
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            When people first explore adding an ADU to their backyard, the biggest question they ask is simple: &ldquo;How long will this actually take?&rdquo;
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>9 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>December 4, 2025</span>
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
                Traditional construction can drag on for months. Weather, labour shortages, material delays, and inspection bottlenecks all slow the process. But cold form steel changes everything. With factory-built precision and onsite assembly measured in days, not months, homeowners finally get predictable timelines.
              </p>
              <p className="font-bold text-foreground">
                Below is a clear breakdown of how long it takes to build, deliver, and install a cold form steel ADU—from the moment production starts to the day it&rsquo;s ready for cladding and interior finishing.
              </p>
            </div>
          </section>

          <Separator />

          {/* Section 1: Factory Manufacturing */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-4 rounded-xl">
                <Factory className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold">1. Factory Manufacturing Time: 1–3 Weeks</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Cold form steel ADUs are built indoors in a warm, dry, controlled factory environment. This eliminates the two biggest delays in construction: weather and framing labour.
                  </p>

                  <div className="my-8">
                    <img 
                      src={factoryImage1} 
                      alt="Steel wall panel being manufactured on factory table"
                      className="w-full rounded-xl shadow-2xl border-4 border-muted"
                    />
                    <p className="text-center text-sm mt-4 italic text-muted-foreground">
                      Wall panels engineered and assembled in our factory
                    </p>
                  </div>

                  <Card className="bg-primary/5 p-6 border-l-8 border-primary rounded-xl">
                    <p className="font-bold text-foreground text-lg mb-4">Inside the factory:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Wall panels are engineered, cut, and preassembled</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Window and door openings are pre-built with exact precision</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Exterior sheathing is applied</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Panels are labeled, numbered, and staged for shipping</span>
                      </li>
                    </ul>
                  </Card>

                  <div className="my-8">
                    <img 
                      src={factoryImage2} 
                      alt="Labeled steel wall panel 25E-508 ready for shipping"
                      className="w-full rounded-xl shadow-2xl border-4 border-muted"
                    />
                    <p className="text-center text-sm mt-4 italic text-muted-foreground">
                      Each panel is labeled and numbered for easy onsite assembly
                    </p>
                  </div>

                  <p>
                    Because everything is automated and pre-engineered, the entire ADU structure can be completed in a fraction of the time required for wood framing.
                  </p>

                  <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-white font-bold text-center rounded-xl shadow-2xl">
                    <p className="text-2xl mb-2">
                      Typical factory timeline: 1–3 weeks
                    </p>
                    <p className="text-white/80 font-normal text-lg">
                      depending on the model and queue
                    </p>
                  </Card>

                  <Card className="bg-sage/5 p-6 border-l-8 border-sage rounded-xl">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">This is where cold form steel saves homeowners months of waiting.</strong>
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 2: Delivery and Site Prep */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Truck className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold">2. Delivery and Site Prep: 1–2 Days</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Once the ADU leaves the factory, delivery is fast and straightforward.
                  </p>

                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl">
                    <p className="font-bold text-foreground text-lg mb-4">You&rsquo;ll already have your:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Foundation in place (helical piles or grade beam)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Site cleared and accessible</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Utilities planned (water, sewer, hydro)</span>
                      </li>
                    </ul>
                  </Card>

                  <p>
                    Panels arrive numbered and stacked in the correct order, ready for assembly as soon as the crew is onsite.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 3: Onsite Installation */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-4 rounded-xl">
                <Wrench className="w-8 h-8 text-secondary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold">3. Onsite Installation: 4–5 Days</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <Card className="bg-secondary/5 p-6 border-l-8 border-secondary rounded-xl">
                    <p className="text-xl leading-relaxed">
                      <strong className="text-foreground">This is the part homeowners can&rsquo;t believe until they see it.</strong>
                    </p>
                  </Card>

                  <p>
                    Because the ADU is pre-engineered and pre-cut, onsite assembly becomes a simple tilt-up process:
                  </p>

                  <Card className="bg-white p-8 rounded-xl shadow-xl border-2 border-secondary">
                    <h3 className="text-2xl font-bold mb-6 text-secondary">Day 1–2:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                        <span>Walls are tilted up and secured</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                        <span>Openings for windows and doors are already integrated</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                        <span>The structure begins to take shape immediately</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="bg-white p-8 rounded-xl shadow-xl border-2 border-primary">
                    <h3 className="text-2xl font-bold mb-6 text-primary">Day 3–4:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                        <span>Roof trusses are installed</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                        <span>Exterior sheathing is locked in</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                        <span>The building becomes fully framed and weather resistant</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="bg-white p-8 rounded-xl shadow-xl border-2 border-terracotta">
                    <h3 className="text-2xl font-bold mb-6 text-terracotta">Day 5:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                        <span>Windows installed (if not already pre-installed)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                        <span>Exterior cladding can begin</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                        <span>Interior work can start immediately after</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-8 bg-gradient-to-br from-sage/20 to-sage/10 border-l-8 border-sage italic rounded-xl shadow-lg">
                    <p className="text-xl text-foreground leading-relaxed">
                      &ldquo;Tilt up a wall, tilt up another wall, secure it to the foundation, put the roof trusses on. Average ADU or 2,500 sq ft home built in a few days. Everything&rsquo;s done in the plant. It&rsquo;s warm, it&rsquo;s dry, everything&rsquo;s straight and ready to go.&rdquo;
                    </p>
                  </Card>

                  <p className="font-bold text-foreground text-xl">
                    The same system used to frame a full home in under a week applies to every ADU we build.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 4: Utility Hookups */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-sage/10 p-4 rounded-xl">
                <Zap className="w-8 h-8 text-sage" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold">4. Utility Hookups and Final Touches: Varies by Municipality</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Cold form steel dramatically speeds up structural assembly, but utility connections still follow local rules.
                  </p>

                  <Card className="bg-sage/5 p-6 border-l-8 border-sage rounded-xl">
                    <p className="font-bold text-foreground text-lg mb-4">Homeowners typically coordinate:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                        <span>Electrical connection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                        <span>Water and sewer tie-in</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                        <span>Septic upgrades (for rural properties)</span>
                      </li>
                    </ul>
                  </Card>

                  <p>
                    SteelBuilt can refer trusted contractors and engineering support, but timelines depend on municipal response times and local trades.
                  </p>

                  <p className="font-bold text-foreground">
                    Most hookups can be completed within a few days to two weeks, depending on your region.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 5: Total Timeline */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-4 rounded-xl">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold">5. Total Time From Factory to Installed Shell: ~1–2 Weeks</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p className="font-bold text-foreground text-xl">
                    Here&rsquo;s the simple math:
                  </p>

                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl shadow-xl border-2 border-primary">
                    <div className="space-y-4 text-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-2xl">•</span>
                        <span><strong className="text-foreground">Factory build:</strong> 1–3 weeks</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-2xl">•</span>
                        <span><strong className="text-foreground">Delivery & site prep:</strong> 1–2 days</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-2xl">•</span>
                        <span><strong className="text-foreground">Onsite installation:</strong> 4–5 days</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-2xl">•</span>
                        <span><strong className="text-foreground">Utility hookup:</strong> depends on local requirements</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-sage/5 p-8 border-l-8 border-sage rounded-xl">
                    <p className="text-xl leading-relaxed">
                      <strong className="text-foreground">That means the average homeowner sees their ADU fully framed, enclosed, and ready for finishing in about 1–2 weeks after delivery.</strong>
                    </p>
                  </Card>

                  <Card className="p-8 bg-gradient-to-br from-terracotta to-terracotta/80 text-white text-center rounded-xl shadow-2xl">
                    <p className="text-2xl font-bold mb-2">
                      1–2 weeks after delivery
                    </p>
                    <p className="text-white/90 text-lg">
                      vs. 3–6 months for traditional construction
                    </p>
                  </Card>

                  <p className="font-bold text-foreground text-xl">
                    Compared to standard construction timelines of 3–6 months, cold form steel is in a league of its own.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Why Steel ADUs Are Faster */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-4 rounded-xl">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold">Why Cold Form Steel ADUs Are Faster</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p className="font-bold text-foreground text-xl">
                    Here&rsquo;s what makes this possible:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-white shadow-xl border-2 border-primary rounded-xl">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-xl">
                          <Factory className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2 text-foreground">Built indoors</h3>
                          <p className="text-muted-foreground">
                            No rain, snow, warping, or delays.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-white shadow-xl border-2 border-secondary rounded-xl">
                      <div className="flex items-start gap-4">
                        <div className="bg-secondary/10 p-3 rounded-xl">
                          <XCircle className="w-6 h-6 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2 text-foreground">No framers needed onsite</h3>
                          <p className="text-muted-foreground">
                            Every cut and connection is engineered in advance.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-white shadow-xl border-2 border-terracotta rounded-xl">
                      <div className="flex items-start gap-4">
                        <div className="bg-terracotta/10 p-3 rounded-xl">
                          <Building2 className="w-6 h-6 text-terracotta" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2 text-foreground">Pre-built openings</h3>
                          <p className="text-muted-foreground">
                            Windows and doors fit perfectly the first time.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-white shadow-xl border-2 border-sage rounded-xl">
                      <div className="flex items-start gap-4">
                        <div className="bg-sage/10 p-3 rounded-xl">
                          <CheckCircle2 className="w-6 h-6 text-sage" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2 text-foreground">Numbered panels</h3>
                          <p className="text-muted-foreground">
                            Assembly is clean, fast, and predictable.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-white shadow-xl border-2 border-primary rounded-xl md:col-span-2">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-xl">
                          <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2 text-foreground">Industry-leading precision</h3>
                          <p className="text-muted-foreground">
                            Cold form steel stays straight, square, and dimensionally accurate.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* The Bottom Line */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Home className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold">The Bottom Line</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    If you want an ADU in your backyard without dealing with months of noise, delays, or weather issues, cold form steel is the fastest and most reliable way to build.
                  </p>

                  <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-white rounded-xl shadow-2xl">
                    <ul className="space-y-4 text-xl">
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="w-7 h-7 flex-shrink-0" />
                        <span className="font-bold">Factory-built.</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="w-7 h-7 flex-shrink-0" />
                        <span className="font-bold">Delivered ready.</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="w-7 h-7 flex-shrink-0" />
                        <span className="font-bold">Installed in days.</span>
                      </li>
                    </ul>
                  </Card>

                  <p className="font-bold text-foreground text-xl pt-4">
                    If you&rsquo;re planning an ADU and want exact timelines for your property, we can walk you through the full process and provide real dates so you can plan confidently.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* CTA */}
          <Card className="p-10 bg-primary text-white text-center rounded-2xl shadow-xl">
            <h3 className="text-3xl mb-4 font-bold">Ready to Add an ADU to Your Property?</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Get a personalized timeline and quote for your backyard ADU project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => onNavigate('contact')}
                className="font-bold h-14 px-10 text-lg shadow-lg"
              >
                Get Your Timeline
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('models')}
                className="bg-white text-primary hover:bg-white/90 border-0 font-bold h-14 px-10 text-lg shadow-lg"
              >
                View ADU Models
              </Button>
            </div>
          </Card>
        </div>
      </article>
    </div>
  );
}