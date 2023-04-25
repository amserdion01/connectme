import type { Question } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";

import { useRouter } from "next/router";
import React, { useState } from "react";
import BackButton from "~/components/BackButton";
import { prisma } from "~/server/db";
import { api } from "~/utils/api";
import { formatDistanceToNow } from "date-fns";
import { getSession } from "next-auth/react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-light.css";
import Answer from "~/components/question/Answer";

interface QuestionPageProps {
  question: Omit<Question, "created_at" | "updated_at"> & {
    created_at: string;
    updated_at: string;
  };
  username: string;
  own: boolean;
}

const QuestionPage: NextPage<QuestionPageProps> = ({
  question,
  username,
  own,
}) => {
  const router = useRouter();
  const [answerContent, setAnswerContent] = useState("");

  const deleteQuestion = api.question.deleteQuestion.useMutation();
  const createAnswer = api.answer.createAnswer.useMutation(); // Create answer mutation
  const getAllAnswers = api.answer.getAllAnswers.useQuery({
    questionId: question.id,
  });

  const Spinner = () => (
    <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-blue-500"></div>
  );
  const formattedCreatedAt = formatDistanceToNow(
    new Date(question.created_at),
    {
      addSuffix: true,
    }
  );
  const handleSubmitAnswer = async () => {
    await createAnswer.mutateAsync({
      content: answerContent,
      questionId: question.id,
    });
    setAnswerContent("");
    getAllAnswers.refetch();
  };

  const markSolved = api.question.markSolved.useMutation();

  return (
    <div className="min-h-screen bg-gray-50">
      <BackButton />
      <div className="mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between"></div>
        <div className="mt-8 overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <span className="flex  items-center justify-between text-3xl leading-6 text-gray-900">
              <span>{question.title}</span>
              <span
                className={` px-2 py-1 text-xs font-medium ${
                  question.solved
                    ? "bg-green-200 text-green-700"
                    : "bg-red-200 text-red-700"
                }`}
              > 
                {question.solved ? "Solved" : "Unsolved"}
              </span>
            </span>
            <div className="mt-2 flex items-center text-sm text-gray-500 ">
              <p>
                Created by {username} {formattedCreatedAt}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="bg-[#fafafa] py-4 sm:grid sm:gap-4 sm:py-5 sm:px-6">
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                  <div className="markdown">
                    <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                      {question.content}
                    </ReactMarkdown>
                  </div>
                </dd>
                <div className="mt-4">
                  <button
                    className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                    onClick={async () => {
                      await deleteQuestion.mutateAsync({ id: question.id });
                      router.back();
                    }}
                  >
                    Delete question
                  </button>
                  {own && !question.solved && (
                    <button
                      className="ml-4 rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                      onClick={async () => {
                        await markSolved.mutateAsync({ id: question.id });
                        router.replace(router.asPath);
                      }}
                    >
                      Mark as solved
                    </button>
                  )}
                </div>
              </div>
            </dl>
            <div className="mt-8">
              <h2 className="mb-4 px-3 text-2xl font-bold ">Answers</h2>
              {getAllAnswers.data?.map((answer) => (
                <Answer
                  key={answer.id}
                  answer={answer}
                  onDelete={() => getAllAnswers.refetch()}
                />
              ))}
              <div className="mt-8">
                <label className="mb-2 block px-4 text-sm font-medium text-gray-700">
                  Your Answer
                </label>
                <div className="px-2">
                  <textarea
                    className="w-full rounded-lg border px-2 py-2 text-sm text-gray-700 focus:outline-none"
                    rows={4}
                    value={answerContent}
                    onChange={(e) => setAnswerContent(e.target.value)}
                  ></textarea>
                </div>
                <button
                  className=" mt-4 w-full rounded-b bg-gray-500 px-4 py-2 text-white hover:bg-black"
                  onClick={handleSubmitAnswer}
                >
                  Submit Answer
                </button>
              </div>
            </div>
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
