import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

const NotFound = lazy(() => import("./pages/NotFound"));
const Top = lazy(() => import("./pages/Top"));

const Root = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact={true} path="/" component={Top} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
