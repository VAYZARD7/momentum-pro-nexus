import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Server, 
  Database, 
  Wifi, 
  HardDrive,
  Cpu,
  MemoryStick,
  ArrowLeft,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Activity,
  Clock
} from 'lucide-react';

const SystemMonitoring = () => {
  const { t } = useLanguage();
  const [refreshInterval, setRefreshInterval] = useState('30');

  // Mock system metrics
  const systemMetrics = {
    cpu: { usage: 45, status: 'normal' },
    memory: { usage: 68, status: 'normal' },
    disk: { usage: 23, status: 'normal' },
    network: { usage: 12, status: 'normal' }
  };

  const services = [
    { name: 'Web Server', status: 'running', uptime: '99.9%', lastCheck: '1 min ago' },
    { name: 'Database', status: 'running', uptime: '99.8%', lastCheck: '1 min ago' },
    { name: 'Payment Gateway', status: 'running', uptime: '99.7%', lastCheck: '2 min ago' },
    { name: 'Email Service', status: 'warning', uptime: '98.5%', lastCheck: '5 min ago' },
    { name: 'File Storage', status: 'running', uptime: '99.9%', lastCheck: '1 min ago' },
    { name: 'CDN', status: 'running', uptime: '99.6%', lastCheck: '3 min ago' }
  ];

  const recentEvents = [
    { id: 1, type: 'info', message: 'System backup completed successfully', time: '5 min ago' },
    { id: 2, type: 'warning', message: 'High memory usage detected on server-02', time: '15 min ago' },
    { id: 3, type: 'info', message: 'Database optimization completed', time: '30 min ago' },
    { id: 4, type: 'error', message: 'Temporary connectivity issue resolved', time: '1 hour ago' },
    { id: 5, type: 'info', message: 'Security scan completed - no threats found', time: '2 hours ago' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'running':
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            <CheckCircle className="h-3 w-3 mr-1" />
            {t('isRunning')}
          </Badge>
        );
      case 'warning':
        return (
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            <AlertCircle className="h-3 w-3 mr-1" />
            {t('warning')}
          </Badge>
        );
      case 'error':
        return (
          <Badge variant="destructive">
            <AlertCircle className="h-3 w-3 mr-1" />
            {t('errorStatus')}
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'info':
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getUsageColor = (usage: number) => {
    if (usage > 80) return 'bg-red-500';
    if (usage > 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const handleRefresh = () => {
    alert(t('systemDataRefreshed'));
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
                  {t('systemMonitoring')}
                </h1>
                <p className="text-muted-foreground">{t('systemMonitoringDescription')}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={refreshInterval} onValueChange={setRefreshInterval}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder={t('refreshInterval')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 {t('seconds')}</SelectItem>
                  <SelectItem value="30">30 {t('seconds')}</SelectItem>
                  <SelectItem value="60">1 {t('minute')}</SelectItem>
                  <SelectItem value="300">5 {t('minutes')}</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleRefresh} className="gap-2">
                <RefreshCw className="h-4 w-4" />
                {t('refresh')}
              </Button>
            </div>
          </div>

          {/* System Status Alert */}
          <Alert className="mb-8">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>{t('systemStatus')}: </strong>
              <span className="text-green-600">{t('operational')}</span> - {t('allSystemsRunning')}
            </AlertDescription>
          </Alert>

          {/* System Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('cpuUsage')}</CardTitle>
                <Cpu className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{systemMetrics.cpu.usage}%</div>
                <Progress value={systemMetrics.cpu.usage} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-1">{t('normal')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('memoryUsage')}</CardTitle>
                <MemoryStick className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{systemMetrics.memory.usage}%</div>
                <Progress value={systemMetrics.memory.usage} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-1">8.2 GB / 12 GB</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('diskUsage')}</CardTitle>
                <HardDrive className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{systemMetrics.disk.usage}%</div>
                <Progress value={systemMetrics.disk.usage} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-1">115 GB / 500 GB</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t('networkUsage')}</CardTitle>
                <Wifi className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{systemMetrics.network.usage}%</div>
                <Progress value={systemMetrics.network.usage} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-1">12 Mbps / 100 Mbps</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Services Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  {t('servicesStatus')}
                </CardTitle>
                <CardDescription>
                  {t('servicesStatusDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{service.name}</span>
                          {getStatusBadge(service.status)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {t('uptime')}: {service.uptime} • {t('lastCheck')}: {service.lastCheck}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  {t('systemEvents')}
                </CardTitle>
                <CardDescription>
                  {t('systemEventsDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentEvents.map((event) => (
                    <div key={event.id} className="flex items-start gap-3 p-3 border rounded-lg">
                      {getEventIcon(event.type)}
                      <div className="flex-1">
                        <p className="text-sm">{event.message}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                          <Clock className="h-3 w-3" />
                          {event.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  {t('viewAllEvents')}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Performance Metrics */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                {t('performanceMetrics')}
              </CardTitle>
              <CardDescription>
                {t('performanceMetricsDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">99.8%</div>
                  <p className="text-sm text-muted-foreground">{t('systemUptime')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">245ms</div>
                  <p className="text-sm text-muted-foreground">{t('avgResponseTime')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">1,247</div>
                  <p className="text-sm text-muted-foreground">{t('requestsPerMinute')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SystemMonitoring;