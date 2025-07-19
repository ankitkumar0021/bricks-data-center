
'use client';
import React, { useState, useEffect } from 'react';
import { FiMail, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Countdown target date (e.g., launch date)
const targetDate = new Date('2025-08-15T00:00:00');

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  // Countdown timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((distance / (1000 * 60)) % 60);
      const secs = Math.floor((distance / 1000) % 60);
      setTimeLeft({ days, hours, mins, secs });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    // TODO: Integrate with mailing service
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900 text-white px-4">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-700 opacity-20 rounded-full mix-blend-soft-light -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-800 opacity-20 rounded-full mix-blend-soft-light translate-x-1/3 translate-y-1/3"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-lg w-full p-8 bg-gray-800 bg-opacity-60 rounded-2xl shadow-lg backdrop-blur-md"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 animate-pulse">Coming Soon</h1>
        <p className="text-lg text-blue-200 mb-8">We’re cooking something awesome. Stay tuned!</p>

        {/* Timer */}
        <div className="flex justify-center space-x-6 mb-8 text-center">
          {['days', 'hours', 'mins', 'secs'].map((unit) => (
            <div key={unit} className="flex flex-col">
              <span className="text-4xl font-bold">
                {timeLeft[unit as keyof typeof timeLeft] < 10
                  ? `0${timeLeft[unit as keyof typeof timeLeft]}`
                  : timeLeft[unit as keyof typeof timeLeft]}
              </span>
              <span className="uppercase text-xs text-gray-400">{unit}</span>
            </div>
          ))}
        </div>

        {/* Form / Thank you */}
        {submitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-green-600 bg-opacity-30 p-6 rounded-xl text-green-200"
          >
            <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
            <p>You will be notified once we launch.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative flex-grow">
              <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 p-4 rounded-xl bg-gray-900 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition font-semibold"
            >
              Notify Me
            </button>
          </form>
        )}

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8 text-gray-400">
          <a href="#" aria-label="Twitter" className="hover:text-blue-400"><FiTwitter size={24} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-400"><FiLinkedin size={24} /></a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-400"><FiFacebook size={24} /></a>
        </div>
      </motion.div>
    </section>
  );
}