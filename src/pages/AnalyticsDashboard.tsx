import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  DollarSign,
  TrendingUp,
  TrendingDown,
  Eye,
  Clock,
  Download,
  ArrowLeft,
  Calendar
} from 'lucide-react';

const AnalyticsDashboard = () => {
  const { t } = useLanguage();
  const [timeRange, setTimeRange] = useState('7d');
  const [reportType, setReportType] = useState('overview');

  // Mock analytics data
  const analytics = {
    overview: {
      totalUsers: 1247,
      activeUsers: 892,
      newUsers: 156,
      revenue: 45680,
      courses: 24,
      completionRate: 78.5
    },
    trends: {
      userGrowth: 12.5,
      revenueGrowth: 18.3,
      courseCompletions: 245,
      averageRating: 4.7
    }
  };

  const courseStats = [
    { id: 1, name: 'Advanced Trading Strategies', students: 124, completion: 85, revenue: 37076, rating: 4.8 },
    { id: 2, name: 'Technical Analysis Masterclass', students: 89, completion: 78, revenue: 35511, rating: 4.6 },
    { id: 3, name: 'Risk Management in Trading', students: 67, completion: 92, revenue: 9983, rating: 4.5 },
    { id: 4, name: 'Cryptocurrency Trading Basics', students: 45, completion: 67, revenue: 8955, rating: 4.3 }
  ];

  const userActivity = [
    { period: 'Today', logins: 234, pageViews: 1456, courses: 89, revenue: 2340 },
    { period: 'Yesterday', logins: 198, pageViews: 1234, courses: 76, revenue: 1980 },
    { period: 'This Week', logins: 1456, pageViews: 8976, courses: 567, revenue: 12340 },
    { period: 'Last Week', logins: 1234, pageViews: 7654, courses: 456, revenue: 9876 },
    { period: 'This Month', logins: 5678, pageViews: 34567, courses: 2345, revenue: 45680 }
  ];

  const topPages = [
    { page: '/courses', views: 3456, uniqueViews: 2345, bounceRate: '23%' },
    { page: '/dashboard', views: 2890, uniqueViews: 1987, bounceRate: '15%' },
    { page: '/pricing', views: 1876, uniqueViews: 1234, bounceRate: '45%' },
    { page: '/about', views: 1567, uniqueViews: 1098, bounceRate: '67%' },
    { page: '/contact', views: 987, uniqueViews: 765, bounceRate: '89%' }
  ];

  const getTrendIcon = (growth: number) => {
    return growth > 0 ? (
      <TrendingUp className="h-4 w-4 text-green-600" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-600" />
    );
  };

  const getTrendColor = (growth: number) => {
    return growth > 0 ? 'text-green-600' : 'text-red-600';
  };

  const exportReport = () => {
    alert(t('analyticsReportExported'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <Link to="/admin">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t('backToAdmin')}
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {t('analyticsDashboard')}
                </h1>
                <p className="text-muted-foreground">{t('analyticsDescription')}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder={t('timeRange')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1d">1 {t('day')}</SelectItem>
                  <SelectItem value="7d">7 {t('days')}</SelectItem>
                  <SelectItem value="30d">30 {t('days')}</SelectItem>
                  <SelectItem value="90d">90 {t('days')}</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={exportReport} className="gap-2">
                <Download className="h-4 w-4" />
                {t('exportReport')}
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('totalUsers')}</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics.overview.totalUsers.toLocaleString()}</div>
                <div className="flex items-center gap-1 text-xs mt-1">
                  {getTrendIcon(analytics.trends.userGrowth)}
                  <span className={getTrendColor(analytics.trends.userGrowth)}>
                    +{analytics.trends.userGrowth}% {t('fromLastPeriod')}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('activeUsers')}</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics.overview.activeUsers.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {((analytics.overview.activeUsers / analytics.overview.totalUsers) * 100).toFixed(1)}% {t('ofTotal')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('totalRevenue')}</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${analytics.overview.revenue.toLocaleString()}</div>
                <div className="flex items-center gap-1 text-xs mt-1">
                  {getTrendIcon(analytics.trends.revenueGrowth)}
                  <span className={getTrendColor(analytics.trends.revenueGrowth)}>
                    +{analytics.trends.revenueGrowth}% {t('fromLastPeriod')}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('courseCompletions')}</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics.trends.courseCompletions}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {analytics.overview.completionRate}% {t('completionRate')}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Course Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  {t('coursePerformance')}
                </CardTitle>
                <CardDescription>
                  {t('coursePerformanceDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courseStats.map((course) => (
                    <div key={course.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{course.name}</span>
                        <Badge variant="outline">{course.students} {t('students')}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{t('completion')}: {course.completion}%</span>
                        <span>{t('revenue')}: ${course.revenue.toLocaleString()}</span>
                      </div>
                      <Progress value={course.completion} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* User Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {t('userActivity')}
                </CardTitle>
                <CardDescription>
                  {t('userActivityDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('period')}</TableHead>
                      <TableHead>{t('logins')}</TableHead>
                      <TableHead>{t('courses')}</TableHead>
                      <TableHead>{t('revenue')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userActivity.map((activity, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{activity.period}</TableCell>
                        <TableCell>{activity.logins.toLocaleString()}</TableCell>
                        <TableCell>{activity.courses}</TableCell>
                        <TableCell>${activity.revenue.toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Page Analytics */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                {t('pageAnalytics')}
              </CardTitle>
              <CardDescription>
                {t('pageAnalyticsDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('page')}</TableHead>
                    <TableHead>{t('pageViews')}</TableHead>
                    <TableHead>{t('uniqueViews')}</TableHead>
                    <TableHead>{t('bounceRate')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topPages.map((page, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{page.page}</TableCell>
                      <TableCell>{page.views.toLocaleString()}</TableCell>
                      <TableCell>{page.uniqueViews.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant={parseInt(page.bounceRate) > 50 ? 'destructive' : 'secondary'}>
                          {page.bounceRate}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Export Options */}
          <Card>
            <CardHeader>
              <CardTitle>{t('exportOptions')}</CardTitle>
              <CardDescription>
                {t('exportOptionsDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  {t('exportPDF')}
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  {t('exportCSV')}
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  {t('exportExcel')}
                </Button>
                <Button variant="outline" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  {t('scheduleReport')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AnalyticsDashboard;