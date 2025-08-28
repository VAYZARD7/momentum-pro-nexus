import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, DollarSign, Users, Star, Award, BookOpen, TrendingUp, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import basicTradingImage from '@/assets/course-basic-trading.jpg';
import riskManagementImage from '@/assets/course-risk-management.jpg';
import technicalAnalysisImage from '@/assets/course-technical-analysis.jpg';
import portfolioManagementImage from '@/assets/course-portfolio-management.jpg';
import advancedStrategiesImage from '@/assets/course-advanced-strategies.jpg';
import algorithmicTradingImage from '@/assets/course-algorithmic-trading.jpg';
import institutionalTradingImage from '@/assets/course-institutional-trading.jpg';
import marketMakingImage from '@/assets/course-market-making.jpg';
import tradingPsychologyImage from '@/assets/course-trading-psychology.jpg';

const Courses = () => {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const coursesData = {
    beginners: [
      {
        id: 'basic-trading',
        title: t('basicTradingTitle'),
        description: t('basicTradingDesc'),
        duration: '4 weeks',
        price: '$199',
        students: '2,543',
        rating: 4.8,
        level: 'Beginner',
        image: basicTradingImage,
        features: ['Live Sessions', 'Certificate', 'Community Access']
      },
      {
        id: 'risk-management',
        title: t('riskManagementTitle'),
        description: t('riskManagementCourseDesc'),
        duration: '3 weeks',
        price: '$149',
        students: '1,892',
        rating: 4.9,
        level: 'Beginner',
        image: riskManagementImage,
        features: ['Risk Calculator', 'Personal Mentor', 'Trading Tools']
      },
      {
        id: 'technical-analysis',
        title: t('technicalAnalysisTitle'),
        description: t('technicalAnalysisDesc'),
        duration: '6 weeks',
        price: '$299',
        students: '3,201',
        rating: 4.7,
        level: 'Beginner',
        image: technicalAnalysisImage,
        features: ['Chart Patterns', 'Indicators', 'Live Analysis']
      }
    ],
    middle: [
      {
        id: 'portfolio-management',
        title: t('portfolioManagementTitle'),
        description: t('portfolioManagementDesc'),
        duration: '5 weeks',
        price: '$399',
        students: '1,456',
        rating: 4.8,
        level: 'Intermediate',
        image: portfolioManagementImage,
        features: ['Portfolio Tools', 'Risk Analytics', 'Rebalancing']
      },
      {
        id: 'advanced-strategies',
        title: t('advancedStrategiesTitle'),
        description: t('advancedStrategiesDesc'),
        duration: '8 weeks',
        price: '$599',
        students: '987',
        rating: 4.9,
        level: 'Intermediate',
        image: advancedStrategiesImage,
        features: ['Strategy Builder', 'Backtesting', 'Optimization']
      },
      {
        id: 'algorithmic-trading',
        title: t('algorithmicTradingTitle'),
        description: t('algorithmicTradingDesc'),
        duration: '10 weeks',
        price: '$799',
        students: '765',
        rating: 5.0,
        level: 'Intermediate',
        image: algorithmicTradingImage,
        features: ['Python/R', 'API Access', 'Bot Development']
      }
    ],
    high: [
      {
        id: 'institutional-trading',
        title: t('institutionalTradingTitle'),
        description: t('institutionalTradingDesc'),
        duration: '12 weeks',
        price: '$1299',
        students: '432',
        rating: 5.0,
        level: 'Advanced',
        image: institutionalTradingImage,
        features: ['Institutional Tools', 'Dark Pools', 'Order Flow']
      },
      {
        id: 'market-making',
        title: t('marketMakingTitle'),
        description: t('marketMakingDesc'),
        duration: '8 weeks',
        price: '$999',
        students: '321',
        rating: 4.9,
        level: 'Advanced',
        image: marketMakingImage,
        features: ['Market Microstructure', 'Liquidity', 'Spreads']
      },
      {
        id: 'trading-psychology',
        title: t('tradingPsychologyTitle'),
        description: t('tradingPsychologyDesc'),
        duration: '6 weeks',
        price: '$699',
        students: '1,123',
        rating: 4.8,
        level: 'Advanced',
        image: tradingPsychologyImage,
        features: ['Mental Training', 'Discipline', 'Emotion Control']
      }
    ]
  };

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Beginner': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Intermediate': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Advanced': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 animate-fade-in">
                <Award className="h-3 w-3 mr-1" />
                Professional Trading Education
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in">
                {t('coursesTitle')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in animation-delay-200">
                Master the markets with expert-led courses designed for every skill level
              </p>
              
              {/* Stats Bar */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in animation-delay-400">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold">10,000+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-lg font-semibold">4.8 Average Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold">50+ Courses</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="beginners" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-1 bg-muted/50">
                  <TabsTrigger value="beginners" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    <Target className="h-4 w-4 mr-2" />
                    {t('beginnersTab')}
                  </TabsTrigger>
                  <TabsTrigger value="middle" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    {t('middleSchoolTab')}
                  </TabsTrigger>
                  <TabsTrigger value="high" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    <Award className="h-4 w-4 mr-2" />
                    {t('highSchoolTab')}
                  </TabsTrigger>
                </TabsList>

                {['beginners', 'middle', 'high'].map((level) => (
                  <TabsContent key={level} value={level}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {coursesData[level as keyof typeof coursesData].map((course) => (
                        <Card 
                          key={course.id} 
                          className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-muted/50"
                          onMouseEnter={() => setHoveredCard(course.id)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          {/* Image Container */}
                          <div className="relative aspect-video overflow-hidden">
                            <img 
                              src={course.image} 
                              alt={course.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Overlay Content */}
                            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                              <div className="flex flex-wrap gap-2">
                                {course.features.map((feature, idx) => (
                                  <Badge key={idx} variant="secondary" className="bg-white/90 text-foreground">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            {/* Level Badge */}
                            <Badge className={`absolute top-4 right-4 ${getLevelColor(course.level)}`}>
                              {course.level}
                            </Badge>
                          </div>
                          
                          <CardHeader>
                            <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                              {course.title}
                            </CardTitle>
                            <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                          </CardHeader>
                          
                          <CardContent className="space-y-4">
                            {/* Stats Row */}
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center text-muted-foreground">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {course.duration}
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <Users className="w-4 h-4 mr-1" />
                                  {course.students}
                                </div>
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                                <span className="font-semibold">{course.rating}</span>
                              </div>
                            </div>
                            
                            {/* Price and CTA */}
                            <div className="flex items-center justify-between">
                              <div className="text-2xl font-bold text-primary">
                                {course.price}
                              </div>
                              <Link to={`/course/${course.id}`}>
                                <Button 
                                  variant={hoveredCard === course.id ? 'default' : 'outline'}
                                  className="transition-all duration-300"
                                >
                                  {t('enrollNow')}
                                </Button>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Can't Decide Which Course to Take?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Take our quick assessment to find the perfect course matching your trading goals and experience level.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/register">
                    <Button size="lg" variant="hero" className="shadow-lg">
                      Take Assessment
                    </Button>
                  </Link>
                  <Link to="/contacts">
                    <Button size="lg" variant="outline" className="shadow-lg">
                      Talk to Advisor
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;