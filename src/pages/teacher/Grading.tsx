import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Clock, FileText, Star, Download, Eye } from 'lucide-react';

const Grading = () => {
  const { t } = useLanguage();
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const [grade, setGrade] = useState('');
  const [feedback, setFeedback] = useState('');

  const mockSubmissions = [
    {
      id: 1,
      studentName: 'John Doe',
      studentId: 'STU001',
      assignment: 'Risk Assessment Report',
      course: 'Risk Management',
      submittedDate: '2024-01-28',
      dueDate: '2024-01-30',
      status: 'submitted',
      priority: 'normal',
      fileUrl: '/mock-submission.pdf',
      maxPoints: 100,
      currentGrade: null,
      feedback: ''
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      studentId: 'STU002',
      assignment: 'Technical Analysis Chart',
      course: 'Technical Analysis',
      submittedDate: '2024-01-26',
      dueDate: '2024-01-28',
      status: 'late',
      priority: 'high',
      fileUrl: '/mock-chart.pdf',
      maxPoints: 75,
      currentGrade: null,
      feedback: ''
    },
    {
      id: 3,
      studentName: 'Mike Johnson',
      studentId: 'STU003',
      assignment: 'Portfolio Optimization',
      course: 'Portfolio Management',
      submittedDate: '2024-01-25',
      dueDate: '2024-01-25',
      status: 'graded',
      priority: 'normal',
      fileUrl: '/mock-portfolio.pdf',
      maxPoints: 85,
      currentGrade: 78,
      feedback: 'Good analysis, but could improve risk calculations.'
    },
    {
      id: 4,
      studentName: 'Sarah Wilson',
      studentId: 'STU004',
      assignment: 'Market Psychology Quiz',
      course: 'Trading Psychology',
      submittedDate: '2024-01-27',
      dueDate: '2024-01-30',
      status: 'submitted',
      priority: 'normal',
      fileUrl: '/mock-quiz.pdf',
      maxPoints: 50,
      currentGrade: null,
      feedback: ''
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-blue-500 text-white';
      case 'late': return 'bg-red-500 text-white';
      case 'graded': return 'bg-green-500 text-white';
      case 'pending': return 'bg-yellow-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'normal': return 'bg-blue-100 text-blue-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filterSubmissionsByStatus = (status: string) => {
    if (status === 'all') return mockSubmissions;
    if (status === 'pending') return mockSubmissions.filter(s => s.status === 'submitted' || s.status === 'late');
    return mockSubmissions.filter(s => s.status === status);
  };

  const handleGradeSubmission = () => {
    // Here you would typically save the grade and feedback
    console.log('Grading submission:', { grade, feedback });
    setSelectedSubmission(null);
    setGrade('');
    setFeedback('');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Grading Center</h1>
          <p className="text-muted-foreground">Review and grade student submissions</p>
        </div>
      </div>

      {/* Grading Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Awaiting grades</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Late Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Past due date</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Graded Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Completed reviews</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84.2%</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </div>

      {/* Submissions Tabs */}
      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">Pending Review</TabsTrigger>
          <TabsTrigger value="graded">Graded</TabsTrigger>
          <TabsTrigger value="late">Late Submissions</TabsTrigger>
          <TabsTrigger value="all">All Submissions</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {filterSubmissionsByStatus('pending').map((submission) => (
            <SubmissionCard 
              key={submission.id} 
              submission={submission} 
              getStatusColor={getStatusColor}
              getPriorityColor={getPriorityColor}
              onGrade={setSelectedSubmission}
            />
          ))}
        </TabsContent>

        <TabsContent value="graded" className="space-y-4">
          {filterSubmissionsByStatus('graded').map((submission) => (
            <SubmissionCard 
              key={submission.id} 
              submission={submission} 
              getStatusColor={getStatusColor}
              getPriorityColor={getPriorityColor}
              onGrade={setSelectedSubmission}
            />
          ))}
        </TabsContent>

        <TabsContent value="late" className="space-y-4">
          {filterSubmissionsByStatus('late').map((submission) => (
            <SubmissionCard 
              key={submission.id} 
              submission={submission} 
              getStatusColor={getStatusColor}
              getPriorityColor={getPriorityColor}
              onGrade={setSelectedSubmission}
            />
          ))}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          {mockSubmissions.map((submission) => (
            <SubmissionCard 
              key={submission.id} 
              submission={submission} 
              getStatusColor={getStatusColor}
              getPriorityColor={getPriorityColor}
              onGrade={setSelectedSubmission}
            />
          ))}
        </TabsContent>
      </Tabs>

      {/* Grading Dialog */}
      <Dialog open={!!selectedSubmission} onOpenChange={(open) => !open && setSelectedSubmission(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Grade Submission</DialogTitle>
            <DialogDescription>
              {selectedSubmission && `${selectedSubmission.studentName} - ${selectedSubmission.assignment}`}
            </DialogDescription>
          </DialogHeader>
          
          {selectedSubmission && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <Label>Student</Label>
                  <p className="font-medium">{selectedSubmission.studentName}</p>
                </div>
                <div>
                  <Label>Course</Label>
                  <p className="font-medium">{selectedSubmission.course}</p>
                </div>
                <div>
                  <Label>Submitted</Label>
                  <p className="font-medium">{selectedSubmission.submittedDate}</p>
                </div>
                <div>
                  <Label>Max Points</Label>
                  <p className="font-medium">{selectedSubmission.maxPoints}</p>
                </div>
              </div>

              <div>
                <Label htmlFor="grade">Grade (out of {selectedSubmission.maxPoints})</Label>
                <Input
                  id="grade"
                  type="number"
                  min="0"
                  max={selectedSubmission.maxPoints}
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  placeholder="Enter grade"
                />
              </div>

              <div>
                <Label htmlFor="feedback">Feedback</Label>
                <Textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Provide feedback to the student..."
                  rows={4}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setSelectedSubmission(null)}>
                  Cancel
                </Button>
                <Button onClick={handleGradeSubmission}>
                  Save Grade
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const SubmissionCard = ({ submission, getStatusColor, getPriorityColor, onGrade }: any) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CardTitle className="text-lg">{submission.studentName}</CardTitle>
              <Badge className={getStatusColor(submission.status)}>
                {submission.status}
              </Badge>
              {submission.priority === 'high' && (
                <Badge className={getPriorityColor(submission.priority)}>
                  {submission.priority}
                </Badge>
              )}
            </div>
            <CardDescription>{submission.assignment} - {submission.course}</CardDescription>
          </div>
          <div className="text-right text-sm">
            {submission.currentGrade !== null ? (
              <div>
                <div className="text-lg font-bold">{submission.currentGrade}/{submission.maxPoints}</div>
                <div className="text-muted-foreground">Graded</div>
              </div>
            ) : (
              <div className="text-muted-foreground">Not graded</div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <Label>Submitted</Label>
              <p className="font-medium">{submission.submittedDate}</p>
            </div>
            <div>
              <Label>Due Date</Label>
              <p className="font-medium">{submission.dueDate}</p>
            </div>
            <div>
              <Label>Student ID</Label>
              <p className="font-medium">{submission.studentId}</p>
            </div>
            <div>
              <Label>Max Points</Label>
              <p className="font-medium">{submission.maxPoints}</p>
            </div>
          </div>

          {submission.feedback && (
            <div>
              <Label>Previous Feedback</Label>
              <p className="text-sm text-muted-foreground">{submission.feedback}</p>
            </div>
          )}

          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Download className="w-4 h-4 mr-1" />
              Download
            </Button>
            <Button size="sm" variant="outline">
              <Eye className="w-4 h-4 mr-1" />
              Preview
            </Button>
            <Button size="sm" onClick={() => onGrade(submission)}>
              <Star className="w-4 h-4 mr-1" />
              {submission.currentGrade !== null ? 'Re-grade' : 'Grade'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Grading;