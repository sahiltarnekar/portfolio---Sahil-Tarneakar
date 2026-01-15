import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionHeader from "../components/ui/SectionHeader";
import { fadeUp } from "../animations/fadeUp";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiJquery } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0b0f19]">
      <Container>
        <SectionHeader
          title="Skills"
          subtitle="Focused on frontend development with growing backend knowledge."
        />

        <div className="space-y-10">
          {/* Frontend */}
          <SkillRow title="Frontend">
            <Skill icon={<FaHtml5 />} label="HTML5" />
            <Skill icon={<FaCss3Alt />} label="CSS3" />
            <Skill icon={<FaJs />} label="JavaScript" />
            <Skill icon={<FaReact />} label="React.js" />
          </SkillRow>

          {/* Frameworks */}
          <SkillRow title="Frameworks">
            <Skill icon={<FaBootstrap />} label="Bootstrap" />
          </SkillRow>

          {/* Libraries */}
          <SkillRow title="Libraries">
            <Skill icon={<SiJquery />} label="jQuery" />
          </SkillRow>

          {/* Tools */}
          <SkillRow title="Tools">
            <Skill icon={<FaGitAlt />} label="Git" />
            <Skill icon={<FaGithub />} label="GitHub" />
          </SkillRow>
        </div>
      </Container>
    </section>
  );
};

export default Skills;

/* ================= ROW ================= */
const SkillRow = ({ title, children }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6
      border-b border-[#1f2937] pb-6"
    >
      <h3 className="md:col-span-3 text-lg font-semibold text-white">
        {title}
      </h3>

      <div className="md:col-span-9 flex flex-wrap gap-6">{children}</div>
    </motion.div>
  );
};

/* ================= SKILL ================= */
const Skill = ({ icon, label }) => {
  return (
    <div
      className="flex items-center gap-3 text-sm font-medium
      text-gray-400 hover:text-cyan-400 transition"
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
};
