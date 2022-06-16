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
import StudyPage from '../views/Study'
import ResultPage from '../views/Results'
import CitePage from '../views/Cite'

import AboutContent from "../contents/hudeca/about.md"
import InstitutionContent from "../contents/hudeca/institutions.md"
import CiteContent from "../contents/hudeca/howtocite.md"

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/hudeca",
    requireAuth: true,
  },
  /*{
    path: "/login",
    name: "Login",
    icon: "tim-icons icon-atom",
    component: Login,
    layout: "/hudeca",
    requireAuth: false,
  },*/
  {
    path: "/signup",
    name: "Register",
    icon: "tim-icons icon-bell-55",
    component: Signup,
    layout: "/hudeca",
    requireAuth: false,
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: ProfilePage,
    layout: "/hudeca",
    requireAuth: true,
  },
  {
    path: "/forgot",
    name: "Forgot password",
    icon: "tim-icons icon-single-02",
    component: ForgotPassword,
    layout: "/hudeca",
    requireAuth: false,
  },
  {
    path: "/about",
    name: "About",
    icon: "tim-icons icon-single-02",
    component: AboutPage,
    content: AboutContent,
    layout: "/hudeca",
    requireAuth: false,
  },
  {
    path: "/activate/:uid/:token",
    name: "Activate account",
    icon: "tim-icons icon-single-02",
    component: ActivationPage,
    layout: "/hudeca",
    requireAuth: false,
  },
  {
    path: "/reset_password/:uid/:token",
    name: "Reset password",
    icon: "tim-icons icon-single-02",
    component: ResetPassword,
    layout: "/hudeca",
    requireAuth: false,
  },
  {
    path: "/",
    name: "Home",
    icon: "tim-icons icon-single-02",
    component: Home,
    layout: "/hudeca",
    requireAuth: false,
  },
  {
    path: "/view/:browse_by",
    name: "Browse",
    icon: "tim-icons icon-single-02",
    component: DatasetPage,
    layout: "/hudeca",
    requireAuth: false,
  },
  {
    path: "/howtocite",
    name: "How to cite us",
    icon: "tim-icons icon-single-02",
    component: CitePage,
    content: CiteContent,
    layout: "/hudeca",
    requireAuth: false,
  },
  
  {
    path: "/institutions",
    name: "Institution and founders",
    icon: "tim-icons icon-single-02",
    component: AboutPage,
    content: InstitutionContent,
    layout: "/hudeca",
    requireAuth: false,
  },
{	
    path: "/ressources",
    name: "Ressources",
    icon: "tim-icons icon-single-02",
    component: AboutPage,
    content: AboutContent,
    layout: "/hudeca",
    requireAuth: false,
  },
  {
    path: "/data/:did",
    name: "Data",
    icon: "tim-icons icon-single-02",
    component: DataPage,
    layout: "/hudeca",
    requireAuth: false,
  },
  {
    path: "/study/:sid",
    name: "Study",
    icon: "tim-icons icon-single-02",
    component: StudyPage,
    layout: "/hudeca",
    requireAuth: false,
  },
  {
    path: "/dataset/:did",
    name: "Study",
    icon: "tim-icons icon-single-02",
    component: ResultPage,
    layout: "/hudeca",
    requireAuth: false,
  },
  
];
export default routes;
