import { UserInfoInterface } from "../../Interfaces/UserInfoInterface";
import "./Table.css";
import { Link } from "react-router-dom";


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
              <tr key={userIndex + 1}>
                <td key={user.name}>{user.name}</td>
                <td key={user.email}>{user.email}</td>
                <td key={user.phone}>{user.phone}</td>
                <td key={user.website}>{user.website}</td>
                <td key={"status"} className="statusButton">
                  <Link to={`/user/${userIndex + 1}`}>{"view"}</Link>
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </>
  );
}
