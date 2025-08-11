import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">
            {t('aboutTitle')}
          </h1>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              {t('aboutDescription')}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;