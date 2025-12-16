import { FileText, AlertTriangle, Scale, ShieldCheck, Mail, Calendar, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';

interface TermsOfServiceProps {
  onNavigate: (page: string) => void;
}

export function TermsOfService({ onNavigate }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-6 text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-accent/10 p-4 rounded-lg">
              <Scale className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl mb-2">Terms of Service</h1>
              <p className="text-secondary">Last updated: December 9, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Cold Form Steel Canada. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms. Please read them carefully.
            </p>
            <Card className="p-6 bg-accent/5 border-accent/20 mt-6">
              <p className="text-sm text-muted-foreground mb-0">
                <strong className="text-foreground">Important:</strong> If you do not agree to these Terms, you may not access or use our website or services. These Terms constitute a legally binding agreement between you and Cold Form Steel Canada.
              </p>
            </Card>
          </section>

          <Separator className="my-8" />

          {/* Acceptance of Terms */}
          <section className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-sage/20 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-sage" />
              </div>
              <div>
                <h2 className="text-3xl mb-4">Acceptance of Terms</h2>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                By accessing our website at coldformsteelcanada.com, submitting inquiries, requesting quotes, or engaging with our services in any way, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy.
              </p>
              <p className="leading-relaxed">
                These Terms apply to all users of the website, including without limitation users who are browsers, customers, vendors, and/or contributors of content.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Use of Website */}
          <section className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl mb-4">Use of Website and Services</h2>
              </div>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl mb-3 text-foreground">Permitted Use</h3>
                <p className="leading-relaxed mb-3">
                  You may use our website and services for lawful purposes only. You agree to use our website in compliance with all applicable laws and regulations.
                </p>
                <p className="leading-relaxed">
                  Our website provides information about cold-form steel construction, home models, pricing estimates, educational content, and the ability to request quotes or consultations. Any information provided is for informational purposes and does not constitute a binding offer or contract unless explicitly stated in writing.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-3 text-foreground">Prohibited Activities</h3>
                <p className="leading-relaxed mb-3">
                  You agree NOT to:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Use the website for any illegal or unauthorized purpose</li>
                  <li>Violate any international, federal, provincial, or local laws in your jurisdiction</li>
                  <li>Transmit any viruses, malware, or other malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Engage in any data mining, scraping, or automated data collection</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                  <li>Harass, abuse, or harm another person or entity</li>
                  <li>Use our services to compete with us or to build a similar product or service</li>
                  <li>Reproduce, modify, distribute, or publicly display any content without our written permission</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Quotes and Estimates */}
          <section className="mb-12">
            <h2 className="text-3xl mb-4">Quotes, Estimates, and Pricing</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                All pricing, quotes, and estimates provided through our website or communications are approximate and subject to change. Final pricing will be determined based on:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Detailed site assessment and property evaluation</li>
                <li>Final design specifications and customizations</li>
                <li>Local building codes, permits, and regulatory requirements</li>
                <li>Material costs and availability at the time of contract</li>
                <li>Site conditions, access, and preparation requirements</li>
                <li>Labour costs and project timeline</li>
              </ul>
              <p className="leading-relaxed mt-4">
                A binding price will only be established through a written contract signed by both parties. We reserve the right to refuse any quote request or project at our discretion.
              </p>
              <Card className="p-6 bg-primary/5 border-primary/20 mt-4">
                <p className="text-sm text-muted-foreground mb-0">
                  <strong className="text-foreground">Note:</strong> Online pricing calculators and model prices shown on our website are estimates only and do not include land costs, site preparation, foundation work, permits, utility connections, or finishing materials unless explicitly stated.
                </p>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl mb-4">Intellectual Property Rights</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, images, photographs, videos, designs, floor plans, specifications, and software, is the property of Cold Form Steel Canada or our licensors and is protected by Canadian and international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works, publicly display, republish, download, store, or transmit any of the material on our website without our prior written consent, except:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>You may print or download portions of the content for personal, non-commercial use</li>
                <li>You may share links to our website on social media or other platforms</li>
                <li>You may use materials explicitly marked as downloadable or shareable</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Cold Form Steel Canada&trade;, our logo, and any other product or service names displayed on our website are trademarks of Cold Form Steel Canada. You may not use these marks without our prior written permission.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* User Content */}
          <section className="mb-12">
            <h2 className="text-3xl mb-4">User-Generated Content</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                If you submit content to our website through forms, comments, reviews, testimonials, or other means, you grant Cold Form Steel Canada a non-exclusive, worldwide, royalty-free, perpetual license to use, reproduce, modify, adapt, publish, and display such content in connection with our business operations and marketing.
              </p>
              <p className="leading-relaxed">
                You represent and warrant that:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>You own or have the necessary rights to the content you submit</li>
                <li>Your content does not infringe on the intellectual property rights of any third party</li>
                <li>Your content does not violate any law or these Terms</li>
                <li>Your content is accurate and not misleading</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We reserve the right to remove, edit, or refuse to post any user content at our sole discretion.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Disclaimers */}
          <section className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-accent/10 p-3 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl mb-4">Disclaimers and Limitations</h2>
              </div>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl mb-3 text-foreground">No Warranties</h3>
                <p className="leading-relaxed">
                  OUR WEBSITE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
                </p>
                <p className="leading-relaxed mt-3">
                  We do not warrant that:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Our website will be uninterrupted, secure, or error-free</li>
                  <li>Information provided is accurate, complete, or current</li>
                  <li>Any defects or errors will be corrected</li>
                  <li>The website is free of viruses or harmful components</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3 text-foreground">Information Accuracy</h3>
                <p className="leading-relaxed">
                  While we strive to provide accurate and up-to-date information about our products, services, and construction methods, we make no representations or warranties regarding the accuracy or completeness of any information on our website. Construction specifications, timelines, pricing, and availability are subject to change without notice.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-3 text-foreground">Not Professional Advice</h3>
                <p className="leading-relaxed">
                  Information on our website is for general informational purposes only and does not constitute professional advice. You should consult with qualified professionals (architects, engineers, contractors, financial advisors, legal counsel) before making decisions related to home construction, financing, or real estate.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl mb-4">Limitation of Liability</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                TO THE FULLEST EXTENT PERMITTED BY LAW, COLD FORM STEEL CANADA, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Your access to or use of (or inability to access or use) our website or services</li>
                <li>Any conduct or content of any third party on the website</li>
                <li>Any content obtained from the website</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                <li>Errors, mistakes, or inaccuracies in content</li>
                <li>Personal injury or property damage resulting from your use of our services</li>
                <li>Any interruption or cessation of our website or services</li>
              </ul>
              <p className="leading-relaxed mt-4">
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, OR CAUSES OF ACTION EXCEED THE AMOUNT YOU HAVE PAID TO US IN THE SIX (6) MONTHS PRIOR TO THE CLAIM, OR ONE HUNDRED CANADIAN DOLLARS ($100 CAD), WHICHEVER IS GREATER.
              </p>
              <Card className="p-6 bg-accent/5 border-accent/20 mt-4">
                <p className="text-sm text-muted-foreground mb-0">
                  Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for incidental or consequential damages. In such jurisdictions, our liability will be limited to the maximum extent permitted by law.
                </p>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Indemnification */}
          <section className="mb-12">
            <h2 className="text-3xl mb-4">Indemnification</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                You agree to defend, indemnify, and hold harmless Cold Form Steel Canada and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including attorney&apos;s fees) arising from:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Your use of and access to our website or services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights, including intellectual property rights</li>
                <li>Any content you submit or transmit through our services</li>
                <li>Any fraud or willful misconduct by you</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Third-Party Links */}
          <section className="mb-12">
            <h2 className="text-3xl mb-4">Third-Party Links and Services</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Our website may contain links to third-party websites, advertisers, services, or resources that are not owned or controlled by Cold Form Steel Canada. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services.
              </p>
              <p className="leading-relaxed">
                If you access a third-party website from our site, you do so at your own risk. We encourage you to review the terms and privacy policy of any third-party website you visit.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Governing Law */}
          <section className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl mb-4">Governing Law and Jurisdiction</h2>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles.
              </p>
              <p className="leading-relaxed">
                Any dispute arising out of or relating to these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts located in Ontario, Canada. You consent to the personal jurisdiction of such courts and waive any objection as to inconvenient forum.
              </p>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, that provision shall be enforced to the maximum extent possible, and the remaining provisions shall remain in full force and effect.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Modifications */}
          <section className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-sage/20 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-sage" />
              </div>
              <div>
                <h2 className="text-3xl mb-4">Modifications to Terms</h2>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on this page with a new &quot;Last Updated&quot; date. We may also provide notice through email or a prominent notice on our website.
              </p>
              <p className="leading-relaxed">
                Your continued use of our website or services after any modifications indicates your acceptance of the updated Terms. If you do not agree to the modified Terms, you must stop using our services.
              </p>
              <p className="leading-relaxed">
                It is your responsibility to review these Terms periodically for changes.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-3xl mb-4">Termination</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We reserve the right to terminate or suspend your access to our website and services, without prior notice or liability, for any reason, including but not limited to:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Breach of these Terms</li>
                <li>Violation of applicable laws or regulations</li>
                <li>Fraudulent, abusive, or illegal activity</li>
                <li>At our sole discretion for any other reason</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Upon termination, your right to use the website will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Entire Agreement */}
          <section className="mb-12">
            <h2 className="text-3xl mb-4">Entire Agreement</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                These Terms, together with our Privacy Policy and any other legal notices or agreements published on our website, constitute the entire agreement between you and Cold Form Steel Canada regarding your use of our website and services, and supersede all prior agreements and understandings.
              </p>
              <p className="leading-relaxed">
                No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such provision or any other provision.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Contact Information */}
          <section className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl mb-4">Contact Us</h2>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                If you have any questions, concerns, or feedback regarding these Terms of Service, please contact us:
              </p>
              <Card className="p-6 bg-muted">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground">Cold Form Steel Canada</p>
                  </div>
                  <div>
                    <p className="text-sm">Email: legal@coldformsteelcanada.com</p>
                    <p className="text-sm">Phone: 905-642-1012</p>
                    <p className="text-sm">Website: www.coldformsteelcanada.com</p>
                    <p className="text-sm">Mailing Address: Manufacturing across Ontario - Hamilton • Barrie • Brampton</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="mt-12 pt-8 border-t">
            <Card className="p-8 bg-gradient-to-br from-sage/10 to-sage/20 border-sage/30 text-center">
              <h3 className="text-2xl mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Learn more about our steel construction process and request a free consultation.
              </p>
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-sage hover:bg-sage/90 text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}