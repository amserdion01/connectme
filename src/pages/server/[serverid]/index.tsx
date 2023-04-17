import { NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import HeaderBar from "~/components/HeaderBar";
import { api } from "~/utils/api";

interface QParams extends ParsedUrlQuery {
  serverid: string;
}

const ServerPage: NextPage = () => {
  const deleteServer = api.server.deleteServerById.useMutation();

  const [selectedIcon, setSelectedIcon] = React.useState<
    "about" | "message" | "questions"
  >("about");
  const router = useRouter();
  const { serverid: id } = router.query as QParams;
  const server = api.server.getServerById.useQuery({ id });
  const Spinner = () => (
    <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-blue-500"></div>
  );

  if (!server.data) {
    return (
      <div className="flex min-h-screen w-screen items-center justify-center bg-gray-100">
        <Spinner />
      </div>
    );
  }
  const handleAboutClick = () => {
    setSelectedIcon("about");
    console.log("about icon clicked");
  };

  const handleMessageClick = () => {
    setSelectedIcon("message");
    console.log("Message icon clicked");
  };

  const handleDeleteClick = async () => {
    if (window.confirm("Are you sure you want to delete this server?")) {
      await deleteServer.mutate({ id });
      router.push("/server"); 
    }
  };

  const handleQuestionClick = () => {
    router.push(`/server/${id}/question`);
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100">
<HeaderBar
  id={id}
  selected={selectedIcon}
  onAboutClick={handleAboutClick}
  onMessageClick={handleMessageClick}
  onQuestionsClick={handleQuestionClick}
/>

      <div className="mx-auto my-4 w-full max-w-3xl rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          {server.data.name}
        </h2>
        <p className="mb-4 text-gray-700">{server.data.description}</p>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-gray-700">Faculty</p>
            <p>{server.data.faculty}</p>
          </div>
          <div>
            <p className="font-bold text-gray-700">Year & Semester</p>
            <p>
              {server.data.year} - {server.data.semester}
            </p>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-bold text-gray-700">Rating</p>
          <p>{server.data.rating}/5</p>
        </div>
        <div className="mb-4">
          <p className="font-bold text-gray-700">Importance</p>
          <p>{server.data.importance}</p>
        </div>
        {server.data.additionalInfo && (
          <div className="mb-4">
            <p className="font-bold text-gray-700">Additional Information</p>
            <p>{server.data.additionalInfo}</p>
            </div>
    )}
    {server.data.usefulLinks && (
      <div>
        <p className="font-bold text-gray-700">Useful Links</p>
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
    <div className="mb-4 flex justify-end">
      <button
        className="focus:shadow-outline rounded bg-red-600 py-2 px-4 font-bold text-white hover:bg-red-700 focus:outline-none"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </div>
  </div>
</div>
);
};

export default ServerPage;