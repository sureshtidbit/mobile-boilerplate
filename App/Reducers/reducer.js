const INITIAL_STATE = {
    currentUser: {},
    isLoggingIn: false
};

 const AuthReducer = (state = INITIAL_STATE, action) => {
    // reducer implementation
    console.log(action.type,action)
    switch (action.type) {
        case 'CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
            case 'LOGOUT_USER':
            return {
                ...state,
                currentUser: {}
            };
        default:
            return state;
    };
}
export default AuthReducer;