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
import { Route, Switch } from "react-router-dom";
import Root from "./Root";
import RgvLayout from "./layouts/RGV.js";
import HudecaLayout from "./layouts/Hudeca.js";
import { ThemeProvider } from '@material-ui/core/styles';


import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './assets/scss/hugodeca.scss'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import theme from './theme';



import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ToastContainer hideProgressBar={true} newestOnTop={true} />
      <Root>
        <Switch>
          <Route path="/" render={(props) => <HudecaLayout {...props} />} />
        </Switch>
      </Root>
  </ThemeProvider>,
  document.getElementById("root")
);