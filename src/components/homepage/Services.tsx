import Link from 'next/link';
import { FiServer, FiCloud, FiCpu, FiCode, FiDatabase } from 'react-icons/fi';
import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Web Hosting",
      description: "Secure, high-performance hosting for websites with guaranteed uptime and enterprise-grade security",
      href: "/web-hosting",
      icon: <FiServer className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Cloud Solutions",
      description: "Scalable public, private, and hybrid cloud infrastructure for dynamic workloads",
      href: "/cloud",
      icon: <FiCloud className="h-10 w-10 text-blue-500" />
    },
    {
      title: "VPS Hosting",
      description: "Fully-managed virtual private servers with dedicated resources and root access",
      href: "/vps",
      icon: <FiCpu className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Dedicated Servers",
      description: "Bare-metal hardware with maximum performance for mission-critical applications",
      href: "/dedicated",
      icon: <FiCode className="h-10 w-10 text-blue-500" />
    },
    {
      title: "GPU Cloud",
      description: "High-performance computing for AI, machine learning, and complex simulations",
      href: "/gpu-cloud",
      icon: <FiDatabase className="h-10 w-10 text-blue-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-blue-500 mr-3"></div>
            <span className="text-blue-500 font-semibold uppercase tracking-wider">Solutions</span>
            <div className="w-12 h-0.5 bg-blue-500 ml-3"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise Hosting Infrastructure</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-400">
            Engineered for performance, security, and scalability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-10 group-hover:opacity-20 transition-opacity"></div>

              <div className="p-8 relative z-10">
                <div className="mb-6">
                  <div className="bg-gray-800 border border-gray-700 rounded-lg w-16 h-16 flex items-center justify-center group-hover:bg-blue-900/30 group-hover:border-blue-500 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group-hover:translate-x-1 duration-300"
                >
                  Explore service
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>

              {/* Tech pattern overlay */}
              <div className="absolute bottom-0 right-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H40V40H0V0Z" fill="#60A5FA"/>
                  <path d="M40 0H80V40H40V0Z" fill="#3B82F6"/>
                  <path d="M80 0H120V40H80V0Z" fill="#2563EB"/>
                  <path d="M0 40H40V80H0V40Z" fill="#3B82F6"/>
                  <path d="M80 40H120V80H80V40Z" fill="#3B82F6"/>
                  <path d="M0 80H40V120H0V80Z" fill="#2563EB"/>
                  <path d="M40 80H80V120H40V80Z" fill="#3B82F6"/>
                  <path d="M80 80H120V120H80V80Z" fill="#60A5FA"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
