import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  MapPin, 
  Home, 
  CheckCircle, 
  ArrowLeft,
  Ruler,
  Building2,
  Wind,
  Shield,
  PaintBucket,
  Calendar,
  Layers,
  Maximize,
  TreePine
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';

// GitHub raw image URLs using assets branch
const heroImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Modern%20Two-Story%20Barndominium/Completed%20Exterior%20Ready.png';
const foundationPhoto = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Modern%20Two-Story%20Barndominium/Foundation%20Ready%20for%20Steel%20Frame.png';
const steelFramePhoto = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Modern%20Two-Story%20Barndominium/Two-Story%20Steel%20Frame%20Taking%20Shape.png';
const exteriorFramingPhoto = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Modern%20Two-Story%20Barndominium/Blue%20Steel%20Exterior%20with%20Openings.png';
const twoToneExteriorPhoto = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Modern%20Two-Story%20Barndominium/Two-Tone%20Blue%20Exterior%20with%20Windows.png';
const winterExteriorPhoto = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Modern%20Two-Story%20Barndominium/Completed%20Exterior%20Ready.png';

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
    <div className="min-h-screen bg-background pt-16">
      <HeadMeta 
        title="Two-Story Barndominium Prince Edward County | Modern Steel Building"
        description="Explore this modern two-story barndominium in Prince Edward County, Ontario. Bold blue steel design, dual-level living space, framed in 4-5 days with cold-form steel construction."
        image={heroImage}
      />
      {/* Back Button */}
      <div className="bg-muted/50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => onNavigate('stories')}
            className="gap-2 font-bold text-foreground hover:text-primary"
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
            <Badge className="bg-terracotta text-white mb-4 border-0">
              {project.type}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 text-white font-bold">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-white border shadow-md hover:shadow-lg transition-shadow">
              <Layers className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1 font-bold">Size</div>
              <div className="text-xl text-foreground font-bold">{project.specs.size}</div>
            </Card>
            <Card className="p-6 text-center bg-white border shadow-md hover:shadow-lg transition-shadow">
              <Home className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1 font-bold">Design</div>
              <div className="text-xl text-foreground font-bold">{project.specs.design}</div>
            </Card>
            <Card className="p-6 text-center bg-white border shadow-md hover:shadow-lg transition-shadow">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1 font-bold">Completed</div>
              <div className="text-xl text-foreground font-bold">{project.specs.completed}</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-6 text-center font-bold text-foreground">The Project</h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-center">
            {project.description}
          </p>
        </div>
      </section>

      {/* Construction Journey */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-bold text-foreground">Construction Journey</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            From foundation to finished exterior—see how this modern barndominium came together
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow border-0 shadow-md">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={foundationPhoto}
                  alt="Foundation preparation with concrete slab and equipment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground font-medium">Foundation Ready for Steel Frame</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow border-0 shadow-md">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={steelFramePhoto}
                  alt="Two-story blue steel frame structure during construction"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground font-medium">Two-Story Steel Frame Taking Shape</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow border-0 shadow-md">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={exteriorFramingPhoto}
                  alt="Blue steel exterior with window openings"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground font-medium">Blue Steel Exterior with Openings</p>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow border-0 shadow-md">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={twoToneExteriorPhoto}
                  alt="Two-tone blue exterior with windows being installed"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground font-medium">Two-Tone Blue Exterior with Windows</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow border-0 shadow-md">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={winterExteriorPhoto}
                  alt="Completed exterior in winter setting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground font-medium">Completed Exterior Ready for Winter</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center font-bold text-foreground">Two-Story Design Benefits</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Modern barndominium style with the efficiency of vertical living space
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.features.map((feature, index) => {
              const Icon = getIcon(feature.icon);
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-white border-0 shadow-md">
                  <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-terracotta" />
                  </div>
                  <h3 className="text-xl mb-3 font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center font-bold text-foreground">Key Highlights</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {project.keyHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                <span className="text-lg text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-10 bg-primary text-white text-center rounded-2xl shadow-xl border-0">
            <h2 className="text-3xl md:text-4xl mb-6 text-white font-bold">
              Ready for Your Two-Story Barndominium?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Discover how cold-formed steel construction can bring your vision to life with speed, quality, and modern design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-terracotta hover:bg-terracotta/90 text-white font-bold h-14 px-10 text-lg shadow-xl border-0 hover:scale-105 transition-transform duration-200"
              >
                Request a Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('models')}
                className="font-bold h-14 px-10 text-lg bg-white text-primary hover:bg-white/90 border-0"
              >
                Explore Our Models
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}