import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { 
  FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaGithub, 
  FaBriefcase, FaRegCalendarAlt, FaCheckCircle, FaDesktop, 
  FaCheck, FaUsers, FaCalendarCheck, FaTicketAlt, FaChartLine,
  FaReact, FaNodeJs, FaGitAlt
} from "react-icons/fa";
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiRender, SiJavascript, SiBootstrap, SiCss3, SiHtml5, SiNetlify
} from "react-icons/si";

const getTechIcon = (techName) => {
  const name = techName.toLowerCase();
  if (name.includes("react")) return <FaReact className="text-accent text-sm" />;
  if (name.includes("tailwind")) return <SiTailwindcss className="text-accent text-sm" />;
  if (name.includes("node")) return <FaNodeJs className="text-accent text-sm" />;
  if (name.includes("express")) return <SiExpress className="text-accent text-sm" />;
  if (name.includes("mongo")) return <SiMongodb className="text-accent text-sm" />;
  if (name.includes("render")) return <SiRender className="text-accent text-sm" />;
  if (name.includes("netlify")) return <SiNetlify className="text-accent text-sm" />;
  if (name.includes("github")) return <FaGithub className="text-accent text-sm" />;
  if (name.includes("git")) return <FaGitAlt className="text-accent text-sm" />;
  if (name.includes("javascript")) return <SiJavascript className="text-accent text-sm" />;
  if (name.includes("bootstrap")) return <SiBootstrap className="text-accent text-sm" />;
  if (name.includes("css")) return <SiCss3 className="text-accent text-sm" />;
  if (name.includes("html")) return <SiHtml5 className="text-accent text-sm" />;
  return <FaCheckCircle className="text-accent text-xs" />;
};

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-base flex items-center justify-center text-text-primary">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 font-display">Project Not Found</h1>
          <Link to="/" className="text-accent hover:underline flex items-center justify-center gap-2">
            <FaArrowLeft /> Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-base pt-32 pb-32 font-sans text-text-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Floating Draggable Back Button */}
        <motion.div 
          drag 
          dragMomentum={false}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-6 md:right-12 z-[100] flex"
        >
          <Link 
            to="/" 
            draggable="false"
            className="flex items-center gap-2 bg-bg-surface/90 backdrop-blur-md border border-border shadow-[0_0_20px_rgba(0,0,0,0.5)] px-6 py-3 rounded-full text-accent hover:text-text-primary hover:border-accent transition-colors text-sm font-bold cursor-grab active:cursor-grabbing"
          >
            <FaArrowLeft className="text-xs" pointerEvents="none" /> Back to Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* HERO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-text-primary tracking-tight mb-4 leading-[1.1] md:leading-tight">
                {project.title}<span className="text-accent">.</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-text-secondary font-medium mb-6">
                {project.desc}
              </h2>
              
              <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-lg">
                {project.title} is a comprehensive platform built to simplify event discovery, participation, and management for organizers and attendees.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                {project.live !== "#" && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 bg-accent text-bg-base px-6 py-3 rounded-md font-semibold hover:bg-white transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" /> Live Demo
                  </a>
                )}
                {project.github !== "#" && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 bg-transparent border border-border text-text-primary px-6 py-3 rounded-md font-semibold hover:bg-surface-hover transition-colors"
                  >
                    <FaGithub className="text-sm" /> GitHub
                  </a>
                )}
              </div>
              
              {/* Tech Pills */}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-medium text-text-secondary bg-bg-surface border border-border px-3 py-1.5 rounded-full flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Main Image */}
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-border bg-bg-surface/50 p-2 overflow-hidden shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto rounded-lg object-cover" 
                />
              </div>
            </div>
          </div>

          {/* METADATA BAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border">
            <div className="flex flex-col items-center justify-center text-center gap-3">
              <FaBriefcase className="text-accent text-xl" />
              <div>
                <p className="text-text-secondary text-xs font-medium uppercase tracking-widest mb-1">Role</p>
                <p className="text-text-primary font-medium">{project.role || "Full Stack Developer"}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 md:border-l border-border">
              <FaRegCalendarAlt className="text-accent text-xl" />
              <div>
                <p className="text-text-secondary text-xs font-medium uppercase tracking-widest mb-1">Duration</p>
                <p className="text-text-primary font-medium">{project.duration}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0">
              <FaCheckCircle className="text-accent text-xl" />
              <div>
                <p className="text-text-secondary text-xs font-medium uppercase tracking-widest mb-1">Status</p>
                <p className="text-text-primary font-medium">{project.status}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-3 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0">
              <FaDesktop className="text-accent text-xl" />
              <div>
                <p className="text-text-secondary text-xs font-medium uppercase tracking-widest mb-1">Platform</p>
                <p className="text-text-primary font-medium">{project.platform}</p>
              </div>
            </div>
          </div>

          {/* GALLERY */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(project.images || [project.image, project.image, project.image]).slice(0, 3).map((imgUrl, idx) => (
              <a 
                key={idx} 
                href={imgUrl} 
                target="_blank" 
                rel="noreferrer"
                className="block rounded-xl border border-border overflow-hidden bg-bg-surface/30 aspect-video relative group cursor-zoom-in"
              >
                <img 
                  src={imgUrl} 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
                />
              </a>
            ))}
          </div>

          {/* ABOUT & FEATURES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-12">
            {/* Left: About */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-text-primary">About Project</h3>
              <div 
                className="text-text-secondary leading-relaxed text-base font-light space-y-4 whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: project.longDesc }}
              />
            </div>
            
            {/* Right: Features Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-text-primary">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {project.features?.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-accent/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
                    </div>
                    <span className="text-text-secondary text-sm leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TECH STACK BOXES */}
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-text-primary">Tech Stack</h3>
             <div className="flex flex-wrap gap-4">
                {project.techStack && Object.entries(project.techStack).map(([category, items], i) => (
                  <div key={i} className="border border-border rounded-lg p-6 bg-bg-surface/30 flex flex-col items-center justify-center text-center flex-1 min-w-[200px]">
                    <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">{category}</p>
                    <div className="flex flex-col gap-2">
                      {items.map((item, j) => (
                        <span key={j} className="text-text-primary text-sm font-medium flex items-center justify-center gap-2">
                          {getTechIcon(item)} {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* PREVIOUS / NEXT FOOTER */}
          <div className="flex flex-col md:flex-row md:items-center justify-between py-12 border-t border-border mt-16 gap-8">
            {prevProject ? (
              <Link to={`/project/${prevProject.id}`} className="group flex flex-col items-start gap-2">
                <span className="flex items-center gap-2 text-text-secondary text-xs font-semibold uppercase tracking-widest group-hover:text-accent transition-colors">
                  <FaArrowLeft /> Previous Project
                </span>
                <span className="text-text-primary font-medium text-lg group-hover:opacity-80 transition-opacity">{prevProject.title}</span>
              </Link>
            ) : <div className="w-1/3" />}
            
            {/* Grid icon in middle */}
            <Link to="/#projects" className="text-text-secondary hover:text-text-primary transition-colors self-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </Link>

            {nextProject ? (
              <Link to={`/project/${nextProject.id}`} className="group flex flex-col items-end gap-2">
                <span className="flex items-center gap-2 text-text-secondary text-xs font-semibold uppercase tracking-widest group-hover:text-accent transition-colors">
                  Next Project <FaArrowRight />
                </span>
                <span className="text-text-primary font-medium text-lg group-hover:opacity-80 transition-opacity">{nextProject.title}</span>
              </Link>
            ) : <div className="w-1/3" />}
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;

