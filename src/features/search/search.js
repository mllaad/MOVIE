import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbApi } from "../../api/axios";

export const getSearch = createAsyncThunk(
    "tmdb/getSearch",
    async (obj) => {
      const { params } = obj;
      try{
        const res = await tmdbApi.search({ params });
        return res;
      } catch {
        console.error('cant catch data')
      }
    }
  );

const initialState = {
    input : '',
    results: [],
    status: ''
}
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        setSearchInput : (state, action) =>   {
          state.input = action.payload
        }
    },
    extraReducers: {

  ///////////// SEARCH //////////////
  [getSearch.pending]: (state) => {
    state.status = "redjectd";
  },
  [getSearch.fulfilled]: (state, action) => {
    state.status = "fulfilled";
    const data = action.payload.results;
    state.results = data;
  },
  [getSearch.rejected]: (state) => {
    state.status = "rejected";
  },
    }

})

export default searchSlice.reducer;
export const {setSearchInput} = searchSlice.actions