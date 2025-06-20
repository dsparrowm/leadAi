import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Users, TrendingUp, Clock, Filter, Plus, ArrowUp, ArrowDown } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Leads",
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "blue"
    },
    {
      title: "Qualified Leads",
      value: "1,249",
      change: "+18%",
      trend: "up",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "Active Campaigns",
      value: "8",
      change: "0",
      trend: "neutral",
      icon: Clock,
      color: "purple"
    },
    {
      title: "Conversion Rate",
      value: "43.8%",
      change: "+5.2%",
      trend: "up",
      icon: Filter,
      color: "orange"
    }
  ];

  const campaignData = [
    { name: 'B2B SaaS Outreach', leads: 324, qualified: 142, status: 'Active' },
    { name: 'Enterprise Sales', leads: 218, qualified: 98, status: 'Active' },
    { name: 'Startup Founders', leads: 156, qualified: 67, status: 'Paused' },
    { name: 'Marketing Directors', leads: 289, qualified: 134, status: 'Active' },
  ];

  const chartData = [
    { name: 'Mon', leads: 65, qualified: 28 },
    { name: 'Tue', leads: 78, qualified: 34 },
    { name: 'Wed', leads: 92, qualified: 41 },
    { name: 'Thu', leads: 87, qualified: 38 },
    { name: 'Fri', leads: 101, qualified: 45 },
    { name: 'Sat', leads: 73, qualified: 32 },
    { name: 'Sun', leads: 69, qualified: 31 },
  ];

  const recentActivity = [
    {
      id: 1,
      action: "New qualified lead",
      details: "Sarah Johnson from TechCorp engaged with campaign",
      time: "2 minutes ago",
      type: "lead"
    },
    {
      id: 2,
      action: "Campaign milestone",
      details: "B2B SaaS Outreach reached 300 leads",
      time: "1 hour ago",
      type: "campaign"
    },
    {
      id: 3,
      action: "AI optimization",
      details: "Engagement rate improved by 15% in Enterprise Sales",
      time: "3 hours ago",
      type: "ai"
    },
    {
      id: 4,
      action: "Lead scored",
      details: "Michael Chen scored 95/100 in qualification",
      time: "5 hours ago",
      type: "lead"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your lead generation.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Campaign
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${stat.color}-100`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                </div>
                {stat.change !== "0" && (
                  <div className="flex items-center mt-4">
                    {stat.trend === "up" ? (
                      <ArrowUp className="w-4 h-4 text-green-600 mr-1" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-600 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">vs last week</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Lead Generation Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="leads" stroke="#3B82F6" strokeWidth={2} />
                  <Line type="monotone" dataKey="qualified" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={campaignData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="leads" fill="#3B82F6" />
                  <Bar dataKey="qualified" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Campaign Status and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Campaigns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {campaignData.map((campaign, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                      <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                        {campaign.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      {campaign.leads} leads • {campaign.qualified} qualified
                    </div>
                    <Progress 
                      value={(campaign.qualified / campaign.leads) * 100} 
                      className="mt-2 h-2"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'lead' ? 'bg-green-500' :
                    activity.type === 'campaign' ? 'bg-blue-500' : 'bg-purple-500'
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.details}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
