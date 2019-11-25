export const CurrentUser = (payload) => ({
    type: 'CURRENT_USER',
    payload: payload
});
export const Loading = (payload) => ({
    type: 'LOADER_START',
    payload: '12345'
});
export const logoutUser = (payload) => ({
    type: 'LOGOUT_USER'
});