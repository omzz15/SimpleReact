import axios from 'axios';

export const loginUser = (username, password) => {
    // make server call to login this user
    const reqData = {username: username, password: password}
    const req = axios.post('http://localhost:80/login', reqData)
    return {
        type: "USER_LOGIN",
        payload: req
    }
}
