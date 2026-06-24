import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionHeader from "../components/ui/SectionHeader";
import { 
  FaGlobe, FaServer, FaDatabase, FaTools, 
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCheckCircle
} from "react-icons/fa";
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiRender, SiJavascript, SiBootstrap, SiCss3, SiHtml5, SiNetlify
} from "react-icons/si";

const getTechIcon = (techName) => {
  const name = techName.toLowerCase();
  if (name.includes("react")) return <FaReact className="text-accent" />;
  if (name.includes("tailwind")) return <SiTailwindcss className="text-accent" />;
  if (name.includes("node")) return <FaNodeJs className="text-accent" />;
  if (name.includes("express")) return <SiExpress className="text-accent" />;
  if (name.includes("mongo")) return <SiMongodb className="text-accent" />;
  if (name.includes("render")) return <SiRender className="text-accent" />;
  if (name.includes("netlify")) return <SiNetlify className="text-accent" />;
  if (name.includes("github")) return <FaGithub className="text-accent" />;
  if (name.includes("git")) return <FaGitAlt className="text-accent" />;
  if (name.includes("javascript")) return <SiJavascript className="text-accent" />;
  if (name.includes("bootstrap")) return <SiBootstrap className="text-accent" />;
  if (name.includes("css")) return <SiCss3 className="text-accent" />;
  if (name.includes("html")) return <SiHtml5 className="text-accent" />;
  return <FaCheckCircle className="text-accent" />;
};

const educationData = [
  {
    year: "Feb 2025 - Present",
    title: "Full Stack Training",
    description: "Intensive training in React.js, Node.js, Express, and MongoDB at Red & White Multimedia."
  },
  {
    year: "2023 - Present",
    title: "M.Sc. IT",
    description: "Focusing on modern programming paradigms and database management at Gandhinagar University."
  },
 
];

const skillsData = [
  {
    category: "Frontend",
    icon: <FaGlobe className="text-accent" />,
    items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: <FaServer className="text-accent" />,
    items: ["Node.js", "Express.js", "REST API", "Authentication"]
  },
  {
    category: "Database",
    icon: <FaDatabase className="text-accent" />,
    items: ["MongoDB"]
  },
  {
    category: "Tools & Others",
    icon: <FaTools className="text-accent" />,
    items: ["Git", "GitHub", "Render", "Vercel", "VS Code"]
  }
];

const EducationAndSkills = () => {
  return (
    <section id="education" className="py-12 md:py-20 bg-bg-base">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: EDUCATION */}
          <div>
            <SectionHeader title="Education" />
            
            <div className="mt-8 border-l border-accent ml-3 relative">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="mb-10 pl-8 relative"
                >
                  {/* Glowing Dot */}
                  <span className="absolute w-4 h-4 rounded-full bg-accent -left-[8.5px] top-1 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="text-accent font-bold text-sm tracking-widest uppercase">{edu.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{edu.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-md">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: SKILLS */}
          <div id="skills">
            <SectionHeader title="Skills" />
            
            <div className="mt-8 flex flex-col gap-8">
              {skillsData.map((skillGroup, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
                >
                  {/* Category Title with Icon */}
                  <div className="flex items-center gap-3 sm:w-1/3 pt-1">
                    {skillGroup.icon}
                    <span className="text-text-primary font-semibold">{skillGroup.category}</span>
                  </div>
                  
                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 sm:w-2/3">
                    {skillGroup.items.map((item, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-1.5 text-xs font-medium text-text-secondary border border-border rounded hover:border-accent hover:text-text-primary transition-colors cursor-default flex items-center gap-2"
                      >
                        {getTechIcon(item)} {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default EducationAndSkills;

