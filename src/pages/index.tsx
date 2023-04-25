import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Logo from "../components/Logo";
import Login from "../components/user/Login";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getServerAuthSession } from "~/server/auth";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ConnectMe</title>
        <meta name="description" content="Empowering student success, one connection at a time." />
        <link rel="icon" href="/global-network.png" />
      </Head>

      <div className="grid h-screen gap-0 bg-gray-200 sm:grid-cols-1 md:grid-cols-2">
        <Logo />

        <Login />
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession(context);
  if (session) return { redirect: {destination: "/server", permanent: true}};
  return {
    props: {},
  };
};
