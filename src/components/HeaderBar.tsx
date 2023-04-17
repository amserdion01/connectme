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
import { ParsedUrlQuery } from "querystring";

interface QParams extends ParsedUrlQuery {
  serverid: string;
}

const Buton: React.FC<{
  onClick: () => void;
  isSelected: boolean;
  IconComponent: React.ElementType;
  SelectedIconComponent: React.ElementType;
  buttonText: string;
  href?: string;
}> = ({
  onClick,
  isSelected,
  IconComponent,
  SelectedIconComponent,
  buttonText,
  href,
}) => (
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
    ) : href ? (
      <Link href={href}>
        <IconComponent className="h-12 w-12 text-gray-800" />
      </Link>
    ) : (
      <IconComponent className="h-12 w-12 text-gray-800" />
    )}
  </button>
);

const HeaderBar: React.FC = () => {
  const router = useRouter();
  const { serverid: id } = router.query as QParams;
  const [selectedIcon, setSelectedIcon] = React.useState<
    "about" | "message" | "questions"
  >("about");

  const handleAboutClick = () => {
    setSelectedIcon("about");
    console.log("about icon clicked");
    router.back();
  };

  const handleMessageClick = () => {
    setSelectedIcon("message");
    console.log("Message icon clicked");
  };

  const handleQuestionsClick = () => {
    setSelectedIcon("questions");
    console.log("Posts icon clicked");
    router.push(`/server/${id}/question`);
  };
  return (
    <div className="flex w-full items-center justify-around rounded-lg bg-gray-100 p-4 shadow-md">
      <Buton
        onClick={handleQuestionsClick}
        isSelected={selectedIcon === "questions"}
        IconComponent={RiHome2Line}
        SelectedIconComponent={RiHome2Fill}
        buttonText="Questions"
        href={`/server/${id}/question`}
      />
      <Buton
        onClick={handleAboutClick}
        isSelected={selectedIcon === "about"}
        IconComponent={BsInfoCircle}
        SelectedIconComponent={BsInfoCircleFill}
        buttonText="About"
        href={`/server/${id}`}
      />
      <Buton
        onClick={handleMessageClick}
        isSelected={selectedIcon === "message"}
        IconComponent={FaRegEnvelope}
        SelectedIconComponent={FaEnvelope}
        buttonText="Message"
        href={`/server/${id}/chat`}
      />
    </div>
  );
};

export default HeaderBar;
