// ~/components/Layout.tsx
import React, { useState } from "react";
import HeaderBar from "./HeaderBar";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
  serverId?: string;
  selected: "about" | "message" | "questions";
}

const Layout: React.FC<LayoutProps> = ({ children, serverId, selected }) => {
  const router = useRouter();

  const handleAboutClick = () => {
    console.log("about icon clicked");
    router.back();
  };

  const handleMessageClick = () => {
    console.log("Message icon clicked");
  };

  const handleQuestionsClick = () => {
    console.log("Posts icon clicked");
    if (serverId) {
      router.push(`/server/${serverId}/question`);
    }
  };

  return (
    <div>
      <HeaderBar
        id={serverId || ""}
        selected={selected}
        onAboutClick={handleAboutClick}
        onMessageClick={handleMessageClick}
        onQuestionsClick={handleQuestionsClick}
      />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
