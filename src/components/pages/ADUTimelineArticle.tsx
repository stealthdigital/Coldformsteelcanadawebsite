import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, XCircle, Factory, Truck, Zap, ClipboardCheck, Home, Calendar as CalendarIcon, TrendingUp, Building2, Shield, FileText, Wrench } from 'lucide-react';
import { HeadMeta } from '../HeadMeta';
import { ArticleSchema } from '../schema/ArticleSchema';
import { shareArticle } from '../../utils/share';
import { ImageWithFallback } from '../figma/ImageWithFallback';

import { CloudinaryImages } from '../../config/cloudinary-urls';

// GitHub URLs for factory images
const factoryImage1 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Factory/Factory%20Interior%201.png';
const factoryImage2 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Factory/Factory%20Interior%202.png';
const johnMontgomeryPhoto = CloudinaryImages.learning.johnMontgomery;

interface ADUTimelineArticleProps {
  onNavigate: (page: string) => void;
}

export function ADUTimelineArticle({ onNavigate }: ADUTimelineArticleProps) {
  const headerImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/main/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';

  return (
    <div className="min-h-screen bg-background pt-16">
      <HeadMeta 
        title="ADU Construction Timeline | Steel Frame ADU Building Process"
        description="Complete timeline for building a cold-form steel ADU in Canada. From design to occupancy: planning, permits, foundation, 4-5 day framing, finishing."
        image={headerImage}
      />
      <ArticleSchema
        headline="How Long Does It Take to Build and Install a Cold Form Steel ADU?"
        description="Understanding the complete timeline for building a cold-form steel ADU from factory manufacturing to onsite installation."
        author={{ name: 'John Montgomery', jobTitle: 'Owner, Cold Form Steel Canada' }}
        datePublished="2026-01-04"
        category="ADU Guide"
        keywords={['ADU timeline', 'steel ADU construction', 'backyard ADU', 'ADU installation', 'cold form steel ADU']}
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
            ADU Guide
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6 font-bold text-foreground">
            How Long Does It Take to Build and Install a Cold Form Steel ADU?
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            When people first explore adding an ADU to their backyard, the biggest question they ask is simple: &ldquo;How long will this actually take?&rdquo;
          </p>

          <div className="flex items-center gap-6 text-sm text-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-terracotta" />
              <span>9 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-terracotta" />
              <span>January 2026</span>
            </div>
            <button 
              onClick={() => shareArticle({
                title: 'How Long Does It Take to Build and Install a Cold Form Steel ADU?',
                text: 'When people first explore adding an ADU to their backyard, the biggest question they ask is simple: "How long will this actually take?"'
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
              Traditional construction can drag on for months. Weather, labour shortages, material delays, and inspection bottlenecks all slow the process. But cold form steel changes everything. With factory-built precision and onsite assembly measured in days, not months, homeowners finally get predictable timelines.
            </p>
            <p className="font-bold text-foreground">
              Below is a clear breakdown of how long it takes to build, deliver, and install a cold form steel ADU—from the moment production starts to the day it&rsquo;s ready for cladding and interior finishing.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Factory Manufacturing */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Factory className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">1. Factory Manufacturing Time: 1–3 Weeks</h2>
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

                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="font-bold text-foreground text-lg mb-4">Inside the factory:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Wall panels are engineered, cut, and preassembled</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Window and door openings are pre-built with exact precision</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Exterior sheathing is applied</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Panels are labeled, numbered, and staged for shipping</span>
                      </li>
                    </ul>
                  </Card>

                  <div className="my-8">
                    <img 
                      src="https://res.cloudinary.com/dj76bnpni/image/upload/v1769448782/Each_panel_is_labeled_and_numbered_for_easy_onsite_assembly_pfwenk.jpg" 
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

                  <Card className="p-8 bg-gradient-to-br from-terracotta to-terracotta/80 text-white font-bold text-center rounded-xl shadow-2xl border-0">
                    <p className="text-2xl mb-2">
                      Typical factory timeline: 1–3 weeks
                    </p>
                    <p className="text-white/80 font-normal text-lg">
                      depending on the model and queue
                    </p>
                  </Card>

                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">This is where cold form steel saves homeowners months of waiting.</strong>
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Delivery and Site Prep */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Truck className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground">Steel Frame Delivery and Assembly (Week 6): The Fast Part</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Once the ADU leaves the factory, delivery is fast and straightforward.
                  </p>

                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
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
          </div>
        </div>
      </section>

      {/* Section 3: Onsite Installation */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Zap className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">3. Onsite Installation: 4–5 Days</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="text-xl leading-relaxed">
                      <strong className="text-foreground">This is the part homeowners can&rsquo;t believe until they see it.</strong>
                    </p>
                  </Card>

                  <p>
                    Because the ADU is pre-engineered and pre-cut, onsite assembly becomes a simple tilt-up process:
                  </p>

                  <Card className="bg-white p-8 rounded-xl shadow-xl border-2 border-terracotta">
                    <h3 className="text-2xl font-bold mb-6 text-terracotta">Day 1–2:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Walls are tilted up and secured</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Openings for windows and doors are already integrated</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>The structure begins to take shape immediately</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="bg-white p-8 rounded-xl shadow-xl border-2 border-terracotta">
                    <h3 className="text-2xl font-bold mb-6 text-terracotta">Day 3–4:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Roof trusses are installed</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Exterior sheathing is locked in</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>The building becomes fully framed and weather resistant</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="bg-white p-8 rounded-xl shadow-xl border-2 border-terracotta">
                    <h3 className="text-2xl font-bold mb-6 text-terracotta">Day 5:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Windows installed (if not already pre-installed)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Exterior cladding can begin</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Interior work can start immediately after</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-8 bg-gradient-to-br from-terracotta/20 to-terracotta/10 border-l-8 border-terracotta italic rounded-xl shadow-lg">
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
          </div>
        </div>
      </section>

      {/* Section 4: Utility Hookups */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Zap className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">4. Utility Hookups and Final Touches: Varies by Municipality</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Cold form steel dramatically speeds up structural assembly, but utility connections still follow local rules.
                  </p>

                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="font-bold text-foreground text-lg mb-4">Homeowners typically coordinate:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Electrical connection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                        <span>Water and sewer tie-in</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
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
          </div>
        </div>
      </section>

      {/* Section 5: Total Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Clock className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">5. Total Time From Factory to Installed Shell: ~1–2 Weeks</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p className="font-bold text-foreground text-xl">
                    Here&rsquo;s the simple math:
                  </p>

                  <Card className="bg-gradient-to-br from-terracotta/10 to-terracotta/5 p-8 rounded-xl shadow-xl border-2 border-terracotta">
                    <div className="space-y-4 text-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-terracotta font-bold text-2xl">•</span>
                        <span><strong className="text-foreground">Factory build:</strong> 1–3 weeks</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-terracotta font-bold text-2xl">•</span>
                        <span><strong className="text-foreground">Delivery & site prep:</strong> 1–2 days</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-terracotta font-bold text-2xl">•</span>
                        <span><strong className="text-foreground">Onsite installation:</strong> 4–5 days</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-terracotta font-bold text-2xl">•</span>
                        <span><strong className="text-foreground">Utility hookup:</strong> depends on local requirements</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-terracotta/5 p-8 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="text-xl leading-relaxed">
                      <strong className="text-foreground">That means the average homeowner sees their ADU fully framed, enclosed, and ready for finishing in about 1–2 weeks after delivery.</strong>
                    </p>
                  </Card>

                  <Card className="p-8 bg-gradient-to-br from-terracotta to-terracotta/80 text-white text-center rounded-xl shadow-2xl border-0">
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
          </div>
        </div>
      </section>

      {/* What Can Slow Things Down */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">What Can Slow Things Down</h2>
            <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
              <p>
                While cold form steel significantly reduces the time required for structural assembly, there are a few factors that can still impact the overall timeline:
              </p>

              <Card className="bg-white p-6 border-2 border-terracotta rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-terracotta">Permit Delays</h3>
                <p>
                  Municipal permits can take time to process, especially if there are any issues with the plans or if the municipality is busy.
                </p>
              </Card>

              <Card className="bg-white p-6 border-2 border-terracotta rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-terracotta">Utility Connections</h3>
                <p>
                  Utility hookups, such as water, sewer, and electrical, can vary in time depending on the local utility companies and their response times.
                </p>
              </Card>

              <Card className="bg-white p-6 border-2 border-terracotta rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-terracotta">Site Conditions</h3>
                <p>
                  If the site is not ready or accessible, it can delay the delivery and installation process.
                </p>
              </Card>

              <Card className="bg-white p-6 border-2 border-terracotta rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-terracotta">Weather Conditions</h3>
                <p>
                  While factory manufacturing eliminates weather delays, extreme weather conditions on the site can still impact the installation process.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Steel ADUs Are Faster */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <TrendingUp className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Why Cold Form Steel ADUs Are Faster</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p className="font-bold text-foreground text-xl">
                    Here&rsquo;s what makes this possible:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-white shadow-xl border-2 border-terracotta rounded-xl">
                      <div className="flex items-start gap-4">
                        <div className="bg-terracotta/10 p-3 rounded-xl">
                          <Factory className="w-6 h-6 text-terracotta" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2 text-foreground">Built indoors</h3>
                          <p className="text-muted-foreground">
                            No rain, snow, warping, or delays.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-white shadow-xl border-2 border-terracotta rounded-xl">
                      <div className="flex items-start gap-4">
                        <div className="bg-terracotta/10 p-3 rounded-xl">
                          <XCircle className="w-6 h-6 text-terracotta" />
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

                    <Card className="p-6 bg-white shadow-xl border-2 border-terracotta rounded-xl">
                      <div className="flex items-start gap-4">
                        <div className="bg-terracotta/10 p-3 rounded-xl">
                          <CheckCircle2 className="w-6 h-6 text-terracotta" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2 text-foreground">Numbered panels</h3>
                          <p className="text-muted-foreground">
                            Assembly is clean, fast, and predictable.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 bg-white shadow-xl border-2 border-terracotta rounded-xl md:col-span-2">
                      <div className="flex items-start gap-4">
                        <div className="bg-terracotta/10 p-3 rounded-xl">
                          <Shield className="w-6 h-6 text-terracotta" />
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
          </div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Home className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">The Bottom Line</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    If you want an ADU in your backyard without dealing with months of noise, delays, or weather issues, cold form steel is the fastest and most reliable way to build.
                  </p>

                  <Card className="p-8 bg-gradient-to-br from-terracotta to-terracotta/80 text-white rounded-xl shadow-2xl border-0">
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
            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('five-day-build')}>
              <div className="p-6">
                <Zap className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">How the 5 Day Build Works</h3>
                <p className="text-muted-foreground mb-4">
                  Step-by-step walkthrough of the assembly process and why it's so fast.
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-terracotta hover:text-terracotta/80 font-bold">
                  Read Article →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('permit')}>
              <div className="p-6">
                <FileText className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">Do I Need a Permit?</h3>
                <p className="text-muted-foreground mb-4">
                  Understanding municipal requirements across Canada.
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-terracotta hover:text-terracotta/80 font-bold">
                  Read Article →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('factory-tour')}>
              <div className="p-6">
                <Factory className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">Inside the Factory Tour</h3>
                <p className="text-muted-foreground mb-4">
                  See why cold form steel homes go up in days, not months.
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
              Ready to Add an ADU to Your Property?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Get a personalized timeline and quote for your backyard ADU project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-terracotta hover:bg-terracotta/90 text-white font-bold h-14 px-10 text-lg shadow-xl border-0 hover:scale-105 transition-transform duration-200"
              >
                Get Your Timeline
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