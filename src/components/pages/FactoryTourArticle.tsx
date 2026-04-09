import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, Factory, Zap, CheckCircle2, Package, Truck, Shield, TrendingUp, Home, Ruler, Tag, Building, FileText } from 'lucide-react';
import { HeadMeta } from '../HeadMeta';
import { ArticleSchema } from '../schema/ArticleSchema';
import { YouTubeEmbed } from '../YouTubeEmbed';
import { shareArticle } from '../../utils/share';
import { ImageWithFallback } from '../figma/ImageWithFallback';

import { CloudinaryImages } from '../../config/cloudinary-urls';

// Author photo
const johnMontgomeryPhoto = CloudinaryImages.learning.johnMontgomery;

interface FactoryTourArticleProps {
  onNavigate: (page: string) => void;
}

// Factory Tour Article Component
export function FactoryTourArticle({ onNavigate }: FactoryTourArticleProps) {
  const heroImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/main/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';
  const frameCADImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Learning%20Centre/FrameCAD.jpeg?v=2';

  return (
    <div className="min-h-screen bg-background pt-16">
      <HeadMeta 
        title="Steel Frame Factory Tour | FrameCAD Manufacturing Process"
        description="Take a virtual tour of our cold-form steel manufacturing facility. See how FrameCAD technology creates precision steel frames, quality control processes, and factory-to-site delivery."
        image={heroImage}
      />
      <ArticleSchema
        headline="Inside the Factory: Why Cold Form Steel Homes Go Up in Days, Not Months"
        description="Discover how factory-built cold form steel panels eliminate construction delays and enable rapid home assembly in just a few days."
        author={{ name: 'John Montgomery', jobTitle: 'Owner, SteelBuilt Group of Companies' }}
        datePublished="2026-01-14"
        category="Factory Tour"
        keywords={['factory tour', 'cold form steel manufacturing', 'FrameCAD', 'steel panel construction', 'rapid home building']}
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
            Factory Tour
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6 font-bold text-foreground">
            Inside the Factory: Why Cold Form Steel Homes Go Up in Days, Not Months
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            People ask me all the time how we can frame a full sized home or ADU in only a few days. Anyone who has dealt with traditional construction knows how slow and unpredictable it can be. Weather gets in the way. Skilled framers are hard to find. Materials twist and warp. Timelines slip.
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
                title: 'Inside the Factory: Why Cold Form Steel Homes Go Up in Days, Not Months',
                text: 'People ask me all the time how we can frame a full sized home or ADU in only a few days.'
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
              Cold form steel solves those problems. Once you see how these panels are made in the factory, the speed and accuracy become obvious. I want to walk you through the main reasons why this system works so well and why it is changing housing across Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Video Embed */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden bg-black border-4 border-muted rounded-2xl shadow-2xl">
            <div className="flex items-center justify-center p-8 bg-muted/10">
              <div className="w-full max-w-md">
                <div className="relative" style={{ paddingBottom: '177.78%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/C7WHx6nZrMs"
                    title="Factory Tour: Cold Form Steel Home Manufacturing"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 1: Precision Built Openings Remove Guesswork */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Ruler className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">1. Precision Built Openings Remove Guesswork</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Every window and door opening is engineered and cut into the panel before it leaves the factory. There is no onsite measuring or adjusting. You tilt the wall up and the openings are already exactly where they need to be.
                  </p>
                  
                  <Card className="p-8 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-l-8 border-terracotta italic rounded-xl shadow-lg">
                    <p className="text-xl text-foreground leading-relaxed">
                      &ldquo;As I often tell people on the tour, you can literally tilt this wall up and it is already framed.&rdquo;
                    </p>
                  </Card>

                  <p className="font-bold text-foreground text-xl">
                    This is a huge advantage in areas where framers are booked for months or simply unavailable.
                  </p>
                  
                  {/* FrameCAD Machine Image */}
                  <div className="mt-8">
                    <Card className="overflow-hidden border-2 border-terracotta/20 rounded-2xl shadow-xl">
                      <ImageWithFallback 
                        src={frameCADImage}
                        alt="FrameCAD precision steel manufacturing machine"
                        className="w-full h-auto object-cover"
                      />
                    </Card>
                    <p className="text-sm text-muted-foreground mt-3 text-center italic">
                      FrameCAD manufacturing equipment - precision engineering for every panel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Indoor Sheathing Creates a Dry, Mold Resistant Structure */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Shield className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">2. Indoor Sheathing Creates a Dry, Mold Resistant Structure</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Sheathing is installed inside the factory where everything stays warm and dry. Wood framing done outdoors absorbs moisture and moves around. Cold form steel panels do not. You start with a straight, clean, weather resistant structure from day one.
                  </p>
                  
                  <Card className="p-8 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-l-8 border-terracotta italic rounded-xl shadow-lg">
                    <p className="text-xl text-foreground leading-relaxed">
                      &ldquo;Once the panels are sheathed, you can put any exterior finish you want on the building. During the tour I point out that when you have sheathing like this, you are making it mold proof, waterproof, and ready for whatever exterior finish you choose.&rdquo;
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Numbered Panels Make Installation Fast and Predictable */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Tag className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">3. Numbered Panels Make Installation Fast and Predictable</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Every panel is labeled and stacked in order. When the truck arrives on site, the crew knows exactly which panel to tilt up first and where it goes. The process is simple. Stand the wall, secure it, move to the next one, then install the roof trusses.
                  </p>

                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">There is no cutting, guessing, or problem solving in the cold.</strong> Everything that slows traditional framing has already been handled inside the plant.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: A 2,500 Square Foot Home Can Be Framed in Three Days */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Zap className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">4. A 2,500 Square Foot Home Can Be Framed in Three Days</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    I have seen this process repeated many times. A home that would take months with wood can be framed in a matter of days with cold form steel.
                  </p>

                  <Card className="p-8 bg-gradient-to-br from-terracotta/20 to-terracotta/10 rounded-xl border-2 border-terracotta/30 shadow-xl">
                    <p className="text-xl leading-relaxed">
                      <strong className="text-foreground">The typical reaction from homeowners is disbelief, but it is true.</strong> The average 2,000 to 2,500 square foot home takes about three days for the full structure to go up. ADUs are even faster.
                    </p>
                  </Card>

                  <p className="font-bold text-foreground text-xl">
                    The speed comes from preparation, accuracy, and removing all the unpredictable parts of a build.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Factory Conditions Produce Better Homes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Factory className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">5. Factory Conditions Produce Better Homes</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p className="font-bold text-foreground text-xl">
                    Quality is not an accident.
                  </p>

                  <p>
                    When framing happens outdoors, workers are dealing with freezing temperatures, rain, wind, and materials that are expanding and shrinking. When framing happens indoors, none of that exists.
                  </p>

                  <Card className="bg-white p-8 rounded-xl shadow-xl border-2 border-terracotta">
                    <h3 className="text-2xl font-bold mb-6 text-terracotta">Inside the factory the panels stay straight.</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">The tools are consistent.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">The environment is controlled.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">Everything is done in the plant.</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-8 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-l-8 border-terracotta italic rounded-xl shadow-lg">
                    <p className="text-xl text-foreground leading-relaxed">
                      As I often tell people, everything is done in the plant. It is warm, it is dry, you do not have the errors of somebody being out in the cold trying to frame your house.
                    </p>
                  </Card>

                  <p className="font-bold text-foreground text-xl">
                    This is why our builds are straighter, stronger, and more accurate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters to You */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Building className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Why This Matters to You</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Cold form steel is not just a different material. It is a better process. Faster timelines. Better quality control. Predictable results. Homes and ADUs go up in days instead of months. Municipal projects can scale quickly. Families can move sooner and with fewer surprises.
                  </p>

                  <Card className="p-8 bg-gradient-to-br from-terracotta to-terracotta/80 text-white rounded-xl shadow-2xl border-0">
                    <ul className="space-y-4 text-xl">
                      <li className="flex items-center gap-4">
                        <Zap className="w-7 h-7 flex-shrink-0" />
                        <span className="font-bold">Faster timelines</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <Shield className="w-7 h-7 flex-shrink-0" />
                        <span className="font-bold">Better quality control</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="w-7 h-7 flex-shrink-0" />
                        <span className="font-bold">Predictable results</span>
                      </li>
                    </ul>
                  </Card>

                  <p className="font-bold text-foreground text-xl">
                    If you want to see this for yourself, watch the factory tour video. And if you are planning a project and want to understand the full process, my team and I are always happy to walk you through it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-white">
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
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-bold text-foreground">Continue Learning</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Explore more resources to help plan your steel building project
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('adu-timeline')}>
              <div className="p-6">
                <Clock className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">How Long Does It Take to Build?</h3>
                <p className="text-muted-foreground mb-4">
                  Complete timeline from factory to installed shell in 1-2 weeks.
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-terracotta hover:text-terracotta/80 font-bold">
                  Read Article →
                </Button>
              </div>
            </Card>

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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-10 bg-primary text-white text-center rounded-2xl shadow-xl border-0">
            <h2 className="text-3xl md:text-4xl mb-6 text-white font-bold">
              Ready to See Your Project Come to Life?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Let&rsquo;s discuss how cold form steel can work for your home, ADU, or cottage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-terracotta hover:bg-terracotta/90 text-white font-bold h-14 px-10 text-lg shadow-xl border-0 hover:scale-105 transition-transform duration-200"
              >
                Get Started Today
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
