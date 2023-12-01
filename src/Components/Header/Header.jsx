import React from "react";
import '../../Style/base.css'
import './style.scss'
const Header = () => {
  return (
    <div>
      <nav className="container d-flex justify-content-between">
        <div className="logo fs-1">
          <a href="" >
            <span className="fa-brands fa-joomla " />
          </a>
        </div>
        <div className="pages d-flex justify-content-center align-items-center">
          <ul className="d-flex">
            <li>
              <a href="">Lich Chieu</a>
            </li>
            <li>
              <a href="">Cum Rap</a>
            </li>
            <li>
              <a href="">Tin Tuc</a>
            </li>
            <li>
              <a href="">Ung dung</a>
            </li>
          </ul>
        </div>
        <div className="user">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
