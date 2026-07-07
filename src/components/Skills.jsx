import React from "react";

export default function Skills() {
  const skillsList = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "DBMS"];

  return (
    <section id="skills" className="py-24 bg-cyan-200 text-center border-b border-cyan-100">
      <h2 className="text-4xl font-bold text-cyan-950 mb-4">Skills</h2>
      <div className="w-20 h-1 bg-cyan-600 mx-auto mb-10 rounded-full"></div>
      <div className="flex justify-center gap-6 flex-wrap max-w-2xl mx-auto px-4">
        {skillsList.map((skill) => (
          <div key={skill} className="bg-white p-6 rounded-lg shadow-md border border-cyan-100 text-cyan-900 font-medium w-40">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}