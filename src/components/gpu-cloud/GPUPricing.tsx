import React from "react";

export default function GPUPricing() {
  const plans = [
    {
      name: "Developer Tier",
      gpu: "1 x NVIDIA RTX 6000 Ada",
      cpu: "4 vCPUs",
      ram: "32GB RAM",
      storage: "500GB NVMe Storage",
      price: "$1.99/hr",
      cta: "Get Started",
      featured: false
    },
    {
      name: "Research Cluster",
      gpu: "4 x NVIDIA A100 (80GB)",
      cpu: "32 vCPUs",
      ram: "256GB RAM",
      storage: "10TB NVMe + 100TB Object Storage",
      price: "$14.99/hr",
      cta: "Deploy Now",
      featured: true
    },
    {
      name: "Enterprise AI Suite",
      gpu: "8 x NVIDIA H100 SXM5",
      cpu: "64 vCPUs",
      ram: "512GB RAM",
      storage: "50TB NVMe + 1PB Object Storage",
      network: "Dedicated 100Gbps Network",
      price: "$49.99/hr",
      cta: "Contact Sales",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flexible GPU Cloud Pricing
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">
            Pay only for what you use with hourly billing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-b from-gray-800 to-blue-900 rounded-xl p-8 border ${
                plan.featured ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-700"
              }`}
            >
              {plan.featured && (
                <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold text-center mb-6">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.name}</h3>
              
              <div className="my-6 space-y-3">
                <div className="flex items-center">
                  <div className="bg-blue-900 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs">G</span>
                  </div>
                  <span className="text-blue-100">{plan.gpu}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-900 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs">C</span>
                  </div>
                  <span className="text-blue-100">{plan.cpu}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-900 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs">R</span>
                  </div>
                  <span className="text-blue-100">{plan.ram}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-900 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs">S</span>
                  </div>
                  <span className="text-blue-100">{plan.storage}</span>
                </div>
                {plan.network && (
                  <div className="flex items-center">
                    <div className="bg-blue-900 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs">N</span>
                    </div>
                    <span className="text-blue-100">{plan.network}</span>
                  </div>
                )}
              </div>
              
              <div className="text-center my-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
              </div>
              
              <button className={`w-full py-3 rounded-lg font-medium transition ${
                plan.featured 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-blue-200">
            All plans include: 24/7 support, automated backups, DDoS protection
          </p>
        </div>
      </div>
    </section>
  );
}