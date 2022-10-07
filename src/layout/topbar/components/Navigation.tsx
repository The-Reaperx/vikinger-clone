import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-buttons">
        <li>
        <Link to="/vikinger-clone">
          Home 
        </Link>
        </li>
        <li>
          <a href="">Careers </a>
        </li>
        <li>
          <a href="">Faqs</a>
        </li>
        <li>
          <button>
            <i className="bi bi-three-dots"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
