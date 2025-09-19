import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section
        id="hero"
        className="pt-24 h-[90vh] flex flex-col items-center justify-center text-center 
        bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 px-6"
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
            Hi, I'm <span className="text-indigo-700">Vibhu</span> 👋
            <br />
            Web Developer & AI Enthusiast
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-6">
            I design and develop clean, modern, and impactful digital
            experiences. From{" "}
            <span className="font-semibold">web apps</span> to{" "}
            <span className="font-semibold">AI-driven projects</span>, I blend
            creativity with technology to deliver meaningful results.
          </p>

          <p className="text-md md:text-lg text-gray-600 mb-8">
            🚀 Skilled in{" "}
            <span className="font-semibold">
              React, Node.js, Express, MongoDB, TailwindCSS
            </span>{" "}
            and currently exploring{" "}
            <span className="font-semibold">AI & Machine Learning</span>. Always
            excited to take on challenging projects.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold 
              hover:bg-indigo-500 transition"
            >
              View My Work
            </a>

            <Link
              to="/about"
              className="px-8 py-4 border border-indigo-600 text-indigo-600 rounded-lg 
              font-semibold hover:bg-indigo-600 hover:text-white transition"
            >
              About Me
            </Link>
            
            <Link
              to="/resume"
              className="px-8 py-4 border border-gray-400 text-gray-700 rounded-lg 
              font-semibold hover:bg-gray-700 hover:text-white transition"
            >
              Resume
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 border border-gray-400 text-gray-700 rounded-lg 
              font-semibold hover:bg-gray-700 hover:text-white transition"
            >
              Contact
            </Link>

            
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        className="py-20 px-6  text-center md:text-left max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm <span className="font-semibold">Vibhu</span>, a passionate Web
          Developer and AI enthusiast. My mission is to create impactful
          solutions that not only solve real-world problems but also look
          stunning. Whether it's building scalable web apps or experimenting
          with AI models, I strive to deliver work that stands out.
        </p>
      </section>

      {/* ================= SKILLS SECTION ================= */}
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

      {/* ================= PROJECTS SECTION ================= */}
      <section
        id="projects"
        className="py-20 px-6  max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* TamilOCR Project */}
          <Link
            to="/projects/tamilocr"
            className="block bg-gray-50 p-6 rounded-lg shadow 
            hover:shadow-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">TamilOCR</h3>
            <p className="text-gray-600">
              A deep learning based OCR system for recognizing Tamil script with
              high accuracy.
            </p>
          </Link>

          {/* E-Commerce Project */}
          <Link
            to="/projects/ecommerce"
            className="block bg-gray-50 p-6 rounded-lg shadow 
            hover:shadow-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              E-Commerce
            </h3>
            <p className="text-gray-600">
              A modern fashion boutique web app built with React, Node.js, and
              TailwindCSS.
            </p>
          </Link>

          {/* Flappy Bird Project */}
          <Link
            to="/projects/flappy-bird"
            className="block bg-gray-50 p-6 rounded-lg shadow 
            hover:shadow-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Flappy Bird
            </h3>
            <p className="text-gray-600">
              A fun Flappy Bird clone created using JavaScript and game loop
              mechanics.
            </p>
          </Link>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section
        id="contact"
        className="py-20 px-6  max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">
          Interested in working together? Let's connect!
          <br />
          Drop me a message and I'll get back to you.
        </p>
        <a
          href="mailto:vibhu7551@gmail.com"
          className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold 
          hover:bg-indigo-500 transition"
        >
          Say Hello 👋
        </a>
      </section>
    </div>
  );
};

export default Home;