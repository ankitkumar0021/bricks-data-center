import React from "react";

export default function CloudCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Infrastructure?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-200">
          Join thousands of enterprises running on Bricks Cloud
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md text-lg font-medium transition">
            Start Free Trial
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-gray-800 px-8 py-3 rounded-md text-lg font-medium transition">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}