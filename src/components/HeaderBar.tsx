import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaThLarge } from "react-icons/fa";
import { FaRegUser, FaRegEnvelope } from "react-icons/fa";
import { RiHome2Line, RiHome2Fill } from "react-icons/ri";
import {
  BsArrowLeftCircle,
  BsArrowLeftCircleFill,
  BsInfoCircle,
  BsInfoCircleFill,
} from "react-icons/bs";
import { useRouter } from "next/router";

interface HeaderBarProps {
  selected: "about" | "profile" | "message" | "posts";
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
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  const [isBackButtonHovered, setIsBackButtonHovered] = React.useState(false);
  const renderButton = (
    onClick: () => void,
    isSelected: boolean,
    IconComponent: React.ElementType,
    SelectedIconComponent: React.ElementType
  ) => (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsBackButtonHovered(true)}
      onMouseLeave={() => setIsBackButtonHovered(false)}
      className="focus:outline-none"
    >
      {isSelected ? (
        <SelectedIconComponent className="h-12 w-12" />
      ) : (
        <IconComponent className="h-12 w-12 text-gray-800" />
      )}
    </button>
  );
  return (
    <div className="flex w-full items-center justify-around rounded-lg bg-gray-100 p-4 shadow-md">
      {renderButton(
        handleBackClick,
        isBackButtonHovered,
        BsArrowLeftCircle,
        BsArrowLeftCircleFill
      )}
      {renderButton(
        onPostsClick,
        selected === "posts",
        RiHome2Line,
        RiHome2Fill
      )}
      {renderButton(
        onAboutClick,
        selected === "about",
        BsInfoCircle,
        BsInfoCircleFill
      )}
      {renderButton(
        onMessageClick,
        selected === "message",
        FaRegEnvelope,
        FaEnvelope
      )}
      <Link href="/profile">
        {renderButton(
          onProfileClick,
          selected === "profile",
          FaRegUser,
          FaUser
        )}
      </Link>
    </div>
  );
};

export default HeaderBar;
