import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Play, 
  CheckCircle, 
  Lock, 
  Clock, 
  Users, 
  MessageSquare,
  FileText,
  Award,
  Star,
  Download,
  BookOpen
} from 'lucide-react';

const CourseView = () => {
  const { courseId } = useParams();
  const { t } = useLanguage();
  
  // Mock course data - in real app, this would come from API
  const courseData = {
    id: courseId,
    title: "Advanced Trading Strategies",
    instructor: "Dr. Sarah Johnson",
    instructorAvatar: "/api/placeholder/64/64",
    progress: 65,
    totalLessons: 24,
    completedLessons: 15,
    duration: "8 weeks",
    rating: 4.8,
    enrolled: 1247,
    nextLesson: "Risk Management in Volatile Markets",
    modules: [
      {
        id: 1,
        title: "Introduction to Advanced Trading",
        lessons: [
          { id: 1, title: "Course Overview", duration: "5:30", completed: true, type: "video" },
          { id: 2, title: "Market Analysis Fundamentals", duration: "12:45", completed: true, type: "video" },
          { id: 3, title: "Trading Psychology", duration: "8:20", completed: true, type: "video" },
          { id: 4, title: "Quiz: Fundamentals", duration: "10 min", completed: true, type: "quiz" }
        ]
      },
      {
        id: 2,
        title: "Technical Analysis Deep Dive",
        lessons: [
          { id: 5, title: "Chart Patterns", duration: "15:20", completed: true, type: "video" },
          { id: 6, title: "Indicators and Oscillators", duration: "18:30", completed: true, type: "video" },
          { id: 7, title: "Support and Resistance", duration: "12:10", completed: false, type: "video" },
          { id: 8, title: "Assignment: Pattern Recognition", duration: "30 min", completed: false, type: "assignment" }
        ]
      },
      {
        id: 3,
        title: "Risk Management Strategies",
        lessons: [
          { id: 9, title: "Position Sizing", duration: "10:45", completed: false, type: "video", locked: true },
          { id: 10, title: "Stop Loss Strategies", duration: "14:20", completed: false, type: "video", locked: true },
          { id: 11, title: "Portfolio Diversification", duration: "16:30", completed: false, type: "video", locked: true }
        ]
      }
    ],
    assignments: [
      {
        id: 1,
        title: "Market Analysis Report",
        dueDate: "2024-01-15",
        status: "submitted",
        grade: 85,
        feedback: "Excellent analysis of market trends. Consider adding more technical indicators."
      },
      {
        id: 2,
        title: "Trading Strategy Presentation",
        dueDate: "2024-01-22",
        status: "pending",
        grade: null,
        feedback: null
      },
      {
        id: 3,
        title: "Risk Assessment Project",
        dueDate: "2024-01-28",
        status: "upcoming",
        grade: null,
        feedback: null
      }
    ],
    announcements: [
      {
        id: 1,
        title: "New Trading Simulator Available",
        date: "2024-01-10",
        content: "We've added a new trading simulator to help you practice your strategies risk-free."
      },
      {
        id: 2,
        title: "Live Q&A Session Tomorrow",
        date: "2024-01-12",
        content: "Join us tomorrow at 3 PM EST for a live Q&A session about advanced trading techniques."
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-blue-500';
      case 'pending': return 'bg-yellow-500';
      case 'upcoming': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="h-4 w-4" />;
      case 'quiz': return <FileText className="h-4 w-4" />;
      case 'assignment': return <FileText className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="container mx-auto max-w-6xl py-6 space-y-6">
      {/* Course Header */}
      <Card className="border-glow bg-gradient-to-r from-background to-muted/20">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {courseData.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {courseData.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {courseData.enrolled} students
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {courseData.rating}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={courseData.instructorAvatar} />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{courseData.instructor}</p>
                  <p className="text-sm text-muted-foreground">Course Instructor</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Course Progress</span>
                  <span>{courseData.completedLessons}/{courseData.totalLessons} lessons</span>
                </div>
                <Progress value={courseData.progress} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  {courseData.progress}% complete
                </p>
              </div>
            </div>

            <div className="lg:w-80 space-y-4">
              <Card className="border-primary/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Next Lesson</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {courseData.nextLesson}
                  </p>
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    <Play className="h-4 w-4 mr-2" />
                    Continue Learning
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="content" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="content">Course Content</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          {courseData.modules.map((module) => (
            <Card key={module.id} className="border-glow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {module.title}
                  <Badge variant="outline">
                    {module.lessons.filter(l => l.completed).length}/{module.lessons.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                          {lesson.completed ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : lesson.locked ? (
                            <Lock className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            getLessonIcon(lesson.type)
                          )}
                        </div>
                        <div>
                          <p className={`font-medium ${lesson.locked ? 'text-muted-foreground' : ''}`}>
                            {lesson.title}
                          </p>
                          <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                        </div>
                      </div>
                      {!lesson.locked && (
                        <Button variant="ghost" size="sm">
                          {lesson.completed ? 'Review' : 'Start'}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="assignments" className="space-y-6">
          <div className="grid gap-4">
            {courseData.assignments.map((assignment) => (
              <Card key={assignment.id} className="border-glow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{assignment.title}</CardTitle>
                    <Badge className={getStatusColor(assignment.status)}>
                      {assignment.status}
                    </Badge>
                  </div>
                  <CardDescription>
                    Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {assignment.grade && (
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span className="font-medium">Grade: {assignment.grade}%</span>
                      </div>
                    )}
                    {assignment.feedback && (
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="text-sm">{assignment.feedback}</p>
                      </div>
                    )}
                    <div className="flex gap-2">
                      {assignment.status === 'upcoming' && (
                        <Button variant="outline">
                          <FileText className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      )}
                      {assignment.status === 'submitted' && (
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download Submission
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="discussions" className="space-y-6">
          <Card className="border-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Course Discussions
              </CardTitle>
              <CardDescription>
                Connect with fellow students and your instructor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full" variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Start New Discussion
                </Button>
                
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>MK</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Mike Chen</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <p className="text-sm">
                      Question about the RSI indicator calculation in lesson 6. Can someone help explain the formula?
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span>3 replies</span>
                      <span>5 likes</span>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>AL</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Anna Lopez</p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                    <p className="text-sm">
                      Great course so far! The practical examples really help understand the concepts.
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span>8 replies</span>
                      <span>12 likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <Card className="border-glow">
            <CardHeader>
              <CardTitle>Course Resources</CardTitle>
              <CardDescription>
                Supplementary materials and downloads
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Trading Strategy Templates</p>
                        <p className="text-sm text-muted-foreground">PDF • 2.4 MB</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium">Risk Calculator Spreadsheet</p>
                        <p className="text-sm text-muted-foreground">XLSX • 1.8 MB</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-purple-500" />
                      <div>
                        <p className="font-medium">Market Analysis Checklist</p>
                        <p className="text-sm text-muted-foreground">PDF • 1.2 MB</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-glow">
            <CardHeader>
              <CardTitle>Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courseData.announcements.map((announcement) => (
                  <div key={announcement.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{announcement.title}</h3>
                      <span className="text-xs text-muted-foreground">
                        {new Date(announcement.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{announcement.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseView;