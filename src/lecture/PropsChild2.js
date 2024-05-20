import { useState } from "react";

const PropsChild = (props) => {
  const { num1, num2 } = props;

  const [strNum, setStrNum] = useState(Number(num1));
  const [num, setNum] = useState(num2);

  return (
    <div>
      <p>숫자1 : {strNum}</p>
      <button onClick={() => setStrNum(strNum + 1)}>숫자1 +</button>
      <button onClick={() => setStrNum(strNum - 1)}>숫자1 -</button>
      <p>숫자2: {num}</p>
      <button onClick={() => setNum(num + 1)}>숫자2 +</button>
      <button onClick={() => setNum(num - 1)}>숫자2 -</button>
    </div>
  );
};
export default PropsChild;
