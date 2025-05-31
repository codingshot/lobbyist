
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Upload, Brain, MessageSquare, Settings, Eye, Save } from "lucide-react";

const AgentCreationDashboard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [agentData, setAgentData] = useState({
    name: "",
    expertise: "",
    personality: {
      analytical: 80,
      empathetic: 60,
      assertive: 70,
      diplomatic: 50
    },
    backstory: "",
    dataSources: []
  });

  const steps = [
    { id: "basic", label: "Basic Info", icon: Settings },
    { id: "expertise", label: "Expertise", icon: Brain },
    { id: "personality", label: "Personality", icon: MessageSquare },
    { id: "backstory", label: "Backstory", icon: MessageSquare },
    { id: "data", label: "Data Sources", icon: Upload },
    { id: "preview", label: "Preview", icon: Eye }
  ];

  const expertiseAreas = [
    "EU Defence Policy",
    "Climate Change Policy", 
    "Healthcare Policy",
    "Education Policy",
    "Economic Policy",
    "International Relations",
    "Technology Policy",
    "Immigration Policy"
  ];

  const personalityTraits = [
    { key: "analytical", label: "Analytical", description: "Data-driven, logical reasoning" },
    { key: "empathetic", label: "Empathetic", description: "Understanding of human impact" },
    { key: "assertive", label: "Assertive", description: "Strong stance on issues" },
    { key: "diplomatic", label: "Diplomatic", description: "Seeks compromise and consensus" }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Your AI Political Agent</h1>
          <p className="text-slate-600">Design a representative that truly reflects your values and expertise</p>
          <Progress value={progress} className="mt-4 h-2" />
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Creation Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(index)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                      currentStep === index 
                        ? "bg-blue-100 text-blue-700 border-2 border-blue-200" 
                        : "hover:bg-slate-100 text-slate-600"
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                    <span className="font-medium">{step.label}</span>
                    {index < currentStep && (
                      <Badge className="ml-auto bg-green-100 text-green-700">✓</Badge>
                    )}
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Template Suggestions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Templates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  ReArm Europe Template
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  Climate Advocate
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  Healthcare Champion
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{steps[currentStep].label}</CardTitle>
                <CardDescription>
                  {currentStep === 0 && "Set up basic information for your agent"}
                  {currentStep === 1 && "Define the policy areas your agent will focus on"}
                  {currentStep === 2 && "Configure personality traits and communication style"}
                  {currentStep === 3 && "Create a compelling backstory and motivations"}
                  {currentStep === 4 && "Connect data sources for evidence-based positions"}
                  {currentStep === 5 && "Review and test your agent before deployment"}
                </CardDescription>
              </CardHeader>
              <CardContent>
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
                      <Label htmlFor="agent-description">Short Description</Label>
                      <Input 
                        id="agent-description" 
                        placeholder="e.g., Monitoring €800B Defence Spending"
                      />
                    </div>
                  </div>
                )}

                {/* Expertise Step */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label>Primary Expertise Area</Label>
                      <Select value={agentData.expertise} onValueChange={(value) => setAgentData({...agentData, expertise: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select expertise area" />
                        </SelectTrigger>
                        <SelectContent>
                          {expertiseAreas.map(area => (
                            <SelectItem key={area} value={area}>{area}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Policy Focus Keywords</Label>
                      <Input placeholder="e.g., defence, military, security, peace" />
                    </div>
                  </div>
                )}

                {/* Personality Step */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    {personalityTraits.map(trait => (
                      <div key={trait.key} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label>{trait.label}</Label>
                          <Badge variant="outline">{agentData.personality[trait.key]}%</Badge>
                        </div>
                        <p className="text-sm text-slate-600">{trait.description}</p>
                        <Slider
                          value={[agentData.personality[trait.key]]}
                          onValueChange={(value) => setAgentData({
                            ...agentData,
                            personality: {...agentData.personality, [trait.key]: value[0]}
                          })}
                          max={100}
                          step={5}
                          className="w-full"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Backstory Step */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="backstory">Agent Backstory</Label>
                      <Textarea
                        id="backstory"
                        placeholder="e.g., Virtual policy analyst created by EU transparency advocates, concerned about the militarisation's impact on social spending..."
                        className="min-h-32"
                        value={agentData.backstory}
                        onChange={(e) => setAgentData({...agentData, backstory: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>Core Values</Label>
                      <Input placeholder="e.g., transparency, peace, social justice" />
                    </div>
                  </div>
                )}

                {/* Data Sources Step */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-600 mb-2">Upload policy documents (PDF, CSV, JSON)</p>
                      <Button variant="outline">Choose Files</Button>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>EUR-Lex API Key</Label>
                        <Input placeholder="Enter API key for EU legislation" />
                      </div>
                      <div>
                        <Label>OpenSecrets API Key</Label>
                        <Input placeholder="Enter API key for lobbying data" />
                      </div>
                    </div>

                    <div>
                      <Label>Think Tank Sources</Label>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="eprs" />
                          <Label htmlFor="eprs">European Parliamentary Research Service (EPRS)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="atlantic" />
                          <Label htmlFor="atlantic">Atlantic Council</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="brookings" />
                          <Label htmlFor="brookings">Brookings Institution</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Preview Step */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="bg-slate-100 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Agent Summary</h3>
                      <p><strong>Name:</strong> {agentData.name || "Unnamed Agent"}</p>
                      <p><strong>Expertise:</strong> {agentData.expertise || "Not specified"}</p>
                      <p><strong>Personality:</strong> {Object.entries(agentData.personality).map(([key, value]) => `${key}: ${value}%`).join(", ")}</p>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Test Conversation</h3>
                      <div className="space-y-3">
                        <div className="bg-blue-100 rounded-lg p-3">
                          <p className="text-sm"><strong>You:</strong> How will the ReArm Europe initiative affect healthcare spending?</p>
                        </div>
                        <div className="bg-slate-100 rounded-lg p-3">
                          <p className="text-sm"><strong>Agent:</strong> Based on EPRS analysis, the €800B defence initiative may require cuts to healthcare budgets of 5-10%. I advocate for diplomacy-focused alternatives that protect social spending. What's your view on this trade-off?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                  >
                    Previous
                  </Button>
                  {currentStep < steps.length - 1 ? (
                    <Button onClick={() => setCurrentStep(currentStep + 1)}>
                      Next
                    </Button>
                  ) : (
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Save className="h-4 w-4 mr-2" />
                      Deploy Agent
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-100 rounded-lg p-3">
                    <h4 className="font-medium">{agentData.name || "Your Agent"}</h4>
                    <p className="text-sm text-slate-600">{agentData.expertise || "Policy Expert"}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-sm">Personality Traits</h5>
                    {Object.entries(agentData.personality).map(([trait, value]) => (
                      <div key={trait} className="flex justify-between text-sm">
                        <span className="capitalize">{trait}</span>
                        <span>{value}%</span>
                      </div>
                    ))}
                  </div>

                  {agentData.backstory && (
                    <div>
                      <h5 className="font-medium text-sm mb-2">Backstory</h5>
                      <p className="text-xs text-slate-600">{agentData.backstory.substring(0, 100)}...</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCreationDashboard;
