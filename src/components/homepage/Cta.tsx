import React from 'react'

export default function Cta() {
  return (
    <>
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-10">
          Experience the Bricks Data Center difference with our scalable solutions and dedicated support
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition">
            Get Started Now
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-blue-700 px-8 py-3 rounded-md text-lg font-medium transition">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
    </>
  )
}
