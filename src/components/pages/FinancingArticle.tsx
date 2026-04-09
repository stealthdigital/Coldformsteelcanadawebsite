import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, DollarSign, TrendingUp, Home, CheckCircle2, Zap, Shield, FileText } from 'lucide-react';
import { HeadMeta } from '../HeadMeta';
import { ArticleSchema } from '../schema/ArticleSchema';
import { shareArticle } from '../../utils/share';
import { ImageWithFallback } from '../figma/ImageWithFallback';

import { CloudinaryImages } from '../../config/cloudinary-urls';

// Author photo
const johnMontgomeryPhoto = CloudinaryImages.learning.johnMontgomery;

interface FinancingArticleProps {
  onNavigate: (page: string) => void;
}

export function FinancingArticle({ onNavigate }: FinancingArticleProps) {
  const headerImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/main/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';

  return (
    <div className="min-h-screen bg-background pt-16">
      <HeadMeta 
        title="Steel Home Financing Options Canada | ADU Mortgage Loans"
        description="Explore financing options for cold-form steel homes and ADUs in Canada. 24-hour approvals, 25% down, 10-25 year terms. Monthly payments from $1,000. Rental income can cover mortgage."
        image="https://via.placeholder.com/1200x630/665f55/ffffff?text=Financing+Options"
      />
      <ArticleSchema
        headline="Financing Options in 24 Hours"
        description="Understanding fast financing options for ADUs and steel homes. Learn about monthly payments, approval times, and how to secure funding for your build."
        author={{ name: 'John Montgomery', jobTitle: 'President, Cold Form Steel Canada' }}
        datePublished="2026-01-09"
        category="Cost & Financing"
        keywords={['ADU financing', 'home financing', 'construction loans', 'steel home financing', '24 hour approval', 'monthly payments']}
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
            Cost & Financing
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6 font-bold text-foreground">
            Financing Options in 24 Hours
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Most families want to know one thing before they decide on an ADU: "What will this cost per month?" The price of the unit matters, but the monthly payment is what determines whether the project fits the budget. That is why fast, predictable financing matters.
          </p>

          <div className="flex items-center gap-6 text-sm text-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-terracotta" />
              <span>4 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-terracotta" />
              <span>January 2026</span>
            </div>
            <button 
              onClick={() => shareArticle({
                title: 'Financing Options in 24 Hours',
                text: 'Most families want to know one thing before they decide on an ADU: "What will this cost per month?"'
              })}
              className="flex items-center gap-2 hover:text-terracotta transition-colors ml-auto"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </article>

      {/* Quick Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg leading-relaxed text-muted-foreground">
            <p>
              Cold Form Steel Canada works with lending partners who can provide answers within 24 hours. No long back-and-forth. No waiting weeks for pre-approval. Homeowners get a clear number quickly, which removes uncertainty and helps them plan.
            </p>
          </div>
        </div>
      </section>

      {/* Why Our ADUs Are Easy to Finance */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-3 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 text-foreground font-bold">Why Our ADUs Are Easy to Finance</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Lenders want three things:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-6 bg-white border-terracotta/20 shadow-md">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-terracotta/10 mb-3">
                          <span className="text-2xl text-terracotta font-bold">1</span>
                        </div>
                        <p className="text-foreground font-medium">A predictable build</p>
                      </div>
                    </Card>
                    <Card className="p-6 bg-white border-terracotta/20 shadow-md">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-terracotta/10 mb-3">
                          <span className="text-2xl text-terracotta font-bold">2</span>
                        </div>
                        <p className="text-foreground font-medium">A clear cost structure</p>
                      </div>
                    </Card>
                    <Card className="p-6 bg-white border-terracotta/20 shadow-md">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-terracotta/10 mb-3">
                          <span className="text-2xl text-terracotta font-bold">3</span>
                        </div>
                        <p className="text-foreground font-medium">A strong asset that increases property value</p>
                      </div>
                    </Card>
                  </div>
                  <p>
                    Cold form steel checks all three boxes. Engineering is precise. Pricing is transparent. Construction timelines are reliable. That gives lenders confidence and allows them to respond quickly.
                  </p>
                  <p>
                    This is why many homeowners receive approval within one business day once their application and drawings are submitted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example: Financing a $200,000 ADU */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 text-foreground font-bold">Example: Financing a $200,000 ADU</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Here is a realistic breakdown of what monthly payments could look like today.
                  </p>
                  
                  <Card className="p-6 bg-muted/30 shadow-md border-0">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>ADU Price:</span>
                        <span className="font-semibold text-foreground">$200,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Down Payment (25%):</span>
                        <span className="font-semibold text-foreground">$50,000</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="font-semibold text-foreground">Amount Financed:</span>
                        <span className="text-2xl font-semibold text-terracotta">$150,000</span>
                      </div>
                    </div>
                  </Card>

                  <p>
                    Below are sample monthly payments at typical residential lending rates.
                  </p>

                  {/* 10-Year Term */}
                  <Card className="p-6 bg-gradient-to-br from-terracotta/5 to-terracotta/10 border-terracotta/20 shadow-md border-2">
                    <div className="flex items-start gap-4">
                      <div className="bg-terracotta/10 p-3 rounded-lg flex-shrink-0">
                        <DollarSign className="w-6 h-6 text-terracotta" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl mb-2 font-bold text-foreground">10-Year Term at 6.5%</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          This term is popular with homeowners who want to pay the unit off quickly.
                        </p>
                        <div className="text-2xl text-terracotta font-bold">
                          $1,700–$1,800<span className="text-sm text-muted-foreground font-normal">/month</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* 15-Year Term */}
                  <Card className="p-6 bg-gradient-to-br from-terracotta/5 to-terracotta/10 border-terracotta/20 shadow-md border-2">
                    <div className="flex items-start gap-4">
                      <div className="bg-terracotta/10 p-3 rounded-lg flex-shrink-0">
                        <DollarSign className="w-6 h-6 text-terracotta" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl mb-2 font-bold text-foreground">15-Year Term at 6.5%</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          A longer term reduces the monthly cost while still keeping total interest reasonable.
                        </p>
                        <div className="text-2xl text-terracotta font-bold">
                          $1,300–$1,350<span className="text-sm text-muted-foreground font-normal">/month</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* 25-Year Term */}
                  <Card className="p-6 bg-gradient-to-br from-terracotta/5 to-terracotta/10 border-terracotta/20 shadow-md border-2">
                    <div className="flex items-start gap-4">
                      <div className="bg-terracotta/10 p-3 rounded-lg flex-shrink-0">
                        <DollarSign className="w-6 h-6 text-terracotta" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl mb-2 font-bold text-foreground">25-Year Term at 6.5%</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          This is the lowest monthly cost and often the easiest option for rental ADUs or backyard suites.
                        </p>
                        <div className="text-2xl text-terracotta font-bold">
                          $1,000–$1,050<span className="text-sm text-muted-foreground font-normal">/month</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Means for Homeowners */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 text-foreground font-bold">What This Means for Homeowners</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Most ADUs in Ontario can be rented for $1,600–$2,200 per month, depending on size and location. In many cases, the rental income is higher than the financing payment, which means:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                      <span>The ADU can pay for itself</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                      <span>Homeowners generate monthly positive cash flow</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                      <span>Property value increases immediately</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                      <span>A family member can live on the property at a fraction of normal housing costs</span>
                    </li>
                  </ul>
                  <p>
                    This is why so many families are building ADUs now. The financing structure makes the decision simple.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Support the Financing Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4 text-foreground font-bold">How We Support the Financing Process</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Cold Form Steel Canada guides homeowners through every step, including:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                      <span>Providing the drawings and documents lenders need</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                      <span>Connecting homeowners with our lending partners</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                      <span>Helping calculate payments based on current rates</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                      <span>Ensuring the project stays within the approved budget</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                      <span>Offering permit support so lenders have everything they require</span>
                    </li>
                  </ul>
                  <p>
                    The entire goal is speed and clarity. Homeowners should know their monthly payment quickly, without pressure and without surprises.
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
            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('cost-drivers')}>
              <div className="p-6">
                <DollarSign className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">What Drives the Cost of Your Build?</h3>
                <p className="text-muted-foreground mb-4">
                  Understanding materials, labor, and site preparation costs.
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

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('steel-vs-wood')}>
              <div className="p-6">
                <Zap className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">Steel vs. Wood: Full Breakdown</h3>
                <p className="text-muted-foreground mb-4">
                  Honest comparison of costs, durability, and performance.
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
              Get Your Payment Estimate in 24 Hours
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Cold Form Steel Canada can provide your financing options within one business day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-terracotta hover:bg-terracotta/90 text-white font-bold h-14 px-10 text-lg shadow-xl border-0 hover:scale-105 transition-transform duration-200"
              >
                Request Financing Estimate
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
