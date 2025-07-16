export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Enterprise-Grade <span className="text-blue-400">Data Solutions</span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          Secure, scalable, and reliable data infrastructure for businesses of all sizes
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md text-lg font-medium transition">
            Explore Services
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-gray-800 px-8 py-3 rounded-md text-lg font-medium transition">
            Schedule Tour
          </button>
        </div>
      </div>
    </section>
  );
}