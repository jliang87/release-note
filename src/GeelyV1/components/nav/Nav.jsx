import React, { useEffect, useState } from "react";
import style from "./Nav.module.css";
import { useTheme } from '../../context/Theme.context';
import { Outlet, useNavigate, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Nav(props) {
  const navigate  = useNavigate();
  const themeToggle = useTheme();
  const { t, i18n } = useTranslation();
  const location = useLocation(); 

  const queryParams = new URLSearchParams(location.search);
  const displayVersion = queryParams.get('displayVersion');
  const language = queryParams.get('language');
  const country = queryParams.get('country');
  const variant = queryParams.get('variant');

  const handleLogoClick = () => {
    navigate({pathname: "/" + location.pathname.slice(1).split("/")[0], search: location.search});
  }

  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper} onClick={handleLogoClick}>
            <img
              className={style.logo}
              src="https://zgh.com/wp-content/themes/zgh/public/img/logo.svg"
              alt="logo"
            />
          </div>
          <div className={style.nav_details}>
            <button onClick={() => themeToggle.toggleTheme()}>
             {/* <img
                alt='cart-icon'
                src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
                className={`${style.cart_icon} ${style.icon} `}
              />*/}
              {themeToggle.theme === 'dark-theme' ? t(`${language}.lightMode`) : t(`${language}.darkMode`)}
            </button>
              <NavLink to={{pathname: 'content', search: location.search}}> 
                {({isActive}) => (isActive ? <button>{t(`${language}.onContent`)}</button> 
                  : <button>{t(`${language}.content`)}</button>)}
              </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
