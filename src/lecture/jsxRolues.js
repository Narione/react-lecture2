const JsxRolues = () => {
  /* jsx문법 : js 확장 문법 (리액트에서 권장) 
    babel jxs문법으로 작성된 애들을 js코드화 시켜줌
  */
  //1. 하나의 부모태그로 감싸야 함(컴포넌트 -> 하나의 덩어리)
  //2. 스타일 구조가 걱정될 땐 <></>빈태그로 감싸기
  //3. 종료태그 반드시 장성
  //4. class -> className으로 사용(카멜식)
  //5. style 속성은 객체 형태{속성명: 속성값}로 작성
  //6. 모든 속성이 카멜표기법으로 작성되어야 함.
  //7. js변수를 대입해서 사용가능
  //**html 태그 내에 js 관련문법 작성시에는 {}
  //8. 조건문 -> 삼항 연산자(if문을 외부에서 사용하는건 가능)
  //9. 반복문-> map을 통해 반복문 활용
  const title = "제목이다";
  const sum = (arr) => {
    let total = 0;
    arr.map((v) => {
      total += v;
    });
    return total;
  };

  const confirm = true;

  const friends = ["짱구", "철수", "훈이", "맹구", "유리"];
  return (
    <>
      <h2>친구목록</h2>
      <ul>
        {/* map((요소, 인덱스)=>{})
          map 돌리면서 태그 생성 후에는 꼭 각 요소들에 key 속성 지정해줘야함 */}
        {friends.map((v, i) => {
          return <li key={`fr-${i}`}>{v}</li>;
        })}
      </ul>

      <h2>훈이빼기</h2>
      <ul>
        {friends.map((v, i) => {
          return v != "훈이" ? <li key={`fr-${i}`}>{v}</li> : null;
        })}
      </ul>

      <h2>훈이진짜 뺌</h2>
      {friends.map((v, i) => {
        if (v != "훈이") {
          return <li key={i}>{v}</li>;
        }
      })}
    </>
  );

  /*
  return (
    <>
      <h2>{title}</h2>
      <h3>{sum([1, 2, 3])}</h3>

      <p>{confirm ? "진짜" : "가짜"}</p>

      {confirm ? 
        <>
          <p>
            진짜<span>인뎅</span>
          </p>
        </> : null}

      <input type="checkbox" />
      <ul className="list" style={{ color: "red", backgroundColor: "yellow" }}>
        <li>목록1</li>
        <li>목록2</li>
      </ul>
      <ul>
        <li>목록3</li>
        <li>목록4</li>
      </ul>

      <label>
        이름
        <input type="text" />
      </label>

      <label htmlFor="usertel">전화번호</label>
      <input type="text" id="usertel" />
    </>
  );
  */
};
export default JsxRolues;
