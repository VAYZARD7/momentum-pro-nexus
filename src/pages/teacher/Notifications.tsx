import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Clock, CheckCircle, AlertCircle, Users, FileText, Calendar, MessageSquare } from 'lucide-react';

const Notifications = () => {
  const { t } = useLanguage();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'assignment',
      title: 'New Assignment Submission',
      message: 'John Doe submitted "Risk Assessment Report" for Risk Management course',
      timestamp: '2024-01-29 15:30',
      isRead: false,
      priority: 'normal',
      course: 'Risk Management',
      actionRequired: true
    },
    {
      id: 2,
      type: 'message',
      title: 'Student Question',
      message: 'Jane Smith sent a message about Technical Analysis homework',
      timestamp: '2024-01-29 14:15',
      isRead: false,
      priority: 'normal',
      course: 'Technical Analysis',
      actionRequired: true
    },
    {
      id: 3,
      type: 'system',
      title: 'Course Update Reminder',
      message: 'Portfolio Management course materials need to be updated for next week',
      timestamp: '2024-01-29 10:00',
      isRead: true,
      priority: 'low',
      course: 'Portfolio Management',
      actionRequired: false
    },
    {
      id: 4,
      type: 'deadline',
      title: 'Grading Deadline Approaching',
      message: 'Technical Analysis assignments are due for grading in 2 days',
      timestamp: '2024-01-29 09:00',
      isRead: false,
      priority: 'high',
      course: 'Technical Analysis',
      actionRequired: true
    },
    {
      id: 5,
      type: 'student',
      title: 'Student Performance Alert',
      message: 'Mike Johnson has missed 3 consecutive assignments in Advanced Trading',
      timestamp: '2024-01-28 16:30',
      isRead: false,
      priority: 'high',
      course: 'Advanced Trading',
      actionRequired: true
    },
    {
      id: 6,
      type: 'schedule',
      title: 'Upcoming Class Reminder',
      message: 'Risk Management lecture scheduled for tomorrow at 9:00 AM',
      timestamp: '2024-01-28 20:00',
      isRead: true,
      priority: 'normal',
      course: 'Risk Management',
      actionRequired: false
    }
  ]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'assignment': return FileText;
      case 'message': return MessageSquare;
      case 'student': return Users;
      case 'deadline': return Clock;
      case 'schedule': return Calendar;
      case 'system': return AlertCircle;
      default: return Bell;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'assignment': return 'bg-blue-100 text-blue-800';
      case 'message': return 'bg-green-100 text-green-800';
      case 'student': return 'bg-purple-100 text-purple-800';
      case 'deadline': return 'bg-red-100 text-red-800';
      case 'schedule': return 'bg-orange-100 text-orange-800';
      case 'system': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500 text-white';
      case 'normal': return 'bg-blue-500 text-white';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, isRead: true })));
  };

  const filterNotifications = (filter: string) => {
    switch (filter) {
      case 'unread':
        return notifications.filter(n => !n.isRead);
      case 'action-required':
        return notifications.filter(n => n.actionRequired);
      case 'high-priority':
        return notifications.filter(n => n.priority === 'high');
      default:
        return notifications;
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;
  const actionRequiredCount = notifications.filter(n => n.actionRequired && !n.isRead).length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
          <p className="text-muted-foreground">Stay updated with important alerts and messages</p>
        </div>
        <Button onClick={markAllAsRead} disabled={unreadCount === 0}>
          <CheckCircle className="w-4 h-4 mr-2" />
          Mark All as Read
        </Button>
      </div>

      {/* Notification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{notifications.length}</div>
            <p className="text-xs text-muted-foreground">All notifications</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Unread</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{unreadCount}</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Action Required</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{actionRequiredCount}</div>
            <p className="text-xs text-muted-foreground">Pending actions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {notifications.filter(n => n.priority === 'high' && !n.isRead).length}
            </div>
            <p className="text-xs text-muted-foreground">Urgent items</p>
          </CardContent>
        </Card>
      </div>

      {/* Notifications Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Notifications</TabsTrigger>
          <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
          <TabsTrigger value="action-required">Action Required</TabsTrigger>
          <TabsTrigger value="high-priority">High Priority</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filterNotifications('all').map((notification) => (
            <NotificationCard 
              key={notification.id} 
              notification={notification} 
              getTypeIcon={getTypeIcon}
              getTypeColor={getTypeColor}
              getPriorityColor={getPriorityColor}
              onMarkAsRead={markAsRead}
            />
          ))}
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          {filterNotifications('unread').map((notification) => (
            <NotificationCard 
              key={notification.id} 
              notification={notification} 
              getTypeIcon={getTypeIcon}
              getTypeColor={getTypeColor}
              getPriorityColor={getPriorityColor}
              onMarkAsRead={markAsRead}
            />
          ))}
        </TabsContent>

        <TabsContent value="action-required" className="space-y-4">
          {filterNotifications('action-required').map((notification) => (
            <NotificationCard 
              key={notification.id} 
              notification={notification} 
              getTypeIcon={getTypeIcon}
              getTypeColor={getTypeColor}
              getPriorityColor={getPriorityColor}
              onMarkAsRead={markAsRead}
            />
          ))}
        </TabsContent>

        <TabsContent value="high-priority" className="space-y-4">
          {filterNotifications('high-priority').map((notification) => (
            <NotificationCard 
              key={notification.id} 
              notification={notification} 
              getTypeIcon={getTypeIcon}
              getTypeColor={getTypeColor}
              getPriorityColor={getPriorityColor}
              onMarkAsRead={markAsRead}
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

const NotificationCard = ({ notification, getTypeIcon, getTypeColor, getPriorityColor, onMarkAsRead }: any) => {
  const IconComponent = getTypeIcon(notification.type);

  return (
    <Card className={`${notification.isRead ? 'opacity-60' : ''} ${!notification.isRead ? 'border-l-4 border-l-primary' : ''}`}>
      <CardContent className="pt-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <div className={`p-2 rounded-full ${getTypeColor(notification.type)}`}>
              <IconComponent className="w-4 h-4" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className={`font-semibold ${!notification.isRead ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {notification.title}
                </h3>
                <Badge className={getPriorityColor(notification.priority)} variant="secondary">
                  {notification.priority}
                </Badge>
                {notification.actionRequired && (
                  <Badge variant="outline" className="bg-orange-50 text-orange-700">
                    Action Required
                  </Badge>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {notification.timestamp}
                </span>
                <span>{notification.course}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            {!notification.isRead && (
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onMarkAsRead(notification.id)}
              >
                <CheckCircle className="w-4 h-4 mr-1" />
                Mark Read
              </Button>
            )}
            {notification.actionRequired && (
              <Button size="sm">
                Take Action
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Notifications;