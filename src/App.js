import "./App.css";
import HookUseState from "./lecture/HookUseState";
import JsxRolues from "./lecture/jsxRolues";
import JsxRolues_m from "./mission/jsxRolues";
import HookUseState_m from "./mission/HookUseState";
import HookUseEffect from "./lecture/HookUseEffect";
import HookUseEffect_m from "./mission/HookUseEffect";
import HookUseRef from "./lecture/HookUseRef";
import HookUseRef_m from "./mission/HookUseRef";
// import HookUseCallback from "./lecture/HookUseCallback";
// import HookUseCallback_m from "./mission/HookUseCallback";
import PropsSend from "./lecture/PropsSend";
import PropsSend_m from "./mission/PropsSend";
import Cleanup from "./lecture/Timer/Cleanup";
import Signup from "./mission/Timer/Signup";
import Signup2 from "./mission/Timer2/Signup";
import Schedule from "./lecture/Schedule/Schedule";
import Schedule_m from "./mission/Schedule/Schedule";
import Schedule_m2 from "./mission/Schedule2/Schedule";

function App() {
  return (
    <div className="App">
      {/* 설명 컴포넌트 */}
      {/* <JsxRolues /> */}
      {/* <HookUseState /> */}
      {/* <HookUseEffect /> */}
      {/* <HookUseRef /> */}
      {/* <HookUseCallback /> */}
      {/* <PropsSend /> */}
      {/* <Cleanup /> */}
      {/* <Schedule /> */}

      {/* 미션 컴포넌트 */}
      {/* <JsxRolues_m /> */}
      {/* <HookUseState_m /> */}
      {/* <HookUseEffect_m /> */}
      {/* <HookUseRef_m /> */}
      {/* <HookUseCallback_m /> */}
      {/* <PropsSend_m /> */}
      {/* <Signup /> */}
      {/* <Signup2 /> */}
      {/* <Schedule_m /> */}
      <Schedule_m2 />
    </div>
  );
}

export default App;
