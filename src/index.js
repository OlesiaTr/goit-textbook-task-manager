// Core
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "redux/store";

// Components
import { App } from "components/App";

// Styles
import "./index.css";
import { GlobalStyle } from "components/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <GlobalStyle/>
  </Provider>
);
