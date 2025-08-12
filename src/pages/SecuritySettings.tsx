import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Shield, 
  Lock, 
  Key, 
  Eye,
  AlertTriangle,
  ArrowLeft,
  Check,
  X,
  RefreshCw,
  Download
} from 'lucide-react';

const SecuritySettings = () => {
  const { t } = useLanguage();
  const [settings, setSettings] = useState({
    twoFactorAuth: true,
    passwordExpiry: 90,
    loginNotifications: true,
    suspiciousActivityAlert: true,
    ipWhitelisting: false,
    sessionTimeout: 30,
    bruteForceProtection: true,
    dataEncryption: true
  });

  // Mock security data
  const securityEvents = [
    { id: 1, type: 'login', user: 'admin@example.com', ip: '192.168.1.1', time: '2 min ago', status: 'success' },
    { id: 2, type: 'failed_login', user: 'hacker@example.com', ip: '10.0.0.1', time: '5 min ago', status: 'blocked' },
    { id: 3, type: 'password_change', user: 'user@example.com', ip: '192.168.1.5', time: '1 hour ago', status: 'success' },
    { id: 4, type: 'suspicious_activity', user: 'test@example.com', ip: '172.16.0.1', time: '2 hours ago', status: 'investigated' }
  ];

  const getEventBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">{t('successLogin')}</Badge>;
      case 'blocked':
        return <Badge variant="destructive">{t('blocked')}</Badge>;
      case 'investigated':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">{t('investigated')}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handleSave = () => {
    alert(t('securitySettingsSaved'));
  };

  const generateBackupCodes = () => {
    alert(t('backupCodesGenerated'));
  };

  const exportLogs = () => {
    alert(t('securityLogsExported'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
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
                  {t('securitySettings')}
                </h1>
                <p className="text-muted-foreground">{t('manageSecurityDescription')}</p>
              </div>
            </div>
            <Button onClick={handleSave} className="gap-2">
              <Shield className="h-4 w-4" />
              {t('saveSettings')}
            </Button>
          </div>

          {/* Security Status */}
          <Alert className="mb-8">
            <Shield className="h-4 w-4" />
            <AlertDescription>
              <strong>{t('securityStatus')}: </strong>
              <span className="text-green-600">{t('secure')}</span> - {t('allSecurityMeasures')}
            </AlertDescription>
          </Alert>

          {/* Authentication Settings */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                {t('authenticationSettings')}
              </CardTitle>
              <CardDescription>
                {t('authenticationDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{t('twoFactorAuth')}</h3>
                    <p className="text-sm text-muted-foreground">{t('twoFactorDescription')}</p>
                  </div>
                  <Switch
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(checked) => setSettings({...settings, twoFactorAuth: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{t('loginNotifications')}</h3>
                    <p className="text-sm text-muted-foreground">{t('loginNotificationsDescription')}</p>
                  </div>
                  <Switch
                    checked={settings.loginNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, loginNotifications: checked})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="passwordExpiry">{t('passwordExpiry')} ({t('days')})</Label>
                    <Select value={settings.passwordExpiry.toString()} onValueChange={(value) => setSettings({...settings, passwordExpiry: parseInt(value)})}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('selectDays')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 {t('days')}</SelectItem>
                        <SelectItem value="60">60 {t('days')}</SelectItem>
                        <SelectItem value="90">90 {t('days')}</SelectItem>
                        <SelectItem value="180">180 {t('days')}</SelectItem>
                        <SelectItem value="365">365 {t('days')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sessionTimeout">{t('sessionTimeout')} ({t('minutes')})</Label>
                    <Select value={settings.sessionTimeout.toString()} onValueChange={(value) => setSettings({...settings, sessionTimeout: parseInt(value)})}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('selectMinutes')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 {t('minutes')}</SelectItem>
                        <SelectItem value="30">30 {t('minutes')}</SelectItem>
                        <SelectItem value="60">60 {t('minutes')}</SelectItem>
                        <SelectItem value="120">120 {t('minutes')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={generateBackupCodes} className="gap-2">
                    <Key className="h-4 w-4" />
                    {t('generateBackupCodes')}
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <RefreshCw className="h-4 w-4" />
                    {t('resetAllSessions')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Monitoring */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                {t('securityMonitoring')}
              </CardTitle>
              <CardDescription>
                {t('securityMonitoringDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{t('suspiciousActivityAlert')}</h3>
                    <p className="text-sm text-muted-foreground">{t('suspiciousActivityDescription')}</p>
                  </div>
                  <Switch
                    checked={settings.suspiciousActivityAlert}
                    onCheckedChange={(checked) => setSettings({...settings, suspiciousActivityAlert: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{t('bruteForceProtection')}</h3>
                    <p className="text-sm text-muted-foreground">{t('bruteForceDescription')}</p>
                  </div>
                  <Switch
                    checked={settings.bruteForceProtection}
                    onCheckedChange={(checked) => setSettings({...settings, bruteForceProtection: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{t('ipWhitelisting')}</h3>
                    <p className="text-sm text-muted-foreground">{t('ipWhitelistingDescription')}</p>
                  </div>
                  <Switch
                    checked={settings.ipWhitelisting}
                    onCheckedChange={(checked) => setSettings({...settings, ipWhitelisting: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{t('dataEncryption')}</h3>
                    <p className="text-sm text-muted-foreground">{t('dataEncryptionDescription')}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    {t('enabled')}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Security Events */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  {t('recentSecurityEvents')}
                </div>
                <Button variant="outline" onClick={exportLogs} className="gap-2">
                  <Download className="h-4 w-4" />
                  {t('exportLogs')}
                </Button>
              </CardTitle>
              <CardDescription>
                {t('recentEventsDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{t(event.type.replace('_', '') as any)}</div>
                      <div className="text-sm text-muted-foreground">
                        {event.user} • {event.ip} • {event.time}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      {t('details')}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Security Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">{t('successfulLogins')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,247</div>
                <p className="text-xs text-green-600">+5.2% {t('fromLastWeek')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">{t('blockedAttempts')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-red-600">-12% {t('fromLastWeek')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">{t('activeUsers')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">892</div>
                <p className="text-xs text-muted-foreground">{t('currentlyOnline')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SecuritySettings;