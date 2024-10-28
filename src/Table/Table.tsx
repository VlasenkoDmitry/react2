import { UserInfoInterface } from "../Interfaces/UserInfoInterface";
import "./Table.css";

interface MenuProps {
  usersInfo: UserInfoInterface[];
}

export default function Table({ usersInfo }: MenuProps) {
  if (usersInfo.length === 0) {
    return <p>No data available.</p>;
  }

  const titleColumns = ["name", "email", "phone", "website", "status"];

  return (
    <>
      <div className="table-block">
        <h3>
          <strong>All Customers</strong>
        </h3>
        <table>
          <thead>
            <tr>
              {titleColumns.map((title, titleIndex) => (
                <th key={titleIndex}>{title}</th>
              ))}
            </tr>
            {usersInfo?.map((user, userIndex) => (
              <tr key={userIndex}>
                <td key={user.name}>{user.name}</td>
                <td key={user.email}>{user.email}</td>
                <td key={user.phone}>{user.phone}</td>
                <td key={user.website}>{user.website}</td>
                <td key={"status"} className="statusButton">
                  {"view"}
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </>
  );
}
