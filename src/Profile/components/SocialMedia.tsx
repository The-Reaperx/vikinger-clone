import React from "react";
interface SocialMediaProps {
  icon: string;
  color: string;
}
const SocialMedia = ({ icon, color }: SocialMediaProps) => {
  return (
    <div className="icon-container" style={{ background: color }}>
      <i className={`bi bi-${icon}`}></i>
    </div>
  );
};

export default SocialMedia;
