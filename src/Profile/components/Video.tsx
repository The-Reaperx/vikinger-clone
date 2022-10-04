import React from "react";
interface VideoProps {
  onClick: () => void;
  title: string;
  post_time: string;
  img: string;
}
const Video = ({ onClick, title, post_time, img }: VideoProps) => {
  return (
    <div>
      <div className="videos" onClick={onClick}>
        <div className="video-icon">
          <i className="bi bi-play-fill"></i>
        </div>
        <div className="video-cover">
          <div className="video-title">{title}</div>
          <div className="video-post-time">{post_time}</div>
          <div className="video-blackout"></div>
          <img src={img} width="240" height="130"></img>
        </div>
      </div>
    </div>
  );
};

export default Video;
