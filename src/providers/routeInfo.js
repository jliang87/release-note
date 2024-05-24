import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteInfoContext = createContext();

const RouteInfoProvider = (props) => {
  const location = useLocation(); 

  const queryObject = new URLSearchParams(location.search);
  const displayVersion = queryObject.get('displayVersion');
  const language = queryObject.get('language');
  const country = queryObject.get('country');
  const variant = queryObject.get('variant');
  const realDisplayVersion = displayVersion.replace(/_/g, " ").replace(/-/g, ".");
  const queryString = location.search;
  const pathname = location.pathname;

  return (
    <RouteInfoContext.Provider value={{ queryObject, queryString, displayVersion, 
      language, country, variant, realDisplayVersion, pathname }}>
      {props.children}
    </RouteInfoContext.Provider>
  );
};

export const useRouteInfo = () => {
  const context = useContext(RouteInfoContext);
  if (context === undefined) {
    throw new Error('useRouteInfo must be used within a RouteInfoProvider');
  }
  return context;
}
export { RouteInfoProvider };
