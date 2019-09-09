import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" render={() => "Home"}/>
        <Route path="/404" render={() => "404"}/>
        <Route render={() => <Redirect to="/404"/>}/>
      </Switch>
    </Router>
  )
};

export default App