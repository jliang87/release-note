import React from "react";
import style from "./Item.module.css";
import { Link, Outlet, useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useRouteInfo } from '../../../../providers/routeInfo';
import useJsonData from '../../../../hooks/useJsonData';

function Item() {
  const { t, i18n } = useTranslation();
  const routeInfo = useRouteInfo(); 
  const params = useParams();
  const jsonData = useJsonData(`/i18n/${routeInfo.vehicleType}/${routeInfo.displayVersion}/data.json`);
  if (jsonData == null) return (<div />);

  const item = jsonData.find((item) => item.id === params.id);
  return (
    <div className={style.item_container}>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <ul> 
            {item.chapters.map((chapter, index) => {
              return <div key={index} className={style.chapterId}><Link 
                to={{pathname: chapter.chapterId, search: routeInfo.queryString}}>
                  {t(`${routeInfo.i18nKey}.${chapter.title}`, {ns: routeInfo.displayVersion})}</Link></div>
            })}
          </ul>
        </div>
        <div>
          <Outlet context={{...item}}/>
        </div>
      </div>
    </div>
  );
}

export default Item;
