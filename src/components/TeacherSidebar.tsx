import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
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
import {
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  MessageSquare,
  Calendar,
  Award,
  Settings,
  Bell,
  BarChart3,
} from 'lucide-react';

export function TeacherSidebar() {
  const { t } = useLanguage();
  const sidebar = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      title: 'Dashboard',
      url: '/teacher-dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Students',
      url: '/teacher-dashboard/students',
      icon: Users,
    },
    {
      title: 'Courses',
      url: '/teacher-dashboard/courses',
      icon: BookOpen,
    },
    {
      title: 'Assignments',
      url: '/teacher-dashboard/assignments',
      icon: FileText,
    },
    {
      title: 'Grading',
      url: '/teacher-dashboard/grading',
      icon: Award,
    },
    {
      title: 'Schedule',
      url: '/teacher-dashboard/schedule',
      icon: Calendar,
    },
    {
      title: 'Messages',
      url: '/teacher-dashboard/messages',
      icon: MessageSquare,
    },
    {
      title: 'Analytics',
      url: '/teacher-dashboard/analytics',
      icon: BarChart3,
    },
    {
      title: 'Notifications',
      url: '/teacher-dashboard/notifications',
      icon: Bell,
    },
    {
      title: 'Settings',
      url: '/teacher-dashboard/settings',
      icon: Settings,
    },
  ];

  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path + '/');
  const isExpanded = menuItems.some((item) => isActive(item.url));

  const getNavClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted/50';

  return (
    <Sidebar className={sidebar.state === 'collapsed' ? 'w-14' : 'w-60'} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Teacher Portal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === '/teacher-dashboard'}
                      className={getNavClassName}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {sidebar.state !== 'collapsed' && <span>{item.title}</span>}
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