import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionHeader from "../components/ui/SectionHeader";
import { fadeUp } from "../animations/fadeUp";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#f8fafc]">
      <Container>
        <SectionHeader
          title="About Me"
          subtitle="Background, education, and what I’m currently working towards"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start mt-12">
          
          {/* ABOUT TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-7 max-w-[620px] text-slate-600 space-y-6"
          >
            <p className="text-lg leading-relaxed">
              I am a motivated{" "}
              <span className="text-red-600 font-bold">
                Frontend Developer
              </span>{" "}
              and an{" "}
              <span className="text-red-600 font-bold">
                M.Sc. (IT) Integrated student
              </span>{" "}
              at{" "}
              <span className="text-orange-600 font-semibold">
                Gandhinagar University, Ahmedabad
              </span>.
              I enjoy building modern, responsive, and user-friendly web interfaces.
            </p>

            <p>
              I have hands-on experience with frontend technologies such as{" "}
              <span className="text-slate-900 font-medium px-2 py-0.5 bg-orange-50 rounded border border-orange-100">
                HTML, CSS, Tailwind CSS, Bootstrap, jQuery, and React.js
              </span>. 
              My focus is on clean UI, responsiveness, and consistent user experience across devices.
            </p>

            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-red-500 shadow-sm">
              <p className="italic">
                "Along with frontend development, I am currently learning backend
                technologies including{" "}
                <span className="text-red-600 font-bold">
                  Node.js, Express.js, and MongoDB
                </span>. 
                I am building a strong foundation in REST APIs and database handling."
              </p>
            </div>

            <p>
              I am actively looking for{" "}
              <span className="text-red-600 font-bold hover:underline cursor-default">
                internship and entry-level opportunities
              </span>{" "}
              where I can apply my skills, gain real-world experience, and grow
              as a full-stack developer.
            </p>
          </motion.div>

          {/* EDUCATION TIMELINE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-5 border-l-2 border-slate-100 pl-8 relative"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-10 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-red-500 inline-block"></span>
              Education & Training
            </h3>

            <div className="space-y-12">
              {/* EDUCATION ITEM */}
              <div className="relative group">
                <span className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-red-500 rounded-full transition-transform group-hover:scale-125" />
                <h4 className="text-slate-900 font-bold group-hover:text-red-600 transition-colors">
                  Master of Science in IT (M.Sc. IT)
                </h4>
                <p className="text-xs font-black uppercase tracking-widest text-orange-500 mt-1">
                  2023 – Present · Gandhinagar University
                </p>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  Focused on programming, databases, and modern web technologies with hands-on projects.
                </p>
              </div>

              {/* TRAINING ITEM */}
              <div className="relative group">
                <span className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-orange-500 rounded-full transition-transform group-hover:scale-125" />
                <h4 className="text-slate-900 font-bold group-hover:text-orange-600 transition-colors">
                  Full Stack Developer Training
                </h4>
                <p className="text-xs font-black uppercase tracking-widest text-orange-500 mt-1">
                  Feb 2025 – Present · Red & White Multimedia
                </p>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  Intensive training in React.js, Tailwind, JavaScript, and Git/GitHub through real-world builds.
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