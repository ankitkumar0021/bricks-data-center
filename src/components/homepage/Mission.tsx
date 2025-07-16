import React from 'react';
import { FiServer, FiShield } from 'react-icons/fi';

export default function Mission() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Commitment to Excellence
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-500 p-3 rounded-lg mr-4">
                  <FiShield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Secure & Reliable Infrastructure</h3>
                  <p className="text-gray-300">
                    We provide enterprise-grade hosting solutions with a strong emphasis on 
                    performance, security, and reliability for businesses of all sizes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-500 p-3 rounded-lg mr-4">
                  <FiServer className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Comprehensive Solutions</h3>
                  <p className="text-gray-300">
                    Our services include GPU cloud, cloud servers, VPS, and web hosting - 
                    all designed to meet your unique requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Empowering Your Digital Journey</h3>
              <p className="text-gray-300 mb-6">
                With advanced technology and 24/7 expert support, Bricks Data Center equips you 
                with the tools and infrastructure necessary to thrive in the digital landscape.
              </p>
              <p className="text-gray-300">
                Our scalable solutions are engineered to grow with your business, and our dedicated 
                customer support team is always ready to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
