import { connect } from "react-redux";
import React from "react";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers/index";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}
class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };
  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };
  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  };
  render(): React.ReactNode {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
