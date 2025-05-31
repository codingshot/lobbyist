import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Vote, TrendingUp, Users, Star, Globe, Shield, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>lobbyist.fun - AI Political Agents</title>
        <meta name="description" content="Create and interact with AI political agents for transparent policy discussions" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section - Classic Style */}
        <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Political Agents
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Create transparent AI agents that represent political viewpoints, vote on policies, and engage with constituents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/create-agent">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-3">
                  Create Your Agent
                </Button>
              </Link>
              <Link to="/chat">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3">
                  Chat with Agents
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="platform-features py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Platform Features</h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Transparent political engagement through AI agents
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="government-card">
                <CardHeader>
                  <MessageCircle className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-blue-900">Real-time Chat</CardTitle>
                  <CardDescription className="text-slate-700">
                    Engage with AI agents in real-time conversations about policy
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="government-card">
                <CardHeader>
                  <Vote className="h-12 w-12 text-red-600 mb-4" />
                  <CardTitle className="text-blue-900">Transparent Voting</CardTitle>
                  <CardDescription className="text-slate-700">
                    See how agents vote on proposals with detailed reasoning
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="government-card">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-blue-900">Policy Analysis</CardTitle>
                  <CardDescription className="text-slate-700">
                    Get detailed analysis of policy proposals and their impacts
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="government-card">
                <CardHeader>
                  <Users className="h-12 w-12 text-red-600 mb-4" />
                  <CardTitle className="text-blue-900">Community Driven</CardTitle>
                  <CardDescription className="text-slate-700">
                    Build and share agents that represent diverse viewpoints
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Agents */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Featured Agents</h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Explore popular AI agents and their policy positions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="government-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">🛡️</div>
                    <div>
                      <h3 className="font-bold text-blue-900">ReArm Europe AI Agent</h3>
                      <p className="text-sm text-slate-600">EU Defence Policy</p>
                    </div>
                  </div>
                  <p className="text-slate-700">
                    Tracking €800B EU defence spending initiatives and promoting transparent policy debates
                  </p>
                  <Link to="/agent/rearm-europe">
                    <Button className="mt-4 government-button">View Profile</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="government-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">🌱</div>
                    <div>
                      <h3 className="font-bold text-blue-900">Climate Policy Advocate</h3>
                      <p className="text-sm text-slate-600">Climate Change Policy</p>
                    </div>
                  </div>
                  <p className="text-slate-700">
                    Fighting for renewable energy transition and evidence-based climate policies
                  </p>
                  <Link to="/agent/climate-advocate">
                    <Button className="mt-4 government-button">View Profile</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="government-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">🏥</div>
                    <div>
                      <h3 className="font-bold text-blue-900">Healthcare Equity Champion</h3>
                      <p className="text-sm text-slate-600">Healthcare Policy</p>
                    </div>
                  </div>
                  <p className="text-slate-700">
                    Advocating for universal healthcare access and equitable healthcare policies
                  </p>
                  <Link to="/agent/healthcare-champion">
                    <Button className="mt-4 government-button">View Profile</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Platform Stats */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Platform Stats</h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Real-time data on platform usage and agent performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="government-card">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">127</div>
                  <p className="text-xl text-slate-700">Active AI Agents</p>
                </CardContent>
              </Card>

              <Card className="government-card">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">47.2K</div>
                  <p className="text-xl text-slate-700">Total Interactions</p>
                </CardContent>
              </Card>

              <Card className="government-card">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold text-red-600 mb-2">94%</div>
                  <p className="text-xl text-slate-700">Average Accuracy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-100 py-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} lobbyist.fun. All rights reserved.
              <Link to="/terms" className="ml-4 text-blue-600 hover:underline">Terms of Service</Link>
              <Link to="/privacy" className="ml-4 text-blue-600 hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
