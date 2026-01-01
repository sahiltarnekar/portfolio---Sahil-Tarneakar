import React from "react";
import { motion } from "framer-motion";
import ParticlesBg from "./ParticlesBg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
                 bg-gradient-to-br from-slate-50 via-white to-slate-100 "
    >
      {/* Background Particles */}
      <ParticlesBg />

      {/* Soft Gradient Overlays (match skills glow) */}
      <div className="absolute top-20 left-20 w-[420px] h-[420px]
                      bg-cyan-300/30 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-20 w-[420px] h-[420px]
                      bg-purple-300/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto w-full px-6
                      grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT – TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Accent line */}
          <div className="w-16 h-1 rounded-full
                          bg-gradient-to-r from-cyan-500 to-blue-500 mt-24 md:mt-1"  />

          <p className="text-slate-600 text-lg">
            Hello, I’m
          </p>

          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight
                       bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500
                       bg-clip-text text-transparent"
          >
            Sahil Tarnekar
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-slate-700">
            Full Stack Developer{" "}
            <span className="text-slate-400 font-normal">|</span>{" "}
            MERN Stack Developer
          </p>

          <p className="text-slate-500">
            M.Sc. IT Student @{" "}
            <span className="font-medium text-slate-700">
              Gandhinagar University
            </span>
          </p>

          <p className="text-slate-500 max-w-lg leading-relaxed">
            I design and develop scalable, modern web applications with a
            strong focus on clean architecture, performance, and user experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-3 rounded-xl text-sm font-semibold
                         bg-gradient-to-r from-cyan-500 to-blue-500
                         text-white shadow-lg hover:shadow-xl transition"
            >
              View Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-3 rounded-xl text-sm font-semibold
                         border border-slate-300 text-slate-700
                         bg-white/70 backdrop-blur
                         hover:bg-slate-200 transition"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT – LOTTIE ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-[320px] md:h-[440px]"
        >
          {/* Gradient ring behind lottie */}
          <div className="absolute inset-0 rounded-2xl
                          bg-gradient-to-tr from-cyan-400/20 to-purple-400/20
                          blur-2xl" />

          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_4kx2q32n.json"
            background="transparent"
            speed="0.5"
            style={{ width: "100%", height: "100%" }}
            loop
            autoplay
          ></lottie-player>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
