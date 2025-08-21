import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  MessageSquare,
  FileText,
  BarChart3,
  Settings,
  Clock,
  CheckCircle,
  AlertCircle,
  Upload
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TeacherCourseView = () => {
  const { courseId } = useParams();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isAddingLesson, setIsAddingLesson] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Mock course data
  const courseData = {
    id: courseId,
    title: "Advanced Trading Strategies",
    description: "Master advanced trading techniques and risk management strategies",
    enrolled: 89,
    completion: 67,
    rating: 4.8,
    totalRevenue: 12450,
    modules: [
      {
        id: 1,
        title: "Introduction to Advanced Trading",
        lessons: [
          { id: 1, title: "Course Overview", type: "video", duration: "5:30", views: 89, completed: 89 },
          { id: 2, title: "Market Analysis Fundamentals", type: "video", duration: "12:45", views: 85, completed: 82 },
          { id: 3, title: "Quiz: Fundamentals", type: "quiz", duration: "10 min", views: 78, completed: 76 }
        ]
      },
      {
        id: 2,
        title: "Technical Analysis Deep Dive",
        lessons: [
          { id: 4, title: "Chart Patterns", type: "video", duration: "15:20", views: 72, completed: 68 },
          { id: 5, title: "Assignment: Pattern Recognition", type: "assignment", duration: "30 min", views: 65, completed: 45 }
        ]
      }
    ],
    students: [
      { id: 1, name: "John Smith", email: "john@example.com", progress: 85, lastActive: "2024-01-15", grade: "A" },
      { id: 2, name: "Sarah Johnson", email: "sarah@example.com", progress: 92, lastActive: "2024-01-16", grade: "A" },
      { id: 3, name: "Mike Chen", email: "mike@example.com", progress: 45, lastActive: "2024-01-10", grade: "C" },
      { id: 4, name: "Emma Davis", email: "emma@example.com", progress: 78, lastActive: "2024-01-14", grade: "B" }
    ],
    assignments: [
      { id: 1, title: "Market Analysis Report", submissions: 45, pending: 12, graded: 33, avgGrade: 82 },
      { id: 2, title: "Trading Strategy", submissions: 38, pending: 8, graded: 30, avgGrade: 78 },
      { id: 3, title: "Risk Assessment", submissions: 22, pending: 15, graded: 7, avgGrade: 85 }
    ],
    analytics: {
      totalViews: 1247,
      completionRate: 67,
      averageTime: 45,
      dropoffPoints: ["Module 2, Lesson 3", "Module 3, Lesson 1"]
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "text-green-600";
    if (progress >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return "bg-green-500";
      case 'B': return "bg-blue-500";
      case 'C': return "bg-yellow-500";
      case 'D': return "bg-orange-500";
      case 'F': return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="container mx-auto max-w-7xl py-6 space-y-6">
      {/* Course Header */}
      <Card className="border-glow bg-gradient-to-r from-background to-muted/20">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {courseData.title}
              </h1>
              <p className="text-muted-foreground">{courseData.description}</p>
            </div>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Course Settings
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{courseData.enrolled}</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <BarChart3 className="h-6 w-6 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold">{courseData.completion}%</div>
              <div className="text-sm text-muted-foreground">Avg Completion</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <CheckCircle className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
              <div className="text-2xl font-bold">{courseData.rating}</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <FileText className="h-6 w-6 mx-auto mb-2 text-blue-500" />
              <div className="text-2xl font-bold">${courseData.totalRevenue}</div>
              <div className="text-sm text-muted-foreground">Revenue</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="content" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Course Content</h2>
            <Dialog open={isAddingLesson} onOpenChange={setIsAddingLesson}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-primary hover:opacity-90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Lesson
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Add New Lesson</DialogTitle>
                  <DialogDescription>
                    Create a new lesson for your course
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="lessonTitle">Lesson Title</Label>
                    <Input id="lessonTitle" placeholder="Enter lesson title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lessonType">Lesson Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select lesson type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="quiz">Quiz</SelectItem>
                        <SelectItem value="assignment">Assignment</SelectItem>
                        <SelectItem value="reading">Reading</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lessonDescription">Description</Label>
                    <Textarea id="lessonDescription" placeholder="Lesson description" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input id="duration" placeholder="e.g., 15:30 or 30 min" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddingLesson(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Create Lesson
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {courseData.modules.map((module) => (
            <Card key={module.id} className="border-glow">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{module.title}</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {module.lessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                          {lesson.type === 'video' && <Eye className="h-4 w-4" />}
                          {lesson.type === 'quiz' && <FileText className="h-4 w-4" />}
                          {lesson.type === 'assignment' && <FileText className="h-4 w-4" />}
                        </div>
                        <div>
                          <p className="font-medium">{lesson.title}</p>
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <span>{lesson.duration}</span>
                            <span>{lesson.views} views</span>
                            <span>{lesson.completed} completed</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress 
                          value={(lesson.completed / courseData.enrolled) * 100} 
                          className="w-20 h-2" 
                        />
                        <span className="text-sm font-medium">
                          {Math.round((lesson.completed / courseData.enrolled) * 100)}%
                        </span>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <Card className="border-glow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Students ({courseData.students.length})
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Export List
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courseData.students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={student.progress} className="w-16 h-2" />
                          <span className={`text-sm font-medium ${getProgressColor(student.progress)}`}>
                            {student.progress}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getGradeColor(student.grade)}>
                          {student.grade}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(student.lastActive).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Assignments</h2>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Create Assignment
            </Button>
          </div>

          <div className="grid gap-4">
            {courseData.assignments.map((assignment) => (
              <Card key={assignment.id} className="border-glow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{assignment.title}</CardTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{assignment.submissions}</div>
                      <div className="text-sm text-muted-foreground">Submissions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">{assignment.pending}</div>
                      <div className="text-sm text-muted-foreground">Pending</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{assignment.graded}</div>
                      <div className="text-sm text-muted-foreground">Graded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{assignment.avgGrade}%</div>
                      <div className="text-sm text-muted-foreground">Avg Grade</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      Grade Submissions ({assignment.pending} pending)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-glow">
              <CardContent className="p-6 text-center">
                <Eye className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <div className="text-2xl font-bold">{courseData.analytics.totalViews}</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </CardContent>
            </Card>
            <Card className="border-glow">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <div className="text-2xl font-bold">{courseData.analytics.completionRate}%</div>
                <div className="text-sm text-muted-foreground">Completion Rate</div>
              </CardContent>
            </Card>
            <Card className="border-glow">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                <div className="text-2xl font-bold">{courseData.analytics.averageTime}m</div>
                <div className="text-sm text-muted-foreground">Avg Time/Lesson</div>
              </CardContent>
            </Card>
            <Card className="border-glow">
              <CardContent className="p-6 text-center">
                <AlertCircle className="h-8 w-8 mx-auto mb-2 text-red-500" />
                <div className="text-2xl font-bold">{courseData.analytics.dropoffPoints.length}</div>
                <div className="text-sm text-muted-foreground">Drop-off Points</div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-glow">
            <CardHeader>
              <CardTitle>Drop-off Analysis</CardTitle>
              <CardDescription>
                Lessons where students commonly stop progressing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {courseData.analytics.dropoffPoints.map((point, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <span>{point}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="discussions" className="space-y-6">
          <Card className="border-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Course Discussions
              </CardTitle>
              <CardDescription>
                Moderate and participate in course discussions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Create Announcement
                </Button>
                
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">Question about RSI Calculation</p>
                        <p className="text-sm text-muted-foreground">by Mike Chen • 2 hours ago</p>
                      </div>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                    <p className="text-sm mb-3">
                      Can someone explain the RSI formula in more detail? I'm having trouble understanding...
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Reply</Button>
                      <Button variant="outline" size="sm">Mark Answered</Button>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">Great Course Content!</p>
                        <p className="text-sm text-muted-foreground">by Anna Lopez • 1 day ago</p>
                      </div>
                      <Badge className="bg-green-500">Answered</Badge>
                    </div>
                    <p className="text-sm mb-3">
                      Really enjoying the practical examples. They make the concepts much clearer.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Reply</Button>
                      <Button variant="outline" size="sm">Pin</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeacherCourseView;