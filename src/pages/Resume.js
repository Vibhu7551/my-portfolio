import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 p-10">
      <div className="max-w-5xl mx-auto  rounded-2xl p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800">Vibhu N</h1>
          <p className="text-lg text-gray-600">Web Developer & AI Enthusiast</p>
          <a
            href="/resume.pdf"
            download="Vibhu-Resume.pdf"
            className="mt-4 inline-block px-6 py-3 border border-gray-400 text-gray-700 rounded-lg 
              font-semibold hover:bg-gray-700 hover:text-white transition"
          >
            ⬇ Download Resume
          </a>
        </div>

        {/* Profile */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-black-700 mb-3">Profile</h2>
          <p className="text-black-700 leading-relaxed">
            Enthusiastic and detail-oriented web developer with a strong foundation in
            WordPress development. Passionate about creating responsive, user-friendly
            websites with clean designs and efficient functionality. Skilled in front-end
            customization, theme development, and plugin integration. Eager to apply
            technical skills and creativity to real-world projects while continuously
            learning and improving.
          </p>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-black-700 mb-3">Education</h2>
          <div className="space-y-4">
            <div className=" rounded-lg p-4 ">
              <h3 className="font-semibold">B.E Computer Science and Engineering</h3>
              <p className="text-gray-600">SRM Valliammai Engineering College (2021 – 2025, Chennai)</p>
            </div>
            <div className=" rounded-lg p-4 ">
              <h3 className="font-semibold">12th</h3>
              <p className="text-gray-600">Karapettai Boys Hr. Sec. School (2020 – 2021, Thoothukudi)</p>
            </div>
            <div className="rounded-lg p-4 ">
              <h3 className="font-semibold">10th</h3>
              <p className="text-gray-600">Karapettai Boys Hr. Sec. School (2018 – 2019, Thoothukudi)</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-black-700 mb-3">Projects</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Palm Leaves Manuscript Recognition using Capsule Networks (Deep Learning)</li>
            <li>Flappy Bird 2D Game using Python</li>
          </ul>
        </section>
        {/* Technical Skills */}
<section className="mb-10">
  <h2 className="text-2xl font-bold text-black-700 mb-3">Technical Skills</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {[
      "Python",
      "HTML",
      "CSS",
      "Node.js",
      "React",
      "JavaScript",
      "MySQL",
      "MS Office",
    ].map((skill, i) => (
      <div
        key={i}
        className="px-4 py-3 bg-white text-black-700 rounded-lg text-sm font-medium text-center shadow-sm hover:shadow-md "
      >
        {skill}
      </div>
    ))}
  </div>
</section>

{/* Key Strengths */}
<section className="mb-10">
  <h2 className="text-2xl font-bold text-black-700 mb-3">Key Strengths</h2>
  <p className="text-gray-700 leading-relaxed"> • Quick learner</p>
  <p className="text-gray-700 leading-relaxed"> • Good team player</p>
  <p className="text-gray-700 leading-relaxed">• Problem-Solving </p>
  <p className="text-gray-700 leading-relaxed"> • Good Communication skill </p>
</section>
transition
{/* Languages */}
<section>
  <h2 className="text-2xl font-bold text-black-700 mb-3">Languages</h2>
  <p className="text-gray-700 leading-relaxed"> • Tamil </p>
  <p className="text-gray-700 leading-relaxed"> • English</p>
</section>

      </div>
    </div>
  );
};

export default Resume;