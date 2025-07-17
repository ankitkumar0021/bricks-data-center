import { FaMicrochip, FaChartBar, FaCode, FaTools } from 'react-icons/fa';

export default function Solutions() {
  const solutions = [
    {
      title: "AI & Machine Learning",
      description: "GPU-accelerated infrastructure for complex computations",
      icon: <FaMicrochip className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Big Data Analytics",
      description: "Process massive datasets with distributed computing",
      icon: <FaChartBar className="h-10 w-10 text-blue-500" />
    },
    {
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and container orchestration",
      icon: <FaCode className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Disaster Recovery",
      description: "Geo-redundant backups and instant failover capabilities",
      icon: <FaTools className="h-10 w-10 text-blue-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">Tailored cloud infrastructure for your business needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-blue-900 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="mb-6">
                <div className="bg-gray-800 border border-gray-700 rounded-lg w-16 h-16 flex items-center justify-center">{solution.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-blue-100">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
