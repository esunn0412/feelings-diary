import "./DiaryItem.css";
import { getEmotionImage } from "../util/get-emotion-image";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
const DiaryItem = ({ id, createdDate, emotionId, content }) => {
  const nav = useNavigate();
  return (
    <div className="DiaryItem">
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`emotion emotion_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div onClick={() => nav(`/diary/${id}`)} className="info">
        <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
        <div className="content">{content}</div>
      </div>
      <div className="editbutton">
        <Button onClick={() => nav(`/edit/${id}`)} text={"Edit"} />
      </div>
    </div>
  );
};

export default DiaryItem;
