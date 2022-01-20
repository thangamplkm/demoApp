import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
//import App from "./App";
import store from "./store/index";

const App = React.lazy(() => import("./App"));
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<p>Loading...</p>}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
