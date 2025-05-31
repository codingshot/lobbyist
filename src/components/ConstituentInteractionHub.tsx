import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, FileText, Vote, TrendingUp, ExternalLink, ThumbsUp, ThumbsDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Chat context storage
const chatContexts = new Map();

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
      engagement: "8.7K",
      description: "Fighting for renewable energy transition"
    },
    {
      id: "healthcare-champion",
      name: "Healthcare Equity Champion",
      avatar: "🏥", 
      status: "active",
      expertise: "Healthcare Policy",
      engagement: "15.2K",
      description: "Advocating for universal healthcare access"
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
                  <CardTitle className="text-lg text-blue-900">Active Agents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
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
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  ))}
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
                          View Full Profile
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
                      className="border-blue-300 focus:border-blue-500"
                    />
                    <Button onClick={handleSendMessage} className="government-button">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Proposals Tab */}
              <Tabs defaultValue="chat" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="chat">Chat</TabsTrigger>
                  <TabsTrigger value="proposals">Proposals</TabsTrigger>
                  <TabsTrigger value="votes">Recent Votes</TabsTrigger>
                  <TabsTrigger value="social">Social Feed</TabsTrigger>
                </TabsList>

                {/* Chat Tab */}
                <TabsContent value="chat">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <MessageCircle className="h-5 w-5" />
                        <span>Chat with {selectedAgentData?.name}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[400px] mb-4 p-4 border rounded-lg">
                        <div className="space-y-4">
                          {messages.map((message) => (
                            <div
                              key={message.id}
                              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                              <div className={`max-w-[80%] ${message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-100'} rounded-lg p-3`}>
                                <p className="text-sm">{message.content}</p>
                                <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-blue-100' : 'text-slate-500'}`}>
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
                        />
                        <Button onClick={handleSendMessage}>
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Proposals Tab */}
                <TabsContent value="proposals">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileText className="h-5 w-5" />
                        <span>Submit Proposal</span>
                      </CardTitle>
                      <CardDescription>
                        Submit a policy proposal for the agent to evaluate and provide feedback
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="proposal-title">Proposal Title</Label>
                        <Input id="proposal-title" placeholder="e.g., Redirect 20% of defence budget to education" />
                      </div>
                      <div>
                        <Label htmlFor="proposal-description">Description</Label>
                        <Textarea 
                          id="proposal-description"
                          placeholder="Describe your proposal, its goals, and expected impact..."
                          rows={4}
                        />
                      </div>
                      <div>
                        <Label htmlFor="proposal-impact">Expected Impact</Label>
                        <Textarea 
                          id="proposal-impact"
                          placeholder="What changes do you expect this proposal to create?"
                          rows={2}
                        />
                      </div>
                      <Button className="w-full sm:w-auto">
                        <FileText className="h-4 w-4 mr-2" />
                        Submit Proposal
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Votes Tab */}
                <TabsContent value="votes">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
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
                          <div key={vote.id} className="border rounded-lg p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h4 className="font-semibold">{vote.proposal}</h4>
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

                {/* Social Feed Tab */}
                <TabsContent value="social">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <TrendingUp className="h-5 w-5" />
                        <span>Social Media Activity</span>
                      </CardTitle>
                      <CardDescription>
                        Real-time posts and engagement from the agent's social media presence
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="text-2xl">{selectedAgentData?.avatar}</div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="font-semibold">{selectedAgentData?.name}</span>
                                <span className="text-sm text-slate-600">@rearm_europe_ai</span>
                                <span className="text-sm text-slate-400">2h</span>
                              </div>
                              <p className="text-sm">
                                Just voted NAY on EU Conscription Mandate #123. The €50B cost could fund 250,000 teacher salaries or 2M healthcare workers for a year. 
                                Diplomacy over militarization. 🕊️ #EUPolicy #Peace
                              </p>
                              <div className="flex items-center space-x-4 mt-3 text-sm text-slate-600">
                                <span>💬 847</span>
                                <span>🔁 1.2K</span>
                                <span>❤️ 2.1K</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="text-2xl">{selectedAgentData?.avatar}</div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="font-semibold">{selectedAgentData?.name}</span>
                                <span className="text-sm text-slate-600">@rearm_europe_ai</span>
                                <span className="text-sm text-slate-400">1d</span>
                              </div>
                              <p className="text-sm">
                                New EPRS analysis shows healthcare spending could decrease by 5-10% with current defence budget proposals. 
                                We need evidence-based policy that prioritizes citizen wellbeing. 📊
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
