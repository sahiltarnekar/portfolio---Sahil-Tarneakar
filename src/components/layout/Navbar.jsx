import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { useTheme } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(link => document.querySelector(link.href));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      if (currentSection) setActive(`#${currentSection.id}`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-bg-base/80 backdrop-blur-md py-4 border-b border-border" : "bg-transparent py-6"
      }`}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          <a href="#home" className="text-2xl font-display font-bold text-text-primary tracking-tight">
            Sahil <span className="text-accent">/</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={window.location.pathname === '/' ? link.href : `/${link.href}`}
                className={`text-sm font-semibold transition-colors relative pb-1 group ${
                  active === link.href ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
                {/* Hover Underline (Cyan) */}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ${
                  active === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </a>
            ))}
            
            {/* Theme Toggle Button (Desktop) */}
            <button onClick={toggleTheme} className="p-2 text-text-secondary hover:text-text-primary transition-colors ml-2" aria-label="Toggle Theme">
              {theme === "dark" ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            {/* Theme Toggle Button (Mobile) */}
            <button onClick={toggleTheme} className="p-2 text-text-secondary hover:text-text-primary transition-colors" aria-label="Toggle Theme">
              {theme === "dark" ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>

            <button onClick={() => setOpen(!open)} className="p-2 text-text-primary">
               <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transition-all duration-300 origin-left ${open ? "rotate-45 translate-x-1" : ""}`} />
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-full bg-current transition-all duration-300 origin-left ${open ? "-rotate-45 translate-x-1" : ""}`} />
              </div>
            </button>
          </div>
        </nav>
        
        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full mt-4 bg-bg-surface border border-border rounded-b-3xl overflow-hidden shadow-2xl md:hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <a key={link.href} href={window.location.pathname === '/' ? link.href : `/${link.href}`} onClick={() => setOpen(false)} className="text-lg font-medium text-text-secondary hover:text-text-primary transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
