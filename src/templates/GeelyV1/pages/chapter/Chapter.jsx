import React from "react";
import styles from "./Chapter.module.css";
import style from "../item/Item.module.css";
import { useParams,  useOutletContext, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useRouteInfo } from '../../../../providers/routeInfo';

function Chapter() {
  const { t, i18n } = useTranslation();
  const routeInfo = useRouteInfo(); 

  const {chapterId} = useParams();
  const item = useOutletContext();
  const chapter = item.chapters.find((chapter) => chapter.chapterId === chapterId);

  return (
    <div className={style.items} >
      <h1>{t(`${routeInfo.i18nKey}.${chapter.title}`, {ns: routeInfo.displayVersion})}</h1>
      <h2>{t(`${routeInfo.i18nKey}.${chapter.description}`, {ns: routeInfo.displayVersion})}</h2>
      <p className={styles.para}>{t(`${routeInfo.i18nKey}.${chapter.details}`, {ns: routeInfo.displayVersion})}</p>
      <br />
      <div className={styles.videos}>
        <iframe
          width="800"
          height="560"
          src={chapter.video}
          title="React Video"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
