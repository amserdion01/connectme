// ~/components/Layout.tsx
import React, { useState } from "react";
import HeaderBar from "./HeaderBar";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <HeaderBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;

const getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export { getLayout };
