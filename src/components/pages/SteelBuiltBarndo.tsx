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
    <div className="min-h-screen bg-background pt-16">
      <HeadMeta 
        title={`${project.title} | Cold Form Steel Canada Success Story`}
        description={project.description}
        image={project.heroImage}
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
              <Home className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1 font-bold">Size</div>
              <div className="text-xl text-foreground font-bold">{project.specs.size}</div>
            </Card>
            <Card className="p-6 text-center bg-white border shadow-md hover:shadow-lg transition-shadow">
              <Ruler className="w-8 h-8 mx-auto mb-3 text-terracotta" />
              <div className="text-sm text-muted-foreground mb-1 font-bold">Design</div>
              <div className="text-xl text-foreground font-bold">{project.specs.dimensions}</div>
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

      {/* Construction Journey Photos */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-bold text-foreground">Construction Journey</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Experience the rapid steel frame assembly in rural Quebec - showcasing the all-weather construction capabilities of cold-formed steel
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.constructionImages.map((img, index) => (
              <Card 
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow border-0 shadow-md"
              >
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback 
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-center text-muted-foreground font-medium">{img.caption}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center font-bold text-foreground">Key Features</h2>
          
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
          <h2 className="text-3xl md:text-4xl mb-12 text-center font-bold text-foreground">Project Highlights</h2>
          
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
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your vision and create a custom steel home that exceeds your expectations
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