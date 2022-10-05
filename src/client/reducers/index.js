// file to combine all our different reducers together
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducers from "./authReducers";
import adminsReducer from "./adminsReducer";

export default combineReducers({
    users: userReducer,
    auth: authReducers,
    admins: adminsReducer
});