import { motion } from "framer-motion";
import ParticlesBg from "../components/effects/ParticlesBg";
import { fadeUp } from "../animations/fadeUp"; // Ensure this is a named export
import Container from "../components/common/Container";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Red-Orange Particle Background */}
      <ParticlesBg />

      <Container>
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center pt-20">

          {/* LEFT – TEXT CONTENT */}
          <div className="md:col-span-6 z-10">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-sm uppercase tracking-widest text-red-600 font-bold mb-4"
            >
              Frontend Developer · Learning Full Stack
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6"
            >
              Hi, I’m <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Sahil Tarnekar</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl"
            >
              I build modern, responsive web applications using React,
              JavaScript, and modern frontend technologies. Currently
              open to internship and full-time opportunities.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              {/* Primary Action: Projects */}
              <a
                href="#projects"
                className="px-8 py-4 rounded-full font-bold text-white 
                bg-gradient-to-r from-red-600 to-orange-500 
                hover:shadow-lg hover:shadow-red-200 transition-all transform hover:-translate-y-1"
              >
                View Projects
              </a>

              {/* Secondary Action: Contact */}
              <a
                href="#contact"
                className="px-8 py-4 rounded-full font-bold border-2 border-slate-200 
                text-slate-700 hover:border-red-600 hover:text-red-600 transition-all transform hover:-translate-y-1"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* RIGHT – DEV LOTTIE ANIMATION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="md:col-span-6 flex justify-center items-center"
          >
            <div className="w-full max-w-lg animate-float">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_qp1q7mct.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;