import { ReactComponent as LogoSvg } from "../../../shared/assets/logo.svg";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/vikinger-clone" style={{textDecoration: 'none'}}>
    <div className="logo-container">
      <div className="logo-image-container">
        <LogoSvg />
      </div>
      <h1 className="logo-text">VIKINGER</h1>
    </div>
    </Link>
  );
};

export default Logo;
