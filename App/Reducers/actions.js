export const CurrentUser = (payload) => ({
    type: 'CURRENT_USER',
    payload: payload
});
export const logoutUser = (payload) => ({
    type: 'LOGOUT_USER'
});