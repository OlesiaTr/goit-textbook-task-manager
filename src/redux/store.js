// Core
import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

// Initial Redux state value for the root reducer,
// if you don't pass the preloadedState parameter.
const initialState = {
  tasks: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
  filters: {
    status: "all",
  },
};

// For now, use a reducer that
// only returns the received state
const rootReducer = (state = initialState, action) => {
  return state;
};

// Create a store extension to add developer tools
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer,enhancer);
