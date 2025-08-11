import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Prices = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('basic'),
      price: '$99',
      period: '/month',
      description: 'Perfect for beginners',
      features: [
        'Access to basic courses',
        'Community forum',
        'Basic market analysis',
        'Email support'
      ]
    },
    {
      name: t('premium'),
      price: '$299',
      period: '/month',
      description: 'Most popular choice',
      features: [
        'All basic features',
        'Advanced courses',
        'Live trading sessions',
        'Personal mentor',
        'Priority support',
        'Advanced tools'
      ],
      popular: true
    },
    {
      name: t('vip'),
      price: '$599',
      period: '/month',
      description: 'Complete trading mastery',
      features: [
        'All premium features',
        'One-on-one coaching',
        'Custom strategies',
        'Direct market access',
        '24/7 phone support',
        'Exclusive events'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">
            {t('pricingTitle')}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-trading transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-primary ring-2 ring-primary/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-trading text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-4xl font-bold text-primary">
                    {plan.price}
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? "hero" : "trading"} 
                    className="w-full"
                  >
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

export default Prices;