import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, Factory, Ruler, Zap, DollarSign, Shield, TrendingDown, Droplets, FileCheck, Recycle, Home, Award, FileText } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArticleSchema } from '../schema/ArticleSchema';
import { HeadMeta } from '../HeadMeta';
import { shareArticle } from '../../utils/share';

import { CloudinaryImages } from '../../config/cloudinary-urls';

// GitHub URLs for article images
const frameCADMachine = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Learning%20Centre/FrameCAD.jpeg';
const johnMontgomeryPhoto = CloudinaryImages.learning.johnMontgomery;

interface FrameCADArticleProps {
  onNavigate: (page: string) => void;
}

export function FrameCADArticle({ onNavigate }: FrameCADArticleProps) {
  const headerImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/main/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';

  return (
    <div className="min-h-screen bg-background pt-16">
      <HeadMeta 
        title="FrameCAD Technology | Precision Steel Framing | Cold Form Steel Canada"
        description="Learn how FrameCAD automated technology creates precision cold-formed steel frames with 1.6mm tolerance. Factory automation, quality control, and why it's faster than traditional construction."
        image={headerImage}
      />
      <ArticleSchema
        headline="Why FrameCAD Matters for Your Build"
        description="The system behind the speed, accuracy, and consistency of cold formed steel homes"
        author={{ name: 'John Montgomery', jobTitle: 'Owner, SteelBuilt Group of Companies' }}
        datePublished="2026-01-14"
        category="Factory Tour"
        keywords={['FrameCAD', 'cold form steel', 'factory built', 'precision manufacturing', 'steel construction', 'automated building']}
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
            Why FrameCAD Matters for Your Build
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            The system behind the speed, accuracy, and consistency of cold formed steel homes
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
                title: 'Why FrameCAD Matters for Your Build',
                text: 'The system behind the speed, accuracy, and consistency of cold formed steel homes'
              })}
              className="flex items-center gap-2 hover:text-terracotta transition-colors ml-auto"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Hero Image - FrameCAD Machine */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl border-4 border-muted">
          <ImageWithFallback 
            src={frameCADMachine}
            alt="FrameCAD roll forming machine system"
            className="w-full h-auto"
          />
        </div>
      </article>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
            <p>
              Most homeowners have never heard of FrameCAD, but it is the technology that makes modern cold formed steel construction possible. FrameCAD is a roll forming steel framing machine system that converts engineering data into finished structural components with incredible precision. This is what allows steel builds to be faster, straighter, and more predictable than wood framing.
            </p>
            
            <p>
              This article explains what FrameCAD is, why builders rely on it, and why it plays a major role in the quality of your ADU or home.
            </p>
          </div>
        </div>
      </section>

      {/* What FrameCAD Actually Does */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Factory className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">What FrameCAD Actually Does</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    FrameCAD is an automated roll forming process used around the world. It takes the engineered drawings for a project and produces wall panels, floor joists, trusses, and structural members in a fully controlled environment.
                  </p>
                  
                  <p>
                    The machine forms, cuts, punches, and labels every piece of steel so the parts arrive ready to assemble. No cutting on site and no guesswork.
                  </p>

                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">The result is simple.</strong> Homes built this way are straighter, stronger, and faster to put together.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Precision That Wood Cannot Match */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Ruler className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Factory Precision That Wood Cannot Match</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Because FrameCAD uses automated roll forming equipment, every stud and connection point is produced to tight tolerances.
                  </p>

                  <Card className="p-10 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-2 border-terracotta/30 rounded-xl shadow-xl">
                    <h3 className="text-2xl mb-6 font-bold text-foreground">Typical tolerances:</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Ruler className="w-8 h-8 text-terracotta flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-foreground text-xl mb-2"><strong>Cold formed steel:</strong></p>
                          <p className="text-2xl font-bold text-terracotta">about 1.6 millimeters of variation</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-4 opacity-60">
                        <Ruler className="w-8 h-8 text-muted-foreground flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-foreground text-xl mb-2"><strong>Dimensional lumber:</strong></p>
                          <p className="text-2xl font-bold text-muted-foreground">about 6.4 millimeters of variation</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="text-lg leading-relaxed mb-4">
                      <strong className="text-foreground">This difference affects the entire build from start to finish.</strong>
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Steel walls stay straight</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Floors remain level</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Cabinets and countertops align properly</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Drywall work looks clean with fewer repairs down the road</span>
                      </li>
                    </ul>
                  </Card>

                  <p>
                    With wood, carpenters often need to shim, adjust, or replace pieces that have warped or absorbed moisture. Steel does not move or twist, so the build stays true.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faster Construction That Saves Real Money */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Zap className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Faster Construction That Saves Real Money</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Since all framing is produced by the roll forming system ahead of time, the installation stage is fast. Panels arrive labeled and ready to stand.
                  </p>

                  <Card className="p-10 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-2 border-terracotta/30 rounded-xl shadow-xl">
                    <h3 className="text-2xl mb-6 font-bold text-foreground">Typical framing speed:</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Zap className="w-8 h-8 text-terracotta flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-foreground text-xl mb-2"><strong>Cold formed steel:</strong></p>
                          <p className="text-3xl font-bold text-terracotta">4 to 5 days</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-4 opacity-60">
                        <Clock className="w-8 h-8 text-muted-foreground flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-foreground text-xl mb-2"><strong>Wood framing:</strong></p>
                          <p className="text-3xl font-bold text-muted-foreground">14 to 21 days</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="text-lg leading-relaxed mb-4">
                      <strong className="text-foreground">The shorter timeline provides multiple benefits:</strong>
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Reduces exposure to weather</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Lowers labour costs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Gets homeowners into their new space sooner</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Rental units begin generating income faster</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Project financing costs are reduced</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Better for Canadian Weather and Climate */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Droplets className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Better for Canadian Weather and Climate</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    FrameCAD panels are produced indoors, so weather never affects the quality of the framing.
                  </p>

                  <Card className="bg-white p-8 rounded-xl shadow-xl border-2 border-terracotta">
                    <p className="text-lg leading-relaxed mb-4">
                      <strong className="text-foreground">Wood framing is built outdoors.</strong> Rain, snow, and humidity can cause expansion and contraction before the structure is even closed in. This often leads to issues such as:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-destructive font-bold text-xl flex-shrink-0">✗</span>
                        <span>Cracked drywall</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive font-bold text-xl flex-shrink-0">✗</span>
                        <span>Uneven floors</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive font-bold text-xl flex-shrink-0">✗</span>
                        <span>Long-term movement</span>
                      </li>
                    </ul>
                  </Card>

                  <p className="font-bold text-foreground text-xl">
                    Steel avoids these problems completely, which matters in every part of Canada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Predictable Engineering That Helps With Permits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <FileCheck className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Predictable Engineering That Helps With Permits</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    FrameCAD components are produced from fully engineered models that follow Canadian building codes. Municipal inspectors appreciate this because the system is consistent and easy to review.
                  </p>

                  <Card className="p-8 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-2 border-terracotta/30 rounded-xl shadow-xl">
                    <h3 className="text-2xl mb-6 font-bold text-foreground">This typically results in:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">Faster permit approvals</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">Fewer corrections during review</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">Fewer surprises on site</span>
                      </li>
                    </ul>
                  </Card>

                  <p>
                    When a structure matches its engineering exactly, inspectors feel confident signing off on the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaner Job Sites and Less Material Waste */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Recycle className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Cleaner Job Sites and Less Material Waste</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Roll forming systems use only the exact amount of steel needed for the design. There is almost no scrap produced.
                  </p>

                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">Wood framing often creates large amounts of waste,</strong> especially on custom designs. Steel eliminates most of that and the material is fully recyclable at the end of its lifespan.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Homeowners Should Care */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Home className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Why Homeowners Should Care</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    FrameCAD benefits the builder, but the homeowner sees the biggest gains. You get:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-white shadow-xl border-2 border-terracotta/30 rounded-xl">
                      <div className="flex items-start gap-3 mb-3">
                        <Zap className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <h3 className="font-bold text-lg text-foreground">Faster builds</h3>
                      </div>
                      <p className="text-muted-foreground">Move in sooner and start enjoying your space</p>
                    </Card>

                    <Card className="p-6 bg-white shadow-xl border-2 border-terracotta/30 rounded-xl">
                      <div className="flex items-start gap-3 mb-3">
                        <Ruler className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <h3 className="font-bold text-lg text-foreground">Straighter walls</h3>
                      </div>
                      <p className="text-muted-foreground">Better finish work and cleaner aesthetics</p>
                    </Card>

                    <Card className="p-6 bg-white shadow-xl border-2 border-terracotta/30 rounded-xl">
                      <div className="flex items-start gap-3 mb-3">
                        <Shield className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <h3 className="font-bold text-lg text-foreground">Longer lasting structure</h3>
                      </div>
                      <p className="text-muted-foreground">Steel doesn&rsquo;t warp, rot, or deteriorate</p>
                    </Card>

                    <Card className="p-6 bg-white shadow-xl border-2 border-terracotta/30 rounded-xl">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <h3 className="font-bold text-lg text-foreground">Fewer drywall repairs</h3>
                      </div>
                      <p className="text-muted-foreground">No cracking from structural movement</p>
                    </Card>

                    <Card className="p-6 bg-white shadow-xl border-2 border-terracotta/30 rounded-xl">
                      <div className="flex items-start gap-3 mb-3">
                        <Award className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <h3 className="font-bold text-lg text-foreground">Better trim and finish work</h3>
                      </div>
                      <p className="text-muted-foreground">Precision framing makes finishing easier</p>
                    </Card>

                    <Card className="p-6 bg-white shadow-xl border-2 border-terracotta/30 rounded-xl">
                      <div className="flex items-start gap-3 mb-3">
                        <DollarSign className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <h3 className="font-bold text-lg text-foreground">More predictable costs</h3>
                      </div>
                      <p className="text-muted-foreground">Fewer surprises and change orders</p>
                    </Card>

                    <Card className="p-6 bg-white shadow-xl border-2 border-terracotta/30 rounded-xl md:col-span-2">
                      <div className="flex items-start gap-3 mb-3">
                        <Droplets className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <h3 className="font-bold text-lg text-foreground">Less risk of delays</h3>
                      </div>
                      <p className="text-muted-foreground">Factory production is weather-independent</p>
                    </Card>
                  </div>

                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">It creates a smoother and more reliable building experience from start to finish.</strong>
                    </p>
                  </Card>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-primary text-white p-10 text-center rounded-2xl shadow-xl border-0">
            <h2 className="text-3xl md:text-4xl mb-6 text-white font-bold">
              Ready to Experience Precision?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              See how our factory-built steel homes can work for your project with millimeter accuracy.
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
                className="bg-white text-primary hover:bg-white/90 border-0 font-bold h-14 px-10 text-lg shadow-lg"
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
