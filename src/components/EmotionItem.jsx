import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img
        className="emotionimg"
        src={getEmotionImage(emotionId)}
        alt={emotionName}
      />
      <div className="emotionname">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
