import React from 'react';
import style from './Hero.module.css';
import { useTranslation } from 'react-i18next';
import { useRouteInfo } from '../../../../providers/routeInfo';
import useBodyClass from "../../../../hooks/useBodyClass";

function Hero() {
  const { t, i18n } = useTranslation();
  const routeInfo = useRouteInfo(); 

  useBodyClass("contrastBackground");

  return (
    <header>
      <section className={style.image_wrapper}>
        <img
          className={style.image}
          src='/kv.pc1.jpg'
          alt='image'
        />
      </section>
      <section className={style.content}>
        <h4>{t(`${routeInfo.i18nKey}.subtitle`, {ns: routeInfo.displayVersion, version: routeInfo.realDisplayVersion})}</h4>
        <h1>{t(`${routeInfo.i18nKey}.title`, {ns: routeInfo.displayVersion})}</h1>
        <p>{t(`${routeInfo.i18nKey}.description`, {ns: routeInfo.displayVersion})}</p>
      </section>
    </header>
  );
}

export default Hero;
