import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, AlertCircle, FileText, MapPin, ClipboardCheck, Shield, XCircle, Home } from 'lucide-react';
import { ArticleSchema } from '../schema/ArticleSchema';
import { HeadMeta } from '../HeadMeta';
import { CloudinaryImages } from '../../config/cloudinary-urls';
import { shareArticle } from '../../utils/share';

// Author photo
const johnMontgomeryPhoto = CloudinaryImages.learning.johnMontgomery;

interface PermitArticleProps {
  onNavigate: (page: string) => void;
}

// Permit Article Component - ADU Permit Guide
export function PermitArticle({ onNavigate }: PermitArticleProps) {
  const headerImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/main/public/assets/1534d6aaa1eca69e99668609af3c96393e80e966.png';

  return (
    <div className="min-h-screen bg-background pt-16">
      <HeadMeta 
        title="ADU & Steel Home Permits in Canada | Zoning Guide"
        description="Complete guide to obtaining permits for cold-form steel ADUs and homes across Canadian municipalities. Learn about zoning, setbacks, code compliance, and permit approval process."
        image={headerImage}
      />
      <ArticleSchema
        headline="Do I Need a Permit for My ADU?"
        description="Everything you need to know about permits for ADUs in Canada. Understanding zoning laws, building codes, and the approval process."
        author={{ name: 'John Montgomery', jobTitle: 'Owner, Cold Form Steel Canada' }}
        datePublished="2026-01-09"
        category="Process & Permits"
        keywords={['ADU permits', 'building permits Canada', 'zoning laws', 'ADU regulations', 'permit process', 'steel ADU permits']}
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
            Process & Permits
          </Badge>
          
          <h1 className="text-4xl md:text-5xl mb-6 font-bold text-foreground">
            Do I Need a Permit for My ADU?
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Building an ADU in Canada is one of the smartest ways to create new housing, add rental income, support family members or increase property value. It is also a process that must follow local building laws. Every homeowner asks the same question at the start: &ldquo;Do I need a permit for my ADU?&rdquo;
          </p>

          <div className="flex items-center gap-6 text-sm text-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-terracotta" />
              <span>6 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-terracotta" />
              <span>January 2026</span>
            </div>
            <button 
              onClick={() => shareArticle({
                title: 'Do I Need a Permit for My ADU?',
                text: 'Building an ADU in Canada is one of the smartest ways to create new housing, add rental income, support family members or increase property value.'
              })}
              className="flex items-center gap-2 hover:text-terracotta transition-colors ml-auto"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </article>

      {/* The Short Answer */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-br from-terracotta/10 to-terracotta/5 border-2 border-terracotta/30 rounded-xl shadow-xl">
            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-terracotta flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl mb-4 font-bold text-foreground">The Short Answer</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-terracotta">Yes.</strong> An ADU is a legal dwelling unit, which means it must meet building, zoning and safety requirements. Permits protect homeowners, future occupants and property value, and they also keep the project eligible for municipal or federal grant programs.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
            <p>
              This article explains exactly what is required, how the process works in Canada, and how Cold Form Steel Canada supports homeowners through every step.
            </p>
          </div>
        </div>
      </section>

      {/* Why ADUs Require Permits */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Shield className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Why ADUs Require Permits in Canada</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    ADUs are regulated at the municipal level. Even if a design meets national or provincial building codes, the final approval must come from the town or city where the ADU is being installed. Each municipality checks:
                  </p>
                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Zoning rules</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Lot setbacks and maximum building size</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Fire safety separation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Plumbing and electrical compliance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Heating type and mechanical requirements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Foundation style (pads, piles, grade beams)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Access, parking or laneway requirements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Snow load and climate conditions</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">Cold form steel ADUs are engineered to meet Canadian standards,</strong> but each municipality must still approve the installation locally. Designs are not &ldquo;pre-approved Canada-wide.&rdquo; They are code compliant yet still reviewed on a site-by-site basis.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Municipalities Look For */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <FileText className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">What Municipalities Look For</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Municipalities want safe, legal, permanent residential spaces. When reviewing an ADU permit, they evaluate:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-5 bg-white border-2 border-terracotta/20 rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                        <span>Structural drawings</span>
                      </div>
                    </Card>
                    <Card className="p-5 bg-white border-2 border-terracotta/20 rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                        <span>Fire-rated assemblies</span>
                      </div>
                    </Card>
                    <Card className="p-5 bg-white border-2 border-terracotta/20 rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                        <span>Insulation values for the climate zone</span>
                      </div>
                    </Card>
                    <Card className="p-5 bg-white border-2 border-terracotta/20 rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                        <span>Window and door placements</span>
                      </div>
                    </Card>
                    <Card className="p-5 bg-white border-2 border-terracotta/20 rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                        <span>Exits and emergency access</span>
                      </div>
                    </Card>
                    <Card className="p-5 bg-white border-2 border-terracotta/20 rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                        <span>Drainage and grading</span>
                      </div>
                    </Card>
                    <Card className="p-5 bg-white border-2 border-terracotta/20 rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                        <span>Electrical and plumbing layouts</span>
                      </div>
                    </Card>
                    <Card className="p-5 bg-white border-2 border-terracotta/20 rounded-xl shadow-md">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                        <span>Energy-efficiency compliance</span>
                      </div>
                    </Card>
                  </div>
                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">Most delays in the ADU approval process come from incomplete drawings or designs that do not match local zoning rules.</strong> Cold Form Steel Canada simplifies this by supplying permit-ready drawings for our ADU models and guiding homeowners through any adjustments required.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Are These ADUs Automatically Approved */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <AlertCircle className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Are These ADUs Automatically Approved?</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p className="text-2xl font-bold text-terracotta">
                    No.
                  </p>
                  <p>
                    ADU models are engineered using consistent standards, but approval always depends on local conditions. Municipalities vary in:
                  </p>
                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Snow load requirements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Setbacks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Foundation styles</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Heating types</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                        <span>Drainage and servicing rules</span>
                      </li>
                    </ul>
                  </Card>
                  <p>
                    The engineering is complete, but it is always checked against the requirements of the jurisdiction where the home will be placed. This ensures full compliance and reduces the risk of delays once the city begins its review.
                  </p>
                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">Municipalities may also choose to list Cold Form Steel Canada as a pre-approved vendor</strong> once they become familiar with the designs. That accelerates future approvals but does not replace the permitting step.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toronto Example - What a Typical ADU Permit Application Looks Like */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <MapPin className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">What a Typical ADU Permit Application Looks Like in Toronto</h2>
                <div className="text-lg leading-relaxed space-y-8 text-muted-foreground">
                  <p>
                    Toronto is a strong example because it has one of the most structured ADU approval systems in Canada. A typical application includes the following steps.
                  </p>

                  {/* Step 1 - Zoning Check */}
                  <Card className="bg-white rounded-xl shadow-xl border-2 border-terracotta overflow-hidden">
                    <div className="bg-terracotta text-white p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-terracotta flex-shrink-0 font-bold text-2xl">
                          1
                        </div>
                        <h3 className="text-2xl font-bold">Zoning Check</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="mb-4">
                        The City confirms whether the lot can legally support an ADU by reviewing:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Lot area and width</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Setbacks from property lines</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Maximum height</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Placement and building coverage</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Separation distance from the main dwelling</span>
                        </li>
                      </ul>
                      <Card className="bg-terracotta/5 p-4 border-l-4 border-terracotta mt-4">
                        <p className="text-base">
                          If the design fits within these rules, the project proceeds. If not, a minor variance may be required.
                        </p>
                      </Card>
                    </div>
                  </Card>

                  {/* Step 2 - Permit-Ready Drawings */}
                  <Card className="bg-white rounded-xl shadow-xl border-2 border-terracotta overflow-hidden">
                    <div className="bg-terracotta text-white p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-terracotta flex-shrink-0 font-bold text-2xl">
                          2
                        </div>
                        <h3 className="text-2xl font-bold text-white">Permit-Ready Drawings</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="mb-4">
                        Toronto requires complete drawings prepared to Ontario Building Code standards, including:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Site plan</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Floor plans</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Elevations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Structural drawings</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Mechanical, plumbing and electrical layouts</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Insulation and energy-efficiency calculations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Drainage or grading plan when required</span>
                        </li>
                      </ul>
                      <Card className="bg-terracotta/5 p-4 border-l-4 border-terracotta mt-4">
                        <p className="text-base">
                          <strong className="text-foreground">Cold form steel framing simplifies this stage</strong> because the structural components are pre-engineered and consistent across each model.
                        </p>
                      </Card>
                    </div>
                  </Card>

                  {/* Step 3 - Submit the Application */}
                  <Card className="bg-white rounded-xl shadow-xl border-2 border-terracotta overflow-hidden">
                    <div className="bg-terracotta text-white p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-terracotta flex-shrink-0 font-bold text-2xl">
                          3
                        </div>
                        <h3 className="text-2xl font-bold">Submit the Application</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="mb-4">
                        The homeowner or builder submits:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>All drawings in the correct format</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Application forms</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Applicable permit fees</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Energy and heat-loss calculations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Letters of commitment for engineering review (if required)</span>
                        </li>
                      </ul>
                      <Card className="bg-terracotta/5 p-4 border-l-4 border-terracotta mt-4">
                        <p className="text-base">
                          The City evaluates zoning, structure, fire separation, exits, insulation and mechanical systems.
                        </p>
                      </Card>
                    </div>
                  </Card>

                  {/* Step 4 - City Comments and Revisions */}
                  <Card className="bg-white rounded-xl shadow-xl border-2 border-terracotta overflow-hidden">
                    <div className="bg-terracotta text-white p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-terracotta flex-shrink-0 font-bold text-2xl">
                          4
                        </div>
                        <h3 className="text-2xl font-bold">City Comments and Revisions</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="mb-4">
                        Most applications receive comments. These may include:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Adjusting window size or location</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Clarifying fire separations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Revising setbacks</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-terracotta font-bold text-xl flex-shrink-0">•</span>
                          <span>Updating structural or mechanical notes</span>
                        </li>
                      </ul>
                      <Card className="bg-terracotta/5 p-4 border-l-4 border-terracotta mt-4">
                        <p className="text-base">
                          Once revisions are completed, the application moves toward approval.
                        </p>
                      </Card>
                    </div>
                  </Card>

                  {/* Step 5 - Permit Issued */}
                  <Card className="bg-white rounded-xl shadow-xl border-2 border-terracotta overflow-hidden">
                    <div className="bg-gradient-to-br from-terracotta to-terracotta/80 text-white p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-terracotta flex-shrink-0 font-bold text-2xl">
                          5
                        </div>
                        <h3 className="text-2xl font-bold !text-white">Permit Issued</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="mb-4">
                        After approval, the building permit is issued and construction can begin. Inspections will occur at stages such as:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                          <span>Foundation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                          <span>Framing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                          <span>Plumbing and electrical</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                          <span>Insulation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                          <span>Final occupancy</span>
                        </li>
                      </ul>
                      <Card className="bg-terracotta/5 p-4 border-l-4 border-terracotta mt-4">
                        <p className="text-base">
                          <strong className="text-foreground">Passing all inspections ensures the ADU is fully legal, safe and ready for move-in.</strong>
                        </p>
                      </Card>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Cold Form Steel Canada Helps With Permits */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <ClipboardCheck className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">How Cold Form Steel Canada Helps With Permits</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Homeowners often feel uncertain about how to deal with zoning, drawings and municipal communication. Cold Form Steel Canada reduces that friction by providing:
                  </p>
                  <Card className="bg-gradient-to-br from-terracotta/10 to-terracotta/5 p-8 rounded-xl border-2 border-terracotta/30 shadow-xl">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">Permit-ready drawings for all ADU models</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">Help confirming zoning and lot eligibility</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">Guidance on foundations, heating and code requirements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">Coordination with our engineering team</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">Assistance preparing documentation for the city</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">Support responding to municipal comments and revisions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                        <span className="text-lg">An Engineer of Record available for consultations when needed</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="bg-terracotta/5 p-6 border-l-8 border-terracotta rounded-xl shadow-md">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">The aim is a clear, predictable process</strong> from the moment the homeowner selects a model to the moment the city issues the permit. This removes stress and gives the homeowner confidence that every requirement is handled correctly.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Word */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-4 rounded-xl">
                <Shield className="w-8 h-8 text-terracotta" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl mb-6 font-bold text-foreground">Final Word: Yes, a Permit Is Required. Yes, We Can Help.</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    ADUs must follow local building and zoning rules. This protects homeowners, ensures safety and preserves long-term value.
                  </p>
                  <Card className="p-8 bg-gradient-to-br from-terracotta/20 to-terracotta/10 rounded-xl border-2 border-terracotta/30 shadow-xl">
                    <p className="text-xl leading-relaxed">
                      <strong className="text-foreground">Cold Form Steel Canada designs ADUs that are engineered to exceed code requirements.</strong> The team also supports homeowners throughout the entire permitting stage so nothing gets missed and the project stays on track.
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

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('cost-drivers')}>
              <div className="p-6">
                <FileText className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">What Drives the Cost of Your Build?</h3>
                <p className="text-muted-foreground mb-4">
                  Understanding materials, labor, and site preparation costs.
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-terracotta hover:text-terracotta/80 font-bold">
                  Read Article →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white border-0 shadow-md" onClick={() => onNavigate('financing')}>
              <div className="p-6">
                <Home className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3 font-bold text-foreground">Financing Options in 24 Hours</h3>
                <p className="text-muted-foreground mb-4">
                  Fast, predictable financing with 24-hour approvals.
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
              Ready to Start Your ADU?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Get zoning guidance, permit-ready drawings and full support from Cold Form Steel Canada
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
