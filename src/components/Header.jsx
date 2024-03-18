import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default Header = () => {
    return (
      <div className="header">
        <div>
          <img className="header-logo" src={LOGO_URL}></img>
        </div>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    );
  };