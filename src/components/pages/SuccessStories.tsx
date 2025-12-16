import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Play, MapPin, Home, Building2, Users, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeadMeta } from '../HeadMeta';
import steMartheBarndo from 'figma:asset/aacff60a0dee960bce3e9f2dfa6ecd9d84629639.png';
import heroImage from 'figma:asset/4086adfd0cdc60a711a4cce16e182090600d2d51.png';
import blueMountainShop from 'figma:asset/8e7daa72db13e0e8f2f42704c35c5d61d7891ac8.png';
import bonfieldBarndo from 'figma:asset/e7001ba6cd69df3fe6ec439ec2820d18206c204a.png';
import pownalDualStructure from 'figma:asset/c18247d0a2e78b3b94f97acddd951cddc94bf345.png';
import diyBarndominium from 'figma:asset/214ac2399f6f4485303d5bccf4e3d20e6d8cc609.png';
import sudburyBarndo from 'figma:asset/5a96fa1796f97f0d7aa97214ba3b92842ae9db13.png';
import princeEdwardBarndo from 'figma:asset/959b57415ed7df36f148bc05eff8834daf23a217.png';
import fortErieBarndo from 'figma:asset/aa98e3a8c0eb6b9a4b5740bc5ff590b6be03e80d.png';
import mossleyBarndos from 'figma:asset/4086adfd0cdc60a711a4cce16e182090600d2d51.png';

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
      description: 'This marvelous monoslope barndominium has everything needed for Northern Ontario weather control. All the elements slope away from the lakefront window view, combining form and function for year-round comfort. The client sourced their own foundation team and worked with SteelBuilt erecting crews for installation, including the R40/R38 Energy Saver insulation package—ensuring high performance through every season.',
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
      description: 'Nestled among the rolling farmland of Prince Edward County, this modern two-story steel barndominium delivers both efficiency and elegance. With clean architectural lines, large energy-efficient windows, and an open interior layout, it\'s designed for comfort in every season. Built with cold-formed steel framing, this home offers superior durability, low maintenance, and excellent insulation—perfect for rural living near Ontario\'s wine country.',
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
      description: 'This stunning barndominium project is underway in Fort Erie, Ontario. The foundation has been carefully engineered to match site conditions—showcasing the importance of soil testing and custom footing design before any build begins. The finished home will feature a full-length covered porch, vaulted ceilings, and a bright, open-concept layout ideal for lakeside living. Built with precision steel framing and high-performance insulation, it\'s designed for long-term strength and energy savings.',
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
      description: 'Two sisters set out to build their dream homes side by side in Mossley, Ontario — each a fully custom two-storey steel barndominium designed for family living. These matching builds feature tall cathedral-style great rooms, covered porches, and expansive windows that showcase rural Ontario views. Built with cold-formed steel framing, the homes are designed for longevity, energy efficiency, and low maintenance — combining classic barn style with modern comfort.',
      isVideo: false
    }
  ];

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
    <div className="min-h-screen">
      <HeadMeta 
        title="Success Stories | Cold Form Steel Canada Barndominium Projects"
        description="Browse real barndominium and steel building projects across Canada. See completed homes in Ontario, Quebec, and PEI. Factory-built steel construction, framed in 4-5 days."
        image={heroImage}
      />
      {/* Hero */}
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback 
            src={heroImage}
            alt="Cold-formed steel construction projects across Canada"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">
            Completed Projects Across Canada
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            See how Canadians are building durable, energy-efficient barndominiums and steel structures with Barndo Canada.
          </p>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-8 bg-muted border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge 
              variant="outline" 
              onClick={() => setActiveFilter('All Projects')}
              className={`cursor-pointer transition-colors ${
                activeFilter === 'All Projects' 
                  ? 'bg-[#c8694e] text-white border-[#c8694e]' 
                  : 'hover:bg-[#c8694e] hover:text-white hover:border-[#c8694e]'
              }`}
            >
              All Projects
            </Badge>
            <Badge 
              variant="outline" 
              onClick={() => setActiveFilter('Barndominium')}
              className={`cursor-pointer transition-colors ${
                activeFilter === 'Barndominium' 
                  ? 'bg-[#c8694e] text-white border-[#c8694e]' 
                  : 'hover:bg-[#c8694e] hover:text-white hover:border-[#c8694e]'
              }`}
            >
              <Home className="w-3 h-3 mr-1" /> Barndominium
            </Badge>
            <Badge 
              variant="outline" 
              onClick={() => setActiveFilter('Shop/Hybrid')}
              className={`cursor-pointer transition-colors ${
                activeFilter === 'Shop/Hybrid' 
                  ? 'bg-[#c8694e] text-white border-[#c8694e]' 
                  : 'hover:bg-[#c8694e] hover:text-white hover:border-[#c8694e]'
              }`}
            >
              <Building2 className="w-3 h-3 mr-1" /> Shop/Hybrid
            </Badge>
            <Badge 
              variant="outline" 
              onClick={() => setActiveFilter('Multi-Structure')}
              className={`cursor-pointer transition-colors ${
                activeFilter === 'Multi-Structure' 
                  ? 'bg-[#c8694e] text-white border-[#c8694e]' 
                  : 'hover:bg-[#c8694e] hover:text-white hover:border-[#c8694e]'
              }`}
            >
              <MapPin className="w-3 h-3 mr-1" /> Multi-Structure
            </Badge>
            <Badge 
              variant="outline" 
              onClick={() => setActiveFilter('DIY Kit')}
              className={`cursor-pointer transition-colors ${
                activeFilter === 'DIY Kit' 
                  ? 'bg-[#c8694e] text-white border-[#c8694e]' 
                  : 'hover:bg-[#c8694e] hover:text-white hover:border-[#c8694e]'
              }`}
            >
              <Users className="w-3 h-3 mr-1" /> DIY Kit
            </Badge>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => story.id && onNavigate('project', story.id)}
              >
                <div className="aspect-video relative">
                  <ImageWithFallback 
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 left-4 ${getTypeColor(story.type)} text-white`}>
                    {story.type}
                  </Badge>
                  {story.isVideo && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-accent ml-1" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="mb-4">{story.title}</h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{story.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      <span>{story.size}</span>
                    </div>
                    {story.dimensions && (
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span>{story.dimensions}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {story.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Detail */}
      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square md:aspect-auto">
                <img 
                  src={steMartheBarndo}
                  alt="Featured project"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <Badge className="mb-4 bg-accent text-white">Featured Project</Badge>
                <h2 className="text-3xl mb-4">
                  Steel-Built Barndo Retreat – Sainte-Marthe, Quebec
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="mb-2">The Design</h4>
                    <p className="text-muted-foreground">
                      This custom two-storey steel barndominium features a 60′ × 44′ footprint with 20′/13′ ceiling heights. Open-plan living on the main floor, lofted mezzanine with panoramic windows, and a full shop bay.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="mb-2">The Build</h4>
                    <p className="text-muted-foreground">
                      Built with insulated steel panels and engineered to withstand Quebec's seasonal extremes, this home blends barn aesthetics with contemporary comfort.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Two-storey design with lofted mezzanine</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Full shop bay for equipment or hobbies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Insulated steel panels for year-round comfort</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Perfect for year-round living or weekend get-aways</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button 
                  onClick={() => onNavigate('contact')}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Get Your Custom Quote
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">
            Ready to Start Your Own Build?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join Canadians across the country building durable, energy-efficient steel structures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-accent hover:bg-accent/90 text-white"
            >
              Request a Quote
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavigate('models')}
            >
              Explore Our Models
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}