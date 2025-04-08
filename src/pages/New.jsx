import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { useContext } from "react";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  usePageTitle("New Diary");

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"New Diary"}
        leftChild={<Button text={"< return"} onClick={() => nav(-1)} />}
      />

      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
