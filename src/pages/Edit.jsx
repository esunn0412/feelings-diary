import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const curDiaryItem = useDiary(params.id);

  usePageTitle(`Editing Diary ${params.id}`);

  const onClickDelete = () => {
    if (window.confirm("Are you sure you want to delete this diary?")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("Are you sure you want to edit this diary?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div className="Edit">
      <Header
        title={"Editing Diary"}
        leftChild={<Button text={"< return"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"delete"} type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor onSubmit={onSubmit} initialData={curDiaryItem} />
    </div>
  );
};

export default Edit;
