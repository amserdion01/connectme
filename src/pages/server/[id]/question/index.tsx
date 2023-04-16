import React from "react";
import { useRouter } from "next/router";
import HeaderBar from "~/components/HeaderBar";
import QuestionList from "~/components/QuestionList";
import { api } from "~/utils/api";
import { ParsedUrlQuery } from "querystring";
import AddQuestion from "~/components/AddQuestion";

interface QParams extends ParsedUrlQuery {
  id: string;
}

const QuestionPage: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = React.useState<
    "about" | "message" | "questions"
  >("questions");

  const router = useRouter();
  const { id } = router.query as QParams;

  const handleAboutClick = () => {
    setSelectedIcon("about");
    console.log("about icon clicked");
    router.back();
  };

  const handleMessageClick = () => {
    setSelectedIcon("message");
    console.log("Message icon clicked");
  };

  const handleQuestionsClick = () => {
    setSelectedIcon("questions");
    console.log("Posts icon clicked");
    router.push(`/server/${id}/question`);
  };

  return (
    <div>
      <HeaderBar
        id={id}
        onAboutClick={handleAboutClick}
        onMessageClick={handleMessageClick}
        onQuestionsClick={handleQuestionsClick}
        selected={selectedIcon}
      />

      <QuestionList filter="" />
      <AddQuestion/>
    </div>
  );
};

export default QuestionPage;
