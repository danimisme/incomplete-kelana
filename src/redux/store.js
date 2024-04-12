import { createStore, combineReducers } from "redux";
import SidebarReducer from "./reducers/SidebarReducer";

const rootReducer = combineReducers({
  sidebar: SidebarReducer,
});

const store = createStore(rootReducer);
export default store;
