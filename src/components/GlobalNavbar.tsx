
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
            <span className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-blue-900`}>
              lobbyist.fun
            </span>
          </Link>
          
          <nav className="flex items-center space-x-2 md:space-x-6">
            <Link 
              to="/explore"
              className={`text-sm font-medium transition-colors hover:text-blue-600 px-3 py-2 rounded-md ${
                location.pathname === "/explore" ? "text-blue-600 bg-blue-50" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center space-x-1">
                <Compass className="h-4 w-4" />
                <span className="hidden sm:inline">Explore Agents</span>
                <span className="sm:hidden">Explore</span>
              </div>
            </Link>
            
            <Link 
              to="/create-agent"
              className={`text-sm font-medium transition-colors hover:text-blue-600 px-3 py-2 rounded-md ${
                location.pathname === "/create-agent" ? "text-blue-600 bg-blue-50" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Create Agent</span>
                <span className="sm:hidden">Create</span>
              </div>
            </Link>

            <Link to="/chat">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium"
                size={isMobile ? "sm" : "default"}
              >
                <MessageCircle className="h-4 w-4 mr-1 md:mr-2" />
                <span className="text-white">Chat</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default GlobalNavbar;
