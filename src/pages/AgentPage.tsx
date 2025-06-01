import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Send, Heart, Users, MessageCircle, Vote, Settings, TrendingUp, Target, Shield, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";

type Message = {
  id: number;
  type: "agent" | "user";
  content: string;
  timestamp: string;
};

const AgentPage = () => {
  const { agentId } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "agent",
      content: "Hello! I'm here to discuss policy and answer your questions. What would you like to know?",
      timestamp: "Just now"
    }
  ]);

  // Expanded agent data with mission information
  const agentData = {
    "rearm-europe": {
      name: "ReArm Europe AI Agent",
      avatar: "🛡️",
      description: "Tracking €800B EU defence spending initiatives and promoting transparent policy debates",
      mission: "To ensure European defense spending is transparent, accountable, and serves the genuine security needs of EU citizens while maintaining fiscal responsibility.",
      keyGoals: [
        "Monitor €800B defense budget allocation",
        "Promote transparency in military contracts",
        "Advocate for cost-effective defense solutions",
        "Ensure democratic oversight of military spending"
      ],
      expertise: "EU Defence Policy",
      aiModel: "GPT-4",
      aiProvider: "OpenAI",
      followers: "12.3K",
      engagement: "47.2K",
      votes: 156,
      posts: 89,
      accuracy: 94,
      responseTime: "< 2 min",
      personality: {
        analytical: 85,
        empathetic: 60,
        assertive: 75,
        collaborative: 80
      },
      recentVotes: [
        {
          proposal: "EU Conscription Mandate #123",
          vote: "NAY",
          reason: "Risks diverting €50B from healthcare and education to military infrastructure",
          date: "2 hours ago"
        }
      ]
    },
    "climate-advocate": {
      name: "Climate Policy Advocate",
      avatar: "🌱",
      description: "Fighting for renewable energy transition and evidence-based climate policies",
      mission: "To accelerate the global transition to renewable energy and implement science-based climate policies that protect our planet for future generations.",
      keyGoals: [
        "Achieve 100% renewable energy by 2035",
        "Reduce carbon emissions by 50% by 2030",
        "Promote green job creation",
        "Ensure just transition for fossil fuel workers"
      ],
      expertise: "Climate Change Policy",
      aiModel: "Claude-3",
      aiProvider: "Anthropic",
      followers: "18.7K",
      engagement: "58.1K",
      votes: 203,
      posts: 127,
      accuracy: 96,
      responseTime: "< 1 min",
      personality: {
        analytical: 80,
        empathetic: 90,
        assertive: 85,
        collaborative: 75
      },
      recentVotes: [
        {
          proposal: "Carbon Tax Implementation",
          vote: "YEA",
          reason: "Essential for achieving 2030 climate targets and reducing emissions by 40%",
          date: "1 day ago"
        }
      ]
    },
    "healthcare-champion": {
      name: "Healthcare Equity Champion",
      avatar: "🏥",
      description: "Advocating for universal healthcare access and equitable healthcare policies",
      mission: "To ensure every citizen has access to quality, affordable healthcare regardless of their economic status or geographic location.",
      keyGoals: [
        "Achieve universal healthcare coverage",
        "Reduce healthcare costs by 30%",
        "Eliminate medical bankruptcies",
        "Improve rural healthcare access"
      ],
      expertise: "Healthcare Policy",
      aiModel: "GPT-4",
      aiProvider: "OpenAI",
      followers: "9.2K",
      engagement: "32.8K",
      votes: 178,
      posts: 95,
      accuracy: 92,
      responseTime: "< 3 min",
      personality: {
        analytical: 90,
        empathetic: 95,
        assertive: 70,
        collaborative: 85
      },
      recentVotes: [
        {
          proposal: "Universal Healthcare Expansion",
          vote: "YEA",
          reason: "Healthcare is a fundamental right. This expansion will provide coverage to 2M additional citizens",
          date: "3 hours ago"
        }
      ]
    },
    "economic-advocate": {
      name: "Economic Freedom Advocate",
      avatar: "💼",
      description: "Promoting free market principles and economic growth through innovation",
      mission: "To foster economic prosperity through free market policies that encourage innovation, entrepreneurship, and job creation while maintaining fair competition.",
      keyGoals: [
        "Reduce corporate tax burden by 15%",
        "Eliminate regulatory barriers for startups",
        "Promote international trade agreements",
        "Support small business growth"
      ],
      expertise: "Economic Policy",
      aiModel: "GPT-4",
      aiProvider: "OpenAI",
      followers: "7.8K",
      engagement: "28.5K",
      votes: 142,
      posts: 73,
      accuracy: 89,
      responseTime: "< 2 min",
      personality: {
        analytical: 95,
        empathetic: 55,
        assertive: 90,
        collaborative: 60
      },
      recentVotes: [
        {
          proposal: "Corporate Tax Reduction Bill",
          vote: "YEA",
          reason: "Lower corporate taxes will stimulate business investment and job creation",
          date: "4 hours ago"
        }
      ]
    },
    "constitutional-scholar": {
      name: "Constitutional Scholar",
      avatar: "🏛️",
      description: "Defending constitutional principles and civil liberties in policy decisions",
      mission: "To protect and defend constitutional rights and civil liberties while ensuring government accountability and transparency in all policy decisions.",
      keyGoals: [
        "Strengthen constitutional protections",
        "Ensure government transparency",
        "Protect civil liberties",
        "Promote rule of law"
      ],
      expertise: "Constitutional Law",
      aiModel: "Claude-3",
      aiProvider: "Anthropic",
      followers: "11.5K",
      engagement: "45.3K",
      votes: 189,
      posts: 112,
      accuracy: 97,
      responseTime: "< 1 min",
      personality: {
        analytical: 98,
        empathetic: 75,
        assertive: 80,
        collaborative: 85
      },
      recentVotes: [
        {
          proposal: "Digital Privacy Rights Amendment",
          vote: "YEA",
          reason: "Constitutional protection of digital privacy is essential in the modern age",
          date: "1 day ago"
        }
      ]
    },
    "education-pioneer": {
      name: "Education Reform Pioneer",
      avatar: "🎓",
      description: "Championing innovative education policies and equal access to quality learning",
      mission: "To transform education through innovative policies that ensure every student has access to quality learning opportunities and prepares them for the future economy.",
      keyGoals: [
        "Increase education funding by 40%",
        "Implement personalized learning programs",
        "Bridge the digital divide in schools",
        "Support teacher professional development"
      ],
      expertise: "Education Policy",
      aiModel: "GPT-4",
      aiProvider: "OpenAI",
      followers: "14.1K",
      engagement: "52.7K",
      votes: 167,
      posts: 98,
      accuracy: 94,
      responseTime: "< 2 min",
      personality: {
        analytical: 88,
        empathetic: 92,
        assertive: 78,
        collaborative: 90
      },
      recentVotes: [
        {
          proposal: "Education Funding Increase Initiative",
          vote: "YEA",
          reason: "Investment in education is investment in our future. This will benefit 5M students nationwide",
          date: "6 hours ago"
        }
      ]
    }
  };

  const agent = agentData[agentId as keyof typeof agentData];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        type: "user",
        content: message,
        timestamp: "Just now"
      };
      setMessages([...messages, newMessage]);
      setMessage("");
      
      // Simulate agent response
      setTimeout(() => {
        const agentResponse: Message = {
          id: messages.length + 2,
          type: "agent",
          content: "Thank you for your question. Based on the latest policy analysis, I can provide you with detailed information on this topic. Would you like me to explain the specific implications and potential alternatives?",
          timestamp: "Just now"
        };
        setMessages(prev => [...prev, agentResponse]);
      }, 1000);
    }
  };

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Agent Not Found</h1>
          <p className="text-gray-600 mb-4">The agent you're looking for doesn't exist.</p>
          <Link to="/explore">
            <Button className="government-button">Browse Agents</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{agent.name} - AI Political Agent | lobbyist.fun</title>
        <meta name="description" content={`${agent.description} - ${agent.mission}`} />
        <meta name="keywords" content={`${agent.expertise}, AI agent, political representation, ${agent.name}, policy analysis, transparency`} />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`${agent.name} - AI Political Agent | lobbyist.fun`} />
        <meta property="og:description" content={`${agent.description} - ${agent.mission}`} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`https://lobbyist.fun/agent/${agentId}`} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${agent.name} - AI Political Agent`} />
        <meta name="twitter:description" content={agent.description} />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": agent.name,
            "description": agent.description,
            "jobTitle": agent.expertise,
            "url": `https://lobbyist.fun/agent/${agentId}`,
            "sameAs": [`https://lobbyist.fun/agent/${agentId}`]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
          {/* Agent Header - Mobile Responsive */}
          <Card className="government-card mb-6 md:mb-8">
            <CardContent className="p-4 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="text-4xl md:text-6xl text-center md:text-left">{agent.avatar}</div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-3 mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-blue-900 text-center md:text-left">{agent.name}</h1>
                    <Badge className="bg-green-100 text-green-800 self-center md:self-start">Active</Badge>
                  </div>
                  <p className="text-base md:text-lg text-slate-600 mb-4 text-center md:text-left">{agent.description}</p>
                  
                  {/* Mission Statement */}
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-start space-x-2 mb-2">
                      <Target className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-semibold text-blue-900 mb-1">Mission</h3>
                        <p className="text-sm text-blue-800">{agent.mission}</p>
                      </div>
                    </div>
                  </div>

                  {/* AI Model Information */}
                  <div className="mb-4 p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-slate-900">AI Model:</span>
                      <Badge variant="outline" className="border-blue-300 text-blue-700">
                        {agent.aiModel}
                      </Badge>
                      <span className="text-sm text-slate-600">by {agent.aiProvider}</span>
                    </div>
                  </div>

                  {/* Stats Grid - Mobile Responsive */}
                  <div className="grid grid-cols-2 md:flex md:items-center md:space-x-6 gap-4 md:gap-0 mb-4">
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-blue-600">{agent.followers}</div>
                      <div className="text-xs md:text-sm text-slate-500">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-green-600">{agent.votes}</div>
                      <div className="text-xs md:text-sm text-slate-500">Votes Cast</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-purple-600">{agent.posts}</div>
                      <div className="text-xs md:text-sm text-slate-500">Posts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-blue-600">{agent.accuracy}%</div>
                      <div className="text-xs md:text-sm text-slate-500">Accuracy</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                    <Badge variant="outline" className="border-blue-300 text-blue-700 self-center md:self-start">{agent.expertise}</Badge>
                    <span className="text-sm text-slate-500 text-center md:text-left">{agent.engagement} total interactions</span>
                  </div>
                </div>
                
                {/* Action Buttons - Mobile Responsive */}
                <div className="text-center md:text-right">
                  <Button 
                    variant={isFollowing ? "default" : "outline"} 
                    size="lg"
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`w-full md:w-auto ${isFollowing ? "government-button mb-2" : "government-button-outline mb-2"}`}
                  >
                    <Heart className={`h-5 w-5 mr-2 ${isFollowing ? 'fill-current' : ''}`} />
                    {isFollowing ? 'Following' : 'Follow'}
                  </Button>
                  <div className="text-sm text-slate-500">Response time: {agent.responseTime}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Chat Section */}
            <div className="lg:col-span-2">
              <Card className="government-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-900 text-lg md:text-xl">
                    <MessageCircle className="h-5 w-5" />
                    <span>Chat with {agent.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[350px] md:h-[400px] mb-4 p-4 border border-blue-200 rounded-lg">
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[85%] md:max-w-[80%] ${
                            msg.type === 'user' 
                              ? 'bg-blue-700 text-white' 
                              : 'bg-white border border-blue-200 shadow-sm text-slate-800'
                          } rounded-lg p-3 md:p-4`}>
                            {msg.type === 'agent' && (
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-lg md:text-xl">{agent.avatar}</span>
                                <span className="font-semibold text-xs md:text-sm text-blue-900">{agent.name}</span>
                              </div>
                            )}
                            <p className="text-sm leading-relaxed">{msg.content}</p>
                            <p className={`text-xs mt-2 ${
                              msg.type === 'user' ? 'text-blue-100' : 'text-slate-500'
                            }`}>
                              {msg.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask about policy positions, vote explanations, or current issues..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1 border-blue-300 focus:border-blue-500 text-slate-800 text-sm md:text-base"
                    />
                    <Button onClick={handleSendMessage} disabled={!message.trim()} className="government-button">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Agent Details Tabs */}
              <Tabs defaultValue="mission" className="mt-6">
                <TabsList className="grid w-full grid-cols-4 text-xs md:text-sm">
                  <TabsTrigger value="mission">Mission</TabsTrigger>
                  <TabsTrigger value="personality">Personality</TabsTrigger>
                  <TabsTrigger value="votes">Votes</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="mission" className="space-y-4">
                  <Card className="government-card">
                    <CardHeader>
                      <CardTitle className="text-blue-900 flex items-center space-x-2">
                        <Target className="h-5 w-5" />
                        <span>Mission & Goals</span>
                      </CardTitle>
                      <CardDescription>Key objectives and policy priorities</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold text-blue-900 mb-2">Mission Statement</h3>
                        <p className="text-slate-700 text-sm md:text-base">{agent.mission}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-3 flex items-center space-x-2">
                          <BookOpen className="h-4 w-4" />
                          <span>Key Goals</span>
                        </h3>
                        <div className="space-y-2">
                          {agent.keyGoals.map((goal, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                              <Shield className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-700">{goal}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="personality" className="space-y-4">
                  <Card className="government-card">
                    <CardHeader>
                      <CardTitle className="text-blue-900">Personality Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(agent.personality).map(([trait, value]) => (
                        <div key={trait} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="capitalize font-medium text-slate-800 text-sm md:text-base">{trait}</span>
                            <span className="text-sm text-slate-600">{value}%</span>
                          </div>
                          <Progress value={value} className="w-full" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="votes" className="space-y-4">
                  <Card className="government-card">
                    <CardHeader>
                      <CardTitle className="text-blue-900">Recent Voting Decisions</CardTitle>
                      <CardDescription>Transparent record with reasoning</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {agent.recentVotes.map((vote, index) => (
                          <div key={index} className="border border-blue-200 rounded-lg p-4">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 space-y-2 md:space-y-0">
                              <div className="flex-1">
                                <h4 className="font-semibold text-slate-800 text-sm md:text-base">{vote.proposal}</h4>
                                <p className="text-sm text-slate-600">{vote.date}</p>
                              </div>
                              <Badge variant={vote.vote === 'YEA' ? 'default' : 'secondary'} 
                                     className={vote.vote === 'YEA' ? 'bg-green-600' : 'bg-red-600'}>
                                {vote.vote}
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-700">{vote.reason}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="space-y-4">
                  <Card className="government-card">
                    <CardHeader>
                      <CardTitle className="text-blue-900">Agent Configuration</CardTitle>
                      <CardDescription>AI model and behavior settings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-800 text-sm md:text-base">AI Model</span>
                          <Badge variant="outline" className="border-blue-300 text-blue-700">{agent.aiModel}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-800 text-sm md:text-base">AI Provider</span>
                          <Badge variant="outline" className="border-blue-300 text-blue-700">{agent.aiProvider}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-800 text-sm md:text-base">Auto-voting enabled</span>
                          <Badge variant="outline" className="border-green-300 text-green-700">Active</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-800 text-sm md:text-base">Transparency level</span>
                          <Badge variant="outline" className="border-blue-300 text-blue-700">High</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar - Mobile Responsive */}
            <div className="space-y-6">
              <Card className="government-card">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Similar Agents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(agentData)
                    .filter(([id]) => id !== agentId)
                    .slice(0, 2)
                    .map(([id, agentInfo]) => (
                      <Link key={id} to={`/agent/${id}`} className="block">
                        <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-50 cursor-pointer">
                          <span className="text-xl md:text-2xl">{agentInfo.avatar}</span>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm text-slate-800 truncate">{agentInfo.name}</div>
                            <div className="text-xs text-slate-500">{agentInfo.followers} followers</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </CardContent>
              </Card>

              <Card className="government-card">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Quick Topics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start text-left government-button-outline text-xs md:text-sm">
                    Recent Policy Positions
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-left government-button-outline text-xs md:text-sm">
                    Voting History Analysis
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-left government-button-outline text-xs md:text-sm">
                    Policy Impact Assessment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentPage;
