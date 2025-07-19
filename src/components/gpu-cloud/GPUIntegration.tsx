import React from "react";

export default function GPUIntegration() {
  const integrations = [
    "TensorFlow", "PyTorch", "MXNet", "Jenkins", 
    "GitLab", "GitHub Actions", "Kubernetes", "Slurm", 
    "OpenPBS", "Databricks", "Snowflake", "Hadoop", "AWS S3"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless Integration with Your Stack
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">
            Works with your existing tools and workflows
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="bg-gray-800 bg-opacity-50 px-5 py-2 rounded-full border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <span className="text-blue-100">{integration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}