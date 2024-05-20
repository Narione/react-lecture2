const PropsChild = (props) => {
  console.log(props);

  /* 부모 컴포넌트에서 넘어온 값에 대해서 초기설정 또는 오류처리 잘하기 
    논리 연산자들 활용해서 오류처리
    옵셔널 체이닝: 오류처리
  */
  const { username, userid, friends, info } = props;

  const obj = { name: "신짱구", info: { age: 5, friends: [1, 2] } };
  const text = obj.info?.age2?.age || "123";
  console.log(obj.info?.age2?.age);

  // const userFriends = friends || [];  // 오류처리 방법, 논리연산자
  return (
    <div style={{ width: "200px", height: "200px", border: "1px solid" }}>
      <p>옵셔널체이닝: {obj.info?.age2?.age}</p>
      <p>
        사용자이름/나이: {username} {info.age}
      </p>
      <p>사용자아이디: {userid} </p>
      <p>
        친구목록:
        {/* map을 돌리기 전에 해당 값이 배열로 들어올 것이라는 확신이 없을 때
        꼭 논리 연산자로 오류 방지 */}
        {friends &&
          friends.map((v, i) => {
            return <span key={i}>{v}</span>;
          })}
      </p>
    </div>
  );
};

export default PropsChild;
