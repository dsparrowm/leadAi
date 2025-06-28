import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    DollarSign,
    Users,
    TrendingUp,
    Clock,
    Copy,
    Download,
    Share2,
    BarChart3,
    Calendar,
    CheckCircle2,
    ExternalLink,
    RefreshCw
} from "lucide-react";

const AffiliateDashboard = () => {
    const [copiedLink, setCopiedLink] = useState(false);
    const [copiedCode, setCopiedCode] = useState(false);

    // Mock data
    const affiliateData = {
        user: {
            name: "John Doe",
            email: "john@example.com",
            affiliateId: "AF-12345",
            tier: "Pro",
            joinDate: "2024-03-15",
            status: "Active"
        },
        earnings: {
            total: 2450.00,
            thisMonth: 320.00,
            lastMonth: 280.00,
            pending: 120.00,
            nextPayout: "2025-07-01"
        },
        metrics: {
            totalReferrals: 18,
            activeReferrals: 15,
            totalClicks: 1247,
            conversionRate: 1.4,
            thisMonthClicks: 156,
            thisMonthConversions: 3
        },
        recentReferrals: [
            { id: 1, email: "user1@***", date: "2025-06-25", status: "Active", commission: 45.00 },
            { id: 2, email: "user2@***", date: "2025-06-20", status: "Active", commission: 45.00 },
            { id: 3, email: "user3@***", date: "2025-06-18", status: "Pending", commission: 0.00 },
            { id: 4, email: "user4@***", date: "2025-06-15", status: "Active", commission: 45.00 },
        ],
        affiliateLink: "https://leadflow.ai/ref/AF-12345",
        marketingMaterials: [
            { type: "Banner", size: "728x90", format: "PNG" },
            { type: "Banner", size: "300x250", format: "PNG" },
            { type: "Logo", size: "Various", format: "SVG/PNG" },
            { type: "Email Template", size: "HTML", format: "HTML" },
        ]
    };

    const copyToClipboard = (text: string, type: 'link' | 'code') => {
        navigator.clipboard.writeText(text);
        if (type === 'link') {
            setCopiedLink(true);
            setTimeout(() => setCopiedLink(false), 2000);
        } else {
            setCopiedCode(true);
            setTimeout(() => setCopiedCode(false), 2000);
        }
    };

    const embedCode = `<a href="${affiliateData.affiliateLink}" target="_blank">
  <img src="https://leadflow.ai/banner-728x90.png" alt="LeadFlow AI - AI-Powered Lead Generation" />
</a>`;

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-leadflow-bright-cyan/10 flex flex-col">
            <Header />
            <main className="flex-1 px-4 max-w-7xl mx-auto mt-24 w-full">
                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                            <h1 className="text-3xl font-extrabold text-leadflow-deep-navy mb-2">
                                Affiliate Dashboard
                            </h1>
                            <p className="text-leadflow-slate">
                                Welcome back, {affiliateData.user.name}! Track your performance and earnings.
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
                            <Badge
                                variant="secondary"
                                className="bg-leadflow-electric-blue/10 text-leadflow-electric-blue"
                            >
                                {affiliateData.user.tier} Tier
                            </Badge>
                            <Badge
                                variant="outline"
                                className="border-green-500 text-green-600"
                            >
                                <CheckCircle2 className="w-3 h-3 mr-1" />
                                {affiliateData.user.status}
                            </Badge>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center space-x-2">
                                    <DollarSign className="w-5 h-5 text-green-600" />
                                    <div>
                                        <p className="text-sm text-leadflow-slate">Total Earnings</p>
                                        <p className="text-2xl font-bold text-leadflow-deep-navy">
                                            ${affiliateData.earnings.total.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center space-x-2">
                                    <Users className="w-5 h-5 text-leadflow-electric-blue" />
                                    <div>
                                        <p className="text-sm text-leadflow-slate">Referrals</p>
                                        <p className="text-2xl font-bold text-leadflow-deep-navy">
                                            {affiliateData.metrics.totalReferrals}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center space-x-2">
                                    <TrendingUp className="w-5 h-5 text-green-600" />
                                    <div>
                                        <p className="text-sm text-leadflow-slate">Conversion Rate</p>
                                        <p className="text-2xl font-bold text-leadflow-deep-navy">
                                            {affiliateData.metrics.conversionRate}%
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-5 h-5 text-orange-500" />
                                    <div>
                                        <p className="text-sm text-leadflow-slate">Pending</p>
                                        <p className="text-2xl font-bold text-leadflow-deep-navy">
                                            ${affiliateData.earnings.pending.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Main Dashboard Content */}
                <Tabs defaultValue="overview" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="referrals">Referrals</TabsTrigger>
                        <TabsTrigger value="marketing">Marketing Tools</TabsTrigger>
                        <TabsTrigger value="payouts">Payouts</TabsTrigger>
                    </TabsList>

                    {/* Overview Tab */}
                    <TabsContent value="overview" className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Earnings Chart */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <BarChart3 className="w-5 h-5 mr-2" />
                                        Earnings Overview
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-leadflow-slate">This Month</span>
                                            <span className="font-semibold text-green-600">
                                                +${affiliateData.earnings.thisMonth.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-leadflow-slate">Last Month</span>
                                            <span className="font-semibold">
                                                ${affiliateData.earnings.lastMonth.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-leadflow-slate">Growth</span>
                                            <span className="font-semibold text-green-600">
                                                +{(((affiliateData.earnings.thisMonth - affiliateData.earnings.lastMonth) / affiliateData.earnings.lastMonth) * 100).toFixed(1)}%
                                            </span>
                                        </div>
                                        <div className="pt-4 border-t">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-leadflow-slate">Next Payout</span>
                                                <div className="text-right">
                                                    <div className="font-semibold">
                                                        ${affiliateData.earnings.pending.toFixed(2)}
                                                    </div>
                                                    <div className="text-xs text-leadflow-slate">
                                                        {affiliateData.earnings.nextPayout}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Performance Metrics */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <TrendingUp className="w-5 h-5 mr-2" />
                                        Performance This Month
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-leadflow-slate">Clicks</span>
                                            <span className="font-semibold">
                                                {affiliateData.metrics.thisMonthClicks}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-leadflow-slate">Conversions</span>
                                            <span className="font-semibold text-green-600">
                                                {affiliateData.metrics.thisMonthConversions}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-leadflow-slate">Conversion Rate</span>
                                            <span className="font-semibold">
                                                {((affiliateData.metrics.thisMonthConversions / affiliateData.metrics.thisMonthClicks) * 100).toFixed(2)}%
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-leadflow-slate">Avg. Commission</span>
                                            <span className="font-semibold">
                                                ${(affiliateData.earnings.thisMonth / affiliateData.metrics.thisMonthConversions).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Affiliate Link */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Share2 className="w-5 h-5 mr-2" />
                                    Your Affiliate Link
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Input
                                        value={affiliateData.affiliateLink}
                                        readOnly
                                        className="flex-1"
                                    />
                                    <Button
                                        onClick={() => copyToClipboard(affiliateData.affiliateLink, 'link')}
                                        variant="outline"
                                        className="shrink-0"
                                    >
                                        {copiedLink ? <CheckCircle2 className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                                        {copiedLink ? 'Copied!' : 'Copy'}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Referrals Tab */}
                    <TabsContent value="referrals" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Referrals</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {affiliateData.recentReferrals.map((referral) => (
                                        <div key={referral.id} className="flex items-center justify-between p-4 border rounded-lg">
                                            <div className="flex items-center space-x-4">
                                                <div>
                                                    <p className="font-medium">{referral.email}</p>
                                                    <p className="text-sm text-leadflow-slate">{referral.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <Badge
                                                    variant={referral.status === 'Active' ? 'default' : 'secondary'}
                                                    className={referral.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                                                >
                                                    {referral.status}
                                                </Badge>
                                                <span className="font-semibold">
                                                    ${referral.commission.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Marketing Tools Tab */}
                    <TabsContent value="marketing" className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Marketing Materials */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Marketing Materials</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {affiliateData.marketingMaterials.map((material, index) => (
                                            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                                <div>
                                                    <p className="font-medium">{material.type}</p>
                                                    <p className="text-sm text-leadflow-slate">
                                                        {material.size} • {material.format}
                                                    </p>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    <Download className="w-4 h-4 mr-2" />
                                                    Download
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Embed Code */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Embed Code</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <Label htmlFor="embedCode">HTML Embed Code</Label>
                                        <textarea
                                            id="embedCode"
                                            value={embedCode}
                                            readOnly
                                            className="w-full h-24 p-3 border rounded-lg font-mono text-sm resize-none"
                                        />
                                        <Button
                                            onClick={() => copyToClipboard(embedCode, 'code')}
                                            variant="outline"
                                            className="w-full"
                                        >
                                            {copiedCode ? <CheckCircle2 className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                                            {copiedCode ? 'Copied!' : 'Copy Embed Code'}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Payouts Tab */}
                    <TabsContent value="payouts" className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Payout Settings */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Payout Settings</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div>
                                            <Label>Payment Method</Label>
                                            <p className="text-sm text-leadflow-slate mt-1">PayPal (john@example.com)</p>
                                        </div>
                                        <div>
                                            <Label>Minimum Payout</Label>
                                            <p className="text-sm text-leadflow-slate mt-1">$50.00</p>
                                        </div>
                                        <div>
                                            <Label>Payout Schedule</Label>
                                            <p className="text-sm text-leadflow-slate mt-1">Monthly (1st of each month)</p>
                                        </div>
                                        <Button variant="outline" className="w-full">
                                            Update Payment Settings
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Recent Payouts */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Recent Payouts</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center p-3 border rounded-lg">
                                            <div>
                                                <p className="font-medium">June 2025</p>
                                                <p className="text-sm text-leadflow-slate">Paid on Jun 1, 2025</p>
                                            </div>
                                            <span className="font-semibold text-green-600">$280.00</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 border rounded-lg">
                                            <div>
                                                <p className="font-medium">May 2025</p>
                                                <p className="text-sm text-leadflow-slate">Paid on May 1, 2025</p>
                                            </div>
                                            <span className="font-semibold text-green-600">$195.00</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 border rounded-lg">
                                            <div>
                                                <p className="font-medium">April 2025</p>
                                                <p className="text-sm text-leadflow-slate">Paid on Apr 1, 2025</p>
                                            </div>
                                            <span className="font-semibold text-green-600">$150.00</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>

                {/* Quick Actions */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Link to="/affiliates">
                                <Button variant="outline" className="w-full">
                                    <Users className="w-4 h-4 mr-2" />
                                    Invite Friends
                                </Button>
                            </Link>
                            <Button variant="outline" className="w-full">
                                <Download className="w-4 h-4 mr-2" />
                                Download Report
                            </Button>
                            <Button variant="outline" className="w-full">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Visit LeadFlow
                            </Button>
                            <Button variant="outline" className="w-full">
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Refresh Data
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
};

export default AffiliateDashboard;
