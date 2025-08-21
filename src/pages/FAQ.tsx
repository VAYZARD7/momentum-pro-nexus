import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageCircle, Clock, Shield, Users, BookOpen, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const { t, language } = useLanguage();

  const faqData = [
    {
      question: "What is momentum trading and how does it work?",
      answer: "Momentum trading is a strategy that involves buying securities that are rising and selling securities that are falling. Our platform teaches you to identify and capitalize on these market movements using proven techniques, technical indicators, and real-time market analysis. You'll learn to spot trends early and ride them for maximum profit potential.",
      category: "Trading Basics"
    },
    {
      question: "What courses and learning materials are included?",
      answer: "Our comprehensive curriculum includes 9+ specialized courses covering everything from basic trading fundamentals to advanced institutional strategies. This includes Risk Management, Technical Analysis, Trading Psychology, Portfolio Management, Algorithmic Trading, Market Making, and more. Each course features video lessons, practical exercises, and real-world case studies.",
      category: "Courses"
    },
    {
      question: "Do you offer live trading sessions and mentorship?",
      answer: "Yes! Professional and Enterprise plans include live trading sessions where you can watch experienced traders in action. You'll also get access to personal mentorship, 1-on-1 coaching sessions, and priority support to accelerate your learning journey.",
      category: "Support"
    },
    {
      question: "What are the subscription plans and pricing options?",
      answer: "We offer three tiers: Basic ($99/month) for fundamentals and community access, Professional ($299/month) with advanced strategies and personal mentorship, and Enterprise ($599/month) with custom algorithms and 1-on-1 coaching. All plans include access to our core learning platform.",
      category: "Pricing"
    },
    {
      question: "Is there a free trial or money-back guarantee?",
      answer: "We offer a 7-day free trial for new users to explore our platform. Additionally, we provide a 30-day money-back guarantee if you're not completely satisfied with your learning experience. No questions asked.",
      category: "Pricing"
    },
    {
      question: "What trading tools and indicators do you provide?",
      answer: "Our platform includes advanced charting tools, custom indicators, risk management calculators, trading journal tools, and market analysis software. Professional and Enterprise users get access to algorithmic trading tools and API integrations.",
      category: "Tools"
    },
    {
      question: "How do I track my learning progress and performance?",
      answer: "Your student dashboard provides comprehensive progress tracking, including course completion rates, quiz scores, assignment grades, and trading performance analytics. You can monitor your improvement over time and identify areas for focused learning.",
      category: "Platform"
    },
    {
      question: "What support options are available?",
      answer: "We provide multiple support channels: email support for all users, priority support for Professional/Enterprise users, live chat during market hours, community forums, and regular webinars. Enterprise users also get dedicated account managers.",
      category: "Support"
    },
    {
      question: "Can I access the platform on mobile devices?",
      answer: "Yes! Our platform is fully responsive and works seamlessly on desktop, tablet, and mobile devices. You can access courses, trading tools, and your dashboard from anywhere with an internet connection.",
      category: "Platform"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All transactions are secured with industry-standard encryption and processed through trusted payment providers.",
      category: "Pricing"
    }
  ];

  const faqDataRu = [
    {
      question: "Что такое моментум трейдинг и как он работает?",
      answer: "Моментум трейдинг - это стратегия, которая включает покупку ценных бумаг, которые растут, и продажу ценных бумаг, которые падают. Наша платформа учит выявлять и использовать эти рыночные движения, используя проверенные методы, технические индикаторы и анализ рынка в реальном времени.",
      category: "Основы трейдинга"
    },
    {
      question: "Какие курсы и учебные материалы включены?",
      answer: "Наша комплексная программа включает 9+ специализированных курсов, охватывающих все от основ трейдинга до продвинутых институциональных стратегий. Включает управление рисками, технический анализ, психологию трейдинга, управление портфелем, алгоритмический трейдинг и многое другое.",
      category: "Курсы"
    },
    {
      question: "Предлагаете ли вы живые торговые сессии и наставничество?",
      answer: "Да! Профессиональный и Корпоративный планы включают живые торговые сессии, где вы можете наблюдать за опытными трейдерами. Также получите доступ к персональному наставничеству, индивидуальным коучинг-сессиям и приоритетной поддержке.",
      category: "Поддержка"
    },
    {
      question: "Какие планы подписки и ценовые варианты?",
      answer: "Мы предлагаем три уровня: Базовый ($99/месяц) для основ и доступа к сообществу, Профессиональный ($299/месяц) с продвинутыми стратегиями и персональным наставничеством, и Корпоративный ($599/месяц) с кастомными алгоритмами и индивидуальным коучингом.",
      category: "Цены"
    },
    {
      question: "Есть ли бесплатный пробный период или гарантия возврата денег?",
      answer: "Мы предлагаем 7-дневный бесплатный пробный период для новых пользователей. Дополнительно предоставляем 30-дневную гарантию возврата денег, если вы не полностью удовлетворены обучением. Без вопросов.",
      category: "Цены"
    },
    {
      question: "Какие торговые инструменты и индикаторы вы предоставляете?",
      answer: "Наша платформа включает продвинутые инструменты построения графиков, кастомные индикаторы, калькуляторы управления рисками, инструменты торгового журнала и программное обеспечение для анализа рынка.",
      category: "Инструменты"
    },
    {
      question: "Как отслеживать прогресс обучения и производительность?",
      answer: "Ваша студенческая панель предоставляет комплексное отслеживание прогресса, включая показатели завершения курсов, результаты тестов, оценки заданий и аналитику торговой производительности.",
      category: "Платформа"  
    },
    {
      question: "Какие варианты поддержки доступны?",
      answer: "Мы предоставляем множество каналов поддержки: поддержка по электронной почте для всех пользователей, приоритетная поддержка для Профессиональных/Корпоративных пользователей, живой чат в часы работы рынка, форумы сообщества и регулярные вебинары.",
      category: "Поддержка"
    },
    {
      question: "Могу ли я получить доступ к платформе на мобильных устройствах?",
      answer: "Да! Наша платформа полностью адаптивна и работает безупречно на настольных компьютерах, планшетах и мобильных устройствах. Вы можете получить доступ к курсам, торговым инструментам и панели управления из любого места с подключением к интернету.",
      category: "Платформа"
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer: "Мы принимаем все основные кредитные карты (Visa, MasterCard, American Express), PayPal и банковские переводы. Все транзакции защищены шифрованием промышленного стандарта и обрабатываются через надежных поставщиков платежей.",
      category: "Цены"
    }
  ];

  const currentFaqData = language === 'ru' ? faqDataRu : faqData;
  
  const categories = [...new Set(currentFaqData.map(faq => faq.category))];
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const filteredFaqs = selectedCategory === 'all' 
    ? currentFaqData 
    : currentFaqData.filter(faq => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-primary bg-clip-text text-transparent">
              FAQ
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our trading platform, courses, and services. Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-trading transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">9+</div>
              <div className="text-sm text-muted-foreground">Courses Available</div>
            </Card>
            <Card className="text-center p-6 hover:shadow-trading transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
            </Card>
            <Card className="text-center p-6 hover:shadow-trading transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </Card>
            <Card className="text-center p-6 hover:shadow-trading transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">30</div>
              <div className="text-sm text-muted-foreground">Day Money Back</div>
            </Card>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              size="sm"
            >
              All Questions
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.slice(0, Math.ceil(filteredFaqs.length / 2)).map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 hover:shadow-elegant transition-all duration-300">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div>
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {faq.category}
                        </Badge>
                        <div className="font-medium">{faq.question}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.slice(Math.ceil(filteredFaqs.length / 2)).map((faq, index) => (
                  <AccordionItem key={index + Math.ceil(filteredFaqs.length / 2)} value={`item-${index + Math.ceil(filteredFaqs.length / 2)}`} className="border rounded-lg px-4 hover:shadow-elegant transition-all duration-300">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div>
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {faq.category}
                        </Badge>
                        <div className="font-medium">{faq.question}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-trading transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Mail className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="mb-2">Email Support</CardTitle>
              <CardDescription className="mb-4">
                Get detailed answers to your questions via email
              </CardDescription>
              <Button variant="outline" asChild>
                <a href="mailto:support@momentumtradingpro.com">
                  support@momentumtradingpro.com
                </a>
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-trading transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <MessageCircle className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="mb-2">Live Chat</CardTitle>
              <CardDescription className="mb-4">
                Chat with our support team during market hours
              </CardDescription>
              <Button variant="outline">
                Start Live Chat
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-trading transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Phone className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="mb-2">Phone Support</CardTitle>
              <CardDescription className="mb-4">
                Speak directly with our trading experts
              </CardDescription>
              <Button variant="outline" asChild>
                <a href="tel:+1234567890">
                  +1 (234) 567-8900
                </a>
              </Button>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="mt-16 bg-gradient-primary text-white p-8 text-center">
            <CardTitle className="text-2xl mb-4">Still Need Help?</CardTitle>
            <CardDescription className="text-white/80 mb-6">
              Join our community of traders and get answers from experienced professionals
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/register">
                  Start Free Trial
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Support
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;