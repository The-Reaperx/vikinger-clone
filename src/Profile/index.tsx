import { useState } from "react";
import HeroCard from "./components/HeroCard";
import AboutMe from "./components/AboutMe";
import Slider from "./components/Slider";
import Modal from "../shared/components/Modal";
import Button from "../shared/components/Button";

const Profile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggle = () => setModalOpen(!modalOpen);
  return (
    <div className="profile">
      <HeroCard />
      <AboutMe />
      <Slider />
      <Button text="Click me" onClick={toggle} />
      <Modal onClick={toggle} state={modalOpen}></Modal>
    </div>
  );
};

export default Profile;
