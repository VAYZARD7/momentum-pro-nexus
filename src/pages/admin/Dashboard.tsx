import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Users, DollarSign, Activity, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Dashboard = () => {
  const { t } = useLanguage();

  const stats = [
    { title: 'Total Users', value: '12,847', icon: Users, change: '+12%', trend: 'up' },
    { title: 'Revenue', value: '$284,592', icon: DollarSign, change: '+8%', trend: 'up' },
    { title: 'System Health', value: '99.9%', icon: Activity, change: 'Stable', trend: 'neutral' },
    { title: 'Active Sessions', value: '3,247', icon: TrendingUp, change: '+15%', trend: 'up' },
  ];

  const systemStatus = [
    { name: 'Database', status: 'healthy', uptime: '99.9%' },
    { name: 'API Gateway', status: 'healthy', uptime: '99.8%' },
    { name: 'File Storage', status: 'warning', uptime: '98.5%' },
    { name: 'Authentication', status: 'healthy', uptime: '100%' },
  ];

  const recentActivities = [
    { type: 'user_registration', message: 'New user registered: john.doe@example.com', time: '2 minutes ago', severity: 'info' },
    { type: 'system_update', message: 'System backup completed successfully', time: '15 minutes ago', severity: 'success' },
    { type: 'security_alert', message: 'Failed login attempts detected', time: '1 hour ago', severity: 'warning' },
    { type: 'course_creation', message: 'New course created: Advanced Trading Strategies', time: '2 hours ago', severity: 'info' },
    { type: 'payment_processed', message: 'Bulk payment processing completed: $45,230', time: '3 hours ago', severity: 'success' },
    { type: 'maintenance', message: 'Scheduled maintenance: Database optimization', time: '4 hours ago', severity: 'info' },
  ];

  const platformOverview = [
    { category: 'Students', active: 8945, growth: '+12%', total: 12847 },
    { category: 'Teachers', active: 156, growth: '+5%', total: 187 },
    { category: 'Curators', active: 23, growth: '+15%', total: 28 },
    { category: 'Courses', active: 47, growth: '+8%', total: 52 },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'success': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'error': return 'text-red-600';
      default: return 'text-blue-600';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Super Admin Dashboard</h1>
        <p className="text-muted-foreground">Monitor and manage your entire platform</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.trend === 'up' ? 'text-green-600' : 'text-gray-600'}>
                  {stat.change}
                </span>
                {' '}from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Platform Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Overview</CardTitle>
            <CardDescription>Active users and content across all categories</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {platformOverview.map((item) => (
              <div key={item.category} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">{item.category}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.active} active of {item.total} total
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">{item.active}</div>
                  <div className="text-sm text-green-600">{item.growth}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current health of all system components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemStatus.map((system) => (
              <div key={system.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {system.status === 'healthy' ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  )}
                  <span className="font-medium">{system.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={system.status === 'healthy' ? 'default' : 'secondary'}>
                    {system.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{system.uptime}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest system events and user actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${getSeverityColor(activity.severity)}`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {activity.type.replace('_', ' ')}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Manage User Permissions
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Activity className="mr-2 h-4 w-4" />
              System Health Check
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <DollarSign className="mr-2 h-4 w-4" />
              Generate Revenue Report
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Review Security Alerts
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="mr-2 h-4 w-4" />
              Platform Analytics
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>Key performance indicators for the last 30 days</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Server Response Time</span>
              <span className="text-sm text-muted-foreground">248ms avg</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Database Performance</span>
              <span className="text-sm text-muted-foreground">92% efficiency</span>
            </div>
            <Progress value={92} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Storage Usage</span>
              <span className="text-sm text-muted-foreground">67% of 2TB</span>
            </div>
            <Progress value={67} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;