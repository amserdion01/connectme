import { Server } from '@prisma/client'
import Link from 'next/link';
import React from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa';

const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-400" />
        ) : (
          <FaRegStar key={i} className="text-gray-400" />
        )
      );
    }
    return stars;
  }
const ServerCard : React.FC <{server: Server}> = ({server}) => {
    console.log(server)
    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-full max-w-md mx-auto my-4">
                <Link href={`/server/${server.id}`}>    
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">{server.name}</h2>
              <div className="flex items-center">
                {renderStars(server.rating)}
              </div>
            </div>
            <p className="text-gray-300 mb-4 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {server.description}
          </p>        <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-400">Faculty</p>
                <p>{server.faculty}</p>
              </div>
              <div>
                <p className="text-gray-400">Year & Semester</p>
                <p>
                  {server.year} - {server.semester}
                </p>
              </div>
            </div>
    </Link>
          </div>
  )
}

export default ServerCard