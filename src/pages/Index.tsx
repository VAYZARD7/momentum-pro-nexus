import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Award, BookOpen, Target, Shield, UserCheck, Settings, BarChart3, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: TrendingUp,
      title: t('expertTraining'),
      description: t('expertTrainingDesc')
    },
    {
      icon: Target,
      title: t('practicalApproach'),
      description: t('practicalApproachDesc')
    },
    {
      icon: Award,
      title: t('certification'),
      description: t('certificationDesc')
    }
  ];

  const stats = [
    { number: '10,000+', label: t('studentsTrainedLabel') },
    { number: '95%', label: t('successRateLabel') },
    { number: '50+', label: t('expertInstructorsLabel') },
    { number: '24/7', label: t('supportAvailableLabel') }
  ];

  const dashboards = [
    {
      icon: BookOpen,
      title: 'Student Dashboard',
      description: t('dashboardDescription'),
      path: '/student-dashboard',
      variant: 'default' as const
    },
    {
      icon: Users,
      title: t('teacherDashboard'),
      description: t('dashboardDescription'),
      path: '/teacher-dashboard',
      variant: 'secondary' as const
    },
    {
      icon: BarChart3,
      title: t('curatorDashboard'),
      description: 'Teacher assistant dashboard for group management',
      path: '/curator-dashboard',
      variant: 'outline' as const
    },
    {
      icon: Settings,
      title: t('adminDashboard'),
      description: t('dashboardDescription'),
      path: '/admin-dashboard',
      variant: 'destructive' as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                {t('heroTitle')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
                {t('heroSubtitle')}
              </p>
              <div className="space-x-4 animate-slide-up">
                <Link to="/register">
                  <Button variant="hero" size="xl">
                    {t('heroButton')}
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="xl">
                    {t('learnMore')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/701e2577-a558-403d-8c6e-431a07b48399.png" 
                  alt="Momentum Trading Pro" 
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain animate-pulse-glow"
                />
                <div className="absolute inset-0 bg-gradient-trading opacity-20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('features')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('discoverFeatures')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-trading transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-trading rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master trading with our comprehensive curriculum designed by industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Basic Trading Fundamentals", level: "Beginner", duration: "4 weeks", students: "2,500+", rating: 4.9 },
              { title: "Advanced Technical Analysis", level: "Advanced", duration: "8 weeks", students: "1,200+", rating: 4.8 },
              { title: "Risk Management Mastery", level: "Intermediate", duration: "6 weeks", students: "1,800+", rating: 4.9 }
            ].map((course, index) => (
              <Card key={index} className="hover:shadow-trading transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Students:</span>
                      <span className="font-medium">{course.students}</span>
                    </div>
                  </div>
                  <Link to="/courses">
                    <Button className="w-full">View Course</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button variant="outline" size="lg">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real success stories from traders who transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Professional Trader",
                content: "The risk management course completely changed how I approach trading. My win rate improved by 40% in just 3 months.",
                rating: 5
              },
              {
                name: "Michael Rodriguez",
                role: "Portfolio Manager",
                content: "Outstanding curriculum and mentorship. The real-world applications made all the difference in my trading career.",
                rating: 5
              },
              {
                name: "Emma Thompson",
                role: "Day Trader",
                content: "From complete beginner to profitable trader in 6 months. The step-by-step approach is incredibly effective.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-trading transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Your Learning Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow our structured path from beginner to professional trader
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: 1, title: "Foundation", description: "Master the basics of trading, market analysis, and financial instruments", duration: "4-6 weeks" },
                { step: 2, title: "Technical Analysis", description: "Learn chart patterns, indicators, and advanced analysis techniques", duration: "6-8 weeks" },
                { step: 3, title: "Risk Management", description: "Develop strategies to protect capital and manage trading psychology", duration: "4-6 weeks" },
                { step: 4, title: "Advanced Strategies", description: "Implement professional trading strategies and portfolio management", duration: "8-12 weeks" },
                { step: 5, title: "Live Trading", description: "Apply your skills with real market conditions and mentorship", duration: "Ongoing" }
              ].map((phase, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-trading rounded-full flex items-center justify-center text-white font-bold">
                    {phase.step}
                  </div>
                  <div className="flex-1 bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{phase.title}</h3>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Access Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('roleBasedAccess')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('selectRoleAccess')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {dashboards.map((dashboard, index) => (
              <Card key={index} className="text-center hover:shadow-trading transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-trading rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <dashboard.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{dashboard.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {dashboard.description}
                  </CardDescription>
                  <Link to={dashboard.path}>
                    <Button variant={dashboard.variant} className="w-full">
                      {t('accessDashboard')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Tools & Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Professional Trading Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access institutional-grade tools and resources for serious traders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Real-Time Market Data", description: "Live price feeds, volume analysis, and market depth visualization", icon: TrendingUp },
              { title: "Advanced Charting", description: "Professional charting tools with 100+ technical indicators", icon: BarChart3 },
              { title: "Risk Calculator", description: "Position sizing and risk management calculators for optimal trades", icon: Shield },
              { title: "Trading Simulator", description: "Practice with virtual money before risking real capital", icon: Target },
              { title: "Portfolio Analytics", description: "Track performance, analyze returns, and optimize your portfolio", icon: Award },
              { title: "Community Forum", description: "Connect with fellow traders and share market insights", icon: Users }
            ].map((tool, index) => (
              <Card key={index} className="hover:shadow-trading transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-trading rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {tool.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Daily Market Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay ahead with expert market analysis and trading opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Today's Market Outlook
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>S&P 500</span>
                  <span className="text-green-500 font-medium">+1.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>NASDAQ</span>
                  <span className="text-green-500 font-medium">+0.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>EUR/USD</span>
                  <span className="text-red-500 font-medium">-0.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Bitcoin</span>
                  <span className="text-green-500 font-medium">+2.1%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Expert Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Markets are showing strong bullish momentum with tech stocks leading the rally. 
                  Key support levels remain intact, suggesting continued upside potential."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-trading rounded-full"></div>
                  <div>
                    <p className="font-medium">Alex Thompson</p>
                    <p className="text-sm text-muted-foreground">Senior Market Analyst</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              {t('whyChooseUs')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Advanced Risk Management
                </h3>
                <p className="text-muted-foreground">
                  Learn professional risk management techniques used by hedge funds and institutional traders to protect your capital.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <UserCheck className="h-6 w-6 text-primary" />
                  1-on-1 Mentorship
                </h3>
                <p className="text-muted-foreground">
                  Get personalized guidance from experienced traders who have managed millions in assets and understand real market conditions.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Comprehensive Curriculum
                </h3>
                <p className="text-muted-foreground">
                  From basic concepts to advanced strategies, our curriculum covers everything you need to become a successful trader.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Trader Community
                </h3>
                <p className="text-muted-foreground">
                  Join a network of successful traders, share strategies, and learn from each other's experiences in our private community.
                </p>
              </div>
            </div>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More About Our Approach
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-trading">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t('readyToStart')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('joinThousands')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="secondary" size="xl" className="bg-white text-primary hover:bg-white/90">
                {t('getStarted')}
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                {t('viewCourses')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
