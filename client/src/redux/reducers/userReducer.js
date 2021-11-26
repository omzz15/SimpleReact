const initialState = {
    id: null,
    username: '',
    fname: '',
    status: 'OK'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "USER_LOGIN": {
            if (action.error) {
                alert("Error logging in!! Please retry later.")
                return state
            } else {
                const data = action.payload.data;
                const status = data.status;

                if (status === "OK") {
                    const userInfo = data.payload;
                    return {
                        id: userInfo.id,
                        username: userInfo.username,
                        fname: userInfo.fname,
                        status: state.status
                    };
                }else if(status.error === "Value Can't be Found"){
                    state.status = "Username Can't be Found";
                }else if(status.error === "Value is Incorrect"){
                    state.status = "Password is Incorrect";
                }else{
                    alert("UNKNOWN ERROR! (Contact Admin)")
                }
                return state
            }
        }
        default:
            return state;
    }
}
