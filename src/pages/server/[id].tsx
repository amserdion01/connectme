import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import HeaderBar from '~/components/HeaderBar';
import { api } from '~/utils/api';

interface QParams extends ParsedUrlQuery {
  id: string;
}

const ServerPage: NextPage = () => {
  const [selectedIcon, setSelectedIcon] = React.useState<'about' | 'profile' | 'message' | 'posts'>('about');
  const router = useRouter();
  const { id } = router.query as QParams;
  const server = api.server.getServerById.useQuery({ id });
  const Spinner = () => (
    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
  );

  if (!server.data) {
    return (
      <div className="min-h-screen w-screen bg-gray-100 flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  const handleAboutClick = () => {
    setSelectedIcon('about');
    console.log('about icon clicked');
  };

  const handleProfileClick = () => {
    setSelectedIcon('profile');
    console.log('Profile icon clicked');
  };

  const handleMessageClick = () => {
    setSelectedIcon('message');
    console.log('Message icon clicked');
  };

  const handlePostsClick = () => {
    setSelectedIcon('posts');
    console.log('Posts icon clicked');
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100">
      <HeaderBar
        selected={selectedIcon}
        onAboutClick={handleAboutClick}
        onProfileClick={handleProfileClick}
        onMessageClick={handleMessageClick}
        onPostsClick={handlePostsClick}
      />
      <div className="p-6 rounded-lg shadow-md bg-white w-full max-w-3xl mx-auto my-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{server.data.name}</h2>
        <p className="text-gray-700 mb-4">{server.data.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-gray-700 font-bold">Faculty</p>
            <p>{server.data.faculty}</p>
          </div>
          <div>
            <p className="text-gray-700 font-bold">Year & Semester</p>
            <p>
              {server.data.year} - {server.data.semester}
            </p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 font-bold">Rating</p>
          <p>{server.data.rating}/5</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 font-bold">Importance</p>
          <p>{server.data.importance}</p>
        </div>
        {server.data.additionalInfo && (
          <div className="mb-4">
            <p className="text-gray-700 font-bold">Additional Information</p>
            <p>{server.data.additionalInfo}</p>
          </div>
        )}
        {server.data.usefulLinks && (
          <div>
            <p className="text-gray-700 font-bold">Useful Links</p>
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
    </div>
  );
};

export default ServerPage;