import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Award, 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  BookOpen, 
  FileText, 
  Download,
  Eye
} from 'lucide-react';

interface Grade {
  id: string;
  assignment: string;
  course: string;
  type: 'quiz' | 'assignment' | 'exam' | 'project' | 'participation';
  score: number;
  maxScore: number;
  percentage: number;
  grade: string;
  submittedDate: string;
  gradedDate: string;
  feedback?: string;
  instructor: string;
  weight: number;
}

interface CourseGrade {
  courseId: string;
  courseName: string;
  currentGrade: string;
  percentage: number;
  credits: number;
  instructor: string;
  semester: string;
  grades: Grade[];
}

const Grades = () => {
  const { t } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState<string>('all');

  const courseGrades: CourseGrade[] = [
    {
      courseId: 'rm001',
      courseName: 'Risk Management',
      currentGrade: 'A-',
      percentage: 88.5,
      credits: 4,
      instructor: 'Dr. Sarah Johnson',
      semester: 'Fall 2024',
      grades: [
        {
          id: '1',
          assignment: 'Portfolio Risk Assessment',
          course: 'Risk Management',
          type: 'assignment',
          score: 92,
          maxScore: 100,
          percentage: 92,
          grade: 'A-',
          submittedDate: '2024-01-15',
          gradedDate: '2024-01-17',
          feedback: 'Excellent analysis of risk metrics. Consider exploring additional hedging strategies.',
          instructor: 'Dr. Sarah Johnson',
          weight: 25
        },
        {
          id: '2',
          assignment: 'Risk Management Quiz',
          course: 'Risk Management',
          type: 'quiz',
          score: 85,
          maxScore: 100,
          percentage: 85,
          grade: 'B+',
          submittedDate: '2024-01-10',
          gradedDate: '2024-01-11',
          feedback: 'Good understanding of VaR calculations.',
          instructor: 'Dr. Sarah Johnson',
          weight: 15
        }
      ]
    },
    {
      courseId: 'ta001',
      courseName: 'Technical Analysis',
      currentGrade: 'B+',
      percentage: 86.2,
      credits: 3,
      instructor: 'Prof. Michael Chen',
      semester: 'Fall 2024',
      grades: [
        {
          id: '3',
          assignment: 'Chart Pattern Analysis',
          course: 'Technical Analysis',
          type: 'project',
          score: 88,
          maxScore: 100,
          percentage: 88,
          grade: 'B+',
          submittedDate: '2024-01-12',
          gradedDate: '2024-01-14',
          feedback: 'Well-identified patterns. Improve on trend line accuracy.',
          instructor: 'Prof. Michael Chen',
          weight: 30
        },
        {
          id: '4',
          assignment: 'Mid-term Examination',
          course: 'Technical Analysis',
          type: 'exam',
          score: 84,
          maxScore: 100,
          percentage: 84,
          grade: 'B',
          submittedDate: '2024-01-08',
          gradedDate: '2024-01-10',
          feedback: 'Strong performance on candlestick patterns section.',
          instructor: 'Prof. Michael Chen',
          weight: 40
        }
      ]
    },
    {
      courseId: 'btf001',
      courseName: 'Basic Trading Fundamentals',
      currentGrade: 'A',
      percentage: 94.7,
      credits: 3,
      instructor: 'Dr. Emily Rodriguez',
      semester: 'Fall 2024',
      grades: [
        {
          id: '5',
          assignment: 'Trading Strategy Presentation',
          course: 'Basic Trading Fundamentals',
          type: 'project',
          score: 96,
          maxScore: 100,
          percentage: 96,
          grade: 'A',
          submittedDate: '2024-01-05',
          gradedDate: '2024-01-07',
          feedback: 'Outstanding presentation with clear strategy explanation.',
          instructor: 'Dr. Emily Rodriguez',
          weight: 35
        }
      ]
    }
  ];

  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 80) return 'text-blue-600';
    if (percentage >= 70) return 'text-yellow-600';
    if (percentage >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getGradeBadgeColor = (grade: string) => {
    const letter = grade[0];
    switch (letter) {
      case 'A': return 'bg-green-500 text-white';
      case 'B': return 'bg-blue-500 text-white';
      case 'C': return 'bg-yellow-500 text-white';
      case 'D': return 'bg-orange-500 text-white';
      case 'F': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'quiz': return <FileText className="h-4 w-4" />;
      case 'assignment': return <FileText className="h-4 w-4" />;
      case 'exam': return <BookOpen className="h-4 w-4" />;
      case 'project': return <Award className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const overallGPA = courseGrades.reduce((acc, course) => 
    acc + (course.percentage / 100 * 4 * course.credits), 0
  ) / courseGrades.reduce((acc, course) => acc + course.credits, 0);

  const gradeDistribution = [
    { name: 'A', value: courseGrades.filter(c => c.currentGrade.startsWith('A')).length, color: '#10b981' },
    { name: 'B', value: courseGrades.filter(c => c.currentGrade.startsWith('B')).length, color: '#3b82f6' },
    { name: 'C', value: courseGrades.filter(c => c.currentGrade.startsWith('C')).length, color: '#f59e0b' },
    { name: 'D', value: courseGrades.filter(c => c.currentGrade.startsWith('D')).length, color: '#f97316' },
    { name: 'F', value: courseGrades.filter(c => c.currentGrade.startsWith('F')).length, color: '#ef4444' }
  ].filter(item => item.value > 0);

  const progressData = courseGrades.map(course => ({
    name: course.courseName.split(' ')[0],
    percentage: course.percentage
  }));

  const allGrades = courseGrades.flatMap(course => course.grades);
  const filteredGrades = selectedCourse === 'all' 
    ? allGrades 
    : courseGrades.find(c => c.courseId === selectedCourse)?.grades || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Grades & Performance</h1>
          <p className="text-muted-foreground">
            Track your academic performance and progress
          </p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export Transcript
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{overallGPA.toFixed(2)}</div>
            <div className="text-sm text-muted-foreground">Overall GPA</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{courseGrades.length}</div>
            <div className="text-sm text-muted-foreground">Active Courses</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {courseGrades.reduce((acc, course) => acc + course.credits, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Credits</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {(courseGrades.reduce((acc, course) => acc + course.percentage, 0) / courseGrades.length).toFixed(1)}%
            </div>
            <div className="text-sm text-muted-foreground">Average Score</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">By Course</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Course Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Course Performance</CardTitle>
                <CardDescription>Your performance across all courses</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="percentage" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Grade Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
                <CardDescription>Distribution of your course grades</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={gradeDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {gradeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Course Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Course Summary</CardTitle>
              <CardDescription>Overview of all your courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courseGrades.map((course) => (
                  <div key={course.courseId} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold">{course.courseName}</h4>
                      <p className="text-sm text-muted-foreground">{course.instructor} • {course.semester}</p>
                      <div className="mt-2">
                        <Progress value={course.percentage} className="h-2" />
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <Badge className={getGradeBadgeColor(course.currentGrade)}>
                        {course.currentGrade}
                      </Badge>
                      <p className={`text-sm font-medium ${getGradeColor(course.percentage)}`}>
                        {course.percentage}%
                      </p>
                      <p className="text-xs text-muted-foreground">{course.credits} credits</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <div className="space-y-6">
            {courseGrades.map((course) => (
              <Card key={course.courseId}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{course.courseName}</CardTitle>
                      <CardDescription>
                        {course.instructor} • {course.semester} • {course.credits} credits
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge className={getGradeBadgeColor(course.currentGrade)}>
                        {course.currentGrade}
                      </Badge>
                      <p className={`text-lg font-bold ${getGradeColor(course.percentage)}`}>
                        {course.percentage}%
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {course.grades.map((grade) => (
                      <div key={grade.id} className="flex items-center justify-between p-3 border rounded">
                        <div className="flex items-center gap-3">
                          {getTypeIcon(grade.type)}
                          <div>
                            <h5 className="font-medium">{grade.assignment}</h5>
                            <p className="text-sm text-muted-foreground capitalize">
                              {grade.type} • Weight: {grade.weight}%
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getGradeBadgeColor(grade.grade)}>
                            {grade.grade}
                          </Badge>
                          <p className="text-sm font-medium">
                            {grade.score}/{grade.maxScore} ({grade.percentage}%)
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(grade.gradedDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Assignments</CardTitle>
                  <CardDescription>Complete list of graded assignments</CardDescription>
                </div>
                <select 
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="px-3 py-1 border rounded"
                >
                  <option value="all">All Courses</option>
                  {courseGrades.map(course => (
                    <option key={course.courseId} value={course.courseId}>
                      {course.courseName}
                    </option>
                  ))}
                </select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredGrades.map((grade) => (
                  <Card key={grade.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="p-2 bg-muted rounded">
                            {getTypeIcon(grade.type)}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{grade.assignment}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {grade.course} • {grade.instructor}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>Submitted: {new Date(grade.submittedDate).toLocaleDateString()}</span>
                              <span>Graded: {new Date(grade.gradedDate).toLocaleDateString()}</span>
                              <span className="capitalize">{grade.type}</span>
                              <span>Weight: {grade.weight}%</span>
                            </div>
                            {grade.feedback && (
                              <div className="mt-3 p-3 bg-muted rounded">
                                <p className="text-sm"><strong>Feedback:</strong> {grade.feedback}</p>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <Badge className={getGradeBadgeColor(grade.grade)}>
                            {grade.grade}
                          </Badge>
                          <p className={`text-lg font-bold ${getGradeColor(grade.percentage)}`}>
                            {grade.score}/{grade.maxScore}
                          </p>
                          <p className={`text-sm ${getGradeColor(grade.percentage)}`}>
                            {grade.percentage}%
                          </p>
                          <div className="flex gap-1 mt-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Trend</CardTitle>
                <CardDescription>Your grade trend over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={allGrades.map((grade, index) => ({
                    assignment: `Assignment ${index + 1}`,
                    percentage: grade.percentage
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="assignment" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="percentage" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Performance by Type */}
            <Card>
              <CardHeader>
                <CardTitle>Performance by Assignment Type</CardTitle>
                <CardDescription>How you perform in different types of assessments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['quiz', 'assignment', 'exam', 'project'].map(type => {
                    const typeGrades = allGrades.filter(g => g.type === type);
                    const average = typeGrades.length > 0 
                      ? typeGrades.reduce((acc, g) => acc + g.percentage, 0) / typeGrades.length 
                      : 0;
                    
                    return (
                      <div key={type} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="capitalize font-medium">{type}s</span>
                          <span className={`font-bold ${getGradeColor(average)}`}>
                            {average.toFixed(1)}%
                          </span>
                        </div>
                        <Progress value={average} />
                        <p className="text-xs text-muted-foreground">
                          Based on {typeGrades.length} {type}{typeGrades.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Grades;