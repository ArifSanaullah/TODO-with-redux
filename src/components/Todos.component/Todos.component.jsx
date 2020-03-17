import React, { Component } from "react";
import { connect } from "react-redux";
import TodoComponent from "../Todo.component/Todo.component";
import Input from "../Input.component/Input.component";
// import * as actions from "../../actions";
// use library or module level destructuring here 
import {
  addTodo,
  searchTodo,
  deleteTodo,
  changeHandler,
  showAll,
  showActive,
  showCompleted
} from '../../actions';

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
            changeHandler={(e) => dispatch(searchTodo(e))}
          />
          <Input
            placeholder="Add Todo"
            type="text"
            classname="inputSearch"
            todoValue={todo.value}
            keyDownHandler={(e) => dispatch(addTodo(e))}
            changeHandler={(e) => dispatch(changeHandler(e, todo))}
          />
        </div>
        <div className="body">
          <ul className="todoList">
            {renderedTodos &&
              renderedTodos.map((todo, index) => (
                <TodoComponent
                  todo={todo}
                  key={index}
                  deleteHandler={() => dispatch(deleteTodo(todo.id))}
                />
              ))}
          </ul>
        </div>
        <div className="footer">
          <Input
            type="button"
            classname="inputLink"
            todoValue="Show all"
            clickHandler={() => dispatch(showAll(todos))}
          />
          <Input
            type="button"
            classname="inputLink"
            todoValue="Active"
            clickHandler={() => dispatch(showActive(todos))}
          />
          <Input
            type="button"
            classname="inputLink"
            todoValue="Completed"
            clickHandler={() => dispatch(showCompleted(todos))}
          />
        </div>
      </div>
    );
  }
}

// Return only the necessary things you want for the component not the whole state
// Using the complete state would be an overkill for the component
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Todos);
