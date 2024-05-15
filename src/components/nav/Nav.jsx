import React from "react";
import style from "./Nav.module.css";
import { useTheme } from '../../context/Theme.context';
import { Outlet, useNavigate, NavLink } from "react-router-dom";

function Nav(props) {

  const navigate  = useNavigate();
  const themeToggle = useTheme();

  const handleClick = () => {
    navigate("/courses");
  }

  const handleLogoClick = () => {
    navigate("/");
  }

  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper} onClick={handleLogoClick}>
            <img
              className={style.logo}
              src="https://files.codingninjas.in/pl-ninja-16706.svg"
              alt="logo"
            />
            <h4>Coding Ninjas</h4>
          </div>
          <div className={style.nav_details}>
            <button onClick={() => themeToggle.toggleTheme()}>
              {themeToggle.theme === 'dark-theme' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
            <button>
              <NavLink to="/courses"> 
                {({isActive}) => (isActive? "On Courses" : "Courses")}
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
