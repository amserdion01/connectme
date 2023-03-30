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
    const stars = Array(5)
    .fill(0)
    .map((_, i) => (i < server.rating ? <FaStar key={i} /> : <FaRegStar key={i} />));
    return (
    <div className="p-6 rounded-lg shadow-md bg-gray-100 w-full max-w-sm mx-auto my-4">
                <Link href={`/server/${server.id}`}>    
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{server.name}</h2>
      <div className="flex space-x-1 mb-4">{stars}</div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-gray-700 font-bold">Faculty</p>
          <p>{server.faculty}</p>
        </div>
        <div>
          <p className="text-gray-700 font-bold">Year & Semester</p>
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