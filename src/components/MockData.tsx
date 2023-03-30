import React from 'react';
import { api } from '~/utils/api';

interface MockData {
  name: string;
  description: string;
  faculty: string;
  year: number;
  semester: number;
  importance: string;
  additionalInfo: string;
  usefulLinks: string;
}

const mockDataList: MockData[] = [
    {
        name: 'Data Structures and Algorithms',
        description: 'An in-depth study of essential data structures and algorithms, including arrays, linked lists, trees, graphs, and their associated algorithms.',
        faculty: 'Computer Science',
        year: 2,
        semester: 1,
        importance: 'High',
        additionalInfo: 'Prerequisite: Introduction to Computer Science',
        usefulLinks: 'https://cs201.example.edu',
      },
      {
        name: 'Operating Systems',
        description: 'A comprehensive introduction to operating systems concepts, including processes, threads, memory management, file systems, and I/O.',
        faculty: 'Computer Science',
        year: 2,
        semester: 2,
        importance: 'High',
        additionalInfo: 'Prerequisite: Data Structures and Algorithms',
        usefulLinks: 'https://cs301.example.edu',
      },
      {
        name: 'Computer Networks',
        description: 'An overview of computer networking concepts, including network architectures, protocols, routing, and network security.',
        faculty: 'Computer Science',
        year: 3,
        semester: 1,
        importance: 'High',
        additionalInfo: 'Prerequisite: Operating Systems',
        usefulLinks: 'https://cs401.example.edu',
      },
      {
        name: 'Database Systems',
        description: 'A study of database systems, including relational databases, query languages, normalization, and transaction processing.',
        faculty: 'Computer Science',
        year: 3,
        semester: 2,
        importance: 'High',
        additionalInfo: 'Prerequisite: Data Structures and Algorithms',
        usefulLinks: 'https://cs402.example.edu',
      },
      {
        name: 'Artificial Intelligence',
        description: 'An introduction to artificial intelligence concepts, including search algorithms, knowledge representation, reasoning, machine learning, and natural language processing.',
        faculty: 'Computer Science',
        year: 4,
        semester: 1,
        importance: 'High',
        additionalInfo: 'Prerequisite: Data Structures and Algorithms',
        usefulLinks: 'https://cs501.example.edu',
      },];

function CreateSomeData() {
  const createServer = api.server.createServer.useMutation();

  const makeData = () => {
    for (const server of mockDataList) {
      createServer.mutate(server);
    }
  };

  return (
    <div>
                 <button onClick={makeData}
        className="bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-700"
        type="submit"
      >
        Add Data
      </button>
    </div>
  );
}

export default CreateSomeData;
