import CustomCursor from "@/components/CustomCursor";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import HomePage from "./pages/HomePage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* ✅ CUSTOM CURSOR MUST BE HERE */}
        <CustomCursor />

        <div className="relative min-h-screen bg-background overflow-x-hidden">
          <Navbar />
          <SocialLinks />
          <HomePage />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
