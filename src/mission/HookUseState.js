import { useState } from "react";
import "../css/mission.css";

const HookUseState = () => {
  /* 할일 제목, 내용 입력받기
        입력 받은 제목, 내용을 목록 형태로 출력
    */

  const [todolist, setTodolist] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  /* 입력요소 핸들러 */
  const titleOnChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentOnChangeHandler = (e) => {
    setContent(e.target.value);
  };

  /* 할 일 저장 */
  const goAddList = () => {
    if (title == "" || content == "") {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    setTodolist([...todolist, { title: title, content: content }]);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <body className="todoBody">
        <p>
          <input
            type="text"
            placeholder="제목입력"
            onChange={titleOnChangeHandler}
            value={title}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="할일입력"
            onChange={contentOnChangeHandler}
            value={content}
            id="content"
          />
        </p>
        <p>
          <button onClick={goAddList}>ADD</button>
        </p>
        <strong>To Do List</strong>

        <ol className="todoOl">
          {todolist.map((v, i) => {
            return (
              <li className="todoLi" key={i}>
                <strong className="todoStrong">{v.title}</strong>
                <p>{v.content}</p>
              </li>
            );
          })}
        </ol>
      </body>
    </>
  );
};
export default HookUseState;
