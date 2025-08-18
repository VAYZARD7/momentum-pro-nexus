import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Shield, AlertTriangle, CheckCircle, Eye, Lock, UserX } from 'lucide-react';

const Security = () => {
  const securityAlerts = [
    { 
      type: 'High', 
      title: 'Multiple Failed Login Attempts', 
      description: 'IP: 192.168.1.1 attempted 15 failed logins',
      time: '5 minutes ago',
      status: 'Active'
    },
    { 
      type: 'Medium', 
      title: 'Unusual Access Pattern', 
      description: 'User john.doe@example.com logged in from new location',
      time: '2 hours ago',
      status: 'Resolved'
    },
    { 
      type: 'Low', 
      title: 'Password Policy Violation', 
      description: 'User attempted to set weak password',
      time: '1 day ago',
      status: 'Resolved'
    },
  ];

  const securityMetrics = [
    { title: 'Security Score', value: 87, icon: Shield, status: 'Good' },
    { title: 'Active Threats', value: 3, icon: AlertTriangle, status: 'Warning' },
    { title: 'Blocked Attacks', value: 247, icon: UserX, status: 'Success' },
    { title: 'SSL Certificate', value: 98, icon: Lock, status: 'Valid' },
  ];

  const auditLogs = [
    { action: 'User Login', user: 'admin@example.com', ip: '192.168.1.100', time: '2 minutes ago', result: 'Success' },
    { action: 'Password Changed', user: 'john.doe@example.com', ip: '10.0.0.5', time: '15 minutes ago', result: 'Success' },
    { action: 'Failed Login', user: 'unknown', ip: '192.168.1.1', time: '30 minutes ago', result: 'Failed' },
    { action: 'Admin Access', user: 'superadmin@example.com', ip: '172.16.0.1', time: '1 hour ago', result: 'Success' },
    { action: 'Data Export', user: 'manager@example.com', ip: '10.0.0.8', time: '2 hours ago', result: 'Success' },
  ];

  const getAlertVariant = (type: string) => {
    switch (type) {
      case 'High': return 'destructive';
      case 'Medium': return 'secondary';
      case 'Low': return 'outline';
      default: return 'outline';
    }
  };

  const getResultBadge = (result: string) => {
    return result === 'Success' ? 'default' : 'destructive';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Security Center</h1>
        <p className="text-muted-foreground">Monitor and manage system security and threats</p>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}{metric.title.includes('Score') || metric.title.includes('Certificate') ? '%' : ''}</div>
              <Badge variant="outline" className="mt-2">{metric.status}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Active Security Alerts</CardTitle>
            <CardDescription>Recent security events requiring attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {securityAlerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                <AlertTriangle className={`h-5 w-5 mt-1 ${alert.type === 'High' ? 'text-red-500' : alert.type === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">{alert.title}</h4>
                    <Badge variant={getAlertVariant(alert.type)}>{alert.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{alert.time}</span>
                    <Badge variant={alert.status === 'Active' ? 'secondary' : 'outline'}>
                      {alert.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Alerts
            </Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Security Configuration</CardTitle>
            <CardDescription>Manage security policies and settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Require 2FA for all users</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-Lock Accounts</Label>
                <p className="text-sm text-muted-foreground">Lock accounts after failed attempts</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>IP Whitelisting</Label>
                <p className="text-sm text-muted-foreground">Restrict access to approved IPs</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Audit Logging</Label>
                <p className="text-sm text-muted-foreground">Log all system activities</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="space-y-2">
              <Label>Security Score</Label>
              <Progress value={87} className="h-2" />
              <p className="text-sm text-muted-foreground">87% - Good security posture</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Audit Logs */}
      <Card>
        <CardHeader>
          <CardTitle>Audit Logs</CardTitle>
          <CardDescription>Recent security-related activities and events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {auditLogs.map((log, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="font-medium text-sm">{log.action}</div>
                    <div className="text-xs text-muted-foreground">
                      {log.user} from {log.ip}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={getResultBadge(log.result)}>{log.result}</Badge>
                  <span className="text-xs text-muted-foreground">{log.time}</span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            Export Security Report
          </Button>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Backup Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Last backup: 2 hours ago</p>
            <Button className="w-full">Run Security Backup</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Vulnerability Scan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Last scan: 1 day ago</p>
            <Button className="w-full">Start Vulnerability Scan</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Security Report</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Generate comprehensive report</p>
            <Button className="w-full">Generate Report</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Security;