import "./Menu.css";
import { MenuPointInterface } from "../../Interfaces/MenuInterface";
import { Link, NavLink } from "react-router-dom";


interface MenuProps {
  tabs: MenuPointInterface[];
}

export default function Menu({ tabs }: MenuProps) {
  return (
    <>
      <div className="custom-menu">
        <NavLink key={tabs[0].item} to="dashboard">
          <h3>{tabs[0].item}</h3>
        </NavLink>
          <NavLink key={tabs[1].item} to="posts">
        <h3>{tabs[1].item}</h3>
        </NavLink>
          <NavLink key={tabs[2].item} to="users">
        <h3>{tabs[2].item}</h3>
        </NavLink>
      </div>
    </>
  );
}
