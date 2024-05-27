//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import  "./Index.css"
import "./i18next/i18next.js";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./routes/HomePage.jsx";
import InnerPage from "./routes/InnerPage.jsx";
import Testimonials from "./components/FullTestimonials/FullTestimonials.jsx";
import Team from "./components/FullTeam/FullTeam.jsx";
import Error from "./components/Error/Error.jsx";
import MemberLogin from "./components/MemberLogin/MemberLogin.jsx";
import UserLogin from "./components/UserLogin/UserLogin.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import GalleryDetails from "./components/GalleryDetails/GalleryDetails.jsx";
import FourDevs from "./components/4Devs/4Devs.jsx";
import Blog from "./components/Blog/Blog.jsx";
import BlogSingle from "./components/BlogSingle/BlogSingle.jsx";

const router = createBrowserRouter([
  {
    path: "/Tech-Museum/",
    element: <App />,
    children: [
      {
        path: "/Tech-Museum/",
        element: <Home />,
      },
      {
        path: "/Tech-Museum/blog",
        element: (
          <InnerPage
            pageName="blog.page_name"
            title="blog.title"
            content={<Blog />}
          />
        ),
      },
      {
        path: "/Tech-Museum/blog/single/:id",
        element: <BlogSingle />,
      },
      {
        path: "/Tech-Museum/testimonials",
        element: (
          <InnerPage
            pageName="testimonials_inner_page.page_name"
            title="testimonials_inner_page.title"
            content={<Testimonials />}
          />
        ),
      },
      {
        path: "/Tech-Museum/team",
        element: (
          <InnerPage
            pageName="team_inner_page.page_name"
            title="team_inner_page.title"
            content={<Team />}
          />
        ),
      },
      {
        path: "/Tech-Museum/member-login",
        element: <MemberLogin />,
      },
      {
        path: "/Tech-Museum/user-login",
        element: <UserLogin />,
      },
      {
        path: "/Tech-Museum/gallery",
        element: (
          <InnerPage
            pageName="gallery_inner_page.page_name"
            title="gallery_inner_page.title"
            content={<Gallery />}
          />
        ),
      },
      {
        path: "/Tech-Museum/gallery/details/:id",
        element: <GalleryDetails />,
      },
      {
        path: "/Tech-Museum/4devs",
        element: (
          <InnerPage
            pageName="4devs.page_name"
            title="4devs.title"
            content={<FourDevs />}
          />
        ),
      },
    ],
  },
  {
    path: "*",
    element: <App />,
    children: [
      {
        path: "*",
        element: (
          <InnerPage
            pageName="error_inner_page.page_name"
            title="error_inner_page.title"
            content={<Error />}
          />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
