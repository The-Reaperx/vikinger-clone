import React from "react";
import Card from "../../shared/components/Card";
import Video from "./Video";
import Thumbnail1 from "../../shared/assets/thumbnail_1.jpg";
import Thumbnail2 from "../../shared/assets/thumbnail_2.jpg";
import Thumbnail3 from "../../shared/assets/thumbnail_3.jpg";
interface VideoFeedProps {
  onClick: () => void;
}
const VideoFeed = ({ onClick }: VideoFeedProps) => {
  return (
    <Card>
      <div className="color-strip"></div>
      <div className="feed-container">
        <div className="feed-title">Video Feed</div>
        <Video
          onClick={onClick}
          title="Dark Valley"
          post_time="52 sec ago"
          img={Thumbnail1}
        />
        <Video
          onClick={onClick}
          title="Hollow Knight"
          post_time="55 sec ago"
          img={Thumbnail2}
        />
        <Video
          onClick={onClick}
          title="Grass Exploration"
          post_time="58 sec ago"
          img={Thumbnail3}
        />
      </div>
    </Card>
  );
};

export default VideoFeed;
