import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Card } from '../ui/card';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, Zap, DollarSign, TrendingUp, Building, Home, Layers, Warehouse, HardHat, Hammer, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArticleSchema } from '../schema/ArticleSchema';
import { HeadMeta } from '../HeadMeta';
import johnMontgomeryPhoto from 'figma:asset/f7589f12c4db2294f1600532a47c3b3c990ffc90.png';

interface FiveDayBuildArticleProps {
  onNavigate: (page: string) => void;
}

export function FiveDayBuildArticle({ onNavigate }: FiveDayBuildArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="How Steel Homes are Framed in 4-5 Days | Cold Form Steel Canada"
        description="Discover how cold-form steel construction achieves 4-5 day framing times vs 3-6 months for wood. Learn about FrameCAD technology, panelized construction, and the factory-to-site process."
        image="https://via.placeholder.com/1200x630/665f55/ffffff?text=5-Day+Build+Process"
      />
      <ArticleSchema
        headline="How the 5 Day Build Works"
        description="The idea of framing a home in four to five days surprises most people, yet the process is straightforward once understood. Learn how cold form steel enables predictable, efficient construction."
        author={{ name: 'John Montgomery', jobTitle: 'President, Cold Form Steel Canada' }}
        datePublished="2025-12-09"
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
          <Badge className="bg-primary text-white mb-4">
            Process & Permits
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6">
            How the 5 Day Build Works
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            The idea of framing a home in four to five days surprises most people, yet the process is straightforward once understood. The speed does not come from rushing. It comes from preparation, precision and removing the chaos that usually slows construction. Cold form steel allows a home to be built the way manufacturing should work: predictable, efficient and repeatable.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 9, 2025</span>
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
                The following overview reflects how the system is executed on every project.
              </p>
            </div>
          </section>

          <Separator />

          {/* Why This System Is So Fast */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Why This System Is So Fast</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Everything begins in a controlled factory using{' '}
                    <button 
                      onClick={() => onNavigate('framecad')}
                      className="text-accent hover:underline font-medium"
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
            <h2 className="text-3xl mb-4">Before Day 1: Foundation Ready</h2>
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
              <h2 className="text-3xl">The 5-Day Build Timeline</h2>
              <p className="text-lg text-muted-foreground">From foundation to weather-tight structure</p>
            </div>
            
            {/* Infographic Container */}
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-[#8b9d83] transform md:-translate-x-1/2 hidden sm:block"></div>
              
              <div className="space-y-12">
                {/* Before Day 1 */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                      <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                        <div className="flex md:flex-row-reverse items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                            <Warehouse className="w-8 h-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm mb-3">
                              Before Day 1
                            </div>
                            <h3 className="text-xl mb-2">Foundation Ready</h3>
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
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-accent flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-accent">1</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                      <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                        <div className="flex items-start gap-4">
                          <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                            <Layers className="w-8 h-8 text-accent" />
                          </div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 bg-accent text-white rounded-full text-sm mb-3">
                              Day 1
                            </div>
                            <h3 className="text-xl mb-2">Floor System</h3>
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
                      <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                        <div className="flex md:flex-row-reverse items-start gap-4">
                          <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                            <Building className="w-8 h-8 text-accent" />
                          </div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 bg-accent text-white rounded-full text-sm mb-3">
                              Day 2
                            </div>
                            <h3 className="text-xl mb-2">First Floor Walls</h3>
                            <p className="text-muted-foreground">
                              Numbered panels tilt into place. Pre-cut openings. First floor takes shape in hours.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="relative z-10 flex-shrink-0 order-1 md:order-2">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-accent flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-accent">2</span>
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
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-accent flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-accent">3</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                      <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                        <div className="flex items-start gap-4">
                          <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                            <Home className="w-8 h-8 text-accent" />
                          </div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 bg-accent text-white rounded-full text-sm mb-3">
                              Day 3
                            </div>
                            <h3 className="text-xl mb-2">Second Floor Framing</h3>
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
                      <Card className="p-6 bg-gradient-to-br from-sage/10 to-sage/20 border-sage/30">
                        <div className="flex md:flex-row-reverse items-start gap-4">
                          <div className="bg-sage/20 p-3 rounded-lg flex-shrink-0">
                            <HardHat className="w-8 h-8 text-sage" />
                          </div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 bg-sage text-white rounded-full text-sm mb-3">
                              Day 4
                            </div>
                            <h3 className="text-xl mb-2">Roof Trusses & Sheathing</h3>
                            <p className="text-muted-foreground">
                              Steel trusses set. DensGlass or concrete board applied. Structure becomes weather-tight.
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="relative z-10 flex-shrink-0 order-1 md:order-2">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-sage flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-sage">4</span>
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
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-sage flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-sage">5</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                      <Card className="p-6 bg-gradient-to-br from-sage/10 to-sage/20 border-sage/30">
                        <div className="flex items-start gap-4">
                          <div className="bg-sage/20 p-3 rounded-lg flex-shrink-0">
                            <CheckCircle2 className="w-8 h-8 text-sage" />
                          </div>
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 bg-sage text-white rounded-full text-sm mb-3">
                              Day 5
                            </div>
                            <h3 className="text-xl mb-2">Windows & Exterior Prep</h3>
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
              <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl mb-2 text-primary">5 Days</div>
                <p className="text-muted-foreground">Complete Framing</p>
              </Card>
              
              <Card className="p-6 text-center bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Hammer className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl mb-2 text-accent">Small Crew</div>
                <p className="text-muted-foreground">Lower Labour Costs</p>
              </Card>
              
              <Card className="p-6 text-center bg-gradient-to-br from-sage/10 to-sage/20 border-sage/30">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage/20 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-sage" />
                </div>
                <div className="text-3xl mb-2 text-sage">100%</div>
                <p className="text-muted-foreground">Factory Precision</p>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Text Content Sections Follow Below... */}
          <section className="space-y-8">
            <h2 className="text-3xl mb-4">Detailed Day-by-Day Breakdown</h2>
            
            {/* Day 1 */}
            <div className="bg-muted p-6 rounded-lg space-y-4">
              <h3 className="text-2xl">Day 1: Floor System</h3>
              <p className="text-lg text-muted-foreground">
                Floor joists are installed on the foundation. Because all engineering is handled in advance, the system drops in smoothly and prepares the site for wall installation.
              </p>
            </div>

            {/* Day 2 */}
            <div className="bg-muted p-6 rounded-lg space-y-4">
              <h3 className="text-2xl">Day 2: First Floor Walls</h3>
              <p className="text-lg text-muted-foreground">
                Panels arrive numbered. The crew tilts them into position and fastens them. Window and door openings are pre cut. Within a single day the first floor takes shape. This is the moment when observers begin to understand the power of cold form steel.
              </p>
            </div>

            {/* Day 3 */}
            <div className="bg-muted p-6 rounded-lg space-y-4">
              <h3 className="text-2xl">Day 3: Second Floor Framing</h3>
              <p className="text-lg text-muted-foreground">
                The same process is repeated for the second level. Panels stand quickly and cleanly. No weather delays. No missing lumber. No waiting for framers. The building grows vertically with remarkable speed.
              </p>
            </div>

            {/* Day 4 */}
            <div className="bg-muted p-6 rounded-lg space-y-4">
              <h3 className="text-2xl">Day 4: Roof Trusses and Sheathing</h3>
              <p className="text-lg text-muted-foreground">
                Steel roof trusses are set, followed by sheathing such as DensGlass or concrete board. The structure becomes weather tight. Windows can begin going in almost immediately.
              </p>
            </div>

            {/* Day 5 */}
            <div className="bg-muted p-6 rounded-lg space-y-4">
              <h3 className="text-2xl">Day 5: Windows and Exterior Prep</h3>
              <p className="text-lg text-muted-foreground">
                By day five the home looks structurally complete. The walls are straight and square which makes exterior finishes and interior work easier and more precise. Flooring, cabinets and countertops fit cleanly because the framing is built to factory accuracy.
              </p>
            </div>
          </section>

          <Separator />

          {/* Why Homeowners and Municipalities Choose This System */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-6">Why Homeowners and Municipalities Choose This System</h2>
            
            <div className="space-y-6">
              {/* Predictability and Control */}
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2">Predictability and Control</h3>
                  <p className="text-lg text-muted-foreground">
                    Factory built framing eliminates the biggest risks in traditional builds. Weather, labour shortages and crooked lumber no longer affect timelines or quality. Panels stay warm, dry and dimensionally exact.
                  </p>
                </div>
              </div>

              {/* Lower Labour Costs */}
              <div className="flex gap-4">
                <DollarSign className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2">Lower Labour Costs</h3>
                  <p className="text-lg text-muted-foreground">
                    A small crew and a crane can stand the entire structure. The need for specialized framing teams drops dramatically.
                  </p>
                </div>
              </div>

              {/* Faster Move In */}
              <div className="flex gap-4">
                <TrendingUp className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2">Faster Move In</h3>
                  <p className="text-lg text-muted-foreground">
                    Families see the shape of their home far sooner. Investors begin earning rental income sooner. Municipalities can deploy large numbers of units quickly when addressing housing shortages. The scale and speed are unmatched.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Where This System Already Leads the Market */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-4">Where This System Already Leads the Market</h2>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                Panelized cold form steel is the standard across many regions worldwide including multi family housing, affordable housing, student housing and modular communities. The Canadian market is now accelerating toward the same direction.
              </p>
            </div>
          </section>

          <Separator />

          {/* A Note on the Timeline */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-4">A Note on the Timeline</h2>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                The 5 day build refers to the framing stage. Interior finishes, mechanical work and inspections still take time. The difference is that the most unpredictable stage is now completely predictable.
              </p>
            </div>
          </section>

          <Separator />

          {/* What Is Available Now */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Building className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">What Is Available Now</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>The SteelBuilt Group offers:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>ADUs and tiny homes such as the Piccolo and Medio models</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Full size cold form steel homes</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Custom designs inspired by homeowner sketches or online ideas</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Scalable municipal solutions for affordable and supportive housing</span>
                    </li>
                  </ul>
                  <p>
                    All benefit from the same rapid framing process.
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
          </section>

          <Separator />

          {/* CTA */}
          <Card className="p-8 bg-accent text-white">
            <div className="text-center">
              <h3 className="text-2xl mb-4">Ready to Start Your Build?</h3>
              <p className="text-lg mb-6 text-white/90">
                See how the 5-day framing process can work for your project
              </p>
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-white text-accent hover:bg-white/90"
              >
                Schedule a Consultation
              </Button>
            </div>
          </Card>

          <Separator />

          {/* Continue Learning */}
          <section className="space-y-6">
            <h2 className="text-2xl mb-6">Continue Learning</h2>
            <div className="grid md:grid-cols-3 gap-6">
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
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}