import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Container from "../components/common/Container";
import SectionHeader from "../components/ui/SectionHeader";
import { fadeUp } from "../animations/fadeUp";

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
    tech: ["React", "JSON Server", "Bootstrap"],
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
    <section id="projects" className="py-24 bg-[#0b0f19]">
      <Container>

        {/* SECTION HEADER (SYSTEM) */}
        <SectionHeader
          title="Projects"
          subtitle="Selected projects showcasing my frontend development work"
        />

        {/* CAROUSEL */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-20"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="h-full flex">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </Container>
    </section>
  );
};

export default Projects;

/* ================= PROJECT CARD ================= */

const ProjectCard = ({ project }) => {
  return (
    <div
      className="flex flex-col h-full min-h-[380px]
      bg-[#111827] border border-[#1f2937]
      rounded-xl overflow-hidden
      transition-colors duration-300
      hover:border-cyan-400/40"
    >
      {/* IMAGE */}
      <div className="relative h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        {/* HOVER OVERLAY */}
        <div
          className="absolute inset-0 bg-black/70
          opacity-0 hover:opacity-100 transition-opacity duration-300
          flex items-center justify-center gap-4"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-[#0b0f19]
            text-cyan-400 border border-[#1f2937]
            hover:bg-cyan-400 hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-[#0b0f19]
            text-cyan-400 border border-[#1f2937]
            hover:bg-cyan-400 hover:text-black transition"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-4">
          {project.desc}
        </p>

        {/* TECH STACK */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full
              bg-[#0b0f19] border border-[#1f2937]
              text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
