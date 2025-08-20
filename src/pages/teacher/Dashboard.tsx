import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Users, FileText, BookOpen, TrendingUp, Clock, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  const { t } = useLanguage();

  // Mock data
  const mockStudents = [
    { id: 1, name: 'John Doe', course: 'Advanced Trading', progress: 85, lastActive: '2 hours ago', grade: 'A-' },
    { id: 2, name: 'Jane Smith', course: 'Risk Management', progress: 92, lastActive: '1 day ago', grade: 'A+' },
    { id: 3, name: 'Mike Johnson', course: 'Technical Analysis', progress: 78, lastActive: '3 hours ago', grade: 'B+' },
    { id: 4, name: 'Sarah Wilson', course: 'Portfolio Management', progress: 95, lastActive: '5 hours ago', grade: 'A+' },
    { id: 5, name: 'Emily Chen', course: 'Advanced Trading', progress: 88, lastActive: '4 hours ago', grade: 'A' },
    { id: 6, name: 'David Brown', course: 'Risk Management', progress: 73, lastActive: '6 hours ago', grade: 'B' },
  ];

  const upcomingClasses = [
    { id: 1, title: 'Advanced Technical Analysis', time: 'Today 2:00 PM', students: 15, room: 'Virtual Room A' },
    { id: 2, title: 'Risk Management Basics', time: 'Tomorrow 10:00 AM', students: 22, room: 'Virtual Room B' },
    { id: 3, title: 'Trading Psychology Workshop', time: 'Tomorrow 3:00 PM', students: 18, room: 'Virtual Room C' },
  ];

  const mockHomework = [
    { id: 1, assignment: 'Risk Assessment Report', student: 'John Doe', course: 'Risk Management', submitted: '2024-01-20', status: 'pending' },
    { id: 2, assignment: 'Technical Analysis Chart', student: 'Jane Smith', course: 'Technical Analysis', submitted: '2024-01-19', status: 'graded' },
    { id: 3, assignment: 'Portfolio Optimization', student: 'Mike Johnson', course: 'Portfolio Management', submitted: '2024-01-18', status: 'pending' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500 text-white';
      case 'graded': return 'bg-green-500 text-white';
      case 'overdue': return 'bg-red-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Teacher Dashboard
        </h1>
        <p className="text-muted-foreground">
          Manage your students, courses, and assignments
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground mt-1">+12 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-1">Assignments to grade</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground mt-1">Currently teaching</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.3%</div>
            <p className="text-xs text-muted-foreground mt-1">Class average</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Upcoming Classes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Classes
            </CardTitle>
            <CardDescription>Your scheduled teaching sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingClasses.map((class_) => (
                <div key={class_.id} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{class_.title}</h4>
                    <Badge variant="outline">{class_.students} students</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{class_.time}</p>
                  <p className="text-xs text-muted-foreground">{class_.room}</p>
                  <Button size="sm" className="mt-2">Join Class</Button>
                </div>
              ))}
            </div>
            <Button asChild className="w-full mt-4">
              <Link to="/teacher-dashboard/schedule">View Full Schedule</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Course Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Course Performance
            </CardTitle>
            <CardDescription>Analytics for your courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { course: 'Advanced Trading', completion: 82, satisfaction: 4.8, students: 45 },
                { course: 'Risk Management', completion: 88, satisfaction: 4.9, students: 38 },
                { course: 'Technical Analysis', completion: 75, satisfaction: 4.7, students: 52 }
              ].map((course, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <h4 className="font-medium mb-2">{course.course}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completion Rate:</span>
                      <span className="font-medium">{course.completion}%</span>
                    </div>
                    <Progress value={course.completion} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>Satisfaction:</span>
                      <span className="font-medium">{course.satisfaction}/5.0</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Active Students:</span>
                      <span className="font-medium">{course.students}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" asChild className="w-full mt-4">
              <Link to="/teacher-dashboard/analytics">View Detailed Analytics</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Homework to Review */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Homework to Review
            </CardTitle>
            <CardDescription>Recent submissions requiring your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockHomework.map((homework) => (
                <div key={homework.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{homework.assignment}</h4>
                    <p className="text-sm text-muted-foreground">{homework.student} - {homework.course}</p>
                    <p className="text-xs text-muted-foreground">Submitted: {homework.submitted}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(homework.status)}>
                      {homework.status}
                    </Badge>
                    {homework.status === 'pending' && (
                      <Button size="sm">Grade</Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button asChild className="w-full mt-4">
              <Link to="/teacher-dashboard/grading">View All Submissions</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Student Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Top Performing Students
            </CardTitle>
            <CardDescription>Students excelling in your courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockStudents.slice(0, 4).map((student) => (
                <div key={student.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{student.name}</h4>
                    <p className="text-sm text-muted-foreground">{student.course}</p>
                    <p className="text-xs text-muted-foreground">Last active: {student.lastActive}</p>
                  </div>
                  <div className="text-right flex items-center gap-3">
                    <Badge variant="secondary">{student.grade}</Badge>
                    <div>
                      <div className="text-sm font-medium">{student.progress}%</div>
                      <Progress value={student.progress} className="w-16 mt-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" asChild className="w-full mt-4">
              <Link to="/teacher-dashboard/students">View All Students</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;