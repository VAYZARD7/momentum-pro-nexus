import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, DollarSign, CheckCircle, Users, Award, BookOpen } from 'lucide-react';
import basicTradingImage from '@/assets/course-basic-trading.jpg';
import riskManagementImage from '@/assets/course-risk-management.jpg';
import technicalAnalysisImage from '@/assets/course-technical-analysis.jpg';
import portfolioManagementImage from '@/assets/course-portfolio-management.jpg';
import advancedStrategiesImage from '@/assets/course-advanced-strategies.jpg';
import algorithmicTradingImage from '@/assets/course-algorithmic-trading.jpg';
import institutionalTradingImage from '@/assets/course-institutional-trading.jpg';
import marketMakingImage from '@/assets/course-market-making.jpg';
import tradingPsychologyImage from '@/assets/course-trading-psychology.jpg';

const CourseDetail = () => {
  const { courseId } = useParams();
  const { t } = useLanguage();

  const courseDataMap: { [key: string]: any } = {
    'basic-trading': {
      title: t('basicTradingTitle'),
      description: t('basicTradingDesc'),
      duration: '4 weeks',
      price: '$199',
      level: t('beginnerLevel'),
      students: '2,500+',
      image: basicTradingImage,
      stages: [
        t('basicTradingStage1'),
        t('basicTradingStage2'),
        t('basicTradingStage3'),
        t('basicTradingStage4')
      ],
      requirements: [
        t('basicComputerSkills'),
        t('internetConnection'),
        t('dedicationToLearn')
      ],
      goals: [
        t('understandMarketBasics'),
        t('learnToReadCharts'),
        t('developRiskSkills'),
        t('createFirstStrategy')
      ]
    },
    'risk-management': {
      title: t('riskManagementTitle'),
      description: t('riskManagementCourseDesc'),
      duration: '3 weeks',
      price: '$149',
      level: t('beginnerLevel'),
      students: '1,800+',
      image: riskManagementImage,
      stages: [
        t('riskStage1'),
        t('riskStage2'),
        t('riskStage3')
      ],
      requirements: [
        t('basicTradingKnowledge'),
        t('internetConnection'),
        t('dedicationToLearn')
      ],
      goals: [
        t('understandRiskTypes'),
        t('learnPositionSizing'),
        t('masterStopLoss'),
        t('createRiskPlan')
      ]
    },
    'technical-analysis': {
      title: t('technicalAnalysisTitle'),
      description: t('technicalAnalysisDesc'),
      duration: '6 weeks',
      price: '$299',
      level: t('beginnerLevel'),
      students: '3,200+',
      image: technicalAnalysisImage,
      stages: [
        t('technicalStage1'),
        t('technicalStage2'),
        t('technicalStage3'),
        t('technicalStage4'),
        t('technicalStage5'),
        t('technicalStage6')
      ],
      requirements: [
        t('basicMarketKnowledge'),
        t('internetConnection'),
        t('dedicationToLearn')
      ],
      goals: [
        t('masterChartPatterns'),
        t('understandIndicators'),
        t('identifyTrends'),
        t('developAnalysisSkills')
      ]
    },
    'portfolio-management': {
      title: t('portfolioManagementTitle'),
      description: t('portfolioManagementDesc'),
      duration: '5 weeks',
      price: '$399',
      level: t('intermediateLevel'),
      students: '1,500+',
      image: portfolioManagementImage,
      stages: [
        t('portfolioStage1'),
        t('portfolioStage2'),
        t('portfolioStage3'),
        t('portfolioStage4'),
        t('portfolioStage5')
      ],
      requirements: [
        t('tradingExperience'),
        t('internetConnection'),
        t('dedicationToLearn')
      ],
      goals: [
        t('learnDiversification'),
        t('understandAssetAllocation'),
        t('masterRebalancing'),
        t('optimizeReturns')
      ]
    },
    'advanced-strategies': {
      title: t('advancedStrategiesTitle'),
      description: t('advancedStrategiesDesc'),
      duration: '8 weeks',
      price: '$599',
      level: t('intermediateLevel'),
      students: '900+',
      image: advancedStrategiesImage,
      stages: [
        t('advancedStage1'),
        t('advancedStage2'),
        t('advancedStage3'),
        t('advancedStage4'),
        t('advancedStage5'),
        t('advancedStage6'),
        t('advancedStage7'),
        t('advancedStage8')
      ],
      requirements: [
        t('solidTradingFoundation'),
        t('internetConnection'),
        t('dedicationToLearn')
      ],
      goals: [
        t('masterComplexStrategies'),
        t('learnOptionStrategies'),
        t('understandDerivatives'),
        t('developAdvancedSkills')
      ]
    },
    'algorithmic-trading': {
      title: t('algorithmicTradingTitle'),
      description: t('algorithmicTradingDesc'),
      duration: '10 weeks',
      price: '$799',
      level: t('intermediateLevel'),
      students: '650+',
      image: algorithmicTradingImage,
      stages: [
        t('algoStage1'),
        t('algoStage2'),
        t('algoStage3'),
        t('algoStage4'),
        t('algoStage5'),
        t('algoStage6'),
        t('algoStage7'),
        t('algoStage8'),
        t('algoStage9'),
        t('algoStage10')
      ],
      requirements: [
        t('programmingBasics'),
        t('tradingKnowledge'),
        t('internetConnection'),
        t('dedicationToLearn')
      ],
      goals: [
        t('learnPythonTrading'),
        t('buildTradingBots'),
        t('automateStrategies'),
        t('backtestSystems')
      ]
    },
    'institutional-trading': {
      title: t('institutionalTradingTitle'),
      description: t('institutionalTradingDesc'),
      duration: '12 weeks',
      price: '$1299',
      level: t('advancedLevel'),
      students: '300+',
      image: institutionalTradingImage,
      stages: [
        t('institutionalStage1'),
        t('institutionalStage2'),
        t('institutionalStage3'),
        t('institutionalStage4'),
        t('institutionalStage5'),
        t('institutionalStage6'),
        t('institutionalStage7'),
        t('institutionalStage8'),
        t('institutionalStage9'),
        t('institutionalStage10'),
        t('institutionalStage11'),
        t('institutionalStage12')
      ],
      requirements: [
        t('extensiveTradingExperience'),
        t('institutionalBackground'),
        t('internetConnection'),
        t('dedicationToLearn')
      ],
      goals: [
        t('masterInstitutionalMethods'),
        t('understandLargeOrders'),
        t('learnCompliance'),
        t('developProfessionalSkills')
      ]
    },
    'market-making': {
      title: t('marketMakingTitle'),
      description: t('marketMakingDesc'),
      duration: '8 weeks',
      price: '$999',
      level: t('advancedLevel'),
      students: '200+',
      image: marketMakingImage,
      stages: [
        t('marketMakingStage1'),
        t('marketMakingStage2'),
        t('marketMakingStage3'),
        t('marketMakingStage4'),
        t('marketMakingStage5'),
        t('marketMakingStage6'),
        t('marketMakingStage7'),
        t('marketMakingStage8')
      ],
      requirements: [
        t('advancedTradingKnowledge'),
        t('riskManagementExperience'),
        t('internetConnection'),
        t('dedicationToLearn')
      ],
      goals: [
        t('understandLiquidityProvision'),
        t('masterBidAskSpreads'),
        t('learnMarketMicrostructure'),
        t('optimizeProfitability')
      ]
    },
    'trading-psychology': {
      title: t('tradingPsychologyTitle'),
      description: t('tradingPsychologyDesc'),
      duration: '6 weeks',
      price: '$699',
      level: t('advancedLevel'),
      students: '800+',
      image: tradingPsychologyImage,
      stages: [
        t('psychologyStage1'),
        t('psychologyStage2'),
        t('psychologyStage3'),
        t('psychologyStage4'),
        t('psychologyStage5'),
        t('psychologyStage6')
      ],
      requirements: [
        t('tradingExperience'),
        t('selfAwareness'),
        t('internetConnection'),
        t('dedicationToLearn')
      ],
      goals: [
        t('masterEmotionalControl'),
        t('developDiscipline'),
        t('overcomePsychologicalBarriers'),
        t('achieveConsistentResults')
      ]
    }
  };

  const courseData = courseDataMap[courseId || ''] || courseDataMap['basic-trading'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img 
                src={courseData.image} 
                alt={courseData.title}
                className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
              />
              <h1 className="text-4xl font-bold mb-4">{courseData.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{courseData.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-2" />
                  <div>
                    <div className="text-sm text-muted-foreground">{t('duration')}</div>
                    <div className="font-semibold">{courseData.duration}</div>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Award className="w-5 h-5 mr-2" />
                  <div>
                    <div className="text-sm text-muted-foreground">{t('level')}</div>
                    <div className="font-semibold">{courseData.level}</div>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="w-5 h-5 mr-2" />
                  <div>
                    <div className="text-sm text-muted-foreground">{t('students')}</div>
                    <div className="font-semibold">{courseData.students}</div>
                  </div>
                </div>
                <div className="flex items-center text-primary">
                  <DollarSign className="w-6 h-6 mr-1" />
                  <div>
                    <div className="text-sm text-muted-foreground">{t('price')}</div>
                    <div className="text-2xl font-bold">{courseData.price}</div>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="w-full mb-8">
                {t('enrollNow')}
              </Button>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    {t('courseStages')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {courseData.stages.map((stage: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{stage}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('courseRequirements')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {courseData.requirements.map((req: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('courseGoals')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {courseData.goals.map((goal: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
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

export default CourseDetail;