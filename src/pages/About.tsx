import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Eye, Heart, Award, Users, TrendingUp, BookOpen, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('ourMissionTitle'),
      description: t('missionText'),
      gradient: 'from-primary to-primary/60'
    },
    {
      icon: Eye,
      title: t('ourVisionTitle'),
      description: t('visionText'),
      gradient: 'from-accent to-accent/60'
    },
    {
      icon: Heart,
      title: t('ourValuesTitle'),
      description: t('valuesText'),
      gradient: 'from-secondary to-secondary/60'
    },
    {
      icon: Award,
      title: t('experienceTitle'),
      description: t('experienceText'),
      gradient: 'from-primary to-accent'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Students Worldwide' },
    { value: '95%', label: 'Success Rate' },
    { value: '50+', label: 'Expert Instructors' },
    { value: '24/7', label: 'Support Available' }
  ];

  const features = [
    { icon: Users, text: 'Community of Professional Traders' },
    { icon: TrendingUp, text: 'Real-Time Market Analysis' },
    { icon: BookOpen, text: 'Comprehensive Learning Materials' },
    { icon: Shield, text: 'Risk Management Focus' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in">
                {t('aboutTitle')}
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 animate-fade-in animation-delay-200">
                {t('aboutDescription')}
              </p>
              <div className="flex flex-wrap gap-4 justify-center animate-fade-in animation-delay-400">
                <Link to="/courses">
                  <Button size="lg" variant="hero" className="shadow-lg hover:shadow-xl transition-all">
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
                What Drives Us Forward
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card 
                    key={index} 
                    className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-muted/50"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="p-8 relative">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-foreground">
                        {value.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-16">
                Why Traders Choose Us
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-6 rounded-xl bg-card border hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="p-3 rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Trading Journey?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of successful traders who have transformed their financial future with our expert guidance.
                </p>
                <Link to="/register">
                  <Button size="lg" variant="hero" className="shadow-lg">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;