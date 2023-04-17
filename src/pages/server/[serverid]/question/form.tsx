import { NextPage } from "next";
import ServerForm from "~/components/Form";
import { getLayout } from "~/components/Layout";
import QuestionForm from "~/components/QuestionForm";
import { NextPageWithLayout } from "~/pages/_app";

const NewQuestion: NextPageWithLayout = () => {

return(
  <div><QuestionForm/></div>
);}

NewQuestion.getLayout=getLayout;
export default NewQuestion;