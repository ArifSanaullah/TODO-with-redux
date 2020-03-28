import React, { Component } from "react";
import { connect } from "react-redux";
import TodoComponent from "../Todo.component/Todo.component";
import Input from "../Input.component/Input.component";
import { DELETE_TODO } from "../../actions/todo.actions";
import {
  CHANGE_HANDLER,
  SEARCH_TODO,
  ADD_TODO,
  ADD_TODO_BY_BUTTON
} from "../../actions/todos.actions";
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from "../../actions/visibilityFilters.actions";

class Todos extends Component {
  render() {
    const { renderedTodos, todos, todo, dispatch, ...rest } = this.props;
    console.log(rest);
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
            clickHandler={() => dispatch(SHOW_ALL(renderedTodos))}
          />
          <Input
            type="button"
            classname="inputLink"
            todoValue="Active"
            clickHandler={() => dispatch(SHOW_ACTIVE(renderedTodos))}
          />
          <Input
            type="button"
            classname="inputLink"
            todoValue="Completed"
            clickHandler={() => dispatch(SHOW_COMPLETED(renderedTodos))}
          />
        </div>
      </div>
    );
  }
}

// Return only the necessary things you want for the component not the whole state
// Using the complete state would be an overkill for the component
const mapStateToProps = (state) => {
  const { todo, todos, renderedTodos, dispatch } = state.visibilityFiltersReducers;
  // const { todo, renderedTodos, todos, dispatch } = state.todosReducers;
  return { todos, todo, dispatch, renderedTodos, ...state };
};

export default connect(mapStateToProps)(Todos);
