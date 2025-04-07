import { coursesAdapter } from "../features/CoursesSlice";

export const { selectAll, selectById } = coursesAdapter.getSelectors(
  (state) => state.courses
);
