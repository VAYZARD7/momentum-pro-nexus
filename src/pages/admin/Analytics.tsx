import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Users, BookOpen, DollarSign, Eye, Clock } from 'lucide-react';

const Analytics = () => {
  const metrics = [
    { title: 'Page Views', value: '1,247,892', icon: Eye, change: '+15.2%', trend: 'up' },
    { title: 'Active Users', value: '8,432', icon: Users, change: '+8.1%', trend: 'up' },
    { title: 'Course Completions', value: '2,847', icon: BookOpen, change: '+12.5%', trend: 'up' },
    { title: 'Revenue', value: '$48,392', icon: DollarSign, change: '+22.3%', trend: 'up' },
  ];

  const topCourses = [
    { name: 'Basic Trading Fundamentals', students: 1247, completion: 89, revenue: '$12,450' },
    { name: 'Advanced Technical Analysis', students: 892, completion: 76, revenue: '$8,920' },
    { name: 'Risk Management Strategies', students: 743, completion: 92, revenue: '$7,430' },
    { name: 'Algorithmic Trading', students: 634, completion: 68, revenue: '$6,340' },
    { name: 'Market Psychology', students: 589, completion: 84, revenue: '$5,890' },
  ];

  const userBehavior = [
    { metric: 'Average Session Duration', value: '24m 32s', change: '+5.2%' },
    { metric: 'Pages per Session', value: '4.8', change: '+2.1%' },
    { metric: 'Bounce Rate', value: '32.4%', change: '-3.7%' },
    { metric: 'Return Visitor Rate', value: '68.2%', change: '+8.9%' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive insights into platform performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-green-600">
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Courses */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Courses</CardTitle>
            <CardDescription>Courses with highest engagement and revenue</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCourses.map((course, index) => (
              <div key={course.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">#{index + 1}</Badge>
                    <span className="font-medium text-sm">{course.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{course.revenue}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                  <span>{course.students} students</span>
                  <span>{course.completion}% completion</span>
                </div>
                <Progress value={course.completion} className="h-1" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* User Behavior */}
        <Card>
          <CardHeader>
            <CardTitle>User Behavior Metrics</CardTitle>
            <CardDescription>How users interact with the platform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {userBehavior.map((item) => (
              <div key={item.metric} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{item.metric}</div>
                  <div className="text-2xl font-bold">{item.value}</div>
                </div>
                <Badge variant="secondary" className="text-green-600">
                  {item.change}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Traffic Sources */}
      <Card>
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
          <CardDescription>Where your users are coming from</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">45.2%</div>
              <div className="text-sm text-muted-foreground">Organic Search</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">28.7%</div>
              <div className="text-sm text-muted-foreground">Direct Traffic</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">26.1%</div>
              <div className="text-sm text-muted-foreground">Social Media</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Geographic Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Geographic Distribution</CardTitle>
          <CardDescription>User distribution by country</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { country: 'United States', percentage: 32.4, users: 2734 },
              { country: 'United Kingdom', percentage: 18.7, users: 1576 },
              { country: 'Canada', percentage: 12.3, users: 1037 },
              { country: 'Australia', percentage: 9.8, users: 826 },
              { country: 'Germany', percentage: 8.2, users: 691 },
            ].map((item) => (
              <div key={item.country} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="font-medium">{item.country}</span>
                  <span className="text-sm text-muted-foreground">({item.users} users)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={item.percentage} className="h-2 w-20" />
                  <span className="text-sm font-medium w-12">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;