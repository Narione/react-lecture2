const JsxRolues = () => {
  const qnaList = [
    { question: "Q1. 이름은?", answer: "A1. 신짱구" },
    { question: "Q2. 몇살임?", answer: "A2. 5살" },
    { question: "Q3. 어디유치원?", answer: "A3. 떡잎유치원" },
    { question: "Q4. 강아지는?", answer: "A4. 흰둥이" },
  ];

  const fruits = [
    { fruit: "사과", price: 1000 },
    { fruit: "바나나", price: 2000 },
    { fruit: "딸기", price: 3000 },
    { fruit: "복숭아", price: 4000 },
    { fruit: "오렌지", price: 5000 },
  ];

  return (
    <>
      <div style={{ textAlign: "left", marginLeft: "10px" }}>
        <h3 style={{ backgroundColor: "pink" }}>모든 qna 목록</h3>
        {/*<태그> {객체 자체를 집어 넣으면 오류남}</태그>*/}
        {qnaList.map((v, i) => {
          return (
            <p key={`qna-${i}`}>
              <span style={{ fontWeight: "bold" }}>{v.question}</span>
              <br />
              <span>{v.answer}</span>
            </p>
          );
        })}
        <h3 style={{ backgroundColor: "pink" }}>Q4제외한 qna 목록</h3>

        {qnaList.map((v, i) => {
          if (i != 3) {
            return (
              <p key={`qna2-${i}`}>
                <span style={{ fontWeight: "bold" }}>{v.question}</span>
                <br />
                <span>{v.answer}</span>
              </p>
            );
          }
        })}

        <h3 style={{ backgroundColor: "pink" }}>과일 리스트</h3>
        {fruits.map((v, i) => {
          return (
            <p key={`fr-${i}`}>
              <img src={`/images/fr${i + 1}.jpg`} />
              <br />
              <span>
                {v.fruit}의 가격: {v.price}원
              </span>
            </p>
          );
        })}
      </div>
    </>
  );

  // 1. 모든 qna 목록 출력
  // 2. Q4 제외한 QnA 목록
  // 3. 과일의 이름: 가격+이미지 모두 출력
};
export default JsxRolues;
