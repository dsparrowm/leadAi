import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, DollarSign, Target, Calendar, Download } from "lucide-react";

const Analytics = () => {
  const performanceData = [
    { month: 'Jan', leads: 2400, qualified: 1200, converted: 240 },
    { month: 'Feb', leads: 2800, qualified: 1400, converted: 320 },
    { month: 'Mar', leads: 3200, qualified: 1800, converted: 380 },
    { month: 'Apr', leads: 2900, qualified: 1600, converted: 350 },
    { month: 'May', leads: 3500, qualified: 2100, converted: 450 },
    { month: 'Jun', leads: 3800, qualified: 2300, converted: 520 },
  ];

  const platformData = [
    { name: 'LinkedIn', value: 45, color: '#0077B5' },
    { name: 'Twitter', value: 25, color: '#1DA1F2' },
    { name: 'Facebook', value: 20, color: '#4267B2' },
    { name: 'Instagram', value: 10, color: '#E4405F' },
  ];

  const campaignROI = [
    { name: 'B2B SaaS Outreach', spent: 2500, revenue: 12000, roi: 380 },
    { name: 'Enterprise Sales', spent: 3000, revenue: 18000, roi: 500 },
    { name: 'Startup Founders', spent: 1800, revenue: 7200, roi: 300 },
    { name: 'Marketing Directors', spent: 2200, revenue: 11000, roi: 400 },
  ];

  const conversionFunnel = [
    { stage: 'Prospects Identified', count: 10000, percentage: 100 },
    { stage: 'Engaged', count: 4500, percentage: 45 },
    { stage: 'Qualified', count: 2250, percentage: 22.5 },
    { stage: 'Opportunity', count: 900, percentage: 9 },
    { stage: 'Closed Won', count: 270, percentage: 2.7 },
  ];

  const stats = [
    {
      title: "Total Revenue",
      value: "$48,200",
      change: "+22%",
      icon: DollarSign,
      color: "green"
    },
    {
      title: "Cost Per Lead",
      value: "$12.50",
      change: "-15%",
      icon: Target,
      color: "blue"
    },
    {
      title: "Conversion Rate",
      value: "2.7%",
      change: "+0.3%",
      icon: TrendingUp,
      color: "purple"
    },
    {
      title: "ROI",
      value: "385%",
      change: "+45%",
      icon: Users,
      color: "orange"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600">Comprehensive insights into your lead generation performance.</p>
          </div>
          <div className="flex gap-3">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Last 6 months" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="6m">Last 6 months</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change} vs last period</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${stat.color}-100`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Lead Generation Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="leads" stroke="#3B82F6" strokeWidth={2} name="Total Leads" />
                <Line type="monotone" dataKey="qualified" stroke="#10B981" strokeWidth={2} name="Qualified Leads" />
                <Line type="monotone" dataKey="converted" stroke="#F59E0B" strokeWidth={2} name="Converted" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Platform Distribution and Campaign ROI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Lead Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Campaign ROI</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={campaignROI} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={120} />
                  <Tooltip formatter={(value) => [`${value}%`, 'ROI']} />
                  <Bar dataKey="roi" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Conversion Funnel */}
        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {conversionFunnel.map((stage, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{stage.stage}</span>
                    <div className="text-right">
                      <span className="text-sm font-bold text-gray-900">{stage.count.toLocaleString()}</span>
                      <span className="text-xs text-gray-500 ml-2">({stage.percentage}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${stage.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Campaign Performance Table */}
        <Card>
          <CardHeader>
            <CardTitle>Campaign Performance Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Campaign</th>
                    <th className="text-left py-3 px-4">Spent</th>
                    <th className="text-left py-3 px-4">Revenue</th>
                    <th className="text-left py-3 px-4">ROI</th>
                    <th className="text-left py-3 px-4">Leads</th>
                    <th className="text-left py-3 px-4">Conversion</th>
                  </tr>
                </thead>
                <tbody>
                  {campaignROI.map((campaign, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{campaign.name}</td>
                      <td className="py-3 px-4">${campaign.spent.toLocaleString()}</td>
                      <td className="py-3 px-4 text-green-600 font-medium">${campaign.revenue.toLocaleString()}</td>
                      <td className="py-3 px-4">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          {campaign.roi}%
                        </span>
                      </td>
                      <td className="py-3 px-4">324</td>
                      <td className="py-3 px-4">2.8%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
