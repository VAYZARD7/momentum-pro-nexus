import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const { t } = useLanguage();

  const coursesData = {
    beginners: [
      {
        id: 'basic-trading',
        title: t('basicTradingTitle'),
        description: t('basicTradingDesc'),
        duration: '4 weeks',
        price: '$199',
        image: '/public/lovable-uploads/701e2577-a558-403d-8c6e-431a07b48399.png'
      },
      {
        id: 'risk-management',
        title: t('riskManagementTitle'),
        description: t('riskManagementCourseDesc'),
        duration: '3 weeks',
        price: '$149',
        image: '/public/lovable-uploads/701e2577-a558-403d-8c6e-431a07b48399.png'
      },
      {
        id: 'technical-analysis',
        title: t('technicalAnalysisTitle'),
        description: t('technicalAnalysisDesc'),
        duration: '6 weeks',
        price: '$299',
        image: '/public/lovable-uploads/701e2577-a558-403d-8c6e-431a07b48399.png'
      }
    ],
    middle: [
      {
        id: 'portfolio-management',
        title: t('portfolioManagementTitle'),
        description: t('portfolioManagementDesc'),
        duration: '5 weeks',
        price: '$399',
        image: '/public/lovable-uploads/701e2577-a558-403d-8c6e-431a07b48399.png'
      },
      {
        id: 'advanced-strategies',
        title: t('advancedStrategiesTitle'),
        description: t('advancedStrategiesDesc'),
        duration: '8 weeks',
        price: '$599',
        image: '/public/lovable-uploads/701e2577-a558-403d-8c6e-431a07b48399.png'
      },
      {
        id: 'algorithmic-trading',
        title: t('algorithmicTradingTitle'),
        description: t('algorithmicTradingDesc'),
        duration: '10 weeks',
        price: '$799',
        image: '/public/lovable-uploads/701e2577-a558-403d-8c6e-431a07b48399.png'
      }
    ],
    high: [
      {
        id: 'institutional-trading',
        title: t('institutionalTradingTitle'),
        description: t('institutionalTradingDesc'),
        duration: '12 weeks',
        price: '$1299',
        image: '/public/lovable-uploads/701e2577-a558-403d-8c6e-431a07b48399.png'
      },
      {
        id: 'market-making',
        title: t('marketMakingTitle'),
        description: t('marketMakingDesc'),
        duration: '8 weeks',
        price: '$999',
        image: '/public/lovable-uploads/701e2577-a558-403d-8c6e-431a07b48399.png'
      },
      {
        id: 'trading-psychology',
        title: t('tradingPsychologyTitle'),
        description: t('tradingPsychologyDesc'),
        duration: '6 weeks',
        price: '$699',
        image: '/public/lovable-uploads/701e2577-a558-403d-8c6e-431a07b48399.png'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">
            {t('coursesTitle')}
          </h1>
          
          <Tabs defaultValue="beginners" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="beginners">{t('beginnersTab')}</TabsTrigger>
              <TabsTrigger value="middle">{t('middleSchoolTab')}</TabsTrigger>
              <TabsTrigger value="high">{t('highSchoolTab')}</TabsTrigger>
            </TabsList>

            <TabsContent value="beginners">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coursesData.beginners.map((course) => (
                  <Card key={course.id} className="hover:shadow-trading transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center text-lg font-bold text-primary">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {course.price}
                        </div>
                      </div>
                      <Link to={`/course/${course.id}`}>
                        <Button className="w-full">
                          {t('enrollNow')}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="middle">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coursesData.middle.map((course) => (
                  <Card key={course.id} className="hover:shadow-trading transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center text-lg font-bold text-primary">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {course.price}
                        </div>
                      </div>
                      <Link to={`/course/${course.id}`}>
                        <Button className="w-full">
                          {t('enrollNow')}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="high">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coursesData.high.map((course) => (
                  <Card key={course.id} className="hover:shadow-trading transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center text-lg font-bold text-primary">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {course.price}
                        </div>
                      </div>
                      <Link to={`/course/${course.id}`}>
                        <Button className="w-full">
                          {t('enrollNow')}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;