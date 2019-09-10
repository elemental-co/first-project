import React from "react";
import Loadable from "react-loadable";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import "./App.scss";

const Home = Loadable({
  loader: () => import("./Home"),
  loading: () => <React.Fragment/>
});

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/404" render={() => "404"}/>
        <Route render={() => <Redirect to="/404"/>}/>
      </Switch>
    </Router>
  )
};

export default App