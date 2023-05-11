import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchRepositories } from "../services/RepositoryService";

export const getRepositories = createAsyncThunk(
  "repos/getRepositories",
  async ({ input, page }) => {
    const { data } = await searchRepositories(input, page);
    return data;
  }
);

export const reposSlice = createSlice({
  name: "repos",
  initialState: {
    loading: true,
    data: {
      total_count: 0,
      items: [],
    },
  },
  extraReducers: {
    [getRepositories.pending]: (state) => {
      state.loading = true;
    },
    [getRepositories.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getRepositories.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default reposSlice.reducer;
