import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import { useRouteInfo } from '../../providers/routeInfo';
import style from './BlankTemplate.module.css';
import useJsonData from '../../hooks/useJsonData';

function BlankTemplate() {
  const { t, i18n } = useTranslation();
  const routeInfo = useRouteInfo(); 
  const jsonData = useJsonData(`/i18n/${routeInfo.vehicleType}/${routeInfo.displayVersion}/data.json`);
  if (jsonData == null) return (<div />);

  return (
    <div className={style.blank_template_container}>
      <div className={style.heading}>
        <h1>{t(`${routeInfo.i18nKey}.title`, {ns: routeInfo.displayVersion, version: routeInfo.realDisplayVersion})}</h1>
        <h2>{t(`${routeInfo.i18nKey}.description`, {ns: routeInfo.displayVersion, version: routeInfo.realDisplayVersion})}</h2>
      </div>
      {jsonData.map((content) => {
          return (
            <article className={style.article}>
              <div className={style.article_heading}>
                {content.title && <h3>{t(`${routeInfo.i18nKey}.${content.title}`, {ns: routeInfo.displayVersion})}</h3>}
                {content.description && <h4>{t(`${routeInfo.i18nKey}.${content.description}`, {ns: routeInfo.displayVersion})}</h4>}
              </div>

              <ul className={style.article_bullets}>
                {content.bullets.map((bullet) => {
                  return (
                    <section>
                      {bullet.detail && <li className={style.article_bullet}>{t(`${routeInfo.i18nKey}.${bullet.detail}`, {ns: routeInfo.displayVersion})}</li>}
                      {bullet.imgs && bullet.imgs.map((img) => {
                        return <img className={style.article_imgs} src={img} />
                      })}
                      {bullet.videos && bullet.videos.map((video) => {
                        return (
                             <iframe
                              className={style.article_videos} 
                              width="800"
                              height="560"
                              src={video}
                              title="React Video"
                              frameBorder="1"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          );
                      })}
                    </section>
                  );
                })}
              </ul>
            </article>
          );
      })}
    </div>
  );
}

export default BlankTemplate;
