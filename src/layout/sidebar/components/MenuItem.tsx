import React from "react";
import { NavLink } from "react-router-dom";
interface MenuItemProps {
  iconName: string;
  title: string;
  href: string;
}
const MenuItem = ({ iconName, title, href }: MenuItemProps) => {
  return (
    <NavLink to={href}>
      <div className="menu-item-container">
        <i className={`bi bi-${iconName}`}></i>
        <div className="menu-item-tooltip">
          <span>{title}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default MenuItem;
