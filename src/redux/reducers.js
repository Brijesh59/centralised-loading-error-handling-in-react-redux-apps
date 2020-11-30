import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import errorReducer from "./error/errorReducer";
import loadingReducer from "./loading/loadingReducer";

const reducers = combineReducers({
  user: userReducer,
  error: errorReducer,
  loading: loadingReducer
});

export default reducers;
