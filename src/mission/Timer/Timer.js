import { useEffect, useRef, useState } from "react";

const Timer = (props) => {
  const { limit, onClose } = props;
  const [seconds, setSeconds] = useState(limit);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        return prev - 1;
      });
    }, 1000);
    return () => {
      console.log("타이머해제");
      clearInterval(timer);
    };
  }, []);

  if (seconds == 0) {
    alert("제한시간이 종료되었습니다");
    onClose({ close: true });
  }

  /* 시간 포맷 */

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  return (
    <div className="md:col-span-1">
      <input
        type="text"
        name="code"
        id="code"
        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
        readOnly
        value={formatTime(seconds)}
      />
    </div>
  );
};
export default Timer;
