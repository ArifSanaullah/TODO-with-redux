import React, { Component } from "react";
import { connect } from "react-redux";
import TodoComponent from "../Todo.component/Todo.component";
import Input from "../Input.component/Input.component";
import * as actions from "../../actions";

class Todos extends Component {
  render() {
    const { renderedTodos, todo, dispatch } = this.props;
    const {
      addTodo,
      searchTodo,
      deleteTodo,
      changeHandler
    } = actions;
    return (
      <div>
        <Input
          placeholder="Search Todo"
          type="search"
          changeHandler={(e) => dispatch(searchTodo(e))}
        />
        <Input
          placeholder="Add Todo"
          type="text"
          todoValue={todo.value}
          keyDownHandler={(e) => dispatch(addTodo(e))}
          changeHandler={(e) => dispatch(changeHandler(e, todo))}
        />
        <ul>
          {renderedTodos &&
            renderedTodos.map((todo, index) => (
              <TodoComponent
                todo={todo}
                key={index}
                deleteHandler={() => dispatch(deleteTodo(todo.value))}
              />
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Todos);
