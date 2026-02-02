import { motion } from "framer-motion";
const SectionHeader = ({ title, subtitle, centered = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-16 ${centered ? "text-center mx-auto" : "text-left"} max-w-2xl`}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
        {title}
      </h2>
      {/* Updated to Red-Orange Gradient Bar */}
      <div className={`h-1.5 w-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full mb-6 ${centered ? "mx-auto" : ""}`} />
      
      {subtitle && (
        <p className="text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
export default SectionHeader;