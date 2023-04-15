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
  selected: "about" | "message" | "questions";
  onAboutClick: () => void;
  onMessageClick: () => void;
  onQuestionsClick: () => void;
  id: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
  selected,
  onAboutClick,
  onMessageClick,
  onQuestionsClick,
  id,
}) => {
  const router = useRouter();

  const renderButton = (
    onClick: () => void,
    isSelected: boolean,
    IconComponent: React.ElementType,
    SelectedIconComponent: React.ElementType,
    buttonText: string,
    href?: string
  ) => (
    <button
      onClick={() => {
        console.log(`${buttonText} button clicked`);
        onClick();
      }}
      className="focus:outline-none"
    >
      {isSelected ? (
        href ? (
          <Link href={href}>
              <SelectedIconComponent className="h-12 w-12" />
          </Link>
        ) : (
          <SelectedIconComponent className="h-12 w-12" />
        )
      ) : (
        href ? (
          <Link href={href}>
              <IconComponent className="h-12 w-12 text-gray-800" />
          </Link>
        ) : (
          <IconComponent className="h-12 w-12 text-gray-800" />
        )
      )}
    </button>
  );

  return (
    <div className="flex w-full items-center justify-around rounded-lg bg-gray-100 p-4 shadow-md">
      {renderButton(
        onQuestionsClick,
        selected === "questions",
        RiHome2Line,
        RiHome2Fill,
        "Questions",
        `/server/${id}`
      )}
      {renderButton(
        onAboutClick,
        selected === "about",
        BsInfoCircle,
        BsInfoCircleFill,
        "About"
      )}
      {renderButton(
        onMessageClick,
        selected === "message",
        FaRegEnvelope,
        FaEnvelope,
        "Message"
      )}
    </div>
  );
};

export default HeaderBar;
