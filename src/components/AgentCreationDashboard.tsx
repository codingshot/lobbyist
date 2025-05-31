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
import { ArrowLeft, ArrowRight, User, Brain, FileText, Database, Settings, Eye, Upload, Link as LinkIcon } from "lucide-react";
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
    stance: ""
  });

  const steps = [
    { id: "basic", title: "Basic Info", icon: User },
    { id: "personality", title: "Personality", icon: Brain },
    { id: "backstory", title: "Backstory", icon: FileText },
    { id: "data", title: "Data Sources", icon: Database },
    { id: "settings", title: "Settings", icon: Settings },
    { id: "preview", title: "Preview", icon: Eye }
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
        <title>Create Agent - lobbyist.fun</title>
        <meta name="description" content="Create your own AI political agent with custom expertise, personality, and policy positions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to="/" className="flex items-center space-x-2">
                  <span className="text-2xl">🏛️</span>
                  <span className="text-xl font-bold text-slate-900">lobbyist.fun</span>
                </Link>
                <div className="hidden sm:block text-slate-400">|</div>
                <h1 className="hidden sm:block text-lg font-semibold text-slate-900">Create Agent</h1>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Save Draft</Button>
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Back</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-slate-600">Step {currentStep + 1} of {steps.length}</span>
              <span className="text-sm text-slate-600">{Math.round(progress)}% Complete</span>
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
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
                        />
                      </div>
                      <div>
                        <Label htmlFor="expertise">Expertise Area</Label>
                        <Select value={agentData.expertise} onValueChange={(value) => setAgentData({...agentData, expertise: value})}>
                          <SelectTrigger>
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
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Personality Step */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      {Object.entries(agentData.personality).map(([trait, value]) => (
                        <div key={trait} className="space-y-2">
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
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                        <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Upload Data Sources</h3>
                        <p className="text-slate-600 mb-4">Upload PDFs, CSVs, or connect to APIs for your agent's knowledge base</p>
                        <Button>
                          <Upload className="h-4 w-4 mr-2" />
                          Choose Files
                        </Button>
                      </div>
                      <div>
                        <Label htmlFor="api-sources">API Sources</Label>
                        <div className="space-y-2">
                          <Input placeholder="EUR-Lex API Key" />
                          <Input placeholder="OpenSecrets API Key" />
                          <Button variant="outline" size="sm">
                            <LinkIcon className="h-4 w-4 mr-2" />
                            Add More APIs
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Settings Step */}
                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <Tabs defaultValue="governance" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="governance">Governance</TabsTrigger>
                          <TabsTrigger value="social">Social Media</TabsTrigger>
                        </TabsList>
                        <TabsContent value="governance" className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Enable On-Chain Voting</Label>
                              <p className="text-sm text-slate-600">Allow agent to vote on governance proposals</p>
                            </div>
                            <Button variant="outline" size="sm">Connect NEAR Wallet</Button>
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
                        </TabsContent>
                      </Tabs>
                    </div>
                  )}

                  {/* Preview Step */}
                  {currentStep === 5 && (
                    <div className="space-y-4">
                      <div className="bg-slate-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Agent Preview</h3>
                        <div className="space-y-3">
                          <div><strong>Name:</strong> {agentData.name || "Not set"}</div>
                          <div><strong>Expertise:</strong> {agentData.expertise || "Not set"}</div>
                          <div><strong>Backstory:</strong> {agentData.backstory || "Not set"}</div>
                          <div>
                            <strong>Personality:</strong>
                            <div className="mt-2 space-y-1">
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
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Preview Sidebar */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Chat Preview</CardTitle>
                  <CardDescription>Test your agent's responses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-50 rounded-lg p-4 min-h-[200px] flex items-center justify-center text-slate-500">
                    {agentData.name ? `${agentData.name} will appear here` : "Configure your agent to see preview"}
                  </div>
                  <Input placeholder="Ask your agent a question..." className="mt-4" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Templates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <span className="mr-2">🛡️</span>
                    ReArm Europe Template
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <span className="mr-2">🌱</span>
                    Climate Advocate Template
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <span className="mr-2">🏥</span>
                    Healthcare Champion Template
                  </Button>
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
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            {currentStep === steps.length - 1 ? (
              <Button className="bg-blue-600 hover:bg-blue-700">
                Deploy Agent
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button 
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
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
