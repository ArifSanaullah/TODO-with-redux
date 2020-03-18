import React from "react";
import "./App.css";
// import { connect } from "react-redux";
import TodosComponent from "./components/Todos.component/Todos.component";

function App() {
  return (
    <div className="container">
      <TodosComponent />
    </div>
  );
}

// Why are you using mapStateToProps here if you're not using the global store
// const mapStateToProps = (state) => state;
// export default connect(mapStateToProps)(App);

export default App
