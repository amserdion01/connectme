import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { BsArrowLeftCircle, BsArrowLeftCircleFill } from 'react-icons/bs';

interface BackButtonProps {
  onClick?: () => void;
}

const BackButtonFull: React.FC<BackButtonProps> = ({ onClick }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const Icon = isHovered ? BsArrowLeftCircleFill : BsArrowLeftCircle;

  return (
    <button
      type="button"
      onClick={onClick ? onClick : () => router.push("/") }
      className="absolute top-4 left-4 focus:outline-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon className="h-12 w-12" />
    </button>
  );
};

export default BackButtonFull;
