import { useEffect, useState } from "react";

const CleanupTimer = () => {
  /* 함수형 업데이트 방식
        이 방식은 이전 상태값을 기반으로 새로운 상태값을 업데이트 하는 걸 보장
        리액트에서 상태 업데이트를 비동기적으로 처리>>
        이전 상태값을 기반으로 새로운 상태값을 업데이트 하는 것이 안전
        setter(값) -> setter((prev)=>prev + 1)
  
        **이전 상태값에 의존해야 하는 경우에만 사용
    */

  const [seconds, setSeconds] = useState(120);

  useEffect(() => {
    const timer = setInterval(() => {
      //   setSeconds((prev) => prev - 1);
      // 컴포넌트가 unmount되었을 때에 함수를 정리
      setSeconds((prev) => {
        return prev - 1;
      });

      console.log("타이머 살아있음");
    }, 1000);
    return () => {
      console.log("타이머해제");
      clearInterval(timer);
    };
  }, []);

  //해당컴포턴트가 마운트해제시 실행
  //타이머 또는 함수 자체가 살아있는 경우 >> 꼭 cleanup작업하기

  return (
    <div>
      <p>Timer : {seconds}</p>
    </div>
  );
};
export default CleanupTimer;
