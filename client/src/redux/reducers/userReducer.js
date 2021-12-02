const initialState = {
    id: null,
    username: null,
    fname: null,
    status: null
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

                if (status.status === 0) {
                    const userInfo = data.payload;
                    return {
                        id: userInfo.id,
                        username: userInfo.username,
                        fname: userInfo.fname,
                        status: [status.status, status.value]
                    };
                }else if(status.status === -1){
                    alert("UNKNOWN ERROR! (Contact Admin) \n Error code: " + status.status + ", " + status.value)
                }else{
                    return {
                        id: state.id,
                        username: state.username,
                        fname: state.fname,
                        status: [status.status, status.value]
                    };
                }
                return state
            }
        }
        case "CLEAR_STATUS": {
            return {
                id: state.id,
                username: state.username,
                fname: state.fname,
                status: null
            };
        }
        default:
            return state;
    }
}
