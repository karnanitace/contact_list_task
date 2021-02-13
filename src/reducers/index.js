import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import favouriteReducer from "./favouriteReducer";

export default combineReducers({
    contact: contactReducer,
    favourite: favouriteReducer
});