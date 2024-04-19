import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import MainLayout from "./Layout/MainLayout.jsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   // element: <div>Hello world!</div>,
  //   element: <Home></Home>,
  // },
  // {
  //   path: "/blogs",
  //   element: <Blogs></Blogs>,
  // },
  // {
  //   path: "/bookmarks",
  //   element: <Bookmarks></Bookmarks>,
  // },

  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch(`https://dev.to/api/articles?per_page=10`),
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
