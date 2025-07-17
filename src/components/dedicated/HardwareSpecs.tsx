import React from "react";

export default function HardwareSpecs() {
  const specs = [
    { category: "Processors", options: "Intel Xeon, AMD EPYC, up to 64 cores" },
    { category: "RAM", options: "ECC DDR4/DDR5, 32GB to 2TB" },
    { category: "Storage", options: "NVMe SSDs, SAS HDDs, Hardware RAID" },
    { category: "Network", options: "1Gbps, 10Gbps, 40Gbps options" },
    { category: "Security", options: "Hardware firewalls, DDoS protection" },
    { category: "Management", options: "IPMI/KVM, Remote Hands support" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Custom <span className="text-blue-400">Hardware Specifications</span>
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Tailor every aspect of your server to match exact requirements
            </p>
            
            <div className="space-y-6">
              {specs.map((spec, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-1">
                  <h3 className="text-xl font-bold text-white mb-1">{spec.category}</h3>
                  <p className="text-blue-100">{spec.options}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 bg-gray-800 border border-gray-700 rounded-xl p-8">
            <div className="relative">
              {/* Server Rack Visualization */}
              <div className="bg-gray-900 h-64 rounded-lg flex flex-col items-center p-4">
                <div className="w-full h-4 bg-gray-700 rounded mb-1"></div>
                <div className="w-full h-16 bg-gray-800 border border-gray-700 rounded mb-2 flex items-center justify-center">
                  <div className="bg-blue-500 w-3 h-3 rounded-full mr-2"></div>
                  <span className="text-xs text-blue-500">Server Node 1</span>
                </div>
                <div className="w-full h-16 bg-gray-800 border border-gray-700 rounded mb-2 flex items-center justify-center">
                  <div className="bg-blue-500 w-3 h-3 rounded-full mr-2"></div>
                  <span className="text-xs text-blue-500">Server Node 2</span>
                </div>
                <div className="w-full h-16 bg-gray-800 border border-blue-500 rounded mb-2 flex items-center justify-center">
                  <div className="bg-blue-500 w-3 h-3 rounded-full mr-2"></div>
                  <span className="text-xs text-blue-500">Storage Array</span>
                </div>
                <div className="w-full h-16 bg-gray-800 border border-gray-700 rounded flex items-center justify-center">
                  <div className="bg-blue-500 w-3 h-3 rounded-full mr-2"></div>
                  <span className="text-xs text-blue-500">Network Switch</span>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <div className="text-center">
                  <div className="bg-blue-900 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-300 text-sm">64</span>
                  </div>
                  <span className="text-blue-200 text-sm">CPU Cores</span>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-900 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-300 text-sm">TB</span>
                  </div>
                  <span className="text-blue-200 text-sm">NVMe Storage</span>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-900 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-300 text-sm">40</span>
                  </div>
                  <span className="text-blue-200 text-sm">Gbps Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}