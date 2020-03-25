import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import TodosComponent from "./components/Todos.component/Todos.component";
import Login from "./components/Login.component/Login.component";

class App extends React.Component {
  render() {
    const { isUserLoggedIn } = this.props;
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            {isUserLoggedIn || (
              <Route exact path="/home" render={props => <TodosComponent {...props} />} />
            )}
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const { isUserLoggedIn } = state;
  return { isUserLoggedIn };
};
export default connect(mapStateToProps)(App);
