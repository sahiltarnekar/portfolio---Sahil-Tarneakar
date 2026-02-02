const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 relative ${className}`}>
      {children}
    </div>
  );
};

export default Container;