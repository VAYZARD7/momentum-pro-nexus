import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Applications from './Applications';
import Reports from './Reports';
import Content from './Content';
import Analytics from './Analytics';
import Messages from './Messages';
import Notifications from './Notifications';
import Settings from './Settings';

const CuratorRoutes = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="applications" element={<Applications />} />
      <Route path="reports" element={<Reports />} />
      <Route path="content" element={<Content />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="messages" element={<Messages />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

export default CuratorRoutes;