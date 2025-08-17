import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Send, Search, Plus, Paperclip, MoreVertical } from 'lucide-react';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  senderRole: 'student' | 'instructor' | 'admin';
  content: string;
  timestamp: string;
  attachments?: string[];
}

interface Conversation {
  id: string;
  participants: {
    id: string;
    name: string;
    avatar: string;
    role: 'student' | 'instructor' | 'admin';
  }[];
  subject: string;
  lastMessage: Message;
  unreadCount: number;
  messages: Message[];
}

const Messages = () => {
  const { t } = useLanguage();
  const [selectedConversation, setSelectedConversation] = useState<string | null>('1');
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const conversations: Conversation[] = [
    {
      id: '1',
      participants: [
        {
          id: 'instructor1',
          name: 'Dr. Sarah Johnson',
          avatar: '/placeholder.svg',
          role: 'instructor'
        }
      ],
      subject: 'Risk Management Assignment Questions',
      unreadCount: 2,
      lastMessage: {
        id: 'm1',
        senderId: 'instructor1',
        senderName: 'Dr. Sarah Johnson',
        senderAvatar: '/placeholder.svg',
        senderRole: 'instructor',
        content: 'The assignment submission deadline has been extended to January 28th.',
        timestamp: '2024-01-20T14:30:00Z'
      },
      messages: [
        {
          id: 'm1',
          senderId: 'student1',
          senderName: 'John Doe',
          senderAvatar: '/placeholder.svg',
          senderRole: 'student',
          content: 'Hello Dr. Johnson, I have a question about the risk management assignment. Could you clarify the requirements for the portfolio analysis section?',
          timestamp: '2024-01-20T10:00:00Z'
        },
        {
          id: 'm2',
          senderId: 'instructor1',
          senderName: 'Dr. Sarah Johnson',
          senderAvatar: '/placeholder.svg',
          senderRole: 'instructor',
          content: 'Hi John! For the portfolio analysis section, you need to analyze at least 5 different assets and calculate their individual risk metrics including standard deviation, beta, and VaR.',
          timestamp: '2024-01-20T11:15:00Z'
        },
        {
          id: 'm3',
          senderId: 'student1',
          senderName: 'John Doe',
          senderAvatar: '/placeholder.svg',
          senderRole: 'student',
          content: 'Thank you for the clarification! Should I use historical data for the past year or a different time frame?',
          timestamp: '2024-01-20T12:00:00Z'
        },
        {
          id: 'm4',
          senderId: 'instructor1',
          senderName: 'Dr. Sarah Johnson',
          senderAvatar: '/placeholder.svg',
          senderRole: 'instructor',
          content: 'Use 2 years of historical data for more accurate calculations. Also, the assignment submission deadline has been extended to January 28th.',
          timestamp: '2024-01-20T14:30:00Z'
        }
      ]
    },
    {
      id: '2',
      participants: [
        {
          id: 'instructor2',
          name: 'Prof. Michael Chen',
          avatar: '/placeholder.svg',
          role: 'instructor'
        }
      ],
      subject: 'Technical Analysis Study Group',
      unreadCount: 0,
      lastMessage: {
        id: 'm5',
        senderId: 'student1',
        senderName: 'John Doe',
        senderAvatar: '/placeholder.svg',
        senderRole: 'student',
        content: 'Thank you for organizing the study group session!',
        timestamp: '2024-01-19T16:45:00Z'
      },
      messages: [
        {
          id: 'm5',
          senderId: 'instructor2',
          senderName: 'Prof. Michael Chen',
          senderAvatar: '/placeholder.svg',
          senderRole: 'instructor',
          content: 'Hi everyone! I\'m organizing a study group session for technical analysis this Friday at 3 PM. Who would like to join?',
          timestamp: '2024-01-19T09:00:00Z'
        },
        {
          id: 'm6',
          senderId: 'student1',
          senderName: 'John Doe',
          senderAvatar: '/placeholder.svg',
          senderRole: 'student',
          content: 'I would love to join! Will we cover candlestick patterns?',
          timestamp: '2024-01-19T10:30:00Z'
        },
        {
          id: 'm7',
          senderId: 'instructor2',
          senderName: 'Prof. Michael Chen',
          senderAvatar: '/placeholder.svg',
          senderRole: 'instructor',
          content: 'Yes, we\'ll cover candlestick patterns and also discuss support and resistance levels. Meeting link will be shared closer to the session.',
          timestamp: '2024-01-19T11:00:00Z'
        },
        {
          id: 'm8',
          senderId: 'student1',
          senderName: 'John Doe',
          senderAvatar: '/placeholder.svg',
          senderRole: 'student',
          content: 'Thank you for organizing the study group session!',
          timestamp: '2024-01-19T16:45:00Z'
        }
      ]
    },
    {
      id: '3',
      participants: [
        {
          id: 'admin1',
          name: 'Academic Support',
          avatar: '/placeholder.svg',
          role: 'admin'
        }
      ],
      subject: 'Course Registration Confirmation',
      unreadCount: 1,
      lastMessage: {
        id: 'm9',
        senderId: 'admin1',
        senderName: 'Academic Support',
        senderAvatar: '/placeholder.svg',
        senderRole: 'admin',
        content: 'Your registration for Advanced Trading Strategies has been confirmed.',
        timestamp: '2024-01-18T09:30:00Z'
      },
      messages: [
        {
          id: 'm9',
          senderId: 'admin1',
          senderName: 'Academic Support',
          senderAvatar: '/placeholder.svg',
          senderRole: 'admin',
          content: 'Hello John, your registration for Advanced Trading Strategies has been confirmed. The course will start on February 1st, 2024.',
          timestamp: '2024-01-18T09:30:00Z'
        }
      ]
    }
  ];

  const currentConversation = conversations.find(conv => conv.id === selectedConversation);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'instructor': return 'bg-blue-500 text-white';
      case 'admin': return 'bg-purple-500 text-white';
      case 'student': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffInDays === 1) {
      return 'Yesterday';
    } else if (diffInDays < 7) {
      return date.toLocaleDateString([], { weekday: 'short' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  const sendMessage = () => {
    if (newMessage.trim() && currentConversation) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.participants.some(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground">
            Communicate with instructors and academic support
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Message
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[700px]">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Conversations
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-4 cursor-pointer border-b hover:bg-muted/50 ${
                    selectedConversation === conversation.id ? 'bg-muted border-l-4 border-l-primary' : ''
                  }`}
                  onClick={() => setSelectedConversation(conversation.id)}
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conversation.participants[0]?.avatar} />
                      <AvatarFallback>
                        {conversation.participants[0]?.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-sm truncate">
                          {conversation.participants[0]?.name}
                        </p>
                        {conversation.unreadCount > 0 && (
                          <Badge className="bg-primary text-primary-foreground text-xs">
                            {conversation.unreadCount}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm font-medium text-muted-foreground truncate mb-1">
                        {conversation.subject}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {conversation.lastMessage.content}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <Badge className={getRoleColor(conversation.participants[0]?.role)}>
                          {conversation.participants[0]?.role}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {formatTimestamp(conversation.lastMessage.timestamp)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Message Thread */}
        <Card className="lg:col-span-2">
          {currentConversation ? (
            <>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={currentConversation.participants[0]?.avatar} />
                      <AvatarFallback>
                        {currentConversation.participants[0]?.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{currentConversation.participants[0]?.name}</CardTitle>
                      <CardDescription>{currentConversation.subject}</CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col h-[500px]">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 p-4">
                  {currentConversation.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${
                        message.senderRole === 'student' ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={message.senderAvatar} />
                        <AvatarFallback>
                          {message.senderName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`max-w-[70%] ${message.senderRole === 'student' ? 'text-right' : ''}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium">{message.senderName}</span>
                          <Badge className={getRoleColor(message.senderRole)}>
                            {message.senderRole}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {formatTimestamp(message.timestamp)}
                          </span>
                        </div>
                        <div
                          className={`p-3 rounded-lg ${
                            message.senderRole === 'student'
                              ? 'bg-primary text-primary-foreground ml-auto'
                              : 'bg-muted'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="border-t pt-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <div className="flex-1 flex gap-2">
                      <Textarea
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="min-h-[40px] max-h-[120px]"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            sendMessage();
                          }
                        }}
                      />
                      <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Select a conversation to start messaging</p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Messages;