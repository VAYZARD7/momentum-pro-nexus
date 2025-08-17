import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Bell, Book, Shield, Save, Upload } from 'lucide-react';

const Settings = () => {
  const { t } = useLanguage();
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@tradingacademy.com',
    phone: '+1 (555) 123-4567',
    department: 'Finance & Trading',
    bio: 'Experienced trading professional with 15+ years in financial markets...',
    timezone: 'America/New_York',
    language: 'en'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    newSubmissions: true,
    lateAssignments: true,
    studentMessages: true,
    systemUpdates: false,
    weeklyReports: true,
    gradeReminders: true
  });

  const [teachingPreferences, setTeachingPreferences] = useState({
    defaultGradingScale: '100-point',
    lateSubmissionPenalty: '10',
    automaticExtensions: false,
    allowResubmissions: true,
    showGradesToStudents: true,
    enableDiscussions: true,
    requireRubrics: false,
    anonymousGrading: false
  });

  const handleProfileUpdate = () => {
    console.log('Updating profile:', profileData);
    // Here you would typically save to backend
  };

  const handleNotificationUpdate = () => {
    console.log('Updating notifications:', notificationSettings);
    // Here you would typically save to backend
  };

  const handleTeachingUpdate = () => {
    console.log('Updating teaching preferences:', teachingPreferences);
    // Here you would typically save to backend
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account and teaching preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="teaching">Teaching</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Information
              </CardTitle>
              <CardDescription>Update your personal information and bio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-lg">
                    {profileData.firstName[0]}{profileData.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                  <p className="text-sm text-muted-foreground mt-1">
                    JPG, PNG or GIF. Max size 2MB.
                  </p>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={profileData.lastName}
                    onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    value={profileData.department}
                    onChange={(e) => setProfileData({...profileData, department: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={profileData.timezone} onValueChange={(value) => setProfileData({...profileData, timezone: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">Eastern Time</SelectItem>
                      <SelectItem value="America/Chicago">Central Time</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  rows={4}
                  placeholder="Tell students about yourself..."
                />
              </div>

              <Button onClick={handleProfileUpdate}>
                <Save className="w-4 h-4 mr-2" />
                Save Profile
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Choose how you want to receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">General Notifications</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                    </div>
                    <Switch
                      checked={notificationSettings.emailNotifications}
                      onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, emailNotifications: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive push notifications in browser</p>
                    </div>
                    <Switch
                      checked={notificationSettings.pushNotifications}
                      onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, pushNotifications: checked})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Student Activity</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>New Submissions</Label>
                      <p className="text-sm text-muted-foreground">When students submit assignments</p>
                    </div>
                    <Switch
                      checked={notificationSettings.newSubmissions}
                      onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, newSubmissions: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Late Assignments</Label>
                      <p className="text-sm text-muted-foreground">When assignments are submitted late</p>
                    </div>
                    <Switch
                      checked={notificationSettings.lateAssignments}
                      onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, lateAssignments: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Student Messages</Label>
                      <p className="text-sm text-muted-foreground">When students send you messages</p>
                    </div>
                    <Switch
                      checked={notificationSettings.studentMessages}
                      onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, studentMessages: checked})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Reports & Reminders</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Weekly Reports</Label>
                      <p className="text-sm text-muted-foreground">Weekly summary of student activity</p>
                    </div>
                    <Switch
                      checked={notificationSettings.weeklyReports}
                      onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, weeklyReports: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Grading Reminders</Label>
                      <p className="text-sm text-muted-foreground">Reminders to grade pending assignments</p>
                    </div>
                    <Switch
                      checked={notificationSettings.gradeReminders}
                      onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, gradeReminders: checked})}
                    />
                  </div>
                </div>
              </div>

              <Button onClick={handleNotificationUpdate}>
                <Save className="w-4 h-4 mr-2" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Teaching Preferences */}
        <TabsContent value="teaching" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="w-5 h-5" />
                Teaching Preferences
              </CardTitle>
              <CardDescription>Configure your default teaching and grading settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="gradingScale">Default Grading Scale</Label>
                  <Select value={teachingPreferences.defaultGradingScale} onValueChange={(value) => setTeachingPreferences({...teachingPreferences, defaultGradingScale: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100-point">100-Point Scale</SelectItem>
                      <SelectItem value="letter">Letter Grades (A-F)</SelectItem>
                      <SelectItem value="pass-fail">Pass/Fail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="latePenalty">Late Submission Penalty (%)</Label>
                  <Input
                    id="latePenalty"
                    type="number"
                    value={teachingPreferences.lateSubmissionPenalty}
                    onChange={(e) => setTeachingPreferences({...teachingPreferences, lateSubmissionPenalty: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Assignment Settings</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Allow Resubmissions</Label>
                      <p className="text-sm text-muted-foreground">Students can resubmit assignments</p>
                    </div>
                    <Switch
                      checked={teachingPreferences.allowResubmissions}
                      onCheckedChange={(checked) => setTeachingPreferences({...teachingPreferences, allowResubmissions: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Show Grades to Students</Label>
                      <p className="text-sm text-muted-foreground">Students can see their grades immediately</p>
                    </div>
                    <Switch
                      checked={teachingPreferences.showGradesToStudents}
                      onCheckedChange={(checked) => setTeachingPreferences({...teachingPreferences, showGradesToStudents: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Require Rubrics</Label>
                      <p className="text-sm text-muted-foreground">All assignments must have grading rubrics</p>
                    </div>
                    <Switch
                      checked={teachingPreferences.requireRubrics}
                      onCheckedChange={(checked) => setTeachingPreferences({...teachingPreferences, requireRubrics: checked})}
                    />
                  </div>
                </div>
              </div>

              <Button onClick={handleTeachingUpdate}>
                <Save className="w-4 h-4 mr-2" />
                Save Teaching Preferences
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage your account security and privacy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Password</h4>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button variant="outline">Update Password</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Two-Factor Authentication</h4>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">SMS Authentication</p>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Button variant="outline">Enable 2FA</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Login Activity</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-medium">Current Session</p>
                      <p className="text-sm text-muted-foreground">Chrome on Windows • New York, NY</p>
                    </div>
                    <span className="text-sm text-green-600">Active</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <div>
                      <p className="font-medium">Previous Session</p>
                      <p className="text-sm text-muted-foreground">Safari on macOS • 2 days ago</p>
                    </div>
                    <Button variant="outline" size="sm">Revoke</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;