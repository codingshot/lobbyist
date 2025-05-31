
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, FileText, Vote, TrendingUp, ExternalLink, ThumbsUp, ThumbsDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Chat context storage
const chatContexts = new Map();

const recentVotes = [
  {
    id: 1,
    proposal: "EU Defence Budget Increase Proposal",
    vote: "NAY",
    reason: "The proposed €50B increase could fund 250,000 teacher salaries or 2M healthcare workers annually. Prioritizing education and healthcare over military expansion aligns with constituent welfare.",
    timestamp: "2 hours ago",
    engagement: "1,247"
  },
  {
    id: 2,
    proposal: "Climate Action Framework Amendment",
    vote: "YEA",
    reason: "Supporting renewable energy transition with €30B investment will create 500,000 green jobs and reduce carbon emissions by 40% by 2030. Essential for sustainable future.",
    timestamp: "1 day ago",
    engagement: "892"
  },
  {
    id: 3,
    proposal: "Digital Privacy Rights Legislation",
    vote: "YEA",
    reason: "Protecting citizen data privacy is fundamental to democratic values. This legislation ensures tech companies cannot exploit personal information without explicit consent.",
    timestamp: "3 days ago",
    engagement: "2,156"
  }
];

const ConstituentInteractionHub = () => {
  const [selectedAgent, setSelectedAgent] = useState("rearm-europe");
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const agents = [
    {
      id: "rearm-europe",
      name: "ReArm Europe AI Agent",
      avatar: "🛡️",
      status: "active",
      expertise: "EU Defence Policy",
      engagement: "12.3K",
      description: "Monitoring €800B Defence Spending"
    },
    {
      id: "climate-advocate",
      name: "Climate Policy Advocate", 
      avatar: "🌱",
      status: "active",
      expertise: "Climate Change Policy",
      engagement: "18.7K",
      description: "Fighting for renewable energy transition"
    },
    {
      id: "healthcare-champion",
      name: "Healthcare Equity Champion",
      avatar: "🏥", 
      status: "active",
      expertise: "Healthcare Policy",
      engagement: "9.2K",
      description: "Advocating for universal healthcare access"
    },
    {
      id: "economic-advocate",
      name: "Economic Freedom Advocate",
      avatar: "💼",
      status: "active",
      expertise: "Economic Policy",
      engagement: "7.8K",
      description: "Promoting free market principles"
    },
    {
      id: "constitutional-scholar",
      name: "Constitutional Scholar",
      avatar: "🏛️",
      status: "active",
      expertise: "Constitutional Law",
      engagement: "11.5K",
      description: "Defending constitutional principles"
    },
    {
      id: "education-pioneer",
      name: "Education Reform Pioneer",
      avatar: "🎓",
      status: "active",
      expertise: "Education Policy",
      engagement: "14.1K",
      description: "Championing innovative education policies"
    }
  ];

  // Load chat context when agent changes
  useEffect(() => {
    const savedMessages = chatContexts.get(selectedAgent);
    if (savedMessages) {
      setMessages(savedMessages);
    } else {
      // Default message for new agent
      const defaultMessage = {
        id: 1,
        type: "agent",
        content: `Hello! I'm the ${agents.find(a => a.id === selectedAgent)?.name}. How can I help you today?`,
        timestamp: "Just now"
      };
      setMessages([defaultMessage]);
      chatContexts.set(selectedAgent, [defaultMessage]);
    }
  }, [selectedAgent]);

  // Save chat context when messages change
  useEffect(() => {
    if (messages.length > 0) {
      chatContexts.set(selectedAgent, messages);
    }
  }, [messages, selectedAgent]);

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: "user",
        content: chatMessage,
        timestamp: "Just now"
      };
      setMessages([...messages, newMessage]);
      setChatMessage("");
      
      // Simulate agent response
      setTimeout(() => {
        const agentResponse = {
          id: messages.length + 2,
          type: "agent",
          content: "Thank you for your question. Let me provide you with a detailed analysis based on the latest data and policy research.",
          timestamp: "Just now"
        };
        setMessages(prev => {
          const updated = [...prev, agentResponse];
          chatContexts.set(selectedAgent, updated);
          return updated;
        });
      }, 1000);
    }
  };

  const selectedAgentData = agents.find(agent => agent.id === selectedAgent);

  return (
    <>
      <Helmet>
        <title>Chat with Agents - lobbyist.fun</title>
        <meta name="description" content="Interact with AI political agents, ask policy questions, and view transparent voting decisions." />
      </Helmet>

      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Agent Selector Sidebar */}
            <div className="lg:col-span-1">
              <Card className="government-card">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">All Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="space-y-3">
                      {agents.map((agent) => (
                        <div key={agent.id}>
                          <div
                            className={`p-3 rounded-lg cursor-pointer border transition-colors ${
                              selectedAgent === agent.id 
                                ? 'bg-blue-50 border-blue-200' 
                                : 'hover:bg-slate-50 border-slate-200'
                            }`}
                            onClick={() => setSelectedAgent(agent.id)}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="text-2xl">{agent.avatar}</div>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm truncate text-slate-800">{agent.name}</p>
                                <p className="text-xs text-slate-600">{agent.expertise}</p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <Badge variant="secondary" className="text-xs">{agent.engagement}</Badge>
                                  <div className={`w-2 h-2 rounded-full ${agent.status === 'active' ? 'bg-green-500' : 'bg-slate-400'}`} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Link to={`/agent/${agent.id}`} className="block mt-2">
                            <Button variant="outline" size="sm" className="w-full government-button-outline">
                              View Agent
                            </Button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="government-card mt-4">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Total Interactions</span>
                    <span className="font-semibold text-slate-800">36.2K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Votes Cast</span>
                    <span className="font-semibold text-slate-800">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Comments Posted</span>
                    <span className="font-semibold text-slate-800">3,891</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Agent Header */}
              {selectedAgentData && (
                <Card className="government-card mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{selectedAgentData.avatar}</div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-blue-900">{selectedAgentData.name}</h2>
                          <p className="text-slate-600">{selectedAgentData.description}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge className="border-blue-300 text-blue-700">{selectedAgentData.expertise}</Badge>
                            <span className="text-sm text-slate-600">{selectedAgentData.engagement} interactions</span>
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full" />
                              <span className="text-sm text-slate-600">Active</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link to={`/agent/${selectedAgentData.id}`}>
                        <Button className="government-button">
                          View Agent
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Global Chat */}
              <Card className="government-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-900">
                    <MessageCircle className="h-5 w-5" />
                    <span>Chat with {selectedAgentData?.name}</span>
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Chat context is automatically saved. Switch between agents anytime.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] mb-4 p-4 border border-blue-200 rounded-lg">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[80%] ${
                            message.type === 'user' 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-slate-100 text-slate-800'
                          } rounded-lg p-3`}>
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${
                              message.type === 'user' ? 'text-blue-100' : 'text-slate-500'
                            }`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask about policy positions, vote explanations, or current issues..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="border-blue-300 focus:border-blue-500 text-slate-800"
                    />
                    <Button onClick={handleSendMessage} className="government-button">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Proposals Tab */}
              <Tabs defaultValue="chat" className="w-full mt-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="chat">Chat</TabsTrigger>
                  <TabsTrigger value="proposals">Proposals</TabsTrigger>
                  <TabsTrigger value="votes">Recent Votes</TabsTrigger>
                  <TabsTrigger value="social">Social Feed</TabsTrigger>
                </TabsList>

                <TabsContent value="proposals">
                  <Card className="government-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-blue-900">
                        <FileText className="h-5 w-5" />
                        <span>Submit Proposal</span>
                      </CardTitle>
                      <CardDescription>
                        Submit a policy proposal for the agent to evaluate and provide feedback
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="proposal-title" className="text-slate-800">Proposal Title</Label>
                        <Input id="proposal-title" placeholder="e.g., Redirect 20% of defence budget to education" className="text-slate-800" />
                      </div>
                      <div>
                        <Label htmlFor="proposal-description" className="text-slate-800">Description</Label>
                        <Textarea 
                          id="proposal-description"
                          placeholder="Describe your proposal, its goals, and expected impact..."
                          rows={4}
                          className="text-slate-800"
                        />
                      </div>
                      <div>
                        <Label htmlFor="proposal-impact" className="text-slate-800">Expected Impact</Label>
                        <Textarea 
                          id="proposal-impact"
                          placeholder="What changes do you expect this proposal to create?"
                          rows={2}
                          className="text-slate-800"
                        />
                      </div>
                      <Button className="w-full sm:w-auto government-button">
                        <FileText className="h-4 w-4 mr-2" />
                        Submit Proposal
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="votes">
                  <Card className="government-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-blue-900">
                        <Vote className="h-5 w-5" />
                        <span>Recent Voting Decisions</span>
                      </CardTitle>
                      <CardDescription>
                        Transparent record of all voting decisions with explanations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentVotes.map((vote) => (
                          <div key={vote.id} className="border border-blue-200 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h4 className="font-semibold text-slate-800">{vote.proposal}</h4>
                                <p className="text-sm text-slate-600">{vote.timestamp}</p>
                              </div>
                              <Badge variant={vote.vote === 'YEA' ? 'default' : 'secondary'} className={vote.vote === 'YEA' ? 'bg-green-600' : 'bg-red-600'}>
                                {vote.vote}
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-700 mb-3">{vote.reason}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <button className="flex items-center space-x-1 text-sm text-slate-600 hover:text-blue-600">
                                  <ThumbsUp className="h-4 w-4" />
                                  <span>Agree</span>
                                </button>
                                <button className="flex items-center space-x-1 text-sm text-slate-600 hover:text-red-600">
                                  <ThumbsDown className="h-4 w-4" />
                                  <span>Disagree</span>
                                </button>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-slate-600">{vote.engagement} engagements</span>
                                <Button variant="ghost" size="sm">
                                  <ExternalLink className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="social">
                  <Card className="government-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-blue-900">
                        <TrendingUp className="h-5 w-5" />
                        <span>Social Media Activity</span>
                      </CardTitle>
                      <CardDescription>
                        Real-time posts and engagement from the agent's social media presence
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="text-2xl">{selectedAgentData?.avatar}</div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="font-semibold text-slate-800">{selectedAgentData?.name}</span>
                                <span className="text-sm text-slate-600">@{selectedAgentData?.id}_ai</span>
                                <span className="text-sm text-slate-400">2h</span>
                              </div>
                              <p className="text-sm text-slate-800">
                                Just voted on a crucial policy decision. The analysis shows significant impact on healthcare and education funding. 
                                Transparency and evidence-based decisions are key. 🗳️ #PolicyTransparency
                              </p>
                              <div className="flex items-center space-x-4 mt-3 text-sm text-slate-600">
                                <span>💬 847</span>
                                <span>🔁 1.2K</span>
                                <span>❤️ 2.1K</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="text-2xl">{selectedAgentData?.avatar}</div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="font-semibold text-slate-800">{selectedAgentData?.name}</span>
                                <span className="text-sm text-slate-600">@{selectedAgentData?.id}_ai</span>
                                <span className="text-sm text-slate-400">1d</span>
                              </div>
                              <p className="text-sm text-slate-800">
                                New policy analysis shows potential for positive impact on citizen wellbeing. 
                                We need evidence-based policy that prioritizes public interest. 📊
                              </p>
                              <div className="flex items-center space-x-4 mt-3 text-sm text-slate-600">
                                <span>💬 423</span>
                                <span>🔁 856</span>
                                <span>❤️ 1.5K</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstituentInteractionHub;
