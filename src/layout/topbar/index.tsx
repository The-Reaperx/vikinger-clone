import Logo from "./components/Logo";
import Searchbar from "./components/Searchbar";
import Experience from "./components/Experience-indicator";
import Navigation from "./components/Navigation";
import Actionmenu from "./components/Action-menu";
import ActionItem from "./components/Action-item";
import Sidebar from "./components/Sidebar";
const Topbar = () => {
  return (
    <header className="topbar">
      <Logo />

      <Sidebar />

      <Navigation />

      <Searchbar />

      <Experience />

      <Actionmenu />
    </header>
  );
};

export default Topbar;
