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
  isSelected: boolean;
  IconComponent: React.ElementType;
  SelectedIconComponent: React.ElementType;
  buttonText: string;
  href: string;
}> = ({
  isSelected,
  IconComponent,
  SelectedIconComponent,
  buttonText,
  href,
}) => (
  <Link href={href}>
    {isSelected ? (
      <SelectedIconComponent className = "text-6xl">{buttonText}</SelectedIconComponent>
    ) : (
      <IconComponent className = "text-5xl">{buttonText}</IconComponent>
    )}

  </Link>
);

const HeaderBar: React.FC = () => {
  const router = useRouter();

  const { serverid: id } = router.query as QParams;
  const [selectedIcon, setSelectedIcon] = React.useState<
    "about" | "message" | "questions"
  >("about");
  React.useLayoutEffect(()=>{
    const route = router.pathname
    if (route.endsWith("chat")){
      setSelectedIcon("message")
      return 
    } 
    if (route.endsWith("question")){
      setSelectedIcon("questions")
      return 
    } 
    setSelectedIcon("about")
  }, [router.pathname])
  return (
    <div className="flex w-full items-center justify-around rounded-lg bg-gray-100 p-4 shadow-md">
      <Buton
        isSelected={selectedIcon === "questions"}
        IconComponent={RiHome2Line}
        SelectedIconComponent={RiHome2Fill}
        buttonText="Questions"
        href={`/server/${id}/question`}
      />
      <Buton
        isSelected={selectedIcon === "about"}
        IconComponent={BsInfoCircle}
        SelectedIconComponent={BsInfoCircleFill}
        buttonText="About"
        href={`/server/${id}`}
      />
      <Buton
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
