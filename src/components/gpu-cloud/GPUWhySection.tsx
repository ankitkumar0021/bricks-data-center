import { FiZap, FiCpu, FiDollarSign, FiMaximize, FiLock } from 'react-icons/fi';
import React from 'react';

export default function GPUWhySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why GPU-Accelerated Computing?</h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">Revolutionize your computational capabilities</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700">
            <div className="flex justify-center mb-6"><FiZap className="h-12 w-12 text-blue-500" /></div>
            <h3 className="text-2xl font-bold mb-4">100x Faster Processing</h3>
            <p className="text-blue-100">Parallel computing for complex algorithms</p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700">
            <div className="flex justify-center mb-6"><FiCpu className="h-12 w-12 text-blue-500" /></div>
            <h3 className="text-2xl font-bold mb-4">AI/ML Optimized</h3>
            <p className="text-blue-100">Pre-configured frameworks (TensorFlow, PyTorch)</p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700">
            <div className="flex justify-center mb-6"><FiDollarSign className="h-12 w-12 text-blue-500" /></div>
            <h3 className="text-2xl font-bold mb-4">Cost Efficiency</h3>
            <p className="text-blue-100">Pay-per-use model vs. capital investment</p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700">
            <div className="flex justify-center mb-6"><FiMaximize className="h-12 w-12 text-blue-500" /></div>
            <h3 className="text-2xl font-bold mb-4">Instant Scalability</h3>
            <p className="text-blue-100">Provision burst capacity in minutes</p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700">
            <div className="flex justify-center mb-6"><FiLock className="h-12 w-12 text-blue-500" /></div>
            <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
            <p className="text-blue-100">Isolated environments with encrypted pipelines</p>
          </div>
        </div>
      </div>
    </section>
  );
}
