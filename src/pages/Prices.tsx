import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Prices = () => {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      name: t('basic'),
      price: '$99',
      period: t('month'),
      description: 'Perfect for beginners starting their trading journey',
      features: [
        'Basic trading fundamentals',
        'Market analysis tools',
        'Email support',
        'Community access',
        'Monthly webinars'
      ],
      popular: false,
      variant: 'outline' as const
    },
    {
      name: t('professional'),
      price: '$299',
      period: t('month'),
      description: 'Advanced features for serious traders',
      features: [
        'Everything in Basic',
        'Advanced strategies',
        'Personal mentor',
        'Live trading sessions',
        'Priority support',
        'Trading journal tools',
        'Risk management course'
      ],
      popular: true,
      variant: 'hero' as const
    },
    {
      name: t('enterprise'),
      price: '$599',
      period: t('month'),
      description: 'Complete solution for professional traders',
      features: [
        'Everything in Professional',
        'Custom trading algorithms',
        '1-on-1 coaching sessions',
        'Institutional strategies',
        'API access',
        'Custom indicators',
        'White-label solutions'
      ],
      popular: false,
      variant: 'secondary' as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              {t('pricing')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan to accelerate your trading success. All plans include our comprehensive learning platform and community access.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-trading transition-all duration-300 hover:scale-105 ${plan.popular ? 'border-primary ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/register">
                    <Button variant={plan.variant} className="w-full" size="lg">
                      {t('getStarted')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-secondary rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I change plans anytime?</h3>
                <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">We offer a 7-day free trial for all new users to explore our platform.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">We accept all major credit cards, PayPal, and cryptocurrency payments.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-muted-foreground">Yes, we offer a 30-day money-back guarantee if you're not satisfied.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Prices;