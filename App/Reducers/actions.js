export const IsUserLoggedIn = (payload) => ({
    type: 'IS_USER_LOGGED_IN',
    payload: payload
});
export const CurrentUser = (payload) => ({
    type: 'CURRENT_USER',
    payload: payload
});
export const SaveUserInfo = (payload) => ({
    type: 'SAVE_USER',
    payload: payload
});
export const Loading = (payload) => ({
    type: 'LOADER_START',
    payload: payload
});
export const logoutUser = (payload) => ({
    type: 'LOGOUT_USER',
    payload: payload
});
export const loginAction = (payload) => ({
    type: 'USER_LOGIN_ACTION',
    payload: payload
});
export const ErrorToasterHide = () => ({
    type: 'ERROR_TOASTER'
});