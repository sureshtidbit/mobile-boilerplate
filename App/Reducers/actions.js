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
export const ForgotPasswordAction = (payload) => ({
    type: 'FORGOT_PASSWORD_ACTION',
    payload: payload
});
export const UploadUserPicAction = (payload) => ({
    type: 'USER_PIC_ACTION',
    payload: payload
});
export const SaveUserInfoAction = (payload) => ({
    type: 'USER_SAVE_INFO_ACTION',
    payload: payload
});