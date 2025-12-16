import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, Factory, Tag, Ruler, Home, Award, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';
import johnMontgomeryPhoto from 'figma:asset/f7589f12c4db2294f1600532a47c3b3c990ffc90.png';

interface FactoryTourArticleProps {
  onNavigate: (page: string) => void;
}

export function FactoryTourArticle({ onNavigate }: FactoryTourArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="Steel Frame Factory Tour | FrameCAD Manufacturing Process"
        description="Take a virtual tour of our cold-form steel manufacturing facility. See how FrameCAD technology creates precision steel frames, quality control processes, and factory-to-site delivery."
        image="https://via.placeholder.com/1200x630/665f55/ffffff?text=Factory+Tour"
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
            Factory Tour
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6">
            Inside the Factory: Why Cold Form Steel Homes Go Up in Days, Not Months
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            People ask me all the time how we can frame a full sized home or ADU in only a few days. Anyone who has dealt with traditional construction knows how slow and unpredictable it can be. Weather gets in the way. Skilled framers are hard to find. Materials twist and warp. Timelines slip.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
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
                Cold form steel solves those problems. Once you see how these panels are made in the factory, the speed and accuracy become obvious. I want to walk you through the main reasons why this system works so well and why it is changing housing across Canada.
              </p>
            </div>
          </section>

          {/* Video Embed */}
          <section>
            <Card className="overflow-hidden bg-black">
              <div className="flex items-center justify-center p-8">
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
          </section>

          <Separator />

          {/* Section 1: Precision Built Openings */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Ruler className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">1. Precision Built Openings Remove Guesswork</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Every window and door opening is engineered and cut into the panel before it leaves the factory. There is no onsite measuring or adjusting. You tilt the wall up and the openings are already exactly where they need to be.
                  </p>
                  
                  <Card className="p-6 bg-accent/5 border-accent/30">
                    <p className="text-xl italic text-foreground mb-0">
                      "As I often tell people on the tour, you can literally tilt this wall up and it is already framed."
                    </p>
                  </Card>

                  <p>
                    This is a huge advantage in areas where framers are booked for months or simply unavailable.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 2: Factory Installed Sheathing */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">2. Indoor Sheathing Creates a Dry, Mold Resistant Structure</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Sheathing is installed inside the factory where everything stays warm and dry. Wood framing done outdoors absorbs moisture and moves around. Cold form steel panels do not. You start with a straight, clean, weather resistant structure from day one.
                  </p>
                  
                  <Card className="p-6 bg-accent/5 border-accent/30">
                    <p className="text-xl italic text-foreground mb-0">
                      "Once the panels are sheathed, you can put any exterior finish you want on the building. During the tour I point out that when you have sheathing like this, you are making it mold proof, waterproof, and ready for whatever exterior finish you choose."
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 3: Numbered and Labeled */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Tag className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">3. Numbered Panels Make Installation Fast and Predictable</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Every panel is labeled and stacked in order. When the truck arrives on site, the crew knows exactly which panel to tilt up first and where it goes. The process is simple. Stand the wall, secure it, move to the next one, then install the roof trusses.
                  </p>

                  <p>
                    There is no cutting, guessing, or problem solving in the cold. Everything that slows traditional framing has already been handled inside the plant.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 4: Full Sized Home in Three Days */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Home className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">4. A 2,500 Square Foot Home Can Be Framed in Three Days</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    I have seen this process repeated many times. A home that would take months with wood can be framed in a matter of days with cold form steel.
                  </p>
                  
                  <p>
                    The typical reaction from homeowners is disbelief, but it is true. The average 2,000 to 2,500 square foot home takes about three days for the full structure to go up. ADUs are even faster.
                  </p>

                  <p>
                    The speed comes from preparation, accuracy, and removing all the unpredictable parts of a build.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Section 5: Indoor Manufacturing Delivers Superior Quality */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Factory className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">5. Factory Conditions Produce Better Homes</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Quality is not an accident. When framing happens outdoors, workers are dealing with freezing temperatures, rain, wind, and materials that are expanding and shrinking. When framing happens indoors, none of that exists.
                  </p>

                  <p>
                    Inside the factory the panels stay straight. The tools are consistent. The environment is controlled. As I often tell people, everything is done in the plant. It is warm, it is dry, you do not have the errors of somebody being out in the cold trying to frame your house.
                  </p>
                  
                  <p>
                    This is why our builds are straighter, stronger, and more accurate.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Conclusion */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-4">Why This Matters to You</h2>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                Cold form steel is not just a different material. It is a better process. Faster timelines. Better quality control. Predictable results. Homes and ADUs go up in days instead of months. Municipal projects can scale quickly. Families can move sooner and with fewer surprises.
              </p>

              <p>
                If you want to see this for yourself, watch the factory tour video. And if you are planning a project and want to understand the full process, my team and I are always happy to walk you through it.
              </p>
            </div>
          </section>

          <Separator />

          {/* Author Bio */}
          <section className="space-y-6">
            <div className="bg-muted p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <ImageWithFallback 
                  src={johnMontgomeryPhoto}
                  alt="John Montgomery"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Author</p>
                  <h3 className="text-2xl mb-1">John Montgomery</h3>
                  <p className="text-muted-foreground">Owner of Cold Form Steel Canada, SteelBuilt Corp and Barndo Canada</p>
                </div>
              </div>
              <div className="text-muted-foreground leading-relaxed">
                <p className="mb-3">
                  John Montgomery is a Canadian builder with decades of experience in steel construction, modular housing, and commercial fabrication. He leads the SteelBuilt Group and works directly with engineers, municipalities, and homeowners on projects across the country. His focus is simple: provide honest answers, Canadian made materials, and high quality steel homes that are fast to build and affordable to own.
                </p>
                <a 
                  href="https://www.linkedin.com/in/john-montgomery-28630814/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </section>

          {/* CTA */}
          <Card className="p-8 bg-accent text-white">
            <div className="text-center">
              <h3 className="text-2xl mb-4">Ready to See Your Project Come to Life?</h3>
              <p className="text-lg mb-6 text-white/90">
                Let's discuss how cold form steel can work for your home, ADU, or cottage.
              </p>
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-white text-accent hover:bg-white/90"
              >
                Get Started Today
              </Button>
            </div>
          </Card>

          <Separator />

          {/* Continue Learning */}
          <section className="space-y-6">
            <h2 className="text-2xl mb-6">Continue Learning</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('framecad')}>
                <Badge className="mb-3 bg-[#8b9d83] text-white">Factory Tour</Badge>
                <h3 className="text-lg mb-2">Why FrameCAD Matters for Your Build</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  The system behind the speed, accuracy, and consistency of cold formed steel homes
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>9 min read</span>
                </div>
              </Card>

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

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('adu-timeline')}>
                <Badge className="mb-3 bg-primary text-white">Process & Permits</Badge>
                <h3 className="text-lg mb-2">How Long Does It Take to Build and Install a Cold Form Steel ADU?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Complete timeline from factory to installed shell in 1-2 weeks
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>9 min read</span>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}