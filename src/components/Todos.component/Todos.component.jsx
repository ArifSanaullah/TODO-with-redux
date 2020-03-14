import React, { Component } from "react";
import { connect } from "react-redux";
import TodoComponent from "../Todo.component/Todo.component";
import Input from "../Input.component/Input.component";
import * as actions from "../../actions";

class Todos extends Component {
  render() {
    const { renderedTodos, todo, dispatch, completed } = this.props;
    const {
      addTodo,
      searchTodo,
      deleteTodo,
      changeHandler
    } = actions;
    const dummy = { todo: todo, completed: completed };
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
          value={todo}
          keyDownHandler={(e) => dispatch(addTodo(e))}
          changeHandler={(e) => dispatch(changeHandler(e))}
        />
        <ul>
          {renderedTodos &&
            renderedTodos.map((todo, index) => (
              <TodoComponent
                todoValue={todo}
                key={index}
                dummy={dummy}
                deleteHandler={() => dispatch(deleteTodo(todo))}
              />
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Todos);
