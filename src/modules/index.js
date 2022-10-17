import { combineReducers } from "redux";
// import { all } from "redux-saga/effects";
// import auth, { authSaga } from "./auth";
// import lading from "./loding";
// import user, { userSaga } from "./user";
import write from "./write";

const rootReducer = combineReducers({
  //   auth,
  //   lading,
  //   user,
  write,
});

export function* rootSaga() {
  //   yield all([authSaga()]);
}

export default rootReducer;
