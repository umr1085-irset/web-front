/*!

=========================================================
* SciLicium Platform v0.0.1
=========================================================

* Copyright 2021 SciLicium (https://www.scilicium.com)

* Coded by SciLicium
* Author: Thomas Darde

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import ResetPassword from "../views/ResetPassword"
import ForgotPassword from "../views/ForgotPassword"
import ActivationPage from "../views/ActivationPage"
import ProfilePage from '../views/Profile/ProfilePage'
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Home from "../views/Home";
import Signup from "../views/Signup";
import DatasetPage from '../views/Datasets/Datasets'
import AboutPage from '../views/About'
import DataPage from '../views/Data'

import AboutContent from "../contents/rgv/about.md"
import InstitutionContent from "../contents/rgv/institutions.md"
import RessourcesContent from "../contents/rgv/ressources.md"


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/rgv",
    requireAuth: true,
  },
  {
    path: "/login",
    name: "Login",
    icon: "tim-icons icon-atom",
    component: Login,
    layout: "/rgv",
    requireAuth: false,
  },
  {
    path: "/signup",
    name: "Register",
    icon: "tim-icons icon-bell-55",
    component: Signup,
    layout: "/rgv",
    requireAuth: false,
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: ProfilePage,
    layout: "/rgv",
    requireAuth: true,
  },
  {
    path: "/forgot",
    name: "Forgot password",
    icon: "tim-icons icon-single-02",
    component: ForgotPassword,
    layout: "/rgv",
    requireAuth: false,
  },
  {
    path: "/about",
    name: "About",
    icon: "tim-icons icon-single-02",
    content: AboutContent,
    component: AboutPage,
    layout: "/rgv",
    requireAuth: false,
  },
  {
    path: "/activate/:uid/:token",
    name: "Activate account",
    icon: "tim-icons icon-single-02",
    component: ActivationPage,
    layout: "/rgv",
    requireAuth: false,
  },
  {
    path: "/reset_password/:uid/:token",
    name: "Reset password",
    icon: "tim-icons icon-single-02",
    component: ResetPassword,
    layout: "/rgv",
    requireAuth: false,
  },
  {
    path: "/home",
    name: "Home",
    icon: "tim-icons icon-single-02",
    component: Home,
    layout: "/rgv",
    requireAuth: false,
  },
  {
    path: "/datasets",
    name: "Datasets",
    icon: "tim-icons icon-single-02",
    component: DatasetPage,
    layout: "/rgv",
    requireAuth: true,
  },
  {
    path: "/institutions",
    name: "Institution and founders",
    icon: "tim-icons icon-single-02",
    content: InstitutionContent,
    component: AboutPage,
    layout: "/rgv",
    requireAuth: false,
  },
  {
    path: "/ressources",
    name: "Ressources",
    icon: "tim-icons icon-single-02",
    content: RessourcesContent,
    component: AboutPage,
    layout: "/rgv",
    requireAuth: false,
  },
  {
    path: "/data/:did",
    name: "Data",
    icon: "tim-icons icon-single-02",
    component: DataPage,
    layout: "/rgv",
    requireAuth: false,
  },
  
];
export default routes;