import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { HeadMeta } from '../HeadMeta';

interface PrivacyPolicyProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <HeadMeta 
        title="Privacy Policy | Cold Form Steel Canada"
        description="Privacy Policy for Cold Form Steel Canada. Learn how we collect, use, and protect your personal information."
      />

      {/* Header */}
      <div className="bg-muted/50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('home')}
            className="gap-2 font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last Updated: January 30, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cold Form Steel Canada ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Personal Data:</strong> Name, email address, phone number, mailing address, and other contact information you provide when requesting quotes or contacting us.</li>
              <li><strong>Project Information:</strong> Details about your building project, location, preferences, and requirements.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and website usage data collected through cookies and analytics tools.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Process quote requests and project consultations</li>
              <li>Send you information about our products and services</li>
              <li>Improve our website and customer experience</li>
              <li>Comply with legal obligations</li>
              <li>Analyze website usage and trends</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Disclosure of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf, such as email delivery, hosting services, and analytics.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal requests.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to or restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="text-muted-foreground"><strong>Cold Form Steel Canada</strong></p>
              <p className="text-muted-foreground">Email: <a href="mailto:info@coldformsteelcanada.com" className="text-primary hover:underline">info@coldformsteelcanada.com</a></p>
              <p className="text-muted-foreground">Phone: <a href="tel:+19056421012" className="text-primary hover:underline">+1 (905) 642-1012</a></p>
              <p className="text-muted-foreground">Location: Ontario, Canada</p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
