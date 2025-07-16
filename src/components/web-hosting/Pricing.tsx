export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for personal websites & blogs",
      price: "$2.99",
      period: "/month",
      features: [
        "1 Website",
        "10 GB SSD Storage",
        "100 GB Bandwidth",
        "Free SSL Certificate",
        "Basic Support"
      ],
      gradient: "from-gray-800 to-gray-900"
    },
    {
      name: "Professional",
      description: "Ideal for small businesses",
      price: "$5.99",
      period: "/month",
      features: [
        "5 Websites",
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Free Domain (1 year)",
        "Priority Support"
      ],
      gradient: "from-blue-800 to-blue-900",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For high-traffic business sites",
      price: "$12.99",
      period: "/month",
      features: [
        "Unlimited Websites",
        "200 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Free Domain (1 year)",
        "Daily Backups",
        "24/7 Premium Support"
      ],
      gradient: "from-gray-800 to-blue-900"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${plan.gradient} rounded-xl p-8 border border-gray-700 relative ${
                plan.popular ? "ring-2 ring-blue-500 ring-opacity-50" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.name}</h3>
              <p className="text-blue-200 text-center mb-8">{plan.description}</p>
              
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-blue-200">{plan.period}</span>
              </div>
              
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-medium transition ${
                plan.popular 
                  ? "bg-white text-blue-900 hover:bg-gray-100" 
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}