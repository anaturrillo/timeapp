import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components/common/Menu';
import NoMatch from './components/common/NoMatch'

const Index = () => <h2>Home</h2>;

const AppRouter = () => (
  <Router>
      <div>
        <Menu/>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route component={NoMatch}/>
        </Switch>

      </div>
  </Router>
);

export default AppRouter;