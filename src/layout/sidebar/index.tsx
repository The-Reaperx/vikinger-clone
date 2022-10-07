import React from "react";
import Avatar from "../../shared/components/Avatar";
import Avatarsrc from "../../shared/assets/01.jpg";
import MenuItem from "./components/MenuItem";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar-minimised">
      <Link to="/vikinger-clone">
        <Avatar imgSrc={Avatarsrc} progress={0.62} />
      </Link>
      <div className="sidebar-menu">
        <MenuItem iconName="tv" title="Newsfeed" href="newsfeed" />
        <MenuItem iconName="bar-chart" title="Overview" href="overview" />
        <MenuItem iconName="people" title="Groups" href="groups" />
        <MenuItem iconName="person" title="Members" href="members" />
        <MenuItem iconName="trophy" title="Badges" href="badges" />
        <MenuItem iconName="star" title="Quests" href="quests" />
        <MenuItem iconName="play-btn" title="Streams" href="streams" />
      </div>
    </div>
  );
};

export default Sidebar;
