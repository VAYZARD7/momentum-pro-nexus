import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Application {
  id: number;
  type: 'student' | 'curator' | 'teacher';
  course: string;
  status: 'pending' | 'approved' | 'rejected' | 'under_review';
  submittedDate: string;
  reviewDate?: string;
  notes?: string;
}

const Applications = () => {
  const { t } = useLanguage();
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 1,
      type: 'student',
      course: 'Advanced Trading Strategies',
      status: 'approved',
      submittedDate: '2024-01-10',
      reviewDate: '2024-01-12',
    },
    {
      id: 2,
      type: 'curator',
      course: 'Risk Management',
      status: 'under_review',
      submittedDate: '2024-01-15',
      notes: 'Under curator review',
    },
    {
      id: 3,
      type: 'teacher',
      course: 'Technical Analysis',
      status: 'pending',
      submittedDate: '2024-01-20',
    },
  ]);

  const [newApplication, setNewApplication] = useState({
    type: '',
    course: '',
    motivation: '',
    experience: '',
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'rejected': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'under_review': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default: return <Clock className="h-4 w-4 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-500 text-white';
      case 'rejected': return 'bg-red-500 text-white';
      case 'under_review': return 'bg-yellow-500 text-white';
      default: return 'bg-blue-500 text-white';
    }
  };

  const handleSubmitApplication = () => {
    if (!newApplication.type || !newApplication.course || !newApplication.motivation) {
      toast.error('Please fill in all required fields');
      return;
    }

    const application: Application = {
      id: applications.length + 1,
      type: newApplication.type as 'student' | 'curator' | 'teacher',
      course: newApplication.course,
      status: 'pending',
      submittedDate: new Date().toISOString().split('T')[0],
    };

    setApplications([...applications, application]);
    setNewApplication({ type: '', course: '', motivation: '', experience: '' });
    setIsDialogOpen(false);
    toast.success('Application submitted successfully! It will be reviewed by the administrator.');
  };

  const getStatusDescription = (status: string, type: string) => {
    switch (status) {
      case 'pending':
        return 'Waiting for administrator review';
      case 'under_review':
        if (type === 'curator') return 'Under curator review';
        if (type === 'teacher') return 'Under teacher review';
        return 'Under review';
      case 'approved':
        return 'Application approved - you can now access the course';
      case 'rejected':
        return 'Application was rejected';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Applications</h1>
          <p className="text-muted-foreground">
            Apply for student enrollment or become a curator/teacher
          </p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Application
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Submit New Application</DialogTitle>
              <DialogDescription>
                Apply for student enrollment or to become a curator/teacher
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="type">Application Type</Label>
                <Select value={newApplication.type} onValueChange={(value) => setNewApplication({...newApplication, type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select application type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student Enrollment</SelectItem>
                    <SelectItem value="curator">Become a Curator</SelectItem>
                    <SelectItem value="teacher">Become a Teacher</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="course">Course</Label>
                <Select value={newApplication.course} onValueChange={(value) => setNewApplication({...newApplication, course: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic-trading">Basic Trading</SelectItem>
                    <SelectItem value="risk-management">Risk Management</SelectItem>
                    <SelectItem value="technical-analysis">Technical Analysis</SelectItem>
                    <SelectItem value="portfolio-management">Portfolio Management</SelectItem>
                    <SelectItem value="advanced-strategies">Advanced Trading Strategies</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="motivation">Motivation</Label>
                <Textarea
                  id="motivation"
                  value={newApplication.motivation}
                  onChange={(e) => setNewApplication({...newApplication, motivation: e.target.value})}
                  placeholder="Why do you want to apply for this role/course?"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="experience">Experience (Optional)</Label>
                <Textarea
                  id="experience"
                  value={newApplication.experience}
                  onChange={(e) => setNewApplication({...newApplication, experience: e.target.value})}
                  placeholder="Relevant experience or qualifications"
                  rows={2}
                />
              </div>

              <Button onClick={handleSubmitApplication} className="w-full">
                Submit Application
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {applications.map((application) => (
          <Card key={application.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    {getStatusIcon(application.status)}
                    {application.type.charAt(0).toUpperCase() + application.type.slice(1)} Application
                  </CardTitle>
                  <CardDescription className="mt-1">
                    Course: {application.course}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(application.status)}>
                  {application.status.replace('_', ' ')}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Submitted:</strong> {application.submittedDate}
                </p>
                {application.reviewDate && (
                  <p className="text-sm text-muted-foreground">
                    <strong>Reviewed:</strong> {application.reviewDate}
                  </p>
                )}
                <p className="text-sm">
                  <strong>Status:</strong> {getStatusDescription(application.status, application.type)}
                </p>
                {application.notes && (
                  <p className="text-sm text-muted-foreground">
                    <strong>Notes:</strong> {application.notes}
                  </p>
                )}
              </div>

              {/* Demo workflow description */}
              {application.status === 'pending' && (
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium mb-2">Application Process:</p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>1. Administrator review (current step)</p>
                    {application.type !== 'student' && (
                      <>
                        <p>2. Curator review</p>
                        <p>3. Teacher approval</p>
                      </>
                    )}
                    <p>4. Final approval & notification</p>
                    <p className="text-yellow-600 font-medium mt-2">
                      Auto-approval after 7 days if no response
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {applications.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">No applications submitted yet</p>
            <Button className="mt-4" onClick={() => setIsDialogOpen(true)}>
              Submit Your First Application
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Applications;