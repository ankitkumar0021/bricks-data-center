import React from "react";

export default function DedicatedCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for Raw Server Power?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-200">
          Experience uncompromised performance with enterprise dedicated servers
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md text-lg font-medium transition">
            Deploy Your Server
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-gray-800 px-8 py-3 rounded-md text-lg font-medium transition">
            Contact Solutions Architect
          </button>
        </div>
      </div>
    </section>
  );
}