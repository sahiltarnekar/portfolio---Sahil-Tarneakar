import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import toast, { Toaster } from "react-hot-toast"; // 1. Import Toast

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 2. Toast Function
  const handleResumeClick = () => {
    toast.success("Downloading Resume...", {
      icon: '🔥',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

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
      {/* 3. Add the Toaster Container here */}
      <Toaster position="bottom-right" reverseOrder={false} />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3" : "bg-transparent py-5"
      }`}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Sahil.
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative pb-1 ${
                  active === link.href ? "text-red-600" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span 
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* 4. Trigger Toast on Click */}
            <a
              href="/resume.pdf"
              download
              onClick={handleResumeClick}
              className="px-5 py-2 text-sm font-semibold text-white bg-red-600 rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-red-200"
            >
              Resume
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-900">
             {/* ... hamburger spans ... */}
             <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transition-all duration-300 origin-left ${open ? "rotate-45 translate-x-1" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition-all duration-300 origin-left ${open ? "-rotate-45 translate-x-1" : ""}`} />
            </div>
          </button>
        </nav>
        
        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-lg font-medium text-slate-600">
                    {link.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  onClick={() => { setOpen(false); handleResumeClick(); }}
                  className="w-full text-center py-3 bg-red-600 text-white rounded-xl font-semibold"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;