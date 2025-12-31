import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    title: "HouseHunter",
    desc:
      "Single-page real estate application with dynamic routing, property and agent detail pages, and a conversion-focused UI.",
    tech: ["React", "Bootstrap", "JavaScript"],
    image: "/househunter.png",
    github: "#",
    live: "https://househunter1108.netlify.app/",
  },
  {
    title: "Movie Management Admin Panel",
    desc:
      "Admin dashboard built using React and Redux Toolkit featuring full CRUD operations and API integration.",
    tech: ["React", "Redux Toolkit", "JSON Server", "Bootstrap"],
    image: "/Product.png",
    github: "#",
    live: "https://datatablels.netlify.app/",
  },
  {
    title: "Recipe Collection Management",
    desc:
      "Recipe management app with authentication, localStorage support, and modern glassmorphism UI.",
    tech: ["React", "JavaScript", "CSS"],
    image: "/recipe.png",
    github: "#",
    live: "https://recipebook1108.netlify.app/",
  },
  {
    title: "TechSphere – Electronics Store",
    desc:
      "Frontend-only responsive website showcasing modern electronics with clean UI and mobile-first design.",
    tech: ["Bootstrap", "HTML", "CSS", "JavaScript"],
    image: "/techsphere.png",
    github: "#",
    live: "https://techsphere-sahil.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-15 px-6 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Projects
          </h2>
          <p className="text-slate-500 text-lg">
            Selected projects demonstrating my development skills
          </p>
        </motion.div>

        {/* Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={32}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="h-full flex">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

/* PROJECT CARD – SAME HEIGHT */
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="flex flex-col h-full min-h-[400px]
                 bg-white rounded-2xl overflow-hidden
                 shadow-md hover:shadow-2xl transition"
    >
      {/* Image */}
      <div className="relative h-48 shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/70
                        opacity-0 hover:opacity-100 transition
                        flex items-center justify-center gap-4">
          <a
            href={project.github}
            className="p-3 rounded-full bg-white text-slate-900 hover:scale-110 transition"
          >
            <FaGithub />
          </a>
          <a
            href={project.live}
            className="p-3 rounded-full bg-white text-slate-900 hover:scale-110 transition"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {project.title}
        </h3>

        {/* CLAMPED TEXT */}
        <p className="text-slate-500 text-sm mb-4 line-clamp-4">
          {project.desc}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full
                         bg-slate-100 text-slate-600"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Button pinned bottom */}
        <a
          href={project.live}
          className="mt-auto text-center
                     text-sm font-semibold px-4 py-2 rounded-lg
                     bg-gradient-to-r from-cyan-500 to-blue-500
                     text-white hover:scale-105 transition"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
