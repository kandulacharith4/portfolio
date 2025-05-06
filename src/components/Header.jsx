import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <div className="site-title-container">
        <h1 className="site-title typing">Charith Kandula</h1>
      </div>
      <nav className="nav-links">
        <Link to="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/education" className={pathname === "/education" ? "active" : ""}>Education</Link>
        <Link to="/experience" className={pathname === "/experience" ? "active" : ""}>Experience</Link>
        <Link to="/skills" className={pathname === "/skills" ? "active" : ""}>Skills</Link>
        <Link to="/projects" className={pathname === "/projects" ? "active" : ""}>Projects</Link>
        <Link to="/certifications" className={pathname === "/certifications" ? "active" : ""}>Certifications</Link>
        <Link to="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;