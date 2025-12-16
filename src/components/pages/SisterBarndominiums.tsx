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
  Users,
  Heart,
  Layers,
  Shield,
  Calendar
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';
import heroImage from 'figma:asset/4086adfd0cdc60a711a4cce16e182090600d2d51.png';
import deliveryImage1 from 'figma:asset/ed964b2241e9306ec8b1ac160fe52ff004a9eae7.png';
import unpackingImage from 'figma:asset/1f2f2f60378eec4d0a781f096c2f88cec9120c1e.png';
import deliveryImage2 from 'figma:asset/11bb95170f5893f3b65a6efb5a3176f5889c0e94.png';
import foundationImage from 'figma:asset/55cb1387bc3d13a06994480beb60caf9304de0df.png';
import steelFrameImage from 'figma:asset/25c4b5e5afef767a41297e8ab7b2bb389d7b2115.png';
import steelFrameImage2 from 'figma:asset/6c9a533a276dbdbce4d7fdfd77069126ca9f5d6b.png';
import interiorImage1 from 'figma:asset/0c54840cacf9c6cfca330ac0d960fc89bd5979ea.png';
import interiorImage2 from 'figma:asset/834f2b8ccf4b13b2972839cb4e306b6dc4f6f5fb.png';
import interiorImage3 from 'figma:asset/834f2b8ccf4b13b2972839cb4e306b6dc4f6f5fb.png';
import exteriorImage1 from 'figma:asset/6382a2752662200eda43a738b34b687df532924f.png';
import exteriorImage2 from 'figma:asset/035febdc50129421174284920d28444901a48625.png';
import finishedKitchen from 'figma:asset/c20c21e64e5cf394a45ed3d6296e94547d88e8b1.png';
import finishedStaircase from 'figma:asset/582788e0cd8a750bb0e4e1f42ca792e9b4994700.png';
import finishedLiving from 'figma:asset/2134fe5564ccbd1a4d36efe6ec1d9a3de5bf23cb.png';
import greatRoomView1 from 'figma:asset/682dcd52e890ef0a271767da77e5160eebaba526.png';
import greatRoomView2 from 'figma:asset/7cb20a4e890acf01c8a345784365f40f52bfafd6.png';
import nightExterior from 'figma:asset/e823e4a9850e302ccd1fb72b9f20ac693ed02b0a.png';

interface SisterBarndominiumsProps {
  onNavigate: (page: string) => void;
}

