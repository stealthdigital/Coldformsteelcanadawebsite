import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { HeadMeta } from '../HeadMeta';
import { Search, Clock, ArrowRight, DollarSign, Scale, Building, Lightbulb, Heart, Factory } from 'lucide-react';
import { useState } from 'react';

// Images from GitHub (assets branch)
const steelFrameImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Learning%20Centre/Steel%20vs.%20Wood-%20Full%20Breakdown.jpeg';
const barnInteriorImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Learning%20Centre/What%20Drives%20the%20Cost%20of%20Your%20Build.jpeg';
const johnMontgomeryPhoto = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Learning%20Centre/John%20Montgomery.jpeg';
const factoryWallPanelsImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Learning%20Centre/Wall%20panels%20engineered%20and%20assembled%20in%20our%20factory.jpeg';
const framecadImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Learning%20Centre/FrameCAD.jpeg';
const labeledPanelsImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Learning%20Centre/Each%20panel%20is%20labeled%20and%20numbered%20for%20easy%20onsite%20assembly.jpeg';
const galvanizedSteelImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Learning%20Centre/Galvanized%20steel%20features%20a%20zinc%20coating%20that%20creates%20a%20protective%20barrier%20against%20moisture%2C%20oxygen%2C%20and%20corrosion.jpeg';
const coldFormedSteelImage = 'https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/Learning%20Centre/Cold%20formed%20steel%20framing%20is%20engineered%20to%20last%20for%20decades%20in%20Canadian%20climates.jpeg';

interface LearningCenterProps {
  onNavigate: (page: string, articleData?: any) => void;
}

