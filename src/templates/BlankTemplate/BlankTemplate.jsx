import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import { useRouteInfo } from '../../providers/routeInfo';

function BlankTemplate() {
  const { t, i18n } = useTranslation();
  const location = useLocation(); 
  const routeInfo = useRouteInfo(); 

  return (
    <header>
      <section>
        <h4>{t(`${routeInfo.i18nKey}.subtitle`, {ns: routeInfo.displayVersion, version: routeInfo.realDisplayVersion})}</h4>
        <h1>{t(`${routeInfo.i18nKey}.title`, {ns: routeInfo.displayVersion})}</h1>
        <p>{t(`${routeInfo.i18nKey}.description`, {ns: routeInfo.displayVersion})}</p>
      </section>
    </header>
  );
}

export default BlankTemplate;
