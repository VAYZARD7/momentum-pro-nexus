import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Video, MapPin, Bell, ChevronLeft, ChevronRight } from 'lucide-react';

interface ScheduleEvent {
  id: string;
  title: string;
  course: string;
  type: 'live_class' | 'assignment_due' | 'exam' | 'office_hours' | 'webinar';
  startTime: string;
  endTime: string;
  date: string;
  location?: string;
  meetingLink?: string;
  instructor: string;
  description: string;
  isOnline: boolean;
}

const Schedule = () => {
  const { t } = useLanguage();
  const [currentWeek, setCurrentWeek] = useState(0);

  const scheduleEvents: ScheduleEvent[] = [
    {
      id: '1',
      title: 'Risk Management Fundamentals',
      course: 'Risk Management',
      type: 'live_class',
      startTime: '09:00',
      endTime: '10:30',
      date: '2024-01-22',
      meetingLink: 'https://zoom.us/meeting',
      instructor: 'Dr. Sarah Johnson',
      description: 'Introduction to portfolio risk assessment and management strategies',
      isOnline: true
    },
    {
      id: '2',
      title: 'Technical Analysis Assignment',
      course: 'Technical Analysis',
      type: 'assignment_due',
      startTime: '23:59',
      endTime: '23:59',
      date: '2024-01-25',
      instructor: 'Prof. Michael Chen',
      description: 'Submit your chart analysis report on recent market trends',
      isOnline: false
    },
    {
      id: '3',
      title: 'Trading Psychology Workshop',
      course: 'Trading Psychology',
      type: 'webinar',
      startTime: '14:00',
      endTime: '15:30',
      date: '2024-01-26',
      meetingLink: 'https://teams.microsoft.com/meeting',
      instructor: 'Dr. Emily Rodriguez',
      description: 'Interactive workshop on managing emotions during trading',
      isOnline: true
    },
    {
      id: '4',
      title: 'Office Hours - Q&A Session',
      course: 'Portfolio Management',
      type: 'office_hours',
      startTime: '16:00',
      endTime: '17:00',
      date: '2024-01-24',
      location: 'Room 204',
      instructor: 'Prof. David Kim',
      description: 'Open Q&A session for portfolio management questions',
      isOnline: false
    },
    {
      id: '5',
      title: 'Mid-term Examination',
      course: 'Basic Trading Fundamentals',
      type: 'exam',
      startTime: '10:00',
      endTime: '12:00',
      date: '2024-01-30',
      location: 'Exam Hall A',
      instructor: 'Multiple Instructors',
      description: 'Comprehensive exam covering modules 1-5',
      isOnline: false
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'live_class': return 'bg-blue-500 text-white';
      case 'assignment_due': return 'bg-orange-500 text-white';
      case 'exam': return 'bg-red-500 text-white';
      case 'office_hours': return 'bg-green-500 text-white';
      case 'webinar': return 'bg-purple-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'live_class': return <Video className="h-4 w-4" />;
      case 'assignment_due': return <Clock className="h-4 w-4" />;
      case 'exam': return <Calendar className="h-4 w-4" />;
      case 'office_hours': return <MapPin className="h-4 w-4" />;
      case 'webinar': return <Video className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const formatEventType = (type: string) => {
    return type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  // Group events by date
  const groupedEvents = scheduleEvents.reduce((groups, event) => {
    const date = event.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(event);
    return groups;
  }, {} as Record<string, ScheduleEvent[]>);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Schedule & Calendar</h1>
          <p className="text-muted-foreground">
            Manage your classes, assignments, and important dates
          </p>
        </div>
        <Button>
          <Bell className="h-4 w-4 mr-2" />
          Set Reminders
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">3</div>
            <div className="text-sm text-muted-foreground">This Week</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">2</div>
            <div className="text-sm text-muted-foreground">Assignments Due</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">1</div>
            <div className="text-sm text-muted-foreground">Upcoming Exams</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">5</div>
            <div className="text-sm text-muted-foreground">Live Classes</div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Navigation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Week View
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => setCurrentWeek(currentWeek - 1)}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium px-3">January 22-28, 2024</span>
              <Button variant="outline" size="icon" onClick={() => setCurrentWeek(currentWeek + 1)}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {Object.entries(groupedEvents)
              .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime())
              .map(([date, events]) => (
                <div key={date} className="space-y-3">
                  <h3 className="font-semibold text-lg border-b pb-2">
                    {new Date(date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </h3>
                  <div className="space-y-3">
                    {events.map((event) => (
                      <Card key={event.id} className="border-l-4 border-l-primary">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge className={getEventTypeColor(event.type)}>
                                  {getEventTypeIcon(event.type)}
                                  <span className="ml-1">{formatEventType(event.type)}</span>
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  {event.startTime} - {event.endTime}
                                </span>
                              </div>
                              <h4 className="font-semibold">{event.title}</h4>
                              <p className="text-sm text-muted-foreground mb-1">
                                {event.course} • {event.instructor}
                              </p>
                              <p className="text-sm">{event.description}</p>
                              {event.location && (
                                <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                                  <MapPin className="h-3 w-3" />
                                  {event.location}
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col gap-2">
                              {event.meetingLink && (
                                <Button size="sm">
                                  <Video className="h-3 w-3 mr-1" />
                                  Join
                                </Button>
                              )}
                              <Button variant="outline" size="sm">
                                <Bell className="h-3 w-3 mr-1" />
                                Remind
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Schedule;