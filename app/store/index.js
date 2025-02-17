'use client'
import { Provider } from "react-redux";
import LoginPanel from "../login/login";

const { configureStore } = require("@reduxjs/toolkit");
const { default: loginSlice } = require("./login-slice");

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer
    }
})

export default function Index({children}){
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}