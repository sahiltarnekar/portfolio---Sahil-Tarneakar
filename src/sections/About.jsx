import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionHeader from "../components/ui/SectionHeader";
import { fadeUp } from "../animations/fadeUp";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0b0f19]">
      <Container>

        <SectionHeader
          title="About Me"
          subtitle="Background, education, and what I’m currently working towards"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">

          {/* ABOUT TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-7 max-w-[620px] text-gray-400 space-y-6"
          >
            <p>
              I am a motivated{" "}
              <span className="text-white font-medium">
                Frontend Developer (Fresher)
              </span>{" "}
              and an{" "}
              <span className="text-white font-medium">
                M.Sc. (IT) Integrated student
              </span>{" "}
              at{" "}
              <span className="text-white font-medium">
                Gandhinagar University, Ahmedabad
              </span>.
              I enjoy building modern, responsive, and user-friendly web
              interfaces.
            </p>

            <p>
              I have hands-on experience with frontend technologies such as{" "}
              <span className="text-white font-medium">
                HTML, CSS, Tailwind CSS, Bootstrap, jQuery, and React.js
              </span>.
              My focus is on clean UI, responsiveness, and consistent user
              experience across devices.
            </p>

            <p>
              Along with frontend development, I am currently learning backend
              technologies including{" "}
              <span className="text-white font-medium">
                Node.js, Express.js, and MongoDB
              </span>.
              I am building a strong foundation in REST APIs, server-side logic,
              and database handling.
            </p>

            <p>
              I am actively looking for{" "}
              <span className="text-white font-medium">
                internship and entry-level opportunities
              </span>{" "}
              where I can apply my skills, gain real-world experience, and grow
              as a full-stack developer.
            </p>
          </motion.div>

          {/* EDUCATION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-5 border-l border-[#1f2937] pl-10"
          >
            <h3 className="text-xl font-semibold text-white mb-8">
              Education & Training
            </h3>

            <div className="space-y-10">

              {/* EDUCATION ITEM */}
              <div className="relative">
                <span className="absolute -left-6 top-1 w-3 h-3 bg-cyan-400 rounded-full" />
                <h4 className="text-white font-medium">
                  Master of Science in Information Technology (M.Sc. IT)
                </h4>
                <p className="text-sm text-gray-500">
                  2023 – Present · Gandhinagar University
                </p>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  Focused on programming, databases, software development, and
                  modern web technologies with hands-on projects.
                </p>
              </div>

              {/* TRAINING ITEM */}
              <div className="relative">
                <span className="absolute -left-6 top-1 w-3 h-3 bg-cyan-400 rounded-full" />
                <h4 className="text-white font-medium">
                  Full Stack Developer Training
                </h4>
                <p className="text-sm text-gray-500">
                  Feb 2025 – Present · Red & White Multimedia Education
                </p>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  Frontend-focused training using React.js, Tailwind CSS,
                  JavaScript, APIs, Git/GitHub, and real-world projects.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default About;
