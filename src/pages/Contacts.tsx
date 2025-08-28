import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, Globe, CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contacts = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'support@momentumtradingpro.com',
      description: 'Send us an email anytime',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: '123 Trading Street',
      description: 'New York, NY 10001',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      content: '24/7 Online Support',
      description: 'We\'re here to help anytime',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const supportChannels = [
    { icon: MessageSquare, label: 'Live Chat', description: 'Instant support', available: true },
    { icon: Headphones, label: 'Phone Support', description: 'Direct assistance', available: true },
    { icon: Mail, label: 'Email Support', description: '24-hour response', available: true },
    { icon: Globe, label: 'Remote Support', description: 'Screen sharing help', available: false }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 animate-fade-in">
                <Headphones className="h-3 w-3 mr-1" />
                24/7 Support Available
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
                {t('contacts')}
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in animation-delay-200">
                {t('contactDescription')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <CardContent className="p-6 relative">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">{info.title}</h3>
                    <p className="text-foreground font-medium text-base mb-1">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Send className="h-6 w-6 text-primary" />
                    {t('sendMessageTitle')}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {t('sendMessageDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="transition-all focus:scale-[1.02]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="transition-all focus:scale-[1.02]"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all focus:scale-[1.02]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="How can we help you?" 
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="transition-all focus:scale-[1.02]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[150px] transition-all focus:scale-[1.02]"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button className="w-full" size="lg" type="submit">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Support Channels & FAQ */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {t('getInTouchTitle')}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    {t('getInTouchDescription')}
                  </p>
                </div>

                {/* Support Channels */}
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle>Support Channels</CardTitle>
                    <CardDescription>Choose your preferred way to reach us</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {supportChannels.map((channel, index) => (
                      <div 
                        key={index}
                        className={`flex items-center justify-between p-4 rounded-lg border ${
                          channel.available 
                            ? 'bg-card hover:bg-muted/50 transition-colors cursor-pointer' 
                            : 'bg-muted/30 opacity-60'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${channel.available ? 'bg-primary/10' : 'bg-muted'}`}>
                            <channel.icon className={`h-5 w-5 ${channel.available ? 'text-primary' : 'text-muted-foreground'}`} />
                          </div>
                          <div>
                            <p className="font-medium">{channel.label}</p>
                            <p className="text-sm text-muted-foreground">{channel.description}</p>
                          </div>
                        </div>
                        {channel.available && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="shadow-xl bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">{t('whyChooseUsTitle')}</h3>
                    <div className="space-y-4">
                      {[
                        t('experiencedTeam'),
                        t('provenTrackRecord'),
                        t('comprehensiveSupport'),
                        t('cuttingEdgeTools')
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 group">
                          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                          <span className="text-lg group-hover:text-primary transition-colors">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Office Hours</h3>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium text-foreground">8:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium text-foreground">9:00 AM - 2:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium text-foreground">Closed</span>
                      </div>
                      <div className="pt-2 mt-2 border-t">
                        <p className="text-sm">
                          <span className="text-green-500 font-medium">● Online Support:</span> Available 24/7
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section or CTA */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Immediate Assistance?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our expert team is ready to help you with any trading questions or technical support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="shadow-lg">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Start Live Chat
                </Button>
                <Button size="lg" variant="outline" className="shadow-lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;