import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { HeadMeta } from '../HeadMeta';
import { Search, Clock, ArrowRight, DollarSign, Scale, Building, Lightbulb, Heart, Factory } from 'lucide-react';
import { useState } from 'react';
import steelFrameImage from 'figma:asset/72fa0d47ef13aed1d663ccbb6c6149c415652f77.png';
import barnInteriorImage from 'figma:asset/f2a4a5c29696696e91145cfa2d444ba6c5edf5a5.png';

interface LearningCenterProps {
  onNavigate: (page: string, articleData?: any) => void;
}

export function LearningCenter({ onNavigate }: LearningCenterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    {
      title: 'Cost & Financing',
      icon: DollarSign,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
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
      color: 'text-primary',
      bgColor: 'bg-primary/10',
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
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
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
      color: 'text-sage',
      bgColor: 'bg-sage/10',
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
      color: 'text-accent',
      bgColor: 'bg-accent/10',
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
    <div className="min-h-screen">
      <HeadMeta 
        title="Learning Centre | Cold Form Steel Canada Educational Resources"
        description="Expert guidance on cold-form steel construction. Learn about costs, timelines, permits, steel vs. wood comparison, and building processes. Honest, detailed information for homeowners."
        image={steelFrameImage}
      />
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">
            We believe an informed buyer is the best customer.
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Everything you need to make an informed decision about cold-form steel construction
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8">Featured Articles</h2>
          
          {filteredFeaturedArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredFeaturedArticles.map((article, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="h-64 bg-muted relative">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent text-white">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} read</span>
                    </div>
                    <h3 className="mb-3">{article.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {article.excerpt}
                    </p>
                    <Button 
                      variant="link" 
                      className="p-0 text-[#c8694e] hover:text-[#b5593d]"
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
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : searchQuery ? (
            <p className="text-center text-muted-foreground py-8">No featured articles match your search.</p>
          ) : null}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center">Browse by Topic</h2>
          
          {filteredCategories.length > 0 ? (
            <div className="space-y-12">
              {filteredCategories.map((category, catIndex) => {
                const Icon = category.icon;
                return (
                  <div key={catIndex}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h3 className="text-2xl">{category.title}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      {category.articles.map((article, articleIndex) => (
                        <Card 
                          key={articleIndex}
                          className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                        >
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime} read</span>
                          </div>
                          <h4 className="mb-2">{article.title}</h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            {article.description}
                          </p>
                          <Button 
                            variant="link" 
                            className="p-0 text-accent"
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
                            Read Article <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : searchQuery ? (
            <p className="text-center text-muted-foreground py-8">No categories match your search.</p>
          ) : null}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get personalized answers from our team of experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('contact')}
            >
              Get Started
            </Button>
            {/* Removed Calculate My Cost button */}
          </div>
        </div>
      </section>
    </div>
  );
}