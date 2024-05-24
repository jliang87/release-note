import React from "react";
import styles from "./Chapter.module.css";
import style from "../item/Item.module.css";
import { useParams,  useOutletContext, Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Chapter() {
  const { t, i18n } = useTranslation();
  const location = useLocation(); 

  const queryParams = new URLSearchParams(location.search);
  const displayVersion = queryParams.get('displayVersion');
  const language = queryParams.get('language');
  const country = queryParams.get('country');
  const variant = queryParams.get('variant');
  const realDisplayVersion = displayVersion.replace(/_/g, " ").replace(/-/g, ".");

  const {chapterId} = useParams();
  const item = useOutletContext();
  const chapter = item.chapters.find((item) => item.chapter === chapterId);

  return (
    <div className={style.items} >
      <h1>{t(`${language}.${chapter.title}`, {ns: displayVersion})}</h1>
      <h2>{t(`${language}.${chapter.description}`, {ns: displayVersion})}</h2>
      <p className={styles.para}>{t(`${language}.${chapter.details}`, {ns: displayVersion})}</p>
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
