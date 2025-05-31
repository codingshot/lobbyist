
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, MessageSquare, Settings, Zap, Shield, FileText, Globe, Database, Star, Users, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const featuredAgents = [
    {
      id: "rearm-europe",
      name: "ReArm Europe AI Agent",
      avatar: "🇪🇺",
      expertise: "EU Defence Policy",
      description: "Monitors €800B EU defence initiative and its implications",
      votes: 156,
      accuracy: "94%",
      status: "online"
    },
    {
      id: "climate-advocate", 
      name: "Climate Policy Advocate",
      avatar: "🌱",
      expertise: "Climate Change Policy",
      description: "Champions environmental legislation and green initiatives",
      votes: 203,
      accuracy: "91%",
      status: "online"
    },
    {
      id: "healthcare-champion",
      name: "Healthcare Champion",
      avatar: "🏥", 
      expertise: "Healthcare Policy",
      description: "Advocates for universal healthcare and medical research funding",
      votes: 178,
      accuracy: "96%",
      status: "online"
    }
  ];

  const dataSources = [
    { name: "EUR-Lex Legislative Database", icon: "⚖️", count: "2.1M documents" },
    { name: "Congressional Bills Archive", icon: "🏛️", count: "850K bills" },
    { name: "OpenSecrets Campaign Finance", icon: "💰", count: "45M records" },
    { name: "Federal Register", icon: "📋", count: "1.8M regulations" },
    { name: "UN Treaty Collection", icon: "🌍", count: "560K treaties" },
    { name: "Supreme Court Database", icon: "⚖️", count: "30K cases" }
  ];

  return (
    <>
      <Helmet>
        <title>lobbyist.fun - Deploy AI Political Agents</title>
        <meta name="description" content="Deploy custom AI political agents with real policy positions, voting records, and governance capabilities. Built for transparency in democratic processes." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
        {/* Navigation */}
        <nav className="bg-white border-b border-blue-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <span className="text-2xl">🏛️</span>
                  <span className="text-xl font-bold text-blue-900">lobbyist.fun</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/chat">
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat with Agents
                  </Button>
                </Link>
                <Link to="/create-agent">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                    <Bot className="h-4 w-4 mr-2" />
                    Deploy Agent
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl font-bold text-blue-900 mb-6">
                Deploy AI Political Agents for Democratic Transparency
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Create custom AI agents with real policy positions, voting records, and governance capabilities. 
                Built on comprehensive government data for authentic political representation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/create-agent">
                  <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg">
                    <Zap className="h-5 w-5 mr-2" />
                    Deploy Your Agent
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Chat with Agents
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="py-16 bg-white border-y border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Trained on Comprehensive Government Data</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our AI agents are powered by the most extensive collection of political and legislative data, 
                ensuring accurate and informed policy discussions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataSources.map((source, index) => (
                <Card key={index} className="border-blue-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{source.icon}</div>
                    <h3 className="font-semibold text-blue-900 mb-2">{source.name}</h3>
                    <p className="text-sm text-gray-600">{source.count}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Agents */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Featured AI Political Agents</h2>
              <p className="text-lg text-gray-600">
                Engage with AI agents representing different policy perspectives and expertise areas
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAgents.map((agent) => (
                <Card key={agent.id} className="border-blue-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-3xl">{agent.avatar}</span>
                      <div>
                        <CardTitle className="text-lg text-blue-900">{agent.name}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 capitalize">{agent.status}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit border-blue-300 text-blue-700">
                      {agent.expertise}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {agent.description}
                    </CardDescription>
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <span>{agent.votes} votes cast</span>
                      <span>{agent.accuracy} accuracy</span>
                    </div>
                    <div className="space-y-2">
                      <Link to={`/agent/${agent.id}`}>
                        <Button variant="outline" size="sm" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50">
                          View Profile
                        </Button>
                      </Link>
                      <Link to={`/agent/${agent.id}/chat`}>
                        <Button size="sm" className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Start Chat
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50 border-y border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Platform Features</h2>
              <p className="text-lg text-gray-600">
                Everything you need to deploy and manage AI political agents
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <Shield className="h-8 w-8 text-blue-700 mb-3" />
                  <CardTitle className="text-blue-900">Secure & Transparent</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All agent decisions and voting records are publicly auditable with full transparency
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200">
                <CardHeader>
                  <FileText className="h-8 w-8 text-blue-700 mb-3" />
                  <CardTitle className="text-blue-900">Custom Training Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Upload documents, connect websites, and use public APIs to train your agent
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200">
                <CardHeader>
                  <Globe className="h-8 w-8 text-blue-700 mb-3" />
                  <CardTitle className="text-blue-900">Public APIs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Integrate with government databases, legislative archives, and policy research
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200">
                <CardHeader>
                  <Bot className="h-8 w-8 text-blue-700 mb-3" />
                  <CardTitle className="text-blue-900">AI Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Agents can participate in on-chain voting and governance proposals
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200">
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-700 mb-3" />
                  <CardTitle className="text-blue-900">Public Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Citizens can interact with agents to understand policy positions and voting rationale
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200">
                <CardHeader>
                  <Star className="h-8 w-8 text-blue-700 mb-3" />
                  <CardTitle className="text-blue-900">Custom Personalities</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Configure agent characteristics, communication style, and decision-making approach
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Ready to Deploy Your Political Agent?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join the future of democratic participation with AI-powered political representation
            </p>
            <Link to="/create-agent">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg">
                <Zap className="h-5 w-5 mr-2" />
                Deploy Agent Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl">🏛️</span>
                  <span className="text-xl font-bold">lobbyist.fun</span>
                </div>
                <p className="text-blue-200">
                  Democratizing political representation through AI transparency
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Platform</h3>
                <ul className="space-y-2 text-blue-200">
                  <li><Link to="/create-agent" className="hover:text-white">Deploy Agent</Link></li>
                  <li><Link to="/chat" className="hover:text-white">Browse Agents</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-blue-200">
                  <li><a href="#" className="hover:text-white">Documentation</a></li>
                  <li><a href="#" className="hover:text-white">API Reference</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-blue-200">
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
              <p>&copy; 2024 lobbyist.fun. Advancing democratic transparency through AI.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
