import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';
import SystemSettings from './SystemSettings';
import Analytics from './Analytics';
import Reports from './Reports';
import Security from './Security';
import Monitoring from './Monitoring';
import Settings from './Settings';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="/system" element={<SystemSettings />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/security" element={<Security />} />
      <Route path="/monitoring" element={<Monitoring />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AdminRoutes;