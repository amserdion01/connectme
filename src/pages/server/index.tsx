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
import BackButtonFull from "~/components/BackButtonFull";
const Server: NextPage = () => {
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const handleSearch = (searchTerm: string) => {
    setFilter(searchTerm);
  };
 
  return (
    <div className="min-h-screen w-screen bg-gray-200">
      <div className=" flex flex-col">
        <div className="flex items-center justify-around">
          <BackButtonFull/>

          <SearchServer onSearch={handleSearch} />
          <AddServer />
          <Link href="/profile">
      <div className="flex items-center  rounded-lg">
        <IoPersonCircle size="4rem" />
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
