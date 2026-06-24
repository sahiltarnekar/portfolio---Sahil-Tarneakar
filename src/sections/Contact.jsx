import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { FaGithub, FaLinkedin, FaRegEnvelope, FaGlobe, FaArrowRight } from "react-icons/fa";

const contactLinks = [
  {
    title: "Email",
    value: "sahiltarnekar02@gmail.com",
    href: "mailto:sahiltarnekar02@gmail.com",
    icon: <FaRegEnvelope className="text-[28px] text-accent" />
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/sahiltarnekar",
    href: "https://linkedin.com/in/sahiltarnekar",
    icon: <FaLinkedin className="text-[28px] text-accent" />
  },
  {
    title: "GitHub",
    value: "github.com/tarnekar",
    href: "https://github.com/tarnekar",
    icon: <FaGithub className="text-[28px] text-text-primary" />
  },
  {
    title: "Portfolio",
    value: "stportfolio.netlify.app",
    href: "https://stportfolio.netlify.app",
    icon: <FaGlobe className="text-[28px] text-accent" />
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-bg-base">
      <Container>
        
        {/* Centered Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-text-primary tracking-tight mb-4"
          >
            Contact<span className="text-accent">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            Let's build something amazing together.
          </motion.p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.title === "Email" ? "_self" : "_blank"}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex items-center justify-between p-5 lg:p-6 bg-bg-surface border border-border/60 rounded-xl lg:rounded-2xl hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              
              <div className="flex items-center gap-4 overflow-hidden">
                {/* Left Icon */}
                <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                
                {/* Center Text */}
                <div className="flex flex-col overflow-hidden">
                  <span className="text-text-primary font-bold text-sm lg:text-base mb-1">{link.title}</span>
                  <span className="text-text-secondary text-[11px] lg:text-xs truncate group-hover:text-slate-300 transition-colors">
                    {link.value}
                  </span>
                </div>
              </div>

              {/* Right Arrow */}
              <div className="shrink-0 ml-2">
                <FaArrowRight className="text-accent text-[10px] lg:text-xs transform group-hover:translate-x-1 transition-transform" />
              </div>
              
            </motion.a>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Contact;
