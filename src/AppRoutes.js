import React from "react";

const HomePage = React.lazy(() => import("./pages/Home"));
const ContactPage = React.lazy(() => import("./pages/Contact"));
const AproposPage = React.lazy(() => import("./pages/Apropos"));
const Film = React.lazy(() => import("./pages/Film"));
const Serie = React.lazy(() => import("./pages/Serie"));

const AppRoutes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: HomePage,
  },
  {
    path: "/film",
    exact: true,
    name: "Film",
    component: Film,
  },
  {
    path: "/serie",
    exact: true,
    name: "Serie",
    component: Serie,
  },
  {
    path: "/contacts",
    exact: true,
    name: "Contacts",
    component: ContactPage,
  },
  {
    path: "/a-propos",
    exact: true,
    name: "A Propos",
    component: AproposPage,
  },
];

export default AppRoutes;
