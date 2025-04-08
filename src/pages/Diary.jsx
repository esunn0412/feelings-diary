import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  usePageTitle(`Diary ${params.id}`);

  const curDiaryItem = useDiary(params.id);
  if (!curDiaryItem) {
    return <div>Loading data</div>;
  }
  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} Diary`}
        leftChild={<Button onClick={() => nav(-1)} text={"< return"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"edit"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
