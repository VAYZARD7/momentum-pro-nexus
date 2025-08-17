import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Download, Share2, Eye, Calendar, CheckCircle, Clock } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  course: string;
  issueDate: string;
  expiryDate?: string;
  grade: string;
  status: 'earned' | 'in_progress' | 'available';
  description: string;
  credentialId: string;
  verificationUrl: string;
  skills: string[];
  instructor: string;
  hoursCompleted: number;
}

const Certificates = () => {
  const { t } = useLanguage();

  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'Basic Trading Fundamentals Certificate',
      course: 'Basic Trading Fundamentals',
      issueDate: '2024-01-15',
      grade: 'A',
      status: 'earned',
      description: 'Successfully completed comprehensive training in trading fundamentals, market analysis, and risk management principles.',
      credentialId: 'BTF-2024-001234',
      verificationUrl: 'https://verify.tradingacademy.com/BTF-2024-001234',
      skills: ['Market Analysis', 'Trading Basics', 'Risk Assessment', 'Portfolio Management'],
      instructor: 'Dr. Sarah Johnson',
      hoursCompleted: 40
    },
    {
      id: '2',
      title: 'Risk Management Professional',
      course: 'Risk Management',
      issueDate: '2024-02-01',
      grade: 'B+',
      status: 'in_progress',
      description: 'Advanced certification in risk management strategies, portfolio protection, and quantitative risk analysis.',
      credentialId: 'RM-2024-001235',
      verificationUrl: 'https://verify.tradingacademy.com/RM-2024-001235',
      skills: ['Risk Analysis', 'Portfolio Protection', 'Quantitative Analysis', 'Hedging Strategies'],
      instructor: 'Prof. Michael Chen',
      hoursCompleted: 65
    },
    {
      id: '3',
      title: 'Technical Analysis Expert',
      course: 'Technical Analysis',
      issueDate: '',
      grade: '',
      status: 'available',
      description: 'Master the art of technical analysis, chart patterns, and market timing strategies.',
      credentialId: '',
      verificationUrl: '',
      skills: ['Chart Analysis', 'Pattern Recognition', 'Market Timing', 'Trading Signals'],
      instructor: 'Dr. Emily Rodriguez',
      hoursCompleted: 0
    },
    {
      id: '4',
      title: 'Advanced Trading Strategies',
      course: 'Advanced Trading Strategies',
      issueDate: '',
      expiryDate: '2025-12-31',
      grade: '',
      status: 'available',
      description: 'Comprehensive program covering advanced trading techniques, algorithmic strategies, and market psychology.',
      credentialId: '',
      verificationUrl: '',
      skills: ['Algorithmic Trading', 'Options Strategies', 'Futures Trading', 'Market Psychology'],
      instructor: 'Prof. David Kim',
      hoursCompleted: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'earned': return 'bg-green-500 text-white';
      case 'in_progress': return 'bg-blue-500 text-white';
      case 'available': return 'bg-gray-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'earned': return <CheckCircle className="h-4 w-4" />;
      case 'in_progress': return <Clock className="h-4 w-4" />;
      case 'available': return <Award className="h-4 w-4" />;
      default: return <Award className="h-4 w-4" />;
    }
  };

  const formatStatus = (status: string) => {
    switch (status) {
      case 'earned': return 'Earned';
      case 'in_progress': return 'In Progress';
      case 'available': return 'Available';
      default: return status;
    }
  };

  const earnedCertificates = certificates.filter(cert => cert.status === 'earned');
  const inProgressCertificates = certificates.filter(cert => cert.status === 'in_progress');
  const availableCertificates = certificates.filter(cert => cert.status === 'available');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Certificates & Achievements</h1>
        <p className="text-muted-foreground">
          Track your professional certifications and academic achievements
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{earnedCertificates.length}</div>
            <div className="text-sm text-muted-foreground">Certificates Earned</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{inProgressCertificates.length}</div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-gray-600">{availableCertificates.length}</div>
            <div className="text-sm text-muted-foreground">Available</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {certificates.reduce((total, cert) => total + cert.hoursCompleted, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Hours Completed</div>
          </CardContent>
        </Card>
      </div>

      {/* Earned Certificates */}
      {earnedCertificates.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Earned Certificates</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {earnedCertificates.map((certificate) => (
              <Card key={certificate.id} className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-green-600" />
                        {certificate.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {certificate.course} • Grade: {certificate.grade}
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(certificate.status)}>
                      {getStatusIcon(certificate.status)}
                      <span className="ml-1">{formatStatus(certificate.status)}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm">{certificate.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Issued: {new Date(certificate.issueDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {certificate.hoursCompleted} hours
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-2">Skills Demonstrated:</h4>
                      <div className="flex flex-wrap gap-1">
                        {certificate.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      <p>Credential ID: {certificate.credentialId}</p>
                      <p>Instructor: {certificate.instructor}</p>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 className="h-3 w-3 mr-1" />
                        Share
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3 mr-1" />
                        Verify
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* In Progress Certificates */}
      {inProgressCertificates.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Certifications In Progress</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {inProgressCertificates.map((certificate) => (
              <Card key={certificate.id} className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        {certificate.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {certificate.course}
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(certificate.status)}>
                      {getStatusIcon(certificate.status)}
                      <span className="ml-1">{formatStatus(certificate.status)}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm">{certificate.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {certificate.hoursCompleted} hours completed
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-2">Skills You'll Learn:</h4>
                      <div className="flex flex-wrap gap-1">
                        {certificate.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      <p>Instructor: {certificate.instructor}</p>
                    </div>

                    <Button size="sm" className="w-full">
                      Continue Course
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Available Certificates */}
      {availableCertificates.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Available Certifications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {availableCertificates.map((certificate) => (
              <Card key={certificate.id} className="border-l-4 border-l-gray-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-gray-600" />
                        {certificate.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {certificate.course}
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(certificate.status)}>
                      {getStatusIcon(certificate.status)}
                      <span className="ml-1">{formatStatus(certificate.status)}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm">{certificate.description}</p>

                    <div>
                      <h4 className="font-medium text-sm mb-2">Skills You'll Learn:</h4>
                      <div className="flex flex-wrap gap-1">
                        {certificate.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      <p>Instructor: {certificate.instructor}</p>
                    </div>

                    <Button size="sm" className="w-full">
                      Start Course
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;