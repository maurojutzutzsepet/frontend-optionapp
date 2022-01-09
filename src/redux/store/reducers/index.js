import { combineReducers } from "redux";
import textReducer from "../../../Main/ModuleForm/store/reducers";

const createReducer = (asyncReducers) =>
  combineReducers({
    textReducer,
    ...asyncReducers,
  });

export default createReducer;
