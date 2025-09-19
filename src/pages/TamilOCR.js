import React from "react";
import { Link } from "react-router-dom";

function TamilOCR() {
  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 p-10">
      <div className="max-w-4xl mx-auto  p-8 rounded-lg ">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Tamil Palm Leaf Character Recognition
        </h1>

        {/* Description */}
        <p className="text-black-700 leading-relaxed mb-6">
          This project focuses on recognizing Tamil characters written on ancient
          palm leaf manuscripts. The preprocessing and segmentation pipeline has
          been completed successfully, enabling characters to be extracted
          clearly for recognition tasks.  
          <br /><br />
          The next stage involves classification of segmented characters using
          deep learning models. This research contributes towards the digital
          preservation of historic Tamil manuscripts.
        </p>

        {/* Screenshots */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <img
            src="/tamilocr-screenshot1.png"
            alt="Palm Leaf Manuscript Processing Screenshot 1"
            className="rounded-lg shadow"
          />
          <img
            src="/tamilocr-screenshot2.png"
            alt="Palm Leaf Manuscript Processing Screenshot 2"
            className="rounded-lg shadow"
          />
        </div>

        {/* Progress */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Progress</h2>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>Image preprocessing completed</li>
          <li><strong>Segmentation process completed ✅</strong></li>
          <li>Classification stage in progress</li>
        </ul>

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tech Stack</h2>
        <div className="flex space-x-4 mb-8">
          <span className="px-4 py-2 bg-white rounded-lg shadow-lg">
            Python
          </span>
          <span className="px-4 py-2 bg-white rounded-lg shadow-lg">
            OpenCV
          </span>
          <span className="px-4 py-2 bg-white rounded-lg shadow-lg">
            Deep Learning
          </span>
        </div>

        {/* Back to Home */}
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

export default TamilOCR;