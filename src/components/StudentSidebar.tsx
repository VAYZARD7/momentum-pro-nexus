import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  FileText, 
  Calendar, 
  Award, 
  User, 
  Bell,
  Settings,
  GraduationCap,
  ClipboardList
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { useLanguage } from '@/contexts/LanguageContext';

const navigationItems = [
  { title: 'Dashboard', url: '/student-dashboard', icon: Home, key: 'dashboard' },
  { title: 'My Courses', url: '/student-dashboard/courses', icon: BookOpen, key: 'courses' },
  { title: 'Homework', url: '/student-dashboard/homework', icon: FileText, key: 'homework' },
  { title: 'Grades', url: '/student-dashboard/grades', icon: Award, key: 'grades' },
  { title: 'Schedule', url: '/student-dashboard/schedule', icon: Calendar, key: 'schedule' },
  { title: 'Certificates', url: '/student-dashboard/certificates', icon: Award, key: 'certificates' },
  { title: 'Messages', url: '/student-dashboard/messages', icon: Bell, key: 'messages' },
  { title: 'Applications', url: '/student-dashboard/applications', icon: ClipboardList, key: 'applications' },
];

const settingsItems = [
  { title: 'Profile', url: '/student-dashboard/profile', icon: User, key: 'profile' },
  { title: 'Notifications', url: '/student-dashboard/notifications', icon: Bell, key: 'notifications' },
  { title: 'Settings', url: '/student-dashboard/settings', icon: Settings, key: 'settings' },
];

export function StudentSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const { t } = useLanguage();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const isMainExpanded = navigationItems.some((i) => isActive(i.url));
  const isSettingsExpanded = settingsItems.some((i) => isActive(i.url));

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted/50";

  return (
    <Sidebar
      className={collapsed ? "w-14" : "w-60"}
      collapsible="icon"
    >
      <SidebarContent>
        {!collapsed && (
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-semibold text-lg">Student Portal</span>
            </div>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel>{!collapsed && 'Navigation'}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>{!collapsed && 'Account'}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}