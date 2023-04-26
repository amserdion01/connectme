import { Server } from '@prisma/client'
import Link from 'next/link';
import React from 'react'
import { FaStar, FaRegStar, FaNotEqual } from 'react-icons/fa';
import { prisma } from '~/server/db';
import { api } from '~/utils/api';

const ServerCard : React.FC <{server: Server}> = ({server}) => {

    const stars = Array(5)
    .fill(0)
    .map((_, i) => (i < server.rating ? <FaStar key={i} /> : <FaRegStar key={i} />));
    const questioncount = api.question.getQuestionNumber.useQuery({id: server.id});
    const noq = questioncount.data
    console.log(FaNotEqual)
    
    return (
    <div className="p-6 rounded-lg shadow-md bg-gray-100 w-full max-w-sm mx-auto my-4">
                <Link href={`/server/${server.id}`}>    
                <span>
                  <div className="text-2xl font-bold mb-4 text-gray-800">{server.name}</div>
                        <div className="flex space-x-1 mb-4">{stars}
                        </div>
                </span>
      <div className=' text-gray-700 font-bold gap-2 mb-2'>
        Number of questions: {noq}
      </div>
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