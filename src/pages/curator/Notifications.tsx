import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Bell, AlertTriangle, CheckCircle, FileCheck, MessageSquare, Clock } from 'lucide-react';

const Notifications = () => {
  const { t } = useLanguage();

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'application': return <FileCheck className="h-5 w-5 text-blue-500" />;
      case 'report': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'approval': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'message': return <MessageSquare className="h-5 w-5 text-purple-500" />;
      default: return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const mockNotifications = [
    {
      id: 1,
      type: 'report',
      title: 'High Priority Report Submitted',
      message: 'Alice Wilson reported inappropriate content in Trading Psychology course.',
      timestamp: '5 minutes ago',
      priority: 'high',
      isRead: false
    },
    {
      id: 2,
      type: 'application',
      title: 'New Course Application',
      message: 'John Smith applied for Advanced Trading Strategies course.',
      timestamp: '1 hour ago',
      priority: 'medium',
      isRead: false
    },
    {
      id: 3,
      type: 'approval',
      title: 'Content Approved',
      message: 'Risk Management video by Dr. Johnson has been approved.',
      timestamp: '2 hours ago',
      priority: 'low',
      isRead: true
    },
    {
      id: 4,
      type: 'message',
      title: 'New Message from Instructor',
      message: 'Mike Chen sent a message about content review feedback.',
      timestamp: '3 hours ago',
      priority: 'medium',
      isRead: true
    },
    {
      id: 5,
      type: 'application',
      title: 'Application Deadline Reminder',
      message: '15 applications are pending review for more than 48 hours.',
      timestamp: '1 day ago',
      priority: 'high',
      isRead: false
    }
  ];

  const notificationSettings = [
    { id: 'new_applications', label: 'New Applications', enabled: true },
    { id: 'quality_reports', label: 'Quality Reports', enabled: true },
    { id: 'content_submissions', label: 'Content Submissions', enabled: true },
    { id: 'deadline_reminders', label: 'Deadline Reminders', enabled: true },
    { id: 'instructor_messages', label: 'Instructor Messages', enabled: false },
    { id: 'system_updates', label: 'System Updates', enabled: true }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Notifications</h1>
        <p className="text-muted-foreground">Stay updated with important curator activities</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Notifications List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Recent Notifications</h2>
            <Button variant="outline" size="sm">Mark All as Read</Button>
          </div>

          <div className="space-y-3">
            {mockNotifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={`${!notification.isRead ? 'border-blue-200 bg-blue-50/50' : ''} transition-colors hover:bg-muted/50`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-medium text-sm">{notification.title}</h4>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="outline" 
                            className={getPriorityColor(notification.priority)}
                          >
                            {notification.priority}
                          </Badge>
                          {!notification.isRead && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {notification.message}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {notification.timestamp}
                        </span>
                        {!notification.isRead && (
                          <Button variant="ghost" size="sm" className="text-xs">
                            Mark as read
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Notification Settings */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>
                Configure which notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {notificationSettings.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between">
                  <div>
                    <label htmlFor={setting.id} className="text-sm font-medium">
                      {setting.label}
                    </label>
                  </div>
                  <Switch 
                    id={setting.id}
                    checked={setting.enabled}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Unread Notifications</span>
                  <Badge variant="secondary">3</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">High Priority</span>
                  <Badge variant="destructive">2</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">New Applications</span>
                  <Badge variant="secondary">5</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Pending Reports</span>
                  <Badge variant="secondary">2</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Notifications;