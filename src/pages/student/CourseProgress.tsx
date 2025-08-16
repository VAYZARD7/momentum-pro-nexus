import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, CheckCircle, PlayCircle, FileText, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: 'active' | 'completed' | 'locked';
  totalLessons: number;
  completedLessons: number;
  modules: Module[];
  nextLesson?: string;
  certificate?: boolean;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  completed: boolean;
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  type: 'video' | 'reading' | 'quiz' | 'assignment';
}

const CourseProgress = () => {
  const { t } = useLanguage();

  const courses: Course[] = [
    {
      id: 'basic-trading',
      title: 'Basic Trading Fundamentals',
      description: 'Learn the fundamentals of trading and market analysis',
      progress: 100,
      status: 'completed',
      totalLessons: 16,
      completedLessons: 16,
      certificate: true,
      modules: [
        {
          id: 'module-1',
          title: 'Introduction to Markets',
          completed: true,
          lessons: [
            { id: 'lesson-1', title: 'What is Trading?', duration: '15 min', completed: true, type: 'video' },
            { id: 'lesson-2', title: 'Market Types', duration: '20 min', completed: true, type: 'reading' },
            { id: 'lesson-3', title: 'Basic Terminology Quiz', duration: '10 min', completed: true, type: 'quiz' },
          ]
        }
      ]
    },
    {
      id: 'risk-management',
      title: 'Risk Management',
      description: 'Master the art of managing trading risks',
      progress: 75,
      status: 'active',
      totalLessons: 12,
      completedLessons: 9,
      nextLesson: 'Portfolio Risk Assessment',
      modules: [
        {
          id: 'module-1',
          title: 'Risk Fundamentals',
          completed: true,
          lessons: [
            { id: 'lesson-1', title: 'Types of Risk', duration: '18 min', completed: true, type: 'video' },
            { id: 'lesson-2', title: 'Risk vs Reward', duration: '25 min', completed: true, type: 'reading' },
            { id: 'lesson-3', title: 'Position Sizing', duration: '30 min', completed: true, type: 'video' },
          ]
        },
        {
          id: 'module-2',
          title: 'Advanced Risk Strategies',
          completed: false,
          lessons: [
            { id: 'lesson-4', title: 'Portfolio Risk Assessment', duration: '35 min', completed: false, type: 'video' },
            { id: 'lesson-5', title: 'Risk Management Assignment', duration: '45 min', completed: false, type: 'assignment' },
          ]
        }
      ]
    },
    {
      id: 'technical-analysis',
      title: 'Technical Analysis',
      description: 'Learn to read charts and identify trading opportunities',
      progress: 25,
      status: 'active',
      totalLessons: 20,
      completedLessons: 5,
      nextLesson: 'Support and Resistance Levels',
      modules: [
        {
          id: 'module-1',
          title: 'Chart Basics',
          completed: false,
          lessons: [
            { id: 'lesson-1', title: 'Candlestick Patterns', duration: '22 min', completed: true, type: 'video' },
            { id: 'lesson-2', title: 'Support and Resistance Levels', duration: '28 min', completed: false, type: 'video' },
          ]
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500 text-white';
      case 'active': return 'bg-blue-500 text-white';
      case 'locked': return 'bg-gray-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <PlayCircle className="h-4 w-4" />;
      case 'reading': return <BookOpen className="h-4 w-4" />;
      case 'quiz': return <FileText className="h-4 w-4" />;
      case 'assignment': return <FileText className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t('courses')}</h1>
        <p className="text-muted-foreground">
          Track your progress and continue learning
        </p>
      </div>

      <div className="space-y-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    {course.title}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {course.description}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-3">
                  {course.certificate && (
                    <Badge variant="outline" className="gap-1">
                      <Award className="h-3 w-3" />
                      Certificate
                    </Badge>
                  )}
                  <Badge className={getStatusColor(course.status)}>
                    {course.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Progress Overview */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Overall Progress</span>
                    <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                  </div>
                  <Progress value={course.progress} />
                </div>

                {/* Next Lesson */}
                {course.nextLesson && course.status === 'active' && (
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">Next Lesson:</p>
                      <p className="text-sm text-muted-foreground">{course.nextLesson}</p>
                    </div>
                    <Button>Continue Learning</Button>
                  </div>
                )}

                {/* Course Modules */}
                <div className="space-y-3">
                  <h4 className="font-medium">Course Modules</h4>
                  {course.modules.map((module) => (
                    <div key={module.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-medium">{module.title}</h5>
                        {module.completed && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        {module.lessons.map((lesson) => (
                          <div key={lesson.id} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                            <div className="flex items-center gap-2">
                              {getTypeIcon(lesson.type)}
                              <span className="text-sm">{lesson.title}</span>
                              {lesson.completed && (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {lesson.duration}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  {course.status === 'active' && (
                    <Button className="flex-1">Continue Course</Button>
                  )}
                  {course.status === 'completed' && course.certificate && (
                    <Button variant="outline" className="flex-1">
                      Download Certificate
                    </Button>
                  )}
                  <Button variant="outline" asChild>
                    <Link to={`/course/${course.id}`}>View Details</Link>
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

export default CourseProgress;