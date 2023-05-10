import { createSlice } from "@reduxjs/toolkit";

export const reposSlice = createSlice({
  name: "repos",
  initialState: {
    currentPage: 1,
    loading: true,
    data: {
      total_count: 0,
      items: [],
    },
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setLoadingStatus(state, action) {
      state.loading = action.payload;
    },
    setRepositories(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setCurrentPage, setLoadingStatus, setRepositories } =
  reposSlice.actions;

export default reposSlice.reducer;
