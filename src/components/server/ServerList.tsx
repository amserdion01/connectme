import React from 'react'
import { api } from '~/utils/api'
import ServerCard from './ServerCard'

const ServerList : React.FC<{filter:string | undefined}>= ({filter}) => {
    const servers = api.server.getAllServers.useQuery({filter})
    
    const Spinner = () => (
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      );
    
      if (!servers.data) {
        return (
          <div className="min-h-screen w-screen bg-gray-100 flex justify-center items-center">
            <Spinner />
          </div>
        );
      }    return (
    <div className='w-screen flex flex-wrap gap-3'>{servers.data.map((server)=>{ 
        return (
            <ServerCard server={server} key = {server.id}/>
        )
    })}</div>
    
  )
}

export default ServerList