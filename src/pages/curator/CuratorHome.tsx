import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { CuratorSidebar } from '@/components/CuratorSidebar';
import { useLanguage } from '@/contexts/LanguageContext';
import CuratorRoutes from './CuratorRoutes';

const CuratorHome = () => {
  const { t } = useLanguage();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <CuratorSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-12 flex items-center border-b bg-background px-4">
            <SidebarTrigger className="mr-4" />
            <h1 className="font-semibold">Curator Portal</h1>
          </header>
          
          <main className="flex-1 p-6 bg-muted/10">
            <CuratorRoutes />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CuratorHome;