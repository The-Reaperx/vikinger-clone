import React from "react";

interface UserStatProps {
  title: string;
  titleImgSrc?: string;
  text: string;
}
const UserStat = ({ title, titleImgSrc, text }: UserStatProps) => {
  return (
    <div className="user-stat">
      {titleImgSrc ? (
        <img src={titleImgSrc} alt={title} />
      ) : (
        <p className="user-stat-text">{text}</p>
      )}

      <p className="user-stat-title">{title}</p>
    </div>
  );
};

export default UserStat;
