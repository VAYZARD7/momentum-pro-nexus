import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('privacyTitle')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('privacyContent')}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We collect information you provide directly to us, such as when you create an account, enroll in courses, or contact us for support. This may include:
                </p>
                <ul>
                  <li>Name, email address, and contact information</li>
                  <li>Payment and billing information</li>
                  <li>Course progress and performance data</li>
                  <li>Communications with our support team</li>
                  <li>Device and usage information for platform improvement</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We use the information we collect to:
                </p>
                <ul>
                  <li>Provide and maintain our educational services</li>
                  <li>Process payments and send billing information</li>
                  <li>Send course updates and educational content</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our platform and develop new features</li>
                  <li>Ensure platform security and prevent fraud</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul>
                  <li>With service providers who assist in operating our platform</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                  <li>With your explicit consent for specific purposes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul>
                  <li>SSL encryption for data transmission</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal data by authorized personnel</li>
                  <li>Data backup and recovery procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our platform. These technologies help us:
                </p>
                <ul>
                  <li>Remember your preferences and login information</li>
                  <li>Analyze platform usage and performance</li>
                  <li>Provide personalized content recommendations</li>
                  <li>Ensure platform security</li>
                </ul>
                <p>
                  You can control cookie settings through your browser preferences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  You have the right to:
                </p>
                <ul>
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt out of promotional communications</li>
                  <li>Request a copy of your personal data</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at privacy@momentumtradingpro.com.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information during such transfers, in accordance with applicable data protection laws.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Continued use of our services after changes are posted constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <p>
                  Email: privacy@momentumtradingpro.com<br />
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

export default Privacy;