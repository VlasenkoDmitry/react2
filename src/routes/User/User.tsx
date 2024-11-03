import './User.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserInfoInterface } from "../../Interfaces/UserInfoInterface";

export default function User() {
  const { userId } = useParams();

  async function getUserDataFromServer<Type>(url: string): Promise<Type> {
    const responce = await fetch(url);
    const jsonResponce: Type = await responce.json();
    return jsonResponce;
  }

  const [userInfo, setUserInfo] = useState<UserInfoInterface|null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const promise = await getUserDataFromServer<UserInfoInterface>(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUserInfo(promise);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const titleColumns = ["name", "email", "phone", "website"];

  return (
    <>
      <h1>Info</h1>
      <table className='table-block'>
        <thead>
          <tr>
            {titleColumns.map((title, titleIndex) => (
              <th key={titleIndex}>{title}</th>
            ))}
          </tr>
          <tr>
            <td>
              <input type="text" value={userInfo?.name} />
            </td>
            <td>
              <input type="text" value={userInfo?.email} />
            </td>
            <td>
              <input type="text" value={userInfo?.phone} />
            </td>
            <td>
              <input type="text" value={userInfo?.website} />
            </td>
          </tr>
        </thead>
      </table>
    </>
  );
}
