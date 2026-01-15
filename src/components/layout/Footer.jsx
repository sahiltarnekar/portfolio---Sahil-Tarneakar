import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] border-t border-[#1f2937]">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <p className="text-white font-semibold">
              Sahil Tarnekar
            </p>
            <p className="text-sm text-gray-400">
              Frontend Developer · MERN Stack
            </p>
          </div>

          {/* CENTER – SOCIALS */}
          <div className="flex gap-6">
            <a
              href="mailto:sahiltarnekar2@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/sahiltarnekar"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sahil-tarnekar-0b2413307/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* RIGHT */}
          <div className="text-sm text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} Sahil Tarnekar
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
