import { useState } from "react";
import PropsChild from "./PropsChild";
import PropsChild2 from "./PropsChild2";
import PropsPopup from "./PropsPopup";

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

  const num1 = "10";
  const num2 = 10;

  /* 팝업관련 */
  const [open, setOpen] = useState(false);
  const openPopup = () => {
    setOpen(true);
  };

  const close = (param) => {
    console.log("param: ", param);
    const { close, email, name } = param;
    if (close) {
      setOpen(false);
      if (email && name) {
        console.log(email);
        console.log(name);
      }
    }
  };

  return (
    <div>
      <p>자식컴포넌트열고 닫기</p>
      <button onClick={goOpen}>자식 열기</button>
      <button onClick={goClose}>자식 닫기</button>

      {/* 자식 컴포넌트 붙이기 */}
      {show ? (
        // <PropsChild
        //   username="신짱구"
        //   userid="jjanggu"
        //   // friends={["철수", "맹구"]}
        //   info={{ age: 5 }}
        // />
        <PropsChild2 num1={num1} num2={num2} />
      ) : null}
      <br />
      {/* 자식에서 부모로 값을 직접 전달은 안됨
      단, 부모가 자식한데 함수를 전달해서 인지 */}
      <button onClick={openPopup}>팝업열기</button>
      {open ? <PropsPopup onClose={close} /> : null}
    </div>
  );
};
export default PropsSend;
