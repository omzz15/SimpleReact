import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id: null,
    username: '',
    firstName: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case "USER_LOGIN": {
            const userInfo = action.payload;
            return {
                id: userInfo.id,
                username: userInfo.username,
                firstName: userInfo.firstName
            };
        }
        default:
            return state;
    }
}
