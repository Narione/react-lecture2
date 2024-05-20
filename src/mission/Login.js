import { useCallback, useState } from "react";

const Login = (props) => {
  const { onLogin } = props;

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idOnChangeHandler = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const pwOnChangeHandler = useCallback((e) => {
    setPw(e.target.value);
  }, []);

  const login = () => {
    const data = JSON.parse(localStorage.getItem("login"));

    if (id == "") {
      alert("아이디 입력하세요.");
      return;
    }
    if (pw == "") {
      alert("비밀번호 입력하세요");
      return;
    }

    if (id != data.id || pw != data.pw) {
      alert("로그인 실패입니다");
      return;
    } else {
      alert("로그인 성공입니다.");
    }

    onLogin({
      close: true,
      name: data.name,
    });
  };

  const goClose = () => {
    onLogin({ close: true, name: "" });
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Login Form with Floating Labels
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="id"
                    name="id"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="ID"
                    onChange={idOnChangeHandler}
                  />
                  <label
                    htmlFor="id"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    ID
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    onChange={pwOnChangeHandler}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <button
                    className="bg-blue-500 text-white rounded-md px-2 py-1"
                    onClick={login}
                  >
                    로그인하기
                  </button>
                  <button
                    className="bg-blue-500 text-white rounded-md px-2 py-1"
                    onClick={goClose}
                  >
                    로그인취소
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
