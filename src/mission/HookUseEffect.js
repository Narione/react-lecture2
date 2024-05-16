import { useEffect, useState } from "react";
import "../css/mission.css";

const HookUseEffect = () => {
  const menuList = [
    { type: "admin", menu: "관리자메뉴1" },
    { type: "user", menu: "사용자메뉴1" },
    { type: "admin", menu: "관리자메뉴2" },
    { type: "user", menu: "사용자메뉴2" },
    { type: "admin", menu: "관리자메뉴3" },
  ];

  /* 타입 별 분리 */
  useEffect(() => {
    getMenu();
    setUsermode(true);
  }, []);

  const [usermode, setUsermode] = useState(null);
  const [list, setList] = useState([]);
  const [adminList, setAdminList] = useState([]);
  const [userList, setUserList] = useState([]);

  const getMenu = () => {
    const list1 = menuList.filter((item) => {
      return item.type == "admin";
    });
    setAdminList(list1);

    const list2 = menuList.filter((item) => {
      return item.type == "user";
    });
    setUserList(list2);
  };

  const changeMode = () => {
    setUsermode(!usermode);
  };

  useEffect(() => {
    setList(usermode ? userList : adminList);
  }, [usermode]);

  return (
    <>
      <body className="menuListBody">
        <div className="center">
          <button className="fancy" onClick={changeMode}>
            <span className="top-key"></span>
            <a>{usermode ? "user" : "admin"} mode</a>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </div>

        <ul className="shadow-button-set">
          {list.map((v, i) => {
            return (
              <li key={i}>
                <button>{v.menu}</button>
              </li>
            );
          })}
        </ul>
      </body>
    </>
  );
};
export default HookUseEffect;
