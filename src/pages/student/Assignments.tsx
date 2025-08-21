import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  Upload, 
  Calendar, 
  AlertCircle, 
  Award, 
  Search,
  Filter,
  Download,
  Eye,
  Star,
  MessageCircle
} from 'lucide-react';
import { toast } from 'sonner';

interface Assignment {
  id: number;
  title: string;
  course: string;
  instructor: string;
  description: string;
  dueDate: string;
  submittedDate?: string;
  status: 'pending' | 'submitted' | 'graded' | 'overdue';
  score?: number;
  feedback?: string;
  format: 'essay' | 'quiz' | 'project' | 'presentation' | 'code';
  maxScore: number;
  priority: 'low' | 'medium' | 'high';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // in hours
}

const Assignments = () => {
  const { t } = useLanguage();
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [submission, setSubmission] = useState({ text: '', file: null as File | null });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const assignments: Assignment[] = [
    {
      id: 1,
      title: 'Advanced Risk Management Strategy Analysis',
      course: 'Risk Management',
      instructor: 'Dr. Sarah Johnson',
      description: 'Write a comprehensive 2000-word analysis of modern risk management strategies in volatile markets. Include case studies from 2020-2024 market events and propose innovative risk mitigation techniques.',
      dueDate: '2024-01-25',
      status: 'pending',
      format: 'essay',
      maxScore: 100,
      priority: 'high',
      difficulty: 'advanced',
      estimatedTime: 8,
    },
    {
      id: 2,
      title: 'Technical Analysis Pattern Recognition Quiz',
      course: 'Technical Analysis',
      instructor: 'Mark Thompson',
      description: 'Complete the advanced quiz covering candlestick patterns, chart formations, and technical indicators. Focus on real-time market examples and pattern reliability.',
      dueDate: '2024-01-28',
      status: 'pending',
      format: 'quiz',
      maxScore: 75,
      priority: 'medium',
      difficulty: 'intermediate',
      estimatedTime: 2,
    },
    {
      id: 3,
      title: 'Algorithmic Trading Strategy Development',
      course: 'Algorithmic Trading',
      instructor: 'Prof. Michael Chen',
      description: 'Develop and backtest a momentum-based trading algorithm using Python. Include performance metrics, risk analysis, and optimization suggestions.',
      dueDate: '2024-02-02',
      status: 'pending',
      format: 'code',
      maxScore: 150,
      priority: 'high',
      difficulty: 'advanced',
      estimatedTime: 12,
    },
    {
      id: 4,
      title: 'Portfolio Optimization Project',
      course: 'Portfolio Management',
      instructor: 'Lisa Anderson',
      description: 'Create an optimized portfolio for a $1M investment using modern portfolio theory. Present findings in a comprehensive PowerPoint presentation with supporting data.',
      dueDate: '2024-02-05',
      status: 'pending',
      format: 'presentation',
      maxScore: 120,
      priority: 'medium',
      difficulty: 'intermediate',
      estimatedTime: 6,
    },
    {
      id: 5,
      title: 'Trading Psychology Case Study',
      course: 'Trading Psychology',
      instructor: 'Dr. Robert Kim',
      description: 'Analyze the psychological factors that led to major trading disasters. Include behavioral analysis and preventive strategies.',
      dueDate: '2024-01-15',
      submittedDate: '2024-01-14',
      status: 'graded',
      score: 92,
      feedback: 'Excellent analysis of psychological factors in trading. Great use of real-world examples and practical applications. Your understanding of cognitive biases is impressive.',
      format: 'essay',
      maxScore: 100,
      priority: 'medium',
      difficulty: 'intermediate',
      estimatedTime: 5,
    },
    {
      id: 6,
      title: 'Market Microstructure Analysis',
      course: 'Market Making',
      instructor: 'James Wilson',
      description: 'Analyze order flow, bid-ask spreads, and market depth for selected securities. Provide insights on market efficiency and liquidity patterns.',
      dueDate: '2024-01-10',
      submittedDate: '2024-01-12',
      status: 'submitted',
      format: 'project',
      maxScore: 100,
      priority: 'low',
      difficulty: 'advanced',
      estimatedTime: 4,
    },
    {
      id: 7,
      title: 'Options Strategies Implementation',
      course: 'Advanced Strategies',
      instructor: 'Emily Davis',
      description: 'Design and implement complex options strategies for different market scenarios. Include Greeks analysis and profit/loss scenarios.',
      dueDate: '2024-01-08',
      submittedDate: '2024-01-10',
      status: 'overdue',
      format: 'project',
      maxScore: 110,
      priority: 'high',
      difficulty: 'advanced',
      estimatedTime: 7,
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'graded': return 'bg-green-500 text-white';
      case 'submitted': return 'bg-blue-500 text-white';
      case 'pending': return 'bg-yellow-500 text-white';
      case 'overdue': return 'bg-red-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'advanced': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'intermediate': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'graded': return <CheckCircle className="h-4 w-4" />;
      case 'submitted': return <Upload className="h-4 w-4" />;
      case 'overdue': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const isOverdue = (dueDate: string, status: string) => {
    return new Date(dueDate) < new Date() && status === 'pending';
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleSubmission = () => {
    if (!submission.text.trim()) {
      toast.error('Please provide your submission text');
      return;
    }

    toast.success('Assignment submitted successfully!');
    setSelectedAssignment(null);
    setSubmission({ text: '', file: null });
  };

  const courses = [...new Set(assignments.map(a => a.course))];

  const filteredAssignments = assignments.filter(assignment => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assignment.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assignment.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourse === 'all' || assignment.course === selectedCourse;
    const matchesStatus = statusFilter === 'all' || assignment.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || assignment.priority === priorityFilter;
    
    return matchesSearch && matchesCourse && matchesStatus && matchesPriority;
  });

  const pendingAssignments = filteredAssignments.filter(a => a.status === 'pending' || a.status === 'overdue');
  const submittedAssignments = filteredAssignments.filter(a => a.status === 'submitted');
  const gradedAssignments = filteredAssignments.filter(a => a.status === 'graded');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Assignments & Projects</h1>
        <p className="text-muted-foreground">
          Manage your assignments, track progress, and submit your work
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Assignments</p>
              <p className="text-2xl font-bold">{assignments.length}</p>
            </div>
            <FileText className="h-8 w-8 text-primary" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">{pendingAssignments.length}</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Submitted</p>
              <p className="text-2xl font-bold text-blue-600">{submittedAssignments.length}</p>
            </div>
            <Upload className="h-8 w-8 text-blue-600" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Graded</p>
              <p className="text-2xl font-bold text-green-600">{gradedAssignments.length}</p>
            </div>
            <Award className="h-8 w-8 text-green-600" />
          </div>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search assignments, courses, or instructors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedCourse} onValueChange={setSelectedCourse}>
          <SelectTrigger className="w-full lg:w-48">
            <SelectValue placeholder="All Courses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Courses</SelectItem>
            {courses.map(course => (
              <SelectItem key={course} value={course}>{course}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full lg:w-32">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="submitted">Submitted</SelectItem>
            <SelectItem value="graded">Graded</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
          <SelectTrigger className="w-full lg:w-32">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priority</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">Pending ({pendingAssignments.length})</TabsTrigger>
          <TabsTrigger value="submitted">Submitted ({submittedAssignments.length})</TabsTrigger>
          <TabsTrigger value="graded">Graded ({gradedAssignments.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {pendingAssignments.map((assignment) => (
            <Card key={assignment.id} className={`hover:shadow-elegant transition-all duration-300 ${isOverdue(assignment.dueDate, assignment.status) ? 'border-red-200 bg-red-50/50' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      {assignment.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {assignment.course} • {assignment.instructor} • {assignment.format.charAt(0).toUpperCase() + assignment.format.slice(1)}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getPriorityColor(assignment.priority)}>
                      {assignment.priority}
                    </Badge>
                    <Badge className={getDifficultyColor(assignment.difficulty)}>
                      {assignment.difficulty}
                    </Badge>
                    {isOverdue(assignment.dueDate, assignment.status) && (
                      <Badge className="bg-red-500 text-white">
                        Overdue
                      </Badge>
                    )}
                    <Badge className={getStatusColor(assignment.status)}>
                      {getStatusIcon(assignment.status)}
                      {assignment.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">{assignment.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Due: {assignment.dueDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {getDaysUntilDue(assignment.dueDate)} days left
                    </div>
                    <div>Max Score: {assignment.maxScore} points</div>
                    <div>Est. Time: {assignment.estimatedTime}h</div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={() => setSelectedAssignment(assignment)}
                        className={isOverdue(assignment.dueDate, assignment.status) ? 'bg-red-600 hover:bg-red-700' : ''}
                      >
                        {isOverdue(assignment.dueDate, assignment.status) ? 'Submit Late' : 'Submit Assignment'}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Submit: {assignment.title}</DialogTitle>
                        <DialogDescription>
                          {assignment.course} • {assignment.instructor} • Due: {assignment.dueDate}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="submission-text">Your Submission</Label>
                          <Textarea
                            id="submission-text"
                            value={submission.text}
                            onChange={(e) => setSubmission({...submission, text: e.target.value})}
                            placeholder="Enter your submission text here..."
                            rows={6}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="submission-file">Attach File (Optional)</Label>
                          <Input
                            id="submission-file"
                            type="file"
                            onChange={(e) => setSubmission({...submission, file: e.target.files?.[0] || null})}
                            className="mt-1"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Accepted formats: PDF, DOC, DOCX, PPT, PPTX, ZIP (Max: 10MB)
                          </p>
                        </div>

                        <Button onClick={handleSubmission} className="w-full">
                          Submit Assignment
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="submitted" className="space-y-4">
          {submittedAssignments.map((assignment) => (
            <Card key={assignment.id} className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      {assignment.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {assignment.course} • {assignment.instructor} • Submitted: {assignment.submittedDate}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getPriorityColor(assignment.priority)}>
                      {assignment.priority}
                    </Badge>
                    <Badge className={getStatusColor(assignment.status)}>
                      Awaiting Grade
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Your submission is being reviewed. You will receive feedback and a grade soon.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View Submission
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="graded" className="space-y-4">
          {gradedAssignments.map((assignment) => (
            <Card key={assignment.id} className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-green-500" />
                      {assignment.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {assignment.course} • {assignment.instructor} • Submitted: {assignment.submittedDate}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600 flex items-center gap-1">
                        {assignment.score}/{assignment.maxScore}
                        {assignment.score! >= assignment.maxScore * 0.9 && <Star className="h-5 w-5 text-yellow-500" />}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {Math.round((assignment.score! / assignment.maxScore) * 100)}%
                      </div>
                    </div>
                    <Badge className={getStatusColor(assignment.status)}>
                      Graded
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {assignment.feedback && (
                  <div className="space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Instructor Feedback:
                    </h4>
                    <p className="text-sm bg-muted p-4 rounded-lg border-l-4 border-primary">{assignment.feedback}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download Graded Work
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Assignments;