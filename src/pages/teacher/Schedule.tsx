import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, Plus, Video, Bell } from 'lucide-react';

const Schedule = () => {
  const { t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const mockEvents = [
    {
      id: 1,
      title: 'Advanced Trading Strategies - Lecture 5',
      type: 'lecture',
      course: 'Advanced Trading Strategies',
      date: '2024-01-29',
      time: '09:00 - 10:30',
      location: 'Online - Zoom Room 1',
      students: 24,
      status: 'scheduled',
      description: 'Options strategies and risk management'
    },
    {
      id: 2,
      title: 'Risk Management - Q&A Session',
      type: 'workshop',
      course: 'Risk Management Fundamentals',
      date: '2024-01-29',
      time: '14:00 - 15:00',
      location: 'Online - Zoom Room 2',
      students: 18,
      status: 'scheduled',
      description: 'Interactive session for student questions'
    },
    {
      id: 3,
      title: 'Technical Analysis - Lab Session',
      type: 'lab',
      course: 'Technical Analysis Mastery',
      date: '2024-01-30',
      time: '10:00 - 12:00',
      location: 'Online - Virtual Lab',
      students: 32,
      status: 'scheduled',
      description: 'Hands-on chart analysis practice'
    },
    {
      id: 4,
      title: 'Portfolio Management - Group Project Review',
      type: 'review',
      course: 'Portfolio Management',
      date: '2024-01-30',
      time: '15:30 - 17:00',
      location: 'Online - Zoom Room 1',
      students: 15,
      status: 'scheduled',
      description: 'Student presentations and feedback'
    },
    {
      id: 5,
      title: 'Trading Psychology - Guest Speaker',
      type: 'special',
      course: 'Trading Psychology',
      date: '2024-01-31',
      time: '11:00 - 12:30',
      location: 'Online - Main Auditorium',
      students: 45,
      status: 'confirmed',
      description: 'Professional trader shares insights'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lecture': return 'bg-blue-100 text-blue-800';
      case 'workshop': return 'bg-green-100 text-green-800';
      case 'lab': return 'bg-purple-100 text-purple-800';
      case 'review': return 'bg-orange-100 text-orange-800';
      case 'special': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-500 text-white';
      case 'confirmed': return 'bg-green-500 text-white';
      case 'cancelled': return 'bg-red-500 text-white';
      case 'completed': return 'bg-gray-500 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const upcomingEvents = mockEvents.filter(event => {
    const eventDate = new Date(event.date);
    const today = new Date();
    return eventDate >= today;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const todaysEvents = mockEvents.filter(event => {
    const eventDate = new Date(event.date);
    const today = new Date();
    return eventDate.toDateString() === today.toDateString();
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Schedule</h1>
          <p className="text-muted-foreground">Manage your classes and meetings</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Schedule New Event
        </Button>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Today's Schedule
          </CardTitle>
          <CardDescription>
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {todaysEvents.length > 0 ? (
            <div className="space-y-3">
              {todaysEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{event.title}</h4>
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.course}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {event.students} students
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <Video className="w-4 h-4 mr-1" />
                      Join
                    </Button>
                    <Button size="sm" variant="outline">
                      <Bell className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">No events scheduled for today</p>
          )}
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Your scheduled classes and meetings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{event.title}</h3>
                        <Badge className={getTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                        <Badge className={getStatusColor(event.status)}>
                          {event.status}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">{event.course}</p>
                      <p className="text-sm mb-3">{event.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="flex items-center gap-1 text-muted-foreground mb-1">
                            <Calendar className="w-4 h-4" />
                            <span>Date</span>
                          </div>
                          <p className="font-medium">{event.date}</p>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-1 text-muted-foreground mb-1">
                            <Clock className="w-4 h-4" />
                            <span>Time</span>
                          </div>
                          <p className="font-medium">{event.time}</p>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-1 text-muted-foreground mb-1">
                            <MapPin className="w-4 h-4" />
                            <span>Location</span>
                          </div>
                          <p className="font-medium">{event.location}</p>
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-1 text-muted-foreground mb-1">
                            <Users className="w-4 h-4" />
                            <span>Students</span>
                          </div>
                          <p className="font-medium">{event.students}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 ml-4">
                      <Button size="sm">
                        <Video className="w-4 h-4 mr-1" />
                        Join
                      </Button>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <Bell className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Schedule;