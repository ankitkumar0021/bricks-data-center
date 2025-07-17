import React from "react";

export default function ServerOptions() {
  const servers = [
    {
      name: "Essential",
      cpu: "Intel Xeon E-2336",
      cores: "6 cores / 12 threads",
      ram: "32GB DDR4 ECC",
      storage: "2x 1TB NVMe SSD",
      bandwidth: "10TB @ 1Gbps",
      price: "$199",
      period: "/month"
    },
    {
      name: "Performance",
      cpu: "Dual Intel Xeon Silver 4310",
      cores: "24 cores / 48 threads",
      ram: "64GB DDR4 ECC",
      storage: "4x 1TB NVMe SSD (RAID 10)",
      bandwidth: "20TB @ 10Gbps",
      price: "$499",
      period: "/month",
      popular: true
    },
    {
      name: "Enterprise",
      cpu: "Dual AMD EPYC 7713",
      cores: "128 cores / 256 threads",
      ram: "256GB DDR4 ECC",
      storage: "8x 2TB NVMe SSD (RAID 10)",
      bandwidth: "Unmetered @ 10Gbps",
      price: "$999",
      period: "/month"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Server Configurations
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">
            Customizable enterprise hardware with instant provisioning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {servers.map((server, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-b from-gray-800 to-blue-900 rounded-xl p-8 border ${
                server.popular ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-700"
              }`}
            >
              {server.popular && (
                <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold text-center mb-6">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white text-center mb-2">{server.name}</h3>
              
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-blue-200">Processor</span>
                  <span className="text-white font-medium">{server.cpu}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-blue-200">Cores/Threads</span>
                  <span className="text-white font-medium">{server.cores}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-blue-200">RAM</span>
                  <span className="text-white font-medium">{server.ram}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-blue-200">Storage</span>
                  <span className="text-white font-medium">{server.storage}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-blue-200">Bandwidth</span>
                  <span className="text-white font-medium">{server.bandwidth}</span>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <span className="text-4xl font-bold text-white">{server.price}</span>
                <span className="text-blue-200">{server.period}</span>
              </div>
              
              <button className={`w-full py-3 rounded-lg font-medium transition ${
                server.popular 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}>
                Deploy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}