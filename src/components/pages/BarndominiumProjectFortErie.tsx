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
  Sun,
  Shield,
  Drill,
  Calendar
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';
import heroImage from 'figma:asset/aa98e3a8c0eb6b9a4b5740bc5ff590b6be03e80d.png';
import steelFrameErection from 'figma:asset/e9ee296fd9b39a7ed4ab5a66d446846a8fed99f3.png';
import steelFrameInterior from 'figma:asset/d0e69070745854d29ab3adaa62c34d1fbe6489d0.png';
import foundationFootings from 'figma:asset/c1c990480fa85c6f27603dc62fc24a7b9f5fe4bf.png';
import steelFrameComplete from 'figma:asset/6aad8df498a0075611cb919d1ecef70ffe6044f3.png';
import vaultedCeilingInterior from 'figma:asset/0f1b6e93bbf618b1576955c73ffe8d34e4bc5781.png';
import interiorSpaceProgress from 'figma:asset/7fbb02649a68dd8c222b6af7a03be6233d175cea.png';
import radiantFloorHeating from 'figma:asset/25a94820e5bf89908cb6cd069150c8e7de5acb3a.png';
import exteriorWithCoveredPorch from 'figma:asset/9b8a41bfb69d76c1db3be8e66e08b7760b6826f5.png';
import steelFrameFoundation from 'figma:asset/1eb9ceb2f22e365fbdb577eb74719353c27f346c.png';
import exteriorSidingProgress from 'figma:asset/2cb293d2df492f9caaceda7f01a9a97f737efeaf.png';
import exteriorCoveredPorchConstruction from 'figma:asset/f8ac113bf250cfe20ee5bc5dd1d77542a6dec675.png';
import finalExteriorView from 'figma:asset/0e35e9c6382d535d02042c1dc345b02505b66750.png';
import coveredPorchLiving from 'figma:asset/bfcd05557678a8ab3c4d21b81f27bcdfcb92b610.png';
import frontEntrancePorch from 'figma:asset/2fd92a864ad2ed244e39067bcba5e430d708aaed.png';
import rendering3DAngle1 from 'figma:asset/07c144ffa3fb0edae131b4594ca936dea29d52fc.png';
import rendering3DAngle2 from 'figma:asset/4cc5dc51cac4abc292466ab634dfe291126dbc8a.png';

interface BarndominiumProjectFortErieProps {
  onNavigate: (page: string) => void;
}

