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
        clickHandler={() => props.dispatch(actions.HANDLE_COMPLETED(todo))}
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

// dont connect a component to redux store if you dont intend to use any props from there 
// Logical components are callned containers 
// Dummy UI functions are called components 
export default connect()(Todo);
// export default Todo
