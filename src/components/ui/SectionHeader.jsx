const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-16 max-w-xl">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        {title}
      </h2>
      <div className="w-16 h-1 bg-cyan-400 rounded-full mb-4" />
      {subtitle && (
        <p className="text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
