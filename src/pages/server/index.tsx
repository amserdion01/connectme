import { NextPage } from "next";
import AddServer from "../../components/AddServer";
import ServerList from "~/components/ServerList";
import SearchServer from "~/components/SearchServer";
import { useState } from "react";
import {IoPersonCircle} from "react-icons/io5"
const Server: NextPage = () => {
const [filter, setFilter] = useState<string | undefined>(undefined)
const handleSearch = (searchTerm: string) => {setFilter(searchTerm)}
return(
   <div className="min-h-screen w-screen bg-gray-200">
   <div className=" flex flex-col">
      <div className="flex justify-around items-center">
         <SearchServer onSearch={handleSearch}/>
         <AddServer/>
         <div>
            <IoPersonCircle size = '3rem'/>
         </div>
      </div>
      <ServerList filter={filter}/>
   </div>
   </div>
)}

export default Server;