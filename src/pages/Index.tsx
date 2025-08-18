import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, Award, BookOpen, Target, Shield, UserCheck, Settings, BarChart3 } from 'lucide-react';
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
                  {t('riskManagementFocus')}
                </h3>
                <p className="text-muted-foreground">
                  {t('riskManagementDesc')}
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <UserCheck className="h-6 w-6 text-primary" />
                  {t('personalMentorship')}
                </h3>
                <p className="text-muted-foreground">
                  {t('personalMentorshipDesc')}
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  {t('comprehensiveCurriculum')}
                </h3>
                <p className="text-muted-foreground">
                  {t('comprehensiveCurriculumDesc')}
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  {t('activeCommunity')}
                </h3>
                <p className="text-muted-foreground">
                  {t('activeCommunityDesc')}
                </p>
              </div>
            </div>
            <Link to="/about">
              <Button variant="outline" size="lg">
                {t('learnMoreAboutUs')}
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
