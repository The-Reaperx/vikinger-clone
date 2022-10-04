import React from "react";
interface AboutMeInfoProps {
  title: string;
  text: string;
}
const AboutMeInfo = ({ title, text }: AboutMeInfoProps) => {
  return (
    <div className="aboutme-info-line">
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
};

export default AboutMeInfo;
