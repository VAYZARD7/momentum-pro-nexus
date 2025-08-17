import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Plus, Reply, Archive, Star, Send } from 'lucide-react';

const Messages = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [replyText, setReplyText] = useState('');

  const mockMessages = [
    {
      id: 1,
      from: 'John Doe',
      fromEmail: 'john.doe@email.com',
      subject: 'Question about Risk Assessment Assignment',
      preview: 'Hi Professor, I have a question about the risk assessment methodology...',
      content: 'Hi Professor,\n\nI have a question about the risk assessment methodology we need to use for the current assignment. Could you clarify the difference between VaR and CVaR calculations?\n\nBest regards,\nJohn',
      timestamp: '2024-01-29 14:30',
      status: 'unread',
      course: 'Risk Management',
      priority: 'normal',
      hasAttachment: false
    },
    {
      id: 2,
      from: 'Jane Smith',
      fromEmail: 'jane.smith@email.com',
      subject: 'Request for Office Hours',
      preview: 'Dear Professor, would it be possible to schedule a meeting to discuss...',
      content: 'Dear Professor,\n\nWould it be possible to schedule a meeting to discuss my portfolio optimization project? I\'m having some difficulties with the constraint formulation.\n\nThank you,\nJane',
      timestamp: '2024-01-29 10:15',
      status: 'read',
      course: 'Portfolio Management',
      priority: 'normal',
      hasAttachment: false
    },
    {
      id: 3,
      from: 'Mike Johnson',
      fromEmail: 'mike.johnson@email.com',
      subject: 'Assignment Submission Issue',
      preview: 'Professor, I\'m experiencing technical difficulties with the submission portal...',
      content: 'Professor,\n\nI\'m experiencing technical difficulties with the submission portal. The file upload keeps failing. Could you please help?\n\nThanks,\nMike',
      timestamp: '2024-01-28 16:45',
      status: 'replied',
      course: 'Technical Analysis',
      priority: 'high',
      hasAttachment: true
    },
    {
      id: 4,
      from: 'Sarah Wilson',
      fromEmail: 'sarah.wilson@email.com',
      subject: 'Thank you for the feedback',
      preview: 'Thank you for the detailed feedback on my trading psychology essay...',
      content: 'Thank you for the detailed feedback on my trading psychology essay. Your comments were very helpful and I understand now how to improve my analysis.\n\nBest regards,\nSarah',
      timestamp: '2024-01-28 09:20',
      status: 'read',
      course: 'Trading Psychology',
      priority: 'normal',
      hasAttachment: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread': return 'bg-blue-500 text-white';
      case 'read': return 'bg-gray-500 text-white';
      case 'replied': return 'bg-green-500 text-white';
      case 'archived': return 'bg-yellow-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'normal': return 'bg-blue-100 text-blue-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filterMessagesByStatus = (status: string) => {
    if (status === 'all') return mockMessages;
    return mockMessages.filter(message => message.status === status);
  };

  const filteredMessages = (messages: typeof mockMessages) => {
    return messages.filter(message =>
      message.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.course.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleReply = () => {
    console.log('Sending reply:', replyText);
    setReplyText('');
    setSelectedMessage(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Messages</h1>
          <p className="text-muted-foreground">Communicate with your students</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Compose Message
        </Button>
      </div>

      {/* Message Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Urgent responses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Replied Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Messages answered</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3h</div>
            <p className="text-xs text-muted-foreground">Average response</p>
          </CardContent>
        </Card>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Messages Tabs */}
      <Tabs defaultValue="unread" className="space-y-4">
        <TabsList>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="all">All Messages</TabsTrigger>
          <TabsTrigger value="replied">Replied</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="unread" className="space-y-4">
          {filteredMessages(filterMessagesByStatus('unread')).map((message) => (
            <MessageCard 
              key={message.id} 
              message={message} 
              getStatusColor={getStatusColor}
              getPriorityColor={getPriorityColor}
              onSelect={setSelectedMessage}
            />
          ))}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          {filteredMessages(mockMessages).map((message) => (
            <MessageCard 
              key={message.id} 
              message={message} 
              getStatusColor={getStatusColor}
              getPriorityColor={getPriorityColor}
              onSelect={setSelectedMessage}
            />
          ))}
        </TabsContent>

        <TabsContent value="replied" className="space-y-4">
          {filteredMessages(filterMessagesByStatus('replied')).map((message) => (
            <MessageCard 
              key={message.id} 
              message={message} 
              getStatusColor={getStatusColor}
              getPriorityColor={getPriorityColor}
              onSelect={setSelectedMessage}
            />
          ))}
        </TabsContent>

        <TabsContent value="archived" className="space-y-4">
          {filteredMessages(filterMessagesByStatus('archived')).map((message) => (
            <MessageCard 
              key={message.id} 
              message={message} 
              getStatusColor={getStatusColor}
              getPriorityColor={getPriorityColor}
              onSelect={setSelectedMessage}
            />
          ))}
        </TabsContent>
      </Tabs>

      {/* Message Detail Dialog */}
      {selectedMessage && (
        <Card className="fixed inset-4 z-50 bg-background border shadow-lg">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{selectedMessage.subject}</CardTitle>
                <CardDescription>
                  From: {selectedMessage.from} ({selectedMessage.fromEmail})
                </CardDescription>
              </div>
              <Button variant="outline" onClick={() => setSelectedMessage(null)}>
                Close
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge className={getStatusColor(selectedMessage.status)}>
                {selectedMessage.status}
              </Badge>
              <Badge className={getPriorityColor(selectedMessage.priority)}>
                {selectedMessage.priority}
              </Badge>
              <Badge variant="outline">{selectedMessage.course}</Badge>
              <span className="text-sm text-muted-foreground">{selectedMessage.timestamp}</span>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <pre className="whitespace-pre-wrap font-sans">{selectedMessage.content}</pre>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Reply:</label>
              <Textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your reply..."
                rows={4}
              />
              <div className="flex gap-2">
                <Button onClick={handleReply}>
                  <Send className="w-4 h-4 mr-2" />
                  Send Reply
                </Button>
                <Button variant="outline">
                  <Star className="w-4 h-4 mr-2" />
                  Star
                </Button>
                <Button variant="outline">
                  <Archive className="w-4 h-4 mr-2" />
                  Archive
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

const MessageCard = ({ message, getStatusColor, getPriorityColor, onSelect }: any) => {
  return (
    <Card className="cursor-pointer hover:bg-muted/50" onClick={() => onSelect(message)}>
      <CardContent className="pt-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <Avatar className="w-10 h-10">
              <AvatarFallback>
                {message.from.split(' ').map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold truncate">{message.from}</h3>
                <Badge className={getStatusColor(message.status)} variant="secondary">
                  {message.status}
                </Badge>
                {message.priority === 'high' && (
                  <Badge className={getPriorityColor(message.priority)} variant="secondary">
                    {message.priority}
                  </Badge>
                )}
              </div>
              
              <h4 className="font-medium text-sm mb-1">{message.subject}</h4>
              <p className="text-sm text-muted-foreground truncate">{message.preview}</p>
              
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span>{message.course}</span>
                <span>{message.timestamp}</span>
                {message.hasAttachment && <span>📎 Attachment</span>}
              </div>
            </div>
          </div>

          <div className="flex gap-1">
            <Button size="sm" variant="outline">
              <Reply className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Messages;