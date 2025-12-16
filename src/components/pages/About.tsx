import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Award, Shield, Users, MapPin, CheckCircle, Leaf, DollarSign, Clock, Zap, HeartHandshake, Home } from 'lucide-react';
import johnImage from 'figma:asset/f7589f12c4db2294f1600532a47c3b3c990ffc90.png';
import marcImage from 'figma:asset/cbd49745b46180bb74688c754b1d8afe7e13ec57.png';
import framecadMachineImage from 'figma:asset/dc9de3fb0501c6ceb5e552b7b552685d85966ce4.png';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const timeline = [
    { year: '2018', event: 'Founded SteelBuilt Group', description: 'Started with commercial steel structures' },
    { year: '2020', event: 'FrameCAD Partnership', description: 'Became certified FrameCAD manufacturer' },
    { year: '2022', event: 'First Residential Project', description: 'Launched pilot program with 10 homes' },
    { year: '2024', event: '500+ Homes Built', description: 'Expanded across Ontario' },
    { year: '2025', event: 'National Expansion', description: 'Opening facilities across Canada' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'We tell the truth about pricing, timelines, materials, and the full build process. No surprises, no hidden steps, and no "contact us for a quote." Clear information builds trust, and trust builds better homes.'
    },
    {
      icon: Zap,
      title: 'Quality Through Innovation',
      description: 'Cold form steel allows us to build with accuracy, safety, and speed that wood construction cannot match. Every panel is engineered in a controlled environment to deliver a straighter, stronger, non combustible home that stands the test of time.'
    },
    {
      icon: DollarSign,
      title: 'Affordability',
      description: 'Canadians deserve housing options that do not break their budget. By removing unnecessary middlemen, avoiding onsite delays, and leveraging factory manufacturing, we reduce costs without reducing quality.'
    },
    {
      icon: Users,
      title: 'Customer Confidence',
      description: 'Most homeowners are not builders, and they should not have to be. We guide people through permits, engineering, installation, and financing. Our goal is to make the experience simple and predictable so customers feel in control from day one.'
    },
    {
      icon: Clock,
      title: 'Speed Without Compromise',
      description: 'Traditional construction takes months and is often delayed by weather or labor shortages. Our homes arrive ready for fast assembly, cutting onsite time to a few days while maintaining rigorous engineering standards.'
    },
    {
      icon: MapPin,
      title: 'Made in Canada',
      description: 'We are committed to building with Canadian materials, Canadian labor, and Canadian expertise. Supporting local manufacturing strengthens our communities and ensures every home meets the needs of our climate.'
    }
  ];

  const team = [
    {
      name: 'John Montgomery',
      role: 'Founder & CEO',
      bio: 'Former arena builder turned residential innovator. 25+ years in steel construction.',
      image: johnImage
    },
    {
      name: 'Marc Reynolds',
      role: 'Project Planning Construction Manager',
      bio: 'Expert in construction planning and project coordination, ensuring seamless execution from design to delivery.',
      image: marcImage
    },
    {
      name: 'FrameCAD',
      role: 'Technology Partner',
      bio: 'FrameCAD is the world-leader of steel frame building innovation.',
      image: framecadMachineImage
    }
  ];

  const certifications = [
    { 
      name: 'Building Code Compliance', 
      description: 'Meets full residential code for structural, electrical, plumbing, and insulation requirements'
    },
    { 
      name: 'FrameCAD Engineering', 
      description: 'Globally recognized cold-form steel system with computer-generated accuracy and certified connections'
    },
    { 
      name: 'Engineer of Record Approval', 
      description: 'Licensed P.Eng. structural sign-off for every project with location-specific load analysis'
    },
    { 
      name: 'Non-Combustible Certified', 
      description: 'Steel frame with rockwool insulation creates fully non-combustible building assembly'
    },
    { 
      name: 'Factory-Built Quality', 
      description: 'Controlled indoor manufacturing eliminates weather delays and moisture concerns'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 z-10"></div>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1650211803854-e7b2e0ce86f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdGVlbCUyMGhvbWUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYwMTAyOTYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Steel construction"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">
            Built on Experience. Driven by Innovation.
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From hockey arenas to homes — bringing 25 years of steel construction expertise to residential building.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Housing in Canada is changing, and so are the people building it.
              </p>
              <p>
                SteelBuilt and Barno Canada were created from a simple belief: homebuilding should be faster, safer, and more affordable for everyone, without the stress, delays, and surprises that come with traditional construction.
              </p>
              <p>
                For years, John and the team built large-scale steel projects across the country: arenas, hangars, commercial buildings, and municipal infrastructure. But something kept coming up in every conversation. Homeowners and communities were desperate for a better way to build homes, cottages, ADUs, and backyard suites. They needed transparency. They needed predictable pricing. They needed real timelines. And they needed a partner they could trust.
              </p>
              <p>
                The breakthrough came with cold form steel and the state-of-the-art manufacturing technology behind it. Panelized homes that are computer precise, non combustible, and produced in a warm, dry Canadian factory. No warping, no weather delays, no guesswork. Walls tilt up in days, not months. Families step into homes that are straighter, stronger, and built to last a lifetime.
              </p>
              <p>
                From there, the mission became clear: Bring factory built, code compliant housing to Canadians at a price they can actually afford, and make the process simple enough that anyone can do it.
              </p>
              <p>
                Today, SteelBuilt and Barno Canada offer ADUs, tiny homes, and full size houses designed around real life needs: multigenerational living, rental income, aging parents, working from home, and municipal affordable housing programs. Every model is engineered for Canadian climates, built locally with Canadian materials, and supported by a team that handles the parts homeowners worry about most: permitting, engineering, installation, and financing.
              </p>
              <p>
                Most importantly, we have built this company around transparency. Real pricing. Real timelines. Real videos of homes being assembled. Real answers to the questions other builders avoid.
              </p>
              <p>
                When people understand the process and feel confident in the numbers, they move forward and they enjoy the experience.
              </p>
              <p className="text-foreground italic">
                This is our story. A Canadian company creating a better way to build, one home at a time, engineered for speed, designed for comfort, and accessible to the families and communities who need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To make high quality housing in Canada faster to build, easier to understand, and truly affordable. 
              We do this by combining advanced cold form steel technology with transparent pricing, factory precision, 
              and a process that removes the stress and uncertainty of traditional construction. Our mission is to help 
              homeowners, families, and municipalities create safe, lasting homes with confidence.
            </p>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl md:text-3xl text-center mb-12">Our Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h4 className="mb-3">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Made in Canada Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Made in Canada</h2>
            <p className="text-xl text-muted-foreground">
              Manufacturing across Ontario, shipping nationwide
            </p>
          </div>
          
          <Card className="p-12 bg-muted">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="mb-2">Hamilton</h3>
                <p className="text-muted-foreground">Primary Manufacturing Facility</p>
              </div>
              <div>
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="mb-2">Barrie</h3>
                <p className="text-muted-foreground">Northern Ontario Distribution</p>
              </div>
              <div>
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="mb-2">Brampton</h3>
                <p className="text-muted-foreground">GTA Service Center</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Team</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square">
                  <ImageWithFallback 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-accent mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Warranties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h2 className="text-3xl mb-8">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="p-6 flex items-start gap-4">
                    <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="mb-1">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Warranties */}
            <div>
              <h2 className="text-3xl mb-8">Warranties</h2>
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="mb-2">Manufacturer's Workmanship Warranty</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive coverage on construction quality and assembly
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="mb-2">35-Year Cladding & Roofing Warranty</h4>
                      <p className="text-sm text-muted-foreground">
                        Extended warranty from cladding suppliers on exterior materials
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="mb-2">Galvanized Steel Framing</h4>
                      <p className="text-sm text-muted-foreground">
                        Corrosion-resistant steel outlasts the building—no expiration needed
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="mb-2">Factory Quality Assurance</h4>
                      <p className="text-sm text-muted-foreground">
                        Built indoors in controlled conditions—no weather damage or moisture issues
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">
            Ready to Build With Us?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss your project and show you what's possible
          </p>
          <Button 
            size="lg"
            onClick={() => onNavigate('contact')}
            className="bg-[#c8694e] text-white hover:bg-[#b5593d]"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}