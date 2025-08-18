import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
  Home,
  Users,
  Settings,
  BarChart3,
  FileText,
  Shield,
  Monitor,
  Cog,
  UserCog,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const navigationItems = [
  { title: 'Dashboard', url: '/admin-dashboard/dashboard', icon: Home },
  { title: 'User Management', url: '/admin-dashboard/users', icon: Users },
  { title: 'System Settings', url: '/admin-dashboard/system', icon: Settings },
  { title: 'Analytics', url: '/admin-dashboard/analytics', icon: BarChart3 },
  { title: 'Reports', url: '/admin-dashboard/reports', icon: FileText },
  { title: 'Security', url: '/admin-dashboard/security', icon: Shield },
  { title: 'Monitoring', url: '/admin-dashboard/monitoring', icon: Monitor },
];

const settingsItems = [
  { title: 'Admin Settings', url: '/admin-dashboard/settings', icon: UserCog },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
      : "hover:bg-muted/50";

  return (
    <Sidebar className={state === "collapsed" ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Super Admin</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
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