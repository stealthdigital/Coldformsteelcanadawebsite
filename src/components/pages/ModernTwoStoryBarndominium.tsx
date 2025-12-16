import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  MapPin, 
  Home, 
  CheckCircle, 
  ArrowLeft,
  Layers,
  Building2,
  Maximize,
  Clock,
  TreePine,
  Calendar
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';
import heroImage from 'figma:asset/af0637cc0fa6b12f49e8b1b1a3f8a23face2b6c6.png';
import foundationPhoto from 'figma:asset/27751524e5e78d230fd8f9bc762952f72f6464ea.png';
import steelFramePhoto from 'figma:asset/1927bf37c5ce4213725ace6a4e4c2e18d391e141.png';
import exteriorFramingPhoto from 'figma:asset/8928e489f378d284439f26e0b31b54bec5d20ae2.png';
import twoToneExteriorPhoto from 'figma:asset/760a7e9d39bb796f8e849a08df48c0dcf152ac79.png';
import winterExteriorPhoto from 'figma:asset/f0686022eabc2037926640a3f5248cb3deeaecf4.png';

interface ModernTwoStoryBarndominiumProps {
  onNavigate: (page: string) => void;
}

export function ModernTwoStoryBarndominium({ onNavigate }: ModernTwoStoryBarndominiumProps) {
  const project = {
    title: 'Modern Two-Story Barndominium',
    subtitle: 'Rich Agricultural Beauty',
    type: 'Barndo',
    location: 'Prince Edward County, Ontario',
    heroImage: heroImage,
    specs: {
      size: 'Two-Story',
      design: 'Modern Barndominium',
      completed: '2024'
    },
    description: 'Prince Edward County is a rich agricultural area where this stunning two-story barndominium showcases the perfect blend of modern design and rural functionality. This striking blue steel structure demonstrates how cold-formed steel construction delivers both aesthetic appeal and practical living space, with dual-level design maximizing square footage while maintaining the classic barndominium character.',
    features: [
      {
        icon: 'layers',
        title: 'Two-Story Design',
        description: 'Maximizes living space with efficient vertical design perfect for rural properties'
      },
      {
        icon: 'building2',
        title: 'Modern Aesthetics',
        description: 'Bold blue metal cladding with clean lines creates striking architectural presence'
      },
      {
        icon: 'maximize',
        title: 'Spacious Layout',
        description: 'Dual levels provide ample room for family living, workspace, and storage needs'
      },
      {
        icon: 'treepine',
        title: 'Rural Setting',
        description: 'Perfectly suited for Prince Edward County\'s agricultural landscape and lifestyle'
      }
    ],
    keyHighlights: [
      'Two-story cold-formed steel frame construction',
      'Bold modern blue exterior cladding with white trim',
      'Multiple window placements for natural light throughout',
      'Efficient use of vertical space in rural setting',
      'Framed in 4-5 days with factory-built precision',
      'Durable steel construction built for Canadian weather',
      'Perfect blend of modern design and barndominium functionality',
      'Strategic window placement on both levels',
      'Low-maintenance metal exterior finish',
      'Ideal for Prince Edward County\'s agricultural community'
    ]
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'layers': return Layers;
      case 'building2': return Building2;
      case 'maximize': return Maximize;
      case 'treepine': return TreePine;
      default: return Home;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="Two-Story Barndominium Prince Edward County | Modern Steel Building"
        description="Explore this modern two-story barndominium in Prince Edward County, Ontario. Bold blue steel design, dual-level living space, framed in 4-5 days with cold-form steel construction."
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
              <Layers className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1">Size</div>
              <div className="text-xl">{project.specs.size}</div>
            </Card>
            <Card className="p-6 text-center">
              <Home className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1">Design</div>
              <div className="text-xl">{project.specs.design}</div>
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

      {/* Construction Journey */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center">Construction Journey</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            From foundation to finished exterior—see how this modern barndominium came together
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={foundationPhoto}
                  alt="Foundation preparation with concrete slab and equipment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Foundation Ready for Steel Frame</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={steelFramePhoto}
                  alt="Two-story blue steel frame structure during construction"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Two-Story Steel Frame Taking Shape</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={exteriorFramingPhoto}
                  alt="Blue steel exterior with window openings"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Blue Steel Exterior with Openings</p>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={twoToneExteriorPhoto}
                  alt="Two-tone blue exterior with windows being installed"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Two-Tone Blue Exterior with Windows</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={winterExteriorPhoto}
                  alt="Completed exterior in winter setting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Completed Exterior Ready for Winter</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center">Two-Story Design Benefits</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Modern barndominium style with the efficiency of vertical living space
          </p>
          
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Key Highlights</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {project.keyHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <span className="text-lg text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready for Your Two-Story Barndominium?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover how cold-formed steel construction can bring your vision to life with speed, quality, and modern design.
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