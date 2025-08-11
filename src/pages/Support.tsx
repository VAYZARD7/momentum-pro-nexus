import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Support = () => {
  const { t } = useLanguage();

  const supportMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed help via email",
      contact: "support@momentumtradingpro.com",
      response: "24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      response: "Immediate"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available on website",
      response: "5-10 minutes"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('supportTitle')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('supportContent')}
            </p>
          </div>

          {/* Support Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportMethods.map((method, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">{method.contact}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      Response time: {method.response}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Support Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Issue Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="course">Course Content</SelectItem>
                        <SelectItem value="account">Account Management</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your issue or question in detail..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Knowledge Base */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Help</CardTitle>
                  <CardDescription>Common solutions for frequent issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Can't access your course?</h4>
                        <p className="text-sm text-muted-foreground">
                          Try clearing your browser cache and cookies, then log in again.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Video not playing?</h4>
                        <p className="text-sm text-muted-foreground">
                          Check your internet connection and try refreshing the page.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Forgot your password?</h4>
                        <p className="text-sm text-muted-foreground">
                          Use the "Forgot Password" link on the login page to reset it.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Need to update billing info?</h4>
                        <p className="text-sm text-muted-foreground">
                          Go to your account settings and select "Billing Information".
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Support Hours</CardTitle>
                  <CardDescription>When you can reach our support team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-muted-foreground">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Saturday</span>
                      <span className="text-muted-foreground">10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                    <hr className="my-3" />
                    <div className="text-sm text-muted-foreground">
                      <p>Email support is available 24/7 with responses within 24 hours.</p>
                    </div>
                  </div>
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

export default Support;