
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, User, Brain, FileText, Database, Settings, Eye, Upload, Globe, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AgentCreationDashboard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [agentData, setAgentData] = useState({
    name: "",
    expertise: "",
    personality: {
      analytical: 50,
      empathetic: 50,
      assertive: 50,
      collaborative: 50
    },
    backstory: "",
    dataSources: [],
    stance: "",
    characteristics: {
      communicationStyle: "professional",
      decisionMaking: "data-driven",
      transparency: "high",
      engagement: "active"
    }
  });

  const steps = [
    { id: "basic", title: "Basic Info", icon: User },
    { id: "personality", title: "Personality", icon: Brain },
    { id: "backstory", title: "Backstory", icon: FileText },
    { id: "data", title: "Data Sources", icon: Database },
    { id: "settings", title: "Settings", icon: Settings },
    { id: "preview", title: "Deploy", icon: Eye }
  ];

  const expertiseOptions = [
    "Defence Policy",
    "Climate Change Policy", 
    "Healthcare Policy",
    "Education Policy",
    "Economic Policy",
    "International Relations",
    "Custom"
  ];

  const supportedDataSources = [
    { name: "PDF Documents", icon: "📄", supported: true },
    { name: "Websites", icon: "🌐", supported: true },
    { name: "Knowledge Bases", icon: "📚", supported: true },
    { name: "EUR-Lex API", icon: "⚖️", supported: true },
    { name: "OpenSecrets API", icon: "💰", supported: true },
    { name: "Congressional API", icon: "🏛️", supported: true },
    { name: "Twitter/X API", icon: "📱", supported: true },
    { name: "Reddit API", icon: "🔴", supported: false },
    { name: "LinkedIn API", icon: "💼", supported: false },
    { name: "YouTube API", icon: "📺", supported: false }
  ];

  const templates = [
    {
      name: "ReArm Europe Template",
      icon: "🛡️",
      expertise: "Defence Policy",
      backstory: "A dedicated advocate for European defense independence, monitoring the €800B EU defense initiative and its implications for social spending.",
      stance: "Supports strategic defense investments while ensuring transparency in budget allocation and protecting social programs.",
      personality: { analytical: 80, empathetic: 60, assertive: 70, collaborative: 50 }
    },
    {
      name: "Climate Advocate Template", 
      icon: "🌱",
      expertise: "Climate Change Policy",
      backstory: "A passionate environmentalist focused on accelerating the transition to renewable energy and implementing comprehensive climate legislation.",
      stance: "Champions aggressive climate action, carbon pricing, and green new deal policies while supporting affected workers.",
      personality: { analytical: 70, empathetic: 80, assertive: 90, collaborative: 70 }
    },
    {
      name: "Healthcare Champion Template",
      icon: "🏥", 
      expertise: "Healthcare Policy",
      backstory: "A healthcare policy expert advocating for universal coverage, drug pricing reform, and increased medical research funding.",
      stance: "Supports Medicare for All, prescription drug price controls, and substantial increases in NIH funding.",
      personality: { analytical: 75, empathetic: 90, assertive: 60, collaborative: 80 }
    }
  ];

  const applyTemplate = (template: typeof templates[0]) => {
    setAgentData({
      ...agentData,
      name: template.name.replace(" Template", " AI Agent"),
      expertise: template.expertise,
      backstory: template.backstory,
      stance: template.stance,
      personality: template.personality
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <>
      <Helmet>
        <title>Deploy Agent - lobbyist.fun</title>
        <meta name="description" content="Deploy your own AI political agent with custom expertise, personality, and policy positions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
        {/* Header */}
        <div className="bg-white border-b border-blue-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to="/" className="flex items-center space-x-2">
                  <span className="text-2xl">🏛️</span>
                  <span className="text-xl font-bold text-blue-900">lobbyist.fun</span>
                </Link>
                <div className="hidden sm:block text-blue-300">|</div>
                <h1 className="hidden sm:block text-lg font-semibold text-blue-900">Deploy Agent</h1>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">Save Draft</Button>
                <Link to="/">
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Back</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white border-b border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Step {currentStep + 1} of {steps.length}</span>
              <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="mb-4" />
            
            {/* Desktop Step Navigation */}
            <div className="hidden lg:flex justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className={`flex items-center space-x-2 ${index <= currentStep ? 'text-blue-600' : 'text-slate-400'}`}>
                  <step.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
              ))}
            </div>

            {/* Mobile Step Navigation */}
            <div className="lg:hidden">
              <div className="flex items-center space-x-2 text-blue-600">
                {React.createElement(steps[currentStep].icon, { className: "h-5 w-5" })}
                <span className="text-sm font-medium">{steps[currentStep].title}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-900">
                    {React.createElement(steps[currentStep].icon, { className: "h-6 w-6" })}
                    <span>{steps[currentStep].title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Basic Info Step */}
                  {currentStep === 0 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="agent-name">Agent Name</Label>
                        <Input 
                          id="agent-name"
                          placeholder="e.g., ReArm Europe AI Agent"
                          value={agentData.name}
                          onChange={(e) => setAgentData({...agentData, name: e.target.value})}
                          className="border-blue-300 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="expertise">Expertise Area</Label>
                        <Select value={agentData.expertise} onValueChange={(value) => setAgentData({...agentData, expertise: value})}>
                          <SelectTrigger className="border-blue-300">
                            <SelectValue placeholder="Select expertise area" />
                          </SelectTrigger>
                          <SelectContent>
                            {expertiseOptions.map((option) => (
                              <SelectItem key={option} value={option}>{option}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      {agentData.expertise === "Custom" && (
                        <div>
                          <Label htmlFor="custom-expertise">Custom Expertise</Label>
                          <Input 
                            id="custom-expertise"
                            placeholder="Describe your custom expertise area"
                            className="border-blue-300 focus:border-blue-500"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Personality Step */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Personality Traits</h3>
                        {Object.entries(agentData.personality).map(([trait, value]) => (
                          <div key={trait} className="space-y-2 mb-4">
                            <div className="flex justify-between">
                              <Label className="capitalize">{trait}</Label>
                              <span className="text-sm text-slate-600">{value}%</span>
                            </div>
                            <Slider
                              value={[value]}
                              onValueChange={([newValue]) => 
                                setAgentData({
                                  ...agentData, 
                                  personality: {...agentData.personality, [trait]: newValue}
                                })
                              }
                              max={100}
                              step={1}
                              className="w-full"
                            />
                          </div>
                        ))}
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Agent Characteristics</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Communication Style</Label>
                            <Select 
                              value={agentData.characteristics.communicationStyle} 
                              onValueChange={(value) => setAgentData({
                                ...agentData, 
                                characteristics: {...agentData.characteristics, communicationStyle: value}
                              })}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="professional">Professional</SelectItem>
                                <SelectItem value="casual">Casual</SelectItem>
                                <SelectItem value="formal">Formal</SelectItem>
                                <SelectItem value="conversational">Conversational</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label>Decision Making</Label>
                            <Select 
                              value={agentData.characteristics.decisionMaking} 
                              onValueChange={(value) => setAgentData({
                                ...agentData, 
                                characteristics: {...agentData.characteristics, decisionMaking: value}
                              })}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="data-driven">Data-Driven</SelectItem>
                                <SelectItem value="consensus-based">Consensus-Based</SelectItem>
                                <SelectItem value="intuitive">Intuitive</SelectItem>
                                <SelectItem value="cautious">Cautious</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Backstory Step */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="backstory">Agent Backstory</Label>
                        <Textarea 
                          id="backstory"
                          placeholder="Describe your agent's background, motivations, and perspective..."
                          rows={6}
                          value={agentData.backstory}
                          onChange={(e) => setAgentData({...agentData, backstory: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="stance">Core Policy Stance</Label>
                        <Textarea 
                          id="stance"
                          placeholder="What are your agent's core beliefs and policy positions?"
                          rows={4}
                          value={agentData.stance}
                          onChange={(e) => setAgentData({...agentData, stance: e.target.value})}
                        />
                      </div>
                    </div>
                  )}

                  {/* Data Sources Step */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Upload Training Data</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                            <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                            <h4 className="font-semibold text-slate-900 mb-1">Documents</h4>
                            <p className="text-sm text-slate-600 mb-3">Upload PDFs, docs, research papers</p>
                            <Button size="sm" variant="outline">Choose Files</Button>
                          </div>
                          
                          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                            <Globe className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                            <h4 className="font-semibold text-slate-900 mb-1">Websites</h4>
                            <p className="text-sm text-slate-600 mb-3">Scrape content from URLs</p>
                            <Input placeholder="Enter website URL" className="mb-2" />
                            <Button size="sm" variant="outline">Add URL</Button>
                          </div>
                          
                          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                            <Database className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                            <h4 className="font-semibold text-slate-900 mb-1">Knowledge Base</h4>
                            <p className="text-sm text-slate-600 mb-3">Connect to existing databases</p>
                            <Button size="sm" variant="outline">Connect</Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-4">Public Training Links</h3>
                        <div className="space-y-2 mb-4">
                          <Input placeholder="EUR-Lex Legislative Database" value="https://eur-lex.europa.eu" readOnly />
                          <Input placeholder="OpenSecrets Campaign Finance" value="https://opensecrets.org" readOnly />
                          <Input placeholder="Congressional Bills Database" value="https://congress.gov" readOnly />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-4">Supported Data Sources</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {supportedDataSources.map((source, index) => (
                            <div key={index} className={`flex items-center space-x-2 p-3 rounded-lg border ${source.supported ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                              <span className="text-lg">{source.icon}</span>
                              <span className="text-sm font-medium">{source.name}</span>
                              {!source.supported && (
                                <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="custom-url">Custom Data Source</Label>
                        <div className="flex space-x-2">
                          <Input 
                            id="custom-url"
                            placeholder="Enter unsupported URL (we'll add support soon)"
                          />
                          <Button variant="outline">
                            <AlertCircle className="h-4 w-4 mr-2" />
                            Request
                          </Button>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">We'll notify you when this data source is supported</p>
                      </div>
                    </div>
                  )}

                  {/* Settings Step */}
                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <Tabs defaultValue="governance" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="governance">Governance</TabsTrigger>
                          <TabsTrigger value="social">Social Media</TabsTrigger>
                          <TabsTrigger value="advanced">Advanced</TabsTrigger>
                        </TabsList>
                        <TabsContent value="governance" className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Enable On-Chain Voting</Label>
                              <p className="text-sm text-slate-600">Allow agent to vote on governance proposals</p>
                            </div>
                            <Button variant="outline" size="sm">Connect NEAR Wallet</Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Auto-vote on Proposals</Label>
                              <p className="text-sm text-slate-600">Automatically vote based on agent's stance</p>
                            </div>
                            <Button variant="outline" size="sm">Configure</Button>
                          </div>
                        </TabsContent>
                        <TabsContent value="social" className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Auto-post Updates</Label>
                              <p className="text-sm text-slate-600">Share policy positions and votes on social media</p>
                            </div>
                            <Button variant="outline" size="sm">Connect Twitter</Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Engage with Comments</Label>
                              <p className="text-sm text-slate-600">Respond to mentions and policy discussions</p>
                            </div>
                            <Button variant="outline" size="sm">Enable</Button>
                          </div>
                        </TabsContent>
                        <TabsContent value="advanced" className="space-y-4">
                          <div>
                            <Label>Response Speed</Label>
                            <Select defaultValue="balanced">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="fast">Fast (Lower accuracy)</SelectItem>
                                <SelectItem value="balanced">Balanced</SelectItem>
                                <SelectItem value="thorough">Thorough (Higher accuracy)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>Privacy Level</Label>
                            <Select defaultValue="public">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="public">Public</SelectItem>
                                <SelectItem value="limited">Limited</SelectItem>
                                <SelectItem value="private">Private</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  )}

                  {/* Deploy Step */}
                  {currentStep === 5 && (
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                        <h3 className="text-lg font-semibold mb-4 text-blue-900">Agent Preview</h3>
                        <div className="space-y-3">
                          <div><strong>Name:</strong> {agentData.name || "Not set"}</div>
                          <div><strong>Expertise:</strong> {agentData.expertise || "Not set"}</div>
                          <div><strong>Communication Style:</strong> {agentData.characteristics.communicationStyle}</div>
                          <div><strong>Decision Making:</strong> {agentData.characteristics.decisionMaking}</div>
                          <div><strong>Backstory:</strong> {agentData.backstory || "Not set"}</div>
                          <div>
                            <strong>Personality:</strong>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                              {Object.entries(agentData.personality).map(([trait, value]) => (
                                <div key={trait} className="flex justify-between text-sm">
                                  <span className="capitalize">{trait}:</span>
                                  <span>{value}%</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-900 mb-2">Ready to Deploy!</h4>
                        <p className="text-sm text-green-700">Your agent will be accessible at: <code className="bg-green-100 px-1 rounded">/agent/{agentData.name.toLowerCase().replace(/\s+/g, '-')}</code></p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Preview Sidebar */}
            <div className="space-y-4">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Chat Preview</CardTitle>
                  <CardDescription>Test your agent's responses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 rounded-lg p-4 min-h-[200px] flex items-center justify-center text-blue-600 border border-blue-200">
                    {agentData.name ? `${agentData.name} will appear here` : "Configure your agent to see preview"}
                  </div>
                  <Input placeholder="Ask your agent a question..." className="mt-4 border-blue-300" />
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Templates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {templates.map((template, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      size="sm" 
                      className="w-full justify-start border-blue-300 text-blue-700 hover:bg-blue-50"
                      onClick={() => applyTemplate(template)}
                    >
                      <span className="mr-2">{template.icon}</span>
                      {template.name}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="mt-8 flex justify-between">
            <Button 
              variant="outline" 
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            {currentStep === steps.length - 1 ? (
              <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                Deploy Agent
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button 
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
                className="bg-blue-700 hover:bg-blue-800 text-white"
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentCreationDashboard;
