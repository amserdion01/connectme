import { NextPage } from "next";
import AddServer from "../../components/AddServer";
import ServerList from "~/components/ServerList";
import SearchServer from "~/components/SearchServer";
import { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import CreateSomeData from "~/components/MockData";
import router, { useRouter } from "next/router";
import Link from "next/link";
import BackButton from "~/components/BackButton";
import LogOutButton from "~/components/LogOut";
import { useSession } from "next-auth/react";

const Server: NextPage = () => {
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const handleSearch = (searchTerm: string) => {
    setFilter(searchTerm);
  };
  const { data: session, status } = useSession();
  const Spinner = () => (
    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
  );

  if (status ==="loading" ){
    return (
      <div className="min-h-screen w-screen bg-gray-100 flex justify-center items-center">
        <Spinner />
      </div>
    );}
  
  if (status ==="unauthenticated") {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gray-300">
        <Link href="/">
          <button
            className="focus:shadow-outline rounded bg-gray-800 py-2 px-4 font-bold text-white hover:bg-gray-700 focus:outline-none"
            type="button"
          >
            You need to sign in to continue!
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-gray-200">
      <div className=" flex flex-col">
        <div className="flex items-center justify-around">
          <LogOutButton />
          <SearchServer onSearch={handleSearch} />
          <AddServer />
          <Link href="/profile">
            <div className="flex items-center  rounded-lg">
              <IoPersonCircle size="3rem" />
              <span className="text-lg font-medium"></span>
            </div>
          </Link>
        </div>
        <ServerList filter={filter} />
      </div>
    </div>
  );
};

export default Server;
