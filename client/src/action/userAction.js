
export const loginUser = (username, password) => {
    // make server call to login this user
    alert("calling server" + username);
    const userJson = {
        id: 1,
        username: username,
        firstName: 'Om'
    }
    return {
        type: "USER_LOGIN",
        payload: userJson
    }
}
