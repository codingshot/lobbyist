
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, User, Compass } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const GlobalNavbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    <div className="bg-white border-b border-blue-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl">🏛️</span>
            <span className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-blue-900`}>lobbyist.fun</span>
          </Link>
          
          <nav className="flex items-center space-x-4 md:space-x-8">
            <Link 
              to="/explore"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname === "/explore" ? "text-blue-600" : "text-slate-700"
              }`}
            >
              <div className="flex items-center space-x-1">
                <Compass className="h-4 w-4" />
                {!isMobile && <span>Explore Agents</span>}
                {isMobile && <span>Explore</span>}
              </div>
            </Link>
            
            <Link 
              to="/create-agent"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname === "/create-agent" ? "text-blue-600" : "text-slate-700"
              }`}
            >
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                {!isMobile && <span>Create Agent</span>}
                {isMobile && <span>Create</span>}
              </div>
            </Link>

            <Link to="/chat">
              <Button 
                className="government-button"
                size={isMobile ? "sm" : "default"}
              >
                <MessageCircle className="h-4 w-4 mr-1 md:mr-2" />
                Chat
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default GlobalNavbar;
