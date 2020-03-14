import React from "react";
import "./App.css";
import { connect } from "react-redux";
import TodosComponent from "./components/Todos.component/Todos.component";

function App() {
  return (
    <div>
      <TodosComponent />
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
