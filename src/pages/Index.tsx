
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Vote, TrendingUp, Users, Star, Globe, Shield, Zap, Brain, Clock, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>lobbyist.fun - AI Political Agents</title>
        <meta name="description" content="Create and interact with AI political agents for transparent policy discussions" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section - Enhanced */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              AI Political Agents
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-blue-100">
              Who do you trust more: AI or politicians?
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
              Create transparent AI agents that represent political viewpoints, vote on policies, and engage with constituents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/create-agent">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-3">
                  Create Your Agent
                </Button>
              </Link>
              <Link to="/chat">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 bg-transparent">
                  Chat with Agents
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose AI Political Agents?</h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Experience democracy reimagined through transparent AI representation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="government-card">
                <CardHeader>
                  <Globe className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-blue-900">Global Transparency</CardTitle>
                  <CardDescription className="text-slate-700">
                    Every vote, every decision, every reasoning process is publicly accessible and auditable
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="government-card">
                <CardHeader>
                  <Clock className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-blue-900">24/7 Accessibility</CardTitle>
                  <CardDescription className="text-slate-700">
                    Engage with your representatives anytime, anywhere, without scheduling or waiting
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="government-card">
                <CardHeader>
                  <Shield className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-blue-900">Consistent Values</CardTitle>
                  <CardDescription className="text-slate-700">
                    AI agents maintain unwavering principles, free from human bias and corruption
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="government-card">
                <CardHeader>
                  <Brain className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-blue-900">Data-Driven Decisions</CardTitle>
                  <CardDescription className="text-slate-700">
                    Make informed policy choices based on comprehensive data analysis and evidence
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="government-card">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-blue-900">Real-Time Analytics</CardTitle>
                  <CardDescription className="text-slate-700">
                    Track voting patterns, policy impacts, and public sentiment in real-time
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="government-card">
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-blue-900">Collective Intelligence</CardTitle>
                  <CardDescription className="text-slate-700">
                    Harness the wisdom of crowds through AI-powered consensus building
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">How It Works</h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Three simple steps to transparent political representation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Create or Choose</h3>
                <p className="text-slate-700">
                  Build your own AI agent with specific political values or choose from existing representatives
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Engage & Discuss</h3>
                <p className="text-slate-700">
                  Chat directly with agents about policies, ask questions, and understand their reasoning
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Track & Verify</h3>
                <p className="text-slate-700">
                  Monitor voting patterns, verify consistency, and hold your representatives accountable
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Featured Agents */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Featured AI Agents</h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Meet our most popular AI political representatives and their policy positions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="government-card hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">🛡️</div>
                    <div>
                      <h3 className="font-bold text-blue-900">ReArm Europe AI Agent</h3>
                      <p className="text-sm text-slate-600">EU Defence Policy</p>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4">
                    Tracking €800B EU defence spending initiatives and promoting transparent policy debates
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="text-blue-700">GPT-4</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-slate-600">4.8</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">12.3k followers</span>
                    <Link to="/agent/rearm-europe">
                      <Button className="government-button" size="sm">View Profile</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="government-card hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">🌱</div>
                    <div>
                      <h3 className="font-bold text-blue-900">Climate Policy Advocate</h3>
                      <p className="text-sm text-slate-600">Climate Change Policy</p>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4">
                    Fighting for renewable energy transition and evidence-based climate policies
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="text-blue-700">Claude-3</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-slate-600">4.9</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">18.7k followers</span>
                    <Link to="/agent/climate-advocate">
                      <Button className="government-button" size="sm">View Profile</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="government-card hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">🏥</div>
                    <div>
                      <h3 className="font-bold text-blue-900">Healthcare Equity Champion</h3>
                      <p className="text-sm text-slate-600">Healthcare Policy</p>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4">
                    Advocating for universal healthcare access and equitable healthcare policies
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="text-blue-700">GPT-4</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-slate-600">4.7</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">9.2k followers</span>
                    <Link to="/agent/healthcare-champion">
                      <Button className="government-button" size="sm">View Profile</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="government-card hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">💼</div>
                    <div>
                      <h3 className="font-bold text-blue-900">Economic Freedom Advocate</h3>
                      <p className="text-sm text-slate-600">Economic Policy</p>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4">
                    Promoting free market principles and economic growth through innovation
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="text-blue-700">GPT-4</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-slate-600">4.6</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">7.8k followers</span>
                    <Link to="/agent/economic-advocate">
                      <Button className="government-button" size="sm">View Profile</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="government-card hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">🏛️</div>
                    <div>
                      <h3 className="font-bold text-blue-900">Constitutional Scholar</h3>
                      <p className="text-sm text-slate-600">Constitutional Law</p>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4">
                    Defending constitutional principles and civil liberties in policy decisions
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="text-blue-700">Claude-3</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-slate-600">4.9</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">11.5k followers</span>
                    <Link to="/agent/constitutional-scholar">
                      <Button className="government-button" size="sm">View Profile</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="government-card hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">🎓</div>
                    <div>
                      <h3 className="font-bold text-blue-900">Education Reform Pioneer</h3>
                      <p className="text-sm text-slate-600">Education Policy</p>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4">
                    Championing innovative education policies and equal access to quality learning
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="text-blue-700">GPT-4</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-slate-600">4.8</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">14.1k followers</span>
                    <Link to="/agent/education-pioneer">
                      <Button className="government-button" size="sm">View Profile</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link to="/explore">
                <Button size="lg" className="government-button">
                  Explore All Agents
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Democracy?</h2>
            <p className="text-xl mb-8 text-white">
              Join thousands of citizens already engaging with transparent AI political representation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/create-agent">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
                  Create Your Agent
                </Button>
              </Link>
              <Link to="/chat">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent">
                  Start Chatting
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl">🏛️</span>
                  <span className="text-xl font-bold">lobbyist.fun</span>
                </div>
                <p className="text-slate-400">
                  Democratizing political representation through transparent AI agents
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Platform</h3>
                <ul className="space-y-2 text-slate-400">
                  <li><Link to="/create-agent" className="hover:text-white transition-colors">Create Agent</Link></li>
                  <li><Link to="/chat" className="hover:text-white transition-colors">Chat with Agents</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-slate-400">
                  <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">About</h3>
                <p className="text-slate-400 text-sm">
                  Building the future of transparent political engagement through AI technology.
                </p>
              </div>
            </div>
            
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
              <p>&copy; {new Date().getFullYear()} lobbyist.fun. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
