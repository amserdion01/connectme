import { Question } from "@prisma/client";
import { GetServerSideProps, NextPage } from "next";

import router, { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import BackButton from "~/components/BackButton";
import { prisma } from "~/server/db";
import { api } from "~/utils/api";
import { formatDistanceToNow } from "date-fns";

interface QParams extends ParsedUrlQuery {
  questionid: string;
}
interface QuestionPageProps {
  question: Omit<Question, "created_at" | "updated_at"> & {
    created_at: string;
    updated_at: string;
  };
  username: string;
}

const QuestionPage: NextPage<QuestionPageProps> = ({ question, username }) => {
  const deleteQuestion = api.question.deleteQuestion.useMutation();
  const Spinner = () => (
    <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-blue-500"></div>
  );
  const created_at = new Date(question.created_at);
  const updated_at = new Date(question.updated_at);
  const showUpdated = created_at.toJSON() == updated_at.toJSON();

  const formattedCreatedAt = formatDistanceToNow(
    new Date(question.created_at),
    {
      addSuffix: true,
    }
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <BackButton />
      <div className="mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {question.title}
          </h1>
          {showUpdated && (
            <span className="inline-block rounded bg-green-200 px-2 py-1 text-xs font-semibold text-green-700">
              Updated
            </span>
          )}
        </div>
        <div className="mt-8 overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {question.title}
            </h3>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <p>
                Created by {username} {formattedCreatedAt}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:grid sm:gap-4 sm:py-5 sm:px-6">
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                  {question.content}
                </dd>
                <button
            className="mt-4 rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            onClick={async () => {
              await deleteQuestion.mutateAsync({ id: question.id });
              router.back(); // Redirect to another page after deletion, for example, the homepage
            }}
          >
            Delete question
          </button>
              </div>
            </dl>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuestionPage;

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
    select: { name: true },
  });
  if (!user) {
    return { notFound: true };
  }
  const { updated_at, created_at, ...rest } = question;
  return {
    props: {
      question: {
        ...rest,
        updated_at: updated_at.toJSON(),
        created_at: created_at.toJSON(),
      },
      username: user.name,
    },
  };
};
