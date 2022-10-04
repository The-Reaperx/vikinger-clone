import React, { FC } from "react";
interface ActionItemProps {
  iconName: string;
}

const ActionItem = ({ iconName }: ActionItemProps) => {
  return (
    <div className="action-item">
      <i className={`bi bi-${iconName}`}></i>
    </div>
  );
};

export default ActionItem;
