import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Search, Send, Reply, MessageSquare, Clock } from 'lucide-react';

const Messages = () => {
  const { t } = useLanguage();

  const mockMessages = [
    {
      id: 1,
      from: 'Alice Wilson',
      email: 'alice.w@email.com',
      subject: 'Question about content report',
      message: 'Hi, I submitted a report about inappropriate content yesterday. Can you provide an update on the investigation?',
      timestamp: '2024-01-16 10:30',
      status: 'unread',
      type: 'inquiry'
    },
    {
      id: 2,
      from: 'John Doe',
      email: 'john.doe@email.com',
      subject: 'Application status inquiry',
      message: 'Hello, I applied for the Advanced Trading course two weeks ago. Could you please let me know the status of my application?',
      timestamp: '2024-01-16 09:15',
      status: 'read',
      type: 'application'
    },
    {
      id: 3,
      from: 'Dr. Sarah Johnson',
      email: 'sarah.j@instructor.com',
      subject: 'Content review feedback',
      message: 'Thank you for the feedback on my latest video. I have addressed the issues you mentioned and uploaded a revised version.',
      timestamp: '2024-01-15 16:45',
      status: 'replied',
      type: 'instructor'
    },
    {
      id: 4,
      from: 'Mike Chen',
      email: 'mike.c@instructor.com',
      subject: 'New content submission',
      message: 'I have submitted a new lesson on chart patterns for your review. Please let me know if any changes are needed.',
      timestamp: '2024-01-15 14:20',
      status: 'unread',
      type: 'content'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread': return 'bg-blue-500 text-white';
      case 'read': return 'bg-gray-500 text-white';
      case 'replied': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'inquiry': return 'bg-purple-100 text-purple-800';
      case 'application': return 'bg-blue-100 text-blue-800';
      case 'instructor': return 'bg-green-100 text-green-800';
      case 'content': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Messages</h1>
        <p className="text-muted-foreground">Communicate with students and instructors</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search messages..." className="pl-10" />
        </div>
        <Button className="flex items-center gap-2">
          <Send className="h-4 w-4" />
          Compose
        </Button>
      </div>

      <div className="grid gap-4">
        {mockMessages.map((message) => (
          <Card key={message.id} className={message.status === 'unread' ? 'border-blue-200 bg-blue-50/50' : ''}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    {message.subject}
                  </CardTitle>
                  <CardDescription>
                    From: {message.from} ({message.email})
                  </CardDescription>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <Badge className={getStatusColor(message.status)}>
                    {message.status.charAt(0).toUpperCase() + message.status.slice(1)}
                  </Badge>
                  <Badge variant="secondary" className={getTypeColor(message.type)}>
                    {message.type.charAt(0).toUpperCase() + message.type.slice(1)}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-sm">{message.message}</p>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {message.timestamp}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Reply className="h-4 w-4" />
                    Reply
                  </Button>
                  {message.status === 'unread' && (
                    <Button size="sm">
                      Mark as Read
                    </Button>
                  )}
                </div>
              </div>

              {/* Quick Reply Section for unread messages */}
              {message.status === 'unread' && (
                <div className="mt-4 pt-4 border-t">
                  <h4 className="text-sm font-medium mb-2">Quick Reply</h4>
                  <Textarea 
                    placeholder="Type your response..." 
                    className="mb-2"
                    rows={3}
                  />
                  <div className="flex gap-2">
                    <Button size="sm">Send Reply</Button>
                    <Button variant="outline" size="sm">Save Draft</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Messages;