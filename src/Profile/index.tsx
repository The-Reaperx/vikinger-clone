import { useState } from "react";
import HeroCard from "./components/HeroCard";
import AboutMe from "./components/AboutMe";
import Slider from "./components/Slider";
import Modal from "../shared/components/Modal";
import Button from "../shared/components/Button";
import VideoFeed from "./components/VideoFeed";


const Profile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggle = () => setModalOpen(!modalOpen);
  return (
    <div className="profile">
      <HeroCard />
      <AboutMe />
      <Slider />
      <VideoFeed onClick={toggle} />

      <Modal onClick={toggle} state={modalOpen}></Modal>
    </div>
  );
};

export default Profile;
