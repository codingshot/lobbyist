
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, User, Compass } from "lucide-react";

const GlobalNavbar = () => {
  const location = useLocation();

  return (
    <div className="bg-white border-b border-blue-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🏛️</span>
            <span className="text-xl font-bold text-blue-900">lobbyist.fun</span>
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link 
              to="/explore"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname === "/explore" ? "text-blue-600" : "text-slate-700"
              }`}
            >
              <div className="flex items-center space-x-1">
                <Compass className="h-4 w-4" />
                <span>Explore Agents</span>
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
                <span>Create Agent</span>
              </div>
            </Link>

            <Link to="/chat">
              <Button 
                className="government-button"
                size="sm"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
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
