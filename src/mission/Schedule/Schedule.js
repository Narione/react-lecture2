import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import EventPopup from "./EventPopup";
const localizer = momentLocalizer(moment);

const Schedule = () => {
  /* 팝업 열고 닫기 */
  const [openPopup, setOpenPopup] = useState(false);

  const goClose = (param) => {
    const { close } = param;
    if (close) {
      setOpenPopup(false);
    }
  };

  /* 이벤트 추가하기 */
  const [events, setEvents] = useState([]);
  const [selectEvent, setSelectEvent] = useState(null);
  const goRegit = (param) => {
    const { eventObj } = param;
    setSelectEvent(eventObj);
    if (eventObj) {
      setEvents([...events, eventObj]);
    }
  };
  const [clickSlotParam, setClickSlotParam] = useState(null);

  const clickSlot = (param) => {
    setClickSlotParam(param);
    console.log(clickSlotParam);
    setOpenPopup(true);
  };

  /* 이벤트 상세보기 */
  const startRef = useRef();
  const titleRef = useRef();
  const contentsRef = useRef();

  const [showEvent, setShowEvent] = useState(false);
  const clickEvent = (e) => {
    console.log(e);
    setShowEvent(true);
    startRef.current.textContent = e.start;
    titleRef.current.textContent = e.title;
    contentsRef.current.textContent = e.contents;
  };

  useEffect(() => {
    console.log(selectEvent);
  }, [showEvent]);

  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="max-w-lg w-full shadow-lg">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={clickEvent}
            onSelectSlot={clickSlot}
            selectable
          />

          {showEvent ? (
            <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
              <div className="px-4">
                <div className="border-b pb-4 border-gray-400 border-dashed">
                  <p
                    className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300"
                    ref={startRef}
                  >
                    {/* {selectEvent.start} */}
                  </p>
                  <a
                    ref={titleRef}
                    tabIndex="0"
                    className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                  >
                    {/* {selectEvent.title} */}
                  </a>
                  <p
                    className="text-sm pt-2 leading-none text-gray-600 dark:text-gray-300"
                    ref={contentsRef}
                  >
                    {/* {selectEvent.contents} */}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {/* 팝업 코드 */}
      {openPopup ? (
        <EventPopup
          onClose={goClose}
          cSParam={clickSlotParam}
          onRegit={goRegit}
        />
      ) : null}
    </>
  );
};
export default Schedule;
