import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, FileCheck, AlertTriangle, CheckCircle, Clock, UserCheck } from 'lucide-react';

const CuratorDashboard = () => {
  const { t } = useLanguage();

  // Mock data for curator
  const mockApplications = [
    { id: 1, name: 'John Peterson', role: 'Teacher', experience: '5 years', status: 'pending' },
    { id: 2, name: 'Sarah Wilson', role: 'Student', experience: 'Beginner', status: 'approved' },
    { id: 3, name: 'Mike Brown', role: 'Teacher', experience: '8 years', status: 'pending' }
  ];

  const mockReports = [
    { id: 1, type: 'Quality Issue', course: 'Technical Analysis', reporter: 'Alice J.', status: 'open' },
    { id: 2, type: 'Content Error', course: 'Risk Management', reporter: 'Bob S.', status: 'resolved' },
    { id: 3, type: 'Technical Problem', course: 'Advanced Strategies', reporter: 'Carol D.', status: 'open' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-orange-500 text-white';
      case 'approved': return 'bg-green-500 text-white';
      case 'rejected': return 'bg-red-500 text-white';
      case 'open': return 'bg-red-500 text-white';
      case 'resolved': return 'bg-green-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              {t('curator')} {t('dashboard')}
            </h1>
            <p className="text-muted-foreground">Manage applications and quality control</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground mt-1">Require review</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Approved This Month</CardTitle>
                <UserCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground mt-1">+3 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Open Reports</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground mt-1">Need attention</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Quality Score</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94%</div>
                <p className="text-xs text-muted-foreground mt-1">Platform quality</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Recent Applications
                </CardTitle>
                <CardDescription>New teacher and student applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockApplications.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{app.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Role: {app.role} • Experience: {app.experience}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        {app.status === 'pending' ? (
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">{t('reject')}</Button>
                            <Button size="sm">{t('approve')}</Button>
                          </div>
                        ) : (
                          <Badge className={getStatusColor(app.status)}>
                            {t(app.status as keyof typeof import('@/lib/translations').translations.en)}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5" />
                  Quality Reports
                </CardTitle>
                <CardDescription>Issues reported by users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockReports.map((report) => (
                    <div key={report.id} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{report.type}</h4>
                          <p className="text-sm text-muted-foreground">
                            Course: {report.course}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Reported by: {report.reporter}
                          </p>
                        </div>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </div>
                      {report.status === 'open' && (
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" variant="outline">Investigate</Button>
                          <Button size="sm">Resolve</Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  View All Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CuratorDashboard;