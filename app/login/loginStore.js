'use client'

import { Provider } from 'react-redux'
import LoginPanel from './login'
import { store } from '../store'
export default function Login(){

    return(
        <>
        <Provider store={store}>
            <LoginPanel />
        </Provider>
        </>
    )
}