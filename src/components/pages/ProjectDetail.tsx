import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  MapPin, 
  Home, 
  Building2, 
  Calendar, 
  CheckCircle, 
  ArrowLeft,
  Play,
  Ruler,
  Thermometer,
  Users,
  Clock
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// GitHub raw image URLs using main branch
const BASE_URL = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Success%20Stories/Steel-Built%20Barndo%20Retreat';

const steMartheBarndo = `${BASE_URL}/Completed%20Barndominium.png`;
const heroImageFinal = steMartheBarndo;
const constructionImg1 = `${BASE_URL}/Foundation%20and%20Steel%20Frame%20Installation.jpg`;
const constructionImg2 = `${BASE_URL}/Steel%20Structure%20Complete.jpg`;
const constructionImg3 = `${BASE_URL}/Exterior%20Cladding%20Installation.jpg`;

interface ProjectImage {
  url: string;
  caption?: string;
  isVideo?: boolean;
}

interface ProjectFeature {
  icon: 'home' | 'thermometer' | 'clock' | 'users' | 'ruler';
  title: string;
  description: string;
}

interface ProjectDetailData {
  title: string;
  subtitle: string;
  type: string;
  location: string;
  heroImage: string;
  constructionImages: ProjectImage[];
  specs: {
    size: string;
    dimensions: string;
    buildTime: string;
    cost: string;
    completed?: string;
  };
  description: string;
  features: ProjectFeature[];
  keyHighlights: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

interface ProjectDetailProps {
  projectId: string;
  onNavigate: (page: string, projectId?: string) => void;
}

export function ProjectDetail({ projectId, onNavigate }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // This will eventually come from a data source based on projectId
  const project: ProjectDetailData = {
    title: 'Steel-Built Barndo Retreat',
    subtitle: 'A Modern Take on Rural Living',
    type: 'Barndominium',
    location: 'Sainte-Marthe, Quebec',
    heroImage: heroImageFinal,
    constructionImages: [
      {
        url: constructionImg1,
        caption: 'Foundation & Steel Frame Installation - Day 1'
      },
      {
        url: constructionImg2,
        caption: 'Structural Framework Complete - Day 2'
      },
      {
        url: constructionImg3,
        caption: 'Exterior Cladding Installation - Day 3'
      },
      {
        url: steMartheBarndo,
        caption: 'Completed Barndominium - Final Result'
      }
    ],
    specs: {
      size: '60′ × 44′',
      dimensions: '20′/13′ (two-storey)',
      buildTime: '4-5 Days',
      cost: 'Varies',
      completed: 'Fall 2024'
    },
    description: 'This custom two-storey steel barndominium in Sainte-Marthe, Quebec represents the perfect blend of rustic charm and modern durability. Featuring open-plan living on the main floor, a lofted mezzanine with panoramic windows, and a full shop bay for equipment or hobbies, this build showcases what\'s possible with cold-formed steel construction.',
    features: [
      {
        icon: 'home',
        title: 'Two-Storey Design',
        description: 'Open-concept main floor with lofted mezzanine offering flexible living space and stunning views'
      },
      {
        icon: 'thermometer',
        title: 'Superior Insulation',
        description: 'Insulated steel panels engineered for Quebec\'s extreme seasonal temperature variations'
      },
      {
        icon: 'clock',
        title: 'Fast Construction',
        description: 'Pre-engineered steel framing allows for rapid assembly compared to traditional wood builds'
      },
      {
        icon: 'ruler',
        title: 'Integrated Shop Bay',
        description: 'Full workshop area perfect for equipment storage, hobbies, or small business operations'
      }
    ],
    keyHighlights: [
      'Cold-formed steel framing for superior strength and durability',
      'Panoramic windows with energy-efficient glazing',
      'Open-concept living with cathedral ceilings',
      'Lofted mezzanine with flexible use options',
      'Full shop bay with 13-foot clearance',
      'Insulated panels rated for Quebec winters',
      'Low-maintenance exterior cladding',
      'Engineered foundation for local soil conditions'
    ]
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home': return Home;
      case 'thermometer': return Thermometer;
      case 'clock': return Clock;
      case 'users': return Users;
      case 'ruler': return Ruler;
      default: return Home;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-muted border-b">
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
            <Badge className="bg-primary text-white mb-4 border-0">
              {project.type}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 font-bold">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              {project.subtitle}
            </p>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-lg">{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-2 border-muted hover:border-primary/20 transition-colors">
              <Home className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-xs text-muted-foreground mb-1 font-bold uppercase tracking-wider">Size</div>
              <div className="text-lg font-bold">{project.specs.size}</div>
            </Card>
            <Card className="p-6 text-center border-2 border-muted hover:border-primary/20 transition-colors">
              <Ruler className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-xs text-muted-foreground mb-1 font-bold uppercase tracking-wider">Height</div>
              <div className="text-lg font-bold">{project.specs.dimensions}</div>
            </Card>
            <Card className="p-6 text-center border-2 border-muted hover:border-primary/20 transition-colors">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-xs text-muted-foreground mb-1 font-bold uppercase tracking-wider">Completed</div>
              <div className="text-lg font-bold">{project.specs.completed || 'Unknown'}</div>
            </Card>
            <Card className="p-6 text-center border-2 border-muted hover:border-primary/20 transition-colors">
              <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-xs text-muted-foreground mb-1 font-bold uppercase tracking-wider">Frame Time</div>
              <div className="text-lg font-bold">{project.specs.buildTime}</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-8 font-bold">The Project</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Construction Journey */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center font-bold">Construction Journey</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {project.constructionImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 border-muted hover:border-primary/20"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback 
                    src={image.url}
                    alt={image.caption || `Construction phase ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {image.isVideo && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </div>
                  )}
                </div>
                {image.caption && (
                  <div className="p-4 bg-white border-t">
                    <p className="text-center text-muted-foreground font-medium">{image.caption}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-16 text-center font-bold">Project Highlights</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {project.keyHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <span className="text-xl text-white/90">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-16 text-center font-bold">Built for Performance</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.features.map((feature, index) => {
              const Icon = getIcon(feature.icon);
              return (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-muted hover:border-primary/20">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl mb-4 font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6 font-bold">
            Ready to Build Your Dream Barndominium?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your vision and create a custom steel building that exceeds your expectations with precision and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 text-lg shadow-xl"
            >
              Request a Quote
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('models')}
              className="border-primary text-primary hover:bg-primary/10 font-bold h-14 px-10 text-lg"
            >
              View Models & Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Images */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors text-5xl font-light"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="max-w-6xl w-full">
            <ImageWithFallback 
              src={project.constructionImages[selectedImage].url}
              alt={project.constructionImages[selectedImage].caption || ''}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            {project.constructionImages[selectedImage].caption && (
              <p className="text-white text-center mt-6 text-xl font-medium">
                {project.constructionImages[selectedImage].caption}
              </p>
            )}
            <div className="flex justify-center gap-6 mt-10">
              <Button
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage > 0 ? selectedImage - 1 : project.constructionImages.length - 1);
                }}
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-6 text-lg"
              >
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage < project.constructionImages.length - 1 ? selectedImage + 1 : 0);
                }}
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-6 text-lg"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}