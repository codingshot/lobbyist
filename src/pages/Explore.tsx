import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MessageCircle, Search, Filter, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState, useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [modelFilter, setModelFilter] = useState("all");
  const isMobile = useIsMobile();

  const agents = [
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
      id: "healthcare-champion",
      name: "Healthcare Equity Champion",
      category: "Healthcare Policy",
      emoji: "🏥",
      description: "Advocating for universal healthcare access and equitable healthcare policies",
      model: "GPT-4",
      rating: 4.7,
      followers: "9.2k"
    },
    {
      id: "economic-advocate",
      name: "Economic Freedom Advocate",
      category: "Economic Policy",
      emoji: "💼",
      description: "Promoting free market principles and economic growth through innovation",
      model: "GPT-4",
      rating: 4.6,
      followers: "7.8k"
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

  const categories = [...new Set(agents.map(agent => agent.category))];
  const models = [...new Set(agents.map(agent => agent.model))];

  const filteredAgents = useMemo(() => {
    return agents.filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           agent.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           agent.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === "all" || agent.category === categoryFilter;
      const matchesModel = modelFilter === "all" || agent.model === modelFilter;
      
      return matchesSearch && matchesCategory && matchesModel;
    });
  }, [searchTerm, categoryFilter, modelFilter]);

  const hasActiveFilters = searchTerm || categoryFilter !== "all" || modelFilter !== "all";

  const clearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("all");
    setModelFilter("all");
  };

  return (
    <>
      <Helmet>
        <title>Explore AI Political Agents - lobbyist.fun</title>
        <meta name="description" content="Discover and interact with AI political agents representing various policy areas and viewpoints" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
        {/* Header */}
        <section className="bg-white border-b border-blue-200 py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mb-2 md:mb-4">
                Explore AI Political Agents
              </h1>
              <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
                Discover transparent AI representatives across various policy areas
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search agents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-10 md:h-12 text-sm md:text-base"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="h-10 md:h-12">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1">
                  <Select value={modelFilter} onValueChange={setModelFilter}>
                    <SelectTrigger className="h-10 md:h-12">
                      <SelectValue placeholder="Filter by AI model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Models</SelectItem>
                      {models.map(model => (
                        <SelectItem key={model} value={model}>{model}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="h-10 md:h-12 px-4 md:px-6"
                    size={isMobile ? "sm" : "default"}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear
                  </Button>
                )}
              </div>

              {/* Results Count */}
              <div className="text-center text-slate-600 text-sm md:text-base">
                {filteredAgents.length} agent{filteredAgents.length !== 1 ? 's' : ''} found
              </div>
            </div>
          </div>
        </section>

        {/* Agents Grid */}
        <section className="py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredAgents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {filteredAgents.map((agent) => (
                  <Link key={agent.id} to={`/agent/${agent.id}`} className="block">
                    <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer h-full border border-blue-200 hover:border-blue-300">
                      <CardContent className="p-4 md:p-6 h-full flex flex-col">
                        <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                          <div className="text-2xl md:text-4xl">{agent.emoji}</div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-blue-900 text-sm md:text-base truncate">
                              {agent.name}
                            </h3>
                            <p className="text-xs md:text-sm text-slate-600 truncate">
                              {agent.category}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-slate-700 mb-3 md:mb-4 flex-1 text-sm md:text-base line-clamp-3">
                          {agent.description}
                        </p>
                        
                        <div className="flex justify-between items-center mb-3 md:mb-4">
                          <Badge variant="secondary" className="text-blue-700 text-xs">
                            {agent.model}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-500 fill-current" />
                            <span className="text-xs md:text-sm text-slate-600">{agent.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-xs md:text-sm text-slate-600">
                            {agent.followers} followers
                          </span>
                          <div className="flex space-x-2">
                            <Button 
                              className="bg-blue-600 hover:bg-blue-700 text-white" 
                              size={isMobile ? "sm" : "default"}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {isMobile ? "View" : "View Agent"}
                            </Button>
                            <Link to="/chat" onClick={(e) => e.stopPropagation()}>
                              <Button 
                                variant="outline" 
                                size={isMobile ? "sm" : "default"}
                                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                              >
                                <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-12 md:py-16">
                <div className="text-4xl md:text-6xl mb-4">🔍</div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                  No agents found
                </h3>
                <p className="text-slate-600 mb-4 md:mb-6 max-w-md mx-auto text-sm md:text-base">
                  No agents match your current search criteria. Try adjusting your filters.
                </p>
                {hasActiveFilters && (
                  <Button 
                    onClick={clearFilters} 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear All Filters
                  </Button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Create your own AI political agent with custom values and policy positions
            </p>
            <Link to="/create-agent">
              <Button 
                size={isMobile ? "default" : "lg"} 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 md:px-8 py-2 md:py-3"
              >
                Create Your Agent
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Explore;
