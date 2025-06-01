
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import GlobalNavbar from "@/components/GlobalNavbar";
import Index from "./pages/Index";
import CreateAgent from "./pages/CreateAgent";
import ChatWithAgents from "./pages/ChatWithAgents";
import Explore from "./pages/Explore";
import AgentPage from "./pages/AgentPage";
import AgentChat from "./pages/AgentChat";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
            <GlobalNavbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/create-agent" element={<CreateAgent />} />
              <Route path="/chat" element={<ChatWithAgents />} />
              <Route path="/chat/:agentId" element={<AgentChat />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/agent/:agentId" element={<AgentPage />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
