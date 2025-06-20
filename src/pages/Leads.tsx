
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Filter, Users, Star, Mail, Calendar } from "lucide-react";

const Leads = () => {
  const leads = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "VP of Marketing",
      company: "TechCorp Solutions",
      email: "sarah.j@techcorp.com",
      phone: "+1 (555) 123-4567",
      score: 95,
      status: "Hot",
      source: "LinkedIn",
      campaign: "B2B SaaS Outreach",
      lastActivity: "2 hours ago",
      tags: ["Enterprise", "Marketing"],
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Founder & CEO",
      company: "InnovateLab",
      email: "mike@innovatelab.io",
      phone: "+1 (555) 234-5678",
      score: 88,
      status: "Warm",
      source: "Twitter",
      campaign: "Startup Founders",
      lastActivity: "1 day ago",
      tags: ["Startup", "AI"],
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Sales Director",
      company: "GrowthScale Inc",
      email: "emily.r@growthscale.com",
      phone: "+1 (555) 345-6789",
      score: 92,
      status: "Hot",
      source: "LinkedIn",
      campaign: "Enterprise Sales",
      lastActivity: "4 hours ago",
      tags: ["Sales", "B2B"],
      avatar: "ER"
    },
    {
      id: 4,
      name: "David Park",
      title: "CMO",
      company: "Digital Dynamics",
      email: "d.park@digitaldynamics.com",
      phone: "+1 (555) 456-7890",
      score: 76,
      status: "Warm",
      source: "Facebook",
      campaign: "Marketing Directors",
      lastActivity: "3 days ago",
      tags: ["Marketing", "Digital"],
      avatar: "DP"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      title: "Head of Operations",
      company: "EfficiencyFirst",
      email: "lisa@efficiencyfirst.com",
      phone: "+1 (555) 567-8901",
      score: 84,
      status: "Warm",
      source: "LinkedIn",
      campaign: "B2B SaaS Outreach",
      lastActivity: "1 day ago",
      tags: ["Operations", "SaaS"],
      avatar: "LT"
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Product Manager",
      company: "NextGen Software",
      email: "james.w@nextgensw.com",
      phone: "+1 (555) 678-9012",
      score: 69,
      status: "Cold",
      source: "Twitter",
      campaign: "Enterprise Sales",
      lastActivity: "1 week ago",
      tags: ["Product", "Software"],
      avatar: "JW"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hot':
        return 'bg-red-100 text-red-800';
      case 'Warm':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cold':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getSourceIcon = (source: string) => {
    // In a real app, you'd have platform-specific icons
    return "🌐";
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Leads</h1>
            <p className="text-gray-600">Manage and track your qualified prospects.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Follow-up
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Leads</p>
                  <p className="text-2xl font-bold text-gray-900">2,847</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Hot Leads</p>
                  <p className="text-2xl font-bold text-red-600">324</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Warm Leads</p>
                  <p className="text-2xl font-bold text-yellow-600">896</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg. Score</p>
                  <p className="text-2xl font-bold text-gray-900">82.4</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search leads by name, company, or email..." 
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Lead Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="hot">Hot</SelectItem>
                  <SelectItem value="warm">Warm</SelectItem>
                  <SelectItem value="cold">Cold</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Campaign" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Campaigns</SelectItem>
                  <SelectItem value="b2b-saas">B2B SaaS Outreach</SelectItem>
                  <SelectItem value="enterprise">Enterprise Sales</SelectItem>
                  <SelectItem value="startup">Startup Founders</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Leads List */}
        <div className="space-y-4">
          {leads.map((lead) => (
            <Card key={lead.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  {/* Lead Info */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                          {lead.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-gray-900">{lead.name}</h3>
                        <p className="text-sm text-gray-600">{lead.title}</p>
                        <p className="text-sm text-gray-500">{lead.company}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="lg:col-span-3">
                    <div className="space-y-1">
                      <div className="text-sm">
                        <span className="text-gray-600">Email:</span>
                        <div className="font-medium text-blue-600">{lead.email}</div>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Phone:</span>
                        <div className="font-medium">{lead.phone}</div>
                      </div>
                    </div>
                  </div>

                  {/* Score & Status */}
                  <div className="lg:col-span-2">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Score:</span>
                        <span className={`font-bold text-lg ${getScoreColor(lead.score)}`}>
                          {lead.score}
                        </span>
                      </div>
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Campaign & Source */}
                  <div className="lg:col-span-2">
                    <div className="space-y-1">
                      <div className="text-sm">
                        <span className="text-gray-600">Source:</span>
                        <div className="flex items-center gap-1">
                          <span>{getSourceIcon(lead.source)}</span>
                          <span className="font-medium">{lead.source}</span>
                        </div>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Campaign:</span>
                        <div className="font-medium text-xs">{lead.campaign}</div>
                      </div>
                      <div className="text-xs text-gray-500">
                        Last activity: {lead.lastActivity}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="lg:col-span-1">
                    <div className="flex flex-col gap-2">
                      <Button size="sm">
                        Contact
                      </Button>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex gap-2">
                  {lead.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination would go here */}
        <div className="flex justify-center">
          <Button variant="outline">Load More Leads</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Leads;
