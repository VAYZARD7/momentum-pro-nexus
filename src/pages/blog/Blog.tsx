import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Blog = () => {
  const { language } = useLanguage();

  const articles = [
    {
      id: 1,
      title: language === 'en' ? 'Mastering Risk Management in Trading' : 'Освоение управления рисками в трейдинге',
      excerpt: language === 'en' 
        ? 'Learn the essential principles of risk management that every successful trader follows. Discover how to protect your capital while maximizing returns.'
        : 'Изучите основные принципы управления рисками, которым следует каждый успешный трейдер. Узнайте, как защитить свой капитал и максимизировать доходность.',
      author: 'John Smith',
      date: '2024-03-15',
      readTime: language === 'en' ? '5 min read' : '5 мин чтения',
      category: language === 'en' ? 'Risk Management' : 'Управление рисками',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=500&fit=crop'
    },
    {
      id: 2,
      title: language === 'en' ? 'Technical Analysis: Moving Averages Explained' : 'Технический анализ: объяснение скользящих средних',
      excerpt: language === 'en'
        ? 'Deep dive into moving averages and how to use them effectively in your trading strategy. From simple to exponential moving averages.'
        : 'Глубокое погружение в скользящие средние и их эффективное использование в вашей торговой стратегии. От простых до экспоненциальных скользящих средних.',
      author: 'Sarah Johnson',
      date: '2024-03-12',
      readTime: language === 'en' ? '7 min read' : '7 мин чтения',
      category: language === 'en' ? 'Technical Analysis' : 'Технический анализ',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop'
    },
    {
      id: 3,
      title: language === 'en' ? 'Building a Trading Psychology' : 'Формирование психологии трейдера',
      excerpt: language === 'en'
        ? 'Explore the mental aspects of trading and how to develop the mindset of a professional trader. Overcome emotions and stick to your plan.'
        : 'Исследуйте психологические аспекты трейдинга и развитие мышления профессионального трейдера. Преодолевайте эмоции и придерживайтесь своего плана.',
      author: 'Michael Chen',
      date: '2024-03-10',
      readTime: language === 'en' ? '6 min read' : '6 мин чтения',
      category: language === 'en' ? 'Psychology' : 'Психология',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop'
    },
    {
      id: 4,
      title: language === 'en' ? 'Cryptocurrency Trading Strategies' : 'Стратегии торговли криптовалютой',
      excerpt: language === 'en'
        ? 'Discover effective strategies for trading cryptocurrencies in volatile markets. Learn to identify trends and manage risks in crypto trading.'
        : 'Откройте эффективные стратегии торговли криптовалютами на волатильных рынках. Научитесь выявлять тренды и управлять рисками.',
      author: 'David Lee',
      date: '2024-03-08',
      readTime: language === 'en' ? '8 min read' : '8 мин чтения',
      category: language === 'en' ? 'Cryptocurrency' : 'Криптовалюта',
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=500&fit=crop'
    },
    {
      id: 5,
      title: language === 'en' ? 'Fundamental Analysis for Beginners' : 'Фундаментальный анализ для начинающих',
      excerpt: language === 'en'
        ? 'Understanding the basics of fundamental analysis and how to evaluate stocks based on company financials and market conditions.'
        : 'Понимание основ фундаментального анализа и оценка акций на основе финансовых показателей компании и рыночных условий.',
      author: 'Emma Wilson',
      date: '2024-03-05',
      readTime: language === 'en' ? '10 min read' : '10 мин чтения',
      category: language === 'en' ? 'Fundamental Analysis' : 'Фундаментальный анализ',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
    },
    {
      id: 6,
      title: language === 'en' ? 'Day Trading vs Swing Trading' : 'Дейтрейдинг против свинг-трейдинга',
      excerpt: language === 'en'
        ? 'Compare different trading styles and find out which approach suits your personality, schedule, and financial goals better.'
        : 'Сравните различные стили торговли и узнайте, какой подход больше подходит вашему характеру, расписанию и финансовым целям.',
      author: 'Robert Kim',
      date: '2024-03-03',
      readTime: language === 'en' ? '9 min read' : '9 мин чтения',
      category: language === 'en' ? 'Trading Styles' : 'Стили торговли',
      image: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&h=500&fit=crop'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-background via-background/95 to-background">
          <div className="absolute inset-0 bg-gradient-primary opacity-5" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {language === 'en' ? 'Trading Insights & Education' : 'Торговые идеи и образование'}
              </h1>
              <p className="text-lg text-muted-foreground">
                {language === 'en' 
                  ? 'Expert analysis, trading strategies, and market insights to help you become a better trader'
                  : 'Экспертный анализ, торговые стратегии и рыночные идеи, которые помогут вам стать лучшим трейдером'}
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link key={article.id} to={`/blog/${article.id}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group cursor-pointer">
                    {/* Article Image */}
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                      {/* Category Badge */}
                      <Badge variant="secondary" className="mb-3">
                        {article.category}
                      </Badge>
                      
                      {/* Title */}
                      <h2 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                      
                      {/* Date */}
                      <div className="mt-4 text-xs text-muted-foreground">
                        {new Date(article.date).toLocaleDateString(language === 'en' ? 'en-US' : 'ru-RU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      
                      {/* Read More Link */}
                      <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                        {language === 'en' ? 'Read More' : 'Читать далее'}
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;