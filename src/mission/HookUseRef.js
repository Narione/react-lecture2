import { useRef } from "react";
import "../css/mission.css";

const HookUseRef = () => {
  /* 음식변경 */
  const foodRef = useRef();

  const goChangeFood = () => {
    let randNum = Math.floor(Math.random() * 8) + 1;
    let randImg = `/images/food${randNum}.png`;
    foodRef.current.innerHTML = "<img src=" + randImg + " />";
  };

  /* 색상변경 */
  const getHexCode = function () {
    const hexNumbers = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let result = "#";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexNumbers.length);
      result += hexNumbers[randomIndex];
    }
    return result;
  };

  const colorRef = useRef();
  const ulRef = useRef();
  const goChangeColor = () => {
    let hexCode = getHexCode();
    colorRef.current.style.backgroundColor = `${hexCode}`;
    ulRef.current.innerHTML +=
      "<li style=color:" + `${hexCode}` + ">" + hexCode + "</li>";
  };

  /* 선생님 설명에서 내가 놓친 부분 */

  return (
    <>
      <div className="foodContainer" ref={foodRef}></div>
      <button onClick={goChangeFood}>음식변경</button>
      <div className="foodContainer" ref={colorRef}></div>
      <button onClick={goChangeColor}>색상변경</button>
      <ul ref={ulRef}>색상변경 기록</ul>
    </>
  );
};
export default HookUseRef;
