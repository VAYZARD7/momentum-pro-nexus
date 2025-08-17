import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Search, Filter, Calendar, FileText, Users } from 'lucide-react';

const Assignments = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const mockAssignments = [
    {
      id: 1,
      title: 'Risk Assessment Report',
      course: 'Risk Management Fundamentals',
      type: 'essay',
      dueDate: '2024-01-30',
      submissions: 15,
      totalStudents: 18,
      status: 'active',
      createdDate: '2024-01-15',
      maxPoints: 100,
      description: 'Analyze a real-world trading scenario and assess the associated risks'
    },
    {
      id: 2,
      title: 'Technical Analysis Chart Review',
      course: 'Technical Analysis Mastery',
      type: 'practical',
      dueDate: '2024-02-05',
      submissions: 28,
      totalStudents: 32,
      status: 'active',
      createdDate: '2024-01-20',
      maxPoints: 75,
      description: 'Create and analyze technical charts for 5 different financial instruments'
    },
    {
      id: 3,
      title: 'Portfolio Optimization Exercise',
      course: 'Advanced Trading Strategies',
      type: 'calculation',
      dueDate: '2024-01-25',
      submissions: 24,
      totalStudents: 24,
      status: 'closed',
      createdDate: '2024-01-10',
      maxPoints: 85,
      description: 'Optimize a portfolio using modern portfolio theory principles'
    },
    {
      id: 4,
      title: 'Market Psychology Quiz',
      course: 'Trading Psychology',
      type: 'quiz',
      dueDate: '2024-02-10',
      submissions: 0,
      totalStudents: 20,
      status: 'draft',
      createdDate: '2024-01-25',
      maxPoints: 50,
      description: 'Multiple choice quiz on behavioral finance and market psychology'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500 text-white';
      case 'closed': return 'bg-blue-500 text-white';
      case 'draft': return 'bg-yellow-500 text-white';
      case 'overdue': return 'bg-red-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'essay': return 'bg-purple-100 text-purple-800';
      case 'practical': return 'bg-blue-100 text-blue-800';
      case 'calculation': return 'bg-green-100 text-green-800';
      case 'quiz': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filterAssignmentsByStatus = (status: string) => {
    if (status === 'all') return mockAssignments;
    return mockAssignments.filter(assignment => assignment.status === status);
  };

  const filteredAssignments = (assignments: typeof mockAssignments) => {
    return assignments.filter(assignment =>
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.course.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Assignments</h1>
          <p className="text-muted-foreground">Create and manage course assignments</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Assignment
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search assignments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Assignment Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Assignments</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredAssignments(mockAssignments).map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} getStatusColor={getStatusColor} getTypeColor={getTypeColor} />
          ))}
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          {filteredAssignments(filterAssignmentsByStatus('active')).map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} getStatusColor={getStatusColor} getTypeColor={getTypeColor} />
          ))}
        </TabsContent>

        <TabsContent value="draft" className="space-y-4">
          {filteredAssignments(filterAssignmentsByStatus('draft')).map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} getStatusColor={getStatusColor} getTypeColor={getTypeColor} />
          ))}
        </TabsContent>

        <TabsContent value="closed" className="space-y-4">
          {filteredAssignments(filterAssignmentsByStatus('closed')).map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} getStatusColor={getStatusColor} getTypeColor={getTypeColor} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

const AssignmentCard = ({ assignment, getStatusColor, getTypeColor }: any) => {
  const submissionRate = Math.round((assignment.submissions / assignment.totalStudents) * 100);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-lg">{assignment.title}</CardTitle>
              <Badge className={getTypeColor(assignment.type)}>
                {assignment.type}
              </Badge>
              <Badge className={getStatusColor(assignment.status)}>
                {assignment.status}
              </Badge>
            </div>
            <CardDescription>{assignment.course}</CardDescription>
          </div>
          <div className="text-right text-sm text-muted-foreground">
            <p>{assignment.maxPoints} points</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm">{assignment.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="flex items-center gap-1 text-muted-foreground mb-1">
                <Calendar className="w-4 h-4" />
                <span>Due Date</span>
              </div>
              <p className="font-medium">{assignment.dueDate}</p>
            </div>
            
            <div>
              <div className="flex items-center gap-1 text-muted-foreground mb-1">
                <Users className="w-4 h-4" />
                <span>Submissions</span>
              </div>
              <p className="font-medium">
                {assignment.submissions}/{assignment.totalStudents} ({submissionRate}%)
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-1 text-muted-foreground mb-1">
                <FileText className="w-4 h-4" />
                <span>Created</span>
              </div>
              <p className="font-medium">{assignment.createdDate}</p>
            </div>
            
            <div>
              <div className="flex items-center gap-1 text-muted-foreground mb-1">
                <span>Max Points</span>
              </div>
              <p className="font-medium">{assignment.maxPoints}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button size="sm">View Details</Button>
            <Button size="sm" variant="outline">Edit</Button>
            {assignment.status === 'active' && (
              <Button size="sm" variant="outline">View Submissions</Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Assignments;