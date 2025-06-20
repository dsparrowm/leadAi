import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Search, Filter, Calendar, Users, TrendingUp } from "lucide-react";

const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      name: "B2B SaaS Outreach",
      status: "Active",
      platform: "LinkedIn",
      leads: 324,
      qualified: 142,
      budget: "$2,500",
      spent: "$1,890",
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      conversionRate: 43.8
    },
    {
      id: 2,
      name: "Enterprise Sales",
      status: "Active",
      platform: "Multi-platform",
      leads: 218,
      qualified: 98,
      budget: "$3,000",
      spent: "$2,340",
      startDate: "2024-01-10",
      endDate: "2024-02-10",
      conversionRate: 45.0
    },
    {
      id: 3,
      name: "Startup Founders",
      status: "Paused",
      platform: "Twitter",
      leads: 156,
      qualified: 67,
      budget: "$1,800",
      spent: "$1,200",
      startDate: "2024-01-20",
      endDate: "2024-02-20",
      conversionRate: 42.9
    },
    {
      id: 4,
      name: "Marketing Directors",
      status: "Active",
      platform: "LinkedIn",
      leads: 289,
      qualified: 134,
      budget: "$2,200",
      spent: "$1,650",
      startDate: "2024-01-12",
      endDate: "2024-02-12",
      conversionRate: 46.4
    },
    {
      id: 5,
      name: "E-commerce CEOs",
      status: "Draft",
      platform: "Facebook",
      leads: 0,
      qualified: 0,
      budget: "$2,800",
      spent: "$0",
      startDate: "2024-02-01",
      endDate: "2024-03-01",
      conversionRate: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlatformIcon = (platform: string) => {
    // In a real app, you'd have platform-specific icons
    return "🌐";
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Campaigns</h1>
            <p className="text-gray-600">Manage and monitor your AI-powered lead generation campaigns.</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Campaign
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Budget</p>
                  <p className="text-2xl font-bold text-gray-900">$22,300</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg. Conversion</p>
                  <p className="text-2xl font-bold text-gray-900">44.5%</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
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
                  placeholder="Search campaigns..." 
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Platforms</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Campaigns List */}
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  {/* Campaign Info */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg">{getPlatformIcon(campaign.platform)}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                        <p className="text-sm text-gray-600">{campaign.platform}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(campaign.status)}>
                      {campaign.status}
                    </Badge>
                  </div>

                  {/* Metrics */}
                  <div className="lg:col-span-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Leads:</span>
                        <span className="font-medium">{campaign.leads}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Qualified:</span>
                        <span className="font-medium text-green-600">{campaign.qualified}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Conversion:</span>
                        <span className="font-medium">{campaign.conversionRate}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="lg:col-span-2">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-medium">{campaign.budget}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Spent:</span>
                        <span className="font-medium">{campaign.spent}</span>
                      </div>
                      <Progress 
                        value={(parseInt(campaign.spent.replace('$', '').replace(',', '')) / parseInt(campaign.budget.replace('$', '').replace(',', ''))) * 100} 
                        className="h-2"
                      />
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="lg:col-span-2">
                    <div className="text-sm space-y-1">
                      <div>
                        <span className="text-gray-600">Start:</span>
                        <div className="font-medium">{new Date(campaign.startDate).toLocaleDateString()}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">End:</span>
                        <div className="font-medium">{new Date(campaign.endDate).toLocaleDateString()}</div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="lg:col-span-1">
                    <div className="flex flex-col gap-2">
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                      <Button size="sm" variant="ghost">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Campaigns;
