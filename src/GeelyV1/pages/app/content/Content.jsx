import React from 'react';
import style from './Content.module.css';
import Card from '../../../components/card';
import contentData from '../../../data/content.json';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
 
function Content(props) {
  const { t, i18n } = useTranslation();
  const location = useLocation(); 

  const queryParams = new URLSearchParams(location.search);
  const displayVersion = queryParams.get('displayVersion');
  const language = queryParams.get('language');
  const country = queryParams.get('country');
  const variant = queryParams.get('variant');
  const realDisplayVersion = displayVersion.replace(/_/g, " ").replace(/-/g, ".");

  return (
    <div className={style.content_container}>
      <div className={style.heading}>
        {/*<h1>{t(`${language}.contentTitle`, {ns: displayVersion})}</h1>*/}
        <h4>{t(`${language}.contentSubtitle`, {ns: displayVersion, version: realDisplayVersion})}</h4>
      </div>
      <div className={style.content}>
        {contentData.map((content, index) => {
          return (
            <div key={index} className={style.card_container}>
              <Link to={{pathname: `${content.id}/1`, search: location.search}}>
                <Card
                  key={content.id}
                  id={content.id}
                  title={t(`${language}.${content.title}`, {ns: displayVersion})}
                  img={content.img}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
