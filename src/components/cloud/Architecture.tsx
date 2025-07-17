import React from "react";

export default function Architecture() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced <span className="text-blue-400">Cloud Architecture</span>
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Our cloud infrastructure is engineered for performance and resilience
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Global Network</h3>
                  <p className="text-blue-100">
                    200+ edge locations worldwide with Anycast DNS
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Redundant Storage</h3>
                  <p className="text-blue-100">
                    Triple-replicated NVMe storage with 99.99999% durability
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Software-Defined Networking</h3>
                  <p className="text-blue-100">
                    Programmable network infrastructure with micro-segmentation
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <div className="relative h-80">
              {/* Cloud Architecture Visualization */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center">
                <span className="text-blue-500 font-bold">Core</span>
              </div>
              
              <div className="absolute top-1/3 left-10 w-16 h-16 rounded-full border-2 border-blue-300 flex items-center justify-center">
                <span className="text-blue-300">Edge</span>
              </div>
              
              <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full border-2 border-blue-300 flex items-center justify-center">
                <span className="text-blue-300">Edge</span>
              </div>
              
              <div className="absolute bottom-10 left-1/4 w-16 h-16 rounded-full border-2 border-green-300 flex items-center justify-center">
                <span className="text-green-300">CDN</span>
              </div>
              
              <div className="absolute bottom-10 right-1/4 w-16 h-16 rounded-full border-2 border-green-300 flex items-center justify-center">
                <span className="text-green-300">CDN</span>
              </div>
              
              {/* Connection lines */}
              <div className="absolute top-1/4 left-1/2 w-0.5 h-20 bg-blue-500"></div>
              <div className="absolute top-1/4 left-1/2 transform rotate-45 origin-top w-0.5 h-16 bg-blue-300"></div>
              <div className="absolute top-1/4 left-1/2 transform -rotate-45 origin-top w-0.5 h-16 bg-blue-300"></div>
              <div className="absolute top-1/2 left-1/2 transform -rotate-30 origin-top w-0.5 h-16 bg-green-300"></div>
              <div className="absolute top-1/2 left-1/2 transform rotate-30 origin-top w-0.5 h-16 bg-green-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}