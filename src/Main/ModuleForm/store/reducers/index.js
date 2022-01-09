import { combineReducers } from "redux";
import textReducer from "./validText.reducer";

//llamamos a todos nuestros reducers
const reducer = combineReducers({
  textReducer,
});

export default reducer;
