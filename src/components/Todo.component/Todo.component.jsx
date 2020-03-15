import React from "react";
import { connect } from "react-redux";
import Input from "../../components/Input.component/Input.component";
import * as actions from "../../actions";

function Todo(props) {
  const { deleteHandler, todo } = props;
  return (
    <li todoid={todo.id} className="todoItem">
      <Input
        type="checkbox"
        checked={todo.completed}
        classname="inputCheckbox"
        clickHandler={() => props.dispatch(actions.handleCompleted(todo))}
      />
      <span className={`${todo.completed && "completedTodoItem"} todoText`}>
        {todo.value}
      </span>
      <Input
        todoValue="&#xd7;"
        classname="inputBtn"
        type="button"
        clickHandler={deleteHandler}
      />
    </li>
  );
}

export default connect()(Todo);
