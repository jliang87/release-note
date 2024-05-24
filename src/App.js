import Hero from "./GeelyV1/pages/app/hero/Hero";
import Nav from "./GeelyV1/components/nav/Nav";
import Content from "./GeelyV1/pages/app/content/Content";
import Item from "./GeelyV1/pages/app/item/Item";
import Chapter from "./GeelyV1/pages/app/chapter/Chapter";
import { ThemeProvider } from './GeelyV1/context/Theme.context';
import React, { useState, useEffect, Suspense } from 'react';
import {BrowserRouter as browserRouter, RouterProvider, createBrowserRouter} from 'react-router-dom';
import i18next from './i18n';

function App() {
  const BrowserRouter = createBrowserRouter([
    {path: "/GeelyV1", element: <ThemeProvider><Nav /></ThemeProvider>, children: [
      {path: "/GeelyV1", element: <Hero />},
      {path: "/GeelyV1/content", children: [
        {index: true, element: <Content />},
        {path: ":id", element: <Item />, children: [
          {path: ":chapterId", element: <Chapter />}
        ]}
      ]},
    ]}
  ])
  
  return (
    <div className="App">
      <RouterProvider router={BrowserRouter} />
    </div>
  );
}

export default App;
