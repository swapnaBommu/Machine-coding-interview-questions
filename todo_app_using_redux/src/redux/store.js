// redux/store.js

import { createStore } from "redux";
import todoReducer from "./todoReducres";

const store = createStore(todoReducer);

export default store;