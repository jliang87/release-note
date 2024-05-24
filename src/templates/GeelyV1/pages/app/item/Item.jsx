import React from "react";
import style from "./Item.module.css";
import contentData from "../../../data/content.json";
import { Link, Outlet, useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useRouteInfo } from '../../../../../providers/routeInfo';

function Item() {
  const { t, i18n } = useTranslation();
  const routeInfo = useRouteInfo(); 

  const params = useParams();
  const content = contentData.find((item) => item.id === params.id);

  return (
    <div className={style.item_container}>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <ul> 
            {content.chapters.map((chapter) => {
              return <div className={style.chapterId}><Link 
                to={{pathname: chapter.chapter, search: routeInfo.queryString}}>
                  {t(`${routeInfo.i18nKey}.${chapter.title}`, {ns: routeInfo.displayVersion})}</Link></div>
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
