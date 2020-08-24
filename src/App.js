import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Recipe from "./components/Recipe";
import NoMatch from "./components/NoMatch";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation"
import Jumbotron from "./components/Jumbotron"
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recipe" component={Recipe} />
            <Route exact path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
