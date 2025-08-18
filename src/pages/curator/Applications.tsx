import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Filter, Eye, Check, X } from 'lucide-react';

const Applications = () => {
  const { t } = useLanguage();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500 text-white';
      case 'approved': return 'bg-green-500 text-white';
      case 'rejected': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const mockApplications = [
    { 
      id: 1, 
      applicant: 'John Doe', 
      email: 'john.doe@email.com',
      course: 'Advanced Trading Strategies', 
      status: 'pending', 
      date: '2024-01-15',
      experience: '2 years',
      motivation: 'Looking to enhance my trading skills'
    },
    { 
      id: 2, 
      applicant: 'Jane Smith', 
      email: 'jane.smith@email.com',
      course: 'Technical Analysis', 
      status: 'approved', 
      date: '2024-01-14',
      experience: '1 year',
      motivation: 'Want to learn chart analysis'
    },
    { 
      id: 3, 
      applicant: 'Mike Johnson', 
      email: 'mike.j@email.com',
      course: 'Risk Management', 
      status: 'pending', 
      date: '2024-01-16',
      experience: '3 years',
      motivation: 'Need to improve risk assessment skills'
    },
    { 
      id: 4, 
      applicant: 'Sarah Wilson', 
      email: 'sarah.w@email.com',
      course: 'Portfolio Management', 
      status: 'rejected', 
      date: '2024-01-13',
      experience: 'Beginner',
      motivation: 'Interested in investment strategies'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Applications Management</h1>
        <p className="text-muted-foreground">Review and manage course applications</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search applications..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4">
        {mockApplications.map((application) => (
          <Card key={application.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{application.applicant}</CardTitle>
                  <CardDescription>{application.email}</CardDescription>
                </div>
                <Badge className={getStatusColor(application.status)}>
                  {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Course</p>
                  <p className="text-sm">{application.course}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Applied Date</p>
                  <p className="text-sm">{application.date}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Experience</p>
                  <p className="text-sm">{application.experience}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Status</p>
                  <p className="text-sm">{application.status}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground mb-1">Motivation</p>
                <p className="text-sm">{application.motivation}</p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  View Details
                </Button>
                {application.status === 'pending' && (
                  <>
                    <Button size="sm" className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      Approve
                    </Button>
                    <Button variant="destructive" size="sm" className="flex items-center gap-2">
                      <X className="h-4 w-4" />
                      Reject
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Applications;