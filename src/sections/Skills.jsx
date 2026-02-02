import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/common/Container';
import SectionHeader from '../components/ui/SectionHeader';
import { fadeUp } from '../animations/fadeUp';

// Icons with official brand colors
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import { SiJquery, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#f8fafc]">
      <Container>
        <SectionHeader
          title="Skills"
          subtitle="Focused on frontend development with growing backend knowledge."
        />

        <div className="space-y-10">
          <SkillRow title="Frontend">
            <Skill
              icon={<FaHtml5 className="text-[#e34f26]" />}
              label="HTML5"
              summary="Expertise in semantic tags, SEO best practices, and creating accessible (A11y) structures."
            />
            <Skill
              icon={<FaCss3Alt className="text-[#1572b6]" />}
              label="CSS3"
              summary="Proficient in Flexbox, CSS Grid, media queries, and complex keyframe animations."
            />
            <Skill
              icon={<FaJs className="text-[#f7df1e]" />}
              label="JavaScript"
              summary="Modern ES6+ development, asynchronous programming (Promises/Async-Await), and DOM manipulation."
            />
            <Skill
              icon={<FaReact className="text-[#61dafb]" />}
              label="React.js"
              summary="Building reusable components, managing state with hooks, and optimizing render performance."
            />
            <Skill
              icon={<SiTailwindcss className="text-[#06b6d4]" />}
              label="Tailwind"
              summary="Utility-first styling for rapid UI development and maintaining consistent design systems."
            />
          </SkillRow>

          <SkillRow title="Frameworks">
            <Skill
              icon={<FaBootstrap className="text-[#7952b3]" />}
              label="Bootstrap"
              summary="Creating responsive grid layouts and utilizing pre-built UI component libraries."
            />
          </SkillRow>

          <SkillRow title="Libraries">
            <Skill
              icon={<SiJquery className="text-[#0769ad]" />}
              label="jQuery"
              summary="Simplifying event handling and lightweight scripting for specific client requirements."
            />
          </SkillRow>

          <SkillRow title="Tools">
            <Skill
              icon={<FaGitAlt className="text-[#f05032]" />}
              label="Git"
              summary="Local version control, managing branches, and handling merge conflicts efficiently."
            />
            <Skill
              icon={<FaGithub className="text-[#181717]" />}
              label="GitHub"
              summary="Collaborative coding, pull request workflows, and hosting projects for public access."
            />
          </SkillRow>
        </div>
      </Container>
    </section>
  );
};

/* ================= ROW ================= */
const SkillRow = ({ title, children }) => {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleToggle = (skillData) => {
    setActiveSkill((prev) =>
      prev?.label === skillData.label ? null : skillData
    );
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-slate-200 pb-8"
    >
      <h3 className="md:col-span-3 text-lg font-bold text-slate-800 uppercase tracking-tight">
        {title}
      </h3>

      <div className="md:col-span-9">
        <div className="flex flex-wrap gap-6">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              onClick: () =>
                handleToggle({
                  label: child.props.label,
                  summary: child.props.summary,
                }),
              isActive: activeSkill?.label === child.props.label,
            })
          )}
        </div>

        <AnimatePresence>
          {activeSkill && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 20 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="overflow-hidden"
            >
              <div className="p-5 rounded-xl bg-white border-l-4 border-l-red-600 border border-slate-200 shadow-sm shadow-red-100">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <span className="text-red-600 font-extrabold mr-2">
                    {activeSkill.label.toUpperCase()}:
                  </span>
                  {activeSkill.summary}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/* ================= SKILL ================= */
const Skill = ({ icon, label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 text-sm font-semibold transition-all duration-300 outline-none group
      ${isActive ? 'scale-110' : 'hover:scale-105'}`}
    >
      <span
        className={`text-2xl transition-transform duration-300 ${isActive ? 'drop-shadow-sm' : 'grayscale group-hover:grayscale-0'}`}
      >
        {icon}
      </span>
      <span
        className={`${isActive ? 'text-red-600 underline underline-offset-4' : 'text-slate-500 group-hover:text-slate-900'}`}
      >
        {label}
      </span>
    </button>
  );
};

export default Skills;
