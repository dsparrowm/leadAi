const plans = [
    {
        name: "Starter",
        price: "$199/mo",
        features: [
            "Up to 1,000 leads/mo",
            "Basic AI prospecting",
            "Email support",
            "1 user seat"
        ],
        highlight: false
    },
    {
        name: "Pro",
        price: "$299/mo",
        features: [
            "Up to 10,000 leads/mo",
            "Advanced AI & analytics",
            "Priority support",
            "Up to 5 user seats",
            "CRM integration"
        ],
        highlight: true
    },
    {
        name: "Enterprise",
        price: "Contact Us",
        features: [
            "Unlimited leads",
            "Custom AI agents",
            "Dedicated success manager",
            "Unlimited user seats",
            "Custom integrations"
        ],
        highlight: false
    }
];

const PricingSection = () => (
    <section id="pricing" className="py-20 bg-gradient-to-br from-leadflow-deep-navy/5 to-leadflow-bright-cyan/10">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-leadflow-deep-navy">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`rounded-2xl border shadow-lg p-8 flex flex-col items-center bg-white/90 ${plan.highlight ? 'border-leadflow-electric-blue scale-105' : 'border-gray-200'}`}
                    >
                        <h3 className="text-2xl font-bold mb-2 text-leadflow-deep-navy">{plan.name}</h3>
                        <div className="text-3xl font-extrabold mb-4 text-leadflow-electric-blue">{plan.price}</div>
                        <ul className="mb-6 space-y-2 text-gray-700">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-leadflow-electric-blue rounded-full inline-block" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        {plan.price !== "Contact Us" ? (
                            <button className="bg-leadflow-electric-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-leadflow-deep-navy transition">Start Free Trial</button>
                        ) : (
                            <button className="bg-gray-200 text-leadflow-deep-navy px-6 py-2 rounded-lg font-semibold cursor-default">Contact Sales</button>
                        )}
                    </div>
                ))}
            </div>
            <p className="text-center text-gray-500 mt-10">All plans include a 14-day free trial. No credit card required.</p>
        </div>
    </section>
);

export default PricingSection;
