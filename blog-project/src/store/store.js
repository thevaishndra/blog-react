import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        auth : authSlice,
    }
});

export default store;
//This creates a store to hold the app’s state (information).
//Inside this contains auth, which has the rules for login and logout, and keeps track of the user's status.
//The store can be used by the whole app to check or change the login state.