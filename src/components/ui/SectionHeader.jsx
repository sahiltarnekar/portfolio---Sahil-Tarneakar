import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 text-left max-w-3xl"
    >
      <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary tracking-tight mb-4">
        {title}<span className="text-accent">.</span>
      </h2>
      
      {subtitle && (
        <p className="text-lg text-text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
