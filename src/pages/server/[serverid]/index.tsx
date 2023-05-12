import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ParsedUrlQuery } from "querystring";
import React from "react";
import { getLayout } from "~/components/Layout";
import Reviews from "~/components/server/Reviews";
import type { NextPageWithLayout } from "~/pages/_app";
import { prisma } from "~/server/db";
import { api } from "~/utils/api";

interface QParams extends ParsedUrlQuery {
  serverid: string;
}

const ServerPage: NextPageWithLayout = () => {
  const deleteServer = api.server.deleteServerById.useMutation();

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

  const handleDeleteClick = async () => {
    if (window.confirm("Are you sure you want to delete this server?")) {
      await deleteServer.mutate({ id });
      router.push("/server"); 
    }
  };


  return (
      

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
    <div className="mb-4 flex justify-between ">
    <Link href={`/server/${server.data.id}/review`}>    
      <div className="focus:shadow-outline w-22 rounded bg-green-600 py-2 px-4 font-bold text-white hover:bg-green-700 focus:outline-none">
          Review

      </div>
      </Link>
      <div className="justify-end">
      <button
        className="focus:shadow-outline rounded bg-red-600 py-2 px-4 font-bold text-white hover:bg-red-700 focus:outline-none"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
      </div>
    </div>
    <Reviews id={id}/>
  </div>
);
};
ServerPage.getLayout=getLayout;
export default ServerPage;



export const getServerSideProps: GetServerSideProps<object> = async (
  context
) => {
  const question = await prisma.question.findFirst({
    where: { id: context.query.questionid as string },
  });
  if (!question) {
    return { notFound: true };
  }
  const user = await prisma.user.findFirst({
    where: { id: question.userId },
    select: { name: true, id: true },
  });
  if (!user) {
    return { notFound: true };
  }
  const { updated_at, created_at, ...rest } = question;

  const session = await getSession(context);
  const currentUser = await prisma.user.findFirst({
    where: { id: session?.user?.id },
  });

  return {
    props: {
      question: {
        ...rest,
        updated_at: updated_at.toJSON(),
        created_at: created_at.toJSON(),
      },
      username: user.name,
      own: currentUser?.id === user.id,
    },
  };
};
