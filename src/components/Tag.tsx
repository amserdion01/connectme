import React from "react";

interface TagProps {
    children: string;
    name: string;
    color?: string;
  }
  

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <span className="px-2 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full mr-2 mb-2">
      {children}
    </span>
  );
};

export default Tag;
