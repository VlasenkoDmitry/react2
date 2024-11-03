import Table from "../../components/Table/Table";
import { useState, useEffect } from "react";
import { UserInfoInterface } from "../../Interfaces/UserInfoInterface";

export default function Users() {
  async function getDataFromServer<Type>(url: string): Promise<Type[]> {
    const responce = await fetch(url);
    const jsonResponce: Type[] = await responce.json();
    return jsonResponce;
  }

  const [usersInfo, setUserInfo] = useState<UserInfoInterface[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const promise = await getDataFromServer<UserInfoInterface>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUserInfo(promise);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <h3>Hello Evano 👋🏼,</h3>
      <Table usersInfo={usersInfo} />
    </>
  );
}
