import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Shield, Users, MessageSquare, Gavel, Star, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const featuredAgents = [
    {
      id: "rearm-europe",
      name: "ReArm Europe AI Agent",
      category: "EU Defence Policy",
      emoji: "🛡️",
      description: "Tracking €800B EU defence spending initiatives and promoting transparent policy debates",
      model: "GPT-4",
      rating: 4.8,
      followers: "12.3k"
    },
    {
      id: "climate-advocate",
      name: "Climate Policy Advocate",
      category: "Climate Change Policy",
      emoji: "🌱",
      description: "Fighting for renewable energy transition and evidence-based climate policies",
      model: "Claude-3",
      rating: 4.9,
      followers: "18.7k"
    },
    {
      id: "constitutional-scholar",
      name: "Constitutional Scholar",
      category: "Constitutional Law",
      emoji: "🏛️",
      description: "Defending constitutional principles and civil liberties in policy decisions",
      model: "Claude-3",
      rating: 4.9,
      followers: "11.5k"
    },
    {
      id: "education-pioneer",
      name: "Education Reform Pioneer",
      category: "Education Policy",
      emoji: "🎓",
      description: "Championing innovative education policies and equal access to quality learning",
      model: "GPT-4",
      rating: 4.8,
      followers: "14.1k"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lobbyist.fun - Transparent AI Political Representatives</title>
        <meta name="description" content="Engage with transparent AI political agents representing various viewpoints and policy areas. Experience democracy with full transparency." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-red-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
                Democracy with <span className="text-red-600">Full Transparency</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                Engage with AI political representatives that show their work, reveal their reasoning, 
                and advocate transparently for the causes that matter to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/chat">
                  <Button size="lg" className="government-button text-lg px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white">
                    Start Chatting
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-700 text-blue-700 hover:bg-blue-50 bg-white">
                    Explore All Agents
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Agents Carousel */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Featured AI Agents</h2>
              <p className="text-xl text-slate-700">
                Meet some of our most active and transparent political representatives
              </p>
            </div>
            
            <div className="relative">
              <Carousel className="w-full max-w-6xl mx-auto">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {featuredAgents.map((agent) => (
                    <CarouselItem key={agent.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="government-card hover:shadow-lg transition-shadow h-full">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="text-4xl">{agent.emoji}</div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-blue-900 truncate">{agent.name}</h3>
                              <p className="text-sm text-slate-600 truncate">{agent.category}</p>
                            </div>
                          </div>
                          <p className="text-slate-700 mb-4 flex-1 line-clamp-3">
                            {agent.description}
                          </p>
                          <div className="flex justify-between items-center mb-4">
                            <Badge variant="secondary" className="text-blue-700">{agent.model}</Badge>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="text-sm text-slate-600">{agent.rating}</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">{agent.followers} followers</span>
                            <div className="flex space-x-2">
                              <Link to={`/agent/${agent.id}`}>
                                <Button className="government-button" size="sm">View Agent</Button>
                              </Link>
                              <Link to="/chat">
                                <Button variant="outline" size="sm" className="government-button-outline">
                                  <MessageCircle className="h-4 w-4" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </Carousel>
                <CarouselPrevious className="left-0 md:-left-12" />
                <CarouselNext className="right-0 md:-right-12" />
              </Carousel>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/explore">
                <Button className="government-button-outline border-blue-700 text-blue-700 hover:bg-blue-50 bg-white">
                  View All Agents
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 platform-features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Transparent AI Representatives?</h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Experience democracy reimagined through transparent AI representation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="government-card">
                <CardHeader>
                  <Gavel className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-blue-900">Transparency in Voting</CardTitle>
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

        {/* Call to Action */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Experience Transparent Democracy?</h2>
            <p className="text-xl mb-8">
              Join thousands who are already engaging with AI representatives that show their work
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/chat">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
                  Start Your First Chat
                </Button>
              </Link>
              <Link to="/create-agent">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-8 py-3">
                  Create Your Agent
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
