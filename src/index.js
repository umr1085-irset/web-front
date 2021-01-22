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
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import Root from "./Root";
import AdminLayout from "./layouts/Admin/Admin.js";

import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"



import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";

ReactDOM.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
    <ToastContainer hideProgressBar={true} newestOnTop={true} />
      <Root>
        <Switch>
          <Route path="/app" render={(props) => <AdminLayout {...props} />} />
          <Redirect from='/' to='/app/home' />

        </Switch>
      </Root>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>,
  document.getElementById("root")
);