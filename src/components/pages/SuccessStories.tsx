import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Play, MapPin, Home, Building2, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';
import { CloudinaryImages } from '../../config/cloudinary-urls';

// Cloudinary CDN images
const steMartheBarndo = CloudinaryImages.successStories.steMartheCompleted;
const heroImage = CloudinaryImages.successStories.steMartheCompleted;
const blueMountainShop = CloudinaryImages.successStories.blueMountainCompleted;
const bonfieldBarndo = CloudinaryImages.successStories.bonfieldBarndo;
const pownalDualStructure = CloudinaryImages.successStories.pownalDualStructure;
const diyBarndominium = CloudinaryImages.successStories.barndominiumKitDesign;
const sudburyBarndo = CloudinaryImages.successStories.sudburyBarndo;
const princeEdwardBarndo = CloudinaryImages.successStories.princeEdwardBarndo;
const fortErieBarndo = CloudinaryImages.successStories.fortErieBarndo;
const mossleyBarndos = CloudinaryImages.successStories.mossleyBarndos;

interface SuccessStoriesProps {
  onNavigate: (page: string) => void;
}

type FilterType = 'All Projects' | 'Barndominium' | 'Shop/Hybrid' | 'Multi-Structure' | 'DIY Kit';

export function SuccessStories({ onNavigate }: SuccessStoriesProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All Projects');
  const stories = [
    {
      id: 'sainte-marthe-barndo',
      title: 'Steel-Built Barndo Retreat',
      type: 'Barndominium',
      location: 'Sainte-Marthe, Quebec',
      image: steMartheBarndo,
      size: '60′ × 44′',
      dimensions: '20′/13′ (two-storey)',
      description: 'Choose a lifestyle where rustic charm meets modern durability. This custom two-storey steel barndominium in Sainte-Marthe offers open-plan living on the main floor, a lofted mezzanine with panoramic windows, and a full shop bay for equipment or hobbies.',
      isVideo: false
    },
    {
      id: 'blue-mountain',
      title: 'Blue Mountain Workshop & Living Space',
      type: 'Shop/Barndo Hybrid',
      location: 'Blue Mountain, Ontario',
      image: blueMountainShop,
      size: '80′ × 40′',
      dimensions: '18′ high',
      description: 'Set at the base of Ontario\'s ski country, this custom steel shop and barndominium provides both function and style. The main bay features 18-foot ceilings for vehicles and equipment, while a mezzanine loft offers flexible living or office space.',
      isVideo: false
    },
    {
      id: 'family-barndominium',
      title: 'Family Barndominium',
      type: 'Barndominium',
      location: 'Bonfield, Ontario',
      image: bonfieldBarndo,
      size: 'Approx. 4,000 sq ft',
      dimensions: 'Single-level',
      description: 'This custom red steel barndominium combines modern comfort with small-town charm. The single-level design offers open-concept living, a large covered porch, and panoramic country views.',
      isVideo: false
    },
    {
      id: 'dual-structure-pownal',
      title: 'Dual-Structure Barndominium & Garage',
      type: 'Barndo + Garage',
      location: 'Pownal, Prince Edward Island',
      image: pownalDualStructure,
      size: '40′ × 60′ + 43′ × 26.5′',
      dimensions: '11′/14.5′ + 12′/16′',
      description: 'This coastal steel build in Pownal, PEI, combines a bright blue barndominium with a matching garage for a functional and stylish layout. Designed to handle Atlantic weather with insulated cold-formed steel panels.',
      isVideo: false
    },
    {
      id: 'diy-barndominium-strathroy',
      title: 'DIY Barndominium Kit Design & Delivery',
      type: 'DIY Kit',
      location: 'Strathroy, Ontario',
      image: diyBarndominium,
      size: '40′ × 60′ × 14′',
      dimensions: 'Customer DIY',
      description: 'This customer partnered with SteelBuilt Corp. to design, manufacture, and deliver a complete barndominium kit—then took on the challenge of assembling it themselves. Features large panoramic windows and energy-efficient wall systems.',
      isVideo: false
    },
    {
      title: 'Marvelous Barndominium for Northern Living',
      type: 'Barndominium',
      location: 'Sudbury, Ontario',
      image: sudburyBarndo,
      size: 'Approx. 45′ × 50′',
      dimensions: 'Monoslope design',
      description: 'This marvelous monoslope barndominium has everything needed for Northern Ontario weather control. All the elements slope away from the lakefront window view, combining form and function for year-round comfort.',
      isVideo: false,
      id: 'marvelous-barndominium'
    },
    {
      title: 'Modern Two-Story Barndominium',
      type: 'Barndominium',
      location: 'Prince Edward County, Ontario',
      image: princeEdwardBarndo,
      size: 'Approx. 28′ × 36′',
      dimensions: '20′ (two-story)',
      description: 'Nestled among the rolling farmland of Prince Edward County, this modern two-story steel barndominium delivers both efficiency and elegance. Built with cold-formed steel framing, this home offers superior durability and low maintenance.',
      isVideo: false,
      id: 'modern-two-story-barndominium'
    },
    {
      title: 'Barndominium Project',
      type: 'Barndominium',
      location: 'Fort Erie, Ontario',
      image: fortErieBarndo,
      size: 'Approx. 48′ × 36′',
      dimensions: '18′ (single storey with wrap-around porch)',
      description: 'This stunning barndominium project is underway in Fort Erie, Ontario. The finished home will feature a full-length covered porch, vaulted ceilings, and a bright, open-concept layout ideal for lakeside living.',
      isVideo: false,
      id: 'barndominium-project-fort-erie'
    },
    {
      id: 'sister-barndominiums',
      title: 'Sister Barndominiums',
      type: 'Dual Home Project',
      location: 'Mossley, Ontario',
      image: mossleyBarndos,
      size: 'Each approx. 50′ × 40′',
      dimensions: '22′ (two-storey homes)',
      description: 'Two sisters set out to build their dream homes side by side in Mossley, Ontario — each a fully custom two-storey steel barndominium designed for family living.',
      isVideo: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Barndominium':
        return 'bg-terracotta'; // Terracotta #c47b5c
      case 'Shop/Barndo Hybrid':
        return 'bg-sage'; // Sage green #8b9d83
      case 'Barndo + Garage':
        return 'bg-primary'; // Warm brown #665f55
      case 'DIY Kit':
        return 'bg-secondary'; // Terracotta variant
      case 'Dual Home Project':
        return 'bg-primary'; // Warm brown #665f55
      default:
        return 'bg-muted-foreground';
    }
  };

  const filterStories = (filter: FilterType) => {
    if (filter === 'All Projects') return stories;
    if (filter === 'Barndominium') return stories.filter(s => s.type === 'Barndominium');
    if (filter === 'Shop/Hybrid') return stories.filter(s => s.type === 'Shop/Barndo Hybrid');
    if (filter === 'Multi-Structure') return stories.filter(s => s.type === 'Barndo + Garage' || s.type === 'Dual Home Project');
    if (filter === 'DIY Kit') return stories.filter(s => s.type === 'DIY Kit');
    return stories;
  };

  const filteredStories = filterStories(activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeadMeta 
        title="Success Stories | Cold Form Steel Canada Barndominium Projects"
        description="Browse real barndominium and steel building projects across Canada. See completed homes in Ontario, Quebec, and PEI. Factory-built steel construction, framed in 4-5 days."
        image={heroImage}
      />
      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={heroImage}
            alt="Cold-formed steel construction projects across Canada"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-6xl mb-6 font-bold tracking-tight">
            Success Stories
          </h1>
          <p className="text-xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
            Real homes, real people, real results. See how Canadians are building with cold-form steel
          </p>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-8 bg-muted/50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge 
              variant="outline" 
              onClick={() => setActiveFilter('All Projects')}
              className={`cursor-pointer transition-all px-6 py-2.5 text-sm font-bold shadow-sm ${
                activeFilter === 'All Projects' 
                  ? 'bg-terracotta text-white border-terracotta' 
                  : 'bg-white text-terracotta border-terracotta/20 hover:border-terracotta/50 hover:bg-terracotta/5'
              }`}
            >
              All Projects
            </Badge>
            <Badge 
              variant="outline" 
              onClick={() => setActiveFilter('Barndominium')}
              className={`cursor-pointer transition-all px-6 py-2.5 text-sm font-bold shadow-sm ${
                activeFilter === 'Barndominium' 
                  ? 'bg-terracotta text-white border-terracotta' 
                  : 'bg-white text-terracotta border-terracotta/20 hover:border-terracotta/50 hover:bg-terracotta/5'
              }`}
            >
              <Home className="w-4 h-4 mr-2" /> Barndominium
            </Badge>
            <Badge 
              variant="outline" 
              onClick={() => setActiveFilter('Shop/Hybrid')}
              className={`cursor-pointer transition-all px-6 py-2.5 text-sm font-bold shadow-sm ${
                activeFilter === 'Shop/Hybrid' 
                  ? 'bg-terracotta text-white border-terracotta' 
                  : 'bg-white text-terracotta border-terracotta/20 hover:border-terracotta/50 hover:bg-terracotta/5'
              }`}
            >
              <Building2 className="w-4 h-4 mr-2" /> Shop/Hybrid
            </Badge>
            <Badge 
              variant="outline" 
              onClick={() => setActiveFilter('Multi-Structure')}
              className={`cursor-pointer transition-all px-6 py-2.5 text-sm font-bold shadow-sm ${
                activeFilter === 'Multi-Structure' 
                  ? 'bg-terracotta text-white border-terracotta' 
                  : 'bg-white text-terracotta border-terracotta/20 hover:border-terracotta/50 hover:bg-terracotta/5'
              }`}
            >
              <MapPin className="w-4 h-4 mr-2" /> Multi-Structure
            </Badge>
            <Badge 
              variant="outline" 
              onClick={() => setActiveFilter('DIY Kit')}
              className={`cursor-pointer transition-all px-6 py-2.5 text-sm font-bold shadow-sm ${
                activeFilter === 'DIY Kit' 
                  ? 'bg-terracotta text-white border-terracotta' 
                  : 'bg-white text-terracotta border-terracotta/20 hover:border-terracotta/50 hover:bg-terracotta/5'
              }`}
            >
              <Users className="w-4 h-4 mr-2" /> DIY Kit
            </Badge>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredStories.map((story, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group border-0 bg-white"
                onClick={() => story.id && onNavigate('project', story.id)}
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <ImageWithFallback 
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <Badge className={`absolute top-4 left-4 ${getTypeColor(story.type)} text-white border-0 shadow-lg px-3 py-1 font-bold uppercase tracking-widest text-[10px]`}>
                    {story.type}
                  </Badge>
                  {story.isVideo && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-terracotta ml-1" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-8">
                  <h3 className="mb-4 font-bold text-2xl text-foreground tracking-tight group-hover:text-terracotta transition-colors leading-tight">{story.title}</h3>
                  
                  <div className="space-y-3 text-sm text-muted-foreground mb-6 font-medium">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{story.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Home className="w-4 h-4 text-primary" />
                      <span>{story.size}</span>
                    </div>
                    {story.dimensions && (
                      <div className="flex items-center gap-3">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span>{story.dimensions}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                    {story.description}
                  </p>
                  <Button variant="link" className="p-0 text-primary font-bold h-auto text-lg group/btn border-0">
                    View Project Details 
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Detail */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto h-full order-2 lg:order-1">
                <img 
                  src={steMartheBarndo}
                  alt="Featured project"
                  className="w-full h-full object-cover object-left"
                />
              </div>
              
              <div className="p-10 md:p-14 bg-white order-1 lg:order-2">
                <Badge className="mb-6 bg-terracotta text-white border-0 px-4 py-2 font-bold uppercase tracking-[0.2em] text-[10px]">Featured Project</Badge>
                <h2 className="text-3xl md:text-4xl mb-8 font-bold text-foreground tracking-tight leading-tight">
                  Steel-Built Barndo Retreat – Sainte-Marthe, Quebec
                </h2>
                
                <div className="space-y-8 mb-10">
                  <div>
                    <h4 className="mb-3 font-bold text-terracotta uppercase tracking-widest text-xs">The Design</h4>
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      This custom two-storey steel barndominium features a 60′ × 44′ footprint with 20′/13′ ceiling heights. Open-plan living on the main floor, lofted mezzanine with panoramic windows, and a full shop bay.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="mb-4 font-bold text-terracotta uppercase tracking-widest text-xs">Key Features</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-terracotta" />
                        </div>
                        <span className="text-muted-foreground font-bold">Two-storey design with lofted mezzanine</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-terracotta" />
                        </div>
                        <span className="text-muted-foreground font-bold">Full shop bay for equipment or hobbies</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-terracotta" />
                        </div>
                        <span className="text-muted-foreground font-bold">Insulated steel panels for year-round comfort</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button 
                  onClick={() => onNavigate('contact')}
                  className="w-full h-16 bg-terracotta hover:bg-terracotta/90 text-white font-bold text-xl shadow-xl border-0 rounded-xl transition-transform hover:scale-[1.02]"
                >
                  Get Your Custom Quote
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-8 font-bold text-foreground tracking-tight">
            Ready to Start Your Own Build?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Join Canadians across the country building durable, energy-efficient steel structures with Cold Form Steel Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-terracotta hover:bg-terracotta/90 text-white font-bold h-16 px-12 text-xl shadow-xl border-0 rounded-xl transition-transform hover:scale-105"
            >
              Request a Quote
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('models')}
              className="border-2 border-terracotta text-terracotta hover:bg-terracotta/10 font-bold h-16 px-12 text-xl rounded-xl transition-transform hover:scale-105"
            >
              Explore Our Models
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}