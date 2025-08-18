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
  useSidebar
} from '@/components/ui/sidebar';
import { 
  LayoutDashboard,
  FileCheck,
  AlertTriangle,
  BarChart3,
  Settings,
  Bell,
  MessageSquare,
  Users
} from 'lucide-react';

const curatorMenuItems = [
  {
    title: 'Dashboard',
    url: '/curator-dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Applications',
    url: '/curator-dashboard/applications',
    icon: FileCheck
  },
  {
    title: 'Quality Reports',
    url: '/curator-dashboard/reports',
    icon: AlertTriangle
  },
  {
    title: 'Content Review',
    url: '/curator-dashboard/content',
    icon: Users
  },
  {
    title: 'Analytics',
    url: '/curator-dashboard/analytics',
    icon: BarChart3
  },
  {
    title: 'Messages',
    url: '/curator-dashboard/messages',
    icon: MessageSquare
  },
  {
    title: 'Notifications',
    url: '/curator-dashboard/notifications',
    icon: Bell
  },
  {
    title: 'Settings',
    url: '/curator-dashboard/settings',
    icon: Settings
  }
];

export function CuratorSidebar() {
  const sidebar = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'bg-muted text-primary font-medium' : 'hover:bg-muted/50';

  return (
    <Sidebar className={sidebar.state === 'collapsed' ? 'w-14' : 'w-60'} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Curator Portal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {curatorMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === '/curator-dashboard'}
                      className={getNavCls}
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