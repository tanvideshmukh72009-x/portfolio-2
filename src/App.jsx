import React from "react";                                                                                                                                                                                                                                                                                                                                                                                                                      
import profileImg from "./assets/img 2.png";


import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Card from "./components/Card";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="h-screen flex flex-row justify-center items-center gap-6 bg-cyan-200 text-cyan-900 px-4">
        <div className="flex flex-col items-start text-left max-w-[50%]">
          
          <h1 className="text-6xl font-bold text-center">Hi, I'm Tanvi</h1>
          <p className="text-2xl mt-4 font-medium text-cyan-800 text-center">
            Computer Engineering Student
          </p>
          <button className="mt-4 bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-800">
            Download Resume
          </button>
        </div>

        <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">

          <img src={profileImg}
           alt="profile img"
           className="w-80 h-80 rounded-full object-cover" />
        </div>
      </section>

      <About />
      
      <Skills />

      <section id="projects" className="py-24 bg-cyan-200 text-center">

        <h2 className="text-4xl font-bold text-cyan-950 mb-4">Projects</h2>
        <div className="w-20 h-1 bg-cyan-600 mx-auto mb-10 rounded-full"></div>
        <div className="flex justify-center gap-8 flex-wrap px-4 max-w-5xl mx-auto">

          <Card title="Portfolio Website" tech="React + Tailwind CSS" />
          <Card title="Student Management" tech="HTML CSS JavaScript" />

        </div>
      </section>

      <Contact />

      <footer className="bg-cyan-950 text-cyan-200 text-center p-5 text-sm">
        © 2026 My Portfolio
      </footer>
    </>
  );
}