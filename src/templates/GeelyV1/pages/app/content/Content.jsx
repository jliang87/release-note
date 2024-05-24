import React from 'react';
import style from './Content.module.css';
import Card from '../../../components/card';
import contentData from '../../../data/content.json';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useRouteInfo } from '../../../../../providers/routeInfo';
 
function Content(props) {
  const { t, i18n } = useTranslation();
  const routeInfo = useRouteInfo(); 

  return (
    <div className={style.content_container}>
      <div className={style.heading}>
        <h4>{t(`${routeInfo.language}.contentTitle`, {ns: routeInfo.displayVersion, version: routeInfo.realDisplayVersion})}</h4>
      </div>
      <div className={style.content}>
        {contentData.map((content, index) => {
          return (
            <div key={index} className={style.card_container}>
              <Link to={{pathname: `${content.id}/1`, search: routeInfo.queryString}}>
                <Card
                  key={content.id}
                  id={content.id}
                  title={t(`${routeInfo.language}.${content.title}`, {ns: routeInfo.displayVersion})}
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
