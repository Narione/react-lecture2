import { useEffect, useState } from "react";

const Timer = ({ limit, onClose }) => {
  const limitTime = limit || 60; //기본 설정값

  const [seconds, setSeconds] = useState(limitTime);

  /* 타이머 생성 초가 0이 되었을 때 or 컴포넌트 unmount*/
  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    return () => {
      console.log("타이머 정리");
      clearInterval(intervalTimer);
    };
  }, []);

  useEffect(() => {
    // 나 0초되면 어떻게 했더라
    if (seconds == 0) {
      // 컴포넌트 닫기
      onClose({ closeTimer: true });
    }
  }, [seconds]);

  /* 시간 포매팅(hh:mm) */
  const timeFormat = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec}`;
  };
  return (
    <input
      type="text"
      className="h-10 border mt-1 rounded px-4 bg-gray-50 w-4/12"
      value={timeFormat(seconds)}
      readOnly
      disabled
    />
  );
};
export default Timer;
