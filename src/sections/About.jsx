import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionHeader from "../components/ui/SectionHeader";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-bg-base">
      <Container>
        <SectionHeader title="About" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center mt-16 md:mt-24">
          
          {/* LEFT: Abstract Visual (Gradient Box + Slash) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex lg:col-span-5 relative h-full min-h-[250px] md:min-h-[350px] w-full"
          >
            {/* The Gradient Box */}
            <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-blue-400 to-accent z-10 relative shadow-2xl shadow-accent/10"></div>
            
            {/* The Diagonal Slash (Dark angled pillar to the right) */}
            <div className="absolute left-[260px] md:left-[360px] top-0 h-56 w-8 md:h-72 md:w-12 bg-bg-surface transform skew-x-[-15deg] z-0"></div>
          </motion.div>

          {/* RIGHT: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl lg:pl-8"
          >
            <p className="mb-6">
              <span className="text-text-primary font-semibold">M.Sc. (IT) Integrated student</span> at Gandhinagar University and a <span className="text-text-primary font-semibold">Full Stack Developer</span> passionate about building scalable web applications.
            </p>
            <p className="mb-6">
              Skilled in <span className="text-accent font-medium">React.js, Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS, and Bootstrap</span>. Built projects like <span className="text-text-primary font-semibold">ParcelOS</span> and <span className="text-text-primary font-semibold">EpicAura</span> with a focus on performance, responsiveness, and user experience.
            </p>
            <p className="mb-10">
              Currently enhancing my problem-solving abilities through <span className="text-accent font-medium">Data Structures and Algorithms (DSA)</span> while exploring advanced software development concepts.
            </p>

            <div>
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 text-accent font-semibold hover:opacity-80 transition-opacity"
              >
                More about me <FaArrowRight className="text-sm" />
              </a>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default About;
