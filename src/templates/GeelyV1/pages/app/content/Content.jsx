import React from 'react';
import style from './Content.module.css';
import Card from '../../../components/card';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useRouteInfo } from '../../../../../providers/routeInfo';
import useJsonData from '../../../../../hooks/useJsonData';
import { useLocation } from 'react-router-dom';
 
function Content(props) {
  const { t, i18n } = useTranslation();
  const routeInfo = useRouteInfo(); 
  const jsonData = useJsonData(`/i18n/${routeInfo.vehicleType}/${routeInfo.displayVersion}/data.json`);
  if (jsonData == null) return (<div />);

  return (
    <div className={style.content_container}>
      <div className={style.heading}>
        <h4>{t(`${routeInfo.i18nKey}.contentTitle`, {ns: routeInfo.displayVersion, version: routeInfo.realDisplayVersion})}</h4>
      </div>
      <div className={style.content}>
        {jsonData.map((content, index) => {
          return (
            <div key={index} className={style.card_container}>
              <Link to={{pathname: `${content.id}/1`, search: routeInfo.queryString}}>
                <Card
                  key={content.id}
                  id={content.id}
                  title={t(`${routeInfo.i18nKey}.${content.title}`, {ns: routeInfo.displayVersion})}
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
