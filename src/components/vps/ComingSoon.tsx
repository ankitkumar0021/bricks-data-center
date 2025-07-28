'use client';
import React, { useState } from 'react';
import { FiMail, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ComingSoonEnhanced() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    // TODO: Integrate with mailing service
    setSubmitted(true);
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 px-4">
      {/* Decorative Blob */}
      <div className="absolute -top-52 -left-52 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute -bottom-52 -right-52 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-md w-full bg-black bg-opacity-60 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl p-8 text-center text-white shadow-lg drop-shadow-lg"
      >
        {/* Logo */}
        <div className="mx-auto mb-6 w-20 h-20">
          <Image
            src="/logo-white.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-md">We’re Almost Here</h1>
        <p className="text-lg mb-6 text-gray-100">Exciting things are coming your way. Subscribe for updates!</p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-green-600 bg-opacity-30 rounded-xl"
          >
            <h2 className="text-2xl font-semibold mb-2 text-white">Thank You!</h2>
            <p className="text-gray-100">You will be the first to know when we launch.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-300" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 py-3 rounded-xl bg-white bg-opacity-20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 drop-shadow-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-semibold transition drop-shadow-sm"
            >
              Notify Me
            </button>
          </form>
        )}

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8 text-gray-300">
          <a href="#" aria-label="Twitter" className="hover:text-white transition drop-shadow-sm"><FiTwitter size={24} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white transition drop-shadow-sm"><FiLinkedin size={24} /></a>
          <a href="#" aria-label="Facebook" className="hover:text-white transition drop-shadow-sm"><FiFacebook size={24} /></a>
        </div>
      </motion.div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
