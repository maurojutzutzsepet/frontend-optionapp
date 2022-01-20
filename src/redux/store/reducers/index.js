import { combineReducers } from "redux";
import textReducer from "../../../Main/ModuleForm/store/reducers";
import loginReducer from "../../../Main/Login/store/reducers";

const createReducer = (asyncReducers) =>
  combineReducers({
    textReducer,
    loginReducer,
    ...asyncReducers,
  });

export default createReducer;
