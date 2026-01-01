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

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* ================= ABOUT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 text-left md:pl-12 md:max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 ">
            About Me
          </h2>
          <div className="w-20 h-1 mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />

<p className="text-slate-600 leading-relaxed mb-4">
  I am a motivated{" "}
  <span className="font-medium text-slate-800">
    Frontend Developer (Fresher)
  </span>{" "}
  and an{" "}
  <span className="font-medium text-slate-800">
    M.Sc. (IT) Integrated student
  </span>{" "}
  at{" "}
  <span className="font-medium text-slate-800">
    Gandhinagar University, Ahmedabad
  </span>.
  I am passionate about learning and building modern, responsive web
  interfaces.
</p>

<p className="text-slate-600 leading-relaxed mb-4">
  I have learned and practiced frontend technologies including{" "}
  <span className="font-medium text-slate-800">
    HTML, CSS, Tailwind CSS, Bootstrap, jQuery, and React.js
  </span>
  . I enjoy creating clean layouts, responsive designs, and user-friendly
  interfaces that work smoothly across different screen sizes.
</p>

<p className="text-slate-600 leading-relaxed mb-4">
  Along with frontend development, I am currently learning backend
  technologies such as{" "}
  <span className="font-medium text-slate-800">
    Node.js, Express.js, and MongoDB
  </span>
  . I am building a basic understanding of server-side development, REST
  APIs, and database operations.
</p>



        </motion.div>

        {/* ================= IMAGE (ABOUT) ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-2 h-[280px] md:h-[420px]"
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

        {/* ================= IMAGE (EDUCATION) ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden md:block order-3 h-[420px]"
        >
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "100%" }}
            loop
            autoplay
          />
        </motion.div>

        {/* ================= EDUCATION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-3 md:order-4"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Education & Training
          </h3>

          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-cyan-400">
              <span className="absolute -left-[7px] top-1 w-3 h-3 bg-cyan-500 rounded-full" />
              <h4 className="text-lg font-semibold text-slate-800">
                Master of Science in Information Technology (M.Sc. IT)
              </h4>
              <p className="text-sm text-slate-500">
                2023 – Present | Gandhinagar University
              </p>
              <p className="text-slate-600 mt-2">
                Focused on programming, databases, software development, and
                modern web technologies with hands-on projects.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-blue-400">
              <span className="absolute -left-[7px] top-1 w-3 h-3 bg-blue-500 rounded-full" />
              <h4 className="text-lg font-semibold text-slate-800">
                Full Stack Developer Training
              </h4>
              <p className="text-sm text-slate-500">
                Feb 2025 – Present | Red & White Multimedia Education
              </p>
              <p className="text-slate-600 mt-2">
                Frontend-focused training using React.js, Tailwind CSS,
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
