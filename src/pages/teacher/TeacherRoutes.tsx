import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Students from './Students';
import Courses from './Courses';
import Assignments from './Assignments';
import Grading from './Grading';
import Schedule from './Schedule';
import Messages from './Messages';
import Analytics from './Analytics';
import Notifications from './Notifications';
import Settings from './Settings';

const TeacherRoutes = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="students" element={<Students />} />
      <Route path="courses" element={<Courses />} />
      <Route path="assignments" element={<Assignments />} />
      <Route path="grading" element={<Grading />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="messages" element={<Messages />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

export default TeacherRoutes;