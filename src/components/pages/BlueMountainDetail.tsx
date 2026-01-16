import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  MapPin, 
  Home, 
  Building2, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  ArrowLeft,
  Play,
  Ruler,
  Thermometer,
  Users,
  Clock
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';

// Cold Form Steel Canada image URL
const blueMountainHero = 'https://coldformsteelcanada.com/_assets/v11/8e7daa72db13e0e8f2f42704c35c5d61d7891ac8.png';

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
    application: string;
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

interface BlueMountainDetailProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export function BlueMountainDetail({ onNavigate }: BlueMountainDetailProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const project: ProjectDetailData = {
    title: 'Blue Mountain Steel Workshop',
    subtitle: 'A Premium Steel Building for Ontario Living',
    type: 'Shop/Barndo Hybrid',
    location: 'Blue Mountain, Ontario',
    heroImage: blueMountainHero,
    constructionImages: [
      {
        url: blueMountainHero,
        caption: 'Completed Steel Building - Final Result'
      }
    ],
    specs: {
      size: '40′ × 60′',
      dimensions: '16′ clearance',
      application: 'Workshop with potential living space',
      completed: 'Summer 2024'
    },
    description: 'Located in the stunning Blue Mountain region of Ontario, this 40\' × 60\' steel building represents the perfect balance of functionality and modern design. Built to withstand Ontario\'s harsh winters and designed with both workshop and potential living space in mind, this structure showcases the versatility of cold-formed steel construction.',
    features: [
      {
        icon: 'home',
        title: 'Versatile Design',
        description: 'Open floor plan accommodates workshop space with potential for integrated living quarters'
      },
      {
        icon: 'thermometer',
        title: 'Climate Optimized',
        description: 'Engineered specifically for Ontario\'s temperature extremes with superior insulation'
      },
      {
        icon: 'clock',
        title: 'Rapid Assembly',
        description: 'Pre-engineered steel components allow for quick construction in any season'
      },
      {
        icon: 'ruler',
        title: 'Generous Clearance',
        description: '16-foot ceiling height provides ample room for equipment, lifts, or mezzanine additions'
      }
    ],
    keyHighlights: [
      'Cold-formed steel frame for maximum durability',
      'Clear-span design with no load-bearing interior walls',
      '16-foot interior clearance for flexibility',
      'Energy-efficient wall and roof systems',
      'Large overhead doors for equipment access',
      'Pre-wired for utilities and lighting',
      'Engineered for Ontario snow loads',
      'Low-maintenance metal exterior',
      'Optional mezzanine-ready design',
      'Insulated to R-30+ specifications'
    ],
    testimonial: {
      quote: 'The steel building has exceeded our expectations. It\'s spacious, well-built, and handles the winter weather perfectly. We love the flexibility it gives us.',
      author: 'Project Owner',
      role: 'Blue Mountain, ON'
    }
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
      <HeadMeta 
        title="Blue Mountain Steel Workshop | 40×60 Steel Building Ontario Success Story"
        description="See our Blue Mountain, Ontario 40×60 steel building project. 16' clearance, workshop with living potential, framed in 4-5 days. Cold-form steel construction built for Ontario winters."
        image={blueMountainHero}
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
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Home className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-sm text-muted-foreground mb-1">Size</div>
              <div className="text-xl">{project.specs.size}</div>
            </Card>
            <Card className="p-6 text-center">
              <Ruler className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-sm text-muted-foreground mb-1">Clearance</div>
              <div className="text-xl">{project.specs.dimensions}</div>
            </Card>
            <Card className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-sm text-muted-foreground mb-1">Completed</div>
              <div className="text-xl">{project.specs.completed || 'Unknown'}</div>
            </Card>
            <Card className="p-6 text-center">
              <Building2 className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-sm text-muted-foreground mb-1">Application</div>
              <div className="text-xl">{project.specs.application}</div>
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
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Project Gallery</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {project.constructionImages.map((image, idx) => (
              <Card 
                key={idx} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedImage(idx)}
              >
                <div className="aspect-[4/3] relative overflow-hidden group">
                  {image.isVideo ? (
                    <div className="relative w-full h-full bg-black flex items-center justify-center">
                      <Play className="w-16 h-16 text-white opacity-80" />
                    </div>
                  ) : (
                    <ImageWithFallback 
                      src={image.url}
                      alt={image.caption || `Construction image ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                {image.caption && (
                  <div className="p-4 bg-white">
                    <p className="text-sm text-muted-foreground">{image.caption}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features.map((feature, idx) => {
              const Icon = getIcon(feature.icon);
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Project Highlights</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {project.keyHighlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <span className="text-lg text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/5 border-primary/20">
              <div className="text-center">
                <div className="text-6xl text-primary/20 mb-4">"</div>
                <p className="text-xl md:text-2xl text-foreground mb-6 italic">
                  {project.testimonial.quote}
                </p>
                <div className="border-t pt-6">
                  <p className="text-lg">{project.testimonial.author}</p>
                  <p className="text-muted-foreground">{project.testimonial.role}</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Start Your Steel Building Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how cold-formed steel can bring your vision to life.
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

      {/* Image Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="max-w-6xl max-h-[90vh] w-full">
            <ImageWithFallback 
              src={project.constructionImages[selectedImage].url}
              alt={project.constructionImages[selectedImage].caption || ''}
              className="w-full h-full object-contain"
            />
            {project.constructionImages[selectedImage].caption && (
              <p className="text-white text-center mt-4 text-lg">
                {project.constructionImages[selectedImage].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}