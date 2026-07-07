import React from "react";
import peopleImg from "../assets/img 3.avif"; // यहाँ रास्ते में '../' का ध्यान रखें

export default function About() {
  return (
    <section id="about" className="py-20 px-10 text-center bg-cyan-200 text-cyan-900">
      <h2 className="text-4xl font-bold text-cyan-950">About Me</h2>
      <p className="mt-6 text-lg max-w-2xl mx-auto text-cyan-800">
        I am a passionate Computer Engineering student with a deep interest in
        modern web development and software engineering. I love building
        responsive, user-friendly web applications using technologies like React,
        JavaScript, and Tailwind CSS.
      </p>

      <div className="mt-10 flex justify-center">
        <div className="w-80 h-80 square-full overflow-hidden border-4 border-white shadow-xl">
          <img src={peopleImg}
           alt="people" 
           className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}