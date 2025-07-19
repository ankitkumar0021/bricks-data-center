import React from "react";

export default function GPUTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Innovators Worldwide
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">
            Hear from industry leaders accelerating with our GPU cloud
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-xl p-8 mb-16">
          <div className="text-center">
            <p className="text-2xl italic mb-6">
              Bricks GPU Cloud reduced our AI training times from weeks to hours, accelerating our drug discovery pipeline by 40x.
            </p>
            <p className="text-xl font-bold">Dr. Elena Rodriguez</p>
            <p className="text-blue-300">Chief AI Officer @ BioGen Labs</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {["Tech Startup", "Research University", "Animation Studio", "FinTech Company"].map((logo, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 h-16 w-48 rounded-lg flex items-center justify-center">
              <span className="text-blue-200">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}