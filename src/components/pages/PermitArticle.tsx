import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, FileText, MapPin, Shield, AlertCircle, ClipboardCheck, Home, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArticleSchema } from '../schema/ArticleSchema';
import { HeadMeta } from '../HeadMeta';
import johnMontgomeryPhoto from 'figma:asset/f7589f12c4db2294f1600532a47c3b3c990ffc90.png';

interface PermitArticleProps {
  onNavigate: (page: string) => void;
}

export function PermitArticle({ onNavigate }: PermitArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="ADU & Steel Home Permits in Canada | Zoning Guide"
        description="Complete guide to obtaining permits for cold-form steel ADUs and homes across Canadian municipalities. Learn about zoning, setbacks, code compliance, and permit approval process."
        image="https://via.placeholder.com/1200x630/665f55/ffffff?text=Permits+%26+Zoning"
      />
      <ArticleSchema
        headline="Do I Need a Permit for My ADU?"
        description="Everything you need to know about permits for ADUs in Canada. Understanding zoning laws, building codes, and the approval process."
        author={{ name: 'John Montgomery', jobTitle: 'President, Cold Form Steel Canada' }}
        datePublished="2025-12-09"
        category="Process & Permits"
        keywords={['ADU permits', 'building permits Canada', 'zoning laws', 'ADU regulations', 'permit process', 'steel ADU permits']}
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
            Do I Need a Permit for My ADU?
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            Building an ADU in Canada is one of the smartest ways to create new housing, add rental income, support family members or increase property value. It is also a process that must follow local building laws. Every homeowner asks the same question at the start: "Do I need a permit for my ADU?"
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
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
          {/* Quick Answer */}
          <section>
            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2">The Short Answer</h3>
                  <p className="text-lg text-muted-foreground">
                    <strong>Yes.</strong> An ADU is a legal dwelling unit, which means it must meet building, zoning and safety requirements. Permits protect homeowners, future occupants and property value, and they also keep the project eligible for municipal or federal grant programs.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <section className="space-y-6">
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                This article explains exactly what is required, how the process works in Canada, and how Cold Form Steel Canada supports homeowners through every step.
              </p>
            </div>
          </section>

          <Separator />

          {/* Why ADUs Require Permits */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">Why ADUs Require Permits in Canada</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    ADUs are regulated at the municipal level. Even if a design meets national or provincial building codes, the final approval must come from the town or city where the ADU is being installed. Each municipality checks:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Zoning rules</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Lot setbacks and maximum building size</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Fire safety separation</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Plumbing and electrical compliance</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Heating type and mechanical requirements</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Foundation style (pads, piles, grade beams)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Access, parking or laneway requirements</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Snow load and climate conditions</span>
                    </li>
                  </ul>
                  <p>
                    Cold form steel ADUs are engineered to meet Canadian standards, but each municipality must still approve the installation locally. Designs are not "pre-approved Canada-wide." They are code compliant yet still reviewed on a site-by-site basis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* What Municipalities Look For */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-4">What Municipalities Look For</h2>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                Municipalities want safe, legal, permanent residential spaces. When reviewing an ADU permit, they evaluate:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4 bg-muted">
                  <div className="flex gap-3">
                    <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p>Structural drawings</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-muted">
                  <div className="flex gap-3">
                    <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p>Fire-rated assemblies</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-muted">
                  <div className="flex gap-3">
                    <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p>Insulation values for the climate zone</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-muted">
                  <div className="flex gap-3">
                    <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p>Window and door placements</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-muted">
                  <div className="flex gap-3">
                    <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p>Exits and emergency access</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-muted">
                  <div className="flex gap-3">
                    <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p>Drainage and grading</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-muted">
                  <div className="flex gap-3">
                    <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p>Electrical and plumbing layouts</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 bg-muted">
                  <div className="flex gap-3">
                    <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p>Energy-efficiency compliance</p>
                    </div>
                  </div>
                </Card>
              </div>

              <p>
                Most delays in the ADU approval process come from incomplete drawings or designs that do not match local zoning rules. Cold Form Steel Canada simplifies this by supplying permit-ready drawings for our ADU models and guiding homeowners through any adjustments required.
              </p>
            </div>
          </section>

          <Separator />

          {/* Are These ADUs Automatically Approved */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-4">Are These ADUs Automatically Approved?</h2>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                <strong>No.</strong> ADU models are engineered using consistent standards, but approval always depends on local conditions. Municipalities vary in:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Snow load requirements</span>
                </li>
                <li className="flex gap-2">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Setbacks</span>
                </li>
                <li className="flex gap-2">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Foundation styles</span>
                </li>
                <li className="flex gap-2">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Heating types</span>
                </li>
                <li className="flex gap-2">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Drainage and servicing rules</span>
                </li>
              </ul>
              <p>
                The engineering is complete, but it is always checked against the requirements of the jurisdiction where the home will be placed. This ensures full compliance and reduces the risk of delays once the city begins its review.
              </p>
              <p>
                Municipalities may also choose to list Cold Form Steel Canada as a pre-approved vendor once they become familiar with the designs. That accelerates future approvals but does not replace the permitting step.
              </p>
            </div>
          </section>

          <Separator />

          {/* Toronto Example */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Home className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">What a Typical ADU Permit Application Looks Like in Toronto</h2>
                <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
                  <p>
                    Toronto is a strong example because it has one of the most structured ADU approval systems in Canada. A typical application includes the following steps.
                  </p>

                  {/* Step 1 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white flex-shrink-0">
                        1
                      </div>
                      <h3 className="text-xl text-foreground">Zoning Check</h3>
                    </div>
                    <p className="ml-11">
                      The City confirms whether the lot can legally support an ADU by reviewing:
                    </p>
                    <ul className="space-y-2 ml-11">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Lot area and width</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Setbacks from property lines</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Maximum height</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Placement and building coverage</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Separation distance from the main dwelling</span>
                      </li>
                    </ul>
                    <p className="ml-11">
                      If the design fits within these rules, the project proceeds. If not, a minor variance may be required.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white flex-shrink-0">
                        2
                      </div>
                      <h3 className="text-xl text-foreground">Permit-Ready Drawings</h3>
                    </div>
                    <p className="ml-11">
                      Toronto requires complete drawings prepared to Ontario Building Code standards, including:
                    </p>
                    <ul className="space-y-2 ml-11">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Site plan</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Floor plans</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Elevations</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Structural drawings</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Mechanical, plumbing and electrical layouts</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Insulation and energy-efficiency calculations</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Drainage or grading plan when required</span>
                      </li>
                    </ul>
                    <p className="ml-11">
                      Cold form steel framing simplifies this stage because the structural components are pre-engineered and consistent across each model.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white flex-shrink-0">
                        3
                      </div>
                      <h3 className="text-xl text-foreground">Submit the Application</h3>
                    </div>
                    <p className="ml-11">
                      The homeowner or builder submits:
                    </p>
                    <ul className="space-y-2 ml-11">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>All drawings in the correct format</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Application forms</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Applicable permit fees</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Energy and heat-loss calculations</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Letters of commitment for engineering review (if required)</span>
                      </li>
                    </ul>
                    <p className="ml-11">
                      The City evaluates zoning, structure, fire separation, exits, insulation and mechanical systems.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white flex-shrink-0">
                        4
                      </div>
                      <h3 className="text-xl text-foreground">City Comments and Revisions</h3>
                    </div>
                    <p className="ml-11">
                      Most applications receive comments. These may include:
                    </p>
                    <ul className="space-y-2 ml-11">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Adjusting window size or location</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Clarifying fire separations</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Revising setbacks</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>Updating structural or mechanical notes</span>
                      </li>
                    </ul>
                    <p className="ml-11">
                      Once revisions are completed, the application moves toward approval.
                    </p>
                  </div>

                  {/* Step 5 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sage text-white flex-shrink-0">
                        5
                      </div>
                      <h3 className="text-xl text-foreground">Permit Issued</h3>
                    </div>
                    <p className="ml-11">
                      After approval, the building permit is issued and construction can begin. Inspections will occur at stages such as:
                    </p>
                    <ul className="space-y-2 ml-11">
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                        <span>Foundation</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                        <span>Framing</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                        <span>Plumbing and electrical</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                        <span>Insulation</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                        <span>Final occupancy</span>
                      </li>
                    </ul>
                    <p className="ml-11">
                      Passing all inspections ensures the ADU is fully legal, safe and ready for move-in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* How Cold Form Steel Canada Helps */}
          <section className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-sage/20 p-3 rounded-lg">
                <ClipboardCheck className="w-6 h-6 text-sage" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl mb-4">How Cold Form Steel Canada Helps With Permits</h2>
                <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
                  <p>
                    Homeowners often feel uncertain about how to deal with zoning, drawings and municipal communication. Cold Form Steel Canada reduces that friction by providing:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Permit-ready drawings for all ADU models</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Help confirming zoning and lot eligibility</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Guidance on foundations, heating and code requirements</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Coordination with our engineering team</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Assistance preparing documentation for the city</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>Support responding to municipal comments and revisions</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                      <span>An Engineer of Record available for consultations when needed</span>
                    </li>
                  </ul>
                  <p>
                    The aim is a clear, predictable process from the moment the homeowner selects a model to the moment the city issues the permit. This removes stress and gives the homeowner confidence that every requirement is handled correctly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Final Word */}
          <section className="space-y-6">
            <h2 className="text-3xl mb-4">Final Word: Yes, a Permit Is Required. Yes, We Can Help.</h2>
            <div className="text-lg leading-relaxed space-y-4 text-muted-foreground">
              <p>
                ADUs must follow local building and zoning rules. This protects homeowners, ensures safety and preserves long-term value.
              </p>
              <p>
                Cold Form Steel Canada designs ADUs that are engineered to exceed code requirements. The team also supports homeowners throughout the entire permitting stage so nothing gets missed and the project stays on track.
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
              <h3 className="text-2xl mb-4">Ready to Start Your ADU?</h3>
              <p className="text-lg mb-6 text-white/90">
                Get zoning guidance, permit-ready drawings and full support from Cold Form Steel Canada
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

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('financing')}>
                <Badge className="mb-3 bg-accent text-white">Cost & Financing</Badge>
                <h3 className="text-lg mb-2">Financing Options in 24 Hours</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  How to get approved fast for steel home construction
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>4 min read</span>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}