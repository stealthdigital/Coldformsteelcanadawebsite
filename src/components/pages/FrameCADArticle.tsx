import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, Factory, Ruler, Zap, DollarSign, Shield, TrendingDown } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArticleSchema } from '../schema/ArticleSchema';
import { HeadMeta } from '../HeadMeta';
import frameCADMachine from 'figma:asset/d6b984cca7b042e606ad1f86f1c8540696af3c17.png';
import johnMontgomeryPhoto from 'figma:asset/f7589f12c4db2294f1600532a47c3b3c990ffc90.png';

interface FrameCADArticleProps {
  onNavigate: (page: string) => void;
}

export function FrameCADArticle({ onNavigate }: FrameCADArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="FrameCAD Technology | Precision Steel Framing | Cold Form Steel Canada"
        description="Learn how FrameCAD automated technology creates precision cold-formed steel frames with 1.6mm tolerance. Factory automation, quality control, and why it's faster than traditional construction."
        image="https://via.placeholder.com/1200x630/665f55/ffffff?text=FrameCAD+Technology"
      />
      <ArticleSchema
        headline="Why FrameCAD Matters for Your Build"
        description="The system behind the speed, accuracy, and consistency of cold formed steel homes"
        author={{ name: 'John Montgomery', jobTitle: 'President, Cold Form Steel Canada' }}
        datePublished="2025-12-09"
        category="Factory Tour"
        keywords={['FrameCAD', 'cold form steel', 'factory built', 'precision manufacturing', 'steel construction', 'automated building']}
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
            Why FrameCAD Matters for Your Build
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            The system behind the speed, accuracy, and consistency of cold formed steel homes
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>9 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 2024</span>
            </div>
            <button className="flex items-center gap-2 hover:text-accent transition-colors ml-auto">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Hero Image - FrameCAD Machine */}
        <div className="mb-12 rounded-lg overflow-hidden">
          <ImageWithFallback 
            src={frameCADMachine}
            alt="FrameCAD roll forming machine system"
            className="w-full h-auto"
          />
        </div>

        {/* Introduction */}
        <div className="prose max-w-none">
          <section className="mb-12">
            <p className="text-lg leading-relaxed mb-4">
              Most homeowners have never heard of FrameCAD, but it is the technology that makes modern cold formed steel construction possible. FrameCAD is a roll forming steel framing machine system that converts engineering data into finished structural components with incredible precision. This is what allows steel builds to be faster, straighter, and more predictable than wood framing.
            </p>
            
            <p className="text-lg leading-relaxed">
              This article explains what FrameCAD is, why builders rely on it, and why it plays a major role in the quality of your ADU or home.
            </p>
          </section>

          <Separator className="my-12" />

          {/* What FrameCAD Actually Does */}
          <section className="mb-12">
            <h2 className="text-3xl mb-6">What FrameCAD Actually Does</h2>
            
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                FrameCAD is an automated roll forming process used around the world. It takes the engineered drawings for a project and produces wall panels, floor joists, trusses, and structural members in a fully controlled environment.
              </p>
              
              <p>
                The machine forms, cuts, punches, and labels every piece of steel so the parts arrive ready to assemble. No cutting on site and no guesswork.
              </p>
              
              <p>
                The result is simple. Homes built this way are straighter, stronger, and faster to put together.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Factory Precision */}
          <section className="mb-12">
            <h2 className="text-3xl mb-6">Factory Precision That Wood Cannot Match</h2>
            
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Because FrameCAD uses automated roll forming equipment, every stud and connection point is produced to tight tolerances.
              </p>
            </div>

            <Card className="p-8 my-8 bg-[#8b9d83]/10 border-[#8b9d83]">
              <h3 className="text-xl mb-4 text-foreground">Typical tolerances:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Ruler className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <p className="text-foreground"><strong>Cold formed steel:</strong> about 1.6 millimeters of variation</p>
                </div>
                <div className="flex items-start gap-3">
                  <Ruler className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground"><strong>Dimensional lumber:</strong> about 6.4 millimeters of variation</p>
                </div>
              </div>
            </Card>

            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                This difference affects the entire build from start to finish. Steel walls stay straight. Floors remain level. Cabinets and countertops align properly. Drywall work looks clean with fewer repairs down the road.
              </p>
              
              <p>
                With wood, carpenters often need to shim, adjust, or replace pieces that have warped or absorbed moisture. Steel does not move or twist, so the build stays true.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Faster Construction */}
          <section className="mb-12">
            <h2 className="text-3xl mb-6">Faster Construction That Saves Real Money</h2>
            
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Since all framing is produced by the roll forming system ahead of time, the installation stage is fast. Panels arrive labeled and ready to stand.
              </p>
            </div>

            <Card className="p-8 my-8 bg-[#8b9d83]/10 border-[#8b9d83]">
              <h3 className="text-xl mb-4 text-foreground">Typical framing speed:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <p className="text-foreground"><strong>Cold formed steel:</strong> 4 to 5 days</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground"><strong>Wood framing:</strong> 14 to 21 days</p>
                </div>
              </div>
            </Card>

            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                The shorter timeline reduces exposure to weather, lowers labour costs, and gets homeowners into their new space sooner. Rental units begin generating income faster and project financing costs are reduced.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Weather Resistance */}
          <section className="mb-12">
            <h2 className="text-3xl mb-6">Better for Canadian Weather and Climate</h2>
            
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                FrameCAD panels are produced indoors, so weather never affects the quality of the framing.
              </p>
              
              <p>
                Wood framing is built outdoors. Rain, snow, and humidity can cause expansion and contraction before the structure is even closed in. This often leads to issues such as cracked drywall, uneven floors, and long-term movement.
              </p>
              
              <p>
                Steel avoids these problems completely, which matters in every part of Canada.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Engineering and Permits */}
          <section className="mb-12">
            <h2 className="text-3xl mb-6">Predictable Engineering That Helps With Permits</h2>
            
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                FrameCAD components are produced from fully engineered models that follow Canadian building codes. Municipal inspectors appreciate this because the system is consistent and easy to review.
              </p>
            </div>

            <Card className="p-8 my-8 bg-[#8b9d83]/10 border-[#8b9d83]">
              <h3 className="text-xl mb-4 text-foreground">This typically results in:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <p className="text-foreground">Faster permit approvals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <p className="text-foreground">Fewer corrections during review</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <p className="text-foreground">Fewer surprises on site</p>
                </div>
              </div>
            </Card>

            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                When a structure matches its engineering exactly, inspectors feel confident signing off on the project.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Waste Reduction */}
          <section className="mb-12">
            <h2 className="text-3xl mb-6">Cleaner Job Sites and Less Material Waste</h2>
            
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Roll forming systems use only the exact amount of steel needed for the design. There is almost no scrap produced.
              </p>
              
              <p>
                Wood framing often creates large amounts of waste, especially on custom designs. Steel eliminates most of that and the material is fully recyclable at the end of its lifespan.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Why Homeowners Should Care */}
          <section className="mb-12">
            <h2 className="text-3xl mb-6">Why Homeowners Should Care</h2>
            
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground mb-8">
              <p>
                FrameCAD benefits the builder, but the homeowner sees the biggest gains. You get:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              <Card className="p-6 bg-[#8b9d83]/10 border-[#8b9d83]">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Faster builds</h4>
                    <p className="text-sm text-muted-foreground">Move in sooner and start enjoying your space</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-[#8b9d83]/10 border-[#8b9d83]">
                <div className="flex items-start gap-3">
                  <Ruler className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Straighter walls</h4>
                    <p className="text-sm text-muted-foreground">Better finish work and cleaner aesthetics</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-[#8b9d83]/10 border-[#8b9d83]">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Longer lasting structure</h4>
                    <p className="text-sm text-muted-foreground">Steel doesn't warp, rot, or deteriorate</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-[#8b9d83]/10 border-[#8b9d83]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Fewer drywall repairs</h4>
                    <p className="text-sm text-muted-foreground">No cracking from structural movement</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-[#8b9d83]/10 border-[#8b9d83]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8b9d83] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Better trim and finish work</h4>
                    <p className="text-sm text-muted-foreground">Precision framing makes finishing easier</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-sage/10 border-sage">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">More predictable costs</h4>
                    <p className="text-sm text-muted-foreground">Fewer surprises and change orders</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-sage/10 border-sage">
                <div className="flex items-start gap-3">
                  <TrendingDown className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Less risk of delays</h4>
                    <p className="text-sm text-muted-foreground">Factory production is weather-independent</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                It creates a smoother and more reliable building experience from start to finish.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Author Bio */}
          <div className="mt-16 pt-12 border-t">
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
          </div>

          <Separator className="my-12" />

          {/* Related Articles */}
          <section>
            <h3 className="text-2xl mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card 
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onNavigate('factory-tour')}
              >
                <Badge className="bg-primary text-white mb-3">Factory Tour</Badge>
                <h4 className="mb-2">Inside the Factory: Why Cold Form Steel Homes Go Up in Days, Not Months</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Factory tour showing precision engineering and rapid assembly
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  8 min read
                </div>
              </Card>

              <Card 
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onNavigate('steel-vs-wood')}
              >
                <Badge className="bg-primary text-white mb-3">Comparisons</Badge>
                <h4 className="mb-2">Steel vs. Wood: Full Breakdown</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Honest comparison of costs, durability, and performance
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  10 min read
                </div>
              </Card>

              <Card 
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onNavigate('five-day-build')}
              >
                <Badge className="bg-primary text-white mb-3">Process & Permits</Badge>
                <h4 className="mb-2">How the 5 Day Build Works</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Step-by-step walkthrough of the assembly process
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  8 min read
                </div>
              </Card>

              <Card 
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onNavigate('cfs-vs-traditional-steel')}
              >
                <Badge className="bg-primary text-white mb-3">Comparisons</Badge>
                <h4 className="mb-2">Cold-Form Steel vs. Traditional Steel Framing</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  A clear, real-world guide for anyone building a home or ADU
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  12 min read
                </div>
              </Card>
            </div>
          </section>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-accent text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">
            Ready to Experience FrameCAD Precision?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            See how our factory-built steel homes can work for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('models')}
              className="bg-[#c8694e] text-white hover:bg-[#b5593d]"
            >
              Explore Models
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="bg-white text-accent hover:bg-white/90"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}