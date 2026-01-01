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
    title: "Product Management",
    desc:
      "Responsive data table management application with search, pagination, and structured data visualization.",
    tech: ["React", "Redux Toolkit", "JSON Server", "Bootstrap"],
    image: "/Product.png",
    github: "#",
    live: "https://datatablels.netlify.app/",
  },
  {
    title: "Recipe Collection Management",
    desc:
      "Recipe management app with authentication, localStorage support, search functionality, and modern UI design.",
    tech: ["React", "JavaScript", "CSS"],
    image: "/recipe.png",
    github: "#",
    live: "https://recipebook1108.netlify.app/",
  },
  {
    title: "TechSphere – Electronics Store",
    desc:
      "Frontend-only responsive website showcasing modern electronics with a clean UI and mobile-first design.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/techsphere.png",
    github: "#",
    live: "https://techsphere-sahil.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-white to-slate-50"
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
            Selected projects showcasing my frontend development skills
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

/* ================= PROJECT CARD ================= */
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="flex flex-col h-full min-h-[380px]
                 bg-white rounded-2xl overflow-hidden
                 shadow-md hover:shadow-xl transition"
    >
      {/* Image */}
      <div className="relative h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-slate-900/70
                        opacity-0 hover:opacity-100 transition
                        flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white text-slate-900
                       hover:scale-110 transition"
          >
            <FaGithub />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white text-slate-900
                       hover:scale-110 transition"
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

        <p className="text-slate-500 text-sm mb-4 line-clamp-4">
          {project.desc}
        </p>

        {/* Tech Stack */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full
                         bg-slate-100 text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
