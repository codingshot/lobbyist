
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
          
          <nav className="flex items-center space-x-4">
            <Link to="/chat">
              <Button 
                variant={location.pathname === "/chat" ? "default" : "outline"}
                size="sm" 
                className={location.pathname === "/chat" ? "government-button" : "government-button-outline"}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat
              </Button>
            </Link>
            <Link to="/">
              <Button 
                variant={location.pathname === "/" ? "default" : "outline"}
                size="sm"
                className={location.pathname === "/" ? "government-button" : "government-button-outline"}
              >
                <Compass className="h-4 w-4 mr-2" />
                Explore Agents
              </Button>
            </Link>
            <Link to="/create-agent">
              <Button 
                variant={location.pathname === "/create-agent" ? "default" : "outline"}
                size="sm"
                className={location.pathname === "/create-agent" ? "government-button" : "government-button-outline"}
              >
                <User className="h-4 w-4 mr-2" />
                Create Agent
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default GlobalNavbar;
