import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-cyan-200 text-center">
      <h2 className="text-4xl font-bold text-cyan-950 mb-6">Contact Me</h2>
      <div className="max-w-md mx-auto px-4">
        <input type="text" placeholder="Your Name" className="border border-cyan-200 p-3 my-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white" />
        <input type="email" placeholder="Your Email" className="border border-cyan-200 p-3 my-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white" />
        <textarea placeholder="Message" className="border border-cyan-200 p-3 my-2 w-full h-32 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"></textarea>
        <button className="mt-4 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300 w-full md:w-auto">
          Send Message
        </button>
      </div>
    </section>
  );
}