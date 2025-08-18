import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Users, FileCheck, AlertTriangle, Clock } from 'lucide-react';

const Analytics = () => {
  const { t } = useLanguage();

  const analyticsData = {
    applications: {
      total: 156,
      approved: 134,
      rejected: 12,
      pending: 10,
      approvalRate: 91.8,
      avgProcessingTime: '2.3 days'
    },
    reports: {
      total: 23,
      resolved: 18,
      pending: 5,
      avgResolutionTime: '1.8 days',
      byCategory: {
        'Content Quality': 12,
        'Technical Issues': 6,
        'Copyright': 3,
        'Other': 2
      }
    },
    contentReview: {
      totalReviewed: 89,
      approved: 82,
      flagged: 4,
      pending: 3,
      qualityScore: 94.2
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Curator Analytics</h1>
        <p className="text-muted-foreground">Performance metrics and insights</p>
      </div>

      {/* Applications Analytics */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Application Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              <FileCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.applications.total}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approval Rate</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.applications.approvalRate}%</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +2.1% improvement
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Processing Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.applications.avgProcessingTime}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <TrendingDown className="h-3 w-3" />
                0.5 days faster
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.applications.pending}</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Application Status Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Application Status Breakdown</CardTitle>
          <CardDescription>Current status distribution of all applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Approved</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-secondary rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${(analyticsData.applications.approved / analyticsData.applications.total) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{analyticsData.applications.approved}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Rejected</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-secondary rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full" 
                    style={{ width: `${(analyticsData.applications.rejected / analyticsData.applications.total) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{analyticsData.applications.rejected}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Pending</span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-secondary rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full" 
                    style={{ width: `${(analyticsData.applications.pending / analyticsData.applications.total) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{analyticsData.applications.pending}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quality Reports Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quality Reports</CardTitle>
            <CardDescription>Report resolution metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">Total Reports</span>
                <span className="font-medium">{analyticsData.reports.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Resolved</span>
                <span className="font-medium text-green-600">{analyticsData.reports.resolved}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Pending</span>
                <span className="font-medium text-yellow-600">{analyticsData.reports.pending}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Avg Resolution Time</span>
                <span className="font-medium">{analyticsData.reports.avgResolutionTime}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Report Categories</CardTitle>
            <CardDescription>Issues by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(analyticsData.reports.byCategory).map(([category, count]) => (
                <div key={category} className="flex justify-between items-center">
                  <span className="text-sm">{category}</span>
                  <Badge variant="secondary">{count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Quality Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Content Quality Metrics</CardTitle>
          <CardDescription>Overall content review performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{analyticsData.contentReview.approved}</div>
              <p className="text-sm text-muted-foreground">Approved</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{analyticsData.contentReview.flagged}</div>
              <p className="text-sm text-muted-foreground">Flagged</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{analyticsData.contentReview.pending}</div>
              <p className="text-sm text-muted-foreground">Pending</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{analyticsData.contentReview.qualityScore}%</div>
              <p className="text-sm text-muted-foreground">Quality Score</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;