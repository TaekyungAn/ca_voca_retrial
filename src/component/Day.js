import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dummy from "../db/data.json";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day() {
  // filter로 해당일자 단어만 나오게 필터함
  const { day } = useParams();
  // 주의: 문자랑 숫자를 비교하면 필터에 아무것도 안걸림
  // const wordList = dummy.words.filter((word) => word.day === Number(day));

  // 커스텀 훅으로 대체
  const words = useFetch(`http://localhost:3001/words?day=${day}`);
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      {/* 아무 화면이 없을 때 로딩중 이라는 화면을 띄움 */}
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
