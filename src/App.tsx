import "./App.css";
import Menu from "./Menu/Menu";
import Table from "./Table/Table";
import { menuData } from "./menuData";
import { useState, useEffect } from "react";

import { UserInfoInterface } from "./Interfaces/UserInfoInterface";

function App() {
  const [userInfo, setUserInfo] = useState<UserInfoInterface[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const responce = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonResponce: UserInfoInterface[] = await responce.json();
        setUserInfo(jsonResponce);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <main className="main-container grid-container">
        <div className="side-block-container">
          <Menu tabs={menuData} />
        </div>
        <div className="main-block-container">
          <div className="main-block">
            <h3>Hello Evano 👋🏼,</h3>
            <Table usersInfo={userInfo} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
