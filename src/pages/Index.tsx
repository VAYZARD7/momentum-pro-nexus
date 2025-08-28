import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Award, BookOpen, Target, Shield, UserCheck, Settings, BarChart3, Star, ChevronRight, ArrowRight, Sparkles, Clock, CheckCircle2, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroTradingImage from '@/assets/hero-trading.jpg';
import courseBasicTrading from '@/assets/course-basic-trading.jpg';
import courseTechnicalAnalysis from '@/assets/course-technical-analysis.jpg';
import courseRiskManagement from '@/assets/course-risk-management.jpg';

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
      
      {/* Hero Section - Improved with F-pattern and better visual hierarchy */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        {/* Animated background mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Content - Following F-pattern for better readability */}
            <div className="lg:w-1/2 space-y-8">
              {/* Trust indicator */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Trusted by 10,000+ Traders</span>
              </div>
              
              {/* Main headline with better contrast */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight animate-fade-in">
                  <span className="block text-foreground">Master the Art of</span>
                  <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Professional Trading
                  </span>
                </h1>
                
                {/* Supporting text with optimal line length */}
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl animate-slide-up">
                  {t('heroSubtitle')}
                </p>
              </div>
              
              {/* CTA Buttons - Fitts's Law: Larger touch targets */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                <Link to="/register">
                  <Button 
                    size="lg" 
                    className="min-w-[200px] h-14 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:shadow-intense transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <span>{t('heroButton')}</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="min-w-[200px] h-14 text-base font-semibold border-2 hover:bg-primary/5 hover:border-primary transition-all duration-300"
                  >
                    <span>{t('learnMore')}</span>
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              
              {/* Social proof indicators */}
              <div className="flex items-center gap-8 pt-4 animate-fade-in">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-background" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">4.9/5 from 2,000+ reviews</p>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Enhanced with depth and animation */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Floating elements for depth */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl animate-pulse delay-700" />
                
                {/* Main visual container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-3xl animate-pulse-glow" />
                  <div className="relative overflow-hidden rounded-3xl border border-primary/10 shadow-2xl">
                    <img 
                      src={heroTradingImage} 
                      alt="Professional Trading Platform" 
                      className="w-full h-auto object-cover animate-fade-in"
                    />
                    
                    {/* Floating stats cards */}
                    <div className="absolute -top-4 -right-4 bg-card/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-primary/10 animate-fade-in">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-bold text-green-500">+24.8%</span>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 bg-card/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-primary/10 animate-fade-in delay-300">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-sm font-bold">Live Trading</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Using Progressive Disclosure */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Number with animated counter effect */}
                  <div className="text-3xl lg:text-5xl font-bold mb-2 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  
                  {/* Label with better typography */}
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Subtle icon based on index */}
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    {index === 0 && <Users className="w-8 h-8" />}
                    {index === 1 && <TrendingUp className="w-8 h-8" />}
                    {index === 2 && <Award className="w-8 h-8" />}
                    {index === 3 && <Clock className="w-8 h-8" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Gestalt Principle: Proximity & Similarity */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          {/* Section header with better visual hierarchy */}
          <div className="text-center mb-20 space-y-4">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-3 h-3 mr-1" />
              Core Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {t('features')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('discoverFeatures')}
            </p>
          </div>

          {/* Feature cards with better interaction design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="h-full relative bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Progress indicator */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
                  
                  <CardHeader className="relative z-10 text-center space-y-4">
                    {/* Icon with better visual feedback */}
                    <div className="relative mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300">
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 text-center">
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    
                    {/* Interactive element for engagement */}
                    <div className="mt-4 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">Learn more</span>
                      <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview Section - Card layout with Hick's Law consideration */}
      <section className="py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="mb-4">
              <BookOpen className="w-3 h-3 mr-1" />
              Popular Courses
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Featured Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start with our most popular courses, carefully designed for maximum learning impact
            </p>
          </div>

          {/* Course cards with improved information hierarchy */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              { 
                title: "Basic Trading Fundamentals", 
                level: "Beginner", 
                duration: "4 weeks", 
                students: "2,500+", 
                rating: 4.9,
                price: "$299",
                discount: "20% OFF",
                modules: 12,
                image: courseBasicTrading
              },
              { 
                title: "Advanced Technical Analysis", 
                level: "Advanced", 
                duration: "8 weeks", 
                students: "1,200+", 
                rating: 4.8,
                price: "$599",
                discount: null,
                modules: 24,
                image: courseTechnicalAnalysis
              },
              { 
                title: "Risk Management Mastery", 
                level: "Intermediate", 
                duration: "6 weeks", 
                students: "1,800+", 
                rating: 4.9,
                price: "$399",
                discount: "15% OFF",
                modules: 18,
                image: courseRiskManagement
              }
            ].map((course, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full relative bg-card/80 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                  {/* Discount badge */}
                  {course.discount && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-red-500 text-white border-red-500">
                        {course.discount}
                      </Badge>
                    </div>
                  )}
                  
                  {/* Course level indicator bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    course.level === 'Beginner' ? 'from-green-500 to-green-400' :
                    course.level === 'Intermediate' ? 'from-yellow-500 to-yellow-400' :
                    'from-red-500 to-red-400'
                  }`} />
                  
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardHeader className="space-y-4">
                    <div className="flex justify-between items-start">
                      <Badge variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Intermediate' ? 'outline' : 'destructive'}>
                        {course.level}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-bold">{course.rating}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Course metrics grid */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.modules} modules</span>
                      </div>
                      <div className="flex items-center gap-2 font-bold text-primary">
                        <span>{course.price}</span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Link to="/courses" className="block">
                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <span>View Details</span>
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* View all CTA */}
          <div className="text-center">
            <Link to="/courses">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                <span>Explore All Courses</span>
                <ArrowRight className="ml-2 w-4 h-4" />
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
