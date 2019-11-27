export const CurrentUser = (payload) => ({
    type: 'CURRENT_USER',
    payload: payload
});
export const Loading = (payload) => ({
    type: 'LOADER_START',
    payload: payload
});
export const logoutUser = (payload) => ({
    type: 'LOGOUT_USER'
});