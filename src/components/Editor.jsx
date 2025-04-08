import EmotionItem from "./EmotionItem";
import Button from "./Button";
import "./Editor.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({ onSubmit, initialData }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });
  const nav = useNavigate();

  useEffect(() => {
    if (initialData) {
      setInput({
        ...initialData,
        createdDate: new Date(Number(initialData.createdDate)),
      });
    }
  }, [initialData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") value = new Date(`${value} 00:00:00`);

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSave = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <div className="calendar">
        <h4>Today's Date</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </div>
      <div className="emotions">
        <h4>How do you feel?</h4>
        <div className="emotionwrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={input.emotionId === item.emotionId}
            />
          ))}
        </div>
      </div>
      <div className="entry">
        <h4>Today's Diary</h4>
        <textarea
          name="content"
          onChange={onChangeInput}
          value={input.content}
          className="entrytext"
          placeholder="How was your day?"
        />
      </div>
      <div className="buttons">
        <Button onClick={() => nav(-1)} text={"cancel"} />
        <Button onClick={onClickSave} text={"save entry"} type={"POSITIVE"} />
      </div>
    </div>
  );
};

export default Editor;
