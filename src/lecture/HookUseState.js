import { useState } from "react";

const HookUseState = () => {
  /* useState
        -상태(state)가 변경되는 걸 감지
        (상태값 변경할 수 있게 도와주는 훅) 
        //렌더링이 되어야할때 사용

        const [state, setState] = useState(초깃값)
        state: 현재 상태값
        setState: 상태를 업데이트 함수
        - setState는 비동기 처리
        - setState(updater(함수), [callback])
    */
  console.log("===========> redering <===========");
  /* let 변수 */
  // 처음 초깃값이 고정되어있어야 함
  let letNum = 0;

  /* useState 변수 */
  const [count, setCount] = useState(2);

  const addLetNum = () => {
    letNum++;
    console.log(letNum);
  };

  const addCount = () => {
    setCount(count + 1);
    // 비동기처리 때문에 count는 이전값을 출력
    console.log("count:", count);
  };

  const pnt = 0;
  const [point, setPoint] = useState(pnt);

  const addPoint = () => {
    setPoint(point + 1);
  };
  const minusPoint = () => {
    setPoint(point - 1 > 0 ? point - 1 : 0);
  };

  const [num, setNum] = useState(0);
  const goAdd = () => {
    setNum(num + 1 > 10 ? 10 : num + 1);
    // setNum((pre)=>pre+1);
  };

  /* 사용자 입력 관련 핸들러 */
  const [username, setUsername] = useState("");

  const usernameOnChangeHandler = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };
  /* 사용자 이름 추가 */
  const [list, setList] = useState([]);
  const goAddUsername = () => {
    // console.log("최종: ", username);
    setList([...list, username]);
    setUsername("");
  };

  const arr = ["유리", "철수"];
  const [friends, setFriends] = useState(arr);
  const [name, setName] = useState("");
  /* 입력창 만들기 : 이름 / 이름추가 버튼 만들기
    friends 담아서 화면에 출력될 수 있게 하기
  */
  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
  };

  const goAddName = () => {
    setFriends([...friends, name]);
    setName("");
  };

  return (
    <>
      {/* let과 useSate의 차이 */}
      <p>letNum 값: {letNum}</p>
      <p>count 값: {count}</p>
      <button onClick={addLetNum}>letNum +</button>
      <button onClick={addCount}>count +</button>

      {/* 점수 관리
            1) 점수상태 변수
            2) 점수 +-: 1+- 함수 set 함수
        */}
      <p>현재점수: {point}</p>
      <button onClick={addPoint}>점수+</button>
      <button onClick={minusPoint}>점수-</button>

      <p>숫자: {num}</p>
      <button onClick={goAdd}>숫자업</button>

      {/* 이름관리목록 */}

      <p>
        <label htmlFor="username">이름입력</label>
        <input
          type="text"
          id="username"
          onChange={usernameOnChangeHandler}
          value={username}
        />
      </p>
      <button onClick={goAddUsername}>이름추가</button>

      <p>사용자이름목록</p>
      <ul>
        {list.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ul>

      <p>미션</p>
      <label htmlFor="name">이름 입력</label>
      <input
        type="text"
        id="name"
        onChange={nameOnChangeHandler}
        value={name}
      />
      <button onClick={goAddName}>친구추가</button>

      <p>친구목록</p>
      <ul>
        {friends.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ul>
    </>
  );
};
export default HookUseState;
