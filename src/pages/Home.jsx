import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const months = {
  0: "January",
  2: "March",
  3: "April",
  1: "February",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const getMonthlyData = (pivotDate, data) => {
  const startDate = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  const endDate = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  return data.filter(
    (item) => item.createdDate >= startDate && item.createdDate <= endDate
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onMonthUp = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onMonthDown = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <>
      <Header
        title={`${months[pivotDate.getMonth()]}, ${pivotDate.getFullYear()}`}
        leftChild={<Button text={"<"} onClick={onMonthDown} />}
        rightChild={<Button text={">"} onClick={onMonthUp} />}
      />
      <DiaryList data={monthlyData} />
    </>
  );
};

export default Home;
