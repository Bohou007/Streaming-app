import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loader from "./components/loader/Loader";
import { Helmet } from "react-helmet";

import "../src/assets/css/app.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/typography.css";
import "../src/assets/css/style.css";
import "../src/assets/css/all.min.css";
import "../src/assets/css/animate.min.css";
import "../src/assets/css/dark.css";
import "../src/assets/css/frontend-style.css";
import "../src/assets/css/magnic-popup.css";
// import "../src/assets/css/main.css";
import "../src/assets/css/swipper.css";
import "../src/assets/css/owl.carousel.min.css";
import "../src/assets/css/remixicon.css";
import "../src/assets/css/responsive.css";
import "../src/assets/css/select2-bootstrap4.min.css";
import "../src/assets/css/select2.min.css";
import "../src/assets/css/spacer.css";
import "../src/assets/css/swipper-bundle.css";
import "../src/assets/css/swipper.css";
import "../src/assets/css/variable.css";

// import AuthRoutes from "./AuthRoutes";
// import ProtectedRoute from "./components/protectRoutes/ProtectedRoute";

const LayoutApp = Loadable({
  loader: () => import("./components/layouts/LayoutApp"),
  loading: Loader,
});

// const Backend = Loadable({
//   loader: () => import("./components/backOffice/Backend"),
//   loading: Loader,
// });
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.getItem("loggedIn"),
      currentUser: localStorage.getItem("loggedIn"),
    };
  }
  render() {
    // const AuthRoute = AuthRoutes.map((route, index) => {
    //   return route.component ? (
    //     <Route
    //       key={index}
    //       path={route.path}
    //       exact={route.exact}
    //       name={route.name}
    //       render={(props) => <route.component {...props} />}
    //     />
    //   ) : null;
    // });
    return (
      <>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <Switch>
              {/* {AuthRoute}  */}
              {/* <ProtectedRoute
                path="/dashboard"
                loggedIn={this.state.loggedIn}
                component={Backend}
              /> */}
              <Route path="/" component={LayoutApp} />
            </Switch>
          </BrowserRouter>
        </Suspense>
        <Helmet>
          <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            type="text/javascript"
          />

          <script src="../src/assets/js/custom.js" type="text/javascript" />
          <script
            src="../src/assets/js/jquery.magnific-popup.min.js"
            type="text/javascript"
          />
          <script
            src="../src/assets/js/core/bootstrap.min.js"
            type="text/javascript"
          />
        </Helmet>
      </>
    );
  }
}

export default App;
