import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Filter, Play, FileText, Star, Users } from 'lucide-react';

const Content = () => {
  const { t } = useLanguage();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-500 text-white';
      case 'pending': return 'bg-yellow-500 text-white';
      case 'flagged': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const mockContent = [
    {
      id: 1,
      title: 'Introduction to Risk Management',
      type: 'video',
      course: 'Risk Management Basics',
      instructor: 'Dr. Sarah Johnson',
      duration: '25:30',
      status: 'approved',
      rating: 4.8,
      reviews: 142,
      lastReviewed: '2024-01-10'
    },
    {
      id: 2,
      title: 'Chart Pattern Recognition',
      type: 'lesson',
      course: 'Technical Analysis',
      instructor: 'Mike Chen',
      duration: '15 min read',
      status: 'pending',
      rating: 0,
      reviews: 0,
      lastReviewed: 'Never'
    },
    {
      id: 3,
      title: 'Options Trading Strategies',
      type: 'video',
      course: 'Advanced Trading',
      instructor: 'Lisa Rodriguez',
      duration: '42:15',
      status: 'flagged',
      rating: 4.2,
      reviews: 89,
      lastReviewed: '2024-01-08'
    },
    {
      id: 4,
      title: 'Portfolio Diversification Methods',
      type: 'lesson',
      course: 'Portfolio Management',
      instructor: 'Robert Kim',
      duration: '20 min read',
      status: 'approved',
      rating: 4.9,
      reviews: 203,
      lastReviewed: '2024-01-12'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Content Review</h1>
        <p className="text-muted-foreground">Monitor and manage course content quality</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search content..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4">
        {mockContent.map((content) => (
          <Card key={content.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    {content.type === 'video' ? (
                      <Play className="h-5 w-5" />
                    ) : (
                      <FileText className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{content.title}</CardTitle>
                    <CardDescription>
                      {content.course} • By {content.instructor}
                    </CardDescription>
                  </div>
                </div>
                <Badge className={getStatusColor(content.status)}>
                  {content.status.charAt(0).toUpperCase() + content.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Duration</p>
                  <p className="text-sm">{content.duration}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Rating</p>
                  <div className="flex items-center gap-1">
                    {content.rating > 0 ? (
                      <>
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm">{content.rating}</span>
                      </>
                    ) : (
                      <span className="text-sm text-muted-foreground">No ratings</span>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Reviews</p>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{content.reviews}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Last Reviewed</p>
                  <p className="text-sm">{content.lastReviewed}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Preview Content
                </Button>
                {content.status === 'pending' && (
                  <>
                    <Button size="sm">Approve</Button>
                    <Button variant="destructive" size="sm">Flag Content</Button>
                  </>
                )}
                {content.status === 'flagged' && (
                  <>
                    <Button size="sm">Review Issues</Button>
                    <Button variant="outline" size="sm">Request Changes</Button>
                  </>
                )}
                <Button variant="ghost" size="sm">
                  View Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Content;