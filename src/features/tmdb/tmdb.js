import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axiosClient } from "../../api/axios";

///// GENRE //////
export const getGenreList = createAsyncThunk("tmdb/getGenreList", async () => {
  try {
    const movie = await axiosClient.get("genre/movie/list", { params: {} });
    const tv = await axiosClient.get("genre/tv/list", { params: {} });
    return { movie, tv };
  } catch {
    console.log("dosent work");
    return null;
  }
});

const initialState = {
  genreList: [],
  status: "",
};

const tmdbSlice = createSlice({
  name: "tmdb",
  initialState,
  reducers: {},

  extraReducers: {
    ////////// GENRE///////////////
    [getGenreList.pending]: (state) => {
      state.status = "pending";
    },
    [getGenreList.fulfilled]: (state, action) => {
      state.status = "fulfilled";

      if (!action.payload)
        return console.error("return value from action.payload is Null!");
      const { movie, tv } = action.payload;
      const list = [];
      movie.genres.map((i) => list.push(i));
      tv.genres.map((i) => list.push(i));

      state.genreList = list;
    },
    [getGenreList.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default tmdbSlice.reducer;
