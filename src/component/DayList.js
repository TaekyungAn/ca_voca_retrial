import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dummy from "../db/data.json";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  // 커스텀 훅으로 대체
  const days = useFetch("http://localhost:3001/days");

  // const [days, setDays] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3001/days")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setDays(data);
  //     });
  // });

  // 아무 화면이 없을 때 로딩중 이라는 화면을 띄움
  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day{day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
