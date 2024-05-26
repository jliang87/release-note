import React from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import BlankTemplate from "./templates/BlankTemplate/BlankTemplate";
import Hero from "./templates/GeelyV1/pages/hero/Hero";
import Nav from "./templates/GeelyV1/components/nav/Nav";
import Content from "./templates/GeelyV1/pages/content/Content";
import Item from "./templates/GeelyV1/pages/item/Item";
import Chapter from "./templates/GeelyV1/pages/chapter/Chapter";

import { ThemeProvider } from './providers/theme';
import { RouteInfoProvider } from './providers/routeInfo';
import i18next from './i18n';

function App() {
  const BrowserRouter = createBrowserRouter([
    {path: "/GeelyV1", element: <ThemeProvider templateClass="GeelyV1"><RouteInfoProvider><Nav /></RouteInfoProvider></ThemeProvider>, children: [
      {path: "/GeelyV1", element: <Hero />},
      {path: "/GeelyV1/content", children: [
        {index: true, element: <Content />},
        {path: ":id", element: <Item />, children: [
          {path: ":chapterId", element: <Chapter />}
        ]}
      ]},
    ]},
    {path: "/common", element: <RouteInfoProvider><BlankTemplate /></RouteInfoProvider>},
  ])

  return (
    <div className="App">
      <RouterProvider router={BrowserRouter} />
    </div>
  );
}

export default App;
