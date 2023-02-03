import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducers } from "./reducers";
import { App } from "./components/App";
const store = createStore(reducers, applyMiddleware(thunk));
const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  root
);
