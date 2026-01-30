import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { HeadMeta } from '../HeadMeta';

interface TermsOfServiceProps {
  onNavigate: (page: string) => void;
}

export function TermsOfService({ onNavigate }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <HeadMeta 
        title="Terms of Service | Cold Form Steel Canada"
        description="Terms of Service for Cold Form Steel Canada. Learn about the terms and conditions for using our website and services."
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last Updated: January 30, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the Cold Form Steel Canada website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use of Our Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree to use our website and services only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Use our services in any way that violates any applicable federal, provincial, or local law or regulation</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              <li>Transmit any advertising or promotional material without our prior written consent</li>
              <li>Impersonate or attempt to impersonate Cold Form Steel Canada or any employee or representative</li>
              <li>Interfere with or disrupt the website or servers or networks connected to the website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Quotes and Pricing</h2>
            <p className="text-muted-foreground leading-relaxed">
              All quotes provided through our website or by our representatives are estimates only and are subject to change. Final pricing will be confirmed in a written contract. We reserve the right to refuse service or cancel orders at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Cold Form Steel Canada and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. User Submissions</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any information, materials, or other content you submit to us through our website, including project details, photos, or testimonials, may be used by Cold Form Steel Canada for marketing and promotional purposes. By submitting content, you grant us a worldwide, royalty-free, perpetual license to use, reproduce, and display such content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To the fullest extent permitted by applicable law, Cold Form Steel Canada shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Your access to or use of or inability to access or use the services</li>
              <li>Any conduct or content of any third party on the services</li>
              <li>Any content obtained from the services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              The website and services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. Cold Form Steel Canada does not warrant that the website will be uninterrupted, timely, secure, or error-free. Information on the website may contain technical inaccuracies or typographical errors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to defend, indemnify, and hold harmless Cold Form Steel Canada and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of Ontario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. Your continued use of the website after any changes constitutes acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
