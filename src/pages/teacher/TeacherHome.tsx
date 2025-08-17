import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { TeacherSidebar } from '@/components/TeacherSidebar';
import { useLanguage } from '@/contexts/LanguageContext';
import TeacherRoutes from './TeacherRoutes';

const TeacherHome = () => {
  const { t } = useLanguage();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <TeacherSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-12 flex items-center border-b bg-background px-4">
            <SidebarTrigger className="mr-4" />
            <h1 className="font-semibold">Teacher Portal</h1>
          </header>
          
          <main className="flex-1 p-6 bg-muted/10">
            <TeacherRoutes />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default TeacherHome;