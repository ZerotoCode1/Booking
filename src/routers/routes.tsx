import React, { lazy } from "react";

const authLayout = lazy(() => import("../layouts/AuthLayout"));
const SignIn = lazy(() => import("../pages/Auth/SignIn"));
const SignUp = lazy(() => import("../pages/Auth/SignUp"));
const homeLayout = lazy(() => import("../layouts/Homelayout"));

interface RouteType {
  name: string;
  path: string;
  isPraviteRouter: boolean;
  layout:
    | React.LazyExoticComponent<React.MemoExoticComponent<any>>
    | React.ExoticComponent<any>
    | typeof React.Component;
  routeChild: {
    name: string;
    path: string;
    component: typeof React.Component | React.FC;
    isPrivateRoute?: boolean;
  }[];
}

const routes: RouteType[] = [
  {
    name: "Auth",
    path: "/auth",
    isPraviteRouter: false,
    layout: authLayout,
    routeChild: [
      {
        name: "SignIn",
        path: "/sign-in",
        component: SignIn,
        isPrivateRoute: false,
      },
      {
        name: "SignUp",
        path: "/sign-up",
        component: SignUp,
        isPrivateRoute: false,
      },
    ],
  },
  {
    name: "Home",
    path: "/home",
    isPraviteRouter: true,
    layout: homeLayout,
    routeChild: [
      {
        name: "SlideBar",
        path: "/slidebar",
        component: lazy(() => import("../pages/Home/Slidebar")),
        isPrivateRoute: true,
      },
      {
        name: "Cart",
        path: "/cart",
        component: lazy(() => import("../pages/Home/Cart")),
        isPrivateRoute: true,
      },
    ],
  },
];
export default routes;
