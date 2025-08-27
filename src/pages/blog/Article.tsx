import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, Calendar, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Article = () => {
  const { id } = useParams();
  const { language } = useLanguage();

  // Mock article data - in real app would fetch based on ID
  const articles = {
    '1': {
      title: language === 'en' ? 'Mastering Risk Management in Trading' : 'Освоение управления рисками в трейдинге',
      content: language === 'en' ? `
        <h2>Introduction to Risk Management</h2>
        <p>Risk management is the cornerstone of successful trading. Without proper risk management, even the best trading strategy will eventually lead to significant losses. In this comprehensive guide, we'll explore the essential principles that every trader must understand and implement.</p>
        
        <h2>The 2% Rule</h2>
        <p>One of the most fundamental rules in trading is never to risk more than 2% of your trading capital on a single trade. This rule ensures that even a series of losing trades won't devastate your account. For example, if you have a $10,000 trading account, you should never risk more than $200 on any single trade.</p>
        
        <h2>Position Sizing</h2>
        <p>Proper position sizing is crucial for managing risk effectively. Your position size should be calculated based on:</p>
        <ul>
          <li>Your account size</li>
          <li>The distance to your stop loss</li>
          <li>The percentage of capital you're willing to risk</li>
        </ul>
        
        <h2>Stop Loss Strategies</h2>
        <p>A stop loss is your safety net in trading. There are several types of stop losses you can use:</p>
        <ul>
          <li><strong>Fixed Stop Loss:</strong> Set at a specific price level</li>
          <li><strong>Trailing Stop Loss:</strong> Moves with the price to lock in profits</li>
          <li><strong>Time-Based Stop Loss:</strong> Exits the trade after a certain time period</li>
        </ul>
        
        <h2>Risk-Reward Ratio</h2>
        <p>Always aim for a favorable risk-reward ratio. A minimum of 1:2 means you're risking $1 to potentially make $2. This ensures that even with a 50% win rate, you'll still be profitable in the long run.</p>
        
        <h2>Diversification</h2>
        <p>Don't put all your eggs in one basket. Diversify across different assets, sectors, and trading strategies to spread your risk. However, be careful not to over-diversify, as this can dilute your returns and make portfolio management difficult.</p>
        
        <h2>Emotional Management</h2>
        <p>Psychology plays a crucial role in risk management. Fear and greed are the two emotions that can destroy your trading account. Develop a trading plan and stick to it, regardless of emotions. Keep a trading journal to track your emotional state and learn from your mistakes.</p>
        
        <h2>Conclusion</h2>
        <p>Effective risk management is what separates professional traders from amateurs. By implementing these principles consistently, you'll protect your capital and increase your chances of long-term success in the markets. Remember, it's not about how much you make, but how much you keep.</p>
      ` : `
        <h2>Введение в управление рисками</h2>
        <p>Управление рисками - это краеугольный камень успешной торговли. Без правильного управления рисками даже лучшая торговая стратегия в конечном итоге приведет к значительным потерям. В этом подробном руководстве мы рассмотрим основные принципы, которые должен понимать и применять каждый трейдер.</p>
        
        <h2>Правило 2%</h2>
        <p>Одно из самых фундаментальных правил в трейдинге - никогда не рисковать более чем 2% вашего торгового капитала в одной сделке. Это правило гарантирует, что даже серия убыточных сделок не опустошит ваш счет. Например, если у вас есть торговый счет в $10,000, вы никогда не должны рисковать более чем $200 в любой отдельной сделке.</p>
        
        <h2>Размер позиции</h2>
        <p>Правильный размер позиции имеет решающее значение для эффективного управления рисками. Размер вашей позиции должен рассчитываться на основе:</p>
        <ul>
          <li>Размера вашего счета</li>
          <li>Расстояния до вашего стоп-лосса</li>
          <li>Процента капитала, которым вы готовы рискнуть</li>
        </ul>
        
        <h2>Стратегии стоп-лосса</h2>
        <p>Стоп-лосс - это ваша страховка в трейдинге. Существует несколько типов стоп-лоссов, которые вы можете использовать:</p>
        <ul>
          <li><strong>Фиксированный стоп-лосс:</strong> Устанавливается на определенном ценовом уровне</li>
          <li><strong>Скользящий стоп-лосс:</strong> Движется вместе с ценой для фиксации прибыли</li>
          <li><strong>Временной стоп-лосс:</strong> Выход из сделки после определенного периода времени</li>
        </ul>
        
        <h2>Соотношение риска и прибыли</h2>
        <p>Всегда стремитесь к благоприятному соотношению риска и прибыли. Минимум 1:2 означает, что вы рискуете $1, чтобы потенциально заработать $2. Это гарантирует, что даже при 50% выигрышных сделок вы все равно будете прибыльны в долгосрочной перспективе.</p>
        
        <h2>Диверсификация</h2>
        <p>Не кладите все яйца в одну корзину. Диверсифицируйте по различным активам, секторам и торговым стратегиям, чтобы распределить риск. Однако будьте осторожны, чтобы не переусердствовать с диверсификацией, так как это может снизить вашу доходность и усложнить управление портфелем.</p>
        
        <h2>Управление эмоциями</h2>
        <p>Психология играет решающую роль в управлении рисками. Страх и жадность - это две эмоции, которые могут уничтожить ваш торговый счет. Разработайте торговый план и придерживайтесь его, независимо от эмоций. Ведите торговый журнал, чтобы отслеживать свое эмоциональное состояние и учиться на своих ошибках.</p>
        
        <h2>Заключение</h2>
        <p>Эффективное управление рисками - это то, что отличает профессиональных трейдеров от любителей. Последовательно применяя эти принципы, вы защитите свой капитал и увеличите свои шансы на долгосрочный успех на рынках. Помните, дело не в том, сколько вы зарабатываете, а в том, сколько вы сохраняете.</p>
      `,
      author: 'John Smith',
      date: '2024-03-15',
      readTime: language === 'en' ? '5 min read' : '5 мин чтения',
      category: language === 'en' ? 'Risk Management' : 'Управление рисками',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=600&fit=crop'
    }
  };

  const article = articles[id as keyof typeof articles] || articles['1'];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section with Image */}
        <section className="relative h-[400px] md:h-[500px]">
          <div className="absolute inset-0">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-end pb-12">
            <div className="max-w-4xl">
              <Badge variant="secondary" className="mb-4">
                {article.category}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {article.title}
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(article.date).toLocaleDateString(language === 'en' ? 'en-US' : 'ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link to="/blog">
                <Button variant="ghost" className="mb-8">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'Back to Blog' : 'Вернуться к блогу'}
                </Button>
              </Link>

              {/* Article Body */}
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </article>

              {/* Share Section */}
              <Separator className="my-12" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-5 w-5" />
                  <span>{language === 'en' ? 'Thank you for reading!' : 'Спасибо за чтение!'}</span>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'Share Article' : 'Поделиться'}
                </Button>
              </div>

              {/* Related Articles */}
              <Separator className="my-12" />
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  {language === 'en' ? 'Related Articles' : 'Похожие статьи'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <Badge variant="secondary" className="mb-3">
                      {language === 'en' ? 'Technical Analysis' : 'Технический анализ'}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2">
                      {language === 'en' 
                        ? 'Technical Analysis: Moving Averages Explained'
                        : 'Технический анализ: объяснение скользящих средних'}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === 'en'
                        ? 'Deep dive into moving averages and how to use them effectively...'
                        : 'Глубокое погружение в скользящие средние и их эффективное использование...'}
                    </p>
                    <Link to="/blog/2" className="text-primary text-sm font-medium">
                      {language === 'en' ? 'Read More →' : 'Читать далее →'}
                    </Link>
                  </Card>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <Badge variant="secondary" className="mb-3">
                      {language === 'en' ? 'Psychology' : 'Психология'}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2">
                      {language === 'en'
                        ? 'Building a Trading Psychology'
                        : 'Формирование психологии трейдера'}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === 'en'
                        ? 'Explore the mental aspects of trading and develop a professional mindset...'
                        : 'Исследуйте психологические аспекты трейдинга и развитие мышления...'}
                    </p>
                    <Link to="/blog/3" className="text-primary text-sm font-medium">
                      {language === 'en' ? 'Read More →' : 'Читать далее →'}
                    </Link>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Article;