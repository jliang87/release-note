import React from "react";
import style from "./Item.module.css";
import contentData from "../../../data/content.json";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Item() {
  const { t, i18n } = useTranslation();
  const location = useLocation(); 

  const queryParams = new URLSearchParams(location.search);
  const displayVersion = queryParams.get('displayVersion');
  const language = queryParams.get('language');
  const country = queryParams.get('country');
  const variant = queryParams.get('variant');
  const realDisplayVersion = displayVersion.replace(/_/g, " ").replace(/-/g, ".");

  const params = useParams();
  const content = contentData.find((item) => item.id === params.id);

  return (
    <div className={style.item_container}>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <ul> 
            {content.chapters.map((chapter) => {
              return <div className={style.chapterId}><Link 
                to={{pathname: chapter.chapter, search: location.search}}>
                  {t(`${language}.${chapter.title}`, {ns: displayVersion})}</Link></div>
            })}
          </ul>
        </div>
      <div>
        <Outlet context={{...content}}/>
      </div>
    </div>
</div>
  );
}

export default Item;
