import React from "react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { ParsedUrlQuery } from "querystring";
import AddQuestion from "~/components/AddQuestion";
import QuestionCard from "~/components/QuestionCard";
import { NextPageWithLayout } from "~/pages/_app";
import QuestionPage from "./[questionid]";
import { getLayout } from "~/components/Layout";

interface QParams extends ParsedUrlQuery {
  serverid: string;
}

const QuestionsPage: NextPageWithLayout = () => {


  const router = useRouter();
  const { serverid: id } = router.query as QParams;


  const serverId = id;
  const questions = api.question.getAllQuestions.useQuery({ serverId });
  console.log("Questions:");
  console.log(questions.error?.message);
  console.log(questions.error?.data);

  const Spinner = () => (
    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
  );
  if (questions.isError) {
    return(
      <div>Autentifica-te</div>
    )
  }
  if (questions.isLoading) {
    return (
      <div className="min-h-screen w-screen bg-gray-100 flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <AddQuestion />
      <div className="flex w-screen flex-wrap gap-3">
        {questions.data &&
          questions.data.map((question) => {
            return <QuestionCard question={question} key={question.id} />;
          })}
      </div>
    </div>
  );
};
QuestionsPage.getLayout=getLayout;
export default QuestionsPage;
