import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Eye, 
  MessageSquare,
  FileText,
  Star,
  Users,
  Clock,
  TrendingUp,
  Flag,
  Shield
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CuratorCourseView = () => {
  const { courseId } = useParams();
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [reviewStatus, setReviewStatus] = useState('pending');
  const [feedback, setFeedback] = useState('');

  // Mock course data for review
  const courseData = {
    id: courseId,
    title: "Advanced Trading Strategies",
    instructor: "Dr. Sarah Johnson",
    instructorAvatar: "/api/placeholder/64/64",
    instructorBio: "15+ years trading experience, PhD in Finance",
    status: "pending_review",
    submittedDate: "2024-01-10",
    category: "Trading",
    level: "Advanced",
    estimatedDuration: "8 weeks",
    price: 299,
    description: "Master advanced trading techniques including algorithmic trading, risk management, and portfolio optimization strategies used by professional traders.",
    learningObjectives: [
      "Implement advanced technical analysis strategies",
      "Develop algorithmic trading systems",
      "Master risk management techniques",
      "Optimize portfolio performance"
    ],
    prerequisites: [
      "Basic trading knowledge",
      "Understanding of financial markets",
      "Experience with trading platforms"
    ],
    targetAudience: "Professional traders, finance professionals, advanced trading enthusiasts",
    modules: [
      {
        id: 1,
        title: "Advanced Technical Analysis",
        lessons: [
          { id: 1, title: "Multi-timeframe Analysis", type: "video", duration: "15:30", status: "approved" },
          { id: 2, title: "Advanced Chart Patterns", type: "video", duration: "22:10", status: "approved" },
          { id: 3, title: "Custom Indicators", type: "video", duration: "18:45", status: "flagged" },
          { id: 4, title: "Quiz: Technical Analysis", type: "quiz", duration: "15 min", status: "approved" }
        ]
      },
      {
        id: 2,
        title: "Algorithmic Trading Systems",
        lessons: [
          { id: 5, title: "Trading Bot Development", type: "video", duration: "25:20", status: "pending" },
          { id: 6, title: "Backtesting Strategies", type: "video", duration: "20:15", status: "pending" },
          { id: 7, title: "API Integration", type: "video", duration: "18:30", status: "pending" }
        ]
      }
    ],
    qualityMetrics: {
      contentQuality: 85,
      videoQuality: 92,
      audioQuality: 88,
      instructionalDesign: 78,
      accessibility: 72
    },
    complianceChecks: {
      copyright: "passed",
      content: "flagged",
      privacy: "passed",
      terms: "passed"
    },
    similarCourses: [
      { title: "Trading Fundamentals", rating: 4.2, students: 1240 },
      { title: "Risk Management", rating: 4.6, students: 890 },
      { title: "Technical Analysis", rating: 4.4, students: 1580 }
    ],
    feedback: [
      {
        id: 1,
        reviewer: "Dr. Michael Thompson",
        date: "2024-01-12",
        type: "content",
        severity: "medium",
        message: "Some trading strategies lack proper risk disclaimers",
        resolved: false
      },
      {
        id: 2,
        reviewer: "Sarah Williams",
        date: "2024-01-11",
        type: "technical",
        severity: "low",
        message: "Video quality could be improved in lesson 3",
        resolved: true
      }
    ]
  };

  const handleApprove = () => {
    toast({
      title: "Course Approved",
      description: "The course has been approved and will be published.",
    });
  };

  const handleReject = () => {
    toast({
      title: "Course Rejected",
      description: "The course has been rejected. Feedback sent to instructor.",
      variant: "destructive"
    });
  };

  const handleRequestChanges = () => {
    toast({
      title: "Changes Requested",
      description: "Change requests sent to instructor for review.",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-500';
      case 'flagged': return 'bg-yellow-500';
      case 'rejected': return 'bg-red-500';
      case 'pending': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="container mx-auto max-w-7xl py-6 space-y-6">
      {/* Course Review Header */}
      <Card className="border-glow bg-gradient-to-r from-background to-muted/20">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {courseData.title}
                </h1>
                <Badge className={getStatusColor(courseData.status)}>
                  {courseData.status.replace('_', ' ').toUpperCase()}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={courseData.instructorAvatar} />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{courseData.instructor}</p>
                  <p className="text-sm text-muted-foreground">{courseData.instructorBio}</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Submitted:</span>
                  <div className="font-medium">{new Date(courseData.submittedDate).toLocaleDateString()}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Category:</span>
                  <div className="font-medium">{courseData.category}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Level:</span>
                  <div className="font-medium">{courseData.level}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Price:</span>
                  <div className="font-medium">${courseData.price}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve
              </Button>
              <Button variant="outline" className="text-yellow-600 border-yellow-600 hover:bg-yellow-50">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Request Changes
              </Button>
              <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                <XCircle className="h-4 w-4 mr-2" />
                Reject
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Review Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="quality">Quality</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="market">Market Analysis</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-glow">
              <CardHeader>
                <CardTitle>Course Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{courseData.description}</p>
              </CardContent>
            </Card>

            <Card className="border-glow">
              <CardHeader>
                <CardTitle>Learning Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {courseData.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-glow">
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {courseData.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-glow">
              <CardHeader>
                <CardTitle>Target Audience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{courseData.targetAudience}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          {courseData.modules.map((module) => (
            <Card key={module.id} className="border-glow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {module.title}
                  <Badge variant="outline">
                    {module.lessons.length} lessons
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {module.lessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                          {lesson.type === 'video' && <Eye className="h-4 w-4" />}
                          {lesson.type === 'quiz' && <FileText className="h-4 w-4" />}
                        </div>
                        <div>
                          <p className="font-medium">{lesson.title}</p>
                          <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(lesson.status)}>
                          {lesson.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {lesson.status === 'flagged' && (
                          <Button variant="outline" size="sm">
                            <Flag className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="quality" className="space-y-6">
          <Card className="border-glow">
            <CardHeader>
              <CardTitle>Quality Metrics</CardTitle>
              <CardDescription>
                Automated quality assessment scores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(courseData.qualityMetrics).map(([metric, score]) => (
                  <div key={metric} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="capitalize">{metric.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="font-medium">{score}%</span>
                    </div>
                    <Progress value={score} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-glow">
            <CardHeader>
              <CardTitle>Review Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reviewNotes">Internal Review Notes</Label>
                  <Textarea
                    id="reviewNotes"
                    placeholder="Add your review notes here..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recommendation">Recommendation</Label>
                  <Select value={reviewStatus} onValueChange={setReviewStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="approve">Approve for Publication</SelectItem>
                      <SelectItem value="minor_changes">Request Minor Changes</SelectItem>
                      <SelectItem value="major_changes">Request Major Changes</SelectItem>
                      <SelectItem value="reject">Reject Course</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card className="border-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Compliance Checks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(courseData.complianceChecks).map(([check, status]) => (
                  <div key={check} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        status === 'passed' ? 'bg-green-500' : 
                        status === 'flagged' ? 'bg-yellow-500' : 'bg-red-500'
                      }`} />
                      <span className="capitalize font-medium">
                        {check.replace(/([A-Z])/g, ' $1').trim()} Compliance
                      </span>
                    </div>
                    <Badge className={
                      status === 'passed' ? 'bg-green-500' : 
                      status === 'flagged' ? 'bg-yellow-500' : 'bg-red-500'
                    }>
                      {status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {courseData.complianceChecks.content === 'flagged' && (
            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800">
                  <AlertTriangle className="h-5 w-5" />
                  Content Compliance Issues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-yellow-700">
                    • Some trading strategies lack proper risk disclaimers
                  </p>
                  <p className="text-sm text-yellow-700">
                    • Financial advice disclaimer needs to be more prominent
                  </p>
                  <p className="text-sm text-yellow-700">
                    • Consider adding regulatory compliance information
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="market" className="space-y-6">
          <Card className="border-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Market Analysis
              </CardTitle>
              <CardDescription>
                Comparison with similar courses in the marketplace
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">${courseData.price}</div>
                    <div className="text-sm text-muted-foreground">Proposed Price</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">$250</div>
                    <div className="text-sm text-muted-foreground">Market Average</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">High</div>
                    <div className="text-sm text-muted-foreground">Demand Level</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Similar Courses</h3>
                  {courseData.similarCourses.map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{course.title}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                          <Users className="h-3 w-3 ml-2" />
                          <span>{course.students} students</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <Card className="border-glow">
            <CardHeader>
              <CardTitle>Review Feedback</CardTitle>
              <CardDescription>
                Previous feedback and comments from review team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courseData.feedback.map((item) => (
                  <div key={item.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{item.reviewer}</span>
                        <Badge variant="outline" className={getSeverityColor(item.severity)}>
                          {item.severity}
                        </Badge>
                        <Badge variant="outline">{item.type}</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm mb-3">{item.message}</p>
                    <div className="flex items-center gap-2">
                      {item.resolved ? (
                        <Badge className="bg-green-500">Resolved</Badge>
                      ) : (
                        <Badge className="bg-yellow-500">Open</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-glow">
            <CardHeader>
              <CardTitle>Add Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="feedbackType">Feedback Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select feedback type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="content">Content</SelectItem>
                      <SelectItem value="technical">Technical</SelectItem>
                      <SelectItem value="compliance">Compliance</SelectItem>
                      <SelectItem value="quality">Quality</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="severity">Severity</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedbackMessage">Feedback Message</Label>
                  <Textarea
                    id="feedbackMessage"
                    placeholder="Enter your feedback..."
                    rows={4}
                  />
                </div>
                <Button className="bg-gradient-primary hover:opacity-90">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Add Feedback
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Final Review Actions */}
      <Card className="border-glow">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Final Review Decision</h3>
              <p className="text-muted-foreground">
                Complete your review and decide the course status
              </p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="text-red-600 border-red-600 hover:bg-red-50"
                onClick={handleReject}
              >
                <XCircle className="h-4 w-4 mr-2" />
                Reject Course
              </Button>
              <Button 
                variant="outline" 
                className="text-yellow-600 border-yellow-600 hover:bg-yellow-50"
                onClick={handleRequestChanges}
              >
                <AlertTriangle className="h-4 w-4 mr-2" />
                Request Changes
              </Button>
              <Button 
                className="bg-gradient-primary hover:opacity-90"
                onClick={handleApprove}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve Course
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CuratorCourseView;