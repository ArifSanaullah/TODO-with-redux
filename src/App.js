import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import TodosComponent from "./components/Todos.component/Todos.component";
import Login from "./components/Login.component/Login.component";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" render={(props) => <Login {...props} />} />
              <Route exact path="/home" component={TodosComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
