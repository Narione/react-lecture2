import { useEffect, useState } from "react";

const HookUseEffect = () => {
  /* 렌더링 될때마다 특정작업 수행하도록하는 훅
        단, 의존성 배열에 영향을 받음
        useEffect(()=>{특정작업}, [defendency array])
        mount(첫 렌더링), unmount(사라짐), update(재 렌더링)
     */
  console.log("================>rendering<===============");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  //렌더링 순서보기
  useEffect(() => {
    // console.log("=>매번 렌더링<=");
  });
  // defendency array = [] : 처음 로딩시에 렌더링(배열이 비어있는 경우)
  useEffect(() => {
    // console.log("=>처음에만 렌더링<=");
  }, []);

  useEffect(() => {
    // console.log("=>useEffect는 순서대로 실행<=");
  }, []);

  useEffect(() => {
    console.log("=>count 상태변화됨<=");
    // console.log(count);
  }, [count]);

  useEffect(() => {
    console.log("=>name 상태변화<=");
  }, [name]);

  useEffect(() => {
    console.log("=>list 상태변화<=");
  }, [list]);

  const nameOnChangeHandler = (e) => {
    setName(e.target.value);
  };
  const goAddCount = () => {
    setCount(count + 1);
  };

  const goAddName = () => {
    setList([...list, name]);
    setName("");
  };

  const [num, setNum] = useState(0);
  const [doub, setDoub] = useState(num);

  const goAddNum = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    console.log(num);
    setDoub(num * 2);
  }, [num]);

  return (
    <>
      <div>
        <p>count: {count}</p>
        <button onClick={goAddCount}>카운드 +</button>
        <br />
        <label>
          추가할 이름 입력
          <input type="text" onChange={nameOnChangeHandler} value={name} />
          <button onClick={goAddName}>이름 추가</button>
        </label>
        <br />
        <p>이름 목록</p>
        <ul>
          {list.map((v, i) => {
            return <li key={i}>{v}</li>;
          })}
        </ul>
        <div>
          {/* 숫자업-> num +1 -> num의 값이 바뀌었을 때 바뀐 값의 2배한 숫자를 두배: 기록 */}
          <p>숫자: {num}</p>
          <p>두배: {doub}</p>
          <button onClick={goAddNum}>숫자 업</button>
        </div>
      </div>
    </>
  );
};
export default HookUseEffect;