export function LearningCenter({ onNavigate }: LearningCenterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    {
      title: 'Cost & Financing',
      icon: DollarSign,
      color: 'text-terracotta',
      bgColor: 'bg-terracotta/10',
      articles: [
        {
          title: 'What Drives the Cost of Your Build?',
          readTime: '12 min',
          description: 'Understanding materials, labor, and site preparation'
        },
        {
          title: 'Financing Options in 24 Hours',
          readTime: '4 min',
          description: 'How to get approved fast for steel home construction'
        }
      ]
    },
    {
      title: 'Comparisons',
      icon: Scale,
      color: 'text-terracotta',
      bgColor: 'bg-terracotta/10',
      articles: [
        {
          title: 'Steel vs. Wood: Full Breakdown',
          readTime: '10 min',
          description: 'Honest comparison of costs, durability, and performance'
        },
        {
          title: 'Cold-Form Steel vs. Traditional Steel Framing',
          readTime: '12 min',
          description: 'A clear, real-world guide for anyone building a home or ADU'
        }
      ]
    },
    {
      title: 'Process & Permits',
      icon: Building,
      color: 'text-sage',
      bgColor: 'bg-sage/10',
      articles: [
        {
          title: 'How the 5 Day Build Works',
          readTime: '8 min',
          description: 'Step-by-step walkthrough of the assembly process'
        },
        {
          title: 'How Long Does It Take to Build and Install a Cold Form Steel ADU?',
          readTime: '9 min',
          description: 'Complete timeline from factory to installed shell in 1-2 weeks'
        },
        {
          title: 'Do I Need a Permit?',
          readTime: '6 min',
          description: 'Understanding municipal requirements across Canada'
        }
      ]
    },
    {
      title: 'Factory Tour',
      icon: Factory,
      color: 'text-terracotta',
      bgColor: 'bg-terracotta/10',
      articles: [
        {
          title: 'Inside the Factory: Why Cold Form Steel Homes Go Up in Days, Not Months',
          readTime: '8 min',
          description: 'Factory tour with John Montgomery showing precision engineering and rapid assembly'
        },
        {
          title: 'Why FrameCAD Matters for Your Build',
          readTime: '9 min',
          description: 'The system behind the speed, accuracy, and consistency of cold formed steel homes'
        }
      ]
    },
    {
      title: 'Problems & Concerns',
      icon: Lightbulb,
      color: 'text-sage',
      bgColor: 'bg-sage/10',
      articles: [
        {
          title: '5 Honest Downsides of Steel-Framed Homes (and How We Solve Them)',
          readTime: '5 min',
          description: 'Real complaints from Reddit and forums, and our solutions'
        },
        {
          title: 'Does Steel Framing Rust?',
          readTime: '6 min',
          description: 'What homeowners need to know about cold formed steel in Canadian climates'
        },
        {
          title: 'Reddit Myths vs. Reality',
          readTime: '8 min',
          description: 'What people get wrong about steel framing and the truth homeowners should know'
        }
      ]
    }
  ];

  const featuredArticles = [
    {
      title: 'Steel vs. Wood: The Complete 2025 Comparison',
      excerpt: 'Everything you need to know before choosing your building material. Real costs, timelines, and performance data from Canadian builds.',
      readTime: '10 min',
      category: 'Comparisons',
      image: steelFrameImage
    },
    {
      title: 'What Drives the Cost of Your Build?',
      excerpt: 'Understanding materials, labor, and site preparation.',
      readTime: '12 min',
      category: 'Cost & Financing',
      image: barnInteriorImage
    }
  ];

  // Filter categories and articles based on search query
  const filteredCategories = searchQuery
    ? categories
        .map(category => ({
          ...category,
          articles: category.articles.filter(article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            category.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        }))
        .filter(category => category.articles.length > 0)
    : categories;

  const filteredFeaturedArticles = searchQuery
    ? featuredArticles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : featuredArticles;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeadMeta 
        title="Learning Centre | Cold Form Steel Canada Educational Resources"
        description="Expert guidance on cold-form steel construction. Learn about costs, timelines, permits, steel vs. wood comparison, and building processes. Honest, detailed information for homeowners."
        image={steelFrameImage}
      />
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-6 font-bold tracking-tight">
            Learning Centre
          </h1>
          <p className="text-xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
            Expert guidance and honest answers to help you make informed decisions about cold-form steel construction
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 font-bold text-foreground">Featured Articles</h2>
          
          {filteredFeaturedArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredFeaturedArticles.map((article, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white"
                  onClick={() => {
                    // Check for specific articles to navigate to dedicated pages
                    if (article.title === 'Steel vs. Wood: The Complete 2025 Comparison') {
                      onNavigate('steel-vs-wood');
                    } else if (article.title === 'What Drives the Cost of Your Build?') {
                      onNavigate('cost-drivers');
                    } else {
                      onNavigate('article', article);
                    }
                  }}
                >
                  <div className="h-64 bg-muted relative">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-terracotta text-white border-0 font-bold uppercase tracking-wider text-[10px] px-3">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 font-medium">
                      <Clock className="w-4 h-4 text-terracotta" />
                      <span>{article.readTime} read</span>
                    </div>
                    <h3 className="text-2xl mb-4 font-bold text-foreground leading-tight">{article.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="p-0 text-terracotta hover:text-terracotta/80 font-bold text-lg flex items-center">
                      Read More <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : searchQuery ? (
            <p className="text-center text-muted-foreground py-8 font-medium">No featured articles match your search.</p>
          ) : null}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-16 text-center font-bold text-foreground">Browse by Topic</h2>
          
          {filteredCategories.length > 0 ? (
            <div className="space-y-16">
              {filteredCategories.map((category, catIndex) => {
                const Icon = category.icon;
                return (
                  <div key={catIndex}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-14 h-14 ${category.bgColor} rounded-xl flex items-center justify-center shadow-sm`}>
                        <Icon className={`w-7 h-7 ${category.color}`} />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground tracking-tight">{category.title}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                      {category.articles.map((article, articleIndex) => (
                        <Card 
                          key={articleIndex}
                          className="p-8 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-muted/50 bg-white group"
                          onClick={() => {
                            // Check which specific article to navigate to
                            if (article.title === 'Steel vs. Wood: Full Breakdown') {
                              onNavigate('steel-vs-wood');
                            } else if (article.title === 'Cold-Form Steel vs. Traditional Steel Framing') {
                              onNavigate('cfs-vs-traditional-steel');
                            } else if (article.title === 'Inside the Factory: Why Cold Form Steel Homes Go Up in Days, Not Months') {
                              onNavigate('factory-tour');
                            } else if (article.title === 'Why FrameCAD Matters for Your Build') {
                              onNavigate('framecad');
                            } else if (article.title === 'How the 5 Day Build Works') {
                              onNavigate('five-day-build');
                            } else if (article.title === 'How Long Does It Take to Build and Install a Cold Form Steel ADU?') {
                              onNavigate('adu-timeline');
                            } else if (article.title === 'Do I Need a Permit?') {
                              onNavigate('permit');
                            } else if (article.title === '5 Honest Downsides of Steel-Framed Homes (and How We Solve Them)') {
                              onNavigate('steel-downsides');
                            } else if (article.title === 'What Drives the Cost of Your Build?') {
                              onNavigate('cost-drivers');
                            } else if (article.title === 'Financing Options in 24 Hours') {
                              onNavigate('financing');
                            } else if (article.title === 'Does Steel Framing Rust?') {
                              onNavigate('steel-rust');
                            } else if (article.title === 'Reddit Myths vs. Reality') {
                              onNavigate('reddit-myths');
                            } else {
                              onNavigate('article', { ...article, category: category.title });
                            }
                          }}
                        >
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 font-medium">
                            <Clock className="w-4 h-4 text-terracotta" />
                            <span>{article.readTime} read</span>
                          </div>
                          <h4 className="text-xl mb-3 font-bold text-foreground leading-snug group-hover:text-terracotta transition-colors">{article.title}</h4>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {article.description}
                          </p>
                          <div className="p-0 text-terracotta font-bold hover:text-terracotta/80 flex items-center">
                            Read Article <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : searchQuery ? (
            <p className="text-center text-muted-foreground py-8 font-medium">No categories match your search.</p>
          ) : null}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-terracotta/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6 font-bold text-foreground tracking-tight">
            Still have questions?
          </h2>
          <p className="text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Get personalized answers from our team of experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-terracotta hover:bg-terracotta/90 text-white font-bold h-16 px-10 text-xl border-0 shadow-lg transition-transform hover:scale-105"
              onClick={() => onNavigate('contact')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}