import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "./authSlice";

const USER_API = "http://localhost:3030/api/v1/user";

export const authApi = createApi({
    reducerPath: "authApi",
    // This is the key under which the state for this API slice will be stored in our main Redux store
    
    
    baseQuery: fetchBaseQuery({
        baseUrl: USER_API,
        credentials: "include",
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (inputData) => ({
                url: "/register",
                method: "POST",
                body: inputData
            })
        }),
        loginUser: builder.mutation({
            query: (inputData) => ({
                url: "/login",
                method: "POST",
                body: inputData
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(userLoggedIn(result.data.user));
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        // After a successful login , it automatically updates our regular Redux state by dispatching an action (userLoggedIn) to let the rest of our application know that the user is now authenticated
        forgotPassword: builder.mutation({
            query: (credentials) => ({
                url: "/forgot-password",
                method: "POST",
                body: credentials
            }),
        })
    })
});

export const { 
    useRegisterUserMutation, 
    useLoginUserMutation,
    useForgotPasswordMutation 
} = authApi;



/*
When we call loginUser mutation from our component , onQueryStarted is trigged immediately
The code hits await queryFulfilled. This pauses the execution of the onQueryStarted function until the API call is completed.
If the server responds with a success status and JSON body , the queryFulfilled promise resolves.The result variable will contain the response data.
*/

