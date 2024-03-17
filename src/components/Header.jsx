import { LOGO_URL } from "../utils/constants";

export default Header = () => {
    return (
      <div className="header">
        <div>
          <img className="header-logo" src={LOGO_URL}></img>
        </div>
        <ul className="nav">
          <li>Home</li>
          <li>Cart</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    );
  };