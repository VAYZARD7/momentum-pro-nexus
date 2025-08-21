import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StudentDashboard from './Dashboard';
import CourseProgress from './CourseProgress';
import Homework from './Homework';
import Assignments from './Assignments';
import Applications from './Applications';
import Schedule from './Schedule';
import Certificates from './Certificates';
import Profile from './Profile';
import Notifications from './Notifications';
import Messages from './Messages';
import Grades from './Grades';

const StudentRoutes = () => {
  return (
    <Routes>
      <Route index element={<StudentDashboard />} />
      <Route path="courses" element={<CourseProgress />} />
      <Route path="homework" element={<Homework />} />
      <Route path="assignments" element={<Assignments />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="certificates" element={<Certificates />} />
      <Route path="applications" element={<Applications />} />
      <Route path="profile" element={<Profile />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="messages" element={<Messages />} />
      <Route path="grades" element={<Grades />} />
      <Route path="settings" element={<div>Settings coming soon...</div>} />
      <Route path="*" element={<Navigate to="/student-dashboard" replace />} />
    </Routes>
  );
};

export default StudentRoutes;