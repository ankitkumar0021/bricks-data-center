import { FaExpandArrowsAlt, FaShieldAlt, FaBolt, FaServer } from 'react-icons/fa';

export default function CloudFeatures() {
  const features = [
    {
      title: "Elastic Scalability",
      description: "Instantly scale resources up or down based on demand",
      icon: <FaExpandArrowsAlt className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Military-Grade Security",
      description: "End-to-end encryption and compliance certifications",
      icon: <FaShieldAlt className="h-10 w-10 text-blue-500" />
    },
    {
      title: "High Performance",
      description: "Bare-metal performance with cloud flexibility",
      icon: <FaBolt className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Hybrid Ready",
      description: "Seamless integration with on-premises infrastructure",
      icon: <FaServer className="h-10 w-10 text-blue-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Cloud Capabilities</h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">Everything you need for modern cloud infrastructure</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-900 bg-opacity-50 p-3 rounded-full">{feature.icon}</div>
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
