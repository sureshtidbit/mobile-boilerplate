import { NavigationActions, withNavigation } from 'react-navigation';
const INITIAL_STATE = {
    currentUser: {},
    isLoggingIn: false,
    loading: false
};

const AuthReducer = (state = INITIAL_STATE, action) => {
    // reducer implementation
    console.log(action.type, action)
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
        case 'LOADER_START':
            return {
                ...state,
                loading: action.payload
            };
        case 'LOADER_STOP':
                // this.props.navigation.navigate('IsLoggedIn')
            NavigationActions.navigate({ routeName: 'IsLoggedIn' });
            return state;
        // return {
        //     ...state,
        //     loading: action.payload
        // };
        default:
            return state;
    };
}
export default AuthReducer;