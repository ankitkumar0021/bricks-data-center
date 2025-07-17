import React from 'react';

export default function ComingSoon() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="text-center p-8 max-w-md mx-auto">
        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-xl text-blue-200 mb-8">
          We’re working hard to launch our new features. Stay tuned!
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow p-4 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="p-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition">
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
}
