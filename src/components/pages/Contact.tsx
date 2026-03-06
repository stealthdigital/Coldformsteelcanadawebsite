import { useEffect, useRef, useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  RefreshCw,
} from 'lucide-react';
import { HeadMeta } from '../HeadMeta';

interface ContactProps {
  onNavigate: (page: string) => void;
}

// ─── ZOHO CRM Web-to-Lead tokens (from Jim's Source Code) ────────────────────
const ZOHO_FORM_ID   = 'webform5212263000123686151';
const ZOHO_FORM_NAME = 'WebToLeads5212263000123686151';
const ZOHO_TOKEN_1   = '131095158d97ac6f8f78199e7bccf9f3fc283e6eab9bbf8961d2001fe9ba3a0a';  // xnQsjsdp
const ZOHO_TOKEN_2   = '39b2b9b103cc87e7dae26ff60f58bc3d5b63e72531d886a092032c188e4365a4b8a0489df85ad2dd53df17f8c809efbf'; // xmIwtLD
const ZOHO_CAPTCHA_URL = `https://crm.zoho.com/crm/CaptchaServlet?formId=${ZOHO_TOKEN_2}&grpid=${ZOHO_TOKEN_1}`;
const ZOHO_ANALYTICS_SRC = 'https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=14b096fe49033b78a1fc8b93a805b2b62057adcc50207b848a07e455d1c349b1afc014fed8fb60bcab6064dfa0d25c12gid1e4e9354e69e45615407cb716d15234a6fcd49136321fa8907bc288f53223af3gid6cfdceec97e238cba4aac360bbbc36012b33ac29ec63ae90cf5cbf1a575a2ed8gid9f5d6227de9017ce78cade873c9ee8b1b9fd9fe13ba44041979a5c4121f14a14&tw=1da807e8658b1e164beb8d6a229effad089983bb63d70b317be42a5b9ef41b8e';
// ─────────────────────────────────────────────────────────────────────────────

const CANADIAN_PROVINCES = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon',
];

