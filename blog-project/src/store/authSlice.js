import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,// This means the user is not logged in at first.
    userData : null// No user data is stored yet.
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login: (state, action) => {
            state.status = true;//changes status value to true; user is now logged in
            state.userData  = action.payload.userData;//It also takes the user's information from the action.payload and stores it in userData
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;//clearing the userData, so there’s no user information anymore.
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;