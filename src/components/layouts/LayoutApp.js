import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./header/Navigation";
import Loader from "../loader/Loader";
import AppRoutes from "../../AppRoutes";
import Home from "../../pages/Home";
import Index from "../cards/home-header/Index";
import Footer from "./footer/Footer";

class LayoutApp extends Component {
  render() {
    const menu = AppRoutes.map((route, index) => {
      return route.component ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={(props) => <route.component {...props} />}
        />
      ) : null;
    });
    return (
      <>
        <Navigation props={this.props} />
        <div className="main-content">
          <Suspense fallback={<Loader />}>
            <Switch>
              {menu}
              <Route exact path="/" component={Home} />
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </>
    );
  }
}

export default LayoutApp;
