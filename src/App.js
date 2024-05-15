import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import React, { useState, useEffect } from 'react';
import {BrowserRouter as browserRouter, RouterProvider, createBrowserRouter, Router, Route, Routes, useLocation} from 'react-router-dom';
import Details from './pages/app/details/Details';
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";
import { ThemeProvider } from './context/Theme.context';

function App() {
  const BrowserRouter = createBrowserRouter([
    {path: "/", element: <ThemeProvider><Nav /></ThemeProvider>, children: [
      {path: "/", element: <Hero />},
      {path: "/courses", children: [
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
