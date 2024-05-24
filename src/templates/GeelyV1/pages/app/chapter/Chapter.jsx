import React from "react";
import styles from "./Chapter.module.css";
import style from "../item/Item.module.css";
import { useParams,  useOutletContext, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useRouteInfo } from '../../../../../providers/routeInfo';

function Chapter() {
  const { t, i18n } = useTranslation();
  const routeInfo = useRouteInfo(); 

  const {chapterId} = useParams();
  const item = useOutletContext();
  const chapter = item.chapters.find((item) => item.chapter === chapterId);

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
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
