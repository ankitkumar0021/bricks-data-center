import React from "react";

export default function GPUHero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Unleash <span className="text-blue-400">GPU Power</span> in the Cloud
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          Accelerate AI, machine learning, and complex computations with enterprise-grade NVIDIA GPU infrastructure
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md text-lg font-medium transition">
            Start Free Trial
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-gray-800 px-8 py-3 rounded-md text-lg font-medium transition">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}