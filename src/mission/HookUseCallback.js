import { useCallback, useEffect, useRef, useState } from "react";
import "../css/form.css";

const HookUseCallback = () => {
  // useState
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwC, setPwC] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [pwYN, setPwYN] = useState(""); // set 보다는 초깃값 설정이 낫다.

  useEffect(() => {
    setPwYN("unconfirmed");
  }, []);

  // handler
  const idOnChangeHandler = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const pwOnChangeHandler = useCallback((e) => {
    setPw(e.target.value);
  }, []);
  const pwConOnChangeHandler = useCallback((e) => {
    setPwC(e.target.value);
  }, []);
  const phoneOnChangeHandler = useCallback((e) => {
    setPhone(e.target.value);
  }, []);
  const nameOnChangeHandler = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const birthOnChangeHandler = useCallback((e) => {
    setBirth(e.target.value);
  }, []);

  // 비밀번호 확인
  const confirmPw = () => {
    if (pw == "") {
      alert("비밀번호를 입력해주세요");
      return;
    }
    if (pwC == "") {
      alert("비밀번호 확인을 입력해주세요");
      return;
    }

    if (pw != pwC) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (pw === pwC) {
      alert("비밀번호가 일치합니다.");
      setPwYN("confirmed");
    }
  };

  /* 유효성 검사 */
  const userIdRef = useRef(null);
  const validationCheck = () => {
    if (id != "") {
      userIdRef.current.style.display = "none";
    } else {
      userIdRef.current.style.display = "";
      return false;
    }
    return true;
  };

  //회원정보 요청
  const submit = () => {
    if (validationCheck()) {
      if (pw != pwC) {
        setPwYN("unconfirmed");
        return;
      }
      if (pwYN != "confirmed") {
        alert("비밀번호확인을 먼저 진행해주세요");
        return;
      }

      alert("회원가입이 완료되었습니다.");
      const memObj = {
        id: id,
        password: pw,
        phone: phone,
        name: name,
        birth: birth,
      };
      console.log(memObj);
      return;
    }
  };

  return (
    <div translate="no">
      <div className="demo-page">
        <main className="demo-page-content">
          <section>
            <p>회원가입</p>
            <p>회원가입을 위한 정보를 입력해주세요</p>
            <div className="nice-form-group">
              <label>아이디</label>
              <input
                type="text"
                placeholder="Your id"
                onChange={idOnChangeHandler}
              />
            </div>
            <p ref={userIdRef} style={{ display: "none" }}>
              아이디를 입력하세요.
            </p>

            <div className="nice-form-group">
              <label>비밀번호</label>
              <input
                type="password"
                placeholder="Your password"
                onChange={pwOnChangeHandler}
              />
            </div>

            <div className="nice-form-group">
              <label>비밀번호 확인</label>
              <input
                type="password"
                placeholder="Your Pw Confirm"
                style={{ width: "400px" }}
                onChange={pwConOnChangeHandler}
              />
              <button onClick={confirmPw}>비밀번호 확인</button>
            </div>

            <div className="nice-form-group">
              <label>전화번호</label>
              <input
                type="tel"
                placeholder="Your phone"
                onChange={phoneOnChangeHandler}
              />
            </div>

            <div className="nice-form-group">
              <label>이름</label>
              <input
                type="text"
                placeholder="Your name"
                onChange={nameOnChangeHandler}
              />
            </div>

            <div className="nice-form-group">
              <label>생년월일</label>
              <input
                type="text"
                placeholder="YYYYMMDD"
                maxLength="8"
                onChange={birthOnChangeHandler}
              />
            </div>

            <button onClick={submit}>회원가입 요청</button>
          </section>
        </main>
      </div>
    </div>
  );
};
export default HookUseCallback;
