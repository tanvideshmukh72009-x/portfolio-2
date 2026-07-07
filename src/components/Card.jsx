import React from "react";

export default function Card({ title, tech }) {
  return (
    <div className="bg-cyan-50 border border-cyan-100 shadow-lg p-6 rounded-xl w-72 hover:shadow-xl transition transform hover:-translate-y-1 duration-300">
      <h3 className="text-2xl font-bold text-cyan-950">{title}</h3>
      <p className="mt-3 text-cyan-700 font-medium bg-white py-1 px-3 rounded-full inline-block text-sm border border-cyan-100">
        {tech}
      </p>
    </div>
  );
}