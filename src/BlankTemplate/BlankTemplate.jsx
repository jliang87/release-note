import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";

function Blank() {
  const { t, i18n } = useTranslation();
  const location = useLocation(); 

  const queryParams = new URLSearchParams(location.search);
  const displayVersion = queryParams.get('displayVersion');
  const language = queryParams.get('language');
  const country = queryParams.get('country');
  const variant = queryParams.get('variant');
  const realDisplayVersion = displayVersion.replace(/_/g, " ").replace(/-/g, ".");

  return (
    <header>
      <section>
        <h4>{t(`${language}.subtitle`, {ns: displayVersion, version: realDisplayVersion})}</h4>
        <h1>{t(`${language}.title`, {ns: displayVersion})}</h1>
        <p>{t(`${language}.description`, {ns: displayVersion})}</p>
      </section>
    </header>
  );
}

export default Blank;
