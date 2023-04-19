import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import Chat from "~/components/Chat";
import HeaderBar from "~/components/HeaderBar";
import { getLayout } from "~/components/Layout";
import { NextPageWithLayout } from "~/pages/_app";
import { api } from "~/utils/api";

interface QParams extends ParsedUrlQuery {
  serverid: string;
}

const ChatPage: NextPageWithLayout = () => {

  const router = useRouter();
  const { serverid: id } = router.query as QParams;
  const server = api.server.getServerById.useQuery({ id });
  const Spinner = () => (
    <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-blue-500"></div>
  );

  if (!server.data) {
    return (
      <div className="flex min-h-screen w-screen items-center justify-center bg-gray-100">
        <Spinner />
      </div>
    );
  }
  


  return (
      

<div><Chat serverId={server.data.id} /></div>
);
};
ChatPage.getLayout=getLayout;

export default ChatPage;