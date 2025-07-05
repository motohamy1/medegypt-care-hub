
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Learn from "./pages/Learn";
import Doctors from "./pages/Doctors";
import Medications from "./pages/Medications";
import Videos from "./pages/Videos";
import LabTests from "./pages/LabTests";
import Connect from "./pages/Connect";
import Emergency from "./pages/Emergency";

// Create a client for React Query
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/medications" element={<Medications />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/lab-tests" element={<LabTests />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/emergency" element={<Emergency />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
