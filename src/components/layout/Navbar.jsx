import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  // scroll spy
  useEffect(() => {
    const onScroll = () => {
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50
      bg-[#0b0f19]/80 backdrop-blur
      border-b border-[#1f2937]"
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          className="text-lg font-semibold text-white"
        >
          Sahil Tarnekar
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => {
            const isActive = active === link.href;

            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`transition
                    ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                >
                  {link.label}
                </a>

                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 w-full h-[2px]
                    bg-cyan-400 rounded-full"
                  />
                )}
              </li>
            );
          })}

          {/* RESUME */}
          <a
            href="/resume.pdf"
            download
            className="ml-4 px-4 py-2 text-sm font-medium
            border border-[#1f2937]
            text-gray-300 rounded-md
            hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Resume
          </a>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-[#0b0f19]
          border-t border-[#1f2937]"
        >
          <ul className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm transition
                  ${
                    active === link.href
                      ? "text-cyan-400"
                      : "text-gray-400 hover:text-white"
                  }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="mt-4 text-center px-4 py-2 text-sm
              border border-[#1f2937]
              text-gray-300 rounded-md
              hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              Resume
            </a>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
