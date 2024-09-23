// https://redux.js.org/basics/reducers
import { combineReducers } from "redux";
import LoginReducer from "./loginReducer";
import RouteReducer from "./routerReducer";

import { authentication } from "./authentication.reducer";

import { students } from "./studentsReducer";
import { tests } from "./testsReducer";
import { roles } from "./rolesReducer";
import { users } from "./usersReducer";
import { files } from "./files.reducer";
import ExamineeReducer from "./examineeReducer";

const appReducer = combineReducers({
  authentication,
  login: LoginReducer,
  route: RouteReducer,
  exam: ExamReducer,
  questions,
  students,
  users,
  tests,
  files,
  roles,
  institutions,
  examinee: ExamineeReducer,
});

const rootReducer = (state, action) => {
  // when exam finished
  if (action.type === "EXAM_FINISHED") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
