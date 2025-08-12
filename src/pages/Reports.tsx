import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  FileText, 
  Download, 
  Filter,
  Calendar as CalendarIcon,
  Eye,
  ArrowLeft,
  Plus,
  Search
} from 'lucide-react';
import { format } from 'date-fns';

const Reports = () => {
  const { t } = useLanguage();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [reportType, setReportType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock reports data
  const reports = [
    {
      id: 1,
      title: 'Monthly User Activity Report',
      type: 'user',
      status: 'completed',
      createdDate: '2024-03-01',
      fileSize: '2.5 MB',
      format: 'PDF',
      createdBy: 'Admin'
    },
    {
      id: 2,
      title: 'Course Performance Analysis',
      type: 'course',
      status: 'completed',
      createdDate: '2024-02-28',
      fileSize: '4.1 MB',
      format: 'Excel',
      createdBy: 'Admin'
    },
    {
      id: 3,
      title: 'Revenue Summary Q1 2024',
      type: 'financial',
      status: 'processing',
      createdDate: '2024-03-15',
      fileSize: '1.8 MB',
      format: 'PDF',
      createdBy: 'Admin'
    },
    {
      id: 4,
      title: 'Security Audit Report',
      type: 'security',
      status: 'completed',
      createdDate: '2024-03-10',
      fileSize: '3.2 MB',
      format: 'PDF',
      createdBy: 'Security Team'
    },
    {
      id: 5,
      title: 'Student Progress Report',
      type: 'academic',
      status: 'failed',
      createdDate: '2024-03-05',
      fileSize: '0 MB',
      format: 'CSV',
      createdBy: 'Academic Team'
    }
  ];

  const reportTemplates = [
    { id: 1, name: 'User Analytics', description: 'User registration, activity, and engagement metrics', type: 'user' },
    { id: 2, name: 'Course Performance', description: 'Course completion rates, ratings, and revenue', type: 'course' },
    { id: 3, name: 'Financial Summary', description: 'Revenue, payments, and financial KPIs', type: 'financial' },
    { id: 4, name: 'Security Report', description: 'Security events, threats, and system status', type: 'security' },
    { id: 5, name: 'Academic Progress', description: 'Student progress, grades, and achievements', type: 'academic' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">{t('completed')}</Badge>;
      case 'processing':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">{t('processing')}</Badge>;
      case 'failed':
        return <Badge variant="destructive">{t('failed')}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeBadge = (typeKey: string) => {
    const typeColors = {
      user: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      course: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      financial: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      security: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      academic: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
    };
    
    return (
      <Badge className={typeColors[typeKey as keyof typeof typeColors]}>
        {t(typeKey as any)}
      </Badge>
    );
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.createdBy.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = reportType === 'all' || report.type === reportType;
    return matchesSearch && matchesType;
  });

  const generateReport = () => {
    alert(t('reportGenerationStarted'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <Link to="/admin">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t('backToAdmin')}
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {t('reports')}
                </h1>
                <p className="text-muted-foreground">{t('reportsDescription')}</p>
              </div>
            </div>
            <Button onClick={generateReport} className="gap-2">
              <Plus className="h-4 w-4" />
              {t('generateReport')}
            </Button>
          </div>

          {/* Report Templates */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                {t('reportTemplates')}
              </CardTitle>
              <CardDescription>
                {t('reportTemplatesDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reportTemplates.map((template) => (
                  <Card key={template.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm">{template.name}</CardTitle>
                        {getTypeBadge(template.type)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground mb-3">{template.description}</p>
                      <Button size="sm" className="w-full gap-2">
                        <FileText className="h-3 w-3" />
                        {t('generate')}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                {t('filtersAndSearch')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>{t('search')}</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder={t('searchReports')}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>{t('reportType')}</Label>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('selectType')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('allTypes')}</SelectItem>
                      <SelectItem value="user">{t('user')}</SelectItem>
                      <SelectItem value="course">{t('course')}</SelectItem>
                      <SelectItem value="financial">{t('financial')}</SelectItem>
                      <SelectItem value="security">{t('security')}</SelectItem>
                      <SelectItem value="academic">{t('academic')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>{t('startDate')}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "PPP") : t('selectDate')}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>{t('endDate')}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "PPP") : t('selectDate')}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reports List */}
          <Card>
            <CardHeader>
              <CardTitle>{t('generatedReports')}</CardTitle>
              <CardDescription>
                {t('generatedReportsDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('title')}</TableHead>
                    <TableHead>{t('type')}</TableHead>
                    <TableHead>{t('status')}</TableHead>
                    <TableHead>{t('createdDate')}</TableHead>
                    <TableHead>{t('createdBy')}</TableHead>
                    <TableHead>{t('fileSize')}</TableHead>
                    <TableHead>{t('format')}</TableHead>
                    <TableHead>{t('actions')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">{report.title}</TableCell>
                      <TableCell>{getTypeBadge(report.type)}</TableCell>
                      <TableCell>{getStatusBadge(report.status)}</TableCell>
                      <TableCell>{new Date(report.createdDate).toLocaleDateString()}</TableCell>
                      <TableCell>{report.createdBy}</TableCell>
                      <TableCell>{report.fileSize}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{report.format}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" disabled={report.status !== 'completed'}>
                            <Download className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reports;