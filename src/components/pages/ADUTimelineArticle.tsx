import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, Factory, Truck, Wrench, Home, Zap, Ruler, Shield } from 'lucide-react';
import { HeadMeta } from '../HeadMeta';
import factoryImage1 from 'figma:asset/5174796def95c9abbc54f819407a23e9f77662ec.png';
import factoryImage2 from 'figma:asset/13662aeac833743f659e5f084e9bf4515cf8159f.png';

interface ADUTimelineArticleProps {
  onNavigate: (page: string) => void;
}

export function ADUTimelineArticle({ onNavigate }: ADUTimelineArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="ADU Construction Timeline | Steel Frame ADU Building Process"
        description="Complete timeline for building a cold-form steel ADU in Canada. From design to occupancy: planning, permits, foundation, 4-5 day framing, finishing. Faster than wood ADUs."
        image="https://via.placeholder.com/1200x630/665f55/ffffff?text=ADU+Timeline"
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
            ADU Guide
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6">
            How Long Does It Take to Build and Install a Cold Form Steel ADU?
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            When people first explore adding an ADU to their backyard, the biggest question they ask is simple: "How long will this actually take?"
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>9 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
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
          {/* Introduction */}
          <section className="space-y-6">
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                Traditional construction can drag on for months. Weather, labour shortages, material delays, and inspection bottlenecks all slow the process. But cold form steel changes everything. With factory-built precision and onsite assembly measured in days, not months, homeowners finally get predictable timelines.
              </p>
              <p>
                Below is a clear breakdown of how long it takes to build, deliver, and install a cold form steel ADU—from the moment production starts to the day it's ready for cladding and interior finishing.
              </p>
            </div>
          </section>

          <Separator />

          {/* Section 1: Factory Manufacturing */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Factory className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">1. Factory Manufacturing Time: 1–3 Weeks</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Cold form steel ADUs are built indoors in a warm, dry, controlled factory environment. This eliminates the two biggest delays in construction: weather and framing labour.
                  </p>

                  {/* Factory Image 1 */}
                  <div className="my-8">
                    <img 
                      src={factoryImage1} 
                      alt="Steel wall panel being manufactured on factory table"
                      className="w-full rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-center mt-3 text-muted-foreground italic">
                      Wall panels engineered and assembled in our factory
                    </p>
                  </div>

                  <p>Inside the factory:</p>

                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="mb-0">Wall panels are engineered, cut, and preassembled</p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="mb-0">Window and door openings are pre-built with exact precision</p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="mb-0">Exterior sheathing is applied</p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="mb-0">Panels are labeled, numbered, and staged for shipping</p>
                      </div>
                    </Card>
                  </div>

                  {/* Factory Image 2 */}
                  <div className="my-8">
                    <img 
                      src={factoryImage2} 
                      alt="Labeled steel wall panel 25E-508 ready for shipping"
                      className="w-full rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-center mt-3 text-muted-foreground italic">
                      Each panel is labeled and numbered for easy onsite assembly
                    </p>
                  </div>

                  <p>
                    Because everything is automated and pre-engineered, the entire ADU structure can be completed in a fraction of the time required for wood framing.
                  </p>

                  <Card className="p-6 bg-primary/5 border-primary/30">
                    <p className="text-lg mb-0">
                      <strong>Typical factory timeline: 1–3 weeks</strong>, depending on the model and queue.
                    </p>
                  </Card>

                  <p>
                    This is where cold form steel saves homeowners months of waiting.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 2: Delivery and Site Prep */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">2. Delivery and Site Prep: 1–2 Days</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Once the ADU leaves the factory, delivery is fast and straightforward.
                  </p>

                  <p>You'll already have your:</p>

                  <div className="grid md:grid-cols-3 gap-4 my-6">
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="mb-0">Foundation in place (helical piles or grade beam)</p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="mb-0">Site cleared and accessible</p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="mb-0">Utilities planned (water, sewer, hydro)</p>
                      </div>
                    </Card>
                  </div>

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
              <div className="bg-accent/10 p-3 rounded-lg">
                <Wrench className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">3. Onsite Installation: 4–5 Days</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    This is the part homeowners can't believe until they see it.
                  </p>

                  <p>
                    Because the ADU is pre-engineered and pre-cut, onsite assembly becomes a simple tilt-up process:
                  </p>

                  <div className="bg-muted p-6 rounded-lg my-6 space-y-4">
                    <div>
                      <p className="mb-2"><strong className="text-foreground">Day 1–2:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Walls are tilted up and secured</li>
                        <li>Openings for windows and doors are already integrated</li>
                        <li>The structure begins to take shape immediately</li>
                      </ul>
                    </div>

                    <div>
                      <p className="mb-2"><strong className="text-foreground">Day 3–4:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Roof trusses are installed</li>
                        <li>Exterior sheathing is locked in</li>
                        <li>The building becomes fully framed and weather resistant</li>
                      </ul>
                    </div>

                    <div>
                      <p className="mb-2"><strong className="text-foreground">Day 5:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Windows installed (if not already pre-installed)</li>
                        <li>Exterior cladding can begin</li>
                        <li>Interior work can start immediately after</li>
                      </ul>
                    </div>
                  </div>
                  
                  <Card className="p-6 bg-accent/5 border-accent/30">
                    <p className="text-xl italic text-foreground mb-0">
                      "Tilt up a wall, tilt up another wall, secure it to the foundation, put the roof trusses on. Average ADU or 2,500 sq ft home built in a few days. Everything's done in the plant. It's warm, it's dry, everything's straight and ready to go."
                    </p>
                  </Card>

                  <p>
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
              <div className="bg-accent/10 p-3 rounded-lg">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">4. Utility Hookups and Final Touches: Varies by Municipality</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Cold form steel dramatically speeds up structural assembly, but utility connections still follow local rules.
                  </p>

                  <p>Homeowners typically coordinate:</p>

                  <div className="grid md:grid-cols-3 gap-4 my-6">
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="mb-0">Electrical connection</p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="mb-0">Water and sewer tie-in</p>
                      </div>
                    </Card>
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="mb-0">Septic upgrades (for rural properties)</p>
                      </div>
                    </Card>
                  </div>

                  <p>
                    SteelBuilt can refer trusted contractors and engineering support, but timelines depend on municipal response times and local trades.
                  </p>

                  <p>
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
              <div className="bg-accent/10 p-3 rounded-lg">
                <Home className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">5. Total Time From Factory to Installed Shell: ~1–2 Weeks</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>Here's the simple math:</p>

                  <div className="bg-muted p-6 rounded-lg my-6">
                    <ul className="space-y-2 text-lg">
                      <li className="text-foreground">• Factory build: <strong>1–3 weeks</strong></li>
                      <li className="text-foreground">• Delivery & site prep: <strong>1–2 days</strong></li>
                      <li className="text-foreground">• Onsite installation: <strong>4–5 days</strong></li>
                      <li className="text-foreground">• Utility hookup: <strong>depends on local requirements</strong></li>
                    </ul>
                  </div>

                  <Card className="p-6 bg-primary/10 border-primary/30">
                    <p className="text-xl text-foreground mb-0">
                      That means the average homeowner sees their ADU <strong>fully framed, enclosed, and ready for finishing in about 1–2 weeks after delivery.</strong>
                    </p>
                  </Card>

                  <p>
                    Compared to standard construction timelines of 3–6 months, cold form steel is in a league of its own.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Why Faster Section */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Why Cold Form Steel ADUs Are Faster</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>Here's what makes this possible:</p>

                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <h3 className="text-xl mb-2 text-foreground">Built indoors</h3>
                      <p className="mb-0">No rain, snow, warping, or delays.</p>
                    </Card>
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <h3 className="text-xl mb-2 text-foreground">No framers needed onsite</h3>
                      <p className="mb-0">Every cut and connection is engineered in advance.</p>
                    </Card>
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <h3 className="text-xl mb-2 text-foreground">Pre-built openings</h3>
                      <p className="mb-0">Windows and doors fit perfectly the first time.</p>
                    </Card>
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <h3 className="text-xl mb-2 text-foreground">Numbered panels</h3>
                      <p className="mb-0">Assembly is clean, fast, and predictable.</p>
                    </Card>
                    <Card className="p-5 bg-accent/5 border-accent/30">
                      <h3 className="text-xl mb-2 text-foreground">Industry-leading precision</h3>
                      <p className="mb-0">Cold form steel stays straight, square, and dimensionally accurate.</p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Conclusion */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-4">The Bottom Line</h2>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                If you want an ADU in your backyard without dealing with months of noise, delays, or weather issues, cold form steel is the fastest and most reliable way to build.
              </p>

              <div className="bg-muted p-6 rounded-lg my-6">
                <p className="text-xl mb-2 text-foreground">Factory-built.</p>
                <p className="text-xl mb-2 text-foreground">Delivered ready.</p>
                <p className="text-xl mb-0 text-foreground">Installed in days.</p>
              </div>

              <p>
                If you're planning an ADU and want exact timelines for your property, we can walk you through the full process and provide real dates so you can plan confidently.
              </p>
            </div>
          </section>

          {/* CTA */}
          <Card className="p-8 bg-accent text-white">
            <div className="text-center">
              <h3 className="text-2xl mb-4">Ready to Add an ADU to Your Property?</h3>
              <p className="text-lg mb-6 text-white/90">
                Get a personalized timeline and quote for your backyard ADU project.
              </p>
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-white text-accent hover:bg-white/90"
              >
                Get Your Timeline
              </Button>
            </div>
          </Card>

          <Separator />

          {/* Continue Learning */}
          <section className="space-y-6">
            <h2 className="text-2xl mb-6">Continue Learning</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('five-day-build')}>
                <Badge className="mb-3 bg-primary text-white">Process & Permits</Badge>
                <h3 className="text-lg mb-2">How the 5 Day Build Works</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Step-by-step walkthrough of the assembly process
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
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

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('permit')}>
                <Badge className="mb-3 bg-primary text-white">Process & Permits</Badge>
                <h3 className="text-lg mb-2">Do I Need a Permit?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Understanding municipal requirements across Canada
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>6 min read</span>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}