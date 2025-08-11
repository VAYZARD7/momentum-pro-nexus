import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FAQ = () => {
  const { t } = useLanguage();

  const faqData = [
    {
      question: "How do I start my trading journey with Momentum Trading Pro?",
      answer: "Simply click the 'Get Started' button to register for an account. You can choose from our Beginner, Intermediate, or Advanced courses based on your experience level. Each course includes video lessons, practical exercises, and expert mentorship."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment gateway."
    },
    {
      question: "Can I switch between course levels?",
      answer: "Yes, you can upgrade to a higher level course at any time. If you're finding your current course too challenging, you can also downgrade to a more suitable level. Contact our support team for assistance with course changes."
    },
    {
      question: "How long do I have access to the course materials?",
      answer: "Once you enroll in a course, you have lifetime access to all course materials, including any updates or new content we add. You can learn at your own pace and revisit lessons whenever needed."
    },
    {
      question: "Do you offer certificates upon completion?",
      answer: "Yes, all students receive a certificate of completion after successfully finishing their course. Our certificates are recognized in the trading industry and can be added to your professional portfolio."
    },
    {
      question: "What kind of support is available?",
      answer: "We offer comprehensive support including email assistance, live chat during business hours, weekly Q&A sessions with instructors, and access to our student community forum where you can connect with other traders."
    }
  ];

  const faqDataRu = [
    {
      question: "Как начать свой путь в трейдинге с Momentum Trading Pro?",
      answer: "Просто нажмите кнопку 'Начать', чтобы зарегистрировать аккаунт. Вы можете выбрать из наших курсов для начинающих, среднего или продвинутого уровня в зависимости от вашего опыта. Каждый курс включает видеоуроки, практические упражнения и экспертное наставничество."
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer: "Мы принимаем все основные кредитные карты (Visa, MasterCard, American Express), PayPal и банковские переводы. Все платежи обрабатываются безопасно через наш зашифрованный платежный шлюз."
    },
    {
      question: "Могу ли я переключаться между уровнями курсов?",
      answer: "Да, вы можете в любое время перейти на курс более высокого уровня. Если ваш текущий курс слишком сложен, вы также можете перейти на более подходящий уровень. Обратитесь в нашу службу поддержки за помощью в смене курса."
    },
    {
      question: "Как долго у меня есть доступ к материалам курса?",
      answer: "После записи на курс у вас есть пожизненный доступ ко всем материалам курса, включая любые обновления или новый контент, который мы добавляем. Вы можете учиться в своем темпе и пересматривать уроки когда угодно."
    },
    {
      question: "Выдаете ли вы сертификаты по завершении?",
      answer: "Да, все студенты получают сертификат о завершении после успешного окончания курса. Наши сертификаты признаны в торговой индустрии и могут быть добавлены в ваше профессиональное портфолио."
    },
    {
      question: "Какая поддержка доступна?",
      answer: "Мы предлагаем комплексную поддержку, включая помощь по электронной почте, живой чат в рабочее время, еженедельные сессии вопросов и ответов с инструкторами и доступ к нашему студенческому форуму сообщества, где вы можете общаться с другими трейдерами."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('faqTitle')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('faqContent')}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
              <CardDescription>Find quick answers to the most frequently asked questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {(t('faqTitle') === 'Часто задаваемые вопросы' ? faqDataRu : faqData).map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Card>
              <CardHeader>
                <CardTitle>Still have questions?</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Contact our support team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our support team is available 24/7 to help you with any questions or concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:support@momentumtradingpro.com" 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Email Support
                  </a>
                  <a 
                    href="/contacts" 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    Contact Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;