import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, FileText, Calendar as CalendarIcon, Filter } from 'lucide-react';
import { format } from 'date-fns';

const Reports = () => {
  const [date, setDate] = React.useState<Date>();

  const reportTypes = [
    { 
      title: 'User Activity Report', 
      description: 'Detailed breakdown of user engagement and activity patterns',
      frequency: 'Daily',
      lastGenerated: '2 hours ago',
      status: 'Ready'
    },
    { 
      title: 'Revenue Analytics', 
      description: 'Financial performance metrics and revenue trends',
      frequency: 'Weekly',
      lastGenerated: '1 day ago',
      status: 'Ready'
    },
    { 
      title: 'Course Performance', 
      description: 'Enrollment rates, completion statistics, and course effectiveness',
      frequency: 'Monthly',
      lastGenerated: '3 days ago',
      status: 'Generating'
    },
    { 
      title: 'System Health Report', 
      description: 'Infrastructure performance, uptime, and technical metrics',
      frequency: 'Daily',
      lastGenerated: '1 hour ago',
      status: 'Ready'
    },
    { 
      title: 'Security Audit', 
      description: 'Security events, failed logins, and vulnerability assessments',
      frequency: 'Weekly',
      lastGenerated: '2 days ago',
      status: 'Ready'
    },
  ];

  const recentReports = [
    { name: 'Monthly_Revenue_Report_Jan_2024.pdf', date: '2024-01-31', size: '2.4 MB', downloads: 127 },
    { name: 'User_Activity_Report_Jan_2024.xlsx', date: '2024-01-30', size: '1.8 MB', downloads: 89 },
    { name: 'Course_Performance_Q4_2023.pdf', date: '2024-01-28', size: '3.2 MB', downloads: 156 },
    { name: 'Security_Audit_Jan_2024.pdf', date: '2024-01-25', size: '1.1 MB', downloads: 42 },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Ready': return <Badge variant="default">Ready</Badge>;
      case 'Generating': return <Badge variant="secondary">Generating</Badge>;
      case 'Error': return <Badge variant="destructive">Error</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate and download comprehensive system reports</p>
        </div>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Generate Custom Report
        </Button>
      </div>

      {/* Report Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Report Filters</CardTitle>
          <CardDescription>Customize your reports with specific date ranges and parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Report Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user-activity">User Activity</SelectItem>
                <SelectItem value="revenue">Revenue</SelectItem>
                <SelectItem value="course-performance">Course Performance</SelectItem>
                <SelectItem value="system-health">System Health</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Button>
              <Filter className="h-4 w-4 mr-2" />
              Apply Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Available Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>Automated reports generated on schedule</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {reportTypes.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-medium">{report.title}</h3>
                  {getStatusBadge(report.status)}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span>Frequency: {report.frequency}</span>
                  <span>Last generated: {report.lastGenerated}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled={report.status !== 'Ready'}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="ghost" size="sm">
                  Generate Now
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Downloads */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Downloads</CardTitle>
          <CardDescription>Previously generated reports available for download</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentReports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium text-sm">{report.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {report.date} • {report.size} • {report.downloads} downloads
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Reports Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,247</div>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Storage Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">847 GB</div>
            <p className="text-sm text-muted-foreground">67% of available space</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Average Generation Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2.4s</div>
            <p className="text-sm text-muted-foreground">-15% from last month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;