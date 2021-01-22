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
import ResetPassword from "./views/ResetPassword"
import ForgotPassword from "./views/ForgotPassword"
import ActivationPage from "./views/ActivationPage"
import ProfilePage from './views/Profile/ProfilePage'
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Home from "./views/Home";
import Signup from "./views/Signup";
import DatasetPage from './views/Datasets/Datasets'
import AboutPage from './views/About'
import InstitutionsPage from './views/Institutions'
import RessourcesPage from './views/Ressources'
import DataPage from './views/Data'


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/app",
    requireAuth: true,
  },
  {
    path: "/login",
    name: "Login",
    icon: "tim-icons icon-atom",
    component: Login,
    layout: "/app",
    requireAuth: false,
  },
  {
    path: "/signup",
    name: "Register",
    icon: "tim-icons icon-bell-55",
    component: Signup,
    layout: "/app",
    requireAuth: false,
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: ProfilePage,
    layout: "/app",
    requireAuth: true,
  },
  {
    path: "/forgot",
    name: "Forgot password",
    icon: "tim-icons icon-single-02",
    component: ForgotPassword,
    layout: "/app",
    requireAuth: false,
  },
  {
    path: "/about",
    name: "About",
    icon: "tim-icons icon-single-02",
    component: AboutPage,
    layout: "/app",
    requireAuth: false,
  },
  {
    path: "/activate/:uid/:token",
    name: "Activate account",
    icon: "tim-icons icon-single-02",
    component: ActivationPage,
    layout: "/app",
    requireAuth: false,
  },
  {
    path: "/reset_password/:uid/:token",
    name: "Reset password",
    icon: "tim-icons icon-single-02",
    component: ResetPassword,
    layout: "/app",
    requireAuth: false,
  },
  {
    path: "/home",
    name: "Home",
    icon: "tim-icons icon-single-02",
    component: Home,
    layout: "/app",
    requireAuth: false,
  },
  {
    path: "/datasets",
    name: "Datasets",
    icon: "tim-icons icon-single-02",
    component: DatasetPage,
    layout: "/app",
    requireAuth: true,
  },
  {
    path: "/institutions",
    name: "Institution and founders",
    icon: "tim-icons icon-single-02",
    component: InstitutionsPage,
    layout: "/app",
    requireAuth: false,
  },
  {
    path: "/ressources",
    name: "Ressources",
    icon: "tim-icons icon-single-02",
    component: RessourcesPage,
    layout: "/app",
    requireAuth: false,
  },
  {
    path: "/data/:did",
    name: "Data",
    icon: "tim-icons icon-single-02",
    component: DataPage,
    layout: "/app",
    requireAuth: false,
  },
  
];
export default routes;
