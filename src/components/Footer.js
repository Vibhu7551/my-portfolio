import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-8">
      <p>© {new Date().getFullYear()} My Portfolio | Built with React + Tailwind | Designed By Vibhu</p>
    </footer>
  );
}

export default Footer;
