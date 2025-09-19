import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
  "service_rx25sgl",      // Service ID
  "template_4l3k3fc",     // Template ID
  form.current, 
  "KiEjvp8ziA5jEzXx2"     // Public Key (EXACTLY as dashboard la iruku)
)

      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 px-6 py-20">
      <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl w-full max-w-xl">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          Contact Me
        </h2>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg 
            font-semibold hover:bg-indigo-500 transition"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className="mt-4 text-center text-gray-700 font-medium">{status}</p>
        )}

        {/* Social Links */}
        <div className="mt-10 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Connect with me
          </h3>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/Vibhu7551"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-medium hover:text-indigo-600 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vibhu-n-b91b16217"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-medium hover:text-indigo-600 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;