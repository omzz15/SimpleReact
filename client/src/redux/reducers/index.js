import { combineReducers } from "redux";
import userReducer from "./userReducer";
import viewsReducer from "./viewsReducer";

export default combineReducers({user: userReducer, views: viewsReducer});
