import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Clock, CheckCircle, Upload, Calendar, AlertCircle, Award } from 'lucide-react';
import { toast } from 'sonner';

interface Assignment {
  id: number;
  title: string;
  course: string;
  description: string;
  dueDate: string;
  submittedDate?: string;
  status: 'pending' | 'submitted' | 'graded' | 'overdue';
  score?: number;
  feedback?: string;
  format: 'essay' | 'quiz' | 'project' | 'presentation';
  maxScore: number;
}

const Homework = () => {
  const { t } = useLanguage();
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [submission, setSubmission] = useState({ text: '', file: null as File | null });

  const assignments: Assignment[] = [
    {
      id: 1,
      title: 'Risk Management Strategy Essay',
      course: 'Risk Management',
      description: 'Write a 1500-word essay analyzing different risk management strategies in trading. Include real-world examples and case studies.',
      dueDate: '2024-01-25',
      status: 'pending',
      format: 'essay',
      maxScore: 100,
    },
    {
      id: 2,
      title: 'Technical Analysis Quiz',
      course: 'Technical Analysis',
      description: 'Complete the online quiz covering candlestick patterns, support/resistance levels, and trend analysis.',
      dueDate: '2024-01-28',
      status: 'pending',
      format: 'quiz',
      maxScore: 50,
    },
    {
      id: 3,
      title: 'Portfolio Analysis Project',
      course: 'Portfolio Management',
      description: 'Analyze a given portfolio and provide recommendations for optimization. Submit as PowerPoint presentation.',
      dueDate: '2024-02-02',
      status: 'pending',
      format: 'presentation',
      maxScore: 150,
    },
    {
      id: 4,
      title: 'Trading Psychology Reflection',
      course: 'Trading Psychology',
      description: 'Submit a personal reflection on trading psychology concepts and how they apply to your trading approach.',
      dueDate: '2024-01-15',
      submittedDate: '2024-01-14',
      status: 'graded',
      score: 92,
      feedback: 'Excellent analysis of psychological factors. Great use of personal examples.',
      format: 'essay',
      maxScore: 100,
    },
    {
      id: 5,
      title: 'Market Analysis Report',
      course: 'Technical Analysis',
      description: 'Analyze current market trends using technical indicators and provide trading recommendations.',
      dueDate: '2024-01-10',
      submittedDate: '2024-01-12',
      status: 'overdue',
      format: 'project',
      maxScore: 100,
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'graded': return <CheckCircle className="h-4 w-4" />;
      case 'submitted': return <Upload className="h-4 w-4" />;
      case 'overdue': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date() && !assignments.find(a => a.dueDate === dueDate)?.submittedDate;
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

  const pendingAssignments = assignments.filter(a => a.status === 'pending' || a.status === 'overdue');
  const submittedAssignments = assignments.filter(a => a.status === 'submitted');
  const gradedAssignments = assignments.filter(a => a.status === 'graded');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t('homework')}</h1>
        <p className="text-muted-foreground">
          Manage your assignments and track submission deadlines
        </p>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">Pending ({pendingAssignments.length})</TabsTrigger>
          <TabsTrigger value="submitted">Submitted ({submittedAssignments.length})</TabsTrigger>
          <TabsTrigger value="graded">Graded ({gradedAssignments.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {pendingAssignments.map((assignment) => (
            <Card key={assignment.id} className={isOverdue(assignment.dueDate) ? 'border-red-200' : ''}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      {assignment.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {assignment.course} • {assignment.format.charAt(0).toUpperCase() + assignment.format.slice(1)}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    {isOverdue(assignment.dueDate) && (
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
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Due: {assignment.dueDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {getDaysUntilDue(assignment.dueDate)} days left
                    </div>
                    <div>Max Score: {assignment.maxScore} points</div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={() => setSelectedAssignment(assignment)}
                        className={isOverdue(assignment.dueDate) ? 'bg-red-600 hover:bg-red-700' : ''}
                      >
                        {isOverdue(assignment.dueDate) ? 'Submit Late' : 'Submit Assignment'}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Submit: {assignment.title}</DialogTitle>
                        <DialogDescription>
                          {assignment.course} • Due: {assignment.dueDate}
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
                            Accepted formats: PDF, DOC, DOCX, PPT, PPTX (Max: 10MB)
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
            <Card key={assignment.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      {assignment.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {assignment.course} • Submitted: {assignment.submittedDate}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(assignment.status)}>
                    Awaiting Grade
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your submission is being reviewed. You will receive feedback and a grade soon.
                </p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="graded" className="space-y-4">
          {gradedAssignments.map((assignment) => (
            <Card key={assignment.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-green-500" />
                      {assignment.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {assignment.course} • Submitted: {assignment.submittedDate}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">
                      {assignment.score}/{assignment.maxScore}
                    </div>
                    <Badge className={getStatusColor(assignment.status)}>
                      Graded
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {assignment.feedback && (
                  <div className="space-y-2">
                    <h4 className="font-medium">Instructor Feedback:</h4>
                    <p className="text-sm bg-muted p-3 rounded">{assignment.feedback}</p>
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

export default Homework;