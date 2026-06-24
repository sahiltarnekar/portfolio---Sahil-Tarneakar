import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDownload, FaPaperPlane, FaLocationArrow } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import Container from "../components/common/Container";

const MarqueeBar = () => {
  const items = [
    "WEB DEVELOPMENT", "FULL STACK", "REACT", "NODE.JS", "MONGODB", "EXPRESS", "RENDER", "AI INTEGRATION", "JAVASCRIPT", "BOOTSTRAP", "GIT"
  ];
  
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="w-full border-t border-b border-border py-4 mt-24 overflow-hidden relative bg-bg-base">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        className="flex items-center whitespace-nowrap min-w-max"
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-xs font-bold tracking-widest text-text-secondary px-6">
              {item}
            </span>
            <span className="text-accent font-bold">/</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-bg-base pt-32 pb-0 flex flex-col justify-between overflow-hidden">
      <Container className="flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 w-full items-center">
          
          {/* LEFT – VISUAL CONTAINER */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex lg:col-span-5 justify-center lg:justify-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:ml-12">
              {/* Thin Cyan Square Border */}
              <div className="absolute inset-0 border border-accent"></div>
              
              {/* Glowing </> Icon overlapping bottom right */}
              <div className="absolute -bottom-8 -right-8 bg-bg-base px-2">
                <span className="text-6xl md:text-7xl font-display font-bold text-accent drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  {"</>"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 pl-0 lg:pl-12">
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary mb-2 text-lg"
            >
              Hi there, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text-primary mb-2 tracking-tight leading-[1.1] md:leading-tight"
            >
              Sahil<span className="text-accent">.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6 tracking-tight leading-[1.1] md:leading-tight"
            >
              Full Stack <span className="text-accent">Developer</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl"
            >
              I develop full-stack web applications focused on performance, user experience, and real-world business solutions.<br className="hidden md:block" />
              <span className="block mt-2">Currently building <span className="text-accent font-semibold">ParcelOS</span> and <span className="text-accent font-semibold">Epicaura</span>.</span>
            </motion.p>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mb-10 text-2xl md:text-3xl text-text-secondary"
            >
              <div className="p-2 border border-border rounded hover:text-text-primary transition-colors cursor-default"><FaHtml5 /></div>
              <div className="p-2 border border-border rounded hover:text-text-primary transition-colors cursor-default"><FaCss3Alt /></div>
              <div className="p-2 border border-border rounded hover:text-text-primary transition-colors cursor-default"><FaJs /></div>
              <div className="p-2 border border-border rounded hover:text-text-primary transition-colors cursor-default"><FaReact /></div>
              <div className="p-2 border border-border rounded hover:text-text-primary transition-colors cursor-default"><FaNodeJs /></div>
              <div className="p-2 border border-border rounded hover:text-text-primary transition-colors cursor-default"><SiMongodb /></div>
              <div className="p-2 border border-border rounded hover:text-text-primary transition-colors cursor-default"><SiExpress /></div>
              <div className="p-2 border border-border rounded hover:text-text-primary transition-colors cursor-default"><SiTailwindcss /></div>
            </motion.div>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#cv"
                className="flex items-center justify-center gap-2 bg-accent text-[#030712] px-6 py-3 rounded font-bold text-sm hover:opacity-90 transition-all min-w-[140px] w-full sm:w-auto"
              >
                <FaDownload /> Download CV
              </a>
              <div className="flex gap-4 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-transparent border border-accent text-accent px-4 py-3 rounded font-bold text-sm hover:bg-accent/10 transition-all min-w-[140px]"
                >
                  View Projects <FaLocationArrow className="rotate-45" />
                </a>
                <a
                  href="#contact"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-transparent border border-accent text-accent px-4 py-3 rounded font-bold text-sm hover:bg-accent/10 transition-all min-w-[140px]"
                >
                  Let's Talk <FaPaperPlane />
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </Container>
      
      {/* Bottom Marquee Bar */}
      <MarqueeBar />

    </section>
  );
};

export default Hero;
