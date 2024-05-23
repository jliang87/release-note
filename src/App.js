import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import React, { useState, useEffect, Suspense } from 'react';
import {BrowserRouter as browserRouter, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Details from './pages/app/details/Details';
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";
import { ThemeProvider } from './context/Theme.context';
// import { useTranslation, I18nextProvider } from 'react-i18next';
import i18next from './i18n';

function App() {
  const BrowserRouter = createBrowserRouter([
    {path: "/Geely", element: <ThemeProvider><Nav /></ThemeProvider>, children: [
      {path: "/Geely", element: <Hero />},
      {path: "/Geely/content", children: [
        {index: true, element: <Courses />},
        {path: ":id", children: [
          {index: true, element: <Details />},
          {path: "learn", element: <Learn />, children: [
            {path: ":chapterId", element: <Chapter />}
          ]}
        ]},
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
