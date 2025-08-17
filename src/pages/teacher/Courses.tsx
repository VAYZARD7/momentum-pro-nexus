import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Users, FileText, Plus, Settings, BarChart3 } from 'lucide-react';

const Courses = () => {
  const { t } = useLanguage();

  const mockCourses = [
    {
      id: 1,
      title: 'Advanced Trading Strategies',
      description: 'Master advanced trading techniques and strategies for professional traders',
      students: 24,
      modules: 12,
      assignments: 8,
      status: 'active',
      progress: 75,
      startDate: '2024-01-15',
      endDate: '2024-04-15',
      duration: '12 weeks'
    },
    {
      id: 2,
      title: 'Risk Management Fundamentals',
      description: 'Learn essential risk management principles for trading and investment',
      students: 18,
      modules: 8,
      assignments: 6,
      status: 'active',
      progress: 60,
      startDate: '2024-02-01',
      endDate: '2024-03-30',
      duration: '8 weeks'
    },
    {
      id: 3,
      title: 'Technical Analysis Mastery',
      description: 'Comprehensive course on technical analysis tools and techniques',
      students: 32,
      modules: 15,
      assignments: 10,
      status: 'active',
      progress: 45,
      startDate: '2024-01-20',
      endDate: '2024-05-20',
      duration: '16 weeks'
    },
    {
      id: 4,
      title: 'Portfolio Management',
      description: 'Strategic portfolio construction and management techniques',
      students: 15,
      modules: 10,
      assignments: 7,
      status: 'draft',
      progress: 0,
      startDate: '2024-03-01',
      endDate: '2024-05-01',
      duration: '10 weeks'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500 text-white';
      case 'draft': return 'bg-yellow-500 text-white';
      case 'completed': return 'bg-blue-500 text-white';
      case 'archived': return 'bg-gray-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Courses</h1>
          <p className="text-muted-foreground">Manage your courses and curriculum</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create New Course
        </Button>
      </div>

      {/* Course Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">3 active, 1 draft</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">Across all courses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">Average completion</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">Student feedback</p>
          </CardContent>
        </Card>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockCourses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription className="mt-1">{course.description}</CardDescription>
                </div>
                <Badge className={getStatusColor(course.status)}>
                  {course.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Course Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="text-lg font-semibold">{course.students}</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <BookOpen className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="text-lg font-semibold">{course.modules}</div>
                    <div className="text-xs text-muted-foreground">Modules</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="text-lg font-semibold">{course.assignments}</div>
                    <div className="text-xs text-muted-foreground">Assignments</div>
                  </div>
                </div>

                {/* Progress */}
                {course.status === 'active' && (
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Course Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                )}

                {/* Course Details */}
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Duration: {course.duration}</p>
                  <p>Start Date: {course.startDate}</p>
                  <p>End Date: {course.endDate}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <BookOpen className="w-4 h-4 mr-1" />
                    View Content
                  </Button>
                  <Button size="sm" variant="outline">
                    <BarChart3 className="w-4 h-4 mr-1" />
                    Analytics
                  </Button>
                  <Button size="sm" variant="outline">
                    <Settings className="w-4 h-4 mr-1" />
                    Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;