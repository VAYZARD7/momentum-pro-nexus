import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
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
    { type: 'user_registration', message: 'New user registered: john.doe@example.com', time: '2 minutes ago' },
    { type: 'system_update', message: 'System backup completed successfully', time: '15 minutes ago' },
    { type: 'security_alert', message: 'Failed login attempts detected', time: '1 hour ago' },
    { type: 'course_creation', message: 'New course created: Advanced Trading Strategies', time: '2 hours ago' },
  ];

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest system events and user actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
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