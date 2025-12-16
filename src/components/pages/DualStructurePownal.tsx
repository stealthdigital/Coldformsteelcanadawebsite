import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  MapPin, 
  Home, 
  Calendar, 
  CheckCircle, 
  ArrowLeft,
  Warehouse,
  Building2,
  Clock,
  Layers,
  Wrench
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';
import heroImage from 'figma:asset/c8e5d28af9b150f96722af78c2c8f55dfe1d6af5.png';
import constructionImg1 from 'figma:asset/d4ffcbac615b35e584bf19cb477b2a3a6edae199.png';
import constructionImg2 from 'figma:asset/65a978eccbb1dd8fbcd7782b8b3f15bb82f535cd.png';
import constructionImg3 from 'figma:asset/b9457d5a92868ea5d93851b39c051f373f0bc005.png';
import completedImg1 from 'figma:asset/8af7b9cdc50d1a286a7ba349768a82907ac344ef.png';
import completedImg2 from 'figma:asset/3480b0cf0b6f4d8044196434b9dd06038116a16d.png';
import completedImg3 from 'figma:asset/891200f3ff291e09071137dac4750ea2f5e370ec.png';
import interiorImg from 'figma:asset/3fe80284fb6c9a14c9dfa89c26d8799be9797946.png';
import interiorImg2 from 'figma:asset/4ca0b78ed17571d01a141ea14baa346e7372f60e.png';
import interiorImg3 from 'figma:asset/ffe1a9dd6e8a415b55c5fa9f58f7b148c9457055.png';
import constructionBothImg from 'figma:asset/a621d3474314d0f8f139ec7dd9169b7d441e810e.png';
import foundationImg from 'figma:asset/d94781aca3185365c60ea20abb6d69825b2963cc.png';
import steelFrameProgressImg from 'figma:asset/4ae865b967d9b1b07dfc53f5760debb82de0cf51.png';

interface DualStructurePownalProps {
  onNavigate: (page: string) => void;
}

