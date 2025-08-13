import authReducer from "../features/authSlice";
import { authApi } from "../features/authApi";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    // RTK Query API data
    auth: authReducer,
    // Custom auth state
});


export default rootReducer;


/*
authReducer comes from the authSlice file.It updates the authentication related state 

authApi comes from the authApi file.It is used to make API calls to the backend server.


combineReducers merges multiple reducers into a single reducer
-> [authApi.reducerPath]:"authApi" , and it's where RTK Query will store API data 
-> "auth":authReducer , it's where our authentication related state will be stored
*/