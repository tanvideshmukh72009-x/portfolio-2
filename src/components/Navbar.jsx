import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-cyan-950 text-cyan-50 p-5 flex justify-between shadow-md fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul className="flex gap-6 font-medium">
        <li><a href="#home" className="hover:text-cyan-300 transition">Home</a></li>
        <li><a href="#about" className="hover:text-cyan-300 transition">About</a></li>
        <li><a href="#skills" className="hover:text-cyan-300 transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-cyan-300 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-cyan-300 transition">Contact</a></li>
      </ul>
    </nav>
  );
}