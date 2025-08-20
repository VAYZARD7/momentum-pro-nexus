import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Award, TrendingUp, Clock, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const { t } = useLanguage();

  // Mock data
  const mockProgress = 75;
  const upcomingAssignments = [
    { id: 1, title: 'Risk Management Essay', course: 'Risk Management', dueDate: '2024-01-25', priority: 'high' },
    { id: 2, title: 'Technical Analysis Quiz', course: 'Technical Analysis', dueDate: '2024-01-28', priority: 'medium' },
    { id: 3, title: 'Portfolio Review', course: 'Portfolio Management', dueDate: '2024-02-02', priority: 'low' },
  ];

  const recentActivities = [
    { id: 1, type: 'homework', title: 'Submitted: Trading Psychology Assignment', time: '2 hours ago' },
    { id: 2, type: 'grade', title: 'Received grade: Risk Management Quiz - 92%', time: '1 day ago' },
    { id: 3, type: 'course', title: 'Completed: Advanced Trading Strategies Module 3', time: '2 days ago' },
    { id: 4, type: 'certificate', title: 'Earned certificate: Basic Trading Fundamentals', time: '3 days ago' },
    { id: 5, type: 'forum', title: 'Participated in discussion: Market Analysis Techniques', time: '4 days ago' },
  ];

  const currentCourses = [
    { id: 1, title: 'Advanced Technical Analysis', progress: 65, nextLesson: 'Fibonacci Retracements', instructor: 'Dr. Sarah Johnson' },
    { id: 2, title: 'Risk Management', progress: 82, nextLesson: 'Position Sizing Strategies', instructor: 'Prof. Michael Chen' },
    { id: 3, title: 'Trading Psychology', progress: 45, nextLesson: 'Emotional Control Techniques', instructor: 'Dr. Lisa Williams' },
  ];

  const studyGroup = {
    name: 'Advanced Traders Group',
    members: 12,
    nextSession: 'Today at 3:00 PM',
    topic: 'Market Volatility Analysis'
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500 text-white';
      case 'medium': return 'bg-yellow-500 text-white';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {t('welcome')}, John Doe
        </h1>
        <p className="text-muted-foreground">
          Here's an overview of your academic progress
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">In progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Homework</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground mt-1">Due this week</p>
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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Current Courses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Current Courses
            </CardTitle>
            <CardDescription>Your active learning progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentCourses.map((course) => (
                <div key={course.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{course.title}</h4>
                    <span className="text-sm font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Next: {course.nextLesson}</p>
                  <p className="text-xs text-muted-foreground">Instructor: {course.instructor}</p>
                </div>
              ))}
            </div>
            <Button asChild className="w-full mt-4">
              <Link to="/student-dashboard/courses">Continue Learning</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Study Group */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Study Group
            </CardTitle>
            <CardDescription>Collaborative learning with peers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 border rounded-lg mb-4">
              <h4 className="font-medium mb-2">{studyGroup.name}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Members:</span>
                  <span>{studyGroup.members} students</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Next Session:</span>
                  <span className="font-medium">{studyGroup.nextSession}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Topic:</span>
                  <span>{studyGroup.topic}</span>
                </div>
              </div>
            </div>
            <Button className="w-full">Join Session</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Upcoming Assignments
            </CardTitle>
            <CardDescription>Your next deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{assignment.title}</h4>
                    <p className="text-sm text-muted-foreground">{assignment.course}</p>
                    <p className="text-xs text-muted-foreground">Due: {assignment.dueDate}</p>
                  </div>
                  <Badge className={getPriorityColor(assignment.priority)}>
                    {assignment.priority}
                  </Badge>
                </div>
              ))}
            </div>
            <Button asChild className="w-full mt-4">
              <Link to="/student-dashboard/homework">View All Homework</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your latest academic activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Activities
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;