export function Contact({ onNavigate }: ContactProps) {
  const [isSubmitted, setIsSubmitted]   = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaSrc, setCaptchaSrc]     = useState(ZOHO_CAPTCHA_URL);

  const formRef      = useRef<HTMLFormElement>(null);
  const iframeRef    = useRef<HTMLIFrameElement>(null);
  const submittedRef = useRef(false); // guard so initial iframe load doesn't trigger Thank You

  // Inject ZOHO analytics tracking script once on mount
  useEffect(() => {
    const existing = document.getElementById('wf_anal_cfs');
    if (existing) return;
    const script = document.createElement('script');
    script.id  = 'wf_anal_cfs';
    script.src = ZOHO_ANALYTICS_SRC;
    document.body.appendChild(script);
    return () => {
      document.getElementById('wf_anal_cfs')?.remove();
    };
  }, []);

  // Reload captcha image
  const reloadCaptcha = () => {
    setCaptchaSrc(`${ZOHO_CAPTCHA_URL}&d=${Date.now()}`);
  };

  // Called when the hidden iframe loads — only treat as success if we submitted
  const handleIframeLoad = () => {
    if (submittedRef.current) {
      submittedRef.current = false;
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    submittedRef.current = true;
    // Native submit into hidden iframe — stays on page
    formRef.current?.submit();
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    submittedRef.current = false;
    formRef.current?.reset();
    reloadCaptcha();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeadMeta
        title="Contact Us | Cold Form Steel Canada | Request a Quote"
        description="Ready to build? Contact Cold Form Steel Canada for a custom quote on your barndominium or steel building project. Serving Ontario, Quebec, and PEI. Precision steel construction."
      />

      {/* Hidden iframe — silently receives ZOHO's redirect after POST */}
      <iframe
        ref={iframeRef}
        name="zoho_hidden_frame"
        style={{ display: 'none' }}
        onLoad={handleIframeLoad}
        title="zoho-form-target"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-6 font-bold tracking-tight">
            Let's Build Something Smart Together.
          </h1>
          <p className="text-xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
            Whether you're planning a backyard suite or a municipal project, we're here to answer every question.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* ── Sidebar ── */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>

            <Card className="p-8 shadow-md border-0 bg-white">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <div className="font-bold mb-1 text-foreground">Phone</div>
                    <a href="tel:+19056421012" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                      +1 (905) 642-1012
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1 text-foreground">Email</div>
                    <a href="mailto:info@coldformsteelcanada.com" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                      info@coldformsteelcanada.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1 text-foreground">Office</div>
                    <p className="text-muted-foreground font-medium">
                      Ontario, Canada<br />
                      Serving ON, QC, &amp; PEI
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-primary text-white border-0 shadow-xl rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Regional Teams</h3>
              <div className="space-y-4 font-medium">
                {['Hamilton, ON', 'Barrie, ON', 'Brampton, ON'].map(loc => (
                  <div key={loc} className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-terracotta" />
                <h3 className="font-bold text-foreground">Business Hours</h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground font-bold">
                <div className="flex justify-between border-b pb-2">
                  <span>Monday – Friday</span>
                  <span className="text-foreground">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Saturday</span>
                  <span className="text-foreground">9:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-terracotta uppercase">Closed</span>
                </div>
              </div>
            </Card>
          </div>

          {/* ── Main Form Card ── */}
          <div className="lg:col-span-2">
            <Card className="p-10 md:p-14 shadow-2xl border-0 bg-white rounded-3xl">
              {isSubmitted ? (
                /* ── Thank You ── */
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-24 h-24 bg-terracotta/10 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-12 h-12 text-terracotta" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 text-foreground tracking-tight">Request Received!</h2>
                  <p className="text-xl text-muted-foreground mb-3 max-w-md leading-relaxed font-medium">
                    Thank you for reaching out. One of our building specialists will contact you within 24 hours.
                  </p>
                  <p className="text-sm text-muted-foreground mb-10">
                    A confirmation email has been sent to you from our team.
                  </p>
                  <Button
                    onClick={resetForm}
                    className="bg-terracotta text-white hover:bg-terracotta/90 font-bold h-14 px-10 border-0 shadow-lg transition-transform hover:scale-105"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold mb-3 text-foreground tracking-tight">Get a Free Quote</h2>
                    <p className="text-lg text-muted-foreground font-medium">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  {/*
                    ── ZOHO Web-to-Lead Form ──────────────────────────────────
                    Tokens are real values from Jim's Source Code.
                    target="zoho_hidden_frame" keeps the user on this page.
                    ZOHO field names must match exactly (case-sensitive).
                    ──────────────────────────────────────────────────────────
                  */}
                  <form
                    ref={formRef}
                    id={ZOHO_FORM_ID}
                    name={ZOHO_FORM_NAME}
                    action="https://crm.zoho.com/crm/WebToLeadForm"
                    method="POST"
                    target="zoho_hidden_frame"
                    acceptCharset="UTF-8"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    {/* ── ZOHO required hidden fields ── */}
                    <input type="hidden" name="xnQsjsdp"   value={ZOHO_TOKEN_1} />
                    <input type="hidden" name="xmIwtLD"    value={ZOHO_TOKEN_2} />
                    <input type="hidden" name="actionType" value="TGVhZHM=" />
                    {/* returnURL loads inside the hidden iframe — keeps user on page */}
                    <input type="hidden" name="returnURL"  value="about:blank" />
                    {/* Google Ads tracking field (blank, required by ZOHO) */}
                    <input type="hidden" name="zc_gad"     id="zc_gad" value="" />
                    {/* Honeypot anti-spam field — must stay empty */}
                    <input type="hidden" name="aG9uZXlwb3Q" value="" />

                    {/* First Name / Last Name */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="First_Name" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">
                          First Name
                        </Label>
                        <Input
                          id="First_Name"
                          name="First Name"
                          placeholder="John"
                          maxLength={40}
                          className="h-14 bg-muted/30 border-2 border-transparent focus:border-terracotta focus:bg-white transition-all rounded-xl"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="Last_Name" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">
                          Last Name <span className="text-terracotta">*</span>
                        </Label>
                        <Input
                          id="Last_Name"
                          name="Last Name"
                          placeholder="Doe"
                          required
                          maxLength={80}
                          className="h-14 bg-muted/30 border-2 border-transparent focus:border-terracotta focus:bg-white transition-all rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Email / Phone */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="Email" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">
                          Email Address <span className="text-terracotta">*</span>
                        </Label>
                        <Input
                          id="Email"
                          name="Email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          maxLength={100}
                          className="h-14 bg-muted/30 border-2 border-transparent focus:border-terracotta focus:bg-white transition-all rounded-xl"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="Phone" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">
                          Phone Number <span className="text-terracotta">*</span>
                        </Label>
                        <Input
                          id="Phone"
                          name="Phone"
                          type="tel"
                          placeholder="(905) 000-0000"
                          required
                          maxLength={30}
                          className="h-14 bg-muted/30 border-2 border-transparent focus:border-terracotta focus:bg-white transition-all rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Province / Postal Code */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="Province" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">
                          Province
                        </Label>
                        <select
                          id="Province"
                          name="State"
                          defaultValue=""
                          className="w-full h-14 px-4 rounded-xl border-2 border-transparent bg-muted/30 text-sm focus:outline-none focus:border-terracotta focus:bg-white transition-all appearance-none font-medium"
                        >
                          <option value="">Select your province</option>
                          {CANADIAN_PROVINCES.map(p => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="Zip_Code" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">
                          Postal Code
                        </Label>
                        <Input
                          id="Zip_Code"
                          name="Zip Code"
                          placeholder="L8N 1A1"
                          maxLength={30}
                          className="h-14 bg-muted/30 border-2 border-transparent focus:border-terracotta focus:bg-white transition-all rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Company (optional) */}
                    <div className="space-y-3">
                      <Label htmlFor="Company" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">
                        Company <span className="text-muted-foreground/50 normal-case tracking-normal font-normal text-xs">(optional)</span>
                      </Label>
                      <Input
                        id="Company"
                        name="Company"
                        placeholder="Your company name"
                        maxLength={200}
                        className="h-14 bg-muted/30 border-2 border-transparent focus:border-terracotta focus:bg-white transition-all rounded-xl"
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      <Label htmlFor="Description" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">
                        Description / Message
                      </Label>
                      <Textarea
                        id="Description"
                        name="Description"
                        placeholder="Tell us about your project — type (ADU, barndominium, garage), location, size, and timeline..."
                        className="min-h-[160px] resize-none bg-muted/30 border-2 border-transparent focus:border-terracotta focus:bg-white transition-all rounded-xl p-4 font-medium"
                      />
                    </div>

                    {/* ── ZOHO Image Captcha ── */}
                    <div className="space-y-3">
                      <Label htmlFor="captchaField5212263000123686151" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">
                        Enter the Captcha <span className="text-terracotta">*</span>
                      </Label>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl bg-muted/30 border-2 border-transparent">
                        {/* Captcha image from ZOHO */}
                        <div className="flex items-center gap-3">
                          <img
                            id="imgid5212263000123686151"
                            src={captchaSrc}
                            alt="ZOHO captcha"
                            className="rounded-lg border border-muted h-12"
                          />
                          <button
                            type="button"
                            onClick={reloadCaptcha}
                            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                            title="Reload captcha"
                          >
                            <RefreshCw className="w-4 h-4" />
                            Reload
                          </button>
                        </div>
                        {/* Captcha text input */}
                        <Input
                          id="captchaField5212263000123686151"
                          name="enterdigest"
                          placeholder="Type the code shown"
                          required
                          maxLength={10}
                          className="h-12 bg-white border-2 border-muted focus:border-terracotta transition-all rounded-xl flex-1"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full h-16 text-xl bg-terracotta hover:bg-terracotta/90 text-white font-bold shadow-xl rounded-xl transition-all hover:scale-[1.02] border-0"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending your request…</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <Send className="w-6 h-6" />
                          <span>Get a Free Quote</span>
                        </div>
                      )}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      By submitting this form you agree to our{' '}
                      <button
                        type="button"
                        onClick={() => onNavigate('privacy')}
                        className="underline hover:text-primary transition-colors"
                      >
                        Privacy Policy
                      </button>.
                      {' '}We never share your information.
                    </p>
                  </form>
                </>
              )}
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