export function BarndominiumProjectFortErie({ onNavigate }: BarndominiumProjectFortErieProps) {
  const project = {
    title: 'Barndominium Project in Fort Erie',
    subtitle: 'Foundation Excellence',
    type: 'Barndo',
    location: 'Fort Erie, Ontario',
    heroImage: heroImage,
    specs: {
      size: 'Approx. 48′  36′',
      height: '18′ Single Storey',
      completed: '2024'
    },
    description: 'This stunning Barndominium Project is now underway in Fort Erie, Ontario. Now that the foundation is complete, it is important to understand that no two foundations will be the same. It is imperative to understand your soil conditions before excavating as well as utilizing our engineering services to design the best foundation for your home.',
    features: [
      {
        icon: 'drill',
        title: 'Custom Foundation Engineering',
        description: 'Foundation carefully engineered to match site-specific soil conditions'
      },
      {
        icon: 'home',
        title: 'Covered Porch Living',
        description: 'Full-length covered porch perfect for lakeside relaxation'
      },
      {
        icon: 'sun',
        title: 'Vaulted Ceilings',
        description: 'Bright, open-concept layout with soaring vaulted ceiling design'
      },
      {
        icon: 'shield',
        title: 'Long-Term Strength',
        description: 'Precision steel framing and high-performance insulation for energy savings'
      }
    ],
    keyHighlights: [
      'Site-specific foundation engineering and soil testing',
      'Custom footing design matched to Fort Erie soil conditions',
      'Full-length covered porch for lakeside living',
      'Vaulted ceilings creating bright, airy interior spaces',
      'Open-concept floor plan ideal for modern family life',
      'Precision cold-formed steel framing system',
      'High-performance insulation for energy efficiency',
      'Designed for long-term structural strength',
      'Perfect for Fort Erie\'s lakeside climate',
      'Professional engineering services from start to finish'
    ]
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'drill': return Drill;
      case 'home': return Home;
      case 'sun': return Sun;
      case 'shield': return Shield;
      default: return Building2;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="Barndominium Fort Erie Ontario | Custom Foundation Steel Building"
        description="See our Fort Erie barndominium project. 48×36 lakeside design, custom foundation engineering, vaulted ceilings, covered porch. Professional cold-form steel construction."
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
              <div className="text-sm text-muted-foreground mb-1">Size</div>
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
          <h2 className="text-3xl md:text-4xl mb-6 text-center">The Foundation Story</h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-center">
            {project.description}
          </p>
        </div>
      </section>

      {/* Design Visualizations */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center">Design Visualizations</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Explore professional 3D renderings showcasing the complete design vision for this lakeside barndominium
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden bg-[#C5D5E4]">
                <ImageWithFallback 
                  src={rendering3DAngle1}
                  alt="3D rendering showing barndominium with full-length covered porch and wood accents"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl mb-2 text-center">Front Perspective View</h3>
                <p className="text-center text-muted-foreground">
                  Full-length covered porch with wood post accents and modern black siding
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden bg-[#C5D5E4]">
                <ImageWithFallback 
                  src={rendering3DAngle2}
                  alt="3D rendering showing alternate angle of barndominium design with vaulted ceiling gable"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl mb-2 text-center">Side Perspective View</h3>
                <p className="text-center text-muted-foreground">
                  Vaulted ceiling gable detail and wrap-around covered porch design
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Construction Journey */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center">Construction Journey</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            From engineered footings to finished lakeside living—witness the complete Fort Erie build process
          </p>
          
          {/* Row 1 - Foundation & Early Frame */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={foundationFootings}
                  alt="Engineered foundation footings with anchor bolts"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Custom Engineered Foundation Footings</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={steelFrameFoundation}
                  alt="Steel frame structure on foundation before walls"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Steel Frame on Foundation</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={steelFrameErection}
                  alt="Steel frame being erected with construction equipment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Steel Frame Erection in Progress</p>
              </div>
            </Card>
          </div>

          {/* Row 2 - Frame Completion & Interior */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={steelFrameComplete}
                  alt="Complete steel frame structure with vaulted ceiling trusses"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Complete Steel Frame Structure</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={steelFrameInterior}
                  alt="Steel frame interior structure showing construction progress"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Steel Frame Interior Progress</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={vaultedCeilingInterior}
                  alt="Interior view showing vaulted ceilings and steel frame"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Vaulted Ceiling Interior Views</p>
              </div>
            </Card>
          </div>

          {/* Row 3 - Systems & Finishing */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={radiantFloorHeating}
                  alt="Radiant floor heating system installation in progress"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Radiant Floor Heating Installation</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={interiorSpaceProgress}
                  alt="Open-concept interior space showing construction progress"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Open-Concept Space Taking Shape</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={exteriorWithCoveredPorch}
                  alt="Exterior view with covered porch and black barndominium siding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Exterior with Covered Porch</p>
              </div>
            </Card>
          </div>

          {/* Row 4 - Exterior Completion & Final Views */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={exteriorSidingProgress}
                  alt="Exterior siding installation showing metal panels and garage door"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Exterior Siding Installation</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={exteriorCoveredPorchConstruction}
                  alt="Covered porch construction showing metal siding and structural details"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Covered Porch Construction Progress</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={finalExteriorView}
                  alt="Final exterior view of completed barndominium with full-length covered porch"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Completed Lakeside Barndominium</p>
              </div>
            </Card>
          </div>

          {/* Row 5 - Finished Covered Porch Living Spaces */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={coveredPorchLiving}
                  alt="Covered porch with sliding glass doors and outdoor furniture showcasing lakeside views"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Covered Porch Lakeside Living Space</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={frontEntrancePorch}
                  alt="Front entrance porch with decorative planters and flowers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Front Entrance Porch Details</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center">Project Features</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Engineered for lakeside living with attention to every structural detail
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

      {/* Foundation Engineering Callout */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 bg-white">
            <div className="text-center">
              <Drill className="w-16 h-16 mx-auto mb-6 text-terracotta" />
              <h2 className="text-3xl md:text-4xl mb-6">
                Foundation Engineering Matters
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                No two foundations are the same. Understanding soil conditions before excavating and utilizing professional engineering services ensures the best foundation for your home—setting the stage for decades of structural integrity.
              </p>
              <p className="text-lg text-muted-foreground">
                This Fort Erie project showcases our commitment to custom engineering and site-specific design solutions.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Start Your Barndominium Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover how professional engineering and cold-formed steel construction can bring your lakeside vision to life with precision and performance.
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