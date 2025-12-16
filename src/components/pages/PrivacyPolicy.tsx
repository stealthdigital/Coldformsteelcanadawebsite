import { Shield, Lock, Eye, FileText, Mail, Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';

interface PrivacyPolicyProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
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
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl mb-2">Privacy Policy</h1>
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
              Cold Form Steel Canada ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
            </p>
            <Card className="p-6 bg-accent/5 border-accent/20 mt-6">
              <p className="text-sm text-muted-foreground mb-0">
                <strong className="text-foreground">Important:</strong> By using our website or services, you consent to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </Card>
          </section>

          <Separator className="my-8" />

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl mb-4">Information We Collect</h2>
              </div>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl mb-3 text-foreground">Personal Information</h3>
                <p className="leading-relaxed mb-3">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Request a quote or consultation</li>
                  <li>Sign up for our newsletter or updates</li>
                  <li>Contact us through our website forms</li>
                  <li>Download resources or brochures</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  This information may include: name, email address, phone number, mailing address, property details, project requirements, and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-3 text-foreground">Automatically Collected Information</h3>
                <p className="leading-relaxed mb-3">
                  When you visit our website, we may automatically collect certain information about your device and browsing activity, including:
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website or source</li>
                  <li>Date and time of visits</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3 text-foreground">Cookies and Tracking Technologies</h3>
                <p className="leading-relaxed">
                  We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze website traffic, and understand user behavior. You can control cookie preferences through your browser settings, though disabling cookies may affect website functionality.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-8" />

          {/* How We Use Your Information */}
          <section className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-sage/20 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-sage" />
              </div>
              <div>
                <h2 className="text-3xl mb-4">How We Use Your Information</h2>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>To provide quotes, consultations, and customer service</li>
                <li>To process and fulfill your requests for information or services</li>
                <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>To improve our website, products, and services</li>
                <li>To analyze website usage and optimize user experience</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To detect, prevent, and address technical issues or fraudulent activity</li>
                <li>To communicate with you about your inquiries or projects</li>
              </ul>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Information Sharing */}
          <section className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl mb-4">Information Sharing and Disclosure</h2>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li><strong className="text-foreground">Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you (e.g., email platforms, analytics tools, CRM systems).</li>
                <li><strong className="text-foreground">Business Partners:</strong> We may share information with manufacturers, suppliers, or construction partners solely to fulfill your service requests.</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> We may disclose information if required by law, court order, or government regulation, or to protect our rights, property, or safety.</li>
                <li><strong className="text-foreground">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</li>
              </ul>
              <p className="leading-relaxed mt-3">
                All third parties with whom we share information are required to maintain the confidentiality and security of your data.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl mb-4">Data Security</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              <Card className="p-6 bg-primary/5 border-primary/20">
                <p className="text-sm text-muted-foreground mb-0">
                  You are responsible for maintaining the confidentiality of any login credentials or account information you use to access our services.
                </p>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl mb-4">Your Privacy Rights</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li><strong className="text-foreground">Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal information, subject to legal obligations</li>
                <li><strong className="text-foreground">Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong className="text-foreground">Data Portability:</strong> Request a copy of your information in a structured format</li>
                <li><strong className="text-foreground">Withdraw Consent:</strong> Withdraw consent for processing where consent is the legal basis</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the information provided below. We will respond to your request within a reasonable timeframe as required by applicable law.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Canadian Privacy Laws */}
          <section className="mb-12">
            <h2 className="text-3xl mb-4">Canadian Privacy Laws (PIPEDA Compliance)</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                As a Canadian company, we comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation. We collect, use, and disclose personal information only for purposes that a reasonable person would consider appropriate in the circumstances.
              </p>
              <p className="leading-relaxed">
                You have the right to file a complaint with the Office of the Privacy Commissioner of Canada if you believe your privacy rights have been violated.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Third-Party Links */}
          <section className="mb-12">
            <h2 className="text-3xl mb-4">Third-Party Websites</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Our website may contain links to third-party websites, including those of our partners and service providers. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl mb-4">Children&apos;s Privacy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information.
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Changes to Privacy Policy */}
          <section className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl mb-4">Changes to This Privacy Policy</h2>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will post the updated policy on this page with a revised "Last Updated" date. Your continued use of our services after any changes indicates your acceptance of the updated policy.
              </p>
              <p className="leading-relaxed">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
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
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              <Card className="p-6 bg-muted">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground">Cold Form Steel Canada</p>
                  </div>
                  <div>
                    <p className="text-sm">Email: privacy@coldformsteelcanada.com</p>
                    <p className="text-sm">Phone: 905-642-1012</p>
                    <p className="text-sm">Mailing Address: Manufacturing across Ontario - Hamilton • Barrie • Brampton</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="mt-12 pt-8 border-t">
            <Card className="p-8 bg-gradient-to-br from-sage/10 to-sage/20 border-sage/30 text-center">
              <h3 className="text-2xl mb-4">Questions About Your Privacy?</h3>
              <p className="text-muted-foreground mb-6">
                We&apos;re here to help. Contact our team with any privacy-related questions or concerns.
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