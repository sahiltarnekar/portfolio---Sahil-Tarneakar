import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT – IDENTITY */}
          <div className="text-center md:text-left">
            <p className="text-lg font-black tracking-tight text-slate-900">
              Sahil <span className="text-red-600">Tarnekar</span>
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">
              Frontend Developer · MERN Stack
            </p>
          </div>

          {/* CENTER – SOCIALS */}
          <div className="flex gap-8">
            <a
              href="mailto:sahiltarnekar2@gmail.com"
              className="text-slate-400 hover:text-red-600 hover:scale-125 transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>

            <a
              href="https://github.com/sahiltarnekar"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-900 hover:scale-125 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sahil-tarnekar-0b2413307/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-orange-500 hover:scale-125 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* RIGHT – COPYRIGHT */}
          <div className="text-xs font-medium text-slate-400 text-center md:text-right">
            <p>© {new Date().getFullYear()} — Built with passion.</p>
            <p className="mt-1">Ahmedabad, India</p>
          </div>

        </div>

        {/* BOTTOM GRADIENT LINE */}
        <div className="mt-10 h-1 w-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;