import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, Zap, Building, DollarSign, TrendingUp, Layers, Home, HardHat, Hammer } from 'lucide-react';
import { ArticleSchema } from '../schema/ArticleSchema';
import { HeadMeta } from '../HeadMeta';
import { CloudinaryImages } from '../../config/cloudinary-urls';

// Author photo
const johnMontgomeryPhoto = CloudinaryImages.learning.johnMontgomery;

interface FiveDayBuildArticleProps {
  onNavigate: (page: string) => void;
  shareArticle: (data: { title: string, text: string }) => void;
}

export function FiveDayBuildArticle({ onNavigate, shareArticle }: FiveDayBuildArticleProps) {
  const headerImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/main/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';

  return (
    <div className="min-h-screen bg-white pt-16">
      <HeadMeta 
        title="How Steel Homes are Framed in 4-5 Days | Cold Form Steel Canada"
        description="Discover how cold-form steel construction achieves 4-5 day framing times vs 3-6 months for wood. Learn about FrameCAD technology, panelized construction, and the factory-to-site process."
        image={headerImage}
      />
      <ArticleSchema
        headline="How the 5 Day Build Works"
        description="The idea of framing a home in four to five days surprises most people, yet the process is straightforward once understood. Learn how cold form steel enables predictable, efficient construction."
        author={{ name: 'John Montgomery', jobTitle: 'President, Cold Form Steel Canada' }}
        datePublished="2026-01-09"
        category="Process & Permits"
        keywords={['cold form steel', '5 day build', 'construction speed', 'steel framing', 'home building', 'FrameCAD', 'factory built homes']}
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
            Process & Permits
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6 font-bold">
            How the 5 Day Build Works
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            The idea of framing a home in four to five days surprises most people, yet the process is straightforward once understood. The speed does not come from rushing. It comes from preparation, precision and removing the chaos that usually slows construction. Cold form steel allows a home to be built the way manufacturing should work: predictable, efficient and repeatable.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>January 2026</span>
            </div>
            <button 
              onClick={() => shareArticle({
                title: 'How the 5 Day Build Works',
                text: 'The idea of framing a home in four to five days surprises most people, yet the process is straightforward once understood.'
              })}
              className="flex items-center gap-2 hover:text-primary transition-colors ml-auto"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="space-y-10">
          {/* Introduction */}
          <section className="space-y-6">
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                The following overview reflects how the system is executed on every project.
              </p>
            </div>
          </section>

          <Separator />

          {/* Why This System Is So Fast */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 font-bold">Why This System Is So Fast</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Everything begins in a controlled factory using{' '}
                    <button 
                      onClick={() => onNavigate('framecad')}
                      className="text-primary hover:underline font-bold"
                    >
                      FrameCAD
                    </button>
                    . The entire structure is pre designed. Every stud, screw location and opening is accounted for. Panels are formed indoors where materials stay dry and straight. Each wall arrives ready to stand, labelled and accurate to the millimetre.
                  </p>
                  <p>
                    On site the crew does not cut, guess or improvise. Panels tilt up and lock into place. The result is a structure that goes together in days rather than weeks or months.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Before Day 1 */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-4 font-bold">Before Day 1: Foundation Ready</h2>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                A cured foundation sets the stage for an efficient build. Concrete is typically given about two weeks to rest. Once the pad is ready, the entire framing stage moves rapidly.
              </p>
            </div>
          </section>

          <Separator />

          {/* INFOGRAPHIC - The Five Day Build Timeline */}
          <section className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">The 5-Day Build Timeline</h2>
              <p className="text-lg text-muted-foreground">From foundation to weather-tight structure</p>
            </div>
            
            {/* Infographic Container */}
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary/30 transform md:-translate-x-1/2 hidden sm:block"></div>
              
              <div className="space-y-12">
                {/* Before Day 1 */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      <Card className="p-6 bg-primary/5 border-primary/20">
                        <div className="flex md:flex-row-reverse items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                            <Building className="w-8 h-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm mb-3 font-bold">
                              Before Day 1
                            </div>
                            <h3 className="text-xl mb-2 font-bold">Foundation Ready</h3>
                            <p className="text-muted-foreground">
                              Concrete cured for 2 weeks. Site prepared for rapid assembly.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="relative z-10 flex-shrink-0 order-1 md:order-2">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-lg">
                        <Clock className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="md:w-1/2 order-3"></div>
                  </div>
                </div>

                {/* Day 1 */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="md:w-1/2 order-3 md:order-1"></div>
                    <div className="relative z-10 flex-shrink-0 order-1 md:order-2">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-secondary flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-secondary font-bold">1</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                      <Card className="p-6 bg-secondary/5 border-secondary/20">
                        <div className="flex items-start gap-4">
                          <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                            <Layers className="w-8 h-8 text-secondary" />
                          </div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 bg-secondary text-white rounded-full text-sm mb-3 font-bold">
                              Day 1
                            </div>
                            <h3 className="text-xl mb-2 font-bold">Floor System</h3>
                            <p className="text-muted-foreground">
                              Floor joists installed. All engineering pre-calculated. System drops in smoothly.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      <Card className="p-6 bg-primary/5 border-primary/20">
                        <div className="flex md:flex-row-reverse items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                            <Building className="w-8 h-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm mb-3 font-bold">
                              Day 2
                            </div>
                            <h3 className="text-xl mb-2 font-bold">First Floor Walls</h3>
                            <p className="text-muted-foreground">
                              Numbered panels tilt into place. Pre-cut openings. First floor takes shape in hours.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="relative z-10 flex-shrink-0 order-1 md:order-2">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-primary font-bold">2</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 order-3"></div>
                  </div>
                </div>

                {/* Day 3 */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="md:w-1/2 order-3 md:order-1"></div>
                    <div className="relative z-10 flex-shrink-0 order-1 md:order-2">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-secondary flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-secondary font-bold">3</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                      <Card className="p-6 bg-secondary/5 border-secondary/20">
                        <div className="flex items-start gap-4">
                          <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                            <Home className="w-8 h-8 text-secondary" />
                          </div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 bg-secondary text-white rounded-full text-sm mb-3 font-bold">
                              Day 3
                            </div>
                            <h3 className="text-xl mb-2 font-bold">Second Floor Framing</h3>
                            <p className="text-muted-foreground">
                              Same process. Building grows vertically with remarkable speed. No weather delays.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Day 4 */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      <Card className="p-6 bg-primary/5 border-primary/20">
                        <div className="flex md:flex-row-reverse items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                            <HardHat className="w-8 h-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm mb-3 font-bold">
                              Day 4
                            </div>
                            <h3 className="text-xl mb-2 font-bold">Roof Trusses & Sheathing</h3>
                            <p className="text-muted-foreground">
                              Steel trusses set. DensGlass or concrete board applied. Structure becomes weather-tight.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="relative z-10 flex-shrink-0 order-1 md:order-2">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-primary font-bold">4</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 order-3"></div>
                  </div>
                </div>

                {/* Day 5 */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="md:w-1/2 order-3 md:order-1"></div>
                    <div className="relative z-10 flex-shrink-0 order-1 md:order-2">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-secondary flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-secondary font-bold">5</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                      <Card className="p-6 bg-secondary/5 border-secondary/20">
                        <div className="flex items-start gap-4">
                          <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                            <CheckCircle2 className="w-8 h-8 text-secondary" />
                          </div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 bg-secondary text-white rounded-full text-sm mb-3 font-bold">
                              Day 5
                            </div>
                            <h3 className="text-xl mb-2 font-bold">Windows & Exterior Prep</h3>
                            <p className="text-muted-foreground">
                              Structure complete. Walls straight and square. Ready for finishes that fit perfectly.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 text-center bg-primary/5 border-primary/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl mb-2 text-primary font-bold">5 Days</div>
                <p className="text-muted-foreground font-medium">Complete Framing</p>
              </Card>
              
              <Card className="p-6 text-center bg-secondary/5 border-secondary/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <Hammer className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-3xl mb-2 text-secondary font-bold">Small Crew</div>
                <p className="text-muted-foreground font-medium">Lower Labour Costs</p>
              </Card>
              
              <Card className="p-6 text-center bg-primary/5 border-primary/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl mb-2 text-primary font-bold">100%</div>
                <p className="text-muted-foreground font-medium">Factory Precision</p>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Why Homeowners and Municipalities Choose This System */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-6 font-bold">Why Homeowners and Municipalities Choose This System</h2>
            
            <div className="space-y-6">
              {/* Predictability and Control */}
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2 font-semibold">Predictability and Control</h3>
                  <p className="text-lg text-muted-foreground">
                    Factory built framing eliminates the biggest risks in traditional builds. Weather, labour shortages and crooked lumber no longer affect timelines or quality. Panels stay warm, dry and dimensionally exact.
                  </p>
                </div>
              </div>

              {/* Lower Labour Costs */}
              <div className="flex gap-4">
                <DollarSign className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2 font-semibold">Lower Labour Costs</h3>
                  <p className="text-lg text-muted-foreground">
                    A small crew and a crane can stand the entire structure. The need for specialized framing teams drops dramatically.
                  </p>
                </div>
              </div>

              {/* Faster Move In */}
              <div className="flex gap-4">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2 font-semibold">Faster Move In</h3>
                  <p className="text-lg text-muted-foreground">
                    Families see the shape of their home far sooner. Investors begin earning rental income sooner. Municipalities can deploy large numbers of units quickly when addressing housing shortages. The scale and speed are unmatched.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Author Bio */}
          <section className="bg-muted p-8 rounded-lg">
            <div className="flex items-start gap-6 mb-6">
              <ImageWithFallback 
                src={johnMontgomeryPhoto}
                alt="John Montgomery"
                className="w-32 h-32 rounded-full object-cover flex-shrink-0 border-4 border-white shadow-md"
              />
              <div className="flex-1">
                <p className="text-sm text-primary font-bold mb-1">Author</p>
                <h3 className="text-2xl mb-2 font-bold text-foreground">John Montgomery</h3>
                <p className="text-muted-foreground font-medium">Owner of Cold Form Steel Canada, SteelBuilt Corp and Barndo Canada</p>
              </div>
            </div>
            <div className="text-muted-foreground leading-relaxed text-lg">
              <p>
                John Montgomery is a Canadian builder with decades of experience in steel construction, modular housing, and commercial fabrication. He leads the SteelBuilt Group and works directly with engineers, municipalities, and homeowners on projects across the country. His focus is simple: provide honest answers, Canadian made materials, and high quality steel homes that are fast to build and affordable to&nbsp;own.
              </p>
            </div>
          </section>

          <Separator />

          {/* CTA */}
          <Card className="p-10 bg-primary text-white text-center rounded-2xl shadow-xl">
            <h3 className="text-3xl mb-4 font-bold">Ready to Start Your Project?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover how cold-form steel can bring your vision to life with precision and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => onNavigate('contact')}
                className="font-bold h-14 px-10 text-lg"
              >
                Contact Us
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('models')}
                className="bg-white text-primary hover:bg-white/90 border-0 font-bold h-14 px-10 text-lg shadow-lg"
              >
                Explore Models
              </Button>
            </div>
          </Card>
        </div>
      </article>
    </div>
  );
}