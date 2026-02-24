import { HeadMeta } from '../HeadMeta';
import { Button } from '../ui/button';
import { ArrowLeft, DollarSign, MapPin, FileText } from 'lucide-react';
import { Card } from '../ui/card';

interface ADUGrantFinderProps {
  onNavigate: (page: string) => void;
}

export function ADUGrantFinder({ onNavigate }: ADUGrantFinderProps) {
  return (
    <div className="min-h-screen bg-background">
      <HeadMeta 
        title="ADU Funding & Incentives Finder | Government Grants, Rebates & Loans for ADUs"
        description="Discover available government grants, rebates, and loan programs for building an ADU (Accessory Dwelling Unit) in Canada. Search by province to find financial assistance for your cold-form steel ADU project."
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => onNavigate('learning')}
            className="mb-6 text-white hover:text-white hover:bg-white/10 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Learning Centre
          </Button>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-terracotta text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Interactive Tool
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              🇨🇦 ADU Funding & Incentives Finder
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Find government grants, rebates, and loan programs available in your province to help offset the cost of building your ADU.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 border-0 bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-terracotta/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Provincial Programs</h3>
                  <p className="text-muted-foreground text-sm">
                    Search grants and incentives available in your specific province
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-terracotta/10 p-3 rounded-lg">
                  <DollarSign className="w-6 h-6 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Funding Amounts</h3>
                  <p className="text-muted-foreground text-sm">
                    See typical grant amounts and eligibility requirements
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-terracotta/10 p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Application Info</h3>
                  <p className="text-muted-foreground text-sm">
                    Get direct links to program details and application forms
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Grant Finder Tool */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-muted/50 overflow-hidden">
            <iframe 
              src="https://adu-finder-canada.lovable.app" 
              width="100%" 
              height="800" 
              style={{ border: 'none', borderRadius: '8px' }} 
              loading="lazy"
              title="ADU Funding & Incentives Finder - Find government grants, rebates, and loans for ADU construction in Canada"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your ADU?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free quote for your cold-form steel ADU project
          </p>
          <Button 
            size="lg"
            className="bg-terracotta hover:bg-terracotta/90 text-white font-bold h-14 px-10 text-lg"
            onClick={() => onNavigate('contact')}
          >
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
}