import "./style.css";
import logo from "../../assets/lego.png";
export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} />
        </div>
        <div className="navbar-menu">
          <p>Home</p>
          <p>About</p>
          <p>Movies</p>
          <p>contact us</p>
        </div>
      </div>
    </div>
  );
};
