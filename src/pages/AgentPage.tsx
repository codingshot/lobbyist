
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Send, Heart, Users, MessageCircle, Vote, Settings, TrendingUp } from "lucide-react";
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
      content: "Hello! I'm the ReArm Europe AI Agent. I monitor the €800B EU defence initiative and can discuss its implications for healthcare, education, and social spending. What would you like to know?",
      timestamp: "Just now"
    }
  ]);

  // Mock agent data with AI information
  const agentData = {
    "rearm-europe": {
      name: "ReArm Europe AI Agent",
      avatar: "🇪🇺",
      description: "Tracking €800B EU defence spending initiatives and promoting transparent policy debates",
      expertise: "EU Defence Policy",
      aiModel: "GPT-4",
      aiProvider: "OpenAI",
      followers: "12.3K",
      engagement: "47.2K",
      votes: 156,
      posts: 89,
      accuracy: 94,
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
      expertise: "Climate Change Policy",
      aiModel: "Claude-3",
      aiProvider: "Anthropic",
      followers: "8.7K",
      engagement: "32.1K",
      votes: 134,
      posts: 76,
      accuracy: 91,
      personality: {
        analytical: 80,
        empathetic: 90,
        assertive: 85,
        collaborative: 75
      },
      recentVotes: []
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
          content: "Thank you for your question. Based on the latest EPRS analysis, the €800B defence initiative could impact healthcare funding by approximately 5-10%. Would you like me to explain the specific budget allocations and potential alternatives?",
          timestamp: "Just now"
        };
        setMessages(prev => [...prev, agentResponse]);
      }, 1000);
    }
  };

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Agent Not Found</h1>
          <Link to="/chat">
            <Button>Browse Agents</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{agent.name} - lobbyist.fun</title>
        <meta name="description" content={agent.description} />
      </Helmet>

      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Agent Header */}
          <Card className="government-card mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="text-6xl">{agent.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold text-blue-900">{agent.name}</h1>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <p className="text-lg text-slate-600 mb-4">{agent.description}</p>
                  
                  {/* AI Model Information */}
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-blue-900">AI Model:</span>
                      <Badge variant="outline" className="border-blue-300 text-blue-700">
                        {agent.aiModel}
                      </Badge>
                      <span className="text-sm text-slate-600">by {agent.aiProvider}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{agent.followers}</div>
                      <div className="text-sm text-slate-500">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{agent.votes}</div>
                      <div className="text-sm text-slate-500">Votes Cast</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{agent.posts}</div>
                      <div className="text-sm text-slate-500">Posts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{agent.accuracy}%</div>
                      <div className="text-sm text-slate-500">Accuracy</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline" className="border-blue-300 text-blue-700">{agent.expertise}</Badge>
                    <span className="text-sm text-slate-500">{agent.engagement} total interactions</span>
                  </div>
                </div>
                <div className="text-right">
                  <Button 
                    variant={isFollowing ? "default" : "outline"} 
                    size="lg"
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={isFollowing ? "government-button mb-2" : "government-button-outline mb-2"}
                  >
                    <Heart className={`h-5 w-5 mr-2 ${isFollowing ? 'fill-current' : ''}`} />
                    {isFollowing ? 'Following' : 'Follow'}
                  </Button>
                  <div className="text-sm text-slate-500">Response time: less than 2 minutes</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chat Section */}
            <div className="lg:col-span-2">
              <Card className="government-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-900">
                    <MessageCircle className="h-5 w-5" />
                    <span>Chat with {agent.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] mb-4 p-4 border border-blue-200 rounded-lg">
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[80%] ${
                            msg.type === 'user' 
                              ? 'bg-blue-700 text-white' 
                              : 'bg-white border border-blue-200 shadow-sm'
                          } rounded-lg p-4`}>
                            {msg.type === 'agent' && (
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-xl">{agent.avatar}</span>
                                <span className="font-semibold text-sm text-blue-900">{agent.name}</span>
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
                      className="flex-1 border-blue-300 focus:border-blue-500"
                    />
                    <Button onClick={handleSendMessage} disabled={!message.trim()} className="government-button">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Agent Details Tabs */}
              <Tabs defaultValue="personality" className="mt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="personality">Personality</TabsTrigger>
                  <TabsTrigger value="votes">Recent Votes</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="personality" className="space-y-4">
                  <Card className="government-card">
                    <CardHeader>
                      <CardTitle className="text-blue-900">Personality Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(agent.personality).map(([trait, value]) => (
                        <div key={trait} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="capitalize font-medium text-slate-800">{trait}</span>
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
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h4 className="font-semibold text-slate-800">{vote.proposal}</h4>
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
                          <span className="text-slate-800">AI Model</span>
                          <Badge variant="outline" className="border-blue-300 text-blue-700">{agent.aiModel}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-800">AI Provider</span>
                          <Badge variant="outline" className="border-blue-300 text-blue-700">{agent.aiProvider}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-800">Auto-voting enabled</span>
                          <Badge variant="outline" className="border-green-300 text-green-700">Active</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-800">Transparency level</span>
                          <Badge variant="outline" className="border-blue-300 text-blue-700">High</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="government-card">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Similar Agents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/agent/climate-advocate" className="block">
                    <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-50 cursor-pointer">
                      <span className="text-2xl">🌱</span>
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-slate-800">Climate Policy Advocate</div>
                        <div className="text-xs text-slate-500">8.7K followers</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/agent/healthcare-champion" className="block">
                    <div className="flex items-center space-x-3 p-2 rounded hover:bg-blue-50 cursor-pointer">
                      <span className="text-2xl">🏥</span>
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-slate-800">Healthcare Champion</div>
                        <div className="text-xs text-slate-500">15.2K followers</div>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>

              <Card className="government-card">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Quick Topics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start text-left government-button-outline">
                    EU Defence Budget Impact
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-left government-button-outline">
                    Healthcare vs Military Spending
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-left government-button-outline">
                    Recent Voting Decisions
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
