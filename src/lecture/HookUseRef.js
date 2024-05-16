import { useEffect, useRef, useState } from "react";

const HookUseRef = () => {
  /* useRef
        1) ref 객체를 통해 dom 요소 직접 조작 가능함
        2) 렌더링이 될 때 값을 유지 가능함
        - 상태값에 영향을 안 주고 안 받음

        useRef(초깃값) => {current: 초깃값}
    */
  console.log("===> rendering <===");

  let letNumber = 0;
  const [number, setNumber] = useState(0);
  const numberRef = useRef(0); //ref객체

  const goAddLetNumber = () => {
    letNumber++;
    console.log("let: ", letNumber);
  };

  const goAddNumber = () => {
    setNumber(number + 1);
  };

  const goAddNumberRef = () => {
    numberRef.current++;
    console.log("ref: ", numberRef.current);
  };

  /* dom 접근 */
  const [userid, setUserid] = useState("");
  const idOnChangeHandler = (e) => {
    setUserid(e.target.value);
  };

  const checkId = "user123";
  const idRef = useRef();
  console.log(idRef);
  const goLogIn = () => {
    if (userid == checkId) {
      alert("로그인완료");
    } else {
      idRef.current.style.backgroundColor = "yellow";
    }
  };

  //아이디 찾기
  //1) localStorage: {userid: user123, username: 신짱구}
  //2) 사용자에게 이름을 입력받고 입력받은 이름이 local username과 일치하면 userid를 알림
  //3) local username 일치하지 않을 경우에는 입력창의 배경색을 pink.

  const json = { userid: "user123", username: "신짱구" };
  console.log(JSON.stringify({ userid: "user123", username: "신짱구" }));
  const [username, setUsername] = useState("");
  const nameOnChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const nameRef = useRef();
  const goFindId = () => {
    const info = JSON.parse(localStorage.getItem("info"));
    const checkName = info.username;
    if (username == checkName) {
      alert(`id는 ${info.userid} 입니다.`);
    } else {
      nameRef.current.focus();
      nameRef.current.style.backgroundColor = "pink";
    }
  };

  return (
    <>
      <p>letNumber: {letNumber}</p>
      <p>number: {number}</p>
      <p>numberRef: {numberRef.current}</p>
      <button onClick={goAddLetNumber}>letNumber +</button>
      <button onClick={goAddNumber}>number +</button>
      <button onClick={goAddNumberRef}>numberRef +</button>
      <br />
      <p>로그인</p>
      <input ref={idRef} type="text" onChange={idOnChangeHandler} />
      <button onClick={goLogIn}>로그인하기</button>
      <br />
      <input ref={nameRef} type="text" onChange={nameOnChangeHandler} />
      <button onClick={goFindId}>아이디찾기</button>
    </>
  );
};

export default HookUseRef;
