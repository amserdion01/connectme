import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { IoLogOut, IoLogOutOutline } from 'react-icons/io5';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

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

  const handleSignOut = () => {
      signOut();
  };

  const Icon = isHovered ? IoLogOutOutline : IoLogOut;

  return (
      <div>
        <button
          type="button"
          onClick={handleSignOut}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Icon className="h-12 w-12" />
        </button>
      </div>
  );
};

export default LogOutButton;
