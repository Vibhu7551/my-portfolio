import React from "react";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 py-20 px-6">
      <div className="max-w-4xl mx-auto backdrop-blur-md  p-10 text-center">
        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-10">
          Hi, I'm <span className="font-semibold text-indigo-700">Vibhu</span> 👋 — 
          a passionate developer focused on building impactful solutions in{" "}
          <span className="font-semibold text-indigo-600">Web Development</span> 
          and <span className="font-semibold text-indigo-600">Artificial Intelligence</span>.  
          I enjoy turning ideas into reality, from fun Python games to professional 
          e-commerce sites and AI research projects.
        </p>

        <section
        id="skills"
        className="py-20 px-6  text-center max-w-6xl mx-auto"
      >
        <h2 className="text-4xl  font-bold text-gray-800 mb-12">Skills</h2>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-8">
          {[
            "React.js",
            "Node.js",
            "Express",
            "MongoDB",
            "TailwindCSS",
            "JavaScript",
            "Python",
            "HTML",
          ].map((skill, i) => (
            <div
              key={i}
              className=" shadow-md rounded-lg p-6 text-lg bg-white font-semibold text-gray-700 
              hover:shadow-lg transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

        {/* Journey */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">My Journey</h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-10">
          I started my coding journey experimenting with{" "}
          <b className="text-indigo-700">Python & Pygame</b>, then moved into{" "}
          <b className="text-indigo-700">AI-driven projects</b> like Tamil OCR 
          and Palm Leaf Character Recognition.  
          Currently, I’m building a full-stack{" "}
          <b className="text-indigo-700">E-Commerce platform</b> and sharpening 
          my React + Node.js skills.
        </p>

        {/* Fun Fact */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Fun Fact</h2>
        <p className="text-gray-800 text-lg">
          I love combining creativity with logic — whether it’s developing a game
          like <b className="text-indigo-700">Flappy Bird 🐦</b> or designing a 
          professional web experience.
        </p>
      </div>
    </div>
  );
}

export default About;