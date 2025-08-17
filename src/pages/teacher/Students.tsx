import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Filter, Download, MessageCircle, Award, BookOpen } from 'lucide-react';

const Students = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const mockStudents = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      avatar: '',
      courses: ['Advanced Trading', 'Risk Management'],
      overallProgress: 85,
      status: 'active',
      lastLogin: '2 hours ago',
      joinDate: '2024-01-15',
      totalAssignments: 12,
      completedAssignments: 10,
      averageGrade: 88.5
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      avatar: '',
      courses: ['Technical Analysis', 'Portfolio Management'],
      overallProgress: 92,
      status: 'active',
      lastLogin: '1 day ago',
      joinDate: '2024-01-10',
      totalAssignments: 15,
      completedAssignments: 14,
      averageGrade: 94.2
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      avatar: '',
      courses: ['Market Making', 'Algorithmic Trading'],
      overallProgress: 78,
      status: 'inactive',
      lastLogin: '5 days ago',
      joinDate: '2024-01-08',
      totalAssignments: 8,
      completedAssignments: 6,
      averageGrade: 82.1
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      avatar: '',
      courses: ['Trading Psychology', 'Basic Trading'],
      overallProgress: 95,
      status: 'active',
      lastLogin: '30 minutes ago',
      joinDate: '2024-01-20',
      totalAssignments: 6,
      completedAssignments: 6,
      averageGrade: 96.8
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500 text-white';
      case 'inactive': return 'bg-gray-500 text-white';
      case 'suspended': return 'bg-red-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const filteredStudents = mockStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Students</h1>
          <p className="text-muted-foreground">Manage and monitor your students</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search students by name, email, or course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students List */}
      <div className="grid gap-4">
        {filteredStudents.map((student) => (
          <Card key={student.id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={student.avatar} />
                    <AvatarFallback>
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{student.name}</h3>
                      <Badge className={getStatusColor(student.status)}>
                        {student.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{student.email}</p>
                    <div className="flex flex-wrap gap-1">
                      {student.courses.map((course, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Message
                  </Button>
                  <Button size="sm" variant="outline">
                    <Award className="w-4 h-4 mr-1" />
                    Grade
                  </Button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Overall Progress</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Progress value={student.overallProgress} className="flex-1" />
                    <span className="text-sm font-medium">{student.overallProgress}%</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Average Grade</p>
                  <p className="text-lg font-semibold">{student.averageGrade}%</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Assignments</p>
                  <p className="text-lg font-semibold">
                    {student.completedAssignments}/{student.totalAssignments}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Last Login</p>
                  <p className="text-sm">{student.lastLogin}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground">No students found matching your search criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Students;