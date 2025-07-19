import React from "react";

export default function GPUCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Accelerate Your Workloads?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-200">
          Free $500 credits for new enterprise accounts and dedicated onboarding specialist with GPU expertise
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md text-lg font-medium transition">
            Start Free Trial
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-gray-800 px-8 py-3 rounded-md text-lg font-medium transition">
            Schedule Architecture Review
          </button>
          <button className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-900 px-8 py-3 rounded-md text-lg font-medium transition">
            Contact Solutions Team
          </button>
        </div>
      </div>
    </section>
  );
}