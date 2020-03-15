import React from "react";
import { connect } from "react-redux";
import Input from "../../components/Input.component/Input.component";
import * as actions from "../../actions";

function Todo(props) {
  const { deleteHandler, todo } = props;
  return (
    <li todoid={todo.id}>
      <Input
        type="checkbox"
        checked={todo.completed}
        clickHandler={() => props.dispatch(actions.handleCompleted(todo))}
      />
      <span className={`${todo.completed && "completedTodo"}`}>{todo.value}</span>
      <button onClick={deleteHandler}>Delete Todo</button>
    </li>
  );
  }

export default connect()(Todo);
