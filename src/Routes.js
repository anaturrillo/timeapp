import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './components/common/Menu'

const Index = () => <h2>Home</h2>;

const AppRouter = () => (
  <Router>
      <div>
          <Menu/>
          <Route path="/" exact component={Index} />
      </div>
  </Router>
);

export default AppRouter;