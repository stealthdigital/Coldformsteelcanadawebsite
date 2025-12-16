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
import heroImageFinal from 'figma:asset/632143e42a9e7ee5198a9013d8c9e5b93d9ff52a.png';
import constructionImg1 from 'figma:asset/f90143aaf5445284b979da88f06ec3d968d66199.png';
import constructionImg2 from 'figma:asset/fc471085396f043972b02d4aa6be46a2078cd48e.png';
import constructionImg3 from 'figma:asset/576c7655791950676eddd0da9c3c0125d6cd74c0.png';
import steMartheBarndo from 'figma:asset/aacff60a0dee960bce3e9f2dfa6ecd9d84629639.png';

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
        caption: 'Structural Framework Complete - Week 2'
      },
      {
        url: constructionImg3,
        caption: 'Exterior Cladding Installation - Week 3'
      },
      {
        url: steMartheBarndo,
        caption: 'Completed Barndominium - Final Result'
      }
    ],
    specs: {
      size: '60′ × 44′',
      dimensions: '20′/13′ (two-storey)',
      buildTime: 'Unknown',
      cost: 'Unknown',
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Barndominium':
        return 'bg-blue-500';
      case 'Shop/Barndo Hybrid':
        return 'bg-purple-500';
      case 'Barndo + Garage':
        return 'bg-green-500';
      case 'DIY Kit':
        return 'bg-orange-500';
      case 'Dual Home Project':
        return 'bg-pink-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-white">
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
              <div className="text-sm text-muted-foreground mb-1">Size</div>
              <div className="text-xl">{project.specs.size}</div>
            </Card>
            <Card className="p-6 text-center">
              <Ruler className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1">Height</div>
              <div className="text-xl">{project.specs.dimensions}</div>
            </Card>
            <Card className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1">Completed</div>
              <div className="text-xl">{project.specs.completed || 'Unknown'}</div>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1">Frame Time</div>
              <div className="text-xl">{project.specs.buildTime}</div>
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
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Construction Journey</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {project.constructionImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-video relative overflow-hidden">
                  {image.isVideo ? (
                    <div className="relative w-full h-full">
                      <ImageWithFallback 
                        src={image.url}
                        alt={image.caption || `Construction phase ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-accent ml-1" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ImageWithFallback 
                      src={image.url}
                      alt={image.caption || `Construction phase ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                {image.caption && (
                  <div className="p-4 bg-white">
                    <p className="text-center text-muted-foreground">{image.caption}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
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

      {/* Testimonial (if available) */}
      {project.testimonial && (
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 md:p-12">
              <div className="text-4xl text-terracotta mb-6">"</div>
              <p className="text-2xl mb-6 italic text-muted-foreground">
                {project.testimonial.quote}
              </p>
              <div>
                <div className="text-lg">{project.testimonial.author}</div>
                <div className="text-muted-foreground">{project.testimonial.role}</div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Build Your Dream Barndominium?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your vision and create a custom steel building that exceeds your expectations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-terracotta hover:bg-terracotta/90 text-white"
            >
              Request a Quote
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('models')}
            >
              View Models & Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Images */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-white/70 text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="max-w-6xl w-full">
            <ImageWithFallback 
              src={project.constructionImages[selectedImage].url}
              alt={project.constructionImages[selectedImage].caption || ''}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            {project.constructionImages[selectedImage].caption && (
              <p className="text-white text-center mt-4 text-lg">
                {project.constructionImages[selectedImage].caption}
              </p>
            )}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage > 0 ? selectedImage - 1 : project.constructionImages.length - 1);
                }}
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage < project.constructionImages.length - 1 ? selectedImage + 1 : 0);
                }}
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
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