export default function OurStory() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-blue-400">Journey</span>
            </h2>
            <div className="space-y-8 relative border-l-2 border-blue-500 pl-8 ml-4">
              <div className="relative">
                <div className="absolute -left-12 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">2010</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Founded in Silicon Valley</h3>
                <p className="text-blue-100">
                  Started with a single data center serving tech startups
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">2015</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise Expansion</h3>
                <p className="text-blue-100">
                  Expanded to 4 facilities and secured Fortune 500 clients
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">2020</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Global Presence</h3>
                <p className="text-blue-100">
                  Opened facilities in Europe and Asia with 100Gbps global backbone
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainable Future</h3>
                <p className="text-blue-100">
                  Achieved carbon neutrality and launched AI-powered operations
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">12+</div>
                <div className="text-blue-300">Years of Excellence</div>
              </div>
            </div>
            <p className="text-blue-100 mb-6">
              What started as a single-rack operation has grown into a global infrastructure provider powering digital transformation for industry leaders.
            </p>
            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <div className="ml-4">
                <h4 className="font-bold">Alex Morgan</h4>
                <p className="text-blue-300">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}