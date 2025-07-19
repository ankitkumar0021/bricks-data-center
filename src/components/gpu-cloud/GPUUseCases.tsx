import { FaLightbulb, FaFlask, FaFilm, FaDollarSign } from 'react-icons/fa';
import React from 'react';

export default function GPUUseCases() {
  const useCases = [
    {
      title: 'AI & Machine Learning',
      description: 'Model training and inference, Deep learning at scale, Natural language processing',
      icon: <FaLightbulb className="h-10 w-10 text-blue-500" />
    },
    {
      title: 'Scientific Computing',
      description: 'Molecular dynamics, Computational fluid dynamics, Genomic sequencing',
      icon: <FaFlask className="h-10 w-10 text-blue-500" />
    },
    {
      title: 'Media & Rendering',
      description: '3D rendering farms, 8K video processing, Real-time ray tracing',
      icon: <FaFilm className="h-10 w-10 text-blue-500" />
    },
    {
      title: 'Financial Modeling',
      description: 'Risk analysis simulations, Algorithmic trading, Monte Carlo methods',
      icon: <FaDollarSign className="h-10 w-10 text-blue-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Industries with GPU Acceleration</h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">Powering innovation across multiple domains</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-blue-900 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="mb-6">
                <div className="bg-gray-800 border border-gray-700 rounded-lg w-16 h-16 flex items-center justify-center">
                  {useCase.icon}
                </div>
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
