import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute top-24 left-24 w-72 h-72 bg-cyan-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-24 right-24 w-72 h-72 bg-purple-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-16 items-center">

        {/* LEFT – 60% CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-6 space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Contact
            </h2>
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
          </div>

          <p className="text-slate-600 max-w-xl leading-relaxed">
            I’m open to internships, full-time opportunities, and real-world
            projects. Feel free to reach out — I’d love to connect and
            collaborate.
          </p>

          {/* CONTACT ICONS */}
          <div className="flex flex-col gap-5 pt-4">
            {/* Email */}
            <a
              href="mailto:sahiltarnekar2@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center
                              bg-gradient-to-r from-cyan-500 to-blue-500
                              text-white text-xl group-hover:scale-110 transition">
                <FaEnvelope />
              </div>
              <span className="text-slate-700 font-medium group-hover:text-cyan-600 transition">
                sahiltarnekar2@gmail.com
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sahiltarnekar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center
                              bg-gradient-to-r from-slate-800 to-slate-900
                              text-white text-xl group-hover:scale-110 transition">
                <FaGithub />
              </div>
              <span className="text-slate-700 font-medium group-hover:text-slate-900 transition">
                github.com/sahiltarnekar
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sahil-tarnekar-0b2413307/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center
                              bg-gradient-to-r from-blue-600 to-blue-700
                              text-white text-xl group-hover:scale-110 transition">
                <FaLinkedin />
              </div>
              <span className="text-slate-700 font-medium group-hover:text-blue-600 transition">
                linkedin.com/in/sahiltarnekar
              </span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT – 40% MAP */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-4 w-full h-[320px] md:h-[420px]
                     rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            title="location"
            src="https://www.google.com/maps?q=Ahmedabad,Gujarat,India&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
