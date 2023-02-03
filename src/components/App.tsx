import { connect } from "react-redux";
import React from "react";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers/index";
class _App extends React.Component {
  render(): React.ReactNode {
    return <div>Hi there</div>;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
