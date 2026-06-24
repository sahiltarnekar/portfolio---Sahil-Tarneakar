const Footer = () => {
  return (
    <footer className="bg-bg-base border-t border-border pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        
        {/* COPYRIGHT */}
        <div className="text-sm font-medium text-text-secondary mb-4">
          <p>© {new Date().getFullYear()} Sahil Tarnekar. All rights reserved.</p>
        </div>

        {/* GLOWING ICON */}
        <div className="mt-2 text-accent font-display text-2xl font-bold drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          {"</>"}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
