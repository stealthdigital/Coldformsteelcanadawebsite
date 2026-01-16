import { useState } from 'react';
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
  MessageSquare,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { toast } from "sonner@2.0.3";
import { HeadMeta } from '../HeadMeta';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully! We'll get back to you shortly.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeadMeta 
        title="Contact Us | Cold Form Steel Canada | Request a Quote"
        description="Ready to build? Contact Cold Form Steel Canada for a custom quote on your barndominium or steel building project. Serving Ontario, Quebec, and PEI. Precision steel construction."
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
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h2>
              
              <Card className="p-8 shadow-md border-0 bg-white">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold mb-1 text-foreground">Phone</div>
                      <a href="tel:+15195551234" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                        +1 (519) 555-1234
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
                        Serving ON, QC, & PEI
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary text-white border-0 shadow-xl rounded-3xl">
                <h3 className="text-2xl font-bold mb-6">Regional Teams</h3>
                <div className="space-y-4 font-medium">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Hamilton, ON</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Barrie, ON</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Brampton, ON</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white border-0 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-terracotta" />
                  <h3 className="font-bold text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground font-bold">
                  <div className="flex justify-between border-b pb-2">
                    <span>Monday - Friday</span>
                    <span className="text-foreground">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Saturday</span>
                    <span className="text-foreground">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-terracotta uppercase">Closed</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-10 md:p-14 shadow-2xl border-0 h-full bg-white rounded-3xl">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-24 h-24 bg-terracotta/10 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-12 h-12 text-terracotta" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-foreground tracking-tight">Message Received!</h2>
                  <p className="text-xl text-muted-foreground mb-10 max-w-md leading-relaxed font-medium">
                    Thank you for reaching out. One of our building specialists will contact you within 24 hours to discuss your project.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-terracotta text-white hover:bg-terracotta/90 font-bold h-14 px-10 border-0 shadow-lg transition-transform hover:scale-105"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-foreground tracking-tight">Send us a Message</h2>
                    <p className="text-lg text-muted-foreground font-medium">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">First Name</Label>
                        <Input id="firstName" placeholder="John" required className="h-14 bg-muted/30 border-2 border-transparent focus:border-terracotta focus:bg-white transition-all rounded-xl" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required className="h-14 bg-muted/30 border-2 border-transparent focus:border-terracotta focus:bg-white transition-all rounded-xl" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="email" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required className="h-14 bg-muted/30 border-2 border-transparent focus:border-terracotta focus:bg-white transition-all rounded-xl" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="(555) 000-0000" className="h-14 bg-muted/30 border-2 border-transparent focus:border-terracotta focus:bg-white transition-all rounded-xl" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="project" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Project Type</Label>
                      <div className="relative">
                        <select 
                          id="project" 
                          className="w-full h-14 px-4 rounded-xl border-2 border-transparent bg-muted/30 text-sm focus:outline-none focus:border-terracotta focus:bg-white transition-all appearance-none font-medium"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>Select a project type</option>
                          <option value="piccolo">Piccolo Model (392 sq ft)</option>
                          <option value="medio">Medio Model (560 sq ft)</option>
                          <option value="custom">Custom Barndominium</option>
                          <option value="garage">Garage / Workshop</option>
                          <option value="diy">DIY Kit</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <MessageSquare className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="font-bold text-xs uppercase tracking-widest text-muted-foreground">How can we help?</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project goals, location, and timeline..." 
                        className="min-h-[180px] resize-none bg-muted/30 border-2 border-transparent focus:border-terracotta focus:bg-white transition-all rounded-xl p-4 font-medium"
                        required 
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-16 text-xl bg-terracotta hover:bg-terracotta/90 text-white font-bold shadow-xl rounded-xl transition-all hover:scale-[1.02] border-0"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <Send className="w-6 h-6" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
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