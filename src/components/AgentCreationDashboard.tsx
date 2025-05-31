import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  Lightbulb, 
  Users, 
  MessageSquare, 
  Vote, 
  Settings, 
  Plus,
  Bot,
  Brain,
  Zap,
  Shield,
  Globe,
  ChevronLeft,
  ChevronRight,
  Check,
  Upload,
  FileText,
  Link as LinkIcon,
  BookOpen
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const AgentCreationDashboard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [agentName, setAgentName] = useState("");
  const [agentDescription, setAgentDescription] = useState("");
  const [selectedAI, setSelectedAI] = useState("");
  const [personality, setPersonality] = useState({
    analytical: 50,
    empathetic: 50,
    assertive: 50,
    collaborative: 50
  });
  const [knowledgeFiles, setKnowledgeFiles] = useState<File[]>([]);
  const [knowledgeUrls, setKnowledgeUrls] = useState<string[]>([]);
  const [newUrl, setNewUrl] = useState("");

  const steps = [
    { id: 0, title: "Choose Template", icon: Lightbulb },
    { id: 1, title: "Basic Info", icon: Users },
    { id: 2, title: "AI Configuration", icon: Brain },
    { id: 3, title: "Knowledge Base", icon: BookOpen },
    { id: 4, title: "Personality", icon: MessageSquare },
    { id: 5, title: "Policies", icon: Vote },
    { id: 6, title: "Review", icon: Settings }
  ];

  const templates = [
    {
      id: "progressive",
      name: "Progressive Advocate",
      description: "Focus on social justice, climate action, and economic equality",
      avatar: "🌱",
      color: "green",
      policies: ["Climate Action", "Healthcare Access", "Education Funding"]
    },
    {
      id: "conservative",
      name: "Constitutional Conservative", 
      description: "Emphasis on limited government, fiscal responsibility, and traditional values",
      avatar: "🇺🇸",
      color: "red",
      policies: ["Fiscal Responsibility", "Constitutional Rights", "Strong Defense"]
    },
    {
      id: "libertarian",
      name: "Liberty Champion",
      description: "Maximum individual freedom with minimal government intervention",
      avatar: "🗽",
      color: "yellow",
      policies: ["Individual Rights", "Free Markets", "Limited Government"]
    },
    {
      id: "centrist",
      name: "Pragmatic Centrist",
      description: "Balanced approach seeking practical solutions across party lines",
      avatar: "⚖️",
      color: "blue", 
      policies: ["Bipartisan Solutions", "Evidence-Based Policy", "Moderate Approach"]
    }
  ];

  const aiModels = [
    {
      id: "gpt-4",
      name: "GPT-4",
      provider: "OpenAI",
      description: "Most advanced reasoning and analysis",
      cost: "High",
      speed: "Medium"
    },
    {
      id: "claude-3",
      name: "Claude-3 Sonnet",
      provider: "Anthropic", 
      description: "Excellent at nuanced political discussion",
      cost: "Medium",
      speed: "Fast"
    },
    {
      id: "gpt-3.5-turbo",
      name: "GPT-3.5 Turbo",
      provider: "OpenAI",
      description: "Fast and cost-effective for most tasks",
      cost: "Low",
      speed: "Very Fast"
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setAgentName(template.name);
      setAgentDescription(template.description);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setKnowledgeFiles([...knowledgeFiles, ...files]);
  };

  const removeFile = (index: number) => {
    setKnowledgeFiles(knowledgeFiles.filter((_, i) => i !== index));
  };

  const addUrl = () => {
    if (newUrl.trim()) {
      setKnowledgeUrls([...knowledgeUrls, newUrl.trim()]);
      setNewUrl("");
    }
  };

  const removeUrl = (index: number) => {
    setKnowledgeUrls(knowledgeUrls.filter((_, i) => i !== index));
  };

  return (
    <>
      <Helmet>
        <title>Create Agent - lobbyist.fun</title>
        <meta name="description" content="Create your own AI political agent" />
      </Helmet>

      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Mobile Responsive Progress Steps */}
          <div className="mb-8">
            {/* Desktop view */}
            <div className="hidden lg:flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                    index <= currentStep 
                      ? 'bg-blue-600 border-blue-600 text-white' 
                      : 'border-slate-300 text-slate-400'
                  }`}>
                    {index < currentStep ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      <step.icon className="h-6 w-6" />
                    )}
                  </div>
                  <div className="ml-3">
                    <div className={`text-sm font-medium ${
                      index <= currentStep ? 'text-blue-900' : 'text-slate-500'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 mx-4 ${
                      index < currentStep ? 'bg-blue-600' : 'bg-slate-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile/Tablet view */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between mb-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  'bg-blue-600 border-blue-600 text-white'
                }`}>
                  {(() => {
                    const CurrentIcon = steps[currentStep].icon;
                    return <CurrentIcon className="h-6 w-6" />;
                  })()}
                </div>
                <div className="flex-1 mx-4">
                  <div className="text-lg font-medium text-blue-900">
                    {steps[currentStep].title}
                  </div>
                  <div className="text-sm text-slate-500">
                    Step {currentStep + 1} of {steps.length}
                  </div>
                </div>
              </div>
              <Progress value={((currentStep + 1) / steps.length) * 100} className="h-2" />
            </div>
          </div>

          {/* Step Content */}
          <Card className="government-card mb-8">
            <CardContent className="p-8">
              {/* Step 0: Choose Template */}
              {currentStep === 0 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">Choose Your Agent Template</h2>
                    <p className="text-slate-600">Start with a pre-configured template or build from scratch</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {templates.map((template) => (
                      <Card 
                        key={template.id}
                        className={`cursor-pointer transition-all hover:shadow-lg ${
                          selectedTemplate === template.id 
                            ? 'ring-2 ring-blue-500 bg-blue-50' 
                            : 'hover:bg-slate-50'
                        }`}
                        onClick={() => handleTemplateSelect(template.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="text-4xl">{template.avatar}</div>
                            <div>
                              <h3 className="font-bold text-blue-900">{template.name}</h3>
                              <p className="text-sm text-slate-600">{template.description}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {template.policies.map((policy) => (
                              <Badge key={policy} variant="outline" className="border-blue-300 text-blue-700">
                                {policy}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 1: Basic Info */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">Agent Basic Information</h2>
                    <p className="text-slate-600">Define your agent's identity and purpose</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="agent-name" className="text-slate-800">Agent Name</Label>
                        <Input
                          id="agent-name"
                          value={agentName}
                          onChange={(e) => setAgentName(e.target.value)}
                          placeholder="e.g., Progressive Climate Advocate"
                          className="border-blue-300 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="agent-description" className="text-slate-800">Description</Label>
                        <Textarea
                          id="agent-description"
                          value={agentDescription}
                          onChange={(e) => setAgentDescription(e.target.value)}
                          placeholder="Describe your agent's mission and focus areas..."
                          rows={4}
                          className="border-blue-300 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-4">Preview</h3>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-3xl">
                          {selectedTemplate ? templates.find(t => t.id === selectedTemplate)?.avatar : '🤖'}
                        </div>
                        <div>
                          <div className="font-medium text-blue-900">{agentName || 'Agent Name'}</div>
                          <div className="text-sm text-slate-600">Active</div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-700">{agentDescription || 'Agent description will appear here...'}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: AI Configuration */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">AI Model Configuration</h2>
                    <p className="text-slate-600">Choose the AI model that will power your agent</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {aiModels.map((model) => (
                      <Card 
                        key={model.id}
                        className={`cursor-pointer transition-all hover:shadow-lg ${
                          selectedAI === model.id 
                            ? 'ring-2 ring-blue-500 bg-blue-50' 
                            : 'hover:bg-slate-50'
                        }`}
                        onClick={() => setSelectedAI(model.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <Brain className="h-8 w-8 text-blue-600" />
                              <div>
                                <h3 className="font-bold text-blue-900">{model.name}</h3>
                                <p className="text-sm text-slate-600">by {model.provider}</p>
                                <p className="text-sm text-slate-700 mt-1">{model.description}</p>
                              </div>
                            </div>
                            <div className="text-right space-y-1">
                              <Badge variant="outline" className="border-blue-300 text-blue-700">
                                Cost: {model.cost}
                              </Badge>
                              <br />
                              <Badge variant="outline" className="border-green-300 text-green-700">
                                Speed: {model.speed}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Knowledge Base */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">Knowledge Base Training</h2>
                    <p className="text-slate-600">Upload documents or provide links to train your agent on specific knowledge</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {/* File Upload Section */}
                      <Card className="government-card">
                        <CardHeader>
                          <CardTitle className="text-blue-900 flex items-center">
                            <Upload className="h-5 w-5 mr-2" />
                            Upload Documents
                          </CardTitle>
                          <CardDescription>
                            Upload PDFs, text files, or documents to train your agent
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <Input
                              type="file"
                              multiple
                              accept=".pdf,.txt,.doc,.docx,.md"
                              onChange={handleFileUpload}
                              className="border-blue-300 focus:border-blue-500"
                            />
                          </div>
                          
                          {knowledgeFiles.length > 0 && (
                            <div className="space-y-2">
                              <Label className="text-slate-800">Uploaded Files:</Label>
                              {knowledgeFiles.map((file, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-blue-50 rounded">
                                  <div className="flex items-center space-x-2">
                                    <FileText className="h-4 w-4 text-blue-600" />
                                    <span className="text-sm text-slate-800">{file.name}</span>
                                  </div>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => removeFile(index)}
                                    className="h-6 w-6 p-0"
                                  >
                                    ×
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>

                      {/* URL Links Section */}
                      <Card className="government-card">
                        <CardHeader>
                          <CardTitle className="text-blue-900 flex items-center">
                            <LinkIcon className="h-5 w-5 mr-2" />
                            Web Resources
                          </CardTitle>
                          <CardDescription>
                            Add URLs to websites, articles, or online resources
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex space-x-2">
                            <Input
                              value={newUrl}
                              onChange={(e) => setNewUrl(e.target.value)}
                              placeholder="https://example.com/policy-document"
                              className="border-blue-300 focus:border-blue-500"
                            />
                            <Button onClick={addUrl} className="government-button">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          {knowledgeUrls.length > 0 && (
                            <div className="space-y-2">
                              <Label className="text-slate-800">Added URLs:</Label>
                              {knowledgeUrls.map((url, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-blue-50 rounded">
                                  <div className="flex items-center space-x-2">
                                    <LinkIcon className="h-4 w-4 text-blue-600" />
                                    <span className="text-sm text-slate-800 truncate">{url}</span>
                                  </div>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => removeUrl(index)}
                                    className="h-6 w-6 p-0"
                                  >
                                    ×
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-4">Knowledge Base Preview</h3>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded border">
                          <div className="text-sm text-slate-600 mb-2">Training Data Summary:</div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-800">Documents:</span>
                              <span className="text-blue-600">{knowledgeFiles.length} files</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-800">Web Resources:</span>
                              <span className="text-blue-600">{knowledgeUrls.length} URLs</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-sm text-slate-600">
                          <strong>Tip:</strong> Adding relevant documents and resources will help your agent provide more accurate and informed responses about specific topics.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Personality */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">Personality Configuration</h2>
                    <p className="text-slate-600">Fine-tune how your agent communicates and makes decisions</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {Object.entries(personality).map(([trait, value]) => (
                        <div key={trait} className="space-y-3">
                          <div className="flex justify-between items-center">
                            <Label className="capitalize font-medium text-slate-800">{trait}</Label>
                            <span className="text-sm text-slate-600">{value}%</span>
                          </div>
                          <Slider
                            value={[value]}
                            onValueChange={(newValue) => 
                              setPersonality(prev => ({ ...prev, [trait]: newValue[0] }))
                            }
                            max={100}
                            step={1}
                            className="w-full"
                          />
                          <div className="text-xs text-slate-500">
                            {trait === 'analytical' && 'How data-driven and logical the agent is'}
                            {trait === 'empathetic' && 'How much the agent considers human emotions and feelings'}
                            {trait === 'assertive' && 'How strongly the agent expresses its views'}
                            {trait === 'collaborative' && 'How willing the agent is to compromise and work with others'}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-4">Personality Preview</h3>
                      <div className="space-y-3">
                        {Object.entries(personality).map(([trait, value]) => (
                          <div key={trait} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="capitalize text-slate-800">{trait}</span>
                              <span className="text-slate-600">{value}%</span>
                            </div>
                            <Progress value={value} className="h-2" />
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 p-4 bg-white rounded border">
                        <div className="text-sm text-slate-600 mb-2">Sample Response:</div>
                        <div className="text-sm text-slate-800 italic">
                          "Based on the data I've analyzed, I believe this policy could have significant implications for healthcare spending. While I understand the concerns about defense priorities, we must consider the human impact..."
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Policies */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">Policy Configuration</h2>
                    <p className="text-slate-600">Define key policy positions and voting preferences</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="policy-area" className="text-slate-800">Policy Area</Label>
                        <Input
                          id="policy-area"
                          placeholder="e.g., Climate Change"
                          className="border-blue-300 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <Label htmlFor="policy-position" className="text-slate-800">Policy Position</Label>
                        <Textarea
                          id="policy-position"
                          placeholder="e.g., Support carbon tax and renewable energy subsidies"
                          rows={4}
                          className="border-blue-300 focus:border-blue-500"
                        />
                      </div>

                      <Button className="government-button">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Policy
                      </Button>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-4">Policy Preview</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-white rounded border">
                          <div className="font-medium text-blue-900">Climate Change</div>
                          <div className="text-sm text-slate-700">Support carbon tax and renewable energy subsidies</div>
                        </div>
                        <div className="p-4 bg-white rounded border">
                          <div className="font-medium text-blue-900">Healthcare</div>
                          <div className="text-sm text-slate-700">Advocate for universal healthcare access</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Review */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">Review and Deploy</h2>
                    <p className="text-slate-600">Finalize your agent configuration and deploy</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <Card className="government-card">
                        <CardHeader>
                          <CardTitle className="text-blue-900">Basic Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium text-slate-800">Agent Name</span>
                            <span className="text-slate-600">{agentName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-slate-800">Description</span>
                            <span className="text-slate-600">{agentDescription}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="government-card">
                        <CardHeader>
                          <CardTitle className="text-blue-900">AI Configuration</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium text-slate-800">AI Model</span>
                            <span className="text-slate-600">{selectedAI}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="government-card">
                        <CardHeader>
                          <CardTitle className="text-blue-900">Knowledge Base</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium text-slate-800">Documents</span>
                            <span className="text-slate-600">{knowledgeFiles.length} files</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-slate-800">Web Resources</span>
                            <span className="text-slate-600">{knowledgeUrls.length} URLs</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="government-card">
                        <CardHeader>
                          <CardTitle className="text-blue-900">Personality</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          {Object.entries(personality).map(([trait, value]) => (
                            <div key={trait} className="flex justify-between">
                              <span className="font-medium text-slate-800 capitalize">{trait}</span>
                              <span className="text-slate-600">{value}%</span>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-4">Agent Preview</h3>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-3xl">
                          {selectedTemplate ? templates.find(t => t.id === selectedTemplate)?.avatar : '🤖'}
                        </div>
                        <div>
                          <div className="font-medium text-blue-900">{agentName || 'Agent Name'}</div>
                          <div className="text-sm text-slate-600">Active</div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-700">{agentDescription || 'Agent description will appear here...'}</p>

                      <div className="mt-4">
                        <Button className="w-full government-button">
                          <Zap className="h-4 w-4 mr-2" />
                          Deploy Agent
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Sticky Navigation */}
          <div className="sticky bottom-6 bg-white border border-blue-200 rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center">
              <Button 
                onClick={prevStep} 
                disabled={currentStep === 0}
                variant="outline"
                className="government-button-outline"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <div className="text-sm text-slate-600">
                Step {currentStep + 1} of {steps.length}
              </div>
              
              {currentStep === steps.length - 1 ? (
                <Button className="government-button">
                  <Check className="h-4 w-4 mr-2" />
                  Deploy Agent
                </Button>
              ) : (
                <Button 
                  onClick={nextStep}
                  className="government-button"
                  disabled={
                    (currentStep === 0 && !selectedTemplate) ||
                    (currentStep === 1 && (!agentName || !agentDescription)) ||
                    (currentStep === 2 && !selectedAI)
                  }
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentCreationDashboard;
