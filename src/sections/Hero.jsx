import { motion } from "framer-motion";
import ParticlesBg from "../components/effects/ParticlesBg";
import { fadeUp } from "../animations/fadeUp";
import Container from "../components/common/Container";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0b0f19] overflow-hidden"
    >
      {/* Decorative background */}
      <ParticlesBg />

<Container>
  <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

    {/* LEFT – TEXT */}
    <div className="md:col-span-6">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-sm uppercase tracking-widest text-cyan-400 mb-4"
      >
        Frontend Developer · Learning Full Stack
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
      >
        Hi, I’m Sahil Tarnekar
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-gray-400 leading-relaxed mb-10 max-w-xl"
      >
        I build modern, responsive web applications using React,
        JavaScript, and modern frontend technologies. Currently open
        to internship and full-time opportunities.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-md font-medium
          bg-cyan-400 text-black hover:bg-cyan-300 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-md font-medium
          border border-[#1f2937]
          text-gray-300
          hover:border-cyan-400 hover:text-cyan-400 transition"
        >
          Contact
        </a>
      </motion.div>
    </div>

    {/* RIGHT – VISUAL (NOT EMPTY ANYMORE) */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="hidden md:flex md:col-span-6 justify-center"
    >
      <div
        className="w-full max-w-md p-6 rounded-xl
        bg-[#111827] border border-[#1f2937]
        text-sm font-mono text-gray-300"
      >
        <p className="text-cyan-400">$ npm run build</p>
        <p className="mt-2">✔ Compiled successfully</p>
        <p className="mt-4 text-cyan-400">$ Deploying project…</p>
        <p className="mt-2">✔ Production ready</p>
      </div>
    </motion.div>

  </div>
</Container>

    </section>
  );
};

export default Hero;
