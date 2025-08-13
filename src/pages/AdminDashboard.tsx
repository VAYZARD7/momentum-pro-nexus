import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  Server, 
  Shield, 
  Settings,
  BarChart3 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { t } = useLanguage();

  // Mock data for admin
  const mockStats = {
    totalUsers: 1247,
    activeUsers: 892,
    totalRevenue: 45680,
    monthlyGrowth: 12.5,
    systemHealth: 98.7,
    securityStatus: 'secure'
  };

  const mockUserActivity = [
    { role: 'Students', count: 1050, change: '+8%' },
    { role: 'Teachers', count: 45, change: '+2%' },
    { role: 'Curators', count: 12, change: '0%' },
    { role: 'Admins', count: 5, change: '0%' }
  ];

  const mockRecentActions = [
    { id: 1, action: 'New user registration', user: 'john.doe@email.com', time: '2 min ago' },
    { id: 2, action: 'Course completion', user: 'alice.smith@email.com', time: '5 min ago' },
    { id: 3, action: 'Payment processed', user: 'bob.wilson@email.com', time: '8 min ago' },
    { id: 4, action: 'Teacher approval', user: 'sara.jones@email.com', time: '15 min ago' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {t('admin')} {t('dashboard')}
              </h1>
              <p className="text-muted-foreground">System overview and management</p>
            </div>
            <Button className="gap-2">
              <Settings className="h-4 w-4" />
              System Settings
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockStats.totalUsers.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {mockStats.activeUsers} active users
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${mockStats.totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-green-600 mt-1">
                  +{mockStats.monthlyGrowth}% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">System Health</CardTitle>
                <Server className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockStats.systemHealth}%</div>
                <p className="text-xs text-green-600 mt-1">All systems operational</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Security Status</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">Secure</div>
                <p className="text-xs text-muted-foreground mt-1">No threats detected</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* User Analytics */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  User Analytics
                </CardTitle>
                <CardDescription>User distribution by role</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockUserActivity.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span className="font-medium">{item.role}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{item.count}</div>
                        <div className={`text-xs ${item.change.startsWith('+') ? 'text-green-600' : 'text-muted-foreground'}`}>
                          {item.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-6">
                  <Button variant="outline" className="flex-1">Export Data</Button>
                  <Link to="/reports" className="flex-1">
                    <Button variant="outline" className="w-full">View Reports</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Latest system events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRecentActions.map((action) => (
                    <div key={action.id} className="text-sm">
                      <div className="font-medium">{action.action}</div>
                      <div className="text-muted-foreground text-xs">{action.user}</div>
                      <div className="text-muted-foreground text-xs">{action.time}</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Activity Log
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Management Actions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>System Management</CardTitle>
              <CardDescription>Administrative tools and controls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/user-management">
                  <Button variant="outline" className="h-20 flex flex-col gap-2 w-full">
                    <Users className="h-6 w-6" />
                    User Management
                  </Button>
                </Link>
                <Link to="/course-management">
                  <Button variant="outline" className="h-20 flex flex-col gap-2 w-full">
                    <BookOpen className="h-6 w-6" />
                    Course Management
                  </Button>
                </Link>
                <Link to="/payment-settings">
                  <Button variant="outline" className="h-20 flex flex-col gap-2 w-full">
                    <DollarSign className="h-6 w-6" />
                    Payment Settings
                  </Button>
                </Link>
                <Link to="/security-settings">
                  <Button variant="outline" className="h-20 flex flex-col gap-2 w-full">
                    <Shield className="h-6 w-6" />
                    Security Settings
                  </Button>
                </Link>
                <Link to="/system-monitoring">
                  <Button variant="outline" className="h-20 flex flex-col gap-2 w-full">
                    <Server className="h-6 w-6" />
                    System Monitoring
                  </Button>
                </Link>
                <Link to="/analytics-dashboard">
                  <Button variant="outline" className="h-20 flex flex-col gap-2 w-full">
                    <BarChart3 className="h-6 w-6" />
                    Analytics Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;