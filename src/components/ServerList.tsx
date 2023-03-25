import React from 'react'
import { api } from '~/utils/api'
import ServerCard from './ServerCard'

const ServerList : React.FC<{filter:string | undefined}>= ({filter}) => {
    const servers = api.server.getAllServers.useQuery({filter})
    
    if (!servers.data) return <div> Loading</div>
    return (
    <div className='w-screen flex flex-wrap'>{servers.data.map((server)=>{ 
        return (
            <ServerCard server={server} key = {server.id}/>
        )
    })}</div>
    
  )
}

export default ServerList