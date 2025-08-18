import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Server, Database, Wifi, HardDrive, Cpu, MemoryStick, AlertTriangle, CheckCircle } from 'lucide-react';

const Monitoring = () => {
  const systemStatus = [
    { name: 'Web Server', status: 'healthy', uptime: '99.9%', responseTime: '245ms', icon: Server },
    { name: 'Database', status: 'healthy', uptime: '99.8%', responseTime: '12ms', icon: Database },
    { name: 'CDN', status: 'warning', uptime: '98.2%', responseTime: '156ms', icon: Wifi },
    { name: 'File Storage', status: 'healthy', uptime: '100%', responseTime: '89ms', icon: HardDrive },
  ];

  const resourceUsage = [
    { name: 'CPU Usage', current: 67, threshold: 80, unit: '%', icon: Cpu },
    { name: 'Memory Usage', current: 82, threshold: 90, unit: '%', icon: MemoryStick },
    { name: 'Disk Space', current: 45, threshold: 85, unit: '%', icon: HardDrive },
    { name: 'Network I/O', current: 23, threshold: 70, unit: 'Mbps', icon: Wifi },
  ];

  const recentEvents = [
    { type: 'info', message: 'Database backup completed successfully', time: '2 minutes ago' },
    { type: 'warning', message: 'High memory usage detected on server-02', time: '15 minutes ago' },
    { type: 'error', message: 'API endpoint /users/profile returned 500 error', time: '1 hour ago' },
    { type: 'info', message: 'SSL certificate renewed automatically', time: '3 hours ago' },
    { type: 'warning', message: 'Unusual traffic pattern detected', time: '6 hours ago' },
  ];

  const performanceMetrics = [
    { name: 'Requests/min', value: '1,247', change: '+5.2%' },
    { name: 'Error Rate', value: '0.02%', change: '-0.1%' },
    { name: 'Avg Response Time', value: '245ms', change: '-12ms' },
    { name: 'Active Connections', value: '834', change: '+23' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'error': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default: return <CheckCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'healthy': return <Badge variant="default">Healthy</Badge>;
      case 'warning': return <Badge variant="secondary">Warning</Badge>;
      case 'error': return <Badge variant="destructive">Error</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'error': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'info': return <CheckCircle className="h-4 w-4 text-blue-500" />;
      default: return <CheckCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getUsageColor = (current: number, threshold: number) => {
    if (current >= threshold) return 'text-red-500';
    if (current >= threshold * 0.8) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">System Monitoring</h1>
        <p className="text-muted-foreground">Real-time monitoring of system health and performance</p>
      </div>

      {/* System Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStatus.map((system) => (
          <Card key={system.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{system.name}</CardTitle>
              <system.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-2">
                {getStatusIcon(system.status)}
                {getStatusBadge(system.status)}
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <div>Uptime: {system.uptime}</div>
                <div>Response: {system.responseTime}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resource Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Resource Usage</CardTitle>
            <CardDescription>Current system resource utilization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {resourceUsage.map((resource) => (
              <div key={resource.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <resource.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{resource.name}</span>
                  </div>
                  <span className={`font-bold ${getUsageColor(resource.current, resource.threshold)}`}>
                    {resource.current}{resource.unit}
                  </span>
                </div>
                <div className="space-y-1">
                  <Progress value={resource.current} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0{resource.unit}</span>
                    <span>Threshold: {resource.threshold}{resource.unit}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Events */}
        <Card>
          <CardHeader>
            <CardTitle>System Events</CardTitle>
            <CardDescription>Recent system events and alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-3">
                {getEventIcon(event.type)}
                <div className="flex-1">
                  <p className="text-sm font-medium">{event.message}</p>
                  <p className="text-xs text-muted-foreground">{event.time}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Events
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Key performance indicators for the last hour</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {performanceMetrics.map((metric) => (
              <div key={metric.name} className="text-center">
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.name}</div>
                <div className="text-xs text-green-600">{metric.change}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Health Checks */}
      <Card>
        <CardHeader>
          <CardTitle>Health Checks</CardTitle>
          <CardDescription>Automated health check results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="font-medium">API Health</div>
              <div className="text-sm text-muted-foreground">All endpoints responding</div>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="font-medium">Database Health</div>
              <div className="text-sm text-muted-foreground">Connections optimal</div>
            </div>
            <div className="text-center">
              <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="font-medium">Cache Health</div>
              <div className="text-sm text-muted-foreground">Hit ratio below optimal</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>System Restart</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Restart system services</p>
            <Button variant="destructive" className="w-full">Restart Services</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Clear Cache</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Clear all system caches</p>
            <Button variant="outline" className="w-full">Clear Cache</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Export Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Download system logs</p>
            <Button className="w-full">Export Logs</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Monitoring;