import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('termsTitle')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('termsContent')}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  By accessing and using Momentum Trading Pro's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Use License</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Permission is granted to temporarily download one copy of the materials on Momentum Trading Pro for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul>
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Course Access and Content</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Upon enrollment and payment, you will receive access to course materials for the duration specified in your chosen plan. Course content is proprietary and protected by copyright laws. Students may not share, distribute, or reproduce course materials without explicit written permission.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Payment and Refunds</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  All payments are processed securely through our payment partners. We offer a 30-day money-back guarantee for new enrollments. Refund requests must be submitted within 30 days of initial purchase and before completing more than 25% of the course content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. User Conduct</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Users agree to use the platform responsibly and respectfully. Prohibited activities include:
                </p>
                <ul>
                  <li>Harassment or inappropriate communication with other users or staff</li>
                  <li>Sharing false or misleading information</li>
                  <li>Attempting to circumvent payment or access controls</li>
                  <li>Using the platform for any illegal activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We are committed to protecting your privacy. Personal information collected during registration and course participation is used solely for educational purposes and platform improvement. We do not sell or share personal data with third parties without consent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Trading involves substantial risk and is not suitable for all investors. Past performance is not indicative of future results. Momentum Trading Pro provides educational content only and does not provide investment advice. Users are solely responsible for their trading decisions and any resulting financial outcomes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Modifications</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Momentum Trading Pro may revise these terms of service at any time without notice. By using this platform, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  If you have any questions about these Terms & Conditions, please contact us at:
                </p>
                <p>
                  Email: legal@momentumtradingpro.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Address: 123 Trading Street, Financial District, NY 10004
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;