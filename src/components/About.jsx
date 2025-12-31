import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-15 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute top-24 left-24 w-72 h-72 bg-cyan-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-24 right-24 w-72 h-72 bg-purple-200/40 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-16 items-center">

        {/* LEFT – LOTTIE (40%) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-4 h-[320px] md:h-[420px]"
        >
          <div className="w-full h-full">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_tfb3estd.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "100%" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </motion.div>

        {/* RIGHT – CONTENT (60%) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-6 space-y-8"
        >
          {/* Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
          </div>

          {/* About Text */}
          <p className="text-slate-600 leading-relaxed">
            I am a passionate <span className="font-medium text-slate-800">Frontend Developer</span> and
            an <span className="font-medium text-slate-800">M.Sc. (IT) Integrated student</span> at{" "}
            <span className="font-medium text-slate-800">
              Gandhinagar University, Ahmedabad
            </span>.
            I specialize in designing and developing responsive, user-friendly websites using
            HTML, CSS, JavaScript, Bootstrap, React, jQuery, and Media Queries.
          </p>

          <p className="text-slate-600 leading-relaxed">
            I have hands-on experience with Git and GitHub and enjoy building clean,
            scalable interfaces. I am eager to learn new technologies, enhance my skills,
            and gain practical experience through real-world projects and internship opportunities.
          </p>

          {/* Education */}
          <div className="pt-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Education & Training
            </h3>

            <div className="space-y-6">
              {/* Education Item 1 */}
              <div className="relative pl-6 border-l-2 border-cyan-400">
                <span className="absolute -left-[7px] top-1 w-3 h-3 bg-cyan-500 rounded-full" />
                <h4 className="text-lg font-semibold text-slate-800">
                  Master of Science in Information Technology (M.Sc. IT)
                </h4>
                <p className="text-sm text-slate-500">
                  2023 – Present | Gandhinagar University
                </p>
                <p className="text-slate-600 mt-2">
                  Focused on building strong foundations in computer science,
                  programming, software development, database management,
                  and modern web technologies. Actively engaged in practical
                  projects to strengthen problem-solving and real-world IT skills.
                </p>
              </div>

              {/* Education Item 2 */}
              <div className="relative pl-6 border-l-2 border-blue-400">
                <span className="absolute -left-[7px] top-1 w-3 h-3 bg-blue-500 rounded-full" />
                <h4 className="text-lg font-semibold text-slate-800">
                  Full Stack Developer
                </h4>
                <p className="text-sm text-slate-500">
                  Feb 2025 – Present | Red and White Multimedia Education
                </p>
                <p className="text-slate-600 mt-2">
                  Enthusiastic Frontend Developer with a solid foundation in
                  HTML, CSS, JavaScript, jQuery, Bootstrap, Tailwind CSS, and React.js,
                  focusing on modern UI development and real-world project implementation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
