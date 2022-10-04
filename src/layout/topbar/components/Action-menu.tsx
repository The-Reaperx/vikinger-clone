import React from "react";
import ActionItem from "./Action-item";
const Actionmenu = () => {
  return (
    <div className="actions-menu-container">
      <div className="action-menu-group">
        <ActionItem iconName="bag" />
        <ActionItem iconName="emoji-smile" />
        <ActionItem iconName="chat" />
        <ActionItem iconName="bell" />
      </div>
      <div className="settings">
        <ActionItem iconName="gear" />
      </div>
    </div>
  );
};

export default Actionmenu;
