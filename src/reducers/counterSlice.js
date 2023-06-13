import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        set: (state, action) => action.payload
    }
});

export const { increment, set } = counterSlice.actions;
export default counterSlice.reducer;