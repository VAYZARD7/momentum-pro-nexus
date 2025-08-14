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
                <h3 className="text-2xl font-semibold mb-4">{t('ourMissionTitle')}</h3>
                <p className="text-muted-foreground">
                  {t('missionText')}
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">{t('ourVisionTitle')}</h3>
                <p className="text-muted-foreground">
                  {t('visionText')}
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">{t('ourValuesTitle')}</h3>
                <p className="text-muted-foreground">
                  {t('valuesText')}
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-semibold mb-4">{t('experienceTitle')}</h3>
                <p className="text-muted-foreground">
                  {t('experienceText')}
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