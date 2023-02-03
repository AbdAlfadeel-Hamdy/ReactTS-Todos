import { connect } from "react-redux";
import React from "react";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers/index";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}
class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
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

export const App = connect(mapStateToProps, { fetchTodos })(_App);
