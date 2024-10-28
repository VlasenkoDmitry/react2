import "./Menu.css";
import { MenuPointInterface } from "./../Interfaces/MenuInterface";

interface MenuProps {
  tabs: MenuPointInterface[];
}

export default function Menu({ tabs }: MenuProps) {
  return (
    <>
      <div className="custom-menu">
        {tabs.map((tab) => (
          <a key={tab.item}>
            <h3>{tab.item}</h3>
            {tab.getIcon()}
          </a>
        ))}
      </div>
    </>
  );
}
