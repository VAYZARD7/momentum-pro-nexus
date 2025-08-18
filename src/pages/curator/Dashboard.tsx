import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileCheck, AlertTriangle, CheckCircle, Clock, Users, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const { t } = useLanguage();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500 text-white';
      case 'approved': return 'bg-green-500 text-white';
      case 'rejected': return 'bg-red-500 text-white';
      case 'resolved': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const mockApplications = [
    { id: 1, applicant: 'John Doe', course: 'Advanced Trading', status: 'pending', date: '2024-01-15' },
    { id: 2, applicant: 'Jane Smith', course: 'Technical Analysis', status: 'approved', date: '2024-01-14' },
    { id: 3, applicant: 'Mike Johnson', course: 'Risk Management', status: 'pending', date: '2024-01-16' }
  ];

  const mockReports = [
    { id: 1, reporter: 'Alice Wilson', issue: 'Content accuracy concern', priority: 'high', status: 'pending' },
    { id: 2, reporter: 'Bob Davis', issue: 'Technical error in lesson', priority: 'medium', status: 'resolved' },
    { id: 3, reporter: 'Carol Brown', issue: 'Inappropriate content', priority: 'high', status: 'pending' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Curator {t('dashboard')}
        </h1>
        <p className="text-muted-foreground">Manage applications and maintain content quality</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved This Month</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Reports</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 high priority</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quality Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">+2% this week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="h-5 w-5" />
              Recent Applications
            </CardTitle>
            <CardDescription>Latest course applications to review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockApplications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{app.applicant}</h4>
                    <p className="text-sm text-muted-foreground">{app.course}</p>
                    <p className="text-xs text-muted-foreground">{app.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(app.status)}>
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </Badge>
                    {app.status === 'pending' && (
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Approve</Button>
                        <Button size="sm" variant="destructive">Reject</Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline">
              View All Applications
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Quality Reports
            </CardTitle>
            <CardDescription>Content issues requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockReports.map((report) => (
                <div key={report.id} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">{report.issue}</h4>
                      <p className="text-sm text-muted-foreground">Reported by {report.reporter}</p>
                    </div>
                    <Badge className={getStatusColor(report.status)}>
                      {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant={report.priority === 'high' ? 'destructive' : 'secondary'}>
                      {report.priority.charAt(0).toUpperCase() + report.priority.slice(1)} Priority
                    </Badge>
                    {report.status === 'pending' && (
                      <Button size="sm">Investigate</Button>
                    )}
                  </div>
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
  );
};

export default Dashboard;