import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const commissionTiers = [
    {
        tier: "Starter",
        rate: "15%",
        description: "Earn 15% commission for your first 5 referrals.",
    },
    {
        tier: "Pro",
        rate: "20%",
        description: "Earn 20% commission for 6-20 referrals.",
    },
    {
        tier: "Elite",
        rate: "30%",
        description: "Earn 30% commission for 21+ referrals.",
    },
];

const mockEarnings = {
    total: "$2,450",
    thisMonth: "$320",
    referrals: 18,
    pending: "$123",
};

const Affiliates = () => (
    <div className="min-h-screen bg-gradient-to-br from-white to-leadflow-bright-cyan/10 flex flex-col">
        <Header />
        <main className="flex-1 px-4 max-w-4xl mx-auto mt-24 w-full">
            <section className="text-center mb-12">
                <span className="inline-block bg-leadflow-electric-blue/10 text-leadflow-electric-blue px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    LeadFlow AI Affiliates
                </span>
                <h1 className="text-5xl font-extrabold text-leadflow-deep-navy mb-4 tracking-tight">
                    Grow With Us. Earn With Us.
                </h1>
                <p className="text-xl text-leadflow-slate max-w-2xl mx-auto mb-8">
                    Join the LeadFlow AI Affiliate Program and unlock recurring revenue by
                    sharing the power of AI-driven lead generation. Transparent tracking, fast
                    payouts, and industry-leading commissions inspired by the best in SaaS.
                </p>
                <Link
                    to="/affiliate-register"
                    className="inline-block bg-leadflow-electric-blue text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-leadflow-deep-navy transition"
                >
                    Become an Affiliate
                </Link>
            </section>

            {/* Earnings Dashboard */}
            <section className="bg-white/90 rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <div className="text-3xl font-bold text-leadflow-deep-navy">
                            {mockEarnings.total}
                        </div>
                        <div className="text-leadflow-slate mt-1 text-sm">
                            Total Earnings
                        </div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-leadflow-electric-blue">
                            {mockEarnings.thisMonth}
                        </div>
                        <div className="text-leadflow-slate mt-1 text-sm">
                            This Month
                        </div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-leadflow-deep-navy">
                            {mockEarnings.referrals}
                        </div>
                        <div className="text-leadflow-slate mt-1 text-sm">
                            Referrals
                        </div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-leadflow-electric-blue">
                            {mockEarnings.pending}
                        </div>
                        <div className="text-leadflow-slate mt-1 text-sm">
                            Pending Payout
                        </div>
                    </div>
                </div>
                <div className="mt-8 md:mt-0 md:ml-12">
                    <Link
                        to="/affiliate-dashboard"
                        className="inline-block bg-leadflow-gradient text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
                    >
                        View Dashboard
                    </Link>
                </div>
            </section>

            {/* Commission Tiers */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-leadflow-deep-navy text-center mb-8">
                    Commission Tiers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {commissionTiers.map((tier) => (
                        <div
                            key={tier.tier}
                            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-leadflow-electric-blue/10 hover:shadow-xl transition"
                        >
                            <div className="text-leadflow-electric-blue font-bold text-lg mb-2">
                                {tier.tier}
                            </div>
                            <div className="text-4xl font-extrabold mb-2">{tier.rate}</div>
                            <div className="text-leadflow-slate text-center mb-4">
                                {tier.description}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-leadflow-deep-navy text-center mb-8">
                    How It Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                        <div className="bg-leadflow-electric-blue/10 text-leadflow-electric-blue rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mb-4">
                            1
                        </div>
                        <div className="font-semibold mb-2">Sign Up</div>
                        <div className="text-leadflow-slate text-center">
                            Apply and get instant access to your affiliate dashboard and unique
                            referral link.
                        </div>
                    </div>
                    <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                        <div className="bg-leadflow-electric-blue/10 text-leadflow-electric-blue rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mb-4">
                            2
                        </div>
                        <div className="font-semibold mb-2">Promote</div>
                        <div className="text-leadflow-slate text-center">
                            Share LeadFlow AI with your audience using banners, content, and your
                            unique link.
                        </div>
                    </div>
                    <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center">
                        <div className="bg-leadflow-electric-blue/10 text-leadflow-electric-blue rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mb-4">
                            3
                        </div>
                        <div className="font-semibold mb-2">Earn</div>
                        <div className="text-leadflow-slate text-center">
                            Earn recurring commissions for every paying customer you refer. Track
                            your earnings in real time.
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-leadflow-deep-navy text-center mb-8">
                    Why Top Affiliates Choose LeadFlow AI
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/90 rounded-2xl shadow p-8 flex flex-col">
                        <div className="font-semibold text-leadflow-electric-blue mb-2">
                            Industry-Leading Commissions
                        </div>
                        <div className="text-leadflow-slate">
                            Earn up to 30% recurring commission—one of the highest in SaaS. No
                            minimum payout, no hidden terms.
                        </div>
                    </div>
                    <div className="bg-white/90 rounded-2xl shadow p-8 flex flex-col">
                        <div className="font-semibold text-leadflow-electric-blue mb-2">
                            Real-Time Dashboard
                        </div>
                        <div className="text-leadflow-slate">
                            Track clicks, conversions, and payouts with a beautiful, intuitive
                            dashboard inspired by Stripe and Shopify.
                        </div>
                    </div>
                    <div className="bg-white/90 rounded-2xl shadow p-8 flex flex-col">
                        <div className="font-semibold text-leadflow-electric-blue mb-2">
                            Fast, Reliable Payouts
                        </div>
                        <div className="text-leadflow-slate">
                            Get paid monthly via your preferred method. No waiting, no hassle—just
                            earnings.
                        </div>
                    </div>
                    <div className="bg-white/90 rounded-2xl shadow p-8 flex flex-col">
                        <div className="font-semibold text-leadflow-electric-blue mb-2">
                            Dedicated Support
                        </div>
                        <div className="text-leadflow-slate">
                            Our affiliate team is here to help you succeed, with resources and 1:1
                            support whenever you need it.
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="join" className="text-center mb-24">
                <h2 className="text-3xl font-bold text-leadflow-deep-navy mb-4">
                    Ready to Start Earning?
                </h2>
                <p className="text-lg text-leadflow-slate mb-8">
                    Sign up today and get instant access to your affiliate dashboard,
                    resources, and more.
                </p>
                <Link
                    to="/affiliate-register"
                    className="bg-leadflow-electric-blue text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-leadflow-deep-navy transition"
                >
                    Join the Program
                </Link>
            </section>
        </main>
        <Footer />
    </div>
);

export default Affiliates;
