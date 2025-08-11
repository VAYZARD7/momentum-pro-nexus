import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Award, TrendingUp, User, Settings } from 'lucide-react';

// Mock user type for demo
type UserRole = 'student' | 'teacher' | 'curator' | 'admin';

interface DashboardProps {
  userRole?: UserRole;
}

const Dashboard: React.FC<DashboardProps> = ({ userRole = 'student' }) => {
  const { t } = useLanguage();

  // Mock data
  const mockProgress = 75;
  const mockHomework = [
    { id: 1, title: 'Technical Analysis Basics', status: 'completed', score: 85, dueDate: '2024-01-15' },
    { id: 2, title: 'Risk Management', status: 'pending', score: null, dueDate: '2024-01-20' },
    { id: 3, title: 'Trading Psychology', status: 'graded', score: 92, dueDate: '2024-01-10' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-accent text-accent-foreground';
      case 'pending': return 'bg-orange-500 text-white';
      case 'graded': return 'bg-green-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  if (!userRole) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {t('welcome')}, John Doe
              </h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <User className="h-4 w-4" />
                {t(userRole as keyof typeof import('@/lib/translations').translations.en)}
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              <Settings className="h-4 w-4" />
              {t('profile')}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('overallProgress')}</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockProgress}%</div>
                <Progress value={mockProgress} className="mt-3" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('lessonsCompleted')}</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12/16</div>
                <p className="text-xs text-muted-foreground mt-1">4 lessons remaining</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('averageScore')}</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">88.5</div>
                <p className="text-xs text-muted-foreground mt-1">Above average</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('certificates')}</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground mt-1">Earned certificates</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {t('homework')}
                </CardTitle>
                <CardDescription>{t('homeworkDescription')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockHomework.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{t('dueDate')}: {item.dueDate}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {item.score && (
                          <span className="text-sm font-medium">{item.score}%</span>
                        )}
                        <Badge className={getStatusColor(item.status)}>
                          {t(item.status as keyof typeof import('@/lib/translations').translations.en)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4">
                  {t('viewSubmissions')}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('currentCourse')}</CardTitle>
                <CardDescription>Advanced Trading Strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Module Progress</span>
                      <span>3/4 modules</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Next Lesson:</h4>
                    <p className="text-sm text-muted-foreground">Options Trading Strategies</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1">Continue Learning</Button>
                    <Button variant="outline">{t('exams')}</Button>
                  </div>
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

export default Dashboard;