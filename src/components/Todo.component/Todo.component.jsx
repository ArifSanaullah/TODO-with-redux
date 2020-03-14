import React from "react";
import { connect } from "react-redux";
import Input from "../../components/Input.component/Input.component";
import * as actions from "../../actions";

function Todo(props) {
  const { todoValue, deleteHandler, dummy } = props;
  return (
    <li>
      <Input
        type="checkbox"
        checked={dummy.completed}
        clickHandler={() => props.dispatch(actions.handleCompleted(dummy))}
      />
      <span className={`${dummy.completed && "completedTodo"}`}>{todoValue}</span>
      <button onClick={deleteHandler}>Delete Todo</button>
    </li>
  );
}

export default connect()(Todo);
