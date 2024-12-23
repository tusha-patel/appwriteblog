import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./src/reducer/reducer";

let store = configureStore({
    reducer: {
        auth: authSlice,
    }
});

export default store;