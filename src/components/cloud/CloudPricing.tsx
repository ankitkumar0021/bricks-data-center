export default function CloudPricing() {
  const plans = [
    {
      name: "Development",
      description: "For testing and development environments",
      cpu: "2 vCPU",
      memory: "4 GB RAM",
      storage: "80 GB SSD",
      bandwidth: "2 TB",
      price: "$49",
      period: "/month"
    },
    {
      name: "Business",
      description: "Production workloads for growing businesses",
      cpu: "4 vCPU",
      memory: "8 GB RAM",
      storage: "160 GB SSD",
      bandwidth: "5 TB",
      price: "$99",
      period: "/month",
      featured: true
    },
    {
      name: "Enterprise",
      description: "Mission-critical applications and databases",
      cpu: "8 vCPU",
      memory: "32 GB RAM",
      storage: "320 GB SSD",
      bandwidth: "10 TB",
      price: "$199",
      period: "/month"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Flexible Cloud Pricing
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">
            Pay only for what you use with hourly or monthly billing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 border ${
                plan.featured ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-700"
              }`}
            >
              {plan.featured && (
                <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold text-center mb-6">
                  RECOMMENDED
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.name}</h3>
              <p className="text-blue-200 text-center mb-8">{plan.description}</p>
              
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-blue-200">vCPU Cores</span>
                  <span className="text-white font-medium">{plan.cpu}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-blue-200">Memory</span>
                  <span className="text-white font-medium">{plan.memory}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-blue-200">Storage</span>
                  <span className="text-white font-medium">{plan.storage}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-blue-200">Bandwidth</span>
                  <span className="text-white font-medium">{plan.bandwidth}</span>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-blue-200">{plan.period}</span>
              </div>
              
              <button className={`w-full py-3 rounded-lg font-medium transition ${
                plan.featured 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}>
                Deploy Now
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-blue-200">
            Need custom configuration? <a href="#" className="text-white hover:text-blue-300 underline">Contact us</a> 
            for enterprise solutions
          </p>
        </div>
      </div>
    </section>
  );
}