import React, { useEffect, useState } from "react";
import style from "./Nav.module.css";
import { useTheme } from '../../../../providers/theme';
import { useRouteInfo } from '../../../../providers/routeInfo';
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../../index.css";

function Nav(props) {
  const navigate  = useNavigate();
  const themeToggle = useTheme();
  const { t, i18n } = useTranslation();
  const routeInfo = useRouteInfo(); 

  const handleLogoClick = () => {
    navigate({pathname: "/" + routeInfo.pathname.slice(1).split("/")[0], search: routeInfo.queryString});
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
              {themeToggle.theme === 'dark-theme' ? t(`${routeInfo.language}.lightMode`) : t(`${routeInfo.language}.darkMode`)}
            </button>
              <NavLink to={{pathname: 'content', search: routeInfo.queryString}}> 
                {({isActive}) => (isActive ? <button>{t(`${routeInfo.language}.onContent`)}</button> 
                  : <button>{t(`${routeInfo.language}.content`)}</button>)}
              </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
