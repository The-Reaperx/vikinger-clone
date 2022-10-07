import React from "react";
import Card from "../../shared/components/Card";
import UserStat from "./UserStat";
import UsaImg from "../../shared/assets/usa.png";
import SocialMedia from "./SocialMedia";
import Avatar from "../../shared/components/Avatar";
import Avatarsrc from "../../shared/assets/01.jpg";
import Button from "../../shared/components/Button";

const HeroCard = () => {
  return (
    <div className="hero">
      <Card>
        <div className="hero-container">
          <div className="hero-background"></div>
          <div className="hero-info">
            <div className="hero-info-left">
              <UserStat title="posts" text="930" />
              <UserStat title="friends" text="82" />
              <UserStat title="visits" text="3000" />
              <UserStat title="usa" titleImgSrc={UsaImg} text="50" />
            </div>
            <div className="hero-info-user">
              <h1>Marina Valentine</h1>
              <p>www.gaminghuntress.com</p>
              <div className="avatar">
                <Avatar imgSrc={Avatarsrc} progress={0.62} />
              </div>
            </div>

            <div className="hero-info-right">
              <SocialMedia icon="facebook" color="#4267B2" />
              <SocialMedia icon="telegram" color="#229ED9" />
              <SocialMedia icon="youtube" color="#fd434f" />
              <SocialMedia icon="twitch" color="#4267B2" />
              <SocialMedia icon="instagram" color="#f8468d" />
              <SocialMedia icon="twitter" color="#1abcff" />
              <SocialMedia icon="discord" color="#7289da" />
            </div>
            <div className="hero-buttons">
              <Button text="Add Friend" />
              <Button text="Message" color="secondary" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HeroCard;
