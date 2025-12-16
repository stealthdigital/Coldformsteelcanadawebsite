import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  MapPin, 
  Home, 
  Calendar, 
  CheckCircle, 
  ArrowLeft,
  Truck,
  Hammer,
  Users,
  Package,
  Wrench,
  FileText,
  Target,
  Scale
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';
import heroImage from 'figma:asset/e6dc78b255a9dcf0fe59a590d961330fbf96974c.png';
import interiorFraming1 from 'figma:asset/3bb3b52bfd84f70462089a2558aea314fa558377.png';
import interiorWall from 'figma:asset/1829b809bdf1b1fe89293064ee23638054aee0b4.png';
import ceilingDetail from 'figma:asset/cdd6eadae5e7155bb989297e1e4d07b115564131.png';
import interiorWindows from 'figma:asset/deb904062564822f81636a6b0531327a7c1e7aa4.png';
import interiorView from 'figma:asset/e468dd6dae5960244d94f1c4038490bb4165a352.png';
import finishedExterior from 'figma:asset/2f818bbb40740446013055f41a1388c9ba172e89.png';

interface DIYBarndominiumStrathroyProps {
  onNavigate: (page: string) => void;
}

export function DIYBarndominiumStrathroy({ onNavigate }: DIYBarndominiumStrathroyProps) {
  const project = {
    title: 'Barndominium Kit Design and Delivery',
    subtitle: 'DIY Installation Success Story',
    type: 'DIY Installation',
    location: 'Strathroy, Ontario',
    heroImage: heroImage,
    specs: {
      buildingSize: '40x60x14 ft',
      kitDelivery: 'Complete Kit Delivered',
      installation: 'Customer DIY',
      completed: '2024'
    },
    description: 'This customer chose the SteelBuilt DIY route - leveraging our professional design and manufacturing expertise while taking on the installation themselves. We provided complete engineered plans, pre-fabricated steel components numbered for easy assembly, and full technical support. The customer saved on installation costs while still benefiting from factory-precision components and expert guidance throughout the build process.',
    features: [
      {
        icon: 'fileText',
        title: 'Professional Design',
        description: 'Full engineered plans and 3D models provided by our design team'
      },
      {
        icon: 'package',
        title: 'Complete Kit',
        description: 'All steel components pre-cut, pre-drilled, and numbered for assembly'
      },
      {
        icon: 'hammer',
        title: 'DIY-Friendly',
        description: 'Step-by-step instructions and technical support throughout installation'
      },
      {
        icon: 'target',
        title: 'Cost Savings',
        description: 'Save 30-40% on labor costs by installing yourself'
      }
    ],
    diyProcess: [
      {
        phase: 'Design & Engineering',
        steps: [
          'Initial consultation to understand project goals',
          'Professional design created using FrameCAD technology',
          'Complete engineered plans and permit-ready drawings',
          'Material list and component specifications provided'
        ]
      },
      {
        phase: 'Manufacturing & Delivery',
        steps: [
          'Precision fabrication of all steel components',
          'Every piece numbered and labeled for assembly',
          'Quality control inspection before shipment',
          'Delivery coordinated to your site'
        ]
      },
      {
        phase: 'DIY Installation',
        steps: [
          'Customer assembles foundation per provided plans',
          'Steel frame erected following detailed instructions',
          'Technical support available throughout process',
          'Customer completes finishes at their own pace'
        ]
      }
    ],
    advantages: [
      'Significant cost savings on installation labor',
      'Work at your own pace and schedule',
      'Learn valuable construction skills',
      'Complete control over the build process',
      'Factory-precision components ensure perfect fit',
      'Professional engineering and design included',
      'Full technical support when you need it',
      'Permit-ready engineered drawings provided',
      'All components pre-cut and pre-drilled',
      'Step-by-step assembly instructions'
    ],
    ideal: [
      'Homeowners with basic construction experience',
      'Those looking to save on installation costs',
      'DIY enthusiasts wanting a rewarding project',
      'Builders seeking to expand their capabilities',
      'Anyone wanting more control over their build',
      'Projects where time flexibility is valued'
    ]
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'fileText': return FileText;
      case 'package': return Package;
      case 'hammer': return Hammer;
      case 'target': return Target;
      default: return Home;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="DIY Barndominium Kit Strathroy Ontario | 40×60 Steel Frame Self-Build"
        description="Customer DIY installation success story in Strathroy, Ontario. 40×60×14 steel barndominium kit delivered. Save 30-40% on labor with professional design and support."
        image={heroImage}
      />
      {/* Back Button */}
      <div className="bg-muted border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => onNavigate('success-stories')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Success Stories
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <ImageWithFallback 
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 text-white p-8">
          <div className="max-w-7xl mx-auto">
            <Badge className="bg-terracotta text-white mb-4">
              {project.type}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              {project.subtitle}
            </p>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Home className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1">Building Size</div>
              <div className="text-xl">{project.specs.buildingSize}</div>
            </Card>
            <Card className="p-6 text-center">
              <Truck className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1">Kit Delivery</div>
              <div className="text-xl">{project.specs.kitDelivery}</div>
            </Card>
            <Card className="p-6 text-center">
              <Hammer className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1">Installation</div>
              <div className="text-xl">{project.specs.installation}</div>
            </Card>
            <Card className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1">Completed</div>
              <div className="text-xl">{project.specs.completed}</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-6 text-center">The Project</h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-center">
            {project.description}
          </p>
        </div>
      </section>

      {/* DIY Process Timeline */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center">The DIY Process</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            From initial design to final installation, here's how our DIY kit program works
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {project.diyProcess.map((phase, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl text-terracotta">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl">{phase.phase}</h3>
                </div>
                
                <div className="space-y-3">
                  {phase.steps.map((step, sIndex) => (
                    <div key={sIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">DIY Installation Gallery</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            See the transformation from kit delivery to completed structure
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={interiorFraming1}
                  alt="Interior steel frame construction with large windows and mezzanine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Steel Frame Structure with Mezzanine</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={interiorWall}
                  alt="Interior wall framing showing steel girts and panel installation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Wall Panel Installation Progress</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={ceilingDetail}
                  alt="Detailed view of steel frame ceiling and roof structure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Precision Steel Ceiling Framework</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={interiorWindows}
                  alt="Interior showing two-story wall with multiple windows installed"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Two-Story Window Installation</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={interiorView}
                  alt="Interior view showing full height windows and natural light"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Natural Light and Open Space</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1707725669477-18feaba381f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwcHJvZ3Jlc3N8ZW58MXx8fHwxNzY1MzU5OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Construction site showing project completion progress"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Project Nearing Completion</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={finishedExterior}
                  alt="Finished barndominium exterior at dusk with warm lighting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Completed Barndominium at Dusk</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">DIY Kit Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.features.map((feature, index) => {
              const Icon = getIcon(feature.icon);
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-terracotta" />
                  </div>
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center">DIY Kit Advantages</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Why choose SteelBuilt's DIY kit option for your barndominium project
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {project.advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <span className="text-lg text-muted-foreground">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center">Is DIY Installation Right for You?</h2>
          <p className="text-lg text-white/80 text-center mb-12 max-w-3xl mx-auto">
            Our DIY kit program is ideal for:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {project.ideal.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Users className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                <span className="text-lg text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue Learning Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center">Continue Learning</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Explore more resources to help plan your steel building project
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" onClick={() => onNavigate('factory-tour')}>
              <div className="p-6">
                <Wrench className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3">Factory Tour</h3>
                <p className="text-muted-foreground mb-4">
                  See how we manufacture precision cold-formed steel components with FrameCAD technology.
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-terracotta hover:text-terracotta/80">
                  Read Article →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" onClick={() => onNavigate('steel-vs-wood')}>
              <div className="p-6">
                <Scale className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3">Steel vs. Wood Construction</h3>
                <p className="text-muted-foreground mb-4">
                  Compare the benefits of cold-formed steel framing versus traditional wood construction.
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-terracotta hover:text-terracotta/80">
                  Read Article →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" onClick={() => onNavigate('success-stories')}>
              <div className="p-6">
                <Users className="w-10 h-10 text-terracotta mb-4" />
                <h3 className="text-xl mb-3">More Success Stories</h3>
                <p className="text-muted-foreground mb-4">
                  Explore other completed steel building projects across Ontario and beyond.
                </p>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-terracotta hover:text-terracotta/80">
                  View Projects →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Start Your DIY Barndominium?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a custom kit designed and delivered to your site. We'll provide the engineering, you provide the labor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-terracotta hover:bg-terracotta/90 text-white"
            >
              Request a DIY Kit Quote
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('models')}
            >
              Explore Our Models
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}