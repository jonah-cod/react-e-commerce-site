import { combineReducers } from "redux";
import addtocartReducer from "./addtocartReducer";
import searchedreducer from "./searchedReducer";

const rootReducer = combineReducers({
  addRe:addtocartReducer,
  serdRe:searchedreducer,
});

export default rootReducer;