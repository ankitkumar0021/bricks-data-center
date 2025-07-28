import React from 'react';
import { FaShieldAlt, FaLeaf, FaBolt, FaUsers } from 'react-icons/fa';

export default function OurValues() {
  const values = [
    {
      title: 'Reliability',
      description: 'Engineered for 99.999% uptime with redundant systems',
      icon: <FaShieldAlt className="h-10 w-10 text-blue-500" />
    },
    {
      title: 'Sustainability',
      description: 'Carbon-neutral operations powered by 80% renewable energy',
      icon: <FaLeaf className="h-10 w-10 text-green-500" />
    },
    {
      title: 'Innovation',
      description: 'Pioneering liquid cooling and AI-powered infrastructure',
      icon: <FaBolt className="h-10 w-10 text-yellow-400" />
    },
    {
      title: 'Customer Focus',
      description: '24/7 expert support with 15-minute response SLA',
      icon: <FaUsers className="h-10 w-10 text-indigo-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-blue-900 rounded-xl p-8 border border-gray-700 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-gray-800 border border-gray-700 rounded-lg w-16 h-16 flex items-center justify-center">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-blue-100">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
