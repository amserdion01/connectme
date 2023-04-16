import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { IoLogOut, IoLogOutOutline } from 'react-icons/io5';


interface LogOutButtonProps {
  onClick?: () => void;
}

const LogOutButton: React.FC<LogOutButtonProps> = ({ onClick }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const Icon = isHovered ? IoLogOutOutline : IoLogOut;

  return (
    <button
      type="button"
      onClick={onClick ? onClick : () => router.push("/") }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon className="h-12 w-12" />
    </button>
  );
};

export default LogOutButton;
