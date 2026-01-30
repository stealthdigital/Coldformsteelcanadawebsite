import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  MapPin, 
  Home, 
  Ruler, 
  Calendar, 
  CheckCircle, 
  ArrowLeft,
  Thermometer,
  Clock,
  Building2,
  Layers
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';
import { CloudinaryImages } from '../../config/cloudinary-urls';

interface SteelBuiltBarndoProps {
  onNavigate: (page: string) => void;
}

export function SteelBuiltBarndo({ onNavigate }: SteelBuiltBarndoProps) {
  const project = {
    title: 'Steel-Built Barndo Retreat',
    subtitle: 'A Modern Take on Rural Living',
    type: 'Barndominium',
    location: 'Sainte-Marthe, Quebec',
    heroImage: CloudinaryImages.successStories.steMartheCompleted,
    specs: {
      size: '60′ × 44′',
      dimensions: '20′/13′ (two-storey)',
      completed: '2023'
    },
    description: 'Choose a lifestyle where rustic charm meets modern durability. This custom two-storey steel barndominium in Sainte-Marthe offers open-plan living on the main floor, a lofted mezzanine with panoramic windows, and a full shop bay for equipment or hobbies. Built with cold-formed steel framing, this retreat showcases the versatility and strength of modern steel construction.',
    features: [
      {
        icon: 'layers',
        title: 'Two-Storey Design',
        description: 'Main floor living with lofted mezzanine, maximizing space and natural light'
      },
      {
        icon: 'building2',
        title: 'Shop Bay Included',
        description: 'Full shop area integrated into the design for equipment storage and workspace'
      },
      {
        icon: 'thermometer',
        title: 'Year-Round Comfort',
        description: 'Insulated steel panels designed for Quebec\'s four-season climate'
      },
      {
        icon: 'clock',
        title: 'Quick Assembly',
        description: 'Pre-engineered components allow for rapid on-site construction'
      }
    ],
    keyHighlights: [
      'Two-storey design with lofted mezzanine',
      'Full shop bay for equipment or hobbies',
      'Panoramic windows capturing rural Quebec views',
      'Open-concept main floor living space',
      'Cold-formed steel construction for long-term durability',
      'Custom exterior finish to match rural aesthetic',
      'Energy-efficient insulated wall systems',
      'Low-maintenance steel framing'
    ],
    constructionImages: [
      {
        url: CloudinaryImages.successStories.steMartheFoundation,
        caption: 'Foundation & Steel Frame Installation - Day 1'
      },
      {
        url: CloudinaryImages.successStories.steMartheSteelStructure,
        caption: 'Structural Framework Complete - Day 2'
      },
      {
        url: CloudinaryImages.successStories.steMartheExteriorCladding,
        caption: 'Exterior Cladding Installation - Day 3'
      }
    ]
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home': return Home;
      case 'layers': return Layers;
      case 'building2': return Building2;
      case 'thermometer': return Thermometer;
      case 'clock': return Clock;
      default: return Home;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeadMeta 
        title={`${project.title} | Cold Form Steel Canada Success Story`}
        description={project.description}
        image={project.heroImage}
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

      {/* Construction Journey Photos */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Construction Journey</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Experience the rapid steel frame assembly in rural Quebec - showcasing the all-weather construction capabilities of cold-formed steel
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.constructionImages.map((img, index) => (
              <Card 
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback 
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-center text-muted-foreground">{img.caption}</p>
                </div>
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