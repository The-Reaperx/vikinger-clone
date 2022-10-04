import React from "react";
import Card from "../../shared/components/Card";
import AboutMeInfo from "./AboutMeInfo";
interface AboutMeProps {
  paragraph?: string;
}
const AboutMe = ({ paragraph }: AboutMeProps) => {
  return (
    <div className="aboutme">
      <Card>
        <div className="aboutme-container">
          <div className="color-strip"></div>
          <div className="aboutme-title">About Me</div>
          <div className="aboutme-info">
            <div className="aboutme-paragraph">
              Hey there, I'm Marina Valentine. Hear to provide you with pain and
              suffering.
            </div>
            <AboutMeInfo title="Joined" text="25th December" />
            <AboutMeInfo title="City" text="London" />
            <AboutMeInfo title="Country" text="United Kingdom" />
            <AboutMeInfo title="Age" text="25" />
            <AboutMeInfo title="Web" text="www.nogaming.com" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AboutMe;
