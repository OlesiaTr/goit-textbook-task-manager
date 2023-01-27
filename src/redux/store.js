//=============== Before ========================
// // Core
// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

// // Create a store extension to add developer tools
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer,enhancer);

//=============== After ========================
// Core
import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer,filtersReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
