import { NextPage } from "next";
import Head from "next/head";
import Logo from "../components/Logo";
import Login from "../components/Login";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { data: session } = useSession();
  
  if (session){
    const router = useRouter();
    router.push("/server")
    return null;
  }
  return (
    <>
      <Head>
        <title>ConnectMe</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/global-network.png" />
      </Head>

      <div className="h-screen grid grid-cols-2 gap-0 bg-gray-200">
        <Logo />
        <Login />
        
      </div>
    </>
  );
};

export default Home;
