import React from "react";

export default function GPUSpecs() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise-Grade GPU Infrastructure
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">
            Hardware designed for intensive computational tasks
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">GPU Specifications</h3>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-gray-700 pb-3">
                <span>GPU Options</span>
                <span className="font-medium">NVIDIA A100, H100, RTX 6000 Ada</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-3">
                <span>vGPU Support</span>
                <span className="font-medium">1/2/4/8-way partitioning</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-3">
                <span>GPU Memory</span>
                <span className="font-medium">24GB to 80GB HBM2e per GPU</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-3">
                <span>Interconnect</span>
                <span className="font-medium">NVLink 4.0 (600GB/s bandwidth)</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-3">
                <span>CPU Pairing</span>
                <span className="font-medium">AMD EPYC 9004 or Intel Sapphire Rapids</span>
              </li>
              <li className="flex justify-between pb-3">
                <span>Network</span>
                <span className="font-medium">100Gbps InfiniBand</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Performance Benchmarks</h3>
            <ul className="space-y-4">
              <li className="flex justify-between border-b border-gray-700 pb-3">
                <span>ResNet-50 Training</span>
                <span className="font-medium text-green-400">15 mins (vs. 6 hrs on CPU)</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-3">
                <span>Molecular Dynamics</span>
                <span className="font-medium">2.4 petaflops sustained</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-3">
                <span>8K Video Render</span>
                <span className="font-medium">12 fps real-time encoding</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-3">
                <span>Monte Carlo Simulation</span>
                <span className="font-medium">18M calculations/sec</span>
              </li>
              <li className="flex justify-between pb-3">
                <span>AI Inference Latency</span>
                <span className="font-medium text-green-400">2.7ms (BERT-Large)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}