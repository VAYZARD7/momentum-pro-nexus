import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { label: t('about'), href: '/about' },
      { label: t('courses'), href: '/courses' },
      { label: t('prices'), href: '/prices' },
      { label: t('contacts'), href: '/contacts' }
    ],
    support: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Support', href: '/support' },
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' }
    ]
  };

  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/701e2577-a558-403d-8c6e-431a07b48399.png" 
                alt="Momentum Trading Pro" 
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl text-foreground">
                Momentum Trading Pro
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t('aboutDescription')}
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@momentumtradingpro.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 Momentum Trading Pro. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <img 
              src="/lovable-uploads/701e2577-a558-403d-8c6e-431a07b48399.png" 
              alt="Momentum Trading Pro" 
              className="h-6 w-auto opacity-60"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;