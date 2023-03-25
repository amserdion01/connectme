import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { api } from '~/utils/api'

interface QParams extends ParsedUrlQuery{
    id : string
}
const ServerPage : NextPage = () => {
    const router = useRouter()
    const {id} = router.query as QParams
    const server = api.server.getServerById.useQuery({id})
    if (!server.data) {
        return <div>Loading</div>
    }
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-full max-w-2xl mx-auto my-4">
      <h2 className="text-3xl font-semibold mb-4">{server.data.name}</h2>
      <p className="text-gray-300 mb-4">{server.data.description}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-400">Faculty</p>
          <p>{server.data.faculty}</p>
        </div>
        <div>
          <p className="text-gray-400">Year & Semester</p>
          <p>
            {server.data.year} - {server.data.semester}
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-400">Rating</p>
        <p>{server.data.rating}/5</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-400">Importance</p>
        <p>{server.data.importance}</p>
      </div>
      {server.data.additionalInfo && (
        <div className="mb-4">
          <p className="text-gray-400">Additional Information</p>
          <p>{server.data.additionalInfo}</p>
        </div>
      )}
      {server.data.usefulLinks && (
        <div>
          <p className="text-gray-400">Useful Links</p>
          <a
            href={server.data.usefulLinks}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            {server.data.usefulLinks}
          </a>
        </div>
      )}
    </div>
  )
}

export default ServerPage