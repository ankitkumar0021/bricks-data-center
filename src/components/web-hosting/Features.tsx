import { FiZap, FiShield, FiDatabase, FiGlobe } from 'react-icons/fi';
import React from 'react';

export default function Features() {
  const features = [
    {
      title: "Blazing Fast Performance",
      description: "SSD storage and optimized servers for instant page loads",
      icon: <FiZap className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Enterprise Security",
      description: "Free SSL, DDoS protection, and malware scanning",
      icon: <FiShield className="h-10 w-10 text-blue-500" />
    },
    {
      title: "99.9% Uptime Guarantee",
      description: "Redundant infrastructure ensures maximum availability",
      icon: <FiDatabase className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Global CDN",
      description: "Content delivered fast from 200+ locations worldwide",
      icon: <FiGlobe className="h-10 w-10 text-blue-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for Success
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">
            Premium features included with all hosting plans
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-blue-900 bg-opacity-50 p-3 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
