import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      {/* Top gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT – NAME */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-white">
              Sahil Tarnekar
            </h3>
            <p className="text-slate-400 mt-1">
              Frontend Developer · MERN Stack Developer
            </p>
          </div>

          {/* CENTER – SOCIAL ICONS */}
          <div className="flex gap-6">
            <a
              href="mailto:sahiltarnekar2@gmail.com"
              className="text-slate-400 hover:text-cyan-400 transition text-xl"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/sahiltarnekar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition text-xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sahil-tarnekar-0b2413307/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition text-xl"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* RIGHT – COPYRIGHT */}
          <div className="text-sm text-slate-400 text-center md:text-right">
            © {new Date().getFullYear()} Sahil Tarnekar. <br />
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
