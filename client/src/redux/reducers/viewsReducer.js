const initialState = {
    page: 1
};

export default function(state = initialState, action) {
    switch(action.type) {
        case "SET_PAGE": {
            return {
                page: action.payload
            }
        }
        default:
            return state;
    }
}
