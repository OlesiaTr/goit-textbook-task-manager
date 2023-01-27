// Core
import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";

// Create a store extension to add developer tools
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer,enhancer);
