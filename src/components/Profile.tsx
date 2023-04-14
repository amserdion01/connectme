import React from 'react';
import { useRouter } from 'next/router';
import { BsArrowLeftCircle } from 'react-icons/bs';
import BackButton from './BackButton';

const Profile: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full flex flex-col justify-between rounded-lg overflow-hidden">
        <div className="relative h-80 bg-gray-400 flex items-center justify-center">
          <div className="absolute inset-0 h-full w-full bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="w-28 h-28 bg-gray-100 rounded-full mb-4"></div>
            <h1 className="text-4xl font-bold text-white mb-0">{`${'Marius'} ${'Gurita'}`}</h1>
            <p className="text-lg text-gray-200 mb-4">Software Developer</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">

          <BackButton/>
          <p className="text-lg mb-8 text-gray-700">
            Hello! My name is Marius Alexandru Gurita, I am a Software Developer.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium w-24 text-gray-700">Faculty:</p>
              <p className="text-sm font-medium flex-1">Engineering</p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium w-24 text-gray-700">Year:</p>
              <p className="text-sm font-medium flex-1">3rd Year</p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium w-24 text-gray-700">University:</p>
              <p className="text-sm font-medium flex-1">Example University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
