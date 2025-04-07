import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };

const StudentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
});

export default StudentsSlice.reducer;