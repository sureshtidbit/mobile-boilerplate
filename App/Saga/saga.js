import { put, takeLatest, call, all } from 'redux-saga/effects';
import { GET, POST } from './service'
import { logout, goHomeScreen } from './auth'
function* CheckUserLoggedIn(props) {
    console.log('params==>>>', props)
    try {
        const json = yield GET('isLoggedIn')
        console.log('josin===>>>>>', json)
        if (json.status == 1001) {
            logout(props.payload)
        } else {
            yield put({ type: "SAVE_USER_INFO", payload: json });
            goHomeScreen(props.payload)
        }
    }
    catch (error) {
        logout(props.payload)
    }
}
function* fetchNews(props) {
    console.log('params==>>>', props)
    try {
        const json = yield GET('isLoggedIn')
        if (json.status == 1001) {
            logout(props.payload)
        } else {
            yield put({ type: "CURRENT_USER", payload: json, });
            yield put({ type: "LOADER_STOP", payload: false });
        }
    }
    catch (error) {
        yield put({ type: "LOADER_STOP", payload: false });
    }
}
function* MakeUserLogin(props) {
    console.log('params==>>>POST', props)
    try {
        yield put({ type: "LOADER_START", payload: true });
        const json = yield POST('login', props.payload.data)
        console.log('login -user', json)
        if (json.status == 1005 || json.err) {
            yield put({
                type: "ERROR_TOAST_SHOW", payload: {
                    message: 'your credentials are wrong!',
                    toast: true
                }
            });
        } else {
            yield put({
                type: "ERROR_TOAST_HIDE", payload: {
                    message: '',
                    toast: false
                }
            });
            yield put({ type: "SAVE_USER_INFO", payload: json, });
            yield goHomeScreen(props.payload.props)
            yield put({ type: "LOADER_STOP", payload: false });
        }
    }
    catch (error) {
        console.log('error===', error)
        yield put({ type: "LOADER_STOP", payload: false });
        yield put({
            type: "ERROR_TOAST_SHOW", payload: {
                message: 'Oops! Internal server error!',
                toast: true
            }
        });
    }
}

function* HideToaster() {
    yield put({
        type: "ERROR_TOAST_HIDE", payload: {
            message: '',
            toast: false
        }
    });
}

function* LogoutThisUser(props) {
    console.log('logout', props)
    yield put({
        type: "ERROR_TOAST_HIDE", payload: {
            message: '',
            toast: false
        }
    });
    yield put({ type: "LOADER_STOP", payload: false });
    try {
        const json = yield GET(props.payload.API)
        console.log('josin logout', json)
        logout(props.payload.props)
    }
    catch (error) {
        logout(props.payload.props)
    }
}

function* ForgotPasswordMethod(props) {
    console.log('params==>>>forgot', props)
    try {
        yield put({ type: "LOADER_START", payload: true });
        const json = yield POST('forgotPass', props.payload.data)
        console.log('login -user', json)
        if (json.success == false) {
            yield put({
                type: "ERROR_TOAST_SHOW", payload: {
                    message: json.errors.error,
                    toast: true
                }
            });
        } else {

        }
        // if (json.status == 1005 || json.err) {
        //     yield put({
        //         type: "ERROR_TOAST_SHOW", payload: {
        //             message: 'your credentials are wrong!',
        //             toast: true
        //         }
        //     });
        // } else {
        //     yield put({
        //         type: "ERROR_TOAST_HIDE", payload: {
        //             message: '',
        //             toast: false
        //         }
        //     });
        // yield put({ type: "SAVE_USER_INFO", payload: json, });
        // yield goHomeScreen(props.payload.props)
        yield put({ type: "LOADER_STOP", payload: false });
        // }
    }
    catch (error) {
        console.log('error===', error)
        yield put({ type: "LOADER_STOP", payload: false });
        yield put({
            type: "ERROR_TOAST_SHOW", payload: {
                message: 'Oops! Internal server error!',
                toast: true
            }
        });
    }
}
function* SaveUserDetails(props) {
    yield put({ type: "SAVE_USER_INFO", payload: props.payload });
}
function* SaveUserInfo() {
    yield takeLatest("SAVE_USER", SaveUserDetails);
}
function* isUserLoggedIn() {
    yield takeLatest('IS_USER_LOGGED_IN', CheckUserLoggedIn)
}
function* userInfo() {
    yield takeLatest('LOADER_START', fetchNews)
}
function* loginAction() {
    yield takeLatest('USER_LOGIN_ACTION', MakeUserLogin)
}
function* HideErrorToaster() {
    yield takeLatest('ERROR_TOASTER', HideToaster)
}
function* LogoutUser() {
    yield takeLatest('LOGOUT_USER', LogoutThisUser)
}
function* ForgotPassword() {
    yield takeLatest('FORGOT_PASSWORD_ACTION', ForgotPasswordMethod)
}

export default function* rootSaga() {
    yield all([
        userInfo(),
        isUserLoggedIn(),
        loginAction(),
        HideErrorToaster(),
        LogoutUser(),
        SaveUserInfo(),
        ForgotPassword()
    ]);
}