export function DualStructurePownal({ onNavigate }: DualStructurePownalProps) {
  const project = {
    title: 'Dual-Structure Barndominium & Garage',
    subtitle: 'Island Living on Prince Edward Island',
    type: 'Barndominium + Garage',
    location: 'Pownal, PEI',
    heroImage: heroImage,
    specs: {
      size: '40x60x11/14.5 ft',
      configuration: 'Barndominium + Garage',
      completed: '2024'
    },
    description: 'Located on beautiful Prince Edward Island, this dual-structure project showcases the versatility of cold-formed steel construction. The main barndominium (40x60x11/14.5 ft) provides spacious living quarters, while the complementary garage structure (43x26.5x12/16 ft) offers ample storage and workshop space. Both buildings feature pre-engineered steel framing that was erected rapidly on-site, demonstrating the efficiency of modern steel construction even in coastal maritime climates.',
    features: [
      {
        icon: 'building',
        title: 'Dual Structure Design',
        description: 'Two coordinated buildings - barndominium residence and dedicated garage/workshop space'
      },
      {
        icon: 'layers',
        title: 'Maritime Climate Ready',
        description: 'Engineered for PEI\'s coastal conditions including salt air, wind, and freeze-thaw cycles'
      },
      {
        icon: 'clock',
        title: 'Rapid Assembly',
        description: 'Pre-fabricated steel components allow both structures to be framed in 4-5 days each'
      },
      {
        icon: 'wrench',
        title: 'Flexible Workshop Space',
        description: 'Large garage structure perfect for vehicles, equipment storage, and hobby workspace'
      }
    ],
    structures: [
      {
        name: 'Main Barndominium',
        size: '40x60x11/14.5 ft',
        description: 'Primary residential structure with open-concept living space',
        highlights: [
          '2,400 sq ft of living space',
          'Cathedral ceilings up to 14.5 ft',
          'Open floor plan design',
          'Energy-efficient steel framing'
        ]
      },
      {
        name: 'Garage & Workshop',
        size: '43x26.5x12/16 ft',
        description: 'Dedicated storage and workspace building',
        highlights: [
          '1,139 sq ft of garage/workshop space',
          'Clear-span design - no interior posts',
          'Tall ceiling for equipment storage',
          'Matching steel construction'
        ]
      }
    ],
    keyHighlights: [
      'Two coordinated structures built with matching cold-formed steel',
      'Engineered for Prince Edward Island\'s maritime climate',
      'Salt-air resistant steel framing won\'t rust or corrode',
      'Rapid on-site assembly - each structure framed in 4-5 days',
      'Pre-engineered precision ensures perfect fit',
      'Clear-span garage design with no interior columns',
      'Energy-efficient insulated wall systems',
      'Low-maintenance steel exterior',
      'Flexible interior layouts in both buildings',
      'Built to withstand coastal winds and weather'
    ]
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'building': return Building2;
      case 'layers': return Layers;
      case 'clock': return Clock;
      case 'wrench': return Wrench;
      default: return Home;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="Dual Steel Structure Pownal PEI | Barndominium + Garage Workshop"
        description="See our Pownal, PEI dual steel building project. 40×60 barndominium + 43×26.5 garage. Maritime climate-resistant, fast construction. Complete cold-form steel system."
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
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Home className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1">Structure Size</div>
              <div className="text-xl">{project.specs.size}</div>
            </Card>
            <Card className="p-6 text-center">
              <Layers className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1">Configuration</div>
              <div className="text-xl">{project.specs.configuration}</div>
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

      {/* Structure Details */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Structure Details</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {project.structures.map((structure, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {index === 0 ? (
                    <Home className="w-10 h-10 text-terracotta" />
                  ) : (
                    <Warehouse className="w-10 h-10 text-terracotta" />
                  )}
                  <div>
                    <h3 className="text-2xl">{structure.name}</h3>
                    <p className="text-muted-foreground">{structure.size}</p>
                  </div>
                </div>
                
                <p className="text-lg mb-6 text-muted-foreground">
                  {structure.description}
                </p>
                
                <div className="space-y-3">
                  {structure.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Journey Photos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Construction Journey</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            From steel frame to finished structures - see the complete transformation on Prince Edward Island
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={foundationImg}
                  alt="Foundation work being done for the steel frame structures"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Foundation Work in Progress</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={constructionImg1}
                  alt="Steel column being lifted by forklift during construction"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Precision Steel Column Installation</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={constructionImg2}
                  alt="Construction crew assembling steel frame structure with SteelBuilt branding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">SteelBuilt Team On-Site Assembly</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={steelFrameProgressImg}
                  alt="Progress of steel frame construction with workers on-site"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Steel Frame Construction Progress</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={constructionImg3}
                  alt="Steel frame structure with roof trusses being assembled"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Steel Frame & Roof Assembly</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={constructionBothImg}
                  alt="Both steel frame structures during simultaneous construction"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Dual Structures - Simultaneous Construction</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Completed Structures */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Completed Structures</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            The finished dual-structure property showcasing BARNDO Canada's quality craftsmanship and attention to detail
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={completedImg1}
                  alt="Completed dual-structure barndominium and garage with blue exterior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Dual Structures - Barndominium & Garage Complete</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={completedImg2}
                  alt="SteelBuilt truck in front of completed barndominium project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">100% Canadian Made - SteelBuilt Quality</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={completedImg3}
                  alt="Completed dual-structure barndominium showing both buildings from side angle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Full Property View - Both Structures Showcased</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={interiorImg}
                  alt="Interior construction progress showing open-concept living space"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Interior Progress - Open-Concept Living Space</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={interiorImg2}
                  alt="Interior living space with stunning ocean views through floor-to-ceiling windows"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Breathtaking PEI Waterfront Views</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={interiorImg3}
                  alt="Bright interior room featuring panoramic ocean and coastal views"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Panoramic Ocean & Coastal Views</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Key Features</h2>
          
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

      {/* Key Highlights */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Project Highlights</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {project.keyHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <span className="text-lg text-white/90">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Build Your Custom Steel Structures?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you need a single building or multiple structures, we'll design and build exactly what you need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('models')}
              className="bg-terracotta hover:bg-terracotta/90 text-white"
            >
              Explore Our Models
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}