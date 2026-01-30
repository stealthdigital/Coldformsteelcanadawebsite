import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, DollarSign, TrendingUp, Home, CheckCircle2, Zap, Shield } from 'lucide-react';
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
    <div className="min-h-screen bg-white pt-16">
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
            Cost & Financing
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6 font-bold">
            Financing Options in 24 Hours
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Most families want to know one thing before they decide on an ADU: "What will this cost per month?" The price of the unit matters, but the monthly payment is what determines whether the project fits the budget. That is why fast, predictable financing matters.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>4 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>January 2026</span>
            </div>
            <button 
              onClick={() => shareArticle({
                title: 'Financing Options in 24 Hours',
                text: 'Most families want to know one thing before they decide on an ADU: "What will this cost per month?"'
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
          {/* Quick Overview */}
          <section>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                Cold Form Steel Canada works with lending partners who can provide answers within 24 hours. No long back-and-forth. No waiting weeks for pre-approval. Homeowners get a clear number quickly, which removes uncertainty and helps them plan.
              </p>
            </div>
          </section>

          <Separator />

          {/* Why Our ADUs Are Easy to Finance */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-sage/20 p-3 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-sage" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Why Our ADUs Are Easy to Finance</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Lenders want three things:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-6 bg-sage/5 border-sage/20">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage/10 mb-3">
                          <span className="text-2xl text-sage">1</span>
                        </div>
                        <p>A predictable build</p>
                      </div>
                    </Card>
                    <Card className="p-6 bg-sage/5 border-sage/20">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage/10 mb-3">
                          <span className="text-2xl text-sage">2</span>
                        </div>
                        <p>A clear cost structure</p>
                      </div>
                    </Card>
                    <Card className="p-6 bg-sage/5 border-sage/20">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage/10 mb-3">
                          <span className="text-2xl text-sage">3</span>
                        </div>
                        <p>A strong asset that increases property value</p>
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
          </section>

          <Separator />

          {/* Example: Financing a $200,000 ADU - Text Version */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Example: Financing a $200,000 ADU</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Here is a realistic breakdown of what monthly payments could look like today.
                  </p>
                  
                  <Card className="p-6 bg-muted">
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
                        <span className="text-2xl font-semibold text-accent">$150,000</span>
                      </div>
                    </div>
                  </Card>

                  <p>
                    Below are sample monthly payments at typical residential lending rates.
                  </p>

                  {/* 10-Year Term */}
                  <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <DollarSign className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl mb-2">10-Year Term at 6.5%</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          This term is popular with homeowners who want to pay the unit off quickly.
                        </p>
                        <div className="text-2xl text-primary">
                          $1,700–$1,800<span className="text-sm text-muted-foreground">/month</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* 15-Year Term */}
                  <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                        <DollarSign className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl mb-2">15-Year Term at 6.5%</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          A longer term reduces the monthly cost while still keeping total interest reasonable.
                        </p>
                        <div className="text-2xl text-accent">
                          $1,300–$1,350<span className="text-sm text-muted-foreground">/month</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* 25-Year Term */}
                  <Card className="p-6 bg-gradient-to-br from-sage/10 to-sage/20 border-sage/30">
                    <div className="flex items-start gap-4">
                      <div className="bg-sage/20 p-3 rounded-lg flex-shrink-0">
                        <DollarSign className="w-6 h-6 text-sage" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl mb-2">25-Year Term at 6.5%</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          This is the lowest monthly cost and often the easiest option for rental ADUs or backyard suites.
                        </p>
                        <div className="text-2xl text-sage">
                          $1,000–$1,050<span className="text-sm text-muted-foreground">/month</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* What This Means for Homeowners */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-sage/20 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-sage" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">What This Means for Homeowners</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Most ADUs in Ontario can be rented for $1,600–$2,200 per month, depending on size and location. In many cases, the rental income is higher than the financing payment, which means:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>The ADU can pay for itself</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Homeowners generate monthly positive cash flow</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Property value increases immediately</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>A family member can live on the property at a fraction of normal housing costs</span>
                    </li>
                  </ul>
                  <p>
                    This is why so many families are building ADUs now. The financing structure makes the decision simple.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* How We Support the Financing Process */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-4">How We Support the Financing Process</h2>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                Cold Form Steel Canada guides homeowners through every step, including:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>Providing the drawings and documents lenders need</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>Connecting homeowners with our lending partners</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>Helping calculate payments based on current rates</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>Ensuring the project stays within the approved budget</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span>Offering permit support so lenders have everything they require</span>
                </li>
              </ul>
              <p>
                The entire goal is speed and clarity. Homeowners should know their monthly payment quickly, without pressure and without surprises.
              </p>
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
          <Card className="p-8 bg-accent text-white">
            <div className="text-center">
              <h3 className="text-2xl mb-4">Get Your Payment Estimate in 24 Hours</h3>
              <p className="text-lg mb-6 text-white/90">
                Cold Form Steel Canada can provide your financing options within one business day
              </p>
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-white text-accent hover:bg-white/90"
              >
                Request Financing Estimate
              </Button>
            </div>
          </Card>

          <Separator />

          {/* Continue Learning */}
          <section className="space-y-6">
            <h2 className="text-2xl mb-6">Continue Learning</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('cost-drivers')}>
                <Badge className="mb-3 bg-accent text-white">Cost & Financing</Badge>
                <h3 className="text-lg mb-2">What Drives the Cost of Your Build?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Understanding materials, labor, and site preparation
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
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

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('steel-vs-wood')}>
                <Badge className="mb-3 bg-primary text-white">Comparisons</Badge>
                <h3 className="text-lg mb-2">Steel vs. Wood: Full Breakdown</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Honest comparison of costs, durability, and performance
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>10 min read</span>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}