import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiJquery } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-15 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      {/* soft background accents */}
      <div className="absolute top-24 left-24 w-72 h-72 bg-cyan-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-24 right-24 w-72 h-72 bg-purple-200/40 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-500 text-lg">
            Technologies I use to build modern web applications
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
          {/* ROW 1 — 60 / 40 */}
          <SkillCard title="Frontend" span="md:col-span-6">
            <Skill icon={<FaHtml5 className="text-orange-500" />} label="HTML" />
            <Skill icon={<FaCss3Alt className="text-blue-500" />} label="CSS" />
            <Skill icon={<FaJs className="text-yellow-500" />} label="JavaScript" />
            <Skill icon={<FaReact className="text-cyan-500" />} label="Media Queries" />
            <Skill icon={<FaReact className="text-cyan-500" />} label="Responsive Design" />
          </SkillCard>

          <SkillCard title="Frameworks" span="md:col-span-4">
            <Skill icon={<FaBootstrap className="text-purple-600" />} label="Bootstrap" />
          </SkillCard>

          {/* ROW 2 — 50 / 50 */}
          <SkillCard title="Libraries" span="md:col-span-5">
            <Skill icon={<SiJquery className="text-blue-600" />} label="jQuery" />
            <Skill icon={<FaReact className="text-cyan-500" />} label="React.js" />
          </SkillCard>

          <SkillCard title="Tools" span="md:col-span-5">
            <Skill icon={<FaGitAlt className="text-red-500" />} label="Git" />
            <Skill icon={<FaGithub className="text-slate-800" />} label="GitHub" />
          </SkillCard>
        </div>
      </div>
    </section>
  );
};

/* Card with accent + hr */
const SkillCard = ({ title, children, span }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className={`${span} relative rounded-2xl bg-white/80 backdrop-blur
                shadow-lg hover:shadow-2xl transition`}
  >
    {/* top gradient accent */}
    <div className="h-1 w-full rounded-t-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

    <div className="p-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-4">
        {title}
      </h3>

      {/* HR divider */}
      <hr className="mb-6 border-slate-200" />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  </motion.div>
);

/* Skill item */
const Skill = ({ icon, label }) => (
  <div className="flex items-center gap-2 text-slate-600 font-medium">
    {icon}
    <span>{label}</span>
  </div>
);

export default Skills;
