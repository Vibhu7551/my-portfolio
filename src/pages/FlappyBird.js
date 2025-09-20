import React from "react";
import { Link } from "react-router-dom";

function FlappyBird() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 p-10">
      <div className="max-w-4xl mx-auto backdrop-blur-md p-10 rounded-2xl">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 text-gray-900 text-center">
          Flappy Bird Game 🐦
        </h1>

        {/* Description */}
        <p className="text-gray-800 leading-relaxed mb-8 text-lg">
          Flappy Bird is a classic side-scrolling arcade game where players guide 
          a bird through endless obstacles by tapping to keep it airborne.
          <br /><br />
          I recreated this game using{" "}
          <span className="font-semibold text-indigo-700">Python & Pygame</span>, 
          focusing on smooth controls, collision detection, and scoring mechanics.  
          This project strengthened my fundamentals in{" "}
          <span className="font-semibold text-indigo-700">
            game physics, event handling, and rendering
          </span>.
          <br /><br />
          Future improvements include adding difficulty levels, background music, and
          leaderboard integration.
        </p>

        {/* Screenshots */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <img
            src={process.env.PUBLIC_URL + "/flappy-screenshot1.png"}
            alt="Flappy Bird Gameplay Screenshot 1"
            className="rounded-lg shadow-md hover:shadow-xl transition"
          />
          <img
            src={process.env.PUBLIC_URL + "/flappy-screenshot2.png"}
            alt="Flappy Bird Gameplay Screenshot 2"
            className="rounded-lg shadow-md hover:shadow-xl transition"
          />
        </div>

        {/* Features */}
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">✨ Features</h2>
        <ul className="list-disc list-inside text-gray-800 mb-10 text-left space-y-2">
          <li>Classic Flappy Bird mechanics with jumping physics</li>
          <li>Dynamic obstacle generation</li>
          <li>Real-time scoring system</li>
          <li>Game-over detection and restart option</li>
          <li>Smooth performance with Python Pygame</li>
        </ul>

        {/* Tech Stack */}
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">🛠 Tech Stack</h2>
        <div className="flex flex-wrap gap-4 mb-10">
          <span className="px-5 py-2 bg-white rounded-lg shadow-sm">
            Python
          </span>
          <span className="px-5 py-2 bg-white rounded-lg shadow-sm">
            Pygame
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/Vibhu7551/Flappy-Bird"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition shadow"
          >
            View on GitHub
          </a>
          <Link
            to="/"
            className="px-6 py-3 border border-gray-400 text-gray-700 rounded-lg 
              font-semibold hover:bg-gray-700 hover:text-white transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FlappyBird;