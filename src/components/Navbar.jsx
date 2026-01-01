import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // 🔥 Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link =>
        document.querySelector(link.href)
      );

      sections.forEach(section => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50
                       backdrop-blur bg-white/70
                       border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-black text-slate-900"
        >
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500
                           bg-clip-text text-transparent">
            .
          </span>
          SahilTarnekar
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.href;

            return (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className={`transition font-medium
                    ${
                      isActive
                        ? "text-cyan-600"
                        : "text-slate-600 hover:text-cyan-600"
                    }`}
                >
                  {link.name}
                </a>

                {/* Active / Hover underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px]
                    bg-gradient-to-r from-cyan-500 to-blue-500 transition-all
                    ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </li>
            );
          })}

          {/* Resume */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-5 py-2 rounded-lg text-sm font-semibold
                       bg-gradient-to-r from-cyan-500 to-blue-500
                       text-white shadow-sm"
          >
            Download Resume
          </motion.a>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-800 text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <ul className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => {
                const isActive = active === link.href;

                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block transition
                        ${
                          isActive
                            ? "text-cyan-600 font-semibold"
                            : "text-slate-600 hover:text-cyan-600"
                        }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 text-center px-5 py-2 rounded-lg font-semibold
                           bg-gradient-to-r from-cyan-500 to-blue-500
                           text-white"
              >
                Download Resume
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
