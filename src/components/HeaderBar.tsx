import Link from 'next/link';
import React from 'react';
import { FaUser, FaEnvelope, FaThLarge } from 'react-icons/fa';
import { FaRegUser, FaRegEnvelope } from 'react-icons/fa';
import {RiHome2Line, RiHome2Fill} from 'react-icons/ri'
import {BsArrowLeftCircle, BsArrowLeftCircleFill, BsInfoCircle, BsInfoCircleFill} from 'react-icons/bs'

const renderButton = (
  onClick: () => void,
  isSelected: boolean,
  IconComponent: React.ElementType,
  SelectedIconComponent: React.ElementType,
) => (
  <button onClick={onClick} className="focus:outline-none">
    {isSelected ? (
      <SelectedIconComponent className="w-12 h-12" />
    ) : (
      <IconComponent className="w-12 h-12 text-gray-800" />
    )}
  </button>
);

interface HeaderBarProps {
  selected: 'about' | 'profile' | 'message' | 'posts';
  onAboutClick: () => void;
  onProfileClick: () => void;
  onMessageClick: () => void;
  onPostsClick: () => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
  selected,
  onAboutClick,
  onProfileClick,
  onMessageClick,
  onPostsClick,
}) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-100 w-full flex justify-around items-center">
      {renderButton(() => {}, false, BsArrowLeftCircle, BsArrowLeftCircleFill)}
      {renderButton(onPostsClick, selected === 'posts', RiHome2Line, RiHome2Fill)}
      {renderButton(onAboutClick, selected === 'about', BsInfoCircle, BsInfoCircleFill)}
      {renderButton(onMessageClick, selected === 'message', FaRegEnvelope, FaEnvelope)}
      <Link href="/profile">
        {renderButton(onProfileClick, selected === 'profile', FaRegUser, FaUser)}
      </Link>
    </div>
  );
};

export default HeaderBar;
