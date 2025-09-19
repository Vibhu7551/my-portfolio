import React from "react";
import { Link } from "react-router-dom";

function Ecommerce() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 p-10">
      <div className="max-w-4xl mx-auto  p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          E-Commerce Website
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          A full-stack e-commerce platform (Work in Progress) built with
          **React.js, Node.js, and MongoDB**. The project aims to create a
          boutique-style shopping experience with modern design and features.
          <br /><br />
          Features being developed include product catalog, user authentication,
          shopping cart, and secure payment gateway integration.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Planned Features</h2>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>Product listing with categories</li>
          <li>User login & signup</li>
          <li>Shopping cart and checkout</li>
          <li>Payment gateway integration</li>
          <li>Admin dashboard for product management</li>
        </ul>

        {/* GitHub placeholder */}
        <a
          href="https://github.com/your-github-repo/Ecommerce"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mr-4"
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
  );
}

export default Ecommerce;