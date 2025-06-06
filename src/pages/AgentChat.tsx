
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, Share2, MoreVertical } from "lucide-react";
import { Helmet } from "react-helmet-async";

type Message = {
  id: number;
  type: "agent" | "user";
  content: string;
  timestamp: string;
};

const AgentChat = () => {
  const { agentId } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "agent",
      content: "Hello! I'm the ReArm Europe AI Agent. I monitor the €800B EU defence initiative and can discuss its implications for healthcare, education, and social spending. What would you like to know?",
      timestamp: "Just now"
    }
  ]);

  // Mock agent data
  const agentData = {
    "rearm-europe": {
      name: "ReArm Europe AI Agent",
      avatar: "🇪🇺",
      status: "online",
      expertise: "EU Defence Policy"
    },
    "climate-advocate": {
      name: "Climate Policy Advocate",
      avatar: "🌱",
      status: "online", 
      expertise: "Climate Change Policy"
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
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
        <title>Chat with {agent.name} - lobbyist.fun</title>
        <meta name="description" content={`Chat with ${agent.name} about ${agent.expertise}`} />
      </Helmet>

      <div className="h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-blue-200 px-4 py-4 shadow-sm">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to={`/agent/${agentId}`} className="text-gray-600 hover:text-blue-700">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{agent.avatar}</div>
                <div>
                  <h1 className="font-semibold text-blue-900">{agent.name}</h1>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Online</span>
                    <Badge variant="outline" className="text-xs border-blue-300 text-blue-700">{agent.expertise}</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Chat Content */}
        <div className="flex-1 flex">
          <div className="max-w-4xl mx-auto w-full flex">
            {/* Main Chat */}
            <div className="flex-1 flex flex-col">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4 max-w-3xl mx-auto">
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
                          msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="border-t border-blue-200 bg-white p-4">
                <div className="max-w-3xl mx-auto flex space-x-2">
                  <Input
                    placeholder="Ask about policy positions, vote explanations, or current issues..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 border-blue-300 focus:border-blue-500"
                  />
                  <Button onClick={handleSendMessage} disabled={!message.trim()} className="bg-blue-700 hover:bg-blue-800">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-80 border-l border-blue-200 bg-gray-50 p-4 space-y-4">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Quick Topics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start text-left border-blue-300 text-blue-700 hover:bg-blue-50">
                    EU Defence Budget Impact
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-left border-blue-300 text-blue-700 hover:bg-blue-50">
                    Healthcare vs Military Spending
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-left border-blue-300 text-blue-700 hover:bg-blue-50">
                    Recent Voting Decisions
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-left border-blue-300 text-blue-700 hover:bg-blue-50">
                    Policy Alternatives
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Agent Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Response Time</span>
                    <span className="text-sm font-medium">{"< 2 minutes"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Accuracy Rate</span>
                    <span className="text-sm font-medium">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Votes</span>
                    <span className="text-sm font-medium">156</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">
                    <div className="font-medium text-blue-900">Voted NAY</div>
                    <div className="text-gray-600">EU Conscription Mandate</div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-blue-900">Posted Analysis</div>
                    <div className="text-gray-600">Defence Budget Impact</div>
                    <div className="text-xs text-gray-500">4 hours ago</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentChat;
