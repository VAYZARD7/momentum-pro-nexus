import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, FileText, BookOpen, Calendar, CheckCircle, Clock } from 'lucide-react';

const TeacherDashboard = () => {
  const { t } = useLanguage();

  // Mock data for teacher
  const mockStudents = [
    { id: 1, name: 'Alice Johnson', course: 'Beginner Trading', progress: 85, lastActive: '2024-01-15' },
    { id: 2, name: 'Bob Smith', course: 'Advanced Strategies', progress: 72, lastActive: '2024-01-14' },
    { id: 3, name: 'Carol Davis', course: 'Technical Analysis', progress: 91, lastActive: '2024-01-16' }
  ];

  const mockHomework = [
    { id: 1, student: 'Alice Johnson', assignment: 'Risk Management Essay', submitted: '2024-01-15', status: 'pending' },
    { id: 2, student: 'Bob Smith', assignment: 'Chart Analysis', submitted: '2024-01-14', status: 'graded' },
    { id: 3, student: 'Carol Davis', assignment: 'Trading Plan', submitted: '2024-01-16', status: 'pending' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              {t('teacher')} {t('dashboard')}
            </h1>
            <p className="text-muted-foreground">Manage your courses and students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground mt-1">+2 this week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground mt-1">Homework to grade</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground mt-1">Currently teaching</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Week</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground mt-1">Scheduled lessons</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Homework to Review
                </CardTitle>
                <CardDescription>Recent student submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockHomework.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.assignment}</h4>
                        <p className="text-sm text-muted-foreground">by {item.student}</p>
                        <p className="text-xs text-muted-foreground">{t('submittedDate')}: {item.submitted}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {item.status === 'pending' ? (
                          <Button size="sm">{t('grade')}</Button>
                        ) : (
                          <Badge className="bg-green-500 text-white">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {t('graded')}
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
                  <Users className="h-5 w-5" />
                  Student Progress
                </CardTitle>
                <CardDescription>Monitor student performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockStudents.map((student) => (
                    <div key={student.id} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{student.name}</h4>
                          <p className="text-sm text-muted-foreground">{student.course}</p>
                        </div>
                        <span className="text-sm font-medium">{student.progress}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Last active: {student.lastActive}
                      </p>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  View All Students
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

export default TeacherDashboard;