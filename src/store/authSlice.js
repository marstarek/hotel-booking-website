
import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: { isLogedIn: false, userInfo:{} },
    reducers: {
        logInOut: (state) => {
            state.isLogedIn = !state.isLogedIn;
        },
    },
});
export const { logInOut } = authSlice.actions;
export default authSlice.reducer;