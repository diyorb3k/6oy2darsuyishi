import "./Header.scss";
import logo from "./img/saytheaderlogo.svg";

const Header = () => {
  return (
    <div className="container">
      <nav>
        <div className="sayt_logo">
          <img src={logo} alt="" />

          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>

            <li>
              <a href=""> Contact</a>
            </li>
          </ul>
        </div>
        <div className="header_right">
          <p>Cart (0)</p>
          <button>Get a free quote</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
