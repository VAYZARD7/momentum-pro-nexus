import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  Bell, 
  MessageSquare, 
  Calendar, 
  Award, 
  AlertCircle, 
  BookOpen, 
  Clock, 
  CheckCircle,
  Settings,
  Mail,
  Smartphone
} from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'assignment' | 'grade' | 'announcement' | 'reminder' | 'achievement' | 'system';
  timestamp: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  actionUrl?: string;
}

interface NotificationSettings {
  email: {
    assignments: boolean;
    grades: boolean;
    announcements: boolean;
    reminders: boolean;
    achievements: boolean;
  };
  push: {
    assignments: boolean;
    grades: boolean;
    announcements: boolean;
    reminders: boolean;
    achievements: boolean;
  };
  digest: {
    enabled: boolean;
    frequency: 'daily' | 'weekly';
  };
}

const Notifications = () => {
  const { t } = useLanguage();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'New Assignment Posted',
      message: 'Risk Management Essay has been posted for Risk Management course. Due date: January 25, 2024.',
      type: 'assignment',
      timestamp: '2024-01-20T10:30:00Z',
      read: false,
      priority: 'high',
      actionUrl: '/student-dashboard/homework'
    },
    {
      id: '2',
      title: 'Grade Available',
      message: 'Your grade for Technical Analysis Quiz is now available. Score: 92%',
      type: 'grade',
      timestamp: '2024-01-19T14:15:00Z',
      read: false,
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Live Class Reminder',
      message: 'Risk Management Fundamentals class starts in 30 minutes. Join link is available in your schedule.',
      type: 'reminder',
      timestamp: '2024-01-19T08:30:00Z',
      read: true,
      priority: 'high',
      actionUrl: '/student-dashboard/schedule'
    },
    {
      id: '4',
      title: 'Achievement Unlocked!',
      message: 'Congratulations! You\'ve earned the "Perfect Attendance" achievement.',
      type: 'achievement',
      timestamp: '2024-01-18T16:00:00Z',
      read: true,
      priority: 'low'
    },
    {
      id: '5',
      title: 'Course Announcement',
      message: 'New study materials have been uploaded for Advanced Trading Strategies course.',
      type: 'announcement',
      timestamp: '2024-01-17T12:00:00Z',
      read: true,
      priority: 'medium',
      actionUrl: '/student-dashboard/courses'
    },
    {
      id: '6',
      title: 'System Maintenance',
      message: 'Scheduled maintenance will occur on January 22, 2024 from 2:00 AM to 4:00 AM EST.',
      type: 'system',
      timestamp: '2024-01-16T09:00:00Z',
      read: true,
      priority: 'low'
    }
  ]);

  const [settings, setSettings] = useState<NotificationSettings>({
    email: {
      assignments: true,
      grades: true,
      announcements: true,
      reminders: true,
      achievements: false
    },
    push: {
      assignments: true,
      grades: true,
      announcements: false,
      reminders: true,
      achievements: true
    },
    digest: {
      enabled: true,
      frequency: 'daily'
    }
  });

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'assignment': return <BookOpen className="h-4 w-4" />;
      case 'grade': return <Award className="h-4 w-4" />;
      case 'announcement': return <MessageSquare className="h-4 w-4" />;
      case 'reminder': return <Clock className="h-4 w-4" />;
      case 'achievement': return <Award className="h-4 w-4" />;
      case 'system': return <Settings className="h-4 w-4" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const getNotificationColor = (type: string, priority: string) => {
    if (priority === 'high') return 'border-l-red-500 bg-red-50/50';
    if (priority === 'medium') return 'border-l-yellow-500 bg-yellow-50/50';
    
    switch (type) {
      case 'assignment': return 'border-l-blue-500 bg-blue-50/50';
      case 'grade': return 'border-l-green-500 bg-green-50/50';
      case 'achievement': return 'border-l-purple-500 bg-purple-50/50';
      default: return 'border-l-gray-500 bg-gray-50/50';
    }
  };

  const getPriorityBadge = (priority: string) => {
    const colors = {
      high: 'bg-red-500 text-white',
      medium: 'bg-yellow-500 text-white',
      low: 'bg-gray-500 text-white'
    };
    return colors[priority as keyof typeof colors];
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return date.toLocaleDateString();
  };

  const updateEmailSetting = (key: keyof NotificationSettings['email'], value: boolean) => {
    setSettings(prev => ({
      ...prev,
      email: { ...prev.email, [key]: value }
    }));
  };

  const updatePushSetting = (key: keyof NotificationSettings['push'], value: boolean) => {
    setSettings(prev => ({
      ...prev,
      push: { ...prev.push, [key]: value }
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">
            Stay updated with your courses, assignments, and achievements
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{unreadCount} unread</Badge>
          {unreadCount > 0 && (
            <Button variant="outline" onClick={markAllAsRead}>
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark all as read
            </Button>
          )}
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="assignment">Assignments</TabsTrigger>
          <TabsTrigger value="grade">Grades</TabsTrigger>
          <TabsTrigger value="announcement">Announcements</TabsTrigger>
          <TabsTrigger value="achievement">Achievements</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`border-l-4 ${getNotificationColor(notification.type, notification.priority)} ${
                !notification.read ? 'shadow-md' : 'opacity-75'
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2 bg-background rounded-full">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`font-medium ${!notification.read ? 'font-semibold' : ''}`}>
                          {notification.title}
                        </h4>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                        <Badge className={getPriorityBadge(notification.priority)}>
                          {notification.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {formatTimestamp(notification.timestamp)}
                        </span>
                        <div className="flex gap-2">
                          {notification.actionUrl && (
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          )}
                          {!notification.read && (
                            <Button size="sm" variant="ghost" onClick={() => markAsRead(notification.id)}>
                              Mark as read
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {['assignment', 'grade', 'announcement', 'achievement'].map(type => (
          <TabsContent key={type} value={type} className="space-y-4">
            {notifications
              .filter(notification => notification.type === type)
              .map((notification) => (
                <Card 
                  key={notification.id} 
                  className={`border-l-4 ${getNotificationColor(notification.type, notification.priority)} ${
                    !notification.read ? 'shadow-md' : 'opacity-75'
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="p-2 bg-background rounded-full">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className={`font-medium ${!notification.read ? 'font-semibold' : ''}`}>
                              {notification.title}
                            </h4>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                            <Badge className={getPriorityBadge(notification.priority)}>
                              {notification.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {notification.message}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              {formatTimestamp(notification.timestamp)}
                            </span>
                            <div className="flex gap-2">
                              {notification.actionUrl && (
                                <Button size="sm" variant="outline">
                                  View Details
                                </Button>
                              )}
                              {!notification.read && (
                                <Button size="sm" variant="ghost" onClick={() => markAsRead(notification.id)}>
                                  Mark as read
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        ))}

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Notifications
              </CardTitle>
              <CardDescription>
                Choose which notifications you want to receive via email
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(settings.email).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <Label htmlFor={`email-${key}`} className="capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </Label>
                  <Switch
                    id={`email-${key}`}
                    checked={value}
                    onCheckedChange={(checked) => updateEmailSetting(key as keyof NotificationSettings['email'], checked)}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Push Notifications
              </CardTitle>
              <CardDescription>
                Control which notifications appear on your device
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(settings.push).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <Label htmlFor={`push-${key}`} className="capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </Label>
                  <Switch
                    id={`push-${key}`}
                    checked={value}
                    onCheckedChange={(checked) => updatePushSetting(key as keyof NotificationSettings['push'], checked)}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Notification Digest
              </CardTitle>
              <CardDescription>
                Receive a summary of your notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="digest-enabled">Enable notification digest</Label>
                <Switch
                  id="digest-enabled"
                  checked={settings.digest.enabled}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({
                      ...prev,
                      digest: { ...prev.digest, enabled: checked }
                    }))
                  }
                />
              </div>
              {settings.digest.enabled && (
                <div className="flex items-center justify-between">
                  <Label>Digest frequency</Label>
                  <select 
                    value={settings.digest.frequency}
                    onChange={(e) => 
                      setSettings(prev => ({
                        ...prev,
                        digest: { ...prev.digest, frequency: e.target.value as 'daily' | 'weekly' }
                      }))
                    }
                    className="px-3 py-1 border rounded"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Notifications;