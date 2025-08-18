import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Filter, AlertTriangle, MessageSquare, CheckCircle } from 'lucide-react';

const Reports = () => {
  const { t } = useLanguage();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500 text-white';
      case 'investigating': return 'bg-blue-500 text-white';
      case 'resolved': return 'bg-green-500 text-white';
      case 'dismissed': return 'bg-gray-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500 text-white';
      case 'medium': return 'bg-orange-500 text-white';
      case 'low': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const mockReports = [
    {
      id: 1,
      title: 'Inappropriate Content in Trading Psychology Course',
      reporter: 'Alice Wilson',
      reporterEmail: 'alice.w@email.com',
      priority: 'high',
      status: 'pending',
      date: '2024-01-15',
      category: 'Content Quality',
      description: 'The lesson contains outdated and potentially harmful trading advice that could mislead students.',
      courseAffected: 'Trading Psychology Fundamentals'
    },
    {
      id: 2,
      title: 'Technical Error in Video Player',
      reporter: 'Bob Davis',
      reporterEmail: 'bob.d@email.com',
      priority: 'medium',
      status: 'investigating',
      date: '2024-01-14',
      category: 'Technical Issue',
      description: 'Video player stops working at 15:30 in the risk management lesson.',
      courseAffected: 'Risk Management Basics'
    },
    {
      id: 3,
      title: 'Plagiarized Content Detected',
      reporter: 'Carol Brown',
      reporterEmail: 'carol.b@email.com',
      priority: 'high',
      status: 'pending',
      date: '2024-01-16',
      category: 'Copyright',
      description: 'Several paragraphs appear to be copied from external sources without attribution.',
      courseAffected: 'Advanced Trading Strategies'
    },
    {
      id: 4,
      title: 'Quiz Answers Incorrect',
      reporter: 'David Miller',
      reporterEmail: 'david.m@email.com',
      priority: 'medium',
      status: 'resolved',
      date: '2024-01-12',
      category: 'Content Quality',
      description: 'Multiple choice answers in chapter 3 quiz are marked incorrectly.',
      courseAffected: 'Technical Analysis'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Quality Reports</h1>
        <p className="text-muted-foreground">Monitor and resolve content quality issues</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search reports..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4">
        {mockReports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                    {report.title}
                  </CardTitle>
                  <CardDescription>
                    Reported by {report.reporter} • {report.date}
                  </CardDescription>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge className={getStatusColor(report.status)}>
                    {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                  </Badge>
                  <Badge className={getPriorityColor(report.priority)}>
                    {report.priority.charAt(0).toUpperCase() + report.priority.slice(1)} Priority
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Category</p>
                  <p className="text-sm">{report.category}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Course Affected</p>
                  <p className="text-sm">{report.courseAffected}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground mb-1">Description</p>
                <p className="text-sm">{report.description}</p>
              </div>

              <div className="flex gap-2">
                {report.status === 'pending' && (
                  <>
                    <Button size="sm" className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Start Investigation
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Contact Reporter
                    </Button>
                  </>
                )}
                {report.status === 'investigating' && (
                  <>
                    <Button size="sm" className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Mark Resolved
                    </Button>
                    <Button variant="outline" size="sm">
                      Update Status
                    </Button>
                  </>
                )}
                {report.status === 'resolved' && (
                  <Button variant="outline" size="sm" disabled>
                    Resolved
                  </Button>
                )}
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reports;