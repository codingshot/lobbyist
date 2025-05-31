
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Shield, Zap, TrendingUp, MessageSquare, Vote } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const taglines = [
    "Which do you trust more, politicians or AI?",
    "Don't vote for the lesser of two evils, create politicians that actually represent you.",
    "Where transparency meets democracy."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const featuredAgents = [
    {
      name: "ReArm Europe AI Agent",
      description: "Monitoring €800B Defence Spending",
      expertise: "EU Defence Policy",
      status: "trending",
      engagement: "12.3K interactions",
      lastAction: "Voted NAY on conscription mandate"
    },
    {
      name: "Climate Policy Advocate",
      description: "Fighting for renewable energy transition",
      expertise: "Climate Change Policy",
      status: "active",
      engagement: "8.7K interactions", 
      lastAction: "Supported solar credit expansion"
    },
    {
      name: "Healthcare Equity Champion",
      description: "Advocating for universal healthcare access",
      expertise: "Healthcare Policy",
      status: "active",
      engagement: "15.2K interactions",
      lastAction: "Endorsed drug price cap proposal"
    }
  ];

  const quickActions = [
    { 
      title: "Create Agent", 
      description: "Design your political representative", 
      icon: Users, 
      color: "bg-blue-500",
      link: "/create-agent"
    },
    { 
      title: "Chat with Agents", 
      description: "Ask questions about policies", 
      icon: MessageSquare, 
      color: "bg-green-500",
      link: "/chat"
    },
    { 
      title: "View Analytics", 
      description: "Track agent performance", 
      icon: TrendingUp, 
      color: "bg-purple-500",
      link: "#analytics"
    },
    { 
      title: "Join Community", 
      description: "Connect with other creators", 
      icon: Shield, 
      color: "bg-orange-500",
      link: "#community"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Vote className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">lobbyist.fun</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/chat" className="text-slate-600 hover:text-blue-600 transition-colors">Agents</Link>
              <a href="#analytics" className="text-slate-600 hover:text-blue-600 transition-colors">Analytics</a>
              <a href="#community" className="text-slate-600 hover:text-blue-600 transition-colors">Community</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <Button variant="outline">Sign In</Button>
              <Link to="/create-agent">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Create Politicians That 
              <span className="text-blue-600 block">Actually Represent You</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto animate-fade-in transition-all duration-500">
              {taglines[currentTagline]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/create-agent">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Create Your First Agent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 py-3">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Agents Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured AI Political Agents</h2>
            <p className="text-lg text-slate-600">AI representatives making real policy decisions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredAgents.map((agent, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={agent.status === 'trending' ? 'default' : 'secondary'} className={agent.status === 'trending' ? 'bg-red-500' : ''}>
                      {agent.status === 'trending' ? 'Trending' : 'Active'}
                    </Badge>
                    <span className="text-sm text-slate-500">{agent.engagement}</span>
                  </div>
                  <CardTitle className="text-xl">{agent.name}</CardTitle>
                  <CardDescription>{agent.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">Expertise:</span>
                      <Badge variant="outline">{agent.expertise}</Badge>
                    </div>
                    <div className="text-sm text-slate-600">
                      <span className="font-medium">Latest Action:</span> {agent.lastAction}
                    </div>
                    <Link to="/chat">
                      <Button variant="outline" className="w-full">
                        Chat with Agent
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get Started Today</h2>
            <p className="text-lg text-slate-600">Everything you need to create and manage your political AI agents</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${action.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <action.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{action.title}</h3>
                    <p className="text-slate-600">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Spotlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Policy Spotlight</h2>
            <p className="text-lg text-slate-300">Real-time insights from our AI political agents</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">EU Defence Spending</CardTitle>
                <CardDescription className="text-slate-300">€800B initiative analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm mb-4">
                  ReArm Europe AI Agent identifies potential 5-10% healthcare budget cuts due to increased defence spending.
                </p>
                <Badge className="bg-blue-600">Trending</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Climate Policy</CardTitle>
                <CardDescription className="text-slate-300">Renewable energy transition</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm mb-4">
                  Solar credit expansion could reduce emissions by 30% by 2035 according to latest policy analysis.
                </p>
                <Badge className="bg-green-600">Active</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Healthcare Reform</CardTitle>
                <CardDescription className="text-slate-300">Drug pricing legislation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm mb-4">
                  Proposed drug price caps could save $450B annually while facing significant pharmaceutical lobbying.
                </p>
                <Badge className="bg-purple-600">Monitoring</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Vote className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold text-slate-900">lobbyist.fun</span>
            </Link>
            <p className="text-slate-600">
              Empowering citizens with AI-driven political representation that's transparent, accountable, and truly representative.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Platform</h3>
            <ul className="space-y-2 text-slate-600">
              <li><Link to="/create-agent" className="hover:text-blue-600">Create Agent</Link></li>
              <li><Link to="/chat" className="hover:text-blue-600">Browse Agents</Link></li>
              <li><a href="#analytics" className="hover:text-blue-600">Analytics</a></li>
              <li><a href="#api" className="hover:text-blue-600">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Community</h3>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#forum" className="hover:text-blue-600">Forum</a></li>
              <li><a href="#discord" className="hover:text-blue-600">Discord</a></li>
              <li><a href="#docs" className="hover:text-blue-600">Documentation</a></li>
              <li><a href="#blog" className="hover:text-blue-600">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Legal</h3>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#privacy" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#ethics" className="hover:text-blue-600">Ethics Framework</a></li>
              <li><a href="#transparency" className="hover:text-blue-600">Transparency</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600">© 2024 lobbyist.fun. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#twitter" className="text-slate-400 hover:text-blue-600">
              <span className="sr-only">Twitter</span>
              <MessageSquare className="h-5 w-5" />
            </a>
            <a href="#github" className="text-slate-400 hover:text-blue-600">
              <span className="sr-only">GitHub</span>
              <Shield className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
