import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { authApi } from "../features/authApi";
import rootReducer from "./rootReducer";

export const appStore = configureStore({
    reducer: rootReducer,
    middleware:(defaultMiddleware)=>
        defaultMiddleware().concat(authApi.middleware),
});

export default appStore;


/*
rootReducer comes from the rootReducer file. It is used to combine all the reducers in the application.

appStore comes from the store file. It is used to create the store for the application.

configureStore is a function that creates a Redux store. It takes the rootReducer so Redux knows how to update state.

Here we start with Redux's defaultMiddleware and Adds RTK Query middleware to it , so that it can handle API calls.
*/