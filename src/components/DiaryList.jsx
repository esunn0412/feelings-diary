import Button from "./Button";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest")
        return Number(a.createdDate) - Number(b.createdDate);
      // if a is older than b, a will be smaller in number and they won't switch places because negative
      else return Number(b.createdDate) - Number(a.createdDate);
    });
  };

  return (
    <div className="DiaryList">
      <div className="menubar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>latest</option>
          <option value={"oldest"}>oldest</option>
        </select>
        <Button
          onClick={() => nav("/new")}
          text={"Add New Diary Entry"}
          type={"POSITIVE"}
        />
      </div>
      <div className="listwrapper">
        {getSortedData().map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
