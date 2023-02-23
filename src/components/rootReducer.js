import { combineReducers } from "redux";
import SignupReducer from "./redux/SignupReducer";

const rootReducers = combineReducers({
    signup: SignupReducer,
  });

  export default rootReducers;