import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Courses = () => {
  const { t } = useLanguage();

  const courses = [
    {
      title: t('beginner'),
      description: 'Perfect for those new to trading',
      price: '$299',
      features: ['Basic market concepts', 'Risk management', 'Entry strategies']
    },
    {
      title: t('intermediate'),
      description: 'For traders with some experience',
      price: '$599',
      features: ['Advanced analysis', 'Portfolio management', 'Complex strategies']
    },
    {
      title: t('advanced'),
      description: 'Professional-level trading mastery',
      price: '$999',
      features: ['Institutional strategies', 'Market making', 'Advanced psychology']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">
            {t('coursesTitle')}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-trading transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary">{course.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="trading" className="w-full">
                    {t('getStarted')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;