import './Layout.css'
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";
import { menuData } from "../../menuData";

export default function Layout() {
  return (
    <main className="main-container grid-container">
      <div className="side-block-container">
        <Menu tabs={menuData} />
      </div>
      <div className="main-block-container">
        <div className="main-block">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
