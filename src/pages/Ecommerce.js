import React from "react";
import { Link } from "react-router-dom";

function Ecommerce() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto  backdrop-blur-md  p-6 sm:p-10 rounded-2xl">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 text-center">
          🛍️ E-Commerce Website
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8 text-center">
          A full-stack e-commerce platform <b>(Work in Progress)</b> built with{" "}
          <span className="font-semibold text-indigo-700">
            React.js, Node.js, and MongoDB
          </span>.  
          The goal is to create a boutique-style shopping experience with a
          modern design and seamless features.
          <br />
          <br />
          Features being developed include product catalog, user authentication,
          shopping cart, and secure payment gateway integration.
        </p>

        {/* Planned Features */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
          🚀 Planned Features
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-10 space-y-2 text-left max-w-md mx-auto">
          <li>Product listing with categories</li>
          <li>User login & signup</li>
          <li>Shopping cart and checkout</li>
          <li>Payment gateway integration</li>
          <li>Admin dashboard for product management</li>
        </ul>

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
          🛠 Tech Stack
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {["React.js", "Node.js", "MongoDB", "TailwindCSS"].map((tech, i) => (
            <span
              key={i}
              className="px-5 py-2 bg-white text-black rounded-lg font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/your-github-repo/Ecommerce"
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

export default Ecommerce;