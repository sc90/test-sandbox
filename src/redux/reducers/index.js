import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import currencyExchangeStore from "./currencyExchangeStore";

export default combineReducers({
  todos,
  visibilityFilter,
  currencyExchangeStore
});
