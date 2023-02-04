import { configureStore } from "@reduxjs/toolkit";

import tmdbSlice from '../features/tmdb/tmdb'
import searchSlice from '../features/search/search'
const store = configureStore({
    reducer: {
        tmdb: tmdbSlice,
        search: searchSlice,
    }
})

export default store