import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import SectionHeader from "../components/ui/SectionHeader";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-12 md:py-20 bg-bg-base">
      <Container>
        <SectionHeader 
          title="Projects" 
          subtitle="A selection of my recent full-stack applications and frontend development work."
        />

        <div className="mt-8 flex flex-col">
          {displayedProjects.map((project, index) => {
            const displayIndex = (index + 1).toString().padStart(2, "0");

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-6 md:py-8 group items-center"
              >
                
                {/* LEFT: Content */}
                <div className="lg:col-span-8 flex flex-col justify-center order-2 lg:order-1 h-full py-2">
                  
                  <div className="flex items-start gap-4 md:gap-6 w-full">
                    <span className="text-2xl md:text-3xl font-display text-accent mt-0.5">
                      {displayIndex}
                    </span>

                    <div className="flex flex-col flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                        {project.desc}
                      </p>
                      
                      {/* Tech Stack and View Project Row */}
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-auto">
                        <p className="text-accent text-xs md:text-sm font-medium">
                          {project.tech.join(" / ")}
                        </p>
                        
                        <Link 
                          to={`/project/${project.id}`}
                          className="inline-flex items-center gap-2 text-accent font-semibold hover:opacity-80 transition-opacity text-sm whitespace-nowrap shrink-0"
                        >
                          View Project <FaArrowRight className="text-[10px]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Image */}
                <div className="lg:col-span-4 order-1 lg:order-2 w-full flex justify-end items-center">
                  <Link 
                    to={`/project/${project.id}`}
                    className="block w-full aspect-video rounded-2xl overflow-hidden border border-border relative group bg-bg-surface/40"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                    />
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>

        {projects.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-transparent border border-accent text-accent rounded hover:bg-accent/10 transition-colors font-bold text-sm tracking-wide"
            >
              {showAll ? "View Less Projects" : "View More Projects"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
