import { FaChartBar, FaShoppingCart, FaVideo, FaServer } from 'react-icons/fa';

export default function UseCases() {
  const cases = [
    {
      title: "High-Traffic Databases",
      description: "Run SQL/NoSQL databases with millions of transactions",
      icon: <FaChartBar className="h-10 w-10 text-blue-500" />
    },
    {
      title: "E-Commerce Platforms",
      description: "Handle peak traffic during sales events",
      icon: <FaShoppingCart className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Video Streaming",
      description: "4K video transcoding and delivery",
      icon: <FaVideo className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Game Servers",
      description: "Low-latency hosting for competitive gaming",
      icon: <FaServer className="h-10 w-10 text-blue-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ideal for Demanding Workloads</h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">Dedicated servers excel where virtualized solutions fall short</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {cases.map((useCase, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-blue-900 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="mb-6">
                <div className="bg-gray-800 border border-gray-700 rounded-lg w-16 h-16 flex items-center justify-center">{useCase.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
              <p className="text-blue-100">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
