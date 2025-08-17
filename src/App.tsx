import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Prices from "./pages/Prices";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

import TeacherDashboard from "./pages/TeacherDashboard";
import CuratorDashboard from "./pages/CuratorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserManagement from "./pages/UserManagement";
import CourseManagement from "./pages/CourseManagement";
import PaymentSettings from "./pages/PaymentSettings";
import SecuritySettings from "./pages/SecuritySettings";
import SystemMonitoring from "./pages/SystemMonitoring";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import Reports from "./pages/Reports";
import StudentHome from "./pages/student/StudentHome";
import TeacherHome from "./pages/teacher/TeacherHome";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:courseId" element={<CourseDetail />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/student-dashboard/*" element={<StudentHome />} />
              <Route path="/teacher-dashboard/*" element={<TeacherHome />} />
              <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
              <Route path="/dashboard/curator" element={<CuratorDashboard />} />
              <Route path="/dashboard/admin" element={<AdminDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/course-management" element={<CourseManagement />} />
              <Route path="/payment-settings" element={<PaymentSettings />} />
              <Route path="/security-settings" element={<SecuritySettings />} />
              <Route path="/system-monitoring" element={<SystemMonitoring />} />
              <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/support" element={<Support />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
