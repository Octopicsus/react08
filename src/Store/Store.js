import { configureStore } from "@reduxjs/toolkit";

import AccountReducer from "./features/AccountSlice.js";
import CoursesReducer from "./features/CoursesSlice.js";
import StudentsReducer from "./features/StudentsSlice.js";

export const store = configureStore({
  reducer: {
    currentUser: AccountReducer,
    courses: CoursesReducer,
    students: StudentsReducer,
  },
});
