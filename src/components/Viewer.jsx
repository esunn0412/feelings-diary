import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-image";
import { emotionList } from "../util/constants";

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <div className="Viewer">
      <section className="emotion">
        <h4>Today's Emotion</h4>
        <div className={`emotionwrapper emotionwrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} alt="emotion" />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content">
        <h4>Today's Diary</h4>
        <div className="contentwrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
