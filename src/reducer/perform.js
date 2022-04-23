
const initState = {
    loading: false,
    users: [],
    error: "",
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SUCCESS":
            return {
                loading: true,
                users: action.payload,
                error: ""
            }
        case "REQ":
            return {
                ...state,
                loading: true
            };
        case "ERROR":
            return {
                loading: false,
                users:[],
                error:action.payload
            };
        default:
            return state;
    }
}

export default reducer;