import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string, article?: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">
            Let's Build Something Smart Together.
          </h1>
          <p className="text-xl text-white/90">
            Whether you're planning a backyard suite or a municipal project, we're here to answer every question.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <Card className="lg:col-span-2 p-8">
              <h2 className="text-2xl mb-6">Start Your Steel Home Project</h2>
              <p className="text-muted-foreground mb-8">
                Fill out this quick form and we'll send you a personalized project plan within 24 hours.
              </p>
              
              <form className="space-y-8">
                {/* Personal Information Section */}
                <div className="bg-muted/30 p-6 md:p-8 rounded-xl border border-muted">
                  <h3 className="text-xl mb-6 text-primary">Personal Information</h3>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-base">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          className="mt-2 h-12 border-2 focus:border-primary transition-colors" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-base">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Smith" 
                          className="mt-2 h-12 border-2 focus:border-primary transition-colors" 
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-base">Email Address *</Label>
                        <div className="relative mt-2">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="john@example.com" 
                            className="h-12 pl-11 border-2 focus:border-primary transition-colors" 
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-base">Phone Number</Label>
                        <div className="relative mt-2">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="(555) 123-4567" 
                            className="h-12 pl-11 border-2 focus:border-primary transition-colors" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Section */}
                <div className="bg-muted/30 p-6 md:p-8 rounded-xl border border-muted">
                  <h3 className="text-xl mb-6 text-primary">Location</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="province" className="text-base">Province *</Label>
                      <Select>
                        <SelectTrigger className="mt-2 h-12 border-2 focus:border-primary transition-colors">
                          <SelectValue placeholder="Select province" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ON">Ontario</SelectItem>
                          <SelectItem value="BC">British Columbia</SelectItem>
                          <SelectItem value="AB">Alberta</SelectItem>
                          <SelectItem value="QC">Quebec</SelectItem>
                          <SelectItem value="MB">Manitoba</SelectItem>
                          <SelectItem value="SK">Saskatchewan</SelectItem>
                          <SelectItem value="NS">Nova Scotia</SelectItem>
                          <SelectItem value="NB">New Brunswick</SelectItem>
                          <SelectItem value="NL">Newfoundland</SelectItem>
                          <SelectItem value="PE">Prince Edward Island</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-base">City *</Label>
                      <div className="relative mt-2">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                        <Input 
                          id="city" 
                          placeholder="Toronto" 
                          className="h-12 pl-11 border-2 focus:border-primary transition-colors" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details Section */}
                <div className="bg-muted/30 p-6 md:p-8 rounded-xl border border-muted">
                  <h3 className="text-xl mb-6 text-primary">Project Details</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="buildType" className="text-base">What are you building? *</Label>
                      <Select>
                        <SelectTrigger className="mt-2 h-12 border-2 focus:border-primary transition-colors">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="adu">Backyard Suite / ADU</SelectItem>
                          <SelectItem value="home">Full Home (Primary Residence)</SelectItem>
                          <SelectItem value="cottage">Cottage / Vacation Home</SelectItem>
                          <SelectItem value="municipal">Municipal / Multi-Unit Project</SelectItem>
                          <SelectItem value="commercial">Commercial Building</SelectItem>
                          <SelectItem value="other">Other / Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-base">Tell us about your project</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Share any details about your timeline, budget, or specific requirements..."
                        className="mt-2 min-h-32 border-2 focus:border-primary transition-colors resize-none"
                      />
                      <p className="text-sm text-muted-foreground mt-2">Optional - but helps us provide better information</p>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    type="submit" 
                    size="lg"
                    className="flex-1 bg-accent hover:bg-accent/90 text-white h-14 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Send My Question
                  </Button>
                  <Button 
                    type="button"
                    size="lg"
                    variant="outline"
                    className="flex-1 h-14 text-lg border-2 hover:bg-muted/50 transition-all"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Book 15-Minute Call
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground text-center pt-2 leading-relaxed">
                  By submitting this form, you agree to receive communications from Cold Form Steel Canada. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </Card>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="p-6">
                <h3 className="mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Phone</div>
                      <a href="tel:905-642-1012" className="hover:text-accent transition-colors">
                        905-642-1012
                      </a>
                      <div className="text-xs text-muted-foreground mt-1">
                        Mon-Fri: 8am - 6pm EST
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Email</div>
                      <a href="mailto:info@coldformsteelcanada.com" className="hover:text-accent transition-colors break-all">
                        info@coldformsteelcanada.com
                      </a>
                      <div className="text-xs text-muted-foreground mt-1">
                        Response within 24 hours
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Service Area</div>
                      <div>All of Canada</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Manufacturing in Ontario
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Manufacturing Locations */}
              <Card className="p-6 bg-accent text-white">
                <h3 className="mb-4">Manufacturing Locations</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Hamilton, ON</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Barrie, ON</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Brampton, ON</span>
                  </div>
                </div>
              </Card>

              {/* Hours */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-accent" />
                  <h3>Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </Card>

              {/* Quick Response */}
              <Card className="p-6 bg-muted">
                <h4 className="mb-3">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We respond to all inquiries within 24 hours on business days. For urgent matters, call us directly.
                </p>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span>Average response time: 4 hours</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">We Serve All of Canada</h2>
            <p className="text-xl text-muted-foreground">
              From coast to coast, delivering steel home solutions nationwide
            </p>
          </div>
          
          <Card className="p-12 bg-muted">
            <div className="aspect-video bg-white rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18796883.125!2d-106.3468!3d56.1304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area: Canada-Wide"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl mb-6 text-center">
            Before You Reach Out
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            You might find the answer to your question in our Learning Centre
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer h-full" onClick={() => onNavigate('cost-drivers')}>
              <h4 className="mb-1">How much does it cost?</h4>
              <p className="text-sm text-muted-foreground">See detailed pricing breakdown</p>
            </Card>
            <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer h-full" onClick={() => onNavigate('five-day-build')}>
              <h4 className="mb-1">How long does it take?</h4>
              <p className="text-sm text-muted-foreground">Learn about our 3-day build process</p>
            </Card>
            <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer h-full" onClick={() => onNavigate('permit')}>
              <h4 className="mb-1">Do I need a permit?</h4>
              <p className="text-sm text-muted-foreground">Municipal requirements explained</p>
            </Card>
            <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer h-full" onClick={() => onNavigate('financing')}>
              <h4 className="mb-1">Financing options?</h4>
              <p className="text-sm text-muted-foreground">24-hour approval information</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}