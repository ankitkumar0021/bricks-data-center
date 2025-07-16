import React from 'react'
const features = [
    {
      title: "High-Speed SSD Storage",
      description: "Accelerate your website's loading times with enterprise-grade SSD storage"
    },
    {
      title: "Advanced Load Balancing",
      description: "Distribute traffic effectively to prevent bottlenecks during peak times"
    },
    {
      title: "Global CDN Network",
      description: "Deliver content quickly worldwide with reduced latency"
    },
    {
      title: "Optimized Infrastructure",
      description: "Cutting-edge hardware for unmatched speed and reliability"
    }
  ];


export default function Performance() {
  return (
    <>
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Performance At Our Core
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Performance is more than a feature; it is the foundation of our service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