export function SisterBarndominiums({ onNavigate }: SisterBarndominiumsProps) {
  const project = {
    title: 'Sister Barndominiums',
    subtitle: 'Building Unique Barndominiums',
    type: 'Dual Home Project',
    location: 'Mossley, Ontario',
    heroImage: heroImage,
    specs: {
      size: 'Each approx. 50′ × 40′',
      height: '22′ Two-Storey',
      completed: '2024'
    },
    description: 'Two sisters have decided to build two unique barndominium homes on their property. Ground preparation has begun. These matching builds feature tall cathedral-style great rooms, covered porches, and expansive windows that showcase rural Ontario views. Built with cold-formed steel framing, the homes are designed for longevity, energy efficiency, and low maintenance — combining classic barn style with modern comfort.',
    features: [
      {
        icon: 'users',
        title: 'Side-by-Side Design',
        description: 'Two custom barndominiums built simultaneously for family living'
      },
      {
        icon: 'home',
        title: 'Two-Storey Layout',
        description: 'Cathedral-style great rooms with expansive vertical space'
      },
      {
        icon: 'layers',
        title: 'Covered Porches',
        description: 'Welcoming outdoor spaces perfect for Ontario rural living'
      },
      {
        icon: 'shield',
        title: 'Steel Construction',
        description: 'Cold-formed steel framing for durability and energy efficiency'
      }
    ],
    keyHighlights: [
      'Dual custom barndominium homes on shared property',
      'Each home approximately 50′ × 40′ with two-storey design',
      'Cathedral-style great rooms with soaring ceilings',
      'Covered porches on both structures',
      'Expansive windows showcasing rural Ontario views',
      'Cold-formed steel framing for superior strength',
      'Energy-efficient construction for reduced operating costs',
      'Low-maintenance exterior materials',
      'Classic barn aesthetic with modern amenities',
      'Ground preparation phase completed',
      'Designed for long-term family living',
      'Matching architectural style creating unified property aesthetic'
    ]
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users': return Users;
      case 'home': return Home;
      case 'layers': return Layers;
      case 'shield': return Shield;
      default: return Building2;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="Sister Barndominiums Mossley Ontario | Dual Steel Home Project"
        description="Discover our Sister Barndominiums project in Mossley, Ontario. Two matching 50×40 two-storey steel homes, cathedral ceilings, covered porches. Unique dual family build."
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
              <div className="text-sm text-muted-foreground mb-1">Size (Each)</div>
              <div className="text-xl">{project.specs.size}</div>
            </Card>
            <Card className="p-6 text-center">
              <Ruler className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1">Height</div>
              <div className="text-xl">{project.specs.height}</div>
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
          <h2 className="text-3xl md:text-4xl mb-6 text-center">The Sister Story</h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-center">
            {project.description}
          </p>
        </div>
      </section>

      {/* Build Progress Photos */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center">Build in Progress</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Follow the journey from delivery through foundation work to steel frame erection for this unique dual-build project
          </p>
          
          {/* Delivery & Preparation Phase */}
          <div className="mb-10">
            <h3 className="text-2xl mb-6 text-center text-terracotta">Delivery & Preparation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={deliveryImage1}
                    alt="Steel materials delivery to site"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Materials Arrive</h4>
                  <p className="text-muted-foreground">
                    Cold-formed steel components delivered to the Mossley site, ready for unpacking and organization
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={unpackingImage}
                    alt="Unpacked steel frame components on site"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Site Preparation</h4>
                  <p className="text-muted-foreground">
                    Precision-engineered steel frame components unpacked and organized, showcasing the quality of factory-built construction
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={deliveryImage2}
                    alt="Additional delivery arriving at build site"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Ready to Build</h4>
                  <p className="text-muted-foreground">
                    All materials on site and staged for efficient assembly of both barndominium structures
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Construction Phase */}
          <div>
            <h3 className="text-2xl mb-6 text-center text-terracotta">Foundation & Steel Frame Construction</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={foundationImage}
                    alt="Foundation construction with workers on site"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Foundation Work Underway</h4>
                  <p className="text-muted-foreground">
                    Engineered foundation systems being built to support the two-storey cold-formed steel structures. Precision formwork ensures optimal performance and longevity.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={steelFrameImage}
                    alt="Steel frame structure being erected"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Steel Frame Rising</h4>
                  <p className="text-muted-foreground">
                    Cold-formed steel frame taking shape, demonstrating the speed and precision of factory-built construction. The cathedral ceiling structure begins to emerge.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={steelFrameImage2}
                    alt="Steel frame construction with machinery and crew"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Frame Assembly in Action</h4>
                  <p className="text-muted-foreground">
                    Construction crew and equipment working efficiently to assemble the precision-engineered steel components. The strength and clarity of the structural system is evident.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interior Construction Phase */}
          <div className="mt-10">
            <h3 className="text-2xl mb-6 text-center text-terracotta">Interior Construction & Insulation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={interiorImage1}
                    alt="Interior view showing cathedral ceilings and steel frame with insulation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Cathedral Ceilings Take Shape</h4>
                  <p className="text-muted-foreground">
                    The dramatic two-storey cathedral ceiling structure showcases the strength of cold-formed steel framing. Insulation installed between steel members, with expansive window openings framing rural Ontario views.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={interiorImage2}
                    alt="Interior wall framing with windows and insulation installation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Wall Systems & Windows</h4>
                  <p className="text-muted-foreground">
                    Steel wall framing with high-performance insulation and window installations in progress. The precision of factory-built components ensures energy efficiency and structural integrity throughout.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={interiorImage3}
                    alt="Interior showing multiple window installations with cathedral ceilings and insulation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Expansive Window Arrays</h4>
                  <p className="text-muted-foreground">
                    Multiple window installations allow abundant natural light to flood the interior spaces. Cathedral ceilings with exposed steel structure and insulation create an impressive vertical volume.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Exterior & Roofing Installation */}
          <div className="mt-10">
            <h3 className="text-2xl mb-6 text-center text-terracotta">Exterior & Roofing Installation</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-4">
                <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={exteriorImage1}
                    alt="Two-storey barndominium with metal roofing installation in progress"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Roofing & Siding Progress</h4>
                  <p className="text-muted-foreground">
                    Metal roofing installation underway on the two-storey structure. The classic barn profile takes shape with durable metal siding and expansive window openings showcasing the Ontario countryside.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={exteriorImage2}
                    alt="Side view showing covered porch with metal roofing and siding"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Covered Porch Taking Shape</h4>
                  <p className="text-muted-foreground">
                    The welcoming covered porch area emerges with metal roofing and siding installation. Low-maintenance materials ensure long-term durability while maintaining the classic barndominium aesthetic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Finished Interiors */}
          <div className="mt-10">
            <h3 className="text-2xl mb-6 text-center text-terracotta">Finished Interiors</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-4">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={finishedKitchen}
                    alt="Modern kitchen with white cabinets, island, and pendant lights"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Modern Kitchen Design</h4>
                  <p className="text-muted-foreground">
                    White shaker cabinets, quartz countertops, and stainless appliances create a bright, functional kitchen. Large island with pendant lighting anchors the open-concept space.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={finishedStaircase}
                    alt="Two-storey staircase with wood treads and black metal railings"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Custom Staircase</h4>
                  <p className="text-muted-foreground">
                    Elegant hardwood staircase with black metal spindles connects the two levels. Wide treads and sturdy railings provide both beauty and safety for the two-storey layout.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={finishedLiving}
                    alt="Living room with large sliding doors to covered porch"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Open Living Space</h4>
                  <p className="text-muted-foreground">
                    Spacious great room with expansive sliding doors opening to the covered porch. Neutral finishes and abundant natural light showcase the Ontario countryside views.
                  </p>
                </div>
              </div>
            </div>

            {/* Cathedral Great Room Views */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-4">
                <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={greatRoomView1}
                    alt="Cathedral ceiling great room with loft, staircase, and open kitchen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Soaring Cathedral Ceilings</h4>
                  <p className="text-muted-foreground">
                    The dramatic cathedral ceiling great room showcases the full two-storey height with upper loft space and elegant staircase. Open concept design flows seamlessly from living area to modern kitchen.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                  <ImageWithFallback 
                    src={greatRoomView2}
                    alt="Alternative view of cathedral great room showing expansive windows and vertical space"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl mb-2">Light-Filled Living</h4>
                  <p className="text-muted-foreground">
                    Expansive windows flood the great room with natural light, highlighting the impressive vertical volume. The open floor plan creates a sense of spaciousness perfect for family gatherings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground italic">
              Construction continues—more progress photos coming soon as both barndominiums take shape...
            </p>
          </div>
        </div>
      </section>

      {/* Completed Barndominium at Dusk */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <ImageWithFallback 
          src={nightExterior}
          alt="Completed barndominium illuminated at dusk in Mossley, Ontario"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl mb-4">
              Dreams Realized: Home at Last
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              As dusk settles over Mossley, Ontario, warm lights glow from within — transforming steel, insulation, and craftsmanship into a welcoming family home. This is the promise of cold-formed steel construction: exceptional quality, remarkable speed, and lasting beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center">Project Features</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Two custom homes designed for family, built with precision steel construction
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

      {/* Dual Build Callout */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 bg-white">
            <div className="text-center">
              <Heart className="w-16 h-16 mx-auto mb-6 text-terracotta" />
              <h2 className="text-3xl md:text-4xl mb-6">
                Building Family Legacies Together
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                This unique dual-build project showcases the beauty of family collaboration. Two sisters creating their dream homes side by side, each custom-designed yet harmoniously matched, demonstrating how cold-formed steel construction can bring multiple visions to life on shared property.
              </p>
              <p className="text-lg text-muted-foreground">
                Ground preparation complete—watch as these two-storey barndominiums rise together in Mossley, Ontario.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Build Phases</h2>
          
          <div className="space-y-8">
            <Card className="p-6 border-l-4 border-l-sage">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2">Phase 1: Ground Preparation — Complete</h3>
                  <p className="text-muted-foreground">
                    Site preparation completed for both homes. Property graded and ready for foundation work.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-terracotta/30">
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-terracotta/50 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2">Phase 2: Foundation Engineering — In Progress</h3>
                  <p className="text-muted-foreground">
                    Custom foundation engineering for both structures to ensure optimal support for two-storey steel frames.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-terracotta/30">
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-terracotta/50 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2">Phase 3: Steel Frame Erection — Upcoming</h3>
                  <p className="text-muted-foreground">
                    Cold-formed steel framing will be erected for both homes, including cathedral ceiling structures.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-terracotta/30">
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-terracotta/50 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2">Phase 4: Exterior & Interior Finishing — Planned</h3>
                  <p className="text-muted-foreground">
                    Installation of covered porches, windows, siding, and interior finishes for both barndominiums.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Dream of Building Your Custom Barndominium?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're building one home or two, discover how cold-formed steel construction delivers strength, efficiency, and lasting value for your family's future.
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