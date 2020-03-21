import React, { Component } from "react";
import { connect } from "react-redux";
import TodoComponent from "../Todo.component/Todo.component";
import Input from "../Input.component/Input.component";
import {
  ADD_TODO,
  ADD_TODO_BY_BUTTON,
  SEARCH_TODO,
  DELETE_TODO,
  CHANGE_HANDLER,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from "../../actions";

class Todos extends Component {
  render() {
    const { renderedTodos, todos, todo, dispatch } = this.props;

    return (
      <div className="todosListContainer">
        <div className="header">
          <Input
            placeholder="Search Todo"
            type="search"
            classname="inputText"
            changeHandler={(e) => dispatch(SEARCH_TODO(e))}
          />
          <div>
            <Input
              placeholder="Add Todo"
              type="text"
              classname="inputSearch"
              todoValue={todo.value}
              keyDownHandler={(e) => e.which === 13 && dispatch(ADD_TODO(e))}
              changeHandler={(e) => dispatch(CHANGE_HANDLER(e, todo))}
            />
            <Input
              todoValue="Add todo"
              classname="inputBtnPrimary"
              type="button"
              clickHandler={() => dispatch(ADD_TODO_BY_BUTTON(todo))}
            />
          </div>
        </div>
        <div className="body">
          <ul className="todoList">
            {renderedTodos &&
              renderedTodos.map((todo, index) => (
                <TodoComponent
                  todo={todo}
                  key={index}
                  deleteHandler={() => dispatch(DELETE_TODO(todo.id))}
                />
              ))}
          </ul>
        </div>
        <div className="footer">
          <Input
            type="button"
            classname="inputLink"
            todoValue="Show all"
            clickHandler={() => dispatch(SHOW_ALL(todos))}
          />
          <Input
            type="button"
            classname="inputLink"
            todoValue="Active"
            clickHandler={() => dispatch(SHOW_ACTIVE(todos))}
          />
          <Input
            type="button"
            classname="inputLink"
            todoValue="Completed"
            clickHandler={() => dispatch(SHOW_COMPLETED(todos))}
          />
        </div>
      </div>
    );
  }
}

// Return only the necessary things you want for the component not the whole state
// Using the complete state would be an overkill for the component
const mapStateToProps = (state) => {
  const { renderedTodos, todos, todo, dispatch } = state;
  return { renderedTodos, todos, todo, dispatch };
};

export default connect(mapStateToProps)(Todos);
