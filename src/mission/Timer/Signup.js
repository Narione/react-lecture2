import { useCallback, useEffect, useRef, useState } from "react";
import Timer from "./Timer";

const Signup = () => {
  const [show, setShow] = useState(false);

  const goClose = (param) => {
    const { close } = param;
    if (close) {
      setShow(false);
    }
  };

  const goCertify = () => {
    if (email != "") {
      setShow(true);
      const codeNum = Math.floor(Math.random() * 90000) + 10000;
      console.log(codeNum);
      localStorage.setItem("codeNum", JSON.stringify(codeNum));
    } else {
      alert("이메일을 입력해주세요.");
    }
  };

  const [code, setCode] = useState("");
  const [ok, setOk] = useState(false);

  const codeOnChangeHandler = useCallback((e) => {
    setCode(e.target.value);
  }, []);

  const inputCode = () => {
    const codeNumData = localStorage.getItem("codeNum");
    if (code == codeNumData) {
      alert("인증이 완료되었습니다.");
      setShow(false);
      setOk(true);
    } else {
      alert("인증번호가 틀렸습니다.");
    }
  };

  /* ChangeHandler */
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [email, setEmail] = useState("");

  const idOnChangeHandler = useCallback((e) => {
    setUserId(e.target.value);
  }, []);
  const pwOnChangeHandler = useCallback((e) => {
    setUserPw(e.target.value);
  }, []);
  const emailOnChangeHandler = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  /* info 저장 */
  const goSubmit = useCallback(() => {
    if (ok) {
      console.log("submit 후", ok);
      const obj = {
        id: userId,
        pw: userPw,
        email: email,
      };
      localStorage.setItem("userInfo", JSON.stringify(obj));
      alert("회원가입이 완료되었습니다.");
    }
  }, [userId, userPw, email, ok]);

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">회원가입</h2>
          <p className="text-gray-500 mb-6">회원가입 정보를 입력하세요</p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">아이디</label>
                    <input
                      type="text"
                      name="userId"
                      id="userId"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      onChange={idOnChangeHandler}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="full_name">비밀번호</label>
                    <input
                      type="text"
                      name="userPw"
                      id="userPw"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      onChange={pwOnChangeHandler}
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label htmlFor="email">이메일</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="email@domain.com"
                      onChange={emailOnChangeHandler}
                    />
                  </div>
                  <div className="inline-flex items-end">
                    <button
                      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                      onClick={goCertify}
                    >
                      이메일인증
                    </button>
                  </div>

                  {show ? (
                    <>
                      <div className="md:col-span-1">
                        <input
                          type="text"
                          name="code"
                          id="code"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          onChange={codeOnChangeHandler}
                        />
                      </div>
                      <div className="md:col-span-1">
                        {/* <input
                          type="text"
                          name="timer"
                          id="timer"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={<Timer limit={120} />}
                          readOnly
                        /> */}
                        {/* <div
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          style={{ paddingTop: "10px" }}
                        > */}
                        <Timer limit={120} onClose={goClose} />
                        {/* </div> */}
                      </div>
                      <div className="inline-flex items-end">
                        <button
                          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                          onClick={inputCode}
                        >
                          확인
                        </button>
                      </div>
                    </>
                  ) : null}

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={goSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://www.buymeacoffee.com/dgauderman"
          target="_blank"
          className="md:absolute bottom-0 right-0 p-4 float-right"
        >
          <img
            src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
            alt="Buy Me A Coffee"
            className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
          />
        </a>
      </div>
    </div>
  );
};
export default Signup;
