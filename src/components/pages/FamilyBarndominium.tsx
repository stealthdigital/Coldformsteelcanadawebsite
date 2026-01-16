import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  MapPin, 
  Home, 
  Ruler, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  ArrowLeft,
  Play,
  Thermometer,
  Users,
  Clock,
  Snowflake,
  Building2
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';

// GitHub raw image URLs using assets branch
const bonfieldBarndo = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Family%20Barndominium/Family%20Barndominium.png';
const constructionImg1 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Family%20Barndominium/Steel%20Roof%20Frame%20Assembly.png';
const constructionImg2 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Family%20Barndominium/Interior%20Frame%20Structure%20Complete.png';
const constructionImg3 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Family%20Barndominium/Winter%20Construction.png';
const interiorImg1 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Family%20Barndominium/Cathedral%20Ceilings%20-%20Spray%20Foam%20Insulation.png';
const interiorImg2 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Family%20Barndominium/Living%20Area%20with%20Energy-Efficient%20Insulation.png';
const interiorImg3 = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Family%20Barndominium/Open%20Floor%20Plan%20-%204,000%20sq%20ft%20Interior.png';

interface FamilyBarndominiumProps {
  onNavigate: (page: string) => void;
}

export function FamilyBarndominium({ onNavigate }: FamilyBarndominiumProps) {
  const [showVideo, setShowVideo] = useState(false);

  const project = {
    title: 'Family Barndominium',
    subtitle: 'Year-Round Comfort in Small-Town Ontario',
    type: 'Barndominium',
    location: 'Bonfield, Ontario',
    heroImage: bonfieldBarndo,
    videoUrl: 'https://www.youtube.com/embed/OIlCKQN0GRM?start=2',
    specs: {
      size: '4,000 sq ft',
      dimensions: 'Single-level',
      completed: '2024'
    },
    description: 'This striking red steel barndominium in Bonfield, Ontario showcases the perfect blend of modern comfort and rural charm. Built to withstand harsh Canadian winters while providing year-round comfort, this family home features an open-concept design, large covered porch, and panoramic country views. The cold-formed steel construction ensures superior durability and energy efficiency in Northern Ontario\'s demanding climate.',
    features: [
      {
        icon: 'home',
        title: 'Spacious Single-Level',
        description: '4,000 sq ft of open-concept living space designed for family comfort and entertaining'
      },
      {
        icon: 'thermometer',
        title: 'Year-Round Insulation',
        description: 'Engineered for Ontario winters with superior thermal performance and energy efficiency'
      },
      {
        icon: 'snowflake',
        title: 'Weather-Resistant Steel',
        description: 'Cold-formed steel framing that won\'t warp, rot, or deteriorate in harsh winter conditions'
      },
      {
        icon: 'clock',
        title: 'Rapid Construction',
        description: 'Pre-engineered steel components allow for fast assembly - framed in 4-5 days on-site'
      }
    ],
    keyHighlights: [
      'Cold-formed steel framing for superior strength and longevity',
      'Large covered porch perfect for outdoor living',
      'Open-concept floor plan with flexible living spaces',
      'Panoramic windows capturing countryside views',
      'Energy-efficient insulated wall panels',
      'Low-maintenance steel exterior with custom color finish',
      'Engineered for Northern Ontario\'s freeze-thaw cycles',
      'Factory-built precision with on-site assembly in days',
      'Non-combustible construction for enhanced fire safety',
      'Designed to handle heavy snow loads'
    ]
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home': return Home;
      case 'thermometer': return Thermometer;
      case 'clock': return Clock;
      case 'users': return Users;
      case 'ruler': return Ruler;
      case 'snowflake': return Snowflake;
      default: return Home;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title="Family Barndominium Bonfield Ontario | 4000 sq ft Steel Frame Home"
        description="Explore this 4,000 sq ft family barndominium in Bonfield, Ontario. Cold-form steel construction, winter-resistant, framed in 4-5 days. Open concept design. Real homeowner success story."
        image={bonfieldBarndo}
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
              <div className="text-sm text-muted-foreground mb-1">Size</div>
              <div className="text-xl">{project.specs.size}</div>
            </Card>
            <Card className="p-6 text-center">
              <Ruler className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-sm text-muted-foreground mb-1">Design</div>
              <div className="text-xl">{project.specs.dimensions}</div>
            </Card>
            <Card className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-primary" />
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

      {/* Construction Video */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Construction Video</h2>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            Watch the complete construction journey of this family barndominium, from foundation to finish
          </p>
          
          <Card className="overflow-hidden max-w-5xl mx-auto">
            <div className="aspect-video relative">
              {!showVideo ? (
                <div 
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => setShowVideo(true)}
                >
                  <ImageWithFallback 
                    src={project.heroImage}
                    alt="Construction video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-xl mb-2">Watch Construction Process</div>
                    <div className="text-sm text-white/80">See how cold-form steel construction comes together</div>
                  </div>
                </div>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={project.videoUrl}
                  title="Family Barndominium Construction Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                />
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Construction Journey Photos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Construction Journey</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Experience the rapid steel frame assembly during a Canadian winter - showcasing the all-weather construction capabilities of cold-formed steel
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={constructionImg1}
                  alt="Steel roof framing installation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Steel Roof Frame Assembly</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={constructionImg2}
                  alt="Interior steel frame structure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Interior Frame Structure Complete</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={constructionImg3}
                  alt="Construction crew assembling steel frame"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Winter Construction - Day 3</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={interiorImg1}
                  alt="Interior space with cathedral ceilings and spray foam insulation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Cathedral Ceilings & Spray Foam Insulation</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={interiorImg2}
                  alt="Open living area with windows and insulation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Living Area with Energy-Efficient Insulation</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={interiorImg3}
                  alt="Spacious open floor plan with exposed steel beams"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-center text-muted-foreground">Open Floor Plan - 4,000 sq ft Interior</p>
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
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Project Highlights</h2>
          
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
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your vision and create a custom steel home that exceeds your expectations
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