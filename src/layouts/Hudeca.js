/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import Footer from "../components/Footer/Footer.js";

import requireAuth from "../utils/RequireAuth";
import NavbarComponent from '../components/Navbar/Hudeca/NavbarComponentHudeCA';

import Box from '@material-ui/core/Box';
import routes from "../routes.js";



import { BackgroundColorContext } from "../contexts/BackgroundColorContext";

var ps;

function Hudeca(props) {
  const location = useLocation();
  const mainPanelRef = React.useRef(null);

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(mainPanelRef.current, {
        suppressScrollX: true,
      });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.classList.add("perfect-scrollbar-off");
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainPanelRef.current) {
      mainPanelRef.current.scrollTop = 0;
    }
  }, [location]);
  // this function opens and closes the sidebar on small devices

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.requireAuth) {
        const Compo = prop.component
        return (
          <Route exact
            path={prop.path}
            content={prop.content}
            component={requireAuth(() => (<Compo content={prop.content} />))}
            key={key}
          />
        );
      }
      else if (prop.requireAuth === false) {
        const Compo = prop.component
        return (
          <Route exact
            path={prop.path}
            component={() => (<Compo content={prop.content} />)}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <BackgroundColorContext.Consumer>
      {({ color, changeColor }) => (
        <React.Fragment>
          <div className="wrapper" style={{ backgroundColor: '#F2F2F2' }} >
            <div className="main-panel" ref={mainPanelRef} data={color}>
              <NavbarComponent/>
	      <Box className="App" m={2}>
              <Switch>
                {getRoutes(routes)}
              </Switch>
              </Box>

              <Footer fluid />
            </div>
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default Hudeca;
