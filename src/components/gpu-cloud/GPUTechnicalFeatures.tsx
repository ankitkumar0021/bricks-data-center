import React from "react";

export default function GPUTechnicalFeatures() {
  const features = [
    { feature: "Multi-GPU Clustering", benefit: "Scale across 8+ GPUs with NVLink" },
    { feature: "Container Orchestration", benefit: "Kubernetes with GPU-aware scheduling" },
    { feature: "HPC Toolkit", benefit: "Pre-built images for CUDA, OpenCL" },
    { feature: "Visualization Ready", benefit: "NVIDIA Virtual GPU (vGPU) support" },
    { feature: "Hybrid Deployment", benefit: "Seamless on-premise integration" },
    { feature: "Persistent Storage", benefit: "High-throughput parallel file systems" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Engineered for GPU Workloads
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">
            Optimized infrastructure and software stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-3">{feature.feature}</h3>
              <p className="text-blue-100">{feature.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}