import { useState } from "react";
import PropsChild from "./PropsChild";

const PropsSend = () => {
  /* Props: 부모 컴포넌트가 자식 컴포넌트에게 단일 객체 형태로 값을 전달
        react에서는 데이터흐름상 자식에서 부모로 값을 직접 전달하는 걸 허용하지 않음.
        (단방향 데이터 플로우)
    */
  const [show, setShow] = useState(false);
  const goOpen = () => {
    setShow(true);
  };
  const goClose = () => {
    setShow(false);
  };

  const name = "prosSend";
  return (
    <div>
      <p>자식컴포넌트열고 닫기</p>
      <button onClick={goOpen}>자식 열기</button>
      <button onClick={goClose}>자식 닫기</button>

      {/* 자식 컴포넌트 붙이기 */}
      {show ? <PropsChild parent={name} text="123" /> : null}
    </div>
  );
};
export default PropsSend;
