import { ReactComponent as LogoSvg } from "../../../shared/assets/logo.svg";

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-image-container">
        <LogoSvg />
      </div>
      <h1>VIKINGER</h1>
    </div>
  );
};

export default Logo;
