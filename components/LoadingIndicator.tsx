import React from "react";

const LoadingIndicator: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center space-x-2 animate-pulse">
      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
    </div>
  );
};

export default LoadingIndicator;
