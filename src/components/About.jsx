import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-24 left-24 w-72 h-72 bg-cyan-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-24 right-24 w-72 h-72 bg-purple-200/40 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-16 items-start">

        {/* ================= ABOUT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 md:col-span-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />

          <p className="text-slate-600 leading-relaxed mb-4">
            I am a passionate{" "}
            <span className="font-medium text-slate-800">
              Frontend Developer
            </span>{" "}
            and an{" "}
            <span className="font-medium text-slate-800">
              M.Sc. (IT) Integrated student
            </span>{" "}
            at{" "}
            <span className="font-medium text-slate-800">
              Gandhinagar University, Ahmedabad
            </span>
            .
          </p>

          <p className="text-slate-600 leading-relaxed">
            I specialize in building responsive, user-friendly interfaces using
            HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, jQuery, and
            modern UI practices.
          </p>
        </motion.div>

        {/* ================= IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 md:col-span-4 h-[300px] md:h-[420px]"
        >
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_tfb3estd.json"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "100%" }}
            loop
            autoplay
          />
        </motion.div>

        {/* ================= EDUCATION ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-3 md:order-3 md:col-span-6"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Education & Training
          </h3>

          <div className="space-y-6">
            {/* Education 1 */}
            <div className="relative pl-6 border-l-2 border-cyan-400">
              <span className="absolute -left-[7px] top-1 w-3 h-3 bg-cyan-500 rounded-full" />
              <h4 className="text-lg font-semibold text-slate-800">
                M.Sc. in Information Technology
              </h4>
              <p className="text-sm text-slate-500">
                2023 – Present | Gandhinagar University
              </p>
              <p className="text-slate-600 mt-2">
                Focused on programming, databases, software development, and
                modern web technologies with practical projects.
              </p>
            </div>

            {/* Education 2 */}
            <div className="relative pl-6 border-l-2 border-blue-400">
              <span className="absolute -left-[7px] top-1 w-3 h-3 bg-blue-500 rounded-full" />
              <h4 className="text-lg font-semibold text-slate-800">
                Full Stack Developer Training
              </h4>
              <p className="text-sm text-slate-500">
                Feb 2025 – Present | Red & White Multimedia Education
              </p>
              <p className="text-slate-600 mt-2">
                Frontend-focused training with React.js, Tailwind CSS,
                JavaScript, APIs, Git/GitHub, and real-world projects.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
