import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StudentDashboard from './Dashboard';
import CourseProgress from './CourseProgress';
import Homework from './Homework';
import Applications from './Applications';

const StudentRoutes = () => {
  return (
    <Routes>
      <Route index element={<StudentDashboard />} />
      <Route path="courses" element={<CourseProgress />} />
      <Route path="homework" element={<Homework />} />
      <Route path="schedule" element={<div>Schedule coming soon...</div>} />
      <Route path="certificates" element={<div>Certificates coming soon...</div>} />
      <Route path="applications" element={<Applications />} />
      <Route path="profile" element={<div>Profile settings coming soon...</div>} />
      <Route path="notifications" element={<div>Notifications coming soon...</div>} />
      <Route path="settings" element={<div>Settings coming soon...</div>} />
      <Route path="*" element={<Navigate to="/student-dashboard" replace />} />
    </Routes>
  );
};

export default StudentRoutes;