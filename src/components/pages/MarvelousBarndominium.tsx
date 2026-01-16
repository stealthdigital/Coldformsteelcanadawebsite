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
  ThermometerSnowflake,
  Shield,
  Wind,
  Calendar
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';

// GitHub raw image URLs using assets branch
const heroImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Marvelous%20Barndominium%20for%20Northern%20Living/Marvelous%20Barndominium%20for%20Northern%20Living.png';
const foundationPhoto1 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Marvelous%20Barndominium%20for%20Northern%20Living/Foundation%20Pour%20with%20Site%20Preparation.png';
const foundationPhoto2 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Marvelous%20Barndominium%20for%20Northern%20Living/Rebar%20and%20Concrete%20Foundation%20Detail.png';
const steelFrame1 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Marvelous%20Barndominium%20for%20Northern%20Living/Monoslope%20Steel%20Frame%20Taking%20Shape.png';
const steelFrame2 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Marvelous%20Barndominium%20for%20Northern%20Living/Monoslope%20Design%20with%20Fall%20Colors.png';
const exteriorPhoto1 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Marvelous%20Barndominium%20for%20Northern%20Living/Exterior%20Cladding%20Installation.png';
const exteriorPhoto2 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Marvelous%20Barndominium%20for%20Northern%20Living/Exterior%20Side%20Taking%20Shape.png';
const exteriorPhoto3 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Marvelous%20Barndominium%20for%20Northern%20Living/Window%20Installation%20Progress.png';

interface MarvelousBarnodominiumProps {
  onNavigate: (page: string) => void;
}

export function MarvelousBarndominium({ onNavigate }: MarvelousBarnodominiumProps) {
  const project = {
    title: 'Marvelous Barndominium for Northern Living',
    subtitle: 'Monoslope Design Engineered for Sudbury Weather',
    type: 'Versatility',
    location: 'Sudbury, Ontario',
    heroImage: heroImage,
    specs: {
      buildingSize: 'Approx. 45′ × 50′',
      design: 'Monoslope',
      insulation: 'R40/R38 Energy Saver'
    },
    description: 'This marvelous monoslope barndominium has everything needed for Northern Ontario weather control. All the elements slope away from the glorious window view of the lake front, combining stunning aesthetics with superior functionality. The client took full control in sourcing a local foundation company while utilizing one of our SteelBuilt erecting crews to install the home including the R40/R38 Energy Saver insulation package.',
    features: [
      {
        icon: 'snowflake',
        title: 'Weather-Engineered',
        description: 'Monoslope design directs all elements away from lakefront windows for optimal weather control'
      },
      {
        icon: 'shield',
        title: 'Superior Insulation',
        description: 'R40/R38 Energy Saver package ensures comfort through harsh Northern Ontario winters'
      },
      {
        icon: 'waves',
        title: 'Lake Front Views',
        description: 'Strategically positioned windows maximize breathtaking views while protecting from elements'
      },
      {
        icon: 'building2',
        title: 'Flexible Control',
        description: 'Client sourced foundation while SteelBuilt crew handled professional steel erection'
      }
    ],
    keyHighlights: [
      'Monoslope roof design for optimal snow shedding and weather control',
      'R40/R38 Energy Saver insulation package for extreme temperature control',
      'All drainage elements slope away from lakefront windows',
      'Strategic window placement for stunning views without weather exposure',
      'Engineered for heavy snow loads typical of Sudbury region',
      'Client flexibility in managing foundation phase',
      'Professional SteelBuilt installation with expert erecting crew',
      'Energy-efficient design reduces heating costs',
      'Completed on time and within budget',
      'Lake effect weather considerations built into design'
    ]
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'snowflake': return ThermometerSnowflake;
      case 'shield': return Shield;
      case 'waves': return Wind;
      case 'building2': return Building2;
      default: return Home;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="Monoslope Barndominium Sudbury Ontario | Lakefront Steel Building"
        description="View our Sudbury, Ontario monoslope barndominium. 45×50 lakefront design, R40/R38 insulation, engineered for Northern Ontario winters. Weather-resistant steel construction."
        image={heroImage}
      />
      {/* Back Button */}
      <div className="bg-muted border-b mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => onNavigate('stories')}
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
            <Badge className="bg-primary text-white mb-4">
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
              <Home className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-sm text-muted-foreground mb-1">Building Size</div>
              <div className="text-xl">{project.specs.buildingSize}</div>
            </Card>
            <Card className="p-6 text-center">
              <Ruler className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-sm text-muted-foreground mb-1">Design</div>
              <div className="text-xl">{project.specs.design}</div>
            </Card>
            <Card className="p-6 text-center">
              <ThermometerSnowflake className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-sm text-muted-foreground mb-1">Insulation</div>
              <div className="text-xl">{project.specs.insulation}</div>
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

      {/* Construction Journey Photos */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Construction Journey</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            From client-led foundation work to professional steel frame installation by SteelBuilt's expert erecting crew
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={foundationPhoto1}
                  alt="Foundation concrete pour with workers and excavator in background"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Foundation Pour with Site Preparation</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={foundationPhoto2}
                  alt="Rebar and concrete foundation work showing detailed preparation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Rebar and Concrete Foundation Detail</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={steelFrame1}
                  alt="Steel frame erection showing monoslope roof structure with autumn foliage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Monoslope Steel Frame Taking Shape</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={steelFrame2}
                  alt="Steel frame structure showing monoslope roof design and insulation installation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Monoslope Design with Fall Colors</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={exteriorPhoto1}
                  alt="Exterior cladding installation showing dark modern finish"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Exterior Cladding Installation</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={exteriorPhoto2}
                  alt="Building exterior showing multiple openings and dark cladding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Exterior Side Taking Shape</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={exteriorPhoto3}
                  alt="Long side view showing window placement and exterior finish"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Window Installation Progress</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center">Designed for Northern Living</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Every element engineered to thrive in Sudbury's challenging climate
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.features.map((feature, index) => {
              const Icon = getIcon(feature.icon);
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
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
      <section className="py-16 bg-muted">
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready for Your Northern Ontario Barndominium?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's design a custom steel building that's perfect for your location, climate, and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('models')}
              className="bg-primary hover:bg-primary/90 text-white"
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