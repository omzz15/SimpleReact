import {createSlice} from '@reduxjs/toolkit'

export const userReducer = createSlice({
    name: 'user',
    initialState: { 
        id: null,
        username: '',
        firstName: ''
    },
    reducers: {
        login: (state, action) => {
            state.id = action.payload.id,
            state.username = action.payload.username,
            state.firstName = action.payload.firstName
        },
        logout: (state) => {
            state.id = null,
            state.username = '',
            state.firstName = ''
        }
    }
})

export const { login, logout } = userReducer.actions

export default userReducer.reducer
