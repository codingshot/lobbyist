
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageSquare, Bot, Vote, Users, Database, Globe, FileText, Gavel, DollarSign, Building, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const featuredAgents = [
    {
      id: "rearm-europe",
      name: "ReArm Europe AI Agent",
      avatar: "🇪🇺",
      expertise: "EU Defence Policy",
      description: "Monitors the €800B EU defence initiative and its implications for healthcare, education, and social spending.",
      status: "online",
      votes: 156,
      accuracy: "94%"
    },
    {
      id: "climate-advocate", 
      name: "Climate Policy Advocate",
      avatar: "🌱",
      expertise: "Climate Change Policy",
      description: "Advocates for aggressive climate action, carbon pricing, and green new deal policies.",
      status: "online",
      votes: 203,
      accuracy: "91%"
    },
    {
      id: "healthcare-champion",
      name: "Healthcare Champion",
      avatar: "🏥",
      expertise: "Healthcare Policy", 
      description: "Champions universal healthcare coverage, drug pricing reform, and medical research funding.",
      status: "online",
      votes: 178,
      accuracy: "96%"
    }
  ];

  const dataSources = [
    { name: "EUR-Lex Legislative Database", icon: Gavel, supported: true, description: "EU legislation and legal documents" },
    { name: "OpenSecrets Campaign Finance", icon: DollarSign, supported: true, description: "Political contributions and lobbying data" },
    { name: "Congressional Bills Database", icon: Building, supported: true, description: "US legislative proposals and voting records" },
    { name: "Policy Research Papers", icon: FileText, supported: true, description: "Academic and think tank publications" },
    { name: "Government APIs", icon: Database, supported: true, description: "Official government data feeds" },
    { name: "News & Media Sources", icon: Globe, supported: true, description: "Real-time political news and analysis" },
    { name: "Social Media APIs", icon: Twitter, supported: true, description: "Public political discourse monitoring" },
    { name: "Parliamentary Records", icon: Users, supported: false, description: "Voting records and proceedings" }
  ];

  return (
    <>
      <Helmet>
        <title>lobbyist.fun - Deploy AI Political Agents</title>
        <meta name="description" content="Create and deploy AI agents for political discourse, policy analysis, and civic engagement. Connect real data sources to build informed political AI assistants." />
      </Helmet>

      <div className="min-h-screen patriotic-gradient">
        {/* Navigation */}
        <nav className="bg-white/95 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏛️</span>
                <span className="text-xl font-bold text-blue-900">lobbyist.fun</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-6">
                <Link to="/chat" className="text-blue-700 hover:text-blue-900 font-medium">Browse Agents</Link>
                <Link to="/create-agent" className="government-button px-4 py-2 rounded-md">
                  Deploy Agent
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <Link to="/create-agent">
                  <Button size="sm" className="government-button">Deploy</Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
                Deploy AI Political Agents
              </h1>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto mb-8">
                Create intelligent AI agents that understand policy, engage in political discourse, and represent specific political positions with real-time data from government sources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/create-agent">
                  <Button size="lg" className="government-button text-lg px-8 py-3">
                    Deploy Your Agent
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button variant="outline" size="lg" className="government-button-outline text-lg px-8 py-3">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Chat with Agents
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sources Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Connected Data Sources</h2>
              <p className="text-xl text-blue-700">Train your agents with real government and political data</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataSources.map((source, index) => (
                <Card key={index} className={`government-card ${source.supported ? 'border-green-200' : 'border-gray-200'}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <source.icon className={`h-6 w-6 ${source.supported ? 'text-blue-600' : 'text-gray-400'}`} />
                      {source.supported ? (
                        <Badge className="bg-green-100 text-green-800 border-green-300">Live</Badge>
                      ) : (
                        <Badge variant="secondary">Coming Soon</Badge>
                      )}
                    </div>
                    <CardTitle className={`text-sm ${source.supported ? 'text-blue-900' : 'text-gray-600'}`}>
                      {source.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-xs ${source.supported ? 'text-blue-700' : 'text-gray-500'}`}>
                      {source.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Agents */}
        <div className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Featured Political Agents</h2>
              <p className="text-xl text-blue-700">Engage with AI agents representing different political perspectives</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredAgents.map((agent) => (
                <Card key={agent.id} className="government-card hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-3xl">{agent.avatar}</div>
                      <div>
                        <CardTitle className="text-blue-900">{agent.name}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-blue-600">Online</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="w-fit bg-blue-100 text-blue-800 border-blue-300">{agent.expertise}</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-blue-700 mb-4">
                      {agent.description}
                    </CardDescription>
                    <div className="flex justify-between text-sm text-blue-600 mb-4">
                      <span>{agent.votes} votes cast</span>
                      <span>{agent.accuracy} accuracy</span>
                    </div>
                    <div className="flex space-x-2">
                      <Link to={`/agent/${agent.id}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full government-button-outline">
                          <Bot className="mr-2 h-4 w-4" />
                          View Profile
                        </Button>
                      </Link>
                      <Link to={`/agent/${agent.id}/chat`} className="flex-1">
                        <Button size="sm" className="w-full government-button">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Chat
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Deploy Political AI Agents?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Vote className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Real Political Positions</h3>
                <p className="text-blue-700">Agents maintain consistent political stances based on real policy data and voting records.</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Live Data Integration</h3>
                <p className="text-blue-700">Connect to government APIs, legislative databases, and policy research for accurate information.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Democratic Engagement</h3>
                <p className="text-blue-700">Foster informed political discourse and help citizens understand complex policy issues.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl">🏛️</span>
                  <span className="text-xl font-bold">lobbyist.fun</span>
                </div>
                <p className="text-blue-100">
                  Democratizing political discourse through AI agents.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Platform</h3>
                <ul className="space-y-2 text-blue-100">
                  <li><Link to="/chat" className="hover:text-white">Browse Agents</Link></li>
                  <li><Link to="/create-agent" className="hover:text-white">Deploy Agent</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-blue-100">
                  <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
                  <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Government</h3>
                <p className="text-blue-100 text-sm">
                  A platform for transparent political engagement and informed civic discourse.
                </p>
              </div>
            </div>
            <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
              <p>&copy; 2024 lobbyist.fun. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
