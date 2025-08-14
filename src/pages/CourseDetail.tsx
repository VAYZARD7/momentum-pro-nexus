import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, DollarSign, CheckCircle } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const { t } = useLanguage();

  const courseData = {
    title: t('basicTradingTitle'),
    description: t('basicTradingDesc'),
    duration: '4 weeks',
    price: '$199',
    image: '/public/lovable-uploads/701e2577-a558-403d-8c6e-431a07b48399.png',
    stages: [
      'Week 1: Market Fundamentals',
      'Week 2: Chart Analysis',
      'Week 3: Risk Management',
      'Week 4: Trading Strategies'
    ],
    requirements: [
      'Basic computer skills',
      'Internet connection',
      'Dedication to learn'
    ],
    goals: [
      'Understand market basics',
      'Learn to read charts',
      'Develop risk management skills',
      'Create your first trading strategy'
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img 
                src={courseData.image} 
                alt={courseData.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h1 className="text-4xl font-bold mb-4">{courseData.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{courseData.description}</p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-2" />
                  {courseData.duration}
                </div>
                <div className="flex items-center text-2xl font-bold text-primary">
                  <DollarSign className="w-6 h-6 mr-1" />
                  {courseData.price}
                </div>
              </div>
              
              <Button size="lg" className="w-full mb-8">
                {t('enrollNow')}
              </Button>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('courseStages')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {courseData.stages.map((stage, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {stage}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('courseRequirements')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {courseData.requirements.map((req, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('courseGoals')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {courseData.goals.map((goal, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;