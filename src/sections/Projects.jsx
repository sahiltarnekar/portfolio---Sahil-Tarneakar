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
    desc: "Single-page real estate application with dynamic routing, property and agent detail pages, and a conversion-focused UI.",
    tech: ["React", "Bootstrap", "JavaScript"],
    image: "/househunter.png",
    github: "#",
    live: "https://househunter1108.netlify.app/",
  },
  {
    title: "Product Management",
    desc: "Responsive data table management application with search, pagination, and structured data visualization.",
    tech: ["React", "JSON Server", "Bootstrap"],
    image: "/Product.png",
    github: "#",
    live: "https://datatablels.netlify.app/",
  },
  {
    title: "Recipe Collection",
    desc: "Recipe management app with authentication, localStorage support, search functionality, and modern UI design.",
    tech: ["React", "JavaScript", "CSS"],
    image: "/recipe.png",
    github: "#",
    live: "https://recipebook1108.netlify.app/",
  },
  {
    title: "TechSphere Electronics",
    desc: "Frontend-only responsive website showcasing modern electronics with a clean UI and mobile-first design.",
    tech: ["HTML", "CSS", "JS", "Bootstrap"],
    image: "/techsphere.png",
    github: "#",
    live: "https://techsphere-sahil.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white"> 
      <Container>
        <SectionHeader
          title="Featured Projects"
          subtitle="A collection of my recent work building interactive web experiences."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-red-500', 
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-20 !px-2"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="h-full">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  );
};

/* ================= PROJECT CARD ================= */

const ProjectCard = ({ project }) => {
  return (
    <div className="group flex flex-col h-full bg-white border border-slate-100 shadow-sm rounded-3xl overflow-hidden transition-all duration-300">
      
      {/* IMAGE CONTAINER - The 'group' is here so hover only happens on image */}
      <div className="relative h-56 overflow-hidden group/image">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
        />

        {/* RED-ORANGE OVERLAY */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-orange-500/30 
          opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 
          flex items-center justify-center gap-6"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full bg-white text-red-600 hover:scale-110 transition shadow-lg"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full bg-white text-orange-600 hover:scale-110 transition shadow-lg"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex flex-col flex-1 p-8">
        {/* Title turns Orange instantly when Image Container is hovered */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover/image:text-orange-600 
       transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-3">
          {project.desc}
        </p>

        {/* TECH STACK - Badges turn Red instantly when Image Container is hovered */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 text-orange-600
              rounded-lg bg-slate-50 border border-slate-100 text-slate-500 
              group-hover/image:text-red-600 group-hover/image:border-red-100 group-hover/image:bg-red-50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;