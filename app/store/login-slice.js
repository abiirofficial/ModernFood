const { createSlice } = require("@reduxjs/toolkit");


const loginSlice = createSlice({
    name: 'login',
    initialState: {flag: false},
    reducers: {
        loginFlag(state, actions){
            state.flag = true
        }
    }
})

export const {loginFlag} = loginSlice.actions
export default loginSlice; 