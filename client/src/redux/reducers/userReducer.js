const initialState = {
    id: null,
    username: '',
    fname: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case "USER_LOGIN": {
            if (action.error) {
                alert("Error logging in!! Please retry later.")
                return initialState;
            } else {
                const userInfo = action.payload.data;
                return {
                    id: userInfo.id,
                    username: userInfo.username,
                    fname: userInfo.fname
                };
            }
        }
        default:
            return state;
    }
}
