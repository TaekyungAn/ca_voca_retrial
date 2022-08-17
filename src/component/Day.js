import dummy from "../db/data.json";

export default function Day() {
  // 해당일자 단어만 나오게 필터함
  const day = 1;
  const wordList = dummy.words.filter((word) => word.day === day);

  return (
    <table>
      <tbody>
        {wordList.map((word) => (
          <tr key={word.id}>
            <td>{word.eng}</td>
            <td>{word.kor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
