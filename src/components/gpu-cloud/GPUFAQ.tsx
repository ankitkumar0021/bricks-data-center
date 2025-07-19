import React from "react";

export default function GPUFAQ() {
  const faqs = [
    {
      question: "What's the minimum commitment period?",
      answer: "No long-term contracts - pay by the hour"
    },
    {
      question: "Can I deploy hybrid GPU environments?",
      answer: "Yes, integrate with on-premise clusters via dedicated fiber"
    },
    {
      question: "How quickly can I provision GPU instances?",
      answer: "Instant deployment via API/portal (<2 minutes)"
    },
    {
      question: "Do you support vGPU for virtual workstations?",
      answer: "Yes, NVIDIA vGPU for remote visualization"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            GPU Cloud Questions Answered
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-200">
            Everything you need to know about our GPU services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-blue-100">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}