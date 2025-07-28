import React from 'react';
import { FaServer, FaGlobe, FaLightbulb } from 'react-icons/fa';

export default function OurMission() {
  const missions = [
    {
      title: 'Infrastructure Excellence',
      description: 'Enterprise-grade data centers with 99.999% uptime and Tier III certification',
      icon: <FaServer className="h-8 w-8 text-blue-400" />
    },
    {
      title: 'Global Reach',
      description: '12 data centers across 3 continents with 200+ edge locations',
      icon: <FaGlobe className="h-8 w-8 text-blue-400" />
    },
    {
      title: 'Innovation Driven',
      description: '$15M annual R&D investment in sustainable infrastructure and AI operations',
      icon: <FaLightbulb className="h-8 w-8 text-blue-400" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">
            To empower businesses with reliable, secure, and scalable infrastructure solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {missions.map((item, idx) => (
            <div key={idx} className="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:shadow-lg transition">
              <div className="mb-6 flex justify-center">
                <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">{item.title}</h3>
              <p className="text-blue-100 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
