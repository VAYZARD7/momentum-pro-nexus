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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize trading education and empower individuals with the knowledge and skills needed to succeed in financial markets.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the world's leading platform for comprehensive trading education, creating a community of successful traders.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Excellence, integrity, innovation, and commitment to student success drive everything we do.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">Experience</h3>
                <p className="text-muted-foreground">
                  Over 10 years of combined experience from our team of professional traders and educators